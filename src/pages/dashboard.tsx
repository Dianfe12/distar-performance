import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  // On simule quelques données de l'utilisateur
  const user = { nom: "Champion", coach: "Dianfe" };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0A0A0A', color: 'white', fontFamily: "'Inter', sans-serif" }}>
      
      {/* --- SIDEBAR (Barre Latérale) --- */}
      <div style={{ width: '250px', backgroundColor: '#161616', borderRight: '1px solid #333', padding: '30px', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ color: '#FF5F00', fontWeight: '900', fontStyle: 'italic', marginBottom: '50px' }}>DISTAR PERF</h2>
        
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ cursor: 'pointer', color: '#FF5F00', fontWeight: 'bold' }}>TABLEAU DE BORD</div>
          <div style={{ cursor: 'pointer', color: '#888' }}>MON PROGRAMME</div>
          <div style={{ cursor: 'pointer', color: '#888' }}>NUTRITION</div>
          <div style={{ cursor: 'pointer', color: '#888' }}>MES PROGRÈS</div>
        </nav>

        <button 
          onClick={() => navigate('/')}
          style={{ padding: '10px', backgroundColor: 'transparent', border: '1px solid #444', color: '#888', cursor: 'pointer', borderRadius: '5px' }}
        >
          Déconnexion
        </button>
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div style={{ flex: 1, padding: '40px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2rem' }}>Bonjour, <span style={{ color: '#FF5F00' }}>{user.nom}</span> 👋</h1>
          <div style={{ backgroundColor: '#222', padding: '10px 20px', borderRadius: '30px', border: '1px solid #FF5F00', fontSize: '0.9rem' }}>
            COACH : {user.coach.toUpperCase()}
          </div>
        </header>

        {/* GRILLE DE STATS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
          <StatCard label="Poids Actuel" value="82 kg" change="-2kg" />
          <StatCard label="Masse Musculaire" value="41.5 kg" change="+0.5kg" />
          <StatCard label="Séances (Mois)" value="16" change="+4" />
        </div>

        {/* SECTION SÉANCE DU JOUR */}
        <div style={{ backgroundColor: '#161616', padding: '30px', borderRadius: '15px', border: '1px solid #333' }}>
          <h3 style={{ marginBottom: '20px', color: '#FF5F00' }}>SÉANCE DU JOUR : PUSH (PECTORAUX / TRICEPS)</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <ExerciseItem name="Développé Couché" sets="4 séries x 10 répétitions" />
            <ExerciseItem name="Dips" sets="3 séries x 12 répétitions" />
            <ExerciseItem name="Écartés Haltères" sets="3 séries x 15 répétitions" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Petits composants internes pour garder le code propre
function StatCard({ label, value, change }: { label: string, value: string, change: string }) {
  return (
    <div style={{ backgroundColor: '#161616', padding: '25px', borderRadius: '15px', borderBottom: '4px solid #FF5F00' }}>
      <p style={{ color: '#888', marginBottom: '10px', fontSize: '0.9rem' }}>{label}</p>
      <h2 style={{ fontSize: '2rem', margin: 0 }}>{value}</h2>
      <p style={{ color: '#FF5F00', fontSize: '0.8rem', marginTop: '5px' }}>{change} ce mois-ci</p>
    </div>
  );
}

function ExerciseItem({ name, sets }: { name: string, sets: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #222' }}>
      <span style={{ fontWeight: 'bold' }}>{name}</span>
      <span style={{ color: '#888' }}>{sets}</span>
    </div>
  );
}