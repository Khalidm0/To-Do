import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle dark mode"
      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm border border-slate-300/40 hover:border-slate-300 dark:border-slate-700/60 dark:hover:border-slate-600 bg-white/10 hover:bg-white/20 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon */}
        <svg
          className={`w-5 h-5 text-amber-300 transition-all duration-300 transform ${
            darkMode ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0 absolute"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>

        {/* Moon Icon */}
        <svg
          className={`w-5 h-5 text-slate-100 transition-all duration-300 transform ${
            darkMode ? "opacity-0 rotate-90 scale-0 absolute" : "opacity-100 rotate-0 scale-100"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </svg>
      </div>
      <span className="hidden sm:inline font-medium">
        {darkMode ? "Dark" : "Light"}
      </span>
    </button>
  );
}

export default ThemeToggle;
