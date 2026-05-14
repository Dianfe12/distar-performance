// src/pages/home.tsx
import React, { useState } from 'react';
// --- IMPORT DE VOS PHOTOS PERSONNELLES ---
import imgEquipe from "../assets/equipe.png"; 
import photoDianfe from "../assets/dianfe.png";
import photoSarr from "../assets/sarr.png";
import photoToure from "../assets/toure.png";
import imgOmarAvant from "../assets/omar_avant.png";
import imgOmarApres from "../assets/omar_apres.png";
import imgRamaAvant from "../assets/rama_avant.png";
import imgRamaApres from "../assets/rama_apres.png";
import imgDianfeAvant from "../assets/dianfe_avant.png";
import imgDianfeApres from "../assets/dianfe_apres.png";
import imgArriereplan from "../assets/arriereplan.png";
import imgSechepertepoids from "../assets/sechepertepoids.png";
import imgAlimentation from "../assets/aliments.png";
import imgMuscle from "../assets/muscles.png";
import imgHoraires from "../assets/horaires.png";
const SERVICES_DATA = [
  { 
    id: 'seche', 
    titre: 'SÈCHE & PERTE DE POIDS', 
    desc: 'Brûlez les graisses tout en conservant votre masse musculaire avec nos plans nutritionnels précis.',
    image: imgSechepertepoids // Tu peux changer par une image spécifique
  },
  { 
    id: 'equilibre', 
    titre: 'RÉÉQUILIBRAGE ALIMENTAIRE', 
    desc: 'Apprenez à manger durablement sans frustration pour stabiliser votre poids définitivement.',
    image: imgAlimentation 
  },
  { 
    id: 'muscle', 
    titre: 'PRISE DE MUSCLE', 
    desc: 'Programmes d’entraînement intensifs et conseils en supplémentation pour une hypertrophie maximale.',
    image: imgMuscle 
  },
  { 
    id: 'suivi', 
    titre: 'SUIVI EN LIGNE 24/7', 
    desc: 'Une question ? Un doute ? Votre coach vous répond directement via WhatsApp à n’importe quelle heure.',
    image: imgHoraires 
  }
];

export default function home() {
    
 // --- STATES ---
const [scrolled] = useState(false);
const [submissionData, setSubmissionData] = useState<any>(null);
const [selectedService, setSelectedService] = useState<any>(null);
const [isSubmitted, setIsSubmitted] = useState(false); // <--- AJOUTE ÇA ICI

// ... ton useEffect reste identique ...

// --- LOGIQUE FORMULAIRE ---
const handlePostuler = (e: React.FormEvent) => {
  e.preventDefault();
  
  // On récupère les données
  const nom = (document.getElementById('nom-input') as HTMLInputElement)?.value;
  const sexe = (document.getElementById('sexe-input') as HTMLInputElement)?.value.toUpperCase();

  if (nom && sexe) {
    setSubmissionData({ nom, sexe });
    setIsSubmitted(true); // <--- ON ACTIVE LE MESSAGE DE SUCCÈS
    
    // Optionnel : on fait disparaître le message après 5 secondes
    setTimeout(() => setIsSubmitted(false), 5000);
  } else {
    alert("Veuillez remplir votre nom et votre sexe (M/F)");
  }
};
 

  const theme = {
    orange: '#FF5F00',
    black: '#0A0A0A',
    gray: '#161616',
    white: '#FFFFFF'
  };

  return (
    <div style={{ backgroundColor: theme.black, color: theme.white, fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .btn-hover:hover { background-color: white !important; color: black !important; transform: translateY(-3px); }
        .card-shadow { box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid #222; }
        .service-item:hover { color: ${theme.orange} !important; transform: scale(1.05); }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        padding: '20px 50px',
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        transition: '0.3s'
      }}>
        <div style={{ fontWeight: '900', fontSize: '1.8rem', fontStyle: 'italic' }}>
          DISTAR<span style={{ color: theme.orange }}>PERF</span>
        </div>
        <div style={{ display: 'flex', gap: '25px', alignItems: 'center', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase' }}>
  <a href="#methode" style={{ color: 'white', textDecoration: 'none' }}>La Méthode</a>
  <a href="#resultats" style={{ color: 'white', textDecoration: 'none' }}>Résultats</a>
  <a href="#equipe" style={{ color: 'white', textDecoration: 'none' }}>L'Équipe</a>
  
  {/* On remplace la ligne 104 par ce bouton */}
  <button 
    onClick={() => window.location.href='/login'}
    style={{ 
      color: theme.orange, 
      backgroundColor: 'transparent',
      border: `1px solid ${theme.orange}`, 
      padding: '8px 15px',
      cursor: 'pointer',
      fontWeight: '700',
      fontSize: '0.8rem',
      textTransform: 'uppercase'
    }}
  >
    CONNEXION
  </button>
</div>
      </nav>

      {/* HERO SECTION */}
      <section style={{ 
        height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', 
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.1) 100%), url(${imgEquipe})`,
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        {/* On ajoute la classe "floating-text" ici */}
        <div className="floating-text" style={{ padding: '0 100px', maxWidth: '800px' }}>
          <h1 style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: 1.1, marginBottom: '20px' }}>
            GARDEZ LA <span style={{ color: theme.orange }}>MOTIVATION</span> AU QUOTIDIEN
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#ccc', marginBottom: '40px' }}>
            Un suivi précis par DIANFE, SARR et TOURE pour transformer votre physique.
          </p>
          <a href="#contact" className="btn-hover" style={{ 
            backgroundColor: theme.orange, color: 'black', padding: '20px 40px', 
            textDecoration: 'none', fontWeight: '900', transition: '0.3s', display: 'inline-block' 
          }}>
            DÉCOUVREZ NOS COACHINGS
          </a>
        </div>
      </section>
      {/* BANDEAU SERVICES CLIQUABLES */}
      <div style={{ backgroundColor: 'white', padding: '30px 0', display: 'flex', justifyContent: 'center', gap: '50px', color: 'black', fontWeight: '900' }}>
        {SERVICES_DATA.map((s) => (
          <span 
            key={s.id} 
            className="service-item"
            onClick={() => setSelectedService(s)}
            style={{ cursor: 'pointer', transition: '0.3s' }}
          >
            {s.titre}
          </span>
        ))}
      </div>

      {/* FENÊTRE MODALE SERVICE AVEC IMAGE DE FOND */}
{selectedService && (
  <div 
    onClick={() => setSelectedService(null)} // Ferme en cliquant à côté
    style={{ 
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
      backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 5000, 
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      backdropFilter: 'blur(5px)' // Floute légèrement l'arrière-plan du site
    }}
  >
    <div 
      onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant sur la carte
      style={{ 
        position: 'relative',
        width: '90%',
        maxWidth: '600px',
        minHeight: '400px',
        borderRadius: '20px',
        overflow: 'hidden',
        border: `2px solid ${theme.orange}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px',
        // --- LOGIQUE DE L'IMAGE D'ARRIÈRE-PLAN ---
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${selectedService.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 style={{ 
        color: theme.orange, 
        fontSize: '2.5rem', 
        fontWeight: '900', 
        marginBottom: '20px',
        textTransform: 'uppercase' 
      }}>
        {selectedService.titre}
      </h2>
      
      <p style={{ 
        color: 'white', 
        fontSize: '1.2rem', 
        lineHeight: '1.6', 
        maxWidth: '80%',
        marginBottom: '30px'
      }}>
        {selectedService.desc}
      </p>

      <button 
        onClick={() => setSelectedService(null)} 
        style={{ 
          padding: '12px 30px', 
          background: theme.orange, 
          color: 'black',
          border: 'none', 
          borderRadius: '50px',
          cursor: 'pointer', 
          fontWeight: '900',
          transition: '0.3s'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        FERMER
      </button>
    </div>
  </div>
)}

  
      {/* ÉQUIPE */}
      <section id="equipe" style={{ padding: '100px 50px', backgroundColor: theme.gray }}>
        <h2 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: '900', marginBottom: '60px' }}>VOS <span style={{ color: theme.orange }}>COACHS</span></h2>
        <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { nom: 'DIANFE', photo: photoDianfe, role: 'Expert Mental' },
            { nom: 'SARR', photo: photoSarr, role: 'Spécialiste Force' },
            { nom: 'TOURE', photo: photoToure, role: 'Nutrition Elite' }
          ].map((coach, i) => (
            <div key={i} style={{ textAlign: 'center', width: '300px' }}>
              <img src={coach.photo} style={{ width: '100%', height: '400px', borderRadius: '15px', objectFit: 'cover', border: `2px solid ${theme.orange}` }} />
              <h3>{coach.nom}</h3>
              <p style={{ color: theme.orange }}>{coach.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION ACCROCHE AVEC IMAGE FIXE (arriereplan.png) */}
      <section style={{ 
        padding: '120px 50px', 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${imgArriereplan})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed', // L'image reste fixe pendant le scroll
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh'
      }}>
        <h2 style={{ 
          fontSize: '4rem', 
          fontWeight: '900', 
          textTransform: 'uppercase', 
          lineHeight: '1.1',
          maxWidth: '1000px',
          margin: '0 auto 20px auto'
        }}>
          PERDEZ DU POIDS <br />
          <span style={{ color: theme.orange }}>OU PRENEZ DU MUSCLE</span> <br />
          EN VOUS FAISANT PLAISIR
        </h2>
        <p style={{ 
          fontSize: '1.8rem', 
          color: theme.orange, 
          fontWeight: '600' 
        }}>
          Trouvez votre équilibre alimentaire quel que soit votre objectif
        </p>
      </section>

      {/* SECTION RÉSULTATS / AVIS CLIENTS */}
      <section id="resultats" style={{ padding: '100px 50px', backgroundColor: theme.black }}>
        <h2 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: '900', marginBottom: '60px', textTransform: 'uppercase' }}>
          NOS <span style={{ color: theme.orange }}>RÉSULTATS</span> CLIENTS
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* AVIS 1 : MARC */}
          <div className="card-shadow" style={{ backgroundColor: theme.gray, padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
            <div style={{ display: 'flex', height: '300px', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px', border: '1px solid #333' }}>
              <img src={imgOmarAvant} alt="Avant" style={{ width: '50%', objectFit: 'cover' }} />
              <img src={imgOmarApres} alt="Après" style={{ width: '50%', objectFit: 'cover', borderLeft: '2px solid #000' }} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', margin: '10px 0' }}>MARC, 28 ANS</h3>
            <p style={{ color: theme.orange, fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>Prise de masse Elite</p>
            <p style={{ color: '#ccc', fontStyle: 'italic', lineHeight: '1.4' }}>
              "L'équipe de DISTAR PERF est incroyablement présente. En 3 mois, j'ai pris 8kg de muscle sec. Merci à Sarr pour le programme !"
            </p>
          </div>

          {/* AVIS 2 : SOPHIE */}
          <div className="card-shadow" style={{ backgroundColor: theme.gray, padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
            <div style={{ display: 'flex', height: '300px', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px', border: '1px solid #333' }}>
              <img src={imgRamaAvant} alt="Avant" style={{ width: '50%', objectFit: 'cover' }} />
              <img src={imgRamaApres} alt="Après" style={{ width: '50%', objectFit: 'cover', borderLeft: '2px solid #000' }} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', margin: '10px 0' }}>SOPHIE, 34 ANS</h3>
            <p style={{ color: theme.orange, fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>Perte de gras radicale</p>
            <p style={{ color: '#ccc', fontStyle: 'italic', lineHeight: '1.4' }}>
              "Je n'y croyais plus, mais Toure a transformé ma vision de la nutrition. -12kg sans aucune frustration. Je me sens revivre."
            </p>
          </div>

          {/* AVIS 3 : KEVIN */}
          <div className="card-shadow" style={{ backgroundColor: theme.gray, padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
            <div style={{ display: 'flex', height: '300px', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px', border: '1px solid #333' }}>
              <img src={imgDianfeAvant} alt="Avant" style={{ width: '50%', objectFit: 'cover' }} />
              <img src={imgDianfeApres} alt="Après" style={{ width: '50%', objectFit: 'cover', borderLeft: '2px solid #000' }} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', margin: '10px 0' }}>KEVIN, 22 ANS</h3>
            <p style={{ color: theme.orange, fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>Préparation Athlétique</p>
            <p style={{ color: '#ccc', fontStyle: 'italic', lineHeight: '1.4' }}>
              "Dianfe m'a aidé à passer un cap mental. Mes performances ont doublé en force. Le suivi 24/7 fait toute la différence."
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
<section id="contact" style={{ padding: '100px 50px', textAlign: 'center', backgroundColor: theme.orange, color: 'black' }}>
  <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '20px' }}>PRÊT À CHANGER ?</h2>
  
  {isSubmitted ? (
    <div style={{ 
      backgroundColor: 'black', 
      color: 'white', 
      padding: '50px', 
      borderRadius: '15px', 
      maxWidth: '600px', 
      margin: '0 auto',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
    }}>
      <h3 style={{ color: theme.orange, fontSize: '2rem', marginBottom: '10px' }}>MERCI {submissionData?.nom} !</h3>
      <p style={{ fontSize: '1.2rem' }}>Ton dossier est en cours d'analyse par l'équipe <strong>DISTAR</strong>.</p>
      <p style={{ marginTop: '20px', color: theme.orange }}>Un coach te contactera très prochainement.</p>
    </div>
  ) : (
    <form onSubmit={handlePostuler} style={{ maxWidth: '600px', margin: '0 auto', display: 'grid', gap: '15px' }}>
      <input 
        id="nom-input" 
        type="text" 
        placeholder="VOTRE NOM" 
        required 
        style={{ padding: '20px', border: 'none', outline: 'none' }} 
      />
      <input 
        id="sexe-input" 
        type="text" 
        placeholder="VOTRE SEXE (M/F)" 
        required 
        style={{ padding: '20px', border: 'none', outline: 'none' }} 
      />
      <input 
        type="email" 
        placeholder="VOTRE EMAIL" 
        required 
        style={{ padding: '20px', border: 'none', outline: 'none' }} 
      />
      <button 
        type="submit"
        style={{ 
          backgroundColor: 'black', 
          color: 'white', 
          padding: '20px', 
          fontWeight: '900', 
          border: 'none', 
          cursor: 'pointer',
          textTransform: 'uppercase'
        }}
      >
        POSTULER AU PROGRAMME
      </button>
    </form>
  )}
</section>
      {/* PAGE DE SUCCÈS */}
      {submissionData && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: 10000, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          textAlign: 'center', 
          padding: '20px',
          // AJOUT DE L'IMAGE ÉQUIPE EN ARRIÈRE-PLAN
          backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${imgEquipe})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div style={{ 
            maxWidth: '600px', 
            border: `2px solid ${theme.orange}`, 
            padding: '50px', 
            borderRadius: '20px', 
            backgroundColor: 'rgba(17, 17, 17, 0.9)', // Légère transparence pour le style
            backdropFilter: 'blur(5px)' // Effet de flou derrière la carte
          }}>
            <h2 style={{ fontSize: '2rem' }}>Bonjour {submissionData.sexe === 'F' ? 'Mme' : 'Mr'} {submissionData.nom},</h2>
            <p style={{ color: '#ccc', fontSize: '1.2rem', lineHeight: '1.6' }}>
              Merci pour l'intérêt porté à <strong>DISTAR PERFORMANCE</strong>. Inscription réussie !<br/><br/>
              Veuillez patienter 72h pour être notifié d'un appel ou message pour votre rendez-vous.
              Entre temps vous recevrez vos identifiants de connexion à votre espace client par email et de par là-bas vous choisirez votre mode de paiement ainsi que votre échéancier. <br /><br />
            </p>
            <button 
              onClick={() => setSubmissionData(null)} 
              className="btn-hover"
              style={{ marginTop: '30px', padding: '15px 40px', background: theme.orange, color: 'black', fontWeight: 'bold', border: 'none', cursor: 'pointer', transition: '0.3s' }}
            >
              RETOUR
            </button>
          </div>
        </div>
      )}

      {/* AVIS CLIENTS - Style Bulles Costa */}
<section style={{ padding: '100px 50px' }}>
  <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '900', marginBottom: '50px' }}>AVIS</h2>
  <div style={{ display: 'flex', gap: '30px', overflowX: 'auto', paddingBottom: '30px' }}>
    {[
      {
        nom: 'Ndoye',
        texte: "Un coaching 100% sur mesure. L'équipe de DISTAR PERF est ultra disponible et les plans alimentaires sont flexibles. Je recommande !"
      },
      {
        nom: 'Penda',
        texte: "J'avais peur que le coaching en ligne soit impersonnel, mais l'équipe est incroyablement présente. Le suivi via WhatsApp est instantané, c'est comme avoir un coach dans sa poche 24h/24 !"
      },
      {
        nom: 'Anta',
        texte: "Résultats visibles dès le premier mois. Le programme de sport s'adapte parfaitement à mon emploi du temps chargé. Une expérience incroyable."
      }
    ].map((avis, i) => (
      <div key={i} style={{ minWidth: '350px', backgroundColor: theme.gray, padding: '40px', borderRadius: '10px', borderLeft: `5px solid ${theme.orange}` }}>
        <div style={{ color: theme.orange, marginBottom: '15px' }}>★★★★★</div>
        <p style={{ fontStyle: 'italic', color: '#ccc', lineHeight: '1.6' }}>
          "{avis.texte}"
        </p>
        <p style={{ fontWeight: '900', marginTop: '20px' }}>- {avis.nom}</p>
      </div>
    ))}
  </div>
</section>

      <footer style={{ padding: '50px', textAlign: 'center', opacity: 0.6 }}>
        <p>© 2026 DISTAR PERFORMANCE - DIANFE | SARR | TOURE</p>
      </footer>
    </div>
  );
}