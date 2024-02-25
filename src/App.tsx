import { useEffect } from 'react';
import AuthPage from "./pages/AuthPage";
import FirstPage from "./pages/FirstPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import SecondPage from "./pages/SecondPage";
import { bfunction1,afunction1,cfunction1 } from './services/api.service';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "auth",
    element: <AuthPage />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "first",
    element: <FirstPage />,
  },
  {
    path: "second",
    element: <SecondPage />,
  },
]);

function App() {
  useEffect(()=>{
afunction1();
bfunction1();
cfunction1();
  },[])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
