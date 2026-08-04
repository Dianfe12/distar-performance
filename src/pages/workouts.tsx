import { useEffect, useState } from 'react';
import API from '../services/api';

interface Workout {
  id: number;
  title: string;
  description: string;
  duration: string;
  isCompleted: boolean;
}

export default function Workouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // 1. Chargement des séances depuis la base de données
 const fetchWorkouts = async () => {
    try {
      const response = await API.get('/workouts');
      setWorkouts(response.data);
    } catch (err) {
      setError("Impossible de charger les séances d'entraînement.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  // 2. Fonction d'émargement / validation d'une séance
  const handleEmarger = async (id: number) => {
    try {
      await API.patch(`/workouts/${id}/emarger`);
      // Mise à jour locale de l'état pour un retour visuel instantané
      setWorkouts((prev) =>
        prev.map((w) => (w.id === id ? { ...w, isCompleted: true } : w))
      );
    } catch (err: any) {
      alert('Erreur lors de la validation de la séance');
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div style={{ color: '#fff', textAlign: 'center', marginTop: '50px' }}>
        ⏳ Chargement de tes programmes...
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ color: '#FF5F00', marginBottom: '10px' }}>🏋️ Mes Séances d'Entraînement</h1>
        <p style={{ color: '#aaa', marginBottom: '30px' }}>
          Consulte ton programme personnalisé et valide tes séances une fois accomplies.
        </p>

        {error && <p style={{ color: '#ff4d4d' }}>{error}</p>}

        <div style={{ display: 'grid', gap: '20px' }}>
          {workouts.length === 0 ? (
            <p style={{ color: '#888' }}>Aucune séance attribuée pour le moment.</p>
          ) : (
            workouts.map((workout) => (
              <div
                key={workout.id}
                style={{
                  backgroundColor: '#1c1c1c',
                  border: '1px solid #333',
                  borderRadius: '12px',
                  padding: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '15px'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 8px 0', color: workout.isCompleted ? '#4CAF50' : '#fff' }}>
                    {workout.title} {workout.isCompleted && '✅'}
                  </h3>
                  <p style={{ margin: '0 0 10px 0', color: '#aaa', fontSize: '14px' }}>
                    {workout.description}
                  </p>
                  <span style={{ fontSize: '12px', color: '#FF5F00', backgroundColor: '#2a1a08', padding: '4px 8px', borderRadius: '4px' }}>
                    ⏱️ Durée : {workout.duration || '45 min'}
                  </span>
                </div>

                <button
                  onClick={() => handleEmarger(workout.id)}
                  disabled={workout.isCompleted}
                  style={{
                    backgroundColor: workout.isCompleted ? '#2e7d32' : '#FF5F00',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: workout.isCompleted ? 'default' : 'pointer',
                    opacity: workout.isCompleted ? 0.8 : 1
                  }}
                >
                  {workout.isCompleted ? 'Séance Validée' : 'Émarger la séance'}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}