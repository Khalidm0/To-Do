function About() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_30%),linear-gradient(135deg,#f8fafc_0%,#eef2ff_100%)] px-4 py-10 text-slate-900 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.2),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_100%)] dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-xl shadow-slate-200/60 backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/80 dark:shadow-slate-950/30 sm:p-10 lg:p-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            About this app
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            A clean way to manage tasks.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            This project brings together task organization, product browsing, and modern React patterns in one simple experience. It highlights reusable components, route-based navigation, API integration, and a polished dark mode interface.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/70">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              ✨ What it offers
            </h2>
            <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-300">
              <li>• Create, edit, delete, and complete tasks</li>
              <li>• Search tasks instantly with a focused UI</li>
              <li>• Open detailed task and product pages dynamically</li>
              <li>• Enjoy responsive layouts and persistent dark mode</li>
              <li>• Receive helpful toast feedback while interacting</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/70">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              🛠 Built with
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {['React', 'React Router', 'Axios', 'Tailwind CSS', 'React Hook Form', 'DummyJSON API'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50/70 p-6 text-slate-700 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-slate-300">
          <p className="text-lg leading-8">
            Built as a practical learning project for modern React development, clean component structure, routing, and REST API integration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;