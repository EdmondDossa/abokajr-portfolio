import React from 'react';
import '../App.css';
import { Logo, Twitter, Instagram, Youtube, Facebook } from '../assets/index';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Footer() {
    return (
        <div className="flex bg-white">
            <div className="w-0 lg:w-1/3 pt-2 invisible md:w-1/3 md:visible lg:visible">
                <img src={Logo} alt="logo" className="w-24 lg:w-32" />
            </div>
            <div className="w-full lg:w-1/3 p-4 pl-20 md:pt-7 lg:pl-0 lg:p-0 lg:pt-9">
                <span className="font-bold text-[14px] md:text-[16px] lg:text-[20px]">Copyright © 2024 | Réalisé par <span className="text-[#F57F21]">ABJ</span></span>
            </div>
            <div className="w-0 lg:w-1/3 flex md:space-x-2 lg:space-x-5 justify-end pr-8 pt-8 md:w-1/3 md:visible invisible lg:visible">
                <Link smooth to="">
                    <button>
                        <img
                            src={Twitter}
                            alt=""
                            className="w-10"
                        />
                    </button>
                </Link>
                <Link smooth to="">
                    <button>
                        <img
                            src={Instagram}
                            alt=""
                            className="w-10"
                        />
                    </button>
                </Link>
                <Link smooth to="">
                    <button>
                        <img
                            src={Youtube}
                            alt=""
                            className="w-10"
                        />
                    </button>
                </Link>
                <Link smooth to="">
                    <button>
                        <img
                            src={Facebook}
                            alt=""
                            className="w-10"
                        />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Footer;