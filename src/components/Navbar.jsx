import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStudents } from "../context/StudentContext";

const Navbar = () => {
  const { favourites } = useStudents();
  const navigate = useNavigate();

  // Get the username saved during login
  const username = localStorage.getItem("loggedInUser");

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 bg-stone-50 px-5 py-4 sm:px-10">
      <Link to="/" className="text-xl font-bold text-emerald-700">
        favoritesArea
      </Link>

      <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
        {/* Greet the user who logged in */}
        <span className="text-stone-700">
          Hi, {username || "Student"}!
        </span>

        <NavLink to="/" className="text-stone-700 hover:text-emerald-800">
          Students
        </NavLink>

        <NavLink
          to="/favourites"
          className="text-stone-700 hover:text-emerald-800"
        >
          Favourites ({favourites.length})
        </NavLink>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-emerald-800 px-4 py-2 text-white hover:bg-emerald-900"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;