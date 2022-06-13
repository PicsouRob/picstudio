import React from 'react';

function TopTitle({ title, subTitile, text }) {
    return (
        <div className="py-10 space-y-4 flex-col items-center justify-center text-center">
            <span className="text-[#fc5c04] font-semibold text-xl">{ subTitile
            }</span>
            <h3 className="font-bold text-4xl md:text-5xl">{ title }</h3>
            <h3 className="font-semibold text-gray-700">{ text }</h3>
        </div>
    );
}

export default TopTitle;