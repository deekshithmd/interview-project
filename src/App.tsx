import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "profile",
    element: <ProfilePage />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
