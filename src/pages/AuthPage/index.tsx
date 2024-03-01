import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
export default function AuthPage() {
  const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/home");
  };
  return (
    <div>
      <h1>Auth Page</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">
          Email
          <input type="email" className="border" />
        </label>
        <label htmlFor="pass">
          Password
          <input type="password" className="border" />
        </label>
        <button type="submit">Login</button>
      </form>
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
    </div>
  );
}
