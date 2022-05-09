import React, { useState } from 'react';

function Home() {
    const [isShow, setIsShow] = useState(true);
    
  return (
    <div className="min-h-screen relative">
        <div className="shadow-md z-40">
            <header className="flex items-center justify-between py-2 px-6 md:px-8 max-w-7xl mx-auto">
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
                        Demander une démo
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
        <main className="flex items-center min-h-screen max-w-7xl mx-auto justify-center px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-12">
                <div className="flex-col space-y-6">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-10">
                        Développement de conception Web et mobile.
                    </h1>
                    <p className="text-">
                        Vous aide à organiser vos revenus et à exprimer.
                    </p>
                    <div className="flex-wrap gap-y-4 flex items-center gap-x-2">
                        <button className="px-2 py-3 md:p-3 bg-[#3f37c9] text-[12px] text-white rounded-md flex items-center gap-x-2 hover:opacity-80">
                            <p className="">
                                Essayez la démo gratuite
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <p className="pt-3 md:pt-0">
                           - Web, iOs, and Android.
                        </p>
                    </div>
                </div>
                <div className="">
                    <img src="https://img.freepik.com/free-photo/beautiful-hacker-girl-working-with-another-dangerous-cyber-criminals-hackers-centre_482257-21839.jpg?t=st=1652068349~exp=1652068949~hmac=150de24b8584e6e3a0e4c7b6c8da7b6d6825d8c6457a6e4694e489a4dfca6772&w=1380" alt="" className="" />
                </div>
            </div>
        </main>
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