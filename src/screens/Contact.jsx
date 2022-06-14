import React from 'react';

import { contactData } from '../helpers/contact';
import TopTitle from '../components/TopTitle';

function Contact() {
    return (
        <div id="contact" className="bg-primar px-6 py-12 border-b border-primary">
            <div className="max-w-7xl mx-auto">
                <TopTitle subTitile="Nous Contacter"
                    title="Comment Pouvons-Nous Vous Aider"
                    text="Soumettez vos besoins de services, nous serons avec vous le plus rapide possible afin de vous aider à construire votre projet de rêve"
                />
                <div className="grid md:grid-cols-3 gap-8 place-items-center py-6">
                    { contactData.map((info, index) => (
                        <div key={index} className="flex flex-col items-center justify-center space-y-4 text-center">
                            <img src={`${info.icon}`} alt="" className="w-20 h-20 bg-gray-100 p-5 rounded-full" />
                            <h1 className="text-xl font-bold">{ info.title }</h1>
                            <span className="text-lg">{ info.text }, <br /> { info.text2 }</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contact;