import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import Header from '../components/Header';

export default function Dashboard() {
  const navigate = useNavigate();
  const userLevel = localStorage.getItem('userLevel') || 'Débutant';
  const [workoutSessions, setWorkoutSessions] = useState<any[]>([]);
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    API.get('/workouts/weather')
      .then((res: any) => setWeather(res.data))
      .catch((err: any) => console.error('Erreur météo:', err));
  }, []);

 return (
    <div style={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh' }}>
      <Header /> {/* <-- Ajoute le header ici */}

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* En-tête */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          marginBottom: '35px',
          borderBottom: '1px solid #222',
          paddingBottom: '20px'
        }}>
          <div>
            <h1 style={{ color: '#FF5F00', margin: 0, fontSize: '28px', textTransform: 'uppercase' }}>
              Espace Client & Performances
            </h1>
            <p style={{ color: '#aaa', margin: '5px 0 0 0' }}>
              Niveau actuel : <strong style={{ color: '#fff' }}>{userLevel.toUpperCase()}</strong>
            </p>
          </div>
          <button
            onClick={() => navigate('/workouts')}
            style={{
              backgroundColor: '#FF5F00',
              color: '#000',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            🏋️ VOIR MES SÉANCES

            {/* Widget Météo de Dakar */}
{weather && (
  <div style={{
    backgroundColor: '#1c1c1c',
    border: '1px solid #333',
    padding: '8px 15px',
    borderRadius: '8px',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }}>
    <span>🌤️ <strong>{weather.ville} :</strong> {weather.temperature} ({weather.condition})</span>
  </div>
)}
          </button>
        </div>

        {/* Statistiques clés de l'utilisateur */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          marginBottom: '35px'
        }}>
          <div style={{ backgroundColor: '#1c1c1c', border: '1px solid #333', padding: '20px', borderRadius: '12px' }}>
            <span style={{ color: '#aaa', fontSize: '14px' }}>Séances complétées</span>
            <h2 style={{ color: '#FF5F00', fontSize: '32px', margin: '10px 0 0 0' }}>12 / 16</h2>
          </div>
          <div style={{ backgroundColor: '#1c1c1c', border: '1px solid #333', padding: '20px', borderRadius: '12px' }}>
            <span style={{ color: '#aaa', fontSize: '14px' }}>Assiduité</span>
            <h2 style={{ color: '#FF5F00', fontSize: '32px', margin: '10px 0 0 0' }}>85%</h2>
          </div>
          <div style={{ backgroundColor: '#1c1c1c', border: '1px solid #333', padding: '20px', borderRadius: '12px' }}>
            <span style={{ color: '#aaa', fontSize: '14px' }}>Prochaine séance</span>
            <h2 style={{ color: '#fff', fontSize: '18px', margin: '10px 0 0 0' }}>Jour 1 : Pectoraux & Triceps</h2>
          </div>
        </div>

        {/* Section Séances & Régime */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
          
          <div style={{ backgroundColor: '#1c1c1c', border: '1px solid #333', padding: '25px', borderRadius: '12px' }}>
            <h3 style={{ color: '#FF5F00', marginTop: 0 }}>🔥 Programme Actif</h3>
            <p style={{ color: '#ddd', lineHeight: '1.6', fontSize: '15px' }}>
              Consulte le détail de tes exercices, ajuste tes charges et valide tes séances accomplies au fur et à mesure.
            </p>
            <button
              onClick={() => navigate('/workouts')}
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                color: '#FF5F00',
                border: '1px solid #FF5F00',
                padding: '10px',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '15px'
              }}
            >
              Lancer la séance du jour
            </button>
          </div>

          <div style={{ backgroundColor: '#1c1c1c', border: '1px solid #333', padding: '25px', borderRadius: '12px' }}>
            <h3 style={{ color: '#FF5F00', marginTop: 0 }}>🥗 Suivi Nutrition</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '15px' }}>
              <span>Objectif Calorique :</span>
              <strong style={{ color: '#FF5F00' }}>2 400 kcal/jour</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '15px' }}>
              <span>Protéines recommandées :</span>
              <strong>160 g</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px' }}>
              <span>Hydratation conseillée :</span>
              <strong>2.5 Litres</strong>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}