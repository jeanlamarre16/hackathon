import Home from "@pages/home/Home";
import Navbar from "@components/navbar/Navbar";
import AddProject from "@pages/add_project/AddProject";
import Project from "@pages/project/Project";
import Events from "@pages/events/Events";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/project" element={<Project />} />
          <Route path="/add-project" element={<AddProject />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
