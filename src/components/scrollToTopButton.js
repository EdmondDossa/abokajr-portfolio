import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa'; // Importer l'icône d'une bibliothèque d'icônes, par exemple react-icons
import '../App.css'; // Importer le fichier CSS pour les styles du bouton

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour faire défiler vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Fonction pour afficher ou masquer le bouton en fonction de la position de défilement
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Ajouter un écouteur d'événements pour détecter le défilement de la page
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <FaArrowCircleUp style={{color: '#F57F20', fontSize: '45px' }} /> {/* Ajouter le style inline pour la couleur */}
    </div>
  );
};

export default ScrollToTopButton;
