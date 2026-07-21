import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-8 transition-colors duration-300">
      <h1 className="text-6xl font-bold text-slate-800 dark:text-slate-200 mb-4">404</h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">Page Not Found</p>
      <Link
        to="/"
        className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-md"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound;