import React, { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

    if (!formData.email) {
      setError("O campo E-mail é obrigatório.");
      return;
    }
    
    if (!formData.senha) {
      setError("O campo Senha é obrigatório.");
      return;
    }

    setError('');
    console.log("Tentativa de login:", formData);
    alert("Login simulado (sem backend por enquanto)");
  };

  return (
    <div className="max-w-sm mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">

      {/* O htmlFor se conecta diretamente com o id do input abaixo */}
      <label htmlFor="email-input" className="block mb-1">E-mail</label>
      <input
        id="email-input" // Adicionado o ID correspondente
        type="email"
        name="email"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        value={formData.email} // Adicionado o value para controlar o input 
      />
    </div>

        {error && (
          <p className="text-red-600 text-sm mb-3">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
