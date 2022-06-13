import React from 'react';

function About() {
    return (
        <div id="about" className="py-24 md:py-0 bg-gray-100 px-6 md:min-h-screen flex items-center justify-center">
            <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12">
                <div className="grid grid-cols-2 gap-4 md:gap-7">
                    <div className="bg-cover h-[220px] lg:h-[300px] rounded-lg shadow-lg"
                        style={{ backgroundImage: `url("assets/images/about1.jpg")` }}
                    ></div>
                    <div className="row-span-2 flex items-center justify-center">
                        <img className="h-3/5 rounded-lg shadow-lg"
                            src="assets/images/about2.jpg"
                            alt="img"
                        />
                    </div>
                    <div className="object-cover bg-cover h-[220px] lg:h-[300px] rounded-lg shadow-lg"
                        style={{ backgroundImage: `url("assets/images/about3.webp")` }}
                    ></div>
                </div>
                <div className="flex-col space-y-5 my-auto">
                    <span className="text-[#fc5c04] text-xl font-bold">Pourquoi nous choisir</span>
                    <h1 className="text-4xl lg:text-5xl font-bold">Rendez vos clients heureux en rendant des services.</h1>
                    <p className="font-semibold text-gray-700">
                    Il est établi depuis longtemps qu'un lecteur sera distrait par le contenu lisible d'une page lorsque l'on regarde sa mise en page.En utilisant Lorem Ipsum, c'est qu'il a plus ou moins.<br /> <br />Un nom de domaine est l'une des premières étapes pour établir votre marque.Sécurisez une image de marque cohérente avec un nom de domaine qui correspond
                    </p>
                    <button className="bg-primary p-3 md:p-4 text-white font-semibold text-base rounded-lg hover:opacity-80">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default About;