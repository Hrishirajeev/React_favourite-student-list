import { Link } from "react-router-dom";
import { useStudents } from "../context/StudentContext";
import Navbar from "../components/Navbar";

const FavouriteStudents = () => {
  const { favourites, removeFavourite } = useStudents();

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-8 sm:px-10">
      <header className="mx-auto mb-8 flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            My Favourite Students
          </h1>
          <p className="mt-2 text-slate-500">
            Your selected students appear here.
          </p>
        </div>

        <Link
          to="/"
          className="rounded-lg bg-indigo-600 px-5 py-3 text-center font-medium text-white transition hover:bg-indigo-700"
        >
          Back to Student List
        </Link>
      </header>

      {/* Show a message when no students have been selected */}
      {favourites.length === 0 ? (
        <p className="mx-auto max-w-6xl rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
          No favourite students added yet.
        </p>
      ) : (
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {favourites.map((student) => (
            <article
              key={student.id}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-800">
                {student.name}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {student.course}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Student ID: {student.id}
              </p>

              {/* Remove the student from the shared favourites list */}
              <button
                onClick={() => removeFavourite(student.id)}
                className="mt-4 w-full rounded-lg bg-rose-600 px-4 py-2 font-medium text-white transition hover:bg-rose-700"
              >
                Remove Favourite
              </button>
            </article>
          ))}
        </section>
      )}
    </main>
  );
};

export default FavouriteStudents;