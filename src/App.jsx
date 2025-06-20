import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import FAQ from "./pages/FAQ";
// import PrivacyPolicy from "./pages/PrivacyPolicy"; // Uncommented this

// Import uploader components for nested routing
import Part1_1_Uploader from "./components/Part1_1_Uploader";
import Part1_2_Uploader from "./components/Part1_2_Uploader";
import Part2_Uploader from "./components/Part2_Uploader";
import Part3_Uploader from "./components/Part3_Uploader";

// This component now specifically wraps the Dashboard.
// If the user is not authenticated, they are sent to the login page.
const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  const { token } = useAuth(); // We get the token here to decide the root path's destination

  return (
    <div className="app-container">
      <Routes>
        {/* --- Public Routes --- */}
        {/* These routes are always accessible, regardless of login status. */}
        <Route path="/faq" element={<FAQ />} />
        {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}

        {/* --- Authentication Route --- */}
        {/* If a logged-in user tries to go to /login, redirect them to the admin dashboard.
            If they are not logged in, show the login page. */}
        <Route path="/login" element={token ? <Navigate to="/admin" replace /> : <AdminLogin />} />

        {/* --- Protected Admin Routes --- */}
        {/* All routes starting with /admin are children of this main route.
            The `ProtectedRoute` wrapper ensures that if a user tries to access
            /admin, /admin/part1.1, etc., they must be logged in. */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* Nested routes define what gets rendered inside the Dashboard's <Outlet> */}
          <Route index element={<Navigate to="part1.1" replace />} /> {/* Default to part1.1 */}
          <Route path="part1.1" element={<Part1_1_Uploader />} />
          <Route path="part1.2" element={<Part1_2_Uploader />} />
          <Route path="part2" element={<Part2_Uploader />} />
          <Route path="part3" element={<Part3_Uploader />} />
        </Route>

        {/* --- Root and Catch-all Routes --- */}
        {/* If the user lands on the root "/", send them to the admin page (which will then
            be protected by the logic above). */}
        <Route path="/" element={<Navigate to="/admin" replace />} />

        {/* Any other path that doesn't match will also redirect to the admin page. */}
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </div>
  );
}

export default App;
