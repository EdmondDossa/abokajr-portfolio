import React, { useState, useEffect } from 'react';
import '../App.css';
import { Line, ProjectImage, Rectangle } from '../assets/index';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Realisation() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Récupérer la position de défilement verticale de la page
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            // Définir isVisible sur true si la position de défilement est dans une plage spécifique
            setIsVisible(scrollTop > 2050); // Modifier 100 selon vos besoins
        };

        // Ajouter un écouteur d'événements de défilement lorsque le composant monte
        window.addEventListener('scroll', handleScroll);

        // Retirer l'écouteur d'événements de défilement lorsque le composant est démonté
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="px-4 lg:px-10 py-10" id="realisation">
            <div className="flex flex-col justify-center items-center">
                <span className="text-center text-[35px] lg:text-[45px] font-bold uppercase">Réalisation</span>
                <img src={Line} alt='' className="w-16 lg:w-20" />
            </div>
            <div className="py-12 lg:flex pl-0 lg:pl-28 lg:py-20">
                {/* Contenu mobile */}
                <div className={`lg:hidden w-full lg:w-0 ${isVisible ? 'slide-left' : ''}`}>
                    <div className="relative flex justify-center items-center translate-y-32">
                        <div className="absolute pt-6">
                            <img src={Rectangle} alt="" className="w-64" />
                        </div>
                        <div className="absolute pl-12">
                            <img src={ProjectImage} alt="" className="w-64" />
                        </div>
                    </div>

                </div>
                <div className={`w-full pt-[300px] lg:pt-0 lg:w-[55%] flex flex-col lg:order-1 ${isVisible ? 'image-slide-left' : ''}`}>
                    <span className="text-[#F57F20] text-[30px] lg:text-[35px] font-bold">PROJECT 1</span>
                    <span className="text-[18px] lg:text-[20px] font-semibold py-4">Application mobile de rencontres</span>
                    <span className="text-[#666564] uppercase text-[12px] lg:text-[14px] leading-6 lg:w-[85%]">
                        Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.
                        Maecenas porttitor congue massa.
                        Fusce posuere. Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.
                        Maecenas porttitor congue massa.
                        Fusce posuere. Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.
                        Maecenas porttitor congue massa.
                        Fusce posuere.
                    </span>
                    <Link smooth to="">
                        <button className="py-4 flex space-x-2 hover:bg-white hover:shadow-xl hover:rounded-lg hover:w-fit hover:px-4 hover:p-2 hover:my-6">
                            <svg className="w-4 lg:w-5 translate-y-0.5" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.2713 13.6563H1.78125C1.47459 13.6563 1.1805 13.5344 0.963658 13.3176C0.746819 13.1008 0.625 12.8067 0.625 12.5C0.625 12.1933 0.746819 11.8993 0.963658 11.6824C1.1805 11.4656 1.47459 11.3438 1.78125 11.3438H23.2713L14.8376 2.91238C14.6205 2.69527 14.4985 2.4008 14.4985 2.09376C14.4985 1.78671 14.6205 1.49224 14.8376 1.27513C15.0547 1.05802 15.3492 0.936045 15.6562 0.936045C15.9633 0.936045 16.2578 1.05802 16.4749 1.27513L26.8811 11.6814C26.9888 11.7888 27.0742 11.9164 27.1325 12.0569C27.1908 12.1973 27.2208 12.3479 27.2208 12.5C27.2208 12.6521 27.1908 12.8027 27.1325 12.9432C27.0742 13.0836 26.9888 13.2112 26.8811 13.3186L16.4749 23.7249C16.2578 23.942 15.9633 24.064 15.6562 24.064C15.3492 24.064 15.0547 23.942 14.8376 23.7249C14.6205 23.5078 14.4985 23.2133 14.4985 22.9063C14.4985 22.5992 14.6205 22.3047 14.8376 22.0876L23.2713 13.6563Z" fill="#F57F20" />
                            </svg>
                            <span className="text-[#F57F20] text-[16px] lg:text-[20px]">Voir le projet</span>
                        </button>
                    </Link>
                </div>
                <div className={`invisible lg:visible w-full lg:w-[40%] lg:order-2 ${isVisible ? 'slide-left' : ''}`}>
                    <div className="relative">
                        <div className="absolute py-6">
                            <img src={Rectangle} alt="" className="w-80" />
                        </div>
                        <div className="absolute px-6">
                            <img src={ProjectImage} alt="" className="w-80" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="pt-0 lg:flex pl-0 lg:pl-28 lg:py-10">
                <div className={`lg:hidden w-full lg:w-0 ${isVisible ? 'image-slide-left' : ''}`}>
                    <div className="relative flex justify-center items-center translate-y-32">
                        <div className="absolute pt-6">
                            <img src={Rectangle} alt="" className="w-64" />
                        </div>
                        <div className="absolute pl-12">
                            <img src={ProjectImage} alt="" className="w-64" />
                        </div>
                    </div>

                </div>
                <div className={`invisible lg:visible w-full lg:w-[40%] ${isVisible ? 'image-slide-left' : ''}`}>
                    <div className="relative px-4 lg:px-0">
                        <div className="absolute py-6">
                            <img src={Rectangle} alt="" className="w-64 lg:w-80" />
                        </div>
                        <div className="absolute px-6">
                            <img src={ProjectImage} alt="" className="w-64 lg:w-80" />
                        </div>
                    </div>

                </div>
                <div className={`pt-[300px] lg:pt-0 w-full lg:w-[60%] flex flex-col ${isVisible ? 'slide-left' : ''}`}>
                    <span className="text-[#F57F20] text-[30px] lg:text-[35px] font-bold">PROJECT 2</span>
                    <span className="text-[18px] lg:text-[20px] font-semibold py-4">Application mobile de rencontres</span>
                    <span className="text-[#666564] uppercase text-[12px] lg:text-[14px] leading-6 w-full lg:w-[75%]">
                        Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.
                        Maecenas porttitor congue massa.
                        Fusce posuere. Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.
                        Maecenas porttitor congue massa.
                        Fusce posuere. Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.
                        Maecenas porttitor congue massa.
                        Fusce posuere.
                    </span>
                    <Link smooth to="">
                        <button className="py-4 flex space-x-2 hover:bg-white hover:shadow-xl hover:rounded-lg hover:w-fit hover:px-4 hover:p-2 hover:my-6">
                            <svg className="w-4 lg:w-5 translate-y-0.5" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.2713 13.6563H1.78125C1.47459 13.6563 1.1805 13.5344 0.963658 13.3176C0.746819 13.1008 0.625 12.8067 0.625 12.5C0.625 12.1933 0.746819 11.8993 0.963658 11.6824C1.1805 11.4656 1.47459 11.3438 1.78125 11.3438H23.2713L14.8376 2.91238C14.6205 2.69527 14.4985 2.4008 14.4985 2.09376C14.4985 1.78671 14.6205 1.49224 14.8376 1.27513C15.0547 1.05802 15.3492 0.936045 15.6562 0.936045C15.9633 0.936045 16.2578 1.05802 16.4749 1.27513L26.8811 11.6814C26.9888 11.7888 27.0742 11.9164 27.1325 12.0569C27.1908 12.1973 27.2208 12.3479 27.2208 12.5C27.2208 12.6521 27.1908 12.8027 27.1325 12.9432C27.0742 13.0836 26.9888 13.2112 26.8811 13.3186L16.4749 23.7249C16.2578 23.942 15.9633 24.064 15.6562 24.064C15.3492 24.064 15.0547 23.942 14.8376 23.7249C14.6205 23.5078 14.4985 23.2133 14.4985 22.9063C14.4985 22.5992 14.6205 22.3047 14.8376 22.0876L23.2713 13.6563Z" fill="#F57F20" />
                            </svg>
                            <span className="text-[#F57F20] text-[16px] lg:text-[20px]">Voir le projet</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="py-12 lg:flex pl-0 lg:pl-28 lg:py-20">
                {/* Contenu mobile */}
                <div className={`lg:hidden w-full lg:w-0 ${isVisible ? 'slide-left' : ''}`}>
                    <div className="relative flex justify-center items-center translate-y-32">
                        <div className="absolute pt-6">
                            <img src={Rectangle} alt="" className="w-64" />
                        </div>
                        <div className="absolute pl-12">
                            <img src={ProjectImage} alt="" className="w-64" />
                        </div>
                    </div>

                </div>
                <div className={`w-full pt-[300px] lg:pt-0 lg:w-[55%] flex flex-col lg:order-1 ${isVisible ? 'image-slide-left' : ''}`}>
                    <span className="text-[#F57F20] text-[30px] lg:text-[35px] font-bold">PROJECT 3</span>
                    <span className="text-[18px] lg:text-[20px] font-semibold py-4">Application mobile de rencontres</span>
                    <span className="text-[#666564] uppercase text-[12px] lg:text-[14px] leading-6 lg:w-[85%]">
                        Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.
                        Maecenas porttitor congue massa.
                        Fusce posuere. Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.
                        Maecenas porttitor congue massa.
                        Fusce posuere. Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.
                        Maecenas porttitor congue massa.
                        Fusce posuere.
                    </span>
                    <Link smooth to="">
                        <button className="py-4 flex space-x-2 hover:bg-white hover:shadow-xl hover:rounded-lg hover:w-fit hover:px-4 hover:p-2 hover:my-6">
                            <svg className="w-4 lg:w-5 translate-y-0.5" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.2713 13.6563H1.78125C1.47459 13.6563 1.1805 13.5344 0.963658 13.3176C0.746819 13.1008 0.625 12.8067 0.625 12.5C0.625 12.1933 0.746819 11.8993 0.963658 11.6824C1.1805 11.4656 1.47459 11.3438 1.78125 11.3438H23.2713L14.8376 2.91238C14.6205 2.69527 14.4985 2.4008 14.4985 2.09376C14.4985 1.78671 14.6205 1.49224 14.8376 1.27513C15.0547 1.05802 15.3492 0.936045 15.6562 0.936045C15.9633 0.936045 16.2578 1.05802 16.4749 1.27513L26.8811 11.6814C26.9888 11.7888 27.0742 11.9164 27.1325 12.0569C27.1908 12.1973 27.2208 12.3479 27.2208 12.5C27.2208 12.6521 27.1908 12.8027 27.1325 12.9432C27.0742 13.0836 26.9888 13.2112 26.8811 13.3186L16.4749 23.7249C16.2578 23.942 15.9633 24.064 15.6562 24.064C15.3492 24.064 15.0547 23.942 14.8376 23.7249C14.6205 23.5078 14.4985 23.2133 14.4985 22.9063C14.4985 22.5992 14.6205 22.3047 14.8376 22.0876L23.2713 13.6563Z" fill="#F57F20" />
                            </svg>
                            <span className="text-[#F57F20] text-[16px] lg:text-[20px]">Voir le projet</span>
                        </button>
                    </Link>
                </div>
                <div className={`invisible lg:visible w-full lg:w-[40%] lg:order-2 ${isVisible ? 'slide-left' : ''}`}>
                    <div className="relative">
                        <div className="absolute py-6">
                            <img src={Rectangle} alt="" className="w-80" />
                        </div>
                        <div className="absolute px-6">
                            <img src={ProjectImage} alt="" className="w-80" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex justify-center items-center">
                <Link smooth to="">
                    <button className="w-fit h-fit p-1.5 px-6 bg-[#F57F20] rounded-lg text-[#FFFCFC] text-[14px] lg:text-[17px] shadow-md-top hover:shadow-xl hover:rounded-xl">
                        Voir plus
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Realisation;