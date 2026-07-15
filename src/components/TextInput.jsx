function TaskInput({label,name,type="text",placeholder,register,error,validation}) {
    return (
        <div>

    <label className="block mb-2 font-medium">
        {label}
        {validation.required && (
        <span className="text-red-500 ml-1">*</span>
        )}
        </label>

        <input
        type={type}
        placeholder={placeholder}
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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