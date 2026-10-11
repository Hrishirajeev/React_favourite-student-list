import { Link } from "react-router-dom";
import { students } from "../data/student";
import { useStudents } from "../context/StudentContext";
import StudentCard from "../components/StudentCard";
import Navbar from "../components/Navbar";

const StudentList = () => {
  const { favourites, addFavourite } = useStudents();

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-slate-50 px-5 py-8 sm:px-10">
      <header className="mx-auto mb-8 flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Favourite Students
          </h1>
          <p className="mt-2 text-slate-500">
            Choose the students you want to add to your favourites.
          </p>
        </div>

        <Link
          to="/favourites"
          className="rounded-lg bg-indigo-600 px-5 py-3 text-center font-medium text-white transition hover:bg-indigo-700"
        >
          View Favourites ({favourites.length})
        </Link>
      </header>

      {/* Display each student and check whether they are already a favourite */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            isFavourite={favourites.some(
              (item) => item.id === student.id
            )}
            onAdd={addFavourite}
          />
        ))}
      </section>
    </main>
    </>
  );
};

export default StudentList;