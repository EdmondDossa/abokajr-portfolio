import React, { useState, useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import { Logo } from '../assets/index';

function Header() {
  const [activeButton, setActiveButton] = useState('');
  const [isClick, setIsClick] = useState(true);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsClick(false);
  }

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
    setIsClick(true);
  }

  const handleNavItemClick = () => {
    closeNavbar();
  }

  return (
    <header className="flex px-8 py-8 sticky h-28 top-0 bg-gradient-to-r from-orange-100 to-white md:bg-gradient-to-r from-orange-100 to-white lg:bg-gradient-to-r from-orange-100 to-white z-10 animate-slide-in header">
      <div className="w-[190px] -translate-y-10 logo">
        <Link smooth={true} to="#accueil">
          <img src={Logo} alt="logo" className="w-full" />
        </Link>
      </div>
      <nav className="flex justify-between px-12" ref={navRef}>
        <div className="w-[85%] py-4 flex">
          <ul className="flex space-x-16 text-[20px] font-medium">
            <li id="accueil-btn">
              <Link smooth={true} to="#accueil" className={activeButton === 'accueil' ? 'active' : ''} onClick={() => { setActiveButton('accueil'); handleNavItemClick(); }}>Accueil</Link>
            </li>
            <li id="profil-btn">
              <Link smooth={true} to="#profil" className={`nav-link ${activeButton === 'profil' ? 'active' : ''}`} onClick={() => { setActiveButton('profil'); handleNavItemClick(); }}>Profil</Link>
            </li>
            <li id="competence-btn">
              <Link smooth={true} to="#competence" className={`nav-link ${activeButton === 'competence' ? 'active' : ''}`} onClick={() => { setActiveButton('competence'); handleNavItemClick(); }}>Compétence</Link>
            </li>
            <li id="service-btn">
              <Link smooth={true} to="#services" className={`nav-link ${activeButton === 'services' ? 'active' : ''}`} onClick={() => { setActiveButton('services'); handleNavItemClick(); }}>Services</Link>
            </li>
            <li id="realisation-btn">
              <Link smooth={true} to="#realisation" className={`nav-link ${activeButton === 'realisation' ? 'active' : ''}`} onClick={() => { setActiveButton('realisation'); handleNavItemClick(); }}>Réalisation</Link>
            </li>
            <li id="contact-btn">
              <Link smooth={true} to="#contact" className={`nav-link ${activeButton === 'contact' ? 'active' : ''}`} onClick={() => { setActiveButton('contact'); handleNavItemClick(); }}>Contact</Link>
            </li>
          </ul>
        </div>
        <button id="cv-btn" className="w-fit h-fit p-1.5 px-5 translate-x-28 translate-y-3.5 bg-[#F57F20] rounded-lg -translate-y-1 text-[#FFFCFC] text-[17px] shadow-md-top hover:shadow-xl hover:rounded-xl">
          Mon CV
        </button>
        {!isClick && (
          <button className="nav-btn nav-close-btn" onClick={closeNavbar}>
            <FaTimes />
          </button>
        )}
      </nav>
      {isClick && (<button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      )}
    </header>
  );
}

export default Header;
