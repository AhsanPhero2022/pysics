import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Layout/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home/Home.jsx";
import Course from "./components/Course.jsx";

import CourseAvailable from "./components/CourseAvailable.jsx";
import CourseInfo from "./components/Home/CourseInfo.jsx";
import Vector from "./components/Vector.jsx";
import Lecture from "./components/Lecture.jsx";
import DemoLecture from "./components/DemoLecture.jsx";
import YouTube from "./components/YouTube.jsx";
import AuthProvider from "./components/Provider/Provider.jsx";
import PrivateRoute from "./components/Private/PrivateRoute.jsx";
import AllUsers from "./components/AllUsers/AllUsers.jsx";
import AddCourse from "./components/CRUD/AddCourse.jsx";
import AllCourses from "./components/CRUD/AllCourses.jsx";
import CourseUpdate from "./components/CRUD/CourseUpdate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/course",
        element: <Course></Course>,
      },
      {
        path: "/demoLecture",
        element: <DemoLecture></DemoLecture>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courseAvailable",
        element: (
          <PrivateRoute>
            <CourseAvailable></CourseAvailable>
          </PrivateRoute>
        ),
        // loader: () => fetch("courses.json"),
      },
      {
        path: "/courseInfo/:id",
        element: <CourseInfo></CourseInfo>,
        loader: ({ params }) => fetch(`/courses.json/${params.id}`),
      },
      {
        path: "/vector",
        element: <Vector></Vector>,
      },
      {
        path: "/lecture",
        element: <Lecture></Lecture>,
      },
      {
        path: "/youtube",
        element: <YouTube></YouTube>,
      },
      {
        path: "/allUser",
        element: (
          <PrivateRoute>
            <AllUsers></AllUsers>
          </PrivateRoute>
        ),
      },
      {
        path: "/addCourse",
        element: <AddCourse></AddCourse>,
      },
      {
        path: "/allCourses",
        element: <AllCourses></AllCourses>,
      },
      {
        path: "/courseUpdate/:id",
        element: <CourseUpdate></CourseUpdate>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-7xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
