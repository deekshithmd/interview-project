import { Link, Outlet } from "react-router-dom";
export default function LandingPage() {
  return (
    <div>
      <Link to="/auth" className="underline text-blue-700">
        Auth
      </Link>
      <h1 className="text-2xl text-red-500">Landing Page edit</h1>
      <Outlet />
    </div>
  );
}
