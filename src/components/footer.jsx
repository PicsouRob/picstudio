import React from 'react';
import { resources, useFullLinks, socialLink } from '../helpers/footer_data';
import FooterUseFullLink from './footer_usefull_link';

function footer() {
  return (
    <div className='grid gap-y-6 md:gap-x-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto pb-16 px-6 md:px-8'>
        <div className="space-y-4">
            <a href="#home" rel="noreferrer" className="hover:opacity-80">
                <img src="/assets/images/logo.png" className="w-48" alt="" />
            </a>
            <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ducimus ipsa quo voluptatum veritatis quia.
            </p>
            <div className="flex gap-x-3 md:gap-x-6">
                {socialLink.map((data, index) => (
                    <a href={data.link} key={index} target="_blank" className="border-[#f4a261] border p-1.5 rounded-full" rel="noreferrer">
                        <img className="w-4 h-4 text-[#fc5c04]" src={data.image} 
                            alt={data.image} 
                        /> 
                    </a>
                ))}
            </div>
        </div>
        <div className="flex-col space-y-4">
            <h1 className="text-[18px]">Resources</h1>
            <div className="space-y-3">
                {resources.map((data, index) => (
                    <FooterUseFullLink key={index} data={data} />
                ))} 
            </div>
        </div>
        <div className="flex-col space-y-4">
            <h1 className="text-[18px]">Usefull Links</h1>
            <div className="space-y-3">
                {useFullLinks.map((data, index) => (
                    <FooterUseFullLink key={index} data={data} />
                ))}
            </div>
        </div>
        <div className="flex-col space-y-4">
            <h1 className="tex-[16px] font-semibold">NEWSLATTER</h1>
            <div className="space-y-4">
                <p className="text">
                    Plus de 2500 personnes se sont abonnées.
                </p>
                <div className="flex items-center justify-between border-[1.8px] border-gray-500 p-1 rounded-md gap-x-2">
                    <input type="text" name="" id="" className="text-[12px] xl:w-3/5 focus:border-0 focus:ring-0" placeholder='Entrer votre email' />
                    <button className="text-[12px] text-white bg-secondary p-2 rounded-md hover:bg-blue-500">
                        Abonne-Toi
                    </button>
                </div>
                <p className="text">
                    Nous ne vendons pas vos e-mails et spams.
                </p>
            </div>
        </div>
    </div>
  )
}

export default footer;