
export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0a0a0a',
      borderTop: '1px solid #FF5F00',
      color: '#fff',
      padding: '40px 20px 20px 20px',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '30px'
      }}>
        {/* Colonne 1 : À Propos */}
        <div style={{ maxWidth: '350px' }}>
          <h3 style={{ color: '#FF5F00', marginBottom: '15px' }}>DISTAR PERFORMANCE</h3>
          <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6' }}>
            Votre plateforme de coaching sportif et nutritionnel sur-mesure pour atteindre vos objectifs physiques et optimiser vos performances.
          </p>
        </div>

        {/* Colonne 2 : Liens Rapides */}
        <div>
          <h4 style={{ color: '#FF5F00', marginBottom: '15px' }}>Navigation</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: '#aaa', lineHeight: '2' }}>
            <li><a href="/dashboard" style={{ color: '#aaa', textDecoration: 'none' }}>Dashboard</a></li>
            <li><a href="/onboarding" style={{ color: '#aaa', textDecoration: 'none' }}>Mes Objectifs</a></li>
            <li><a href="/pricing" style={{ color: '#aaa', textDecoration: 'none' }}>Tarifs & Offres</a></li>
          </ul>
        </div>

        {/* Colonne 3 : Réseaux Sociaux */}
        <div>
          <h4 style={{ color: '#FF5F00', marginBottom: '15px' }}>Suivez-nous</h4>
          <div style={{ display: 'flex', gap: '15px', fontSize: '14px' }}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>📸 Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>📘 Facebook</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>🎵 TikTok</a>
            <a href="https://wa.me/221770000000" target="_blank" rel="noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 'bold' }}>💬 WhatsApp</a>
          </div>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        borderTop: '1px solid #222',
        marginTop: '30px',
        paddingTop: '15px',
        fontSize: '12px',
        color: '#666'
      }}>
        © 2026 DISTAR PERFORMANCE - Tous droits réservés.
      </div>
    </footer>
  );
}