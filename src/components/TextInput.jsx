function TaskInput({label,name,type="text",placeholder,register,error,validation}) {
    return (
        <div>

    <label className="block mb-2 font-medium text-slate-800 dark:text-slate-200 capitalize">
        {label}
        {validation?.required && (
        <span className="text-red-500 ml-1">*</span>
        )}
        </label>

        <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        {...register(name, validation)}
        />

        {error && (
        <p className="text-red-500 text-sm mt-1">
            {error.message}
        </p>
      )}
      </div>
  );
}
export default TaskInput;