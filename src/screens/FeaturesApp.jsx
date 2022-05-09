import React from 'react';

function FeaturesApp() {
    const data = [
        {
            title: "Native iOs App",
            text: "Vous aide à organiser vos revenus et à exprimer",
            icon: "/assets/icons/react.svg",
            color: "#2ec4b6",
        },
        {
            title: "UI & UX Design",
            text: "Vous aide à organiser vos revenus et à exprimer, Vous aide à ",
            icon: "/assets/icons/design.svg",
            color: "#14213d",
        },
    ];
    
  return (
    <div id="features" className="pb-24 md:pb-32 px-6 md:px-8 mx-auto max-w-7xl">
        <main className="flex items-cente justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                <div className="h-full flex-1">
                    <img src="https://img.freepik.com/free-psd/smartphone-app-promotion-mockup-logo-download-buttons-with-scan-qr-code_97060-172.jpg?w=1380" alt="" className="h-full object-cover object-center flex-1" />
                </div>
                <div className="flex-col space-y-5">
                    <p className="">Features</p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-10">
                        Application mobile.
                    </h1>
                    <p className="text- mr-0 md:mr-12">
                        Vous aide à organiser vos revenus et à exprimer, Vous aide à organiser vos revenus et à exprimer.
                    </p>
                    <div className="grid grid-cols-2 gap-x-4">
                        {data.map((info, index) =>  (
                            <div className="space-y-4" key={index}>
                                <div className={`bg-[${info.color}] p-2 rounded-full  w-12 h-12 flex items-center`}>
                                    <img src={info.title.includes('Design') ? "assets/icons/design.svg" : "assets/icons/react.svg"} alt={info.title} className="w-12 h-12" />
                                </div>
                                <h2 className="font-bold">{info.title}</h2>
                                <p className="">{info.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default FeaturesApp;