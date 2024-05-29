import React, { useState, useEffect } from 'react';
import '../App.css';
import { HashLink as Link } from 'react-router-hash-link';
import Line from '../assets/images/line.svg';
import Portrait from '../assets/images/portrait-jeune-homme.png';
import RectangleGris from '../assets/images/Rectangle_gris.png';
import RectangleOrange from '../assets/images/Rectangle_orange.png';
import Vector from '../assets/images/Vector.svg';

function Profil() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Récupérer la position de défilement verticale de la page
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            // Définir isVisible sur true si la position de défilement est dans une plage spécifique
            setIsVisible(scrollTop > 500); // Modifier 100 selon vos besoins
        };

        // Ajouter un écouteur d'événements de défilement lorsque le composant monte
        window.addEventListener('scroll', handleScroll);

        // Retirer l'écouteur d'événements de défilement lorsque le composant est démonté
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`px-10 bg-[#B181811A] py-10 ${isVisible ? 'fade-in' : 'fade-out'}`} id="profil">
            <div className="flex flex-col justify-center items-center animate-slide-up">
                <span className="text-center text-[35px] lg:text-[45px] font-bold uppercase">Profil</span>
                <img src={Line} alt='' className="w-16 lg:w-20"/>
            </div>
            <div className="lg:flex">
                <div className={`w-full lg:w-[45%] ${isVisible ? 'image-slide-left' : ''}`}>
                    <div className="lg:relative flex justify-center items-center translate-y-40 lg:translate-y-48">
                        <div className="absolute w-60 lg:w-64">
                            <img src={RectangleOrange} alt='' className="w-full translate-x-2 translate-y-2"/>
                        </div>
                        <div className="absolute w-14">
                            <img src={Vector} alt='' className="w-full -translate-x-28 translate-y-2 lg:-translate-x-32 lg:translate-y-6"/>
                        </div>
                        <div className="absolute w-60 lg:w-64">
                            <img src={RectangleGris} alt='' className="w-full"/>
                        </div>
                        <div className="absolute w-80 translate-x-16 translate-y-0.5 md:translate-x-20 lg:translate-x-20 lg:translate-y-2">
                            <img src={Portrait} alt='' className="w-full"/>
                        </div>
                    </div>
                </div>
                <div className={`w-full pt-80 lg:w-[55%] lg:pt-10 ${isVisible ? 'slide-left' : ''}`}>
                    <div className="text-[25px] lg:text-[35px] font-bold">
                        DOSSA Marie-Edmond
                    </div>
                    <div className="text-[13px] lg:text-[15px] font-normal uppercase text-[#666564] leading-5 lg:leading-7 lg:w-[65%] py-2">
                        Lorem ipsum dolor sit amet, 
                        consectetuer adipiscing elit. 
                        Maecenas porttitor congue massa. 
                        Fusce posuere. Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit. 
                        Maecenas porttitor congue massa.
                        Fusce posuere. Lorem ipsum dolor sit amet, 
                        consectetuer adipiscing elit. Maecenas porttitor congue massa.
                        Fusce posuere.
                    </div>
                    <div className="py-8">
                        <Link smooth to="">
                            <button className="w-fit h-fit p-1.5 px-6 bg-[#F57F20] rounded-lg text-[#FFFCFC] text-[17px] shadow-md-top hover:shadow-xl hover:rounded-xl">
                                Télécharger mon cv
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profil;
