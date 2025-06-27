import React, { useState } from 'react';

export default function BugReport() {
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    categoria: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Bug enviado:", formData);
    // Aqui  depois vamos integrar com a API Flask
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Relatar Bug</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block mb-1">Título do Bug</label>
          <input name="titulo" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Descrição</label>
          <textarea name="descricao" onChange={handleChange} className="w-full p-2 border rounded"></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Categoria</label>
          <select name="categoria" onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Selecione</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Enviar Bug</button>
      </form>
    </div>
  );
}
