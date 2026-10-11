import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";

const App = () => (
  <StudentProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* These pages are available only after login */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<StudentList />} />
          <Route path="/favourites" element={<FavouriteStudents />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  </StudentProvider>
);

export default App;