import React from "react";
import { Route, Routes } from "react-router-dom";
// import LoginPage from '../app/admin/LoginPage';
import PublicLayout from "../layouts/dashboard/PublicLayout";
import Login from "../components/login/login";
import TeacherDashboardPage from "../app/teacher/pages/teacherdashboardpage";
import NoticeBoardPage from "../app/teacher/pages/noticeboardpage";
import StudentDashboardPage from "../app/student/pages/studentdashboardpage";
import LibraryPage from "../app/student/pages/librarypage";
import AssignmentPage from "../app/student/pages/assignmentpage";
import StudentNoticeBoardPage from "../app/student/pages/studentnoticeboardpage";
import EventPage from "../app/student/pages/eventpage";
import { role } from "../lib/utils";
import PreLogin from "../components/login/preLogin";

const CustomRouter = () => {
  // let role = "teacher";
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/pre" element={<PreLogin />} />

      {/* Dashboard layout with nested routes */}
      <Route path="/dashboard" element={<PublicLayout />}>
        {/* teacher routes */}

        {role === "teacher" ? (
          <>
            <Route path="/dashboard" element={<TeacherDashboardPage />} />
            <Route
              path="/dashboard/noticeboard"
              element={<NoticeBoardPage />}
            />
          </>
        ) : (
          // student routes
          <>
          <Route path="/dashboard" element={<StudentDashboardPage />} />
          <Route path="/dashboard/library" element={<LibraryPage />} />
          <Route path="/dashboard/assignment" element={<AssignmentPage />} />
          <Route path="/dashboard/noticeboard" element={<StudentNoticeBoardPage />} />
          <Route path="/dashboard/event" element={<EventPage />} />

          </>
        )}
      </Route>
    </Routes>
  );
};

export default CustomRouter;
