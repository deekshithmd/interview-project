import { Link, Outlet } from "react-router-dom";
export default function LandingPage() {
  return (
    <div>
      <Link to="/auth">Auth</Link>
      <h1>Landing Page edit</h1>
      <Outlet />
    </div>
  );
}
