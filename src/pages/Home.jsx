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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_35%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] px-4 py-6 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.2),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_100%)] sm:px-6 lg:px-8 dark:text-slate-100 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="mt-8 space-y-6">
          <TaskForm ref={form} notify={notify} />
          <SearchBar />
          <TaskList />
        </div>

        <ToastContainer theme={darkMode ? "dark" : "light"} />
      </div>
    </div>
  );
}

export default Home;


