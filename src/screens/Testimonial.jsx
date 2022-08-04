import React from 'react';
import { testimonialData } from '../helpers/testimonial';

function Testimonial() {
    return (
        <div className="bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                <section class="flex items-center justify-center py-16 bg-gray-100 min-w-screen">
                    <div class="max-w-7xl px-6 mx-auto bg-gray-100">
                        <div class="flex flex-col items-center lg:flex-row">
                            <div class="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
                                <p class="mb-2 text-base font-medium tracking-tight text-primary uppercase">Nos clients aiment notre produit</p>
                                <h2 class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">Témoignages</h2>
                                <p class="my-6 text-lg text-gray-600">Ne vous contentez pas de nous croire sur parole, lisez notre longue liste d'études de cas et de témoignages de clients.</p>
                                <a href="#portfolio" class="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-primary border border-transparent rounded-md shadow hover:bg-primary/50 focus:outline-none focus:border-primary focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10">Voir Nos Projets</a>
                            </div>
                            <div class="w-full lg:w-1/2 space-y-5">
                                { testimonialData.map((data, index) => (
                                    <blockquote class="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg shadow">
                                        <div class="flex flex-col pr-0 md:pr-8">
                                            <div class="relative pl-12">
                                                <svg class="absolute left-0 w-10 h-10 text-primary fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                                                </svg>
                                                <p class="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">{ data.text }</p>
                                            </div>

                                            <h3 class="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base mg:text-sm lg:text-base">
                                                {data.name}
                                                <span class="mt-1 text-sm leading-5 text-gray-500 truncate">- { data.desc }</span>
                                            </h3>
                                        </div>
                                        <img class="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full xl:w-24 xl:h-24 bg-cover object-cover" src={data.image} alt="" />
                                    </blockquote>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Testimonial;