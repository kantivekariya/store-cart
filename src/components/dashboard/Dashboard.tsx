import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Dashboard</div>
      <button onClick={() => navigate("/products-list")}>products-list</button>
    </>
  );
};

export default Dashboard;
