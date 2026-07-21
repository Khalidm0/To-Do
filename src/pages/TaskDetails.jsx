import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTaskById } from "../api/taskApi";


function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    async function fetchTask() {
      try {
        const data = await getTaskById(id);
        setTask(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTask();
  }, [id]);

  if (!task) {
    return (
      <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex items-center justify-center p-8 transition-colors duration-300">
        <h2 className="text-xl font-medium animate-pulse">Loading task details...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-8 transition-colors duration-300">
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-4">
          Task Details
        </h1>

        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-lg">
          <p><span className="font-semibold text-slate-900 dark:text-slate-100">ID:</span> {task.id}</p>
          <p><span className="font-semibold text-slate-900 dark:text-slate-100">Task:</span> {task.todo}</p>
          <p>
            <span className="font-semibold text-slate-900 dark:text-slate-100">Status:</span>{" "}
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              task.completed
                ? "bg-green-100 text-green-700 dark:bg-emerald-950/60 dark:text-emerald-300"
                : "bg-yellow-100 text-yellow-700 dark:bg-amber-950/60 dark:text-amber-300"
            }`}>
              {task.completed ? "Completed" : "Not Completed"}
            </span>
          </p>
          <p><span className="font-semibold text-slate-900 dark:text-slate-100">User ID:</span> {task.userId}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;