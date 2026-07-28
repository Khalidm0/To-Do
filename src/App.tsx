import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TaskDetails from "./pages/TaskDetails";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import ThemeToggle from "./components/ThemeToggle";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useTranslation } from "react-i18next";

function App() {
  const {t,i18n } = useTranslation();
  const changeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";

    i18n.changeLanguage(newLanguage);

    document.documentElement.dir =
      newLanguage === "ar" ? "rtl" : "ltr";
  };

  return (
      <>
    
      <nav className="bg-blue-800 dark:bg-slate-900 border-b border-transparent dark:border-slate-800/80 shadow-md transition-colors duration-300">
  <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
    <h1 className="text-2xl font-bold text-white">
      <Link to="/" className="hover:text-blue-200 dark:hover:text-blue-400 transition-colors duration-200">React App</Link>
    </h1>

    <div className="flex items-center gap-6">
      <Link
        to="/"
        className="text-white font-medium hover:text-blue-200 dark:hover:text-blue-400 transition-colors duration-200"
      >
        {t("nav.home")}
      </Link>

      <Link
        to="/products"
        className="text-white font-medium hover:text-blue-200 dark:hover:text-blue-400 transition-colors duration-200"
      >
        {t("nav.products")}
      </Link>

      <Link
        to="/about"
        className="text-white font-medium hover:text-blue-200 dark:hover:text-blue-400 transition-colors duration-200"
      >
        {t("nav.about")}
      </Link>

      <Link
        to="/login"
        className="text-white font-medium hover:text-blue-200 dark:hover:text-blue-400 transition-colors duration-200"
      >
        {t("nav.login")}
      </Link>
      <button
      onClick={changeLanguage}
      className="text-white font-medium cursor-pointer">
      {i18n.language === "en" ? "العربية" : "English"}
     </button>

      <ThemeToggle />
    </div>
  </div>
</nav>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/task/:id" element={<TaskDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products" element={<ProtectedRoutes><Products /></ProtectedRoutes>}/>
        <Route path="/products/:id" element={<ProductDetails/>} />

      </Routes>

      </>
  )
}
export default App;

