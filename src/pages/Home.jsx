import { useState , useRef ,useEffect} from 'react'
import '../App.css'
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'
import SearchBar from '../components/SearchBar'
import { getTasks } from "../api/taskApi";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from '../context/ThemeContext';

function Home() {
 const { darkMode } = useTheme();
 const [tasks, setTasks] = useState([])
 const[searchQuery , setSearchQuery] = useState("")
 const[editingTask, setEditingTask]= useState(null);
 const form =useRef(null);
 const notify=(massage) => toast.success(massage);

 useEffect(()=>{
    async function fetchTasks(){
        try {
        const data = await getTasks();

        const formattedTasks = data.map((task) => ({
        id: task.id,
        title: task.todo,
        description: "",
        priority: "medium",
        category: "General",
        dueDate: "",
        completed: task.completed,
      }));

      setTasks(formattedTasks);
        } catch (error) {
      console.error("Error fetching tasks:", error);

    }
  }

  fetchTasks();
    }, []);


  
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
  
     <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-8 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">

  
    <TaskForm onAddTask={addTask}  editingTask={editingTask} onUpdateTask={updateTask} ref={form} notify={notify} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <TaskList  tasks={tasks} setTasks={setTasks} searchQuery={searchQuery} onDelete={deleteTask} onEdit={editTask} onComplete={complete} />
     <ToastContainer theme={darkMode ? "dark" : "light"} />
    </div>
    </div>
  );
}

export default Home;


