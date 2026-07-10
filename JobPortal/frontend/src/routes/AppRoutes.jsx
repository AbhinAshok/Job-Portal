import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import CandidateLayout from "../layouts/CandidateLayout";

import ProtectedRoute from "./ProtectedRoute";

// Auth Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// Candidate Pages
import Dashboard from "../pages/candidate/Dashboard";
import Profile from "../pages/candidate/Profile";
import Jobs from "../pages/candidate/Jobs";
import JobDetail from "../pages/candidate/JobDetail";
import SavedJobs from "../pages/candidate/SavedJobs";
import Applications from "../pages/candidate/Applications";
import Interviews from "../pages/candidate/Interviews";
import Notifications from "../pages/candidate/Notifications";
import RecommendedJobs from "../pages/candidate/RecommendedJobs";

// Recruiter Pages
import ATSBoard from "../pages/recruiter/ATSBoard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication Routes */}
        <Route element={<AuthLayout />}>
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />
        </Route>

        {/* Candidate Routes */}
        <Route
          element={
            <ProtectedRoute>
              <div style={{ color: "white", padding: "20px" }}>
                Protected Route Works
              </div>
            </ProtectedRoute>
          }
        >
          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/jobs"
            element={<Jobs />}
          />

          <Route
            path="/jobs/:id"
            element={<JobDetail />}
          />

          <Route
            path="/saved-jobs"
            element={<SavedJobs />}
          />

          <Route
            path="/applications"
            element={<Applications />}
          />

          <Route
            path="/interviews"
            element={<Interviews />}
          />

          <Route
            path="/notifications"
            element={<Notifications />}
          />

          <Route
            path="/recommended-jobs"
            element={<RecommendedJobs />}
          />
        </Route>

        {/* Recruiter Routes */}
        <Route
          path="/recruiter/ats"
          element={
            <ProtectedRoute>
              <ATSBoard />
            </ProtectedRoute>
          }
        />

        {/* Fallback Route */}
        <Route
          path="*"
          element={
            <Navigate to="/login" />
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;