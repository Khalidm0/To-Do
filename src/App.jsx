import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import SearchBar from './components/SearchBar'

function App() {
 const [tasks, setTasks] = useState([])
 const[searchQuery , setSearchQuery] = useState("")
 const[editingTask, setEditingTask]= useState(null);
  
  function addTask(task) {
   
    const newTask = {
    id: Date.now(),
    title: task.title,
    description: task.description,
    priority: task.priority,
    category: task.category,
    dueDate: task.dueDate,
    completed:false,
    };
  
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id){
    setTasks(tasks.filter((task)=>task.id !== id)); 


  }

  function editTask(task){
    setEditingTask(task);

  } 

  function updateTask(updatedTask){
    setTasks(tasks.map((task)=> task.id == updatedTask.id ? updatedTask : task));
    setEditingTask(null);
  }

  function complete(id) {
  setTasks(
    tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
}
  
  return (
  
     <div className="min-h-screen bg-slate-100 p-8">
        <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8">
          To-Do List
        </h1>
  
    <TaskForm onAddTask={addTask}  editingTask={editingTask} onUpdateTask={updateTask}/>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <TaskList  tasks={tasks} searchQuery={searchQuery} onDelete={deleteTask} onEdit={editTask} onComplete={complete}/>
    </div>
    </div>
  );
}

export default App;


