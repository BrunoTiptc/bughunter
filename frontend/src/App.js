import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import BugReport from './pages/BugReport';

function App() {
  const [mensagem, setMensagem] = useState("");

  // useEffect precisa ficar aqui, fora do return
 useEffect(() => {
  fetch("/api/hello")  // não precisa mais do http://localhost:5000
    .then(response => response.json())
    .then(data => setMensagem(data.message))
    .catch(error => console.error("Erro ao chamar API:", error));


  }, []); // [] garante que roda só uma vez ao carregar

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-700 text-white p-4 shadow-md flex justify-center space-x-6">
          <Link to="/" className="hover:underline font-semibold">Login</Link>
          <Link to="/report" className="hover:underline font-semibold">Relatar Bug</Link>
        </nav>

        <div className="p-4">
          {/* Mostra a resposta do backend */}
          <h1>Frontend React</h1>
          <p>Resposta do backend Flask: {mensagem}</p>

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