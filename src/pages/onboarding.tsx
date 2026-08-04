import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Onboarding() {
  const navigate = useNavigate();
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [level, setLevel] = useState<string>('debutant');

  const goalsList = [
    { id: 'weight_loss', label: '🔥 Perdre du poids', diet: 'Déficit calorique léger, hyperprotéiné' },
    { id: 'fitness', label: '⚖️ Garder la ligne / Entretien', diet: 'Alimentation équilibrée isocalorique' },
    { id: 'muscle_gain', label: '💪 Prendre de la masse musculaire', diet: 'Surplus calorique + glucides complexes' },
    { id: 'athletic', label: '⚡ Physique athlétique & Performance', diet: 'Riche en nutriments & hydratation ciblée' },
  ];

  const toggleGoal = (id: string) => {
    if (selectedGoals.includes(id)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== id));
    } else {
      setSelectedGoals([...selectedGoals, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Sauvegarder les préférences localement
    localStorage.setItem('userGoals', JSON.stringify(selectedGoals));
    localStorage.setItem('userLevel', level);

    // Redirection vers les Tarifs au lieu des Workouts
  navigate('/pricing'); 
};

  return (
    <div style={{
      minHeight: '100vh', backgroundColor: '#121212', color: '#fff',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#161616', border: '1px solid #FF5F00', padding: '30px',
        borderRadius: '15px', maxWidth: '500px', width: '100%'
      }}>
        <h2 style={{ color: '#FF5F00', textAlign: 'center', marginBottom: '10px' }}>VOS OBJECTIFS ET NIVEAU</h2>
        <p style={{ textTransform: 'lowercase', textAlign: 'center', color: '#ccc', marginBottom: '25px', fontSize: '14px' }}>
          sélectionnez vos besoins pour un programme et un régime personnalisés.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Objectifs (Checkboxes) */}
          <h4 style={{ color: '#FF5F00', marginBottom: '10px' }}>1. Quels sont vos objectifs ?</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            {goalsList.map((g) => (
              <label 
                key={g.id} 
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px', padding: '12px',
                  backgroundColor: selectedGoals.includes(g.id) ? '#2a1a10' : '#222',
                  border: selectedGoals.includes(g.id) ? '1px solid #FF5F00' : '1px solid #333',
                  borderRadius: '8px', cursor: 'pointer'
                }}
              >
                <input 
                  type="checkbox" 
                  checked={selectedGoals.includes(g.id)} 
                  onChange={() => toggleGoal(g.id)} 
                  style={{ accentColor: '#FF5F00' }}
                />
                <span>{g.label}</span>
              </label>
            ))}
          </div>

          {/* Niveau d'entraînement */}
          <h4 style={{ color: '#FF5F00', marginBottom: '10px' }}>2. Votre niveau actuel</h4>
          <select 
            value={level} 
            onChange={(e) => setLevel(e.target.value)}
            style={{
              width: '100%', padding: '12px', backgroundColor: '#222', color: '#fff',
              border: '1px solid #333', borderRadius: '8px', marginBottom: '25px'
            }}
          >
            <option value="debutant">Débutant (0 - 6 mois)</option>
            <option value="intermediaire">Intermédiaire (6 mois - 2 ans)</option>
            <option value="avance">Avancé / Athlète (+2 ans)</option>
          </select>

          <button 
            type="submit" 
            style={{
              width: '100%', padding: '15px', backgroundColor: '#FF5F00', color: '#000',
              fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer'
            }}
          >
            VALIDER MON PROGRAMME
          </button>
        </form>
      </div>
    </div>
  );
}