import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiPurchaseTagAlt, BiDollar } from "react-icons/bi";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-wrapper">
      <div className="container p-4">
        <h2 className="text-center mt-4">
          Welcome to the Admin Dashboard
        </h2>
        <div className="row mt-4">
          <div className="col-sm-6 col-md-4">
            <div className="card text-center text-light bg-dark">
              <div className="card-body">
                <AiOutlineUser size={22} />
                <h3 className="card-title my-1">Total Users</h3>
                <p className="card-text">500</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card text-light text-center bg-dark">
              <div className="card-body">
                <BiPurchaseTagAlt size={22}/>
                <h3 className="card-title my-1">Total Orders</h3>
                <p className="card-text">1000</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="card text-light text-center bg-dark">
              <div className="card-body">
                <BiDollar size={22} />
                <h3 className="card-title my-1">Total Revenue</h3>
                <p className="card-text">$10,000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3>Recent Activity</h3>
          <ul className="list-group">
            <li className="list-group-item">User John Doe registered</li>
            <li className="list-group-item">
              Order #1234 placed by User Jane Smith
            </li>
            <li className="list-group-item">Product XYZ updated</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
