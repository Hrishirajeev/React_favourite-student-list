import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Get existing users before adding the new one
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.username === username)) {
      setError("Username already exists.");
      return;
    }

    localStorage.setItem(
      "users",
      JSON.stringify([...users, { username, password }])
    );

    // Send the user to Login after successful signup
    navigate("/login");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-100 px-4">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-sm rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
      >
        <h1 className="text-3xl font-bold text-stone-800">Create account</h1>
        <p className="mt-2 text-stone-500">
          Join us to choose your favourite students.
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

          <input
            type="password"
            className="w-full rounded-lg border border-stone-300 p-3 outline-none focus:border-emerald-700"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </div>

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

        <button className="mt-5 w-full rounded-lg bg-emerald-800 p-3 font-semibold text-white hover:bg-emerald-900">
          Sign Up
        </button>

        <p className="mt-5 text-center text-sm text-stone-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-emerald-800 underline">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Signup;