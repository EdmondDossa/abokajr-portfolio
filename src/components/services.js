import React, { useState, useEffect } from 'react';
import '../App.css';
import { Line, Desktop, PcImage } from '../assets/index'

function Services() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Récupérer la position de défilement verticale de la page
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            // Définir isVisible sur true si la position de défilement est dans une plage spécifique
            setIsVisible(scrollTop > 1450); // Modifier 100 selon vos besoins
        };

        // Ajouter un écouteur d'événements de défilement lorsque le composant monte
        window.addEventListener('scroll', handleScroll);

        // Retirer l'écouteur d'événements de défilement lorsque le composant est démonté
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="px-10 bg-[#B181811A] py-10" id="services">
            <div className="flex flex-col justify-center items-center">
                <span className="text-center text-[35px] lg:text-[45px] font-bold uppercase">Services</span>
                <img src={Line} alt='' className="w-16 lg:w-20" />
            </div>
            <div className={`grid grid-cols-1 gap-y-6 lg:gap-y-0 lg:grid-cols-3 lg:gap-x-10 py-12 ${isVisible ? 'fade-in' : 'fade-out'}`}>
                <div className="bg-white bg-opacity-50 w-fit h-fit flex flex-col justify-center items-center rounded-lg p-5 lg:p-10">
                    <img src={Desktop} alt="image" className="w-32 md:w-44 lg:w-48 -translate-y-6 lg:-translate-y-8" />
                    <span className="-translate-y-9 lg:-translate-y-12 font-bold text-[20px] md:text-[24px] lg:text-[25px]">Conception de site web</span>
                    <div className="text-[#666564] text-[14px] md:text-[17px] lg:text-[18px] text-center -translate-y-6">
                        Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.
                        Maecenas porttitor congue massa.
                        Fusce posuere.
                    </div>
                </div>
                <div className="bg-[#F57F20] w-fit h-fit flex flex-col justify-center items-center rounded-lg p-5 px-6">
                    <img src={PcImage} alt="image" className="w-32 md:w-44 lg:w-48 -translate-y-6 lg:-translate-y-8" />
                    <span className="-translate-y-9 lg:-translate-y-12 font-bold text-[18px] md:text-[24px] lg:text-[25px] text-center text-white">Conception d’application web</span>
                    <div className="text-[#CFCECD] text-[14px] md:text-[17px] lg:text-[18px] text-center -translate-y-5 lg:-translate-y-10">
                        Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.
                        Maecenas porttitor congue massa.
                        Fusce posuere.
                    </div>
                </div>
                <div className="bg-white bg-opacity-50 w-fit h-fit flex flex-col justify-center items-center rounded-lg p-5 lg:p-10">
                    <img src={Desktop} alt="image" className="w-32 md:w-44 lg:w-48 -translate-y-6 lg:-translate-y-8" />
                    <span className="-translate-y-9 lg:-translate-y-12 font-bold text-[20px] md:text-[24px] lg:text-[25px]">Conception de site web</span>
                    <div className="text-[#666564] text-[14px] md:text-[17px] lg:text-[18px] text-center -translate-y-6">
                        Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.
                        Maecenas porttitor congue massa.
                        Fusce posuere.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;