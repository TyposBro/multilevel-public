import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Import uploader components for nested routing
import Part1_1_Uploader from "./components/Part1_1_Uploader";
import Part1_2_Uploader from "./components/Part1_2_Uploader";
import Part2_Uploader from "./components/Part2_Uploader";
import Part3_Uploader from "./components/Part3_Uploader";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* Nested routes for the dashboard content area */}
          <Route index element={<Navigate to="part1.1" replace />} /> {/* Default to part1.1 */}
          <Route path="part1.1" element={<Part1_1_Uploader />} />
          <Route path="part1.2" element={<Part1_2_Uploader />} />
          <Route path="part2" element={<Part2_Uploader />} />
          <Route path="part3" element={<Part3_Uploader />} />
        </Route>

        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
