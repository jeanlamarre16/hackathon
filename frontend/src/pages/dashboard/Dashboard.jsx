import Navbar from "@components/navbar/Navbar";
import DashboardCategories from "@components/dashboard_categories/DashboardCategories";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <header>
        <Navbar />;
      </header>
      <section className="dash-container">
        <DashboardCategories />
      </section>
    </>
  );
}
