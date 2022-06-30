import Navbar from "../../components/navbar/Navbar";
import DashboardCategories from "@components/dashboard_categories/DashboardCategories";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <section className="dashboard">
      <Navbar />
      <h1>Dashboard</h1>
      <DashboardCategories />
    </section>
  );
}
