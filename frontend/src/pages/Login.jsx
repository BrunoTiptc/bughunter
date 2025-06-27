import React from 'react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Usuário</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="Digite seu usuário" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Senha</label>
          <input type="password" className="w-full p-2 border rounded" placeholder="Digite sua senha" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Entrar</button>
      </form>
    </div>
  );
}
