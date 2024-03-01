import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

export default function LandingPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start">
      <Navbar />
      <div className="h-full mt-16 flex flex-col items-center justify-center w-full bg-gray-200">
        <h1 className="text-blue-700 font-bold text-7xl mb-5 text-center">
          Interview Schedule
        </h1>
        <h3 className="text-blue-700 font-bold text-7xl text-center">
          made easy
        </h3>
      </div>
      <Outlet />
    </div>
  );
}
