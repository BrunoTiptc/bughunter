import React, { useState } from 'react';

export default function BugReport() {
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    categoria: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:5000/bugs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message || "Bug enviado!");
        console.log(data);
      })
      .catch(err => {
        alert("Erro ao enviar bug");
        console.error(err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">📋 Relatar um Bug</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Título do Bug</label>
            <input
              name="titulo"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Botão não funciona"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Descrição</label>
            <textarea
              name="descricao"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Descreva o erro detalhadamente..."
              rows={4}
            ></textarea>
          </div>
          <div>
            <label className="block font-semibold mb-1">Categoria</label>
            <select
              name="categoria"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 font-semibold"
          >
            Enviar Bug
          </button>
        </form>
      </div>
    </div>
  );
}
