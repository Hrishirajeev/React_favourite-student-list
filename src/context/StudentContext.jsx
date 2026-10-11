import { createContext, useContext, useEffect, useState } from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  // Get the logged-in user's name
  const username = localStorage.getItem("loggedInUser");
  const storageKey = `favourites_${username}`;

  // Load this user's favourites
  const [favourites, setFavourites] = useState(function () {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  });

  // Save favourites whenever the list changes
  useEffect(function () {
    localStorage.setItem(storageKey, JSON.stringify(favourites));
  }, [favourites, storageKey]);

  // Add a student only if they aren't already added
  function addFavourite(student) {
    setFavourites(function (prev) {
      if (prev.some(function (item) {
        return item.id === student.id;
      })) {
        return prev;
      }

      return [...prev, student];
    });
  }

  // Remove a student by ID
  function removeFavourite(id) {
    setFavourites(function (prev) {
      return prev.filter(function (student) {
        return student.id !== id;
      });
    });
  }

  return (
    <StudentContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </StudentContext.Provider>
  );
}

// Access favourites from any component
export function useStudents() {
  return useContext(StudentContext);
}