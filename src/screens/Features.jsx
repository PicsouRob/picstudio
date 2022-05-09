import React from 'react';

function Features() {
    const data = [
        {
            title: "React & Vue Js",
            text: "Vous aide à organiser vos revenus et à exprimer",
            icon: "/assets/icons/react.svg",
            color: "#3f37c9",
        },
        {
            title: "UI & UX Design",
            text: "Vous aide à organiser vos revenus et à exprimer, Vous aide à ",
            icon: "/assets/icons/design.svg",
            color: "#fc5c04",
        },
    ];

  return (
    <div id="features" className="pb-24 md:pb-32 px-6 md:px-8 mx-auto max-w-7xl">
        <main className="flex items-cente justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                <div className="flex-col space-y-5">
                    <p className="">Features</p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-10">
                        Développement Web.
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
                <div className="h-full flex-1">
                    <img src="https://dailymockup.com/wp-content/uploads/edd/2019/02/3D-Web-showcase-1000x662.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1" alt="" className="h-full object-cover object-center flex-1" />
                </div>
            </div>
        </main>
    </div>
  )
}

export default Features;