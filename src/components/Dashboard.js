import React from 'react';
import SideBar from './SideBar';
import DashboardContent from './DashboardContent';
import '../css/dashboard.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Dashboard() {
  const navigate = useNavigate();
  const isLogged = Boolean(localStorage.getItem('isLogged'));
  if(!isLogged) {
    return <Navigate to={"/login"} />
  }

  return (
    <div className="d-flex h-100">
        <SideBar />
        <DashboardContent />
    </div>
  );
}

export default Dashboard;
