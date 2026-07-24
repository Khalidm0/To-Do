import { useRef ,useEffect} from 'react'
import '../App.css'
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'
import SearchBar from '../components/SearchBar'
import { getTasks } from "../api/taskApi";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from '../context/ThemeContext';
import useTaskStore from '../store/TaskStore';

function Home() {
 const { darkMode } = useTheme();
 const form =useRef(null);
 const notify=(message) => toast.success(message);

 const setTasks = useTaskStore((state) => state.setTasks);
  const editingTask = useTaskStore((state) => state.editingTask);



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
  }, [setTasks]);

  useEffect(() => {
    if (editingTask) {
      form.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [editingTask]);


  
 
  return (
  
     <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-8 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">

  
    <TaskForm ref={form} notify={notify} />
    <SearchBar />
    <TaskList />
     <ToastContainer theme={darkMode ? "dark" : "light"} />
    </div>
    </div>
  );
}

export default Home;


