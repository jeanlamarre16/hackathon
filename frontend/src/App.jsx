import Home from "@pages/home/Home";
import AddProject from "@pages/add_project/AddProject";
import Project from "@pages/project/Project";
import ProjectDetails from "@pages/project_details/ProjectDetails";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="div-container">
      <div>
        <Routes>
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project" element={<Project />} />
          <Route path="/add-project" element={<AddProject />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
