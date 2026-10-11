const StudentCard = ({ student, isFavourite, onAdd }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800">
        {student.name}
      </h2>

      <p className="mt-1 text-sm text-gray-500">{student.course}</p>
      <p className="mt-1 text-sm text-gray-500">Student ID: {student.id}</p>

      {/* Disable the button once this student is added */}
      <button
        onClick={() => onAdd(student)}
        disabled={isFavourite}
       className={`mt-4 w-full rounded-lg px-4 py-2 font-medium text-white transition ${
        isFavourite
        ? "cursor-not-allowed bg-stone-300 text-stone-600"
        : "bg-yellow-600 hover:bg-emerald-900"
        }`}
      >
        {isFavourite ? "Added to Favourites" : "Add to Favourite"}
      </button>
    </div>
  );
};

export default StudentCard;