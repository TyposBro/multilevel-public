import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/Privacy";

// --- START OF MODIFIED CODE ---
// Import manager components for nested routing
import Part1_1_Manager from "./components/Part1_1_Manager";
import Part1_2_Manager from "./components/Part1_2_Manager";
import Part2_Manager from "./components/Part2_Manager";
import Part3_Manager from "./components/Part3_Manager";
import WordBankManager from "./components/WordBankManager";
// --- END OF MODIFIED CODE ---

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  const { token } = useAuth();

  return (
    <div className="app-container">
      <Routes>
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/login" element={token ? <Navigate to="/admin" replace /> : <AdminLogin />} />

        {/* --- Protected Admin Routes --- */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* --- START OF MODIFIED CODE --- */}
          {/* Nested routes define what gets rendered inside the Dashboard's <Outlet> */}
          <Route index element={<Navigate to="part1.1" replace />} />
          <Route path="part1.1" element={<Part1_1_Manager />} />
          <Route path="part1.2" element={<Part1_2_Manager />} />
          <Route path="part2" element={<Part2_Manager />} />
          <Route path="part3" element={<Part3_Manager />} />
          <Route path="wordbank" element={<WordBankManager />} />
          {/* --- END OF MODIFIED CODE --- */}
        </Route>

        {/* --- Root and Catch-all Routes --- */}
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </div>
  );
}

export default App;
