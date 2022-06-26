import React, { useState } from 'react';
import Player from '../components/Player';

function Home() {
    const [ isShow, setIsShow ] = useState(false);
    const [ isPlaying, setIsPlaying ] = useState(false);
    
    return (
        <div className="relative overflow-hidden">
            { isPlaying && (
                <Player setIsPlaying={ setIsPlaying } isPlaying={ isPlaying } />
            ) }
            <div className="z-40">
                <header className="flex items-center justify-between px-6 md:px-8 max-w-7xl mx-auto">
                    <a href="#home" className="hover:opacity-80">
                        <img src="/assets/images/logo.png" className="w-48" alt="" />
                    </a>
                    <div className="hidden md:flex items-center gap-x-6">
                        <a href="#services" rel='' className="hover:text-[#fc5c04]">Services</a>
                        <a href="#about" className="hover:text-[#fc5c04]">À propos de nous</a>
                        <a href="#portfolio" className="hover:text-[#fc5c04]">Projects</a>
                    </div>
                    <div className="space-x-4 flex items-center">
                        <a href="#contact">
                            <div className="p-2 md:p-3 bg-primary text-[12px] text-white rounded-md hover:opacity-80">
                                Contacter-Nous
                            </div>
                        </a>
                        <div className="block md:hidden cursor-pointer"
                            onClick={ () => setIsShow(!isShow) }
                        >
                            { isShow ? <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 text-[#000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg> }
                        </div>
                    </div>
                </header>
            </div>
            <div className="py-20 md:py-28 flex items-center justify-center bg-blue-90">
                <main className="flex items-center max-w-7xl mx-auto justify-center px-6 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
                        <div className="flex-col space-y-8 my-auto">
                            <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                                Nou sommes une agence en développement de conception Web et mobile.
                            </h1>
                            <p className="font-normal text-gray-500">
                                Nous abordons chaque projet avec ténacité. Notre priorité est d'écrire du code propre et de vous offrir le meilleur produit possible. L'accessibilité et la diligence de notre équipe nous distinguent - la volonté authentique de chaque individu d'améliorer ses compétences et d'exceller dans la performance globale.
                            </p>
                            <div className="flex-wrap gap-y-4 flex items-center gap-x-2">
                                <button className="p-3 md:p-4 bg-primary text-[12px] text-white rounded-md flex items-center gap-x-2 hover:opacity-80"
                                    onClick={ () => setIsPlaying(!isPlaying) }
                                >
                                    <p className="">
                                        Voir la démo
                                    </p>
                                </button>
                                <p className="pt-3 md:pt-0">
                                    - Web, iOs, and Android.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 md:gap-7">
                            <div className="row-span-2 bg-cover h-[300px] lg:h-[500px] shadow-lg"
                                style={ { backgroundImage: `url("assets/images/meeting.jpg")` } }
                            ></div>
                            <div className="bg-cover shadow-lg"
                                style={ { backgroundImage: `url("assets/images/engenner1.jpg")` } }
                            ></div>
                            <div className="bg-cover shadow-lg"
                                style={ { backgroundImage: `url("assets/images/engenner2.jpg")` } }
                            ></div>
                        </div>
                    </div>
                </main>
            </div>
            <div className={ `shadow-md flex-col md:hidden absolute top-20 right-0 w-1/2 h-screen pt-12 duration-300 bg-white z-30 transition ease-in-out ${ isShow ? "translate-x-0" : "translate-x-full" }` }>
                <div className="grid grid-cols-1 text-center font-[500] space-y-6">
                    <a href="#services" rel='' className="hover:text-[#fc5c04]"
                        onClick={ () => setIsShow(!isShow) }
                    >Services</a>
                    <a href="#about" className="hover:text-[#fc5c04]"
                        onClick={ () => setIsShow(!isShow) }
                    >À propos de nous</a>
                    <a href="#contact" className="hover:text-[#fc5c04]"
                        onClick={ () => setIsShow(!isShow) }
                    >Contact</a>
                    <a href="#portfolio" className="hover:text-[#fc5c04]"
                        onClick={ () => setIsShow(!isShow) }
                    >Projects</a>
                </div>
            </div>
        </div>
    );
}

export default Home;