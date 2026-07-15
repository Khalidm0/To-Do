import React , {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import TextInput from './TextInput';

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

        <TextInput
          label="Title"
          name="title"
          placeholder="Enter task title"
          register={register}
          validation={{
            required: "Title is required",
            maxLength: { value: 100, message: "Title cannot exceed 100 characters" },
          }}
           error={errors.title}
        />
       
         
          <TextInput
          label="job"
          name="job"
          placeholder="enter job"
          register={register}
          validation={{
            required: "job is required",
            maxLength:{
              value:50,
              message:"job cannnot exceed 50 char"
            },
          }}
          error={errors.job}

          />
 
          <TextInput 
          label="description"
          name="description"
          placeholder="write a clear description"
          register={register}
          validation={{
          maxLength:{
            value:500,
            message:"description cano=not exceed 500 char",
          },
        }}
          error={errors.description}
          />
    

     

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