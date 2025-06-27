import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import BugReport from './pages/BugReport';

function App() {
  return (
    <Router>
      <nav className="bg-blue-700 text-white p-4 flex gap-4">
        <Link to="/">Login</Link>
        <Link to="/report">Relatar Bug</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/report" element={<BugReport />} />
      </Routes>
    </Router>
  );
}

export default App;
