import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "@/views/Login";
import NavBar from "@/components/LavBar";
import Boards from "@/views/Boards";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/boards" element={<Boards />} />
      </Routes>
    </div>
  );
}

export default App;
