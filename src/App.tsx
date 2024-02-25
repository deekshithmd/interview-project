import AuthPage from "./pages/AuthPage";
import FirstPage from "./pages/FirstPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import SecondPage from "./pages/SecondPage";

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
console.log('h)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
