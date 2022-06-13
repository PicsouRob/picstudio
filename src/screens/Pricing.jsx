import React from 'react';
import TopTitle from '../components/TopTitle';

function Pricing() {
    return (
        <div className="bg-gray-100 py-6">
            <div className="max-w-7xl mx-auto px-6">
                <TopTitle 
                    title="Our Plan Pricing"
                    subTitile="Pricing Table"
                    text="We help our clients to build their dream project"
                />
            </div>
        </div>
    );
}

export default Pricing;