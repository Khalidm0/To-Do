import { Reorder } from "framer-motion";
import {Link} from 'react-router-dom'

function TaskItem({ task, onDelete, onEdit, onComplete }) {
  const {
    title,
    description,
    dueDate,
    priority,
    category,
    completed,
  } = task;

  return (
    <>
    <Reorder.Item
    value={task}
    layout
    drag="y"
    dragElastic={0.08}
    dragMomentum={false}
    layout
    layoutScroll
    initial={{
      opacity: 0,
      y: 20,
      scale: 0.96,
      }}

    animate={{
    opacity: 1,
    y: 0,
    scale: 1,
    }}
    exit={{
      opacity: 0,
      scale: 0.9,
      y: -10,
    }}
      whileHover={{
        scale: 1.015,
        y: -2,
      }}
      whileTap={{
        scale: 0.99,
      }}
      whileDrag={{
        scale: 1.04,
        rotate: 1,
        zIndex: 999,
        cursor: "grabbing",
        boxShadow: "0px 25px 45px rgba(0,0,0,0.25)",
      }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 40,
        mass: 0.45,
      }}
    className={`border rounded-xl p-5 shadow-sm transition-colors duration-200 ${
      completed
        ? "bg-green-50/80 border-green-300 dark:bg-emerald-950/40 dark:border-emerald-800/60 opacity-80"
        : "bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800 hover:shadow-lg dark:hover:border-slate-700"
    }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2
          className={`text-xl font-bold ${
            completed ? "line-through text-slate-400 dark:text-slate-500" : "text-slate-900 dark:text-slate-100"
          }`}
        >
          {title}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${
            priority === "high"
              ? "bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300 dark:border dark:border-red-800/50"
              : priority === "medium"
              ? "bg-yellow-100 text-yellow-700 dark:bg-amber-950/60 dark:text-amber-300 dark:border dark:border-amber-800/50"
              : "bg-green-100 text-green-700 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border dark:border-emerald-800/50"
          }`}
        >
          {priority}
        </span>
      </div>

      {/* Description */}
      {description && (
        <p className="text-slate-600 dark:text-slate-300 mt-3">{description}</p>
      )}

      {/* Info */}
      <div className="flex gap-6 mt-4 text-slate-500 dark:text-slate-400 text-sm">
        {category && <span>📂 {category}</span>}
        {dueDate && <span>📅 {dueDate}</span>}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-3 mt-6">
        <button
          onClick={() => onComplete(task.id)}
          className={`px-4 py-2 rounded-lg text-white font-medium transition cursor-pointer ${
            completed
              ? "bg-slate-500 hover:bg-slate-600 dark:bg-slate-700 dark:hover:bg-slate-600"
              : "bg-green-600 hover:bg-green-700 dark:bg-emerald-600 dark:hover:bg-emerald-500"
          }`}
        >
          {completed ? "↩ Undo" : "✓ Complete"}
        </button>

        <button
          onClick={() => onEdit(task)}
          className="bg-yellow-500 hover:bg-yellow-600 dark:bg-amber-600 dark:hover:bg-amber-500 text-white px-4 py-2 rounded-lg transition cursor-pointer"
        >
          ✏ Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500 text-white px-4 py-2 rounded-lg transition cursor-pointer"
        >
          🗑 Delete
        </button>
        <Link
          to={`/task/${task.id}`}
          className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium transition-colors border border-slate-200 dark:border-slate-700"
        >
          Details
        </Link>
      </div>
    </Reorder.Item>
    </>
  );
}

export default TaskItem;