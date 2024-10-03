import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <ul className="menu">
        <li>
          <Link to="/dashboard/">Options</Link>
        </li>
        <li>
          <Link to="/dashboard/stats">stats</Link>
        </li>
        <li>
          <Link to="/dashboard/parametres">parametres</Link>
        </li>
      </ul>
      {/** Outlet est comme un template,on voudra dire que les elements des nested routes a afficher seront affichés la ou il y a outlet  */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
