import {create} from "zustand";


const useTaskStore=create((set)=>({
    tasks:[],
    searchQuery: "",
    editingTask: null,

    setTasks:(tasks)=>set({tasks}),
    setSearchQuery:(searchQuery)=>set({searchQuery}),
    setEditingTask:(editingTask)=>set({editingTask}),

    addTask: (task) =>set((state) => ({tasks: [...state.tasks,{...task,id: Date.now(),completed: false,},],})),
    deleteTask: (id) =>set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
    updateTask: (updatedTask) =>set((state) => ({tasks: state.tasks.map((task) =>task.id === updatedTask.id ? updatedTask : task),  editingTask: null,})),
    completeTask: (id) =>set((state) => ({tasks: state.tasks.map((task) =>task.id === id ? { ...task, completed: !task.completed } : task),})),

    }));

    export default useTaskStore; 