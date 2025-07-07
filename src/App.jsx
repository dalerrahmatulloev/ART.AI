import "./App.css";
import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Auth from "./pages/Auth";
import CreateAcc from "./pages/CreateAcc";
import { Verification } from "./pages/Verification";
import { Home } from "./pages/Home";
import Splash from "./pages/Splash";
import NotFound from "./pages/NotFound";
import { Projects } from "./pages/Projects";

function App() {
  const [loading, setLoading] = useState(true);

  const router = createBrowserRouter([
    { path: "/", element: <Welcome /> },
    { path: "/auth", element: <Auth /> },
    { path: "/create-account", element: <CreateAcc /> },
    { path: "/verification", element: <Verification /> },
    { path: "/home", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "*", element: <NotFound /> },
  ]);

  useEffect(() => {
    const hasShownSplash = localStorage.getItem("splashShown");

    if (!hasShownSplash) {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("splashShown", "true");
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <Splash />;

  return <RouterProvider router={router} />;
}

export default App;
