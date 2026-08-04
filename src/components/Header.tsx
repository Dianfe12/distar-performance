import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <header style={{
      backgroundColor: '#121212',
      borderBottom: '1px solid #FF5F00',
      padding: '15px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h2 style={{ color: '#FF5F00', margin: 0, cursor: 'pointer' }} onClick={() => navigate('/')}>
        CoachApp
      </h2>

      <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {localStorage.getItem('token') ? (
          <button 
            onClick={handleLogout}
            style={{
              backgroundColor: '#d9534f',
              color: '#fff',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Déconnexion
          </button>
        ) : (
          <button 
            onClick={() => navigate('/login')}
            style={{
              backgroundColor: '#FF5F00',
              color: '#000',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            ADMIN
          </button>
        )}
      </nav>
    </header>
  );
}