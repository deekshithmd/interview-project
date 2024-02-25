import { useNavigate } from "react-router-dom";
export default function AuthPage() {
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
    </div>
  );
}
