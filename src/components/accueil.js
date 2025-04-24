import React, { useState } from 'react';
import '../App.css';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Image1, Vscode, Laravel, Vuejs, Php, Reactjs, Globe, Twitter, Instagram, Youtube, Facebook } from '../assets/index';

const Accueil = () => {
    const [activeButton, setActiveButton] = useState('');
    return (
        <div className="lg:flex px-10 py-10 lg:py-16 justify-between animate-slide-in" id="accueil">
            <div className="w-full lg:w-[50%] lg:px-9">
                <div className="flex bg-white w-fit h-fit p-2 px-4 rounded-lg text-[#F57F20] font-semibold text-[17px] lg:text-[18px] shadow-xl">
                    Bienvenue dans mon monde !
                    <img src={Globe} alt="" className="w-6 translate-x-2" />
                </div>
                <span className="md:text-[40px] lg:text-[60px] pt-8 lg:py-0 text-[30px] font-bold uppercase animate-word ">
                    Je suis Aboka Jr et je suis un <span className="text-[#F57F20]">Développeur web</span>
                </span>
                <div className="py-2">
                    <span className="md:text-[15px] lg:text-[16px] text-[13px] text-[#666564] uppercase">
                        Je suis un développeur web passionné, spécialisé dans la création de sites web et d'applications web.
                        Mon objectif est de transformer vos idées en solutions numériques innovantes et performantes.

                    </span>
                </div>
                <div className="flex space-x-4 lg:space-x-10 py-4 lg:py-8 lg:px-4">
                    <Link smooth to="">
                        <button>
                            <img
                                src={Twitter}
                                alt=""
                                className="w-11 lg:w-12"
                            />
                        </button>
                    </Link>
                    <Link smooth to="">
                        <button>
                            <img
                                src={Instagram}
                                alt=""
                                className="w-11 lg:w-12"
                            />
                        </button>
                    </Link>
                    <Link smooth to="">
                        <button>
                            <img
                                src={Youtube}
                                alt=""
                                className="w-11 lg:w-12"
                            />
                        </button>
                    </Link>
                    <Link smooth to="">
                        <button>
                            <img
                                src={Facebook}
                                alt=""
                                className="w-11 lg:w-12"
                            />
                        </button>
                    </Link>
                </div>
                <div className="flex space-x-2 lg:space-x-4 py-2">
                    <div className="px-0 lg:px-4">
                        <Link smooth={true} to="#profil" className={`nav-link ${activeButton === 'profil' ? 'active' : ''}`} onClick={() => { setActiveButton('profil') }}>
                            <button className="w-fit h-fit p-1.5 px-4 lg:px-6 bg-[#F57F20] rounded-lg text-[#FFFCFC] text-[13px] lg:text-[17px] shadow-md-top hover:shadow-xl hover:rounded-xl">
                                Mon profil
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link smooth={true} to="#contact" className={`nav-link ${activeButton === 'contact' ? 'active' : ''}`} onClick={() => { setActiveButton('contact') }}>
                            <button className="flex bg-white rounded-lg p-1.5 px-6 lg:px-8 w-fit h-fit text-[14px] lg:text-[17px] font-semibold shadow-button hover:shadow-xl hover:rounded-xl hover:text-[#F57F20]">
                                Contactez-moi
                                <svg className="w-4 lg:w-5 translate-y-0.5 translate-x-3" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.2713 13.6563H1.78125C1.47459 13.6563 1.1805 13.5344 0.963658 13.3176C0.746819 13.1008 0.625 12.8067 0.625 12.5C0.625 12.1933 0.746819 11.8993 0.963658 11.6824C1.1805 11.4656 1.47459 11.3438 1.78125 11.3438H23.2713L14.8376 2.91238C14.6205 2.69527 14.4985 2.4008 14.4985 2.09376C14.4985 1.78671 14.6205 1.49224 14.8376 1.27513C15.0547 1.05802 15.3492 0.936045 15.6562 0.936045C15.9633 0.936045 16.2578 1.05802 16.4749 1.27513L26.8811 11.6814C26.9888 11.7888 27.0742 11.9164 27.1325 12.0569C27.1908 12.1973 27.2208 12.3479 27.2208 12.5C27.2208 12.6521 27.1908 12.8027 27.1325 12.9432C27.0742 13.0836 26.9888 13.2112 26.8811 13.3186L16.4749 23.7249C16.2578 23.942 15.9633 24.064 15.6562 24.064C15.3492 24.064 15.0547 23.942 14.8376 23.7249C14.6205 23.5078 14.4985 23.2133 14.4985 22.9063C14.4985 22.5992 14.6205 22.3047 14.8376 22.0876L23.2713 13.6563Z" fill="currentColor" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full pt-8 lg:w-[50%] lg:pr-9 lg:pt-0">
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <div className="w-[80%] md:w-[90%] lg:w-full">
                            <img
                                src={Image1}
                                alt=""
                                className="translate-y-2 translate-x-6 lg:translate-x-0 lg:-translate-y-2"
                            />
                        </div>
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="flex justify-around">
                                <img
                                    src={Vscode}
                                    alt=""
                                    className="lg:w-10 lg:h-10 md:-translate-x-14 -translate-x-10 -translate-y-10 lg:-translate-x-20 lg:-translate-y-16"
                                />
                                <img
                                    src={Laravel}
                                    alt=""
                                    className="w-10 h-10 -translate-x-4 -translate-y-28 md:-translate-y-40 lg:-translate-x-10 lg:-translate-y-48"
                                />
                                <img
                                    src={Vuejs}
                                    alt=""
                                    className="w-16 h-16 translate-x-32 -translate-y-32 md:-translate-y-44 lg:translate-x-40 lg:-translate-y-52"
                                />
                                <img
                                    src={Php}
                                    alt=""
                                    className="w-16 h-16 -translate-y-14 translate-x-36 md:-translate-y-24 md:translate-x-52 lg:translate-x-60 lg:-translate-y-28"
                                />
                                <img
                                    src={Reactjs}
                                    alt=""
                                    className="w-16 h-16 translate-x-14 translate-y-6 md:translate-x-28 md:-translate-y-2 lg:translate-y-0 lg:translate-x-32"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accueil;