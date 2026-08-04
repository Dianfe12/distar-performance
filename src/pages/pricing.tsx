
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'DÉBUTANT',
      price: '15.000 FCFA',
      period: '/ mois',
      features: [
        'Programme d’entraînement de base',
        'Guide de nutrition standard',
        'Accès au dashboard',
        'Support par email'
      ],
      recommended: false,
    },
    {
      name: 'INTERMÉDIAIRE / ATHLÈTE',
      price: '25.000 FCFA',
      period: '/ mois',
      features: [
        'Programme d’entraînement 100% sur-mesure',
        'Plan alimentaire personnalisé (Sèche / Prise de masse)',
        'Suivi des performances & objectifs',
        'Support prioritaire WhatsApp 7j/7'
      ],
      recommended: true,
    },
    {
      name: 'PERFORMANCE PRO',
      price: '40.000 FCFA',
      period: '/ mois',
      features: [
        'Coaching individuel personnalisé',
        'Bilan et réajustement nutritionnel chaque semaine',
        'Accès illimité à tous les programmes',
        'Suivi vidéo des postures & techniques'
      ],
      recommended: false,
    },
  ];

  return (
    <div style={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh', padding: '50px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#FF5F00', fontSize: '36px', textTransform: 'uppercase' }}>Nos Formules & Tarifs</h1>
        <p style={{ color: '#aaa', fontSize: '16px' }}>
          Choisissez le plan adapté à vos objectifs et bénéficiez d'un suivi sur-mesure.
        </p>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#1c1c1c',
              border: plan.recommended ? '2px solid #FF5F00' : '1px solid #333',
              borderRadius: '15px',
              padding: '30px',
              width: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              boxShadow: plan.recommended ? '0px 0px 20px rgba(255, 95, 0, 0.3)' : 'none'
            }}
          >
            {plan.recommended && (
              <span style={{
                position: 'absolute', top: '-15px', right: '20px',
                backgroundColor: '#FF5F00', color: '#000', padding: '5px 15px',
                borderRadius: '20px', fontWeight: 'bold', fontSize: '12px'
              }}>
                POPULAIRE
              </span>
            )}

            <div>
              <h3 style={{ color: '#FF5F00', fontSize: '22px', textAlign: 'center' }}>{plan.name}</h3>
              <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <span style={{ fontSize: '32px', fontWeight: 'bold' }}>{plan.price}</span>
                <span style={{ color: '#aaa' }}>{plan.period}</span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0' }}>
                {plan.features.map((feat, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', fontSize: '14px', color: '#ddd' }}>
                    ✓ {feat}
                  </li>
                ))}
              </ul>
            </div>

            <button
  onClick={() => navigate('/dashboard')}
  style={{
    backgroundColor: '#FF5F00',
    color: '#000',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%'
  }}
>
  CHOISIR CE PLAN
</button>
          </div>
        ))}
      </div>
    </div>
  );
}