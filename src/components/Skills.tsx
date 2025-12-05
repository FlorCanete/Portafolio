import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGitAlt,
  faFigma,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

import { faCompassDrafting, faMobile } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills () {
    const abilities = [
        { icon: faHtml5, name: "HTML" },
        { icon: faCss3Alt, name: "CSS" },
        { icon: faCompassDrafting, name: "Tailwind" },
        { icon: faBootstrap, name: "Bootstrap" },
        { icon: faJs, name: "JavaScript" },
        { icon: faReact, name: "React" },
        { icon: faGitAlt, name: "Git" },
        { icon: faFigma, name: "Figma" },
        { icon: faCompassDrafting, name: "UX/UI" },
        { icon: faMobile, name: "Responsive Design" },
    ];

    return (
        <>
            <section className="py-20 md:py-28 bg-[#FFF9F7]" id="skills">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-[#181311] text-4xl font-black leading-tight tracking-[-0.015em] pb-12 text-center">
                        Habilidades
                    </h2>
                    <div className="grid grid-cols-3 gap-6 md:gap-8">
                        {abilities.map((item, index) => (
                            <div key={index} className="flex flex-col items-center justify-center gap-4 rounded-lg border border-[#FFC4B2] bg-[#FFEDEA] p-8 text-center shadow-sm hover:bg-[#FFB9A8] hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <FontAwesomeIcon icon={item.icon} className="text-[#FF9F55] text-5xl "/>
                                <h3 className="text-[#181311] text-lg font-bold leading-tight">
                                    {item.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}