// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Accueil from './components/accueil';
import Profil from './components/profil';
import Competence from './components/competence';
import Services from './components/services';
import Realisation from './components/realisation';
import Contact from './components/contact';
import Footer from './components/footer';
import ScrollToTopButton from './components/scrollToTopButton';
import './App.css';

function App() {
  return (
    <div className="bg-gradient-to-r from-orange-100 to-white">
      <Router >
        <Header className=""/>
        <div className="page-container">
          <Accueil />
          <Profil />
          <Competence />
          <Services />
          <Realisation />
          <Contact />
        </div>
        <Footer />
        <ScrollToTopButton />
      </Router>

    </div>
  );
}

export default App;
