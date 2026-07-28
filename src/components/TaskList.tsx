import TaskItem from "./TaskItem";
import { Reorder } from "framer-motion";
import useTaskStore from "../store/TaskStore";

function TaskList() {
  const tasks=useTaskStore((state)=>state.tasks);
  const setTasks=useTaskStore((state)=>state.setTasks);
  const searchQuery=useTaskStore((state)=>state.searchQuery);

  const filteredTasks = tasks.filter((task: any) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const completedTasks = tasks.filter((task: any) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-700/70 dark:bg-slate-800/90">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Task list</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {tasks.length === 0 ? "Add your first task to get started." : `${filteredTasks.length} task${filteredTasks.length === 1 ? "" : "s"} visible`}
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="rounded-full bg-emerald-100 px-3 py-1 font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
            {completedTasks} done
          </span>
          <span className="rounded-full bg-amber-100 px-3 py-1 font-medium text-amber-700 dark:bg-amber-950/50 dark:text-amber-300">
            {pendingTasks} pending
          </span>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-12 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400">
          <p className="text-lg font-medium">📭 No tasks yet</p>
          <p className="mt-2 text-sm">Add your first task using the form above to start organizing your day.</p>
        </div>
      ) : filteredTasks.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-12 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400">
          <p className="text-lg font-medium">🔎 No matching tasks</p>
          <p className="mt-2 text-sm">Try a different keyword or clear the search field.</p>
        </div>
      ) : (
        <Reorder.Group
          axis="y"
          values={filteredTasks}
          onReorder={(nextTasks:any) => setTasks(nextTasks)}
          className="mt-6 flex flex-col gap-5"
        >
          {filteredTasks.map((task: any) => (
            <TaskItem
              key={task.id}
              task={task}
            />
          ))}
        </Reorder.Group>
      )}
    </div>
  );
}

export default TaskList;
