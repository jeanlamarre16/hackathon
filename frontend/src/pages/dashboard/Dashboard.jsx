import DashboardCategories from "@components/dashboard_categories/DashboardCategories";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <DashboardCategories />
    </section>
  );
}
