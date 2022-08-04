import React from 'react';

function Features({ data, title, text, image }) {

  return (
    <div id="features" className="pb-12 mx-auto max-w-7xl">
        <main className="flex items-cente justify-center">
            <div className="flex flex-col space-y-5 w-full shadow-md rounded-br-3xl">
                <img src={image} alt="" className="h-[200px] w-full bg-cover bg-center object-cover" />
                <div className="p-4 space-y-5 flex-1">
                    <h1 className="text-2xl font-bold leading-8">
                            {title}
                    </h1>
                    <p className="text-gray-700 text-lg font-normal">
                        {text}
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 w-full">
                        {data.map((info, index) =>  (
                            <div className="space-y-4" key={index}>
                                <div className={`bg-gray-100 p-2 rounded-full  w-12 h-12 flex items-center`}>
                                    <img src={info.icon} alt={info.title} className="w-12 h-12" />
                                </div>
                                <h2 className="">{info.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Features;