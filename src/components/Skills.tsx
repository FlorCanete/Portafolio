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
import { color } from "motion";

export default function Skills () {
    const abilities = [
        { icon: faHtml5, name: "HTML", bg_color: "group-hover:bg-[#E34F26]" },
        { icon: faCss3Alt, name: "CSS", bg_color: "group-hover:bg-[#1572B6]"},
        { icon: faCompassDrafting, name: "Tailwind", bg_color: "group-hover:bg-[#38BDF8]"},
        { icon: faBootstrap, name: "Bootstrap", bg_color: "group-hover:bg-[#7952B3]"},
        { icon: faJs, name: "JavaScript", bg_color: "group-hover:bg-[#F7DF1E]"},
        { icon: faReact, name: "React", bg_color: "group-hover:bg-[#61DAFB]"},
        { icon: faGitAlt, name: "Git", bg_color: "group-hover:bg-[#F05032]"},
        { icon: faFigma, name: "Figma", bg_color: "group-hover:bg-[#F24E1E]"},
        { icon: faCompassDrafting, name: "UX/UI", bg_color: "group-hover:bg-[#FF715B]"},
        { icon: faMobile, name: "Responsive Design", bg_color: "group-hover:bg-[#34D399]"},
    ];

    return (
        <>
            <section className="py-10 bg-[#FFFFFF]" id="skills">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-[#181311] text-4xl font-black leading-tight tracking-[-0.015em] pb-12 text-center">
                        Habilidades
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {abilities.map((item, index) => (
                            <div key={index} className="group flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <div className={`w-16 h-16 mb-4 flex items-center justify-center bg-[#ffffff] rounded-2xl ${item.bg_color} transition-colors duration-300`}>
                                    <FontAwesomeIcon icon={item.icon} className={`text-[#FF715B] text-5xl group-hover:text-white`}/>
                                </div>
                                <span className="font-bold text-[#2A1F2D]">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}