import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgArriereplan from '../assets/arriereplan.png';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ 
      height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${imgArriereplan})`,
      backgroundSize: 'cover', backgroundColor: '#000' 
    }}>
      <form 
        onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}
        style={{ backgroundColor: '#161616', padding: '40px', borderRadius: '15px', border: '1px solid #FF5F00', width: '350px', textAlign: 'center' }}
      >
        <h2 style={{ color: 'white', marginBottom: '20px' }}>CONNEXION</h2>
        
        <input type="email" placeholder="EMAIL" required style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #333' }} />
        <input type="password" placeholder="MOT DE PASSE" required style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #333' }} />
        
        <button type="submit" style={{ width: '100%', padding: '15px', backgroundColor: '#FF5F00', color: 'black', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          ACCÉDER AU DASHBOARD
        </button>
      </form>
    </div>
  );
}