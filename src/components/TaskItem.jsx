

function TaskItem({task ,onDelete,onEdit , onComplete }) {
  const { title, description,dueDate, priority, category,completed} = task;

  return (

     <div className={`border rounded-xl p-5 shadow-sm transition duration-300 ${
    completed ? "bg-green-50 border-green-300 opacity-80": "bg-white hover:shadow-lg"
  }`}
>

      
      <div className="flex justify-between items-center">
        <h2
  className={`text-xl font-bold ${
    completed ? "line-through text-gray-500" : ""
  }`}
>
  {title}
</h2>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold
            ${
              task.priority === "High"
                ? "bg-red-100 text-red-700"
                : task.priority === "Medium"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }`}
        >
          {priority}
        </span>
      </div>

      {/* Description */}
      {description && (
        <p className="text-gray-600 mt-3">
          {description}
        </p>
      )}

      {/* Info */}
      <div className="flex gap-6 mt-4 text-gray-500 text-sm">

        {category && (
          <span>📂 {category}</span>
        )}

        {dueDate && (
          <span>📅 {dueDate}</span>
        )}

      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">

        <button onClick={()=>onComplete(task.id)}
          className={`px-4 py-2 rounded-lg text-white font-medium transition duration-300 ${
          task.completed
        ? "bg-gray-500 hover:bg-gray-600"
        : "bg-green-500 hover:bg-green-600"
    }`}
  >
    {task.completed ? "↩ Undo" : "✓ Complete"}
  </button>


        <button onClick={()=>onEdit(task)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
        >
          ✏ Edit
        </button>

        <button onClick={()=>onDelete(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          
        >
          🗑 Delete
        </button>

      </div>

    </div>
  );
}
export default TaskItem;