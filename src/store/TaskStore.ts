import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTaskStore = create(
  persist(
    (set: any) => ({
      tasks: [],
      searchQuery: "",
      editingTask: null,

      setTasks: (tasks: any) => set({ tasks }),
      setSearchQuery: (searchQuery: any) => set({ searchQuery }),
      setEditingTask: (editingTask: any) => set({ editingTask }),

      addTask: (task: any) =>
        set((state: any) => ({
          tasks: [
            ...state.tasks,
            {
              ...task,
              id: Date.now(),
              completed: false,
            },
          ],
        })),

      deleteTask: (id: any) =>
        set((state: any) => ({
          tasks: state.tasks.filter((task: any) => task.id !== id),
        })),

      updateTask: (updatedTask: any) =>
        set((state: any) => ({
          tasks: state.tasks.map((task: any) =>
            task.id === updatedTask.id ? updatedTask : task
          ),
          editingTask: null,
        })),

      completeTask: (id: any) =>
        set((state: any) => ({
          tasks: state.tasks.map((task: any) =>
            task.id === id
              ? { ...task, completed: !task.completed }
              : task
          ),
        })),
    }),
    {
      name: "todo-storage",
    }
  )
);

export default useTaskStore;