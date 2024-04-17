import React from 'react';
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Dashboard from './components/Dashboad';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Navbar' element={<Navbar />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/registration' element={<Registration />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

