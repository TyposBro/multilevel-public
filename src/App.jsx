import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/Privacy";

// Import uploader components for nested routing
import Part1_1_Uploader from "./components/Part1_1_Uploader";
import Part1_2_Uploader from "./components/Part1_2_Uploader";
import Part2_Uploader from "./components/Part2_Uploader";
import Part3_Uploader from "./components/Part3_Uploader";
// --- START OF NEW CODE ---
import WordBankUploader from "./components/WordBankUploader"; // Import the new component
// --- END OF NEW CODE ---

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  const { token } = useAuth();

  return (
    <div className="app-container">
      <Routes>
        {/* ... (public and auth routes are unchanged) ... */}
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
          {/* Nested routes define what gets rendered inside the Dashboard's <Outlet> */}
          <Route index element={<Navigate to="part1.1" replace />} />
          <Route path="part1.1" element={<Part1_1_Uploader />} />
          <Route path="part1.2" element={<Part1_2_Uploader />} />
          <Route path="part2" element={<Part2_Uploader />} />
          <Route path="part3" element={<Part3_Uploader />} />
          {/* --- START OF NEW CODE --- */}
          <Route path="wordbank" element={<WordBankUploader />} />
          {/* --- END OF NEW CODE --- */}
        </Route>

        {/* --- Root and Catch-all Routes --- */}
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </div>
  );
}

export default App;
