import { useState } from 'react';
import API from '../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      // Appel vers ton backend NestJS
      const response = await API.post('/auth/login', { email, password });
      
      // Stockage du token et du rôle renvoyé par le backend
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('userRole', response.data.role); 
      
      // REDIRECTION CONDITIONNELLE :
      // Si le rôle est admin, on l'envoie vers /admin, sinon vers /dashboard
      if (response.data.role === 'admin') {
        window.location.href = '/admin';
      } else {
        window.location.href = '/dashboard';
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Email ou mot de passe incorrect.');
    }
  };

  return (
    <div style={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ backgroundColor: '#1c1c1c', padding: '40px', borderRadius: '12px', border: '1px solid #333', width: '100%', maxWidth: '400px', boxSizing: 'border-box' }}>
        <h2 style={{ color: '#FF5F00', marginTop: 0, marginBottom: '10px', textAlign: 'center' }}>Connexion</h2>
        <p style={{ color: '#aaa', fontSize: '14px', textAlign: 'center', marginBottom: '30px' }}>
          Accède à ton espace de coaching personnalisé.
        </p>

        {errorMessage && (
          <div style={{ backgroundColor: '#3a1e1e', color: '#ff6b6b', padding: '10px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', border: '1px solid #ff6b6b', textAlign: 'center' }}>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#ccc' }}>Adresse email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ex: mon@email.com"
              required
              style={{ width: '100%', padding: '12px', backgroundColor: '#121212', border: '1px solid #444', borderRadius: '8px', color: '#fff', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#ccc' }}>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              style={{ width: '100%', padding: '12px', backgroundColor: '#121212', border: '1px solid #444', borderRadius: '8px', color: '#fff', boxSizing: 'border-box' }}
            />
          </div>

          <button
  type="submit"
  style={{ backgroundColor: '#FF5F00', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%', fontSize: '16px' }}
>
  Se connecter
</button>
        </form>
      </div>
    </div>
  );
}