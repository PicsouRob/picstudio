import React from 'react';
import TopTitle from '../components/TopTitle';
import { dataApp, dataGraphic, dataWebsite } from '../helpers/sercives';
import Features from './Features';

function Services() {
    return (
        <div id="features" className="max-w-7xl mx-auto py-8">
            <TopTitle 
                title="What We Offer"
                subTitile="Project Planning"
                text="We help our clients to build their dream project"
            />
            <div className="grid md:grid-cols-3 pt-6 gap-8 place-items-center px-6">
                <Features
                    text="Vous aide à organiser vos revenus et à exprimer, Vous aide à organiser vos revenus et à exprimer."
                    title="Application mobile."
                    data={ dataApp }
                    image='assets/images/app.webp'
                />
                <Features
                    text="Vous aide à organiser vos revenus et à exprimer, Vous aide à organiser vos revenus et à exprimer."
                    title="Développement Web."
                    data={ dataWebsite }
                    image='assets/images/web2.webp'
                />
                <Features
                    text="Vous aide à organiser vos revenus et à exprimer, Vous aide à organiser vos revenus et à exprimer."
                    title="Graphic Design"
                    data={ dataGraphic }
                    image='assets/images/ux.jpg'
                />
            </div>
        </div>
    );
}

export default Services;