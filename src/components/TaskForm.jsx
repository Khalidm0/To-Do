import React, { useEffect, forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import TextInput from './TextInput';
import useTaskStore from '../store/TaskStore';

const TaskForm = forwardRef(function TaskForm({ notify }, ref) {

    const onAddTask=useTaskStore((state)=>state.addTask); 
    const onUpdateTask=useTaskStore((state)=>state.updateTask);
    const editingTask=useTaskStore((state)=>state.editingTask);

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
      <div ref={ref} className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-700/70 dark:bg-slate-800/90">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              {editingTask ? "Edit task" : "Add a new task"}
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Capture the details, set a due date, and keep your plan moving.
            </p>
          </div>

          <div className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
            {editingTask ? "Updating" : "New task"}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">

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
      <label className="block mb-2 font-medium text-slate-800 dark:text-slate-200">Due Date</label>
        <input type="date"
        min={new Date().toISOString().split("T")[0]}
         className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
         {...register("dueDate")}/>
        </div>
        
       <div>
        <label className="block mb-2 font-medium text-slate-800 dark:text-slate-200">Priority</label>
        <select className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
         {...register("priority", {
        required: "priority is requierd "
        })}>
            <option value="" className="dark:bg-slate-900">Select priority</option>
            <option value="low" className="dark:bg-slate-900">Low</option>
            <option value="medium" className="dark:bg-slate-900">Medium</option>
            <option value="high" className="dark:bg-slate-900">High</option>
        </select>

       {errors.priority && (
        <p className="text-red-500 text-sm mt-1">
          {errors.priority.message}
        </p>
      )}
    </div>

    <div>
         <label className="block mb-2 font-medium text-slate-800 dark:text-slate-200">Category</label>
         <select 
          className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          {...register("category")}>
            <option value="" className="dark:bg-slate-900">Select category </option>
            <option value="study" className="dark:bg-slate-900">study</option>
            <option value="work" className="dark:bg-slate-900">work</option>
            <option value="others" className="dark:bg-slate-900">others</option>
         </select>

         <input type="text" placeholder="Or create new category" className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
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

    <button type="submit" className="w-full rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-400 dark:hover:to-indigo-400">
      {editingTask ? "Update Task" : "Add Task"}
    </button>
        </form>
      </div>
    );
});

export default TaskForm;