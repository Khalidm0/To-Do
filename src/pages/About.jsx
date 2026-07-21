function About() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-10 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-transparent dark:border-slate-800 rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
          About This Project
        </h1>

        <p className="text-slate-700 dark:text-slate-300 text-lg leading-8 text-center">
          This project is a React-based Task and Product Management application.
          It demonstrates React fundamentals including routing, reusable
          components, state management, API integration, dark mode styling, and dynamic routing
          using React Router.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
            🚀 Features
          </h2>

          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li>✅ Create, edit, delete, and complete tasks</li>
            <li>✅ Search tasks instantly</li>
            <li>✅ Dynamic task details page</li>
            <li>✅ Browse products from the DummyJSON API</li>
            <li>✅ Dynamic product details page</li>
            <li>✅ Responsive design with Tailwind CSS</li>
            <li>✅ Persistent Dark Mode support</li>
            <li>✅ Toast notifications</li>
            <li>✅ API requests using Axios</li>
        </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
            🛠 Technologies Used
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg p-4 text-center font-medium">
              React
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg p-4 text-center font-medium">
              React Router
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg p-4 text-center font-medium">
              Axios
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg p-4 text-center font-medium">
              Tailwind CSS
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg p-4 text-center font-medium">
              React Hook Form
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg p-4 text-center font-medium">
              DummyJSON API
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 dark:border-slate-800 pt-6 text-center text-slate-600 dark:text-slate-400">
          <p>
            Built to practice modern React development, component-based
            architecture, routing, and REST API integration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;