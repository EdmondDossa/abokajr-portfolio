import React, { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Line, Email, Phone, LineContact, Send } from '../assets/index';

function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [numero, setNumero] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const emailInputRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            setIsVisible(scrollTop > 3700); // Modifier 100 selon vos besoins
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Fonction de validation de l'email
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Gestionnaire de soumission du formulaire
    function handleSubmit(event) {
        event.preventDefault();

        // Vérification des champs vides
        if (!prenom || !nom || !numero || !email || !message) {
            alert('Veuillez remplir tous les champs du formulaire.');
            return;
        }

        // Vérification de la validité de l'email
        if (!validateEmail(email)) {
            alert('Veuillez saisir une adresse email valide.');
            return;
        }

        // Si toutes les validations passent, vous pouvez soumettre le formulaire
        // Vous pouvez ajouter ici la logique pour soumettre les données à votre backend ou à une autre destination

        // Réinitialiser les champs après la soumission du formulaire
        setPrenom('');
        setNom('');
        setNumero('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className="px-0 lg:px-10 bg-[#B181811A] py-8 pb-24" id="contact">
            <div className="flex flex-col pb-8 justify-center items-center">
                <span className="text-center text-[35px] lg:text-[45px] font-bold uppercase">Contact</span>
                <img src={Line} alt='' className="w-16 lg:w-20" />
            </div>
            <div className={`lg:flex translate-y-10 py-8 bg-white bg-opacity-[0.4] rounded-lg ${isVisible ? 'fade-in' : 'fade-out'}`}>
                <div className="w-full lg:w-[45%] lg:-translate-y-5 flex justify-center items-center">
                    <div className="bg-[#F57F21] rounded-lg w-fit h-fit p-6 lg:p-8">
                        <div>
                            <span className="text-white font-bold text-[18px] md:text-[25px] lg:text-[25px]">Information personnel</span>
                            <img src={LineContact} alt="" className="-translate-x-7 lg:-translate-x-9 translate-y-3 w-[30%]" />
                        </div>
                        <div className="pt-8">
                            <div className="flex py-3 space-x-2">
                                <div className="w-12 md:w-14 lg:w-14">
                                    <img src={Email} alt="" className="w-full" />
                                </div>
                                <span className="text-white translate-y-3 text-[15px] md:text-[18px] lg:text-[18px]">marie.edmond.dossa@gmail.com</span>
                            </div>
                            <div className="flex space-x-2">
                                <div className="w-12 md:w-14 lg:w-14">
                                    <img src={Phone} alt="" className="w-full" />
                                </div>
                                <span className="text-white translate-y-3 text-[15px] md:text-[18px] lg:text-[18px]">+229 98 46 29 82</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[55%] p-6 lg:p-2">
                    <div className="font-bold text-[18px] flex justify-center items-center space-x-2 lg:justify-start md:text-[28px] lg:text-[29px] uppercase">
                        <span>Laisser</span>
                        <span className="text-[#F57F21]">moi</span>
                        <span>un message</span>
                    </div>
                    <form className="py-6 lg:w-[80%]" onSubmit={handleSubmit}>
                        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-8 md:space-y-0 lg:py-0 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-8">
                            <div>
                                <label htmlFor="prenom">Prénom <span className="text-red-500">*</span></label>
                                <input type="text" id="prenom" className="w-full bg-[#EEEEEE] rounded-lg px-4 py-2" value={prenom} onChange={e => setPrenom(e.target.value)} required />
                            </div>
                            <div>
                                <label htmlFor="nom">Nom <span className="text-red-500">*</span></label>
                                <input type="text" id="nom" className="w-full bg-[#EEEEEE] rounded-lg px-4 py-2" value={nom} onChange={e => setNom(e.target.value)} required />
                            </div>
                            <div>
                                <label htmlFor="numero">Numéro <span className="text-red-500">*</span></label>
                                <input type="text" id="numero" className="w-full bg-[#EEEEEE] rounded-lg px-4 py-2" value={numero} onChange={e => setNumero(e.target.value)} required />
                            </div>
                            <div>
                                <label htmlFor="email">Email <span className="text-red-500">*</span></label>
                                <input type="email" id="email" className="w-full bg-[#EEEEEE] rounded-lg px-4 py-2" value={email} onChange={e => setEmail(e.target.value)} required ref={emailInputRef} />
                            </div>
                        </div>
                        <div className="w-full py-10">
                            <label htmlFor="message">Message <span className="text-red-500">*</span></label>
                            <textarea type="text" id="message" className="w-full h-16 bg-[#EEEEEE] rounded-md px-4 py-2" value={message} onChange={e => setMessage(e.target.value)} required></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="w-10 md:w-16 lg:w-16 hover:animate-pulse">
                                <img src={Send} className="w-full" alt="Send" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
