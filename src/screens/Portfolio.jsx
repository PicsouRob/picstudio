import React, { useState } from 'react';
import TopTitle from '../components/TopTitle';
import { projects } from '../helpers/projects';

function Portfolio() {
    const [ dataIndex, setDataIndex ] = useState(0);
    const data = ["All Projects", "Applications", "Développement", "Design"];
    
    return (
        <div id="portfolio" className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <TopTitle 
                    title="Nos Projets Récents"
                    subTitile="Notre Portfolio"
                    text="We help our clients to build their dream project"
                />
                <div className="py-4 flex flex-wrap items-center justify-center gap-6">
                    { data.map((info, index) => (
                        <div key={index}
                            onClick={ () => setDataIndex(index) }
                            className={`${dataIndex === index ? "bg-primary text-white rounded-lg shadow-lg" : "bg-transparent" } p-2 cursor-pointer`}
                        >
                            { info }
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 gap-10 mx-auto py-12">
                    { projects.map((info, index) => (
                        <div key={index}
                            onClick={() => {}}
                            className=""
                        >
                            <img src={info.image} alt="" className="rounded-xl h-[300px] w-full bg-cover object-cover shadow-md" />
                            <div className="flex items-center justify-center px-6 lg:px-8 mb-8">
                                <div className="bg-white rounded-lg shadow-lg z-30 gap-y-2 w-full py-6 grid place-items-center -mt-20 px-4">
                                    <div className="text-[#fc5c04] font-semibold">{ info.desc }</div>
                                    <span className="text-xl lg:text-2xl font-bold">{info.title}</span>
                                    <div className="pt-4 mb-3">
                                        <a href={info.url} target="_blank" rel="noreferrer" className="rounded-lg border px-6 py-3 hover:bg-gray-100">Voir Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;