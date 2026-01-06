import IguassuExperience from '../assets/image/Projects/IguassuExperience.png'
import Slabs from '../assets/image/Projects/Slabs.png'
import WeatherApp from '../assets/image/Projects/WeatherApp.png'
import ButtonProjects from './ui/ButtonProjects';

export default function Projects() {
    const Projects = [
        {
            img: IguassuExperience,
            title: "Iguassu Experience",
            description: "Iguassu Experience es una landing page diseñada para ofrecer servicios de guía turística en las Cataratas del Iguazú. Presenta la información de forma clara, mostrando actividades, recorridos y opciones de contacto para que los visitantes puedan planificar su experiencia fácilmente.",
            technologies: ["HTML", "CSS", "JS"],
            links: { website: "https://iguassuexperience.com.ar/" },
            status: "Completed"
        },
        {
            img: WeatherApp,
            title: "WeatherApp",
            description: "WeatherApp es una herramienta simple y funcional que ofrece el clima actual de Buenos Aires junto con el pronóstico para los tres días siguientes. El diseño está centrado en la claridad y rapidez.",
            technologies: ["HTML", "CSS", "JS", "TailwindCSS"],
            links: { gitHub: "https://github.com/FlorCanete/WeatherApp", website: "https://florcanete.github.io/WeatherApp/" },
            status: "Completed"
        },
        {
            img: Slabs,
            title: "Slabs",
            description: "SLABS es un sistema de autogestión desarrollado para laboratorios y centros de salud. La plataforma permite a los pacientes consultar resultados, solicitar turnos, revisar su historial de estudios y acceder a información relevante.",
            technologies: ["HTML", "CSS", "JS", "React", "TailwindCSS"],
            links: { },
            status: "In Progress"
        }
    ]
  return (
    <>
        <section className="py-15 bg-linear-to-t from-[#FFEDEA] to-[#FFFFFF]" id="Projects">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-[#181311] text-4xl font-black leading-tight pb-10 text-center">
                    Proyectos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Projects.map((project, index) => (
                        <div key={index} className="group flex flex-col gap-4 rounded-lg border border-black/10 bg-white p-6 shadow-sm hover:shadow-lg shadow-[#FF8C78]/50 transition-all duration-300">
                            <div className="overflow-hidden rounded">
                                <img
                                    className="w-full h-auto aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                                    data-alt="Screenshot de la pagina web Iguassu Experience"
                                    src={project.img}
                                />
                            </div>
                            <h3 className="text-[#181311] text-2xl font-bold">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 text-lg">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 ">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="text-sm font-medium border-2 border-[#e2876b] bg-[#FFEDEA] hover:bg-[#FFB9A8] hover:text-white text-primary px-3 py-2 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                {project.links.website && (
                                    <ButtonProjects
                                        href={project.links.website}
                                        text="Ver Sitio"
                                    ></ButtonProjects>
                                )}
                                {project.status === "In Progress" ? (
                                    <ButtonProjects
                                        href="#"
                                        text="En Proceso"
                                        isDisabled
                                        />
                                ) : (
                                    project.links.gitHub && (
                                        <ButtonProjects
                                            href={project.links.gitHub}
                                            text="Ver Código"
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      </section>
    </>
  );
}
