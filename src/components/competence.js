import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../App.css';
import { Line, Langage, Framework, Cms, ImagePhp, ImageJs, ImageJava, ImagePython, ImageDart } from '../assets/index';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Competence({ percentage }) {
    const [isTableLangage, setIsTableLangage] = useState(true);
    const [isTableFramework, setIsTableFramework] = useState(false);
    const [isTableCms, setIsTableCms] = useState(false);
    const showLangage = () => {
        setIsTableLangage(true);
        setIsTableFramework(false);
        setIsTableCms(false)
    };
    const showFramework = () => {
        setIsTableLangage(false);
        setIsTableFramework(true);
        setIsTableCms(false)
    };
    const showCms = () => {
        setIsTableLangage(false);
        setIsTableFramework(false);
        setIsTableCms(true)
    }

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Récupérer la position de défilement verticale de la page
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            // Définir isVisible sur true si la position de défilement est dans une plage spécifique
            setIsVisible(scrollTop > 1020); // Modifier 100 selon vos besoins
        };

        // Ajouter un écouteur d'événements de défilement lorsque le composant monte
        window.addEventListener('scroll', handleScroll);

        // Retirer l'écouteur d'événements de défilement lorsque le composant est démonté
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const customStylesPhp = {
        path: {
            stroke: '#F57F20',
            transform: 'rotate(55deg) translateY(-61%) translateX(20%)',
        },
        text: {
            fill: '#F57F20',
            fontSize: '28px',
        },
    }
    const customStylesJs = {
        path: {
            stroke: '#F57F20',
            transform: 'rotate(58deg) translateY(-65%) translateX(19%)',
        },
        text: {
            fill: '#F57F20',
            fontSize: '28px',
        },
    }
    const customStylesJava = {
        path: {
            stroke: '#F57F20',
            transform: 'rotate(90deg) translateY(-100%) translateX(1%)',
        },
        text: {
            fill: '#F57F20',
            fontSize: '28px',
        },
    }
    const customStylesPython = {
        path: {
            stroke: '#F57F20',
            transform: 'rotate(108deg) translateY(-115%) translateX(-18%)',
        },
        text: {
            fill: '#F57F20',
            fontSize: '28px',
        },
    }
    const customStylesDart = {
        path: {
            stroke: '#F57F20',
            transform: 'rotate(108deg) translateY(-115%) translateX(-18%)',
        },
        text: {
            fill: '#F57F20',
            fontSize: '28px',
        },
    }
    return (
        <div className="px-10 py-10" id="competence">
            <div className="flex flex-col justify-center items-center">
                <span className="text-center text-[35px] lg:text-[45px] font-bold uppercase">Compétence</span>
                <img src={Line} alt='' className="w-16 lg:w-20" />
            </div>

            <div className={`py-14 lg:py-10 lg:px-10 lg:flex ${isVisible ? 'fade-in' : 'fade-out'}`}>
                <div className="grid grid-cols-3 gap-x-12 md:pl-6 lg:pl-0 lg:gap-x-0 lg:grid-cols-2 w-full lg:w-[50%] lg:space-x-8">
                    <div className="">
                        <Link smooth to="">
                            <button className={`w-fit h-fit p-1 px-4 lg:p-3 lg:px-12 rounded-lg text-black text-[13px] md:text-[15px] lg:text-[16px] border-solid border-[#F57F20] border-[1px] lg:translate-x-8 lg:translate-y-10 ${isTableLangage ? 'text-white bg-[#F57F20] shadow-md-top' : ''}`} onClick={() => showLangage()}>
                                Langage
                            </button>
                        </Link>
                        <img
                            src={Langage}
                            alt=""
                            className="w-8 lg:w-12 -translate-x-4 -translate-y-14 lg:-translate-y-10 lg:translate-x-2"
                        />
                    </div>
                    <div className="-translate-x-2 lg:-translate-x-10 lg:translate-y-0">
                        <Link smooth to="">
                            <button className={`w-fit h-fit p-1 px-4 lg:p-3 lg:px-10 rounded-lg lg:translate-x-8 lg:translate-y-10 text-black text-[13px] md:text-[15px] lg:text-[16px] border-solid border-[#F57F20] border-[1px] ${isTableFramework ? 'text-white bg-[#F57F20] shadow-md-top' : ''}`} onClick={() => showFramework()}>
                                Framework
                            </button>
                        </Link>
                        <img
                            src={Framework}
                            alt=""
                            className="w-9 lg:w-14 -translate-x-4 -translate-y-14 lg:-translate-y-10 lg:translate-x-2"
                        />
                    </div>

                    <div className="lg:-translate-y-12">
                        <Link smooth to="">
                            <button className={`w-fit h-fit p-1 px-6 lg:p-2.5 lg:px-16 lg:translate-y-10 rounded-lg text-black text-[14px] md:text-[15px] lg:text-[17px] border-solid border-[#F57F20] border-[1px] ${isTableCms ? 'text-white bg-[#F57F20] shadow-md-top' : ''}`} onClick={() => showCms()}>
                                Cms
                            </button>
                        </Link>
                        <img
                            src={Cms}
                            alt=""
                            className="w-8 lg:w-12 -translate-x-4 -translate-y-14 lg:-translate-y-10 lg:-translate-x-6"
                        />
                    </div>
                </div>
                {isTableLangage && !isTableFramework && !isTableCms && (
                    <div className="w-full lg:w-[50%] p-4 animate-slide-up">
                        <div className="text-[#F57F20] text-[15px] lg:text-[18px] p-2 px-8 border-solid border-[1px] border-[#F57F20] rounded-t-lg">
                            Langage
                        </div>
                        <div className="grid grid-cols-3 gap-10 lg:gap-12 p-4 lg:px-14 pb-12 border-solid border-t-0 border-r-[1px] border-l-[1px] border-b-[1px] border-[#F57F20] rounded-b-lg">
                            <div className="relative">
                                <div className="w-16 p-3.5 lg:px-4 lg:w-fit h-fit border-solid border-[1px] border-[#F57F20] rounded-lg">
                                    <img
                                        src={ImagePhp}
                                        alt=""
                                        className="w-full lg:w-12"
                                    />

                                </div>
                                <div className="w-8 -translate-y-4 translate-x-12 lg:translate-x-16 bg-[#fff8ef]">
                                    <CircularProgressbar value={85} text={`${85}%`} styles={customStylesPhp} />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="w-16 p-3.5 px-4 lg:w-fit h-fit border-solid border-[1px] border-[#F57F20] rounded-lg">
                                    <img
                                        src={ImageJs}
                                        alt=""
                                        className="w-full lg:w-11"
                                    />
                                </div>
                                <div className="w-8 -translate-y-4 translate-x-12 lg:translate-x-16 bg-[#fff8ef]">
                                    <CircularProgressbar value={80} text={`${80}%`} styles={customStylesJs} />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="w-14 p-2 lg:w-fit h-fit border-solid border-[1px] border-[#F57F20] rounded-lg">
                                    <img
                                        src={ImageJava}
                                        alt=""
                                        className="w-full lg:w-14"
                                    />
                                </div>
                                <div className="w-8 -translate-y-5 translate-x-9 lg:translate-x-14 bg-[#fff8ef]">
                                    <CircularProgressbar value={75} text={`${75}%`} styles={customStylesJava} />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="w-16 p-3 lg:w-fit h-fit border-solid border-[1px] border-[#F57F20] rounded-lg">
                                    <img
                                        src={ImagePython}
                                        alt=""
                                        className="w-full lg:w-14"
                                    />
                                </div>
                                <div className="w-8 -translate-y-4 translate-x-11 lg:translate-x-16 bg-[#fff8ef]">
                                    <CircularProgressbar value={70} text={`${70}%`} styles={customStylesPython} />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="w-16 p-2.5 py-3.5 lg:w-fit h-fit border-solid border-[1px] border-[#F57F20] rounded-lg">
                                    <img
                                        src={ImageDart}
                                        alt=""
                                        className="w-full lg:w-14"
                                    />
                                </div>
                                <div className="w-8 -translate-y-5 translate-x-12 lg:translate-x-16 bg-[#fff8ef]">
                                    <CircularProgressbar value={65} text={`${65}%`} styles={customStylesDart} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {isTableFramework && !isTableLangage && !isTableCms && (
                    <div className="w-full lg:w-[50%] p-4 animate-slide-up">
                        <div className="text-[#F57F20] text-[15px] lg:text-[18px] p-2 px-8 border-solid border-[1px] border-[#F57F20] rounded-t-lg">
                            Framework
                        </div>
                        <div className="grid grid-cols-3 gap-10 lg:gap-12 p-4 lg:px-14 pb-12 border-solid border-t-0 border-r-[1px] border-l-[1px] border-b-[1px] border-[#F57F20] rounded-b-lg">
                            <div className="relative">
                                <div className="w-16 p-3.5 lg:px-4 lg:w-fit h-fit border-solid border-[1px] border-[#F57F20] rounded-lg">
                                    <img
                                        src={ImagePhp}
                                        alt=""
                                        className="w-full lg:w-12"
                                    />

                                </div>
                                <div className="w-8 -translate-y-4 translate-x-12 lg:translate-x-16 bg-[#fff8ef]">
                                    <CircularProgressbar value={85} text={`${85}%`} styles={customStylesPhp} />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="w-16 p-3.5 px-4 lg:w-fit h-fit border-solid border-[1px] border-[#F57F20] rounded-lg">
                                    <img
                                        src={ImageJs}
                                        alt=""
                                        className="w-full lg:w-11"
                                    />
                                </div>
                                <div className="w-8 -translate-y-4 translate-x-12 lg:translate-x-16 bg-[#fff8ef]">
                                    <CircularProgressbar value={80} text={`${80}%`} styles={customStylesJs} />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="w-14 p-2 lg:w-fit h-fit border-solid border-[1px] border-[#F57F20] rounded-lg">
                                    <img
                                        src={ImageJava}
                                        alt=""
                                        className="w-full lg:w-14"
                                    />
                                </div>
                                <div className="w-8 -translate-y-5 translate-x-9 lg:translate-x-14 bg-[#fff8ef]">
                                    <CircularProgressbar value={75} text={`${75}%`} styles={customStylesJava} />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="w-16 p-2.5 py-3.5 lg:w-fit h-fit border-solid border-[1px] border-[#F57F20] rounded-lg">
                                    <img
                                        src={ImageDart}
                                        alt=""
                                        className="w-full lg:w-14"
                                    />
                                </div>
                                <div className="w-8 -translate-y-5 translate-x-12 lg:translate-x-16 bg-[#fff8ef]">
                                    <CircularProgressbar value={65} text={`${65}%`} styles={customStylesDart} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {isTableCms && !isTableFramework && !isTableLangage && (
                    <div className="w-full lg:w-[50%] p-4  animate-slide-up">
                        <div className="text-[#F57F20] text-[15px] lg:text-[18px] p-2 px-8 border-solid border-[1px] border-[#F57F20] rounded-t-lg">
                            Cms
                        </div>
                        <div className="grid grid-cols-3 gap-10 lg:gap-12 p-4 lg:px-14 pb-12 border-solid border-t-0 border-r-[1px] border-l-[1px] border-b-[1px] border-[#F57F20] rounded-b-lg">
                            <div className="relative">
                                <div className="w-16 p-3.5 lg:px-4 lg:w-fit h-fit border-solid border-[1px] border-[#F57F20] rounded-lg">
                                    <img
                                        src={ImagePhp}
                                        alt=""
                                        className="w-full lg:w-12"
                                    />

                                </div>
                                <div className="w-8 -translate-y-4 translate-x-12 lg:translate-x-16 bg-[#fff8ef]">
                                    <CircularProgressbar value={85} text={`${85}%`} styles={customStylesPhp} />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="w-16 p-3.5 px-4 lg:w-fit h-fit border-solid border-[1px] border-[#F57F20] rounded-lg">
                                    <img
                                        src={ImageJs}
                                        alt=""
                                        className="w-full lg:w-11"
                                    />
                                </div>
                                <div className="w-8 -translate-y-4 translate-x-12 lg:translate-x-16 bg-[#fff8ef]">
                                    <CircularProgressbar value={80} text={`${80}%`} styles={customStylesJs} />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="w-14 p-2 lg:w-fit h-fit border-solid border-[1px] border-[#F57F20] rounded-lg">
                                    <img
                                        src={ImageJava}
                                        alt=""
                                        className="w-full lg:w-14"
                                    />
                                </div>
                                <div className="w-8 -translate-y-5 translate-x-9 lg:translate-x-14 bg-[#fff8ef]">
                                    <CircularProgressbar value={75} text={`${75}%`} styles={customStylesJava} />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="w-16 p-3 lg:w-fit h-fit border-solid border-[1px] border-[#F57F20] rounded-lg">
                                    <img
                                        src={ImagePython}
                                        alt=""
                                        className="w-full lg:w-14"
                                    />
                                </div>
                                <div className="w-8 -translate-y-4 translate-x-11 lg:translate-x-16 bg-[#fff8ef]">
                                    <CircularProgressbar value={70} text={`${70}%`} styles={customStylesPython} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Competence;
