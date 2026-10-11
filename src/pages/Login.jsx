import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // Check the registered users saved during signup
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userFound = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      // Remember who logged in and open the student list
      localStorage.setItem("loggedInUser", username);
      navigate("/");
    } else {
      setError("Account not found. Please sign up first.");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-100 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
      >
        <h1 className="text-3xl font-bold text-stone-800">Welcome back!</h1>
        <p className="mt-2 text-stone-500">
          Login to view your favourite students.
        </p>

        <div className="mt-6 space-y-4">
          <input
            className="w-full rounded-lg border border-stone-300 p-3 outline-none focus:border-emerald-700"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />

          <input
            type="password"
            className="w-full rounded-lg border border-stone-300 p-3 outline-none focus:border-emerald-700"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

        <button className="mt-5 w-full rounded-lg bg-emerald-800 p-3 font-semibold text-white hover:bg-emerald-900">
          Login
        </button>

        <p className="mt-5 text-center text-sm text-stone-600">
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold text-emerald-800 underline">
            Sign up
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;