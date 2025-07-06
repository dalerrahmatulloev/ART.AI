import "./App.css";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Splash } from "./pages/Splash";
import Welcome from "./pages/Welcome";
import Auth from "./pages/Auth";
import CreateAcc from "./pages/CreateAcc";
import { Verification } from "./pages/Verification";

function App() {
  const [loading, setLoading] = useState(true);

  const router = createBrowserRouter([
    { path: "/", element: <Welcome /> },
    { path: "/auth", element: <Auth /> },
    { path: "/create-account", element: <CreateAcc /> },
    { path: "/verification", element: <Verification />},
  ]);

  useEffect(() => {
    // имитируем загрузку, например, 2 секунды
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Splash />;

  return <RouterProvider router={router} />;
}

export default App;
