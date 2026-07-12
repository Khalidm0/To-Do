import TaskItem from './TaskItem';

function TaskList({tasks,searchQuery, onDelete , onEdit , onComplete }) {
    const filteredTasks = tasks.filter((task) =>  task.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()));

        const groupedTasks= filteredTasks.reduce((acc,task)=>{
         if(!acc[task.category])
          {acc[task.category]=[];}

         acc[task.category].push(task);
         return acc;

        },{});

  return (
     <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">Tasks</h2>

      {tasks.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <p className="text-lg">📭 No tasks yet</p>
          <p className="text-sm mt-2">
            Add your first task using the form above.
          </p>
        </div>
      ) : (

        <div className="space-y-8">
  {Object.entries(groupedTasks).map(([category, tasks]) => (
    <div key={category}>
      <h3 className="text-xl font-bold mb-4 border-b pb-2">
        📂 {category}
      </h3>
        <div className="grid gap-5">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
            onComplete={onComplete}
          />
       ))}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
}
export default TaskList;