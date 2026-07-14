import { Reorder } from "framer-motion";

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
    className={`border rounded-xl p-5 shadow-sm  ${
      completed
        ? "bg-green-50 border-green-300 opacity-80"
        : "bg-white hover:shadow-lg"
    }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2
          className={`text-xl font-bold ${
            completed ? "line-through text-gray-500" : ""
          }`}
        >
          {title}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            priority === "high"
              ? "bg-red-100 text-red-700"
              : priority === "medium"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {priority}
        </span>
      </div>

      {/* Description */}
      {description && (
        <p className="text-gray-600 mt-3">{description}</p>
      )}

      {/* Info */}
      <div className="flex gap-6 mt-4 text-gray-500 text-sm">
        {category && <span>📂 {category}</span>}
        {dueDate && <span>📅 {dueDate}</span>}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => onComplete(task.id)}
          className={`px-4 py-2 rounded-lg text-white font-medium transition ${
            completed
              ? "bg-gray-500 hover:bg-gray-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {completed ? "↩ Undo" : "✓ Complete"}
        </button>

        <button
          onClick={() => onEdit(task)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
        >
          ✏ Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          🗑 Delete
        </button>
      </div>
    </Reorder.Item>
  );
}

export default TaskItem;