import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import axios from 'axios';

interface Workout {
  id: string;
  title: string;
  description: string;
  duration: string;
}

export default function AdminWorkouts() {
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // 🔒 Sécurité : Vérifier si l'utilisateur est bien admin au chargement de la page
 useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    const token = localStorage.getItem('token');

if (!token || userRole !== 'ADMIN') {
    alert("Accès refusé : veuillez vous connecter en tant qu'administrateur.");
    navigate('/admin-login');
  }
}, []);

  // Charger la liste des séances
  const fetchWorkouts = async () => {
    try {
      const response = await API.get('/workouts');
      setWorkouts(response.data);
    } catch (err) {
      console.error('Erreur lors du chargement des séances', err);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  // Ajouter une nouvelle séance

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };
  
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem('token');

    const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Remplace '/login' par la route de ta page de connexion si elle est différente
  };

    // Appel direct avec axios et l'URL complète du backend
    await fetch('http://localhost:3000/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ title, description, duration })
    });

    setSuccessMessage('Séance créée avec succès ! 🎉');
    setTitle('');
    setDescription('');
    setDuration('');
    fetchWorkouts();
    setTimeout(() => setSuccessMessage(''), 4000);
  } catch (err) {
    alert('Erreur lors de la création de la séance.');
    console.error(err);
  }
};

  // Supprimer une séance
  const handleDelete = async (id: string) => {
    if (window.confirm('Voulez-vous vraiment supprimer cette séance ?')) {
      try {
        await API.delete(`/workouts/${id}`);
        setWorkouts(workouts.filter((w) => w.id !== id));
      } catch (err) {
        alert('Erreur lors de la suppression.');
        console.error(err);
      }
    }
  };

  return (
    
    <div style={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
  <h1 style={{ color: '#FF5F00', margin: 0 }}>🛠️ Gestion de l'espace - Coaching</h1>
  <button 
    onClick={handleLogout}
    style={{
      backgroundColor: '#ef4444',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: 'bold'
    }}
  >
    Déconnexion
  </button>
</div>
        <p style={{ color: '#aaa', marginBottom: '30px' }}>
          Ajoute et gère les programmes d'entraînement de ta plateforme.
        </p>

        {successMessage && (
          <div style={{ backgroundColor: '#1e3a1e', color: '#4CAF50', padding: '12px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #4CAF50' }}>
            {successMessage}
          </div>
        )}

        {/* Formulaire d'ajout */}
        <form onSubmit={handleSubmit} style={{ backgroundColor: '#1c1c1c', padding: '25px', borderRadius: '12px', border: '1px solid #333', marginBottom: '40px' }}>
          <h3 style={{ marginTop: 0, marginBottom: '20px', color: '#fff' }}>Créer une nouvelle séance</h3>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#ccc' }}>Titre de la séance</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="ex : Jour 4 : Dos & Abdos"
              required
              style={{ width: '100%', padding: '12px', backgroundColor: '#121212', border: '1px solid #444', borderRadius: '8px', color: '#fff', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#ccc' }}>Description / Exercices</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="ex : 4 séries de tractions, rowing barre..."
              required
              rows={3}
              style={{ width: '100%', padding: '12px', backgroundColor: '#121212', border: '1px solid #444', borderRadius: '8px', color: '#fff', boxSizing: 'border-box', resize: 'vertical' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#ccc' }}>Durée estimée</label>
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="ex : 1h 15m"
              required
              style={{ width: '100%', padding: '12px', backgroundColor: '#121212', border: '1px solid #444', borderRadius: '8px', color: '#fff', boxSizing: 'border-box' }}
            />
          </div>

          <button
            type="submit"
            style={{ backgroundColor: '#FF5F00', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}
          >
            Publier la séance
          </button>
        </form>

        {/* Tableau récapitulatif des séances existantes */}
        <h3 style={{ color: '#fff', marginBottom: '15px' }}>Séances enregistrées ({workouts.length})</h3>
        <div style={{ backgroundColor: '#1c1c1c', borderRadius: '12px', border: '1px solid #333', overflow: 'hidden' }}>
          {workouts.length === 0 ? (
            <p style={{ padding: '20px', color: '#888', textAlign: 'center' }}>Aucune séance trouvée.</p>
          ) : (
            workouts.map((workout) => (
              <div key={workout.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', borderBottom: '1px solid #333' }}>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', color: '#FF5F00' }}>{workout.title}</h4>
                  <p style={{ margin: '0', fontSize: '13px', color: '#aaa' }}>{workout.description} — ⏱️ {workout.duration}</p>
                </div>
                <button
                  onClick={() => handleDelete(workout.id)}
                  style={{ backgroundColor: '#d9534f', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}
                >
                  Supprimer
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
 );
}