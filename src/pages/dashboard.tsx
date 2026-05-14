import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StatCard({ label, value, change }: { label: string; value: string; change: string }) {
  return (
    <div style={{ backgroundColor: '#161616', padding: '25px', borderRadius: '15px', borderBottom: '4px solid #FF5F00' }}>
      <p style={{ color: '#888', marginBottom: '10px', fontSize: '0.9rem' }}>{label}</p>
      <h2 style={{ fontSize: '2rem', margin: 0 }}>{value}</h2>
      <p style={{ color: '#FF5F00', fontSize: '0.8rem', marginTop: '5px' }}>{change} ce mois-ci</p>
    </div>
  );
}

function ExerciseItem({ name, sets }: { name: string; sets: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #222' }}>
      <span style={{ fontWeight: 'bold' }}>{name}</span>
      <span style={{ color: '#888' }}>{sets}</span>
    </div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');

  const user = { nom: "Champion", coach: "Dianfe" };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0A0A0A', color: 'white', fontFamily: "'Inter', sans-serif" }}>
      
      <div style={{ width: '250px', backgroundColor: '#161616', borderRight: '1px solid #333', padding: '30px', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ color: '#FF5F00', fontWeight: '900', fontStyle: 'italic', marginBottom: '5px', margin: 0 }}>PERFORATION</h2>
        <h2 style={{ color: '#FF5F00', fontWeight: '900', fontStyle: 'italic', marginBottom: '50px', margin: 0 }}>DISTAR</h2>
        
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div 
            onClick={() => setActiveTab('dashboard')}
            style={{ cursor: 'pointer', fontWeight: activeTab === 'dashboard' ? 'bold' : 'normal', color: activeTab === 'dashboard' ? '#FF5F00' : '#888' }}
          >
            TABLEAU DE BORD
          </div>
          <div 
            onClick={() => setActiveTab('programme')}
            style={{ cursor: 'pointer', fontWeight: activeTab === 'programme' ? 'bold' : 'normal', color: activeTab === 'programme' ? '#FF5F00' : '#888' }}
          >
            MON PROGRAMME
          </div>
          <div 
            onClick={() => setActiveTab('nutrition')}
            style={{ cursor: 'pointer', fontWeight: activeTab === 'nutrition' ? 'bold' : 'normal', color: activeTab === 'nutrition' ? '#FF5F00' : '#888' }}
          >
            NUTRITION
          </div>
          <div 
            onClick={() => setActiveTab('progres')}
            style={{ cursor: 'pointer', fontWeight: activeTab === 'progres' ? 'bold' : 'normal', color: activeTab === 'progres' ? '#FF5F00' : '#888' }}
          >
            MES PROGRÈS
          </div>
        </nav>

        <button
          onClick={() => navigate('/')}
          style={{ padding: '10px', backgroundColor: 'transparent', border: '1px solid #444', color: '#888', cursor: 'pointer', borderRadius: '4px' }}
        >
          Déconnexion
        </button>
      </div>

      <div style={{ flex: 1, padding: '40px' }}>
        
        {activeTab === 'dashboard' && (
          <div>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <h1 style={{ fontSize: '2rem' }}>Bonjour, <span style={{ color: '#FF5F00' }}>{user.nom}</span> 👋</h1>
              <div style={{ backgroundColor: '#222', padding: '10px 20px', borderRadius: '30px', border: '1px solid #FF5F00' }}>
                COACH : {user.coach.toUpperCase()}
              </div>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '4px', marginTop: '40px' }}>
              <StatCard label="Poids Actuel" value="82 kg" change="-2kg" />
              <StatCard label="Masse Musculaire" value="41,5 kg" change="+0,5kg" />
              <StatCard label="Séances (Mois)" value="16" change="+4" />
            </div>

            <div style={{ backgroundColor: '#161616', padding: '30px', borderRadius: '15px', border: '1px solid #333', marginTop: '40px' }}>
              <h3 style={{ marginBottom: '20px', color: '#FF5F00', margin: 0 }}>SÉANCE DU JOUR : POUSSÉE (PECTORAUX / TRICEPS)</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                <ExerciseItem name="Développé Couché" sets="4 séries x 10 répétitions" />
                <ExerciseItem name="Dips" sets="3 séries x 12 répétitions" />
                <ExerciseItem name="Écartés Haltères" sets="3 séries x 15 répétitions" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'programme' && (
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '40px' }}>🏋️‍♂️ Mon <span style={{ color: '#FF5F00' }}>Programme d'Entraînement</span></h1>
            <div style={{ backgroundColor: '#161616', padding: '30px', borderRadius: '15px', border: '1px solid #333' }}>
              <h3 style={{ color: '#FF5F00', marginTop: 0 }}>Planification Hebdomadaire</h3>
              <p style={{ color: '#aaa', marginTop: '10px' }}>Retrouve ici la répartition de tes séances programmées par ton entraîneur **{user.coach}**.</p>
              <div style={{ marginTop: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ padding: '15px', backgroundColor: '#222', borderRadius: '8px', borderLeft: '4px solid #FF5F00' }}>
                  <strong>Lundi :</strong> Poussée (Pectoraux, Épaules, Triceps)
                </div>
                <div style={{ padding: '15px', backgroundColor: '#222', borderRadius: '8px', borderLeft: '4px solid #FF5F00' }}>
                  <strong>Mercredi :</strong> Tirage (Dos, Biceps)
                </div>
                <div style={{ padding: '15px', backgroundColor: '#222', borderRadius: '8px', borderLeft: '4px solid #FF5F00' }}>
                  <strong>Vendredi :</strong> Jambes & Abdos (Squats, Fentes)
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'nutrition' && (
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '40px' }}>🍏 Suivi <span style={{ color: '#FF5F00' }}>Nutritionnel</span></h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              <div style={{ backgroundColor: '#161616', padding: '30px', borderRadius: '15px', border: '1px solid #333' }}>
                <h3 style={{ color: '#FF5F00', marginTop: 0 }}>Objectifs Macro</h3>
                <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <p>🔥 <strong>Calories :</strong> 2 800 kcal / jour</p>
                  <p>🥩 <strong>Protéines :</strong> 160g</p>
                  <p>🍚 <strong>Glucides :</strong> 320g</p>
                  <p>🥑 <strong>Lipides :</strong> 80g</p>
                </div>
              </div>
              <div style={{ backgroundColor: '#161616', padding: '30px', borderRadius: '15px', border: '1px solid #333' }}>
                <h3 style={{ color: '#FF5F00', marginTop: 0 }}>Plan de Repas Conseil</h3>
                <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Privilégier les sources de protéines maigres et les glucides complexes avant l'effort.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'progres' && (
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '40px' }}>📈 Évolution & <span style={{ color: '#FF5F00' }}>Performances</span></h1>
            <div style={{ backgroundColor: '#161616', padding: '30px', borderRadius: '15px', border: '1px solid #333' }}>
              <h3 style={{ color: '#FF5F00', marginTop: 0 }}>Mes Records Personnels (PR)</h3>
              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <ExerciseItem name="Développé Couché (Max)" sets="100 kg" />
                <ExerciseItem name="Squat (Max)" sets="130 kg" />
                <ExerciseItem name="Soulevé de terre (Max)" sets="150 kg" />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}