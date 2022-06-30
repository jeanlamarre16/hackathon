import Home from "@pages/home/Home";
import Navbar from "@components/navbar/Navbar";
import AddProject from "@pages/add_project/AddProject";
import Project from "@pages/project/Project";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/add-project" element={<AddProject />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
