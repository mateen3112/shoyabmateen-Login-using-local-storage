import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import "./Dashboard.css";
import Aos from 'aos';
import "aos/dist/aos.css"
const Dashboard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const registeredUsers = JSON.parse(localStorage.getItem('userData')) || [];
    setUserData(registeredUsers);
    Aos.init({duration:2000});
  }, []);

  const handleDelete = (index) => {
    const updatedData = [...userData];
    updatedData.splice(index, 1);
    localStorage.setItem('userData', JSON.stringify(updatedData));
    setUserData(updatedData);
  };

  return (
    <div>
      
      <div className="dashboard-container" data-aos="fade-left">
        <h1>Registered Users</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.user}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;