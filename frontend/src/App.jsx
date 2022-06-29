import Home from "@pages/Home";
import Navbar from "@components/Navbar";
import AddProject from "@pages/AddProject";
import Project from "@pages/Project";
import Events from "@pages/Events";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
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
