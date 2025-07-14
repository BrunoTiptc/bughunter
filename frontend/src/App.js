import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import BugReport from './pages/BugReport';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-700 text-white p-4 shadow-md flex justify-center space-x-6">
          <Link to="/" className="hover:underline font-semibold">Login</Link>
          <Link to="/report" className="hover:underline font-semibold">Relatar Bug</Link>
        </nav>

        <div className="p-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/report" element={<BugReport />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
