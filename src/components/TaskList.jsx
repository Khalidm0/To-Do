import TaskItem from "./TaskItem";
import { Reorder } from "framer-motion";

function TaskList({
  tasks,
  setTasks,
  searchQuery,
  onDelete,
  onEdit,
  onComplete,
}) {
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-slate-800 border border-transparent dark:border-slate-700/80 rounded-xl shadow-md p-6 mt-8 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Tasks</h2>

      {filteredTasks.length === 0 ? (
        <div className="text-center py-10 text-slate-500 dark:text-slate-400">
          <p className="text-lg font-medium">📭 No tasks yet</p>
          <p className="text-sm mt-2">
            Add your first task using the form above.
          </p>
        </div>
      ) : (
        <Reorder.Group
          axis="y"
          values={tasks}
          onReorder={setTasks}
          className="flex flex-col gap-5"
        >
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onEdit={onEdit}
              onComplete={onComplete}
            />
          ))}
        </Reorder.Group>
      )}
    </div>
  );
}

export default TaskList;