import { useAuth0 } from "@auth0/auth0-react";
import { Link, Outlet } from "react-router-dom";
export default function LandingPage() {
  const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();
  console.log("connected", user);
  return (
    <div>
      <Link to="/auth" className="underline text-blue-700">
        Auth
      </Link>
      <h1 className="text-2xl text-red-500">Landing Page edit</h1>
      {!isAuthenticated ? (
        <button className="border" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      ) : (
        <div>
          <img src={user?.picture} className="h-10 w-10 rounded-full" />
          <button
            className="border"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      )}
      <Outlet />
    </div>
  );
}
