import React from 'react';
import TopTitle from '../components/TopTitle';
import { teamData } from '../helpers/team';

function Team() {
    const numbersOfPoints = [1,2,3,4,5,6,7,8,9,112,22,11,43,55,65,44,36,56,88];
    return (
        <div className="max-w-7xl mx-auto py-6 px-6">
            <TopTitle 
                title="Notre Super Équipe"
                subTitile="Notre Équipe"
                text="We help our clients to build their dream project"
            />
            <div className="grid md:grid-cols-4 gap-6 py-8">
                { teamData.map((info, index) => (
                    <div key={ index }
                        style={{ backgroundImage: `url(${info.image})` }}
                        className="relative rounded-lg h-[300px] object-cover bg-cover flex justify-center"
                    >
                        <div className="absolute bottom-4 left-16 md:left-4 right-16 md:right-4">
                            <a href={info.url} target="_blank" rel="noreferrer">
                                <div className="relative bg-white rounded-lg p-4 text-center shadow-lg overflow-hidden">
                                    <h1 className="font-semibold text-xl md:text-base">{ info.name }</h1>
                                    <span className="font-semibold md:font-normal text-gray-700">{ info.ocupation }</span>
                                    <div className="h-16 w-16 bg-primary/20 rounded-full absolute -left-6 -bottom-9"></div>
                                    <div className="absolute -right-5 -top-12 grid grid-cols-4 gap-2">
                                        { numbersOfPoints.map((data, index) => (
                                            <div key={index} className="h-2 w-2 bg-primary/30 rounded-full"></div>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;