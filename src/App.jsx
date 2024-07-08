import React from "react";
import Login from "./screens/Login";
import Teacher from "./screens/Teacher";
import { Routes, Route } from "react-router-dom";
import Ladingpage from "./screens/Ladingpage";
import Dashboard from "./screens/Dashboard";
import Students from "./screens/Students";
import Course from "./screens/Course";
import Profile from "./screens/Profile";
import Privacy from "./screens/Privacy";
import Help from "./screens/Help";
import Navbar from "./reusable component/Navbar";
import Homes from "./screens/Homes";
import Features from "./screens/Features";
import About from "./screens/About";
import GetinTouch from "./screens/GetinTouch";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Ladingpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/students" element={<Students />} />
      <Route path="/course" element={<Course />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/help" element={<Help />} />
      <Route path="/home" element={<Homes />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
      <Route path="/getintouch" element={<GetinTouch />} />
    </Routes>
  );
};

export default App;
