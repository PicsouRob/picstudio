import React from 'react';
import TopTitle from '../components/TopTitle';
import { dataApp, dataGraphic, dataWebsite } from '../helpers/sercives';
import Features from './Features';

function Services() {
    return (
        <div id="services" className="max-w-7xl mx-auto py-8">
            <TopTitle 
                title="Ce Que Nous Offrons"
                subTitile="Nos Services"
                text="We help our clients to build their dream project"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 pt-6 gap-8 place-items-center px-6">
                <Features
                    text="Les experts en développement d'applications de PicStudio proposent le développement d'applications mobiles iOS et Android personnalisées. Notre équipe excelle avec des applications complexes et personnalisées."
                    title="Application mobile."
                    data={ dataApp }
                    image='assets/images/app.webp'
                />
                <Features
                    text="Nous créons, construisons et maintenons des sites Web et des applications Web qui s'exécutent en ligne sur un navigateur pour votre entreprise ou votre portfolio."
                    title="Développement Web."
                    data={ dataWebsite }
                    image='assets/images/web2.webp'
                />
                <Features
                    text="Nos origines reposent sur une belle conception graphique et une image de marque. Si vous avez besoin d'une conception graphique hautement professionnelle, nous pouvons vous aider."
                    title="Graphic Design"
                    data={ dataGraphic }
                    image='assets/images/ux.jpg'
                />
            </div>
        </div>
    );
}

export default Services;