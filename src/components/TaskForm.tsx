import React, { useEffect, forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import TextInput from './TextInput';
import useTaskStore from '../store/TaskStore';
import { useTranslation } from "react-i18next";


const TaskForm = forwardRef(function TaskForm({ notify }: any, ref: any) {
    const {t} = useTranslation();


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

        

    const onSubmit = (data:any)=>{

      if(data.newCategory.trim() !== ""){
        data.category = data.newCategory;
      }
      delete data.newCategory;

      if (editingTask) {
          onUpdateTask({...data, id: editingTask.id,});
          notify(t("taskForm.updated"));
      }
      else{
        onAddTask(data);
        notify(t("taskForm.added"));
      }
        reset();
    }

   

    return (
      <div ref={ref} className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-700/70 dark:bg-slate-800/90">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              {editingTask ? t("taskForm.editTitle") : t("taskForm.addTitle")}
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {t("taskForm.subtitle")}
            </p>
          </div>

          <div className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
            {editingTask ?  t("taskForm.updating") :  t("taskForm.newTask")}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">

        <TextInput
          label={t("taskForm.title")}
          name="title"
          placeholder={t("taskForm.titlePlaceholder")}
          register={register}
          validation={{
            required:  t("taskForm.titleRequired"),
            maxLength: { value: 100, message: t("taskForm.titleMax") },
          }}
           error={errors.title}
        />
 
          <TextInput 
          label={t("taskForm.description")}
          name="description"
          placeholder={t("taskForm.descriptionPlaceholder")}
          register={register}
          validation={{
          maxLength:{
            value:500,
            message:t("taskForm.descriptionMax"),
          },
        }}
          error={errors.description}
          />
    

     

      <div>
      <label className="block mb-2 font-medium text-slate-800 dark:text-slate-200">{t("taskForm.dueDate")}</label>
        <input type="date"
        min={new Date().toISOString().split("T")[0]}
         className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
         {...register("dueDate")}/>
        </div>
        
       <div>
        <label className="block mb-2 font-medium text-slate-800 dark:text-slate-200">{t("taskForm.priority")}</label>
        <select className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
         {...register("priority", {
        required: t("taskForm.priorityRequired")
        })}>
            <option value="" className="dark:bg-slate-900">{t("taskForm.selectPriority")}</option>
            <option value="low" className="dark:bg-slate-900">{t("taskForm.low")}</option>
            <option value="medium" className="dark:bg-slate-900">{t("taskForm.medium")}</option>
            <option value="high" className="dark:bg-slate-900">{t("taskForm.high")}</option>
        </select>

       {errors.priority && (
        <p className="text-red-500 text-sm mt-1">
          {(errors.priority as any)?.message}
        </p>
      )}
    </div>

    <div>
         <label className="block mb-2 font-medium text-slate-800 dark:text-slate-200">{t("taskForm.category")}</label>
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
          {(errors.newCategory as any)?.message}
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
