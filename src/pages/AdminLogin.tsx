import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await API.post('/auth/login', { email, password });
      
      // Sécurité : Vérifier directement que le rôle est bien ADMIN
   const userRole = response.data.role || response.data.user?.role;

  if (userRole && userRole.toUpperCase() === 'ADMIN') {
    localStorage.setItem('token', response.data.access_token || response.data.token);
    localStorage.setItem('userRole', 'ADMIN');
    navigate('/admin'); // Redirection vers l'espace admin
  } else {
    alert("Accès refusé : ce compte n'est pas administrateur.");
    // On nettoie les éventuels stocks
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
  }
    } catch (err) {
      alert("Erreur de connexion : email ou mot de passe incorrect.");
    }
  };

  return (
    <div style={{ padding: '40px', color: '#fff', backgroundColor: '#121212', minHeight: '100vh' }}>
      <h2>Connexion Espace Administrateur</h2>
      <form onSubmit={handleAdminLogin}>
        <div style={{ marginBottom: '15px' }}>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ display: 'block', width: '100%', padding: '10px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Mot de passe</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ display: 'block', width: '100%', padding: '10px' }} />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#FF5F00', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Se connecter en tant qu'Admin
        </button>
      </form>
    </div>
  );
}