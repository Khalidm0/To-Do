import { useState , useRef } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import SearchBar from './components/SearchBar'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
 const [tasks, setTasks] = useState([])
 const[searchQuery , setSearchQuery] = useState("")
 const[editingTask, setEditingTask]= useState(null);
 const form =useRef(null);
 const notify=(massage) => toast.success(massage);


  
  function addTask(task) {
    console.log("Adding task:", task);
   
    const newTask = {
    id: Date.now(),
    title: task.title,
    description: task.description,
    priority: task.priority,
    category: task.category,
    dueDate: task.dueDate,
    completed:false,
    };
  
      setTasks((prev) => [...prev, newTask]);
  }

  function deleteTask(id){
    setTasks(tasks.filter((task)=>task.id !== id)); 
    notify("Task is deleted");


  }

  function editTask(task){
    setEditingTask(task);
    form.current?.scrollIntoView({ behavior: "smooth" });

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
   notify("Task is completed");
}
  
  return (
  
     <div className="min-h-screen bg-slate-100 p-8">
        <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8">
          To-Do List
        </h1>
  
    <TaskForm onAddTask={addTask}  editingTask={editingTask} onUpdateTask={updateTask} ref={form} notify={notify} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <TaskList  tasks={tasks} setTasks={setTasks} searchQuery={searchQuery} onDelete={deleteTask} onEdit={editTask} onComplete={complete} />
     <ToastContainer />
    </div>
    </div>
  );
}

export default App;


