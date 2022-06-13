import React, { useState } from 'react';

function Home() {
    const [isShow, setIsShow] = useState(false);
    
  return (
    <div className="relative">
        <div className="shadow-md z-40">
            <header className="flex items-center justify-between px-6 md:px-8 max-w-7xl mx-auto">
                <a href="#home" className="hover:opacity-80">
                    <img src="/assets/images/logo.png" className="w-48" alt="" />
                </a>
                <div className="hidden md:flex items-center gap-x-6">
                    <a href="#features" rel='' className="hover:text-[#fc5c04]">Features</a>
                    <a href="#about" className="hover:text-[#fc5c04]">About Us</a>
                    <a href="#pricing" className="hover:text-[#fc5c04]">Pricing</a>
                    <a href="#feedback" className="hover:text-[#fc5c04]">Feedback</a>
                </div>
                <div className="space-x-4 flex items-center"
                    onClick={() => setIsShow(!isShow)}
                >
                    <button className="p-2 md:p-3 bg-secondary text-[12px] text-white rounded-md hover:opacity-80">
                        Contacter-Nous
                    </button>
                    <div className="block md:hidden cursor-pointer">
                        {isShow ? <svg xmlns="http://www.w3.org/2000/svg" 
                            class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" 
                                class="h-6 w-6 text-[#000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>}
                    </div>
                </div>
            </header>
        </div>
        <div className="py-20 md:py-28 flex items-center justify-center bg-blue-90">
            <main className="flex items-center max-w-7xl mx-auto justify-center px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    <div className="flex-col space-y-8 my-auto">
                        <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold leading-10">
                            Nou sommes une agence en développement de conception Web et mobile.
                        </h1>
                        <p className="font-semibold text-gray-500">
                              Vous aide à organiser vos revenus et à exprimer.
                              Lorem ipsum es el texto que se usa habitualmente en diseño gráfico o de moda en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.
                        </p>
                        <div className="flex-wrap gap-y-4 flex items-center gap-x-2">
                            <button className="p-3 md:p-4 bg-[#3f37c9] text-[12px] text-white rounded-md flex items-center gap-x-2 hover:opacity-80">
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
                                style={{ backgroundImage: `url("assets/images/meeting.jpg")` }}
                          ></div>
                          <div className="bg-cover shadow-lg"
                                style={{ backgroundImage: `url("assets/images/engenner1.jpg")` }}
                          ></div>
                          <div className="bg-cover shadow-lg"
                                style={{ backgroundImage: `url("assets/images/engenner2.jpg")` }}
                          ></div>
                    </div>
                </div>
            </main>
        </div>
        {/* {isShow && ( */}
            <div className={`shadow-md flex-col md:hidden absolute top-20 right-0 w-1/2 h-screen pt-12 duration-300 bg-white z-30 transition ease-in-out ${isShow ? "translate-x-0" : "translate-x-full"}`}>
                <div className="grid grid-cols-1 text-center font-[500] space-y-6">
                    <a href="#features" rel='' className="hover:text-[#fc5c04]" 
                        onClick={() => setIsShow(!isShow)}
                    >Features</a>
                    <a href="#about" className="hover:text-[#fc5c04]" 
                        onClick={() => setIsShow(!isShow)}
                    >About Us</a>
                    <a href="#pricing" className="hover:text-[#fc5c04]" 
                        onClick={() => setIsShow(!isShow)}
                    >Pricing</a>
                    <a href="#feedback" className="hover:text-[#fc5c04]" 
                        onClick={() => setIsShow(!isShow)}
                    >Feedback</a>
                </div>
            </div>
        {/* )} */}
    </div>
  )
}

export default Home;