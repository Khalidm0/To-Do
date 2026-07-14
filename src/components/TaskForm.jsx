import React , {useEffect} from 'react';
import { useForm } from 'react-hook-form';

function TaskForm({onAddTask , editingTask, onUpdateTask ,ref , notify }) {

    const { register, handleSubmit,formState: {errors},reset,setValue} = useForm();

        useEffect(()=>{
            if(editingTask){
                setValue("title",editingTask.title);
                setValue("description", editingTask.description);
                setValue("priority",editingTask.priority);
                setValue("category",editingTask.category);
                setValue("dueDate",editingTask.dueDate);

            }},[editingTask,setValue]); 

        

    const onSubmit = (data)=>{

      if(data.newCategory.trim() !== ""){
        data.category = data.newCategory;
      }
      delete data.newCategory;

      if (editingTask) {
          onUpdateTask({...data, id: editingTask.id,});
          notify("Task is updated");
      }
      else{
        onAddTask(data);
        notify("Task is added ");
      }
        reset();
    }

   

    return (
       <>
      
        <div  ref={ref} className="bg-white rounded-xl shadow-md p-6 mb-8">
  <h2 className="text-2xl font-bold mb-6">Add New Task</h2>

  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        <div>
            <label className="block mb-2 font-medium">Title</label>

        <input type="text"
        placeholder="Enter task title"
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register("title",{
          required: "title is requeird ",
          maxLength: {value:100, message:"title can not excssed 100 char"}
        })}/>

         {errors.title && (<p className="text-red-500 text-sm mt-1">
          {errors.title.message}
        </p>
      )}
    </div>
         <div>
            <label className="block mb-2 font-medium">Job</label>

        <input type="text"
        placeholder="Enter task title"
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register("job",{
          required: "job is requeird ",
          maxLength: {value:50, message:"job can not excssed 50 char"}
        })}/>

         {errors.job && (<p className="text-red-500 text-sm mt-1">
          {errors.job.message}
        </p>
      )}
    </div>
  
    <div>
     <label className="block mb-2 font-medium">Description</label>
            
        <textarea 
        rows="4"
        placeholder="Enter task description..."
        className="w-full border rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" 
        {...register("description",{
        maxLength:{value:500,message:"description cannot exceed 500 characters " }

        })}/>
         {errors.description && (
        <p className="text-red-500 text-sm mt-1">
          {errors.description.message}
        </p>
      )}
    </div>

     

      <div>
      <label className="block mb-2 font-medium">Due Date</label>
        <input type="date"
        min={new Date().toISOString().split("T")[0]}
         className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
         {...register("dueDate")}/>
        </div>
        
       <div>
        <label className="block mb-2 font-medium">Priority</label>
        <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
         {...register("priority", {
        required: "priority is requierd "
        })}>
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>

       {errors.priority && (
        <p className="text-red-500 text-sm mt-1">
          {errors.priority.message}
        </p>
      )}
    </div>

    <div>
         <label className="block mb-2 font-medium">Category</label>
         <select 
          className="w-full border rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("category")}>
            <option value="">Select category </option>
            <option value="study">study</option>
            <option value="work">work</option>
            <option value="others">others</option>
         </select>

         <input type="text" placeholder="Or create new category"className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
         {...register("newCategory",{
            maxLength:{value:50, message:"category can not exceed 50 characters " }
            
         })}
         />
          {errors.newCategory && (
        <p className="text-red-500 text-sm mt-1">
          {errors.newCategory.message}
        </p>
      )}
    </div>

    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
      {editingTask ? "update Task" :"Add Task"}
      
    </button>
    


       
        </form>
        </div>
        </>
    );
}

export default TaskForm;