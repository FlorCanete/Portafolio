import IguassuExperience from '../assets/imageProyects/IguassuExperience.png'
import Slabs from '../assets/imageProyects/Slabs.png'
import WeatherApp from '../assets/imageProyects/WeatherApp.png'

export default function Proyects() {
  return (
    <>
        <section className="py-20 md:py-28 bg-[#FFEDEA]" id="projects">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-[#181311] text-4xl font-black leading-tight pb-10 text-center">
                    Proyectos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group flex flex-col gap-4 rounded-lg border border-black/10 bg-white p-6 shadow-sm hover:shadow-lg shadow-[#FF8C78]/50 transition-all duration-300">
                        <div className="overflow-hidden rounded">
                            <img
                                className="w-full h-auto aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                                data-alt="Screenshot of a modern analytics dashboard"
                                src={IguassuExperience}
                            />
                        </div>
                        <h3 className="text-[#181311] text-2xl font-bold">
                            Iguassu Experience
                        </h3>
                        <p className="text-gray-600 text-lg">
                            Iguassu Experience es una landing page diseñada para ofrecer servicios de guía turística en las Cataratas del Iguazú. Presenta la información de forma clara, mostrando actividades, recorridos y opciones de contacto para que los visitantes puedan planificar su experiencia fácilmente.
                        </p>
                        <div className="flex flex-wrap gap-2 ">
                            <span className="text-sm font-medium border-2 border-[#e2876b] bg-[#FFEDEA] hover:bg-[#FFB9A8] hover:text-white text-primary px-3 py-2 rounded-full">
                                HTML
                            </span>
                            <span className="text-sm font-medium border-2 border-[#e2876b] bg-[#FFEDEA] hover:bg-[#FFB9A8] hover:text-white text-primary px-3 py-2 rounded-full">
                                CSS
                            </span>
                            <span className="text-sm font-medium border-2 border-[#e2876b] bg-[#FFEDEA] hover:bg-[#FFB9A8] hover:text-white text-primary px-3 py-2 rounded-full">
                                JS
                            </span>
                        </div>
                        <a href="https://iguassuexperience.com.ar/" target="_blank" className="mt-2 w-full md:w-auto flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 border border-primary text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/10 transition-colors hover:bg-[#181311] hover:text-white">
                            <span className="truncate ">Ver Web</span>
                        </a>
                    </div>

                    <div className="group flex flex-col gap-4 rounded-lg border border-black/10 bg-white p-6 shadow-sm hover:shadow-lg shadow-[#FF8C78]/50 transition-all duration-300">
                        <div className="overflow-hidden rounded">
                            <img
                                className="w-full h-auto aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                                data-alt="Screenshot of a modern analytics dashboard"
                                src={WeatherApp}
                            />
                        </div>
                        <h3 className="text-[#181311] text-2xl font-bold">
                            WeatherApp
                        </h3>
                        <p className="text-gray-600 text-lg">
                            WeatherApp es una herramienta simple y funcional que ofrece el clima actual de Buenos Aires junto con el pronóstico para los tres días siguientes. El diseño está centrado en la claridad y rapidez.
                        </p>
                        <div className="flex flex-wrap gap-2 ">
                            <span className="text-sm font-medium border-2 border-[#e2876b] bg-[#FFEDEA] hover:bg-[#FFB9A8] hover:text-white text-primary px-3 py-2 rounded-full">
                                HTML
                            </span>
                            <span className="text-sm font-medium border-2 border-[#e2876b] bg-[#FFEDEA] hover:bg-[#FFB9A8] hover:text-white text-primary px-3 py-2 rounded-full">
                                CSS
                            </span>
                            <span className="text-sm font-medium border-2 border-[#e2876b] bg-[#FFEDEA] hover:bg-[#FFB9A8] hover:text-white text-primary px-3 py-2 rounded-full">
                                JS
                            </span>
                            <span className="text-sm font-medium border-2 border-[#e2876b] bg-[#FFEDEA] hover:bg-[#FFB9A8] hover:text-white text-primary px-3 py-2 rounded-full">
                                API
                            </span>
                        </div>
                        <a href="https://github.com/FlorCanete/WeatherApp" target="_blank" className="mt-2 w-full md:w-auto flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 border border-primary text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/10 transition-colors hover:bg-[#181311] hover:text-white">
                            <span className="truncate ">Ver Git</span>
                        </a>
                    </div>

                    <div className="group flex flex-col gap-4 rounded-lg border border-black/10 bg-white p-6 shadow-sm hover:shadow-lg shadow-[#FF8C78]/50 transition-all duration-300">
                        <div className="overflow-hidden rounded">
                            <img
                                className="w-full h-auto aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                                data-alt="Screenshot of a modern analytics dashboard"
                                src={Slabs}
                            />
                        </div>
                        <h3 className="text-[#181311] text-2xl font-bold">
                            Slabs
                        </h3>
                        <p className="text-gray-600 text-lg">
                            SLABS es un sistema de autogestión desarrollado para laboratorios y centros de salud. La plataforma permite a los pacientes consultar resultados, solicitar turnos, revisar su historial de estudios y acceder a información relevante.

                        </p>
                        <div className="flex flex-wrap gap-2 ">
                            <span className="text-sm font-medium border-2 border-[#e2876b] bg-[#FFEDEA] hover:bg-[#FFB9A8] hover:text-white text-primary px-3 py-2 rounded-full">
                                HTML
                            </span>
                            <span className="text-sm font-medium border-2 border-[#e2876b] bg-[#FFEDEA] hover:bg-[#FFB9A8] hover:text-white text-primary px-3 py-2 rounded-full">
                                CSS
                            </span>
                            <span className="text-sm font-medium border-2 border-[#e2876b] bg-[#FFEDEA] hover:bg-[#FFB9A8] hover:text-white text-primary px-3 py-2 rounded-full">
                                Bootstrap
                            </span>
                            <span className="text-sm font-medium border-2 border-[#e2876b] bg-[#FFEDEA] hover:bg-[#FFB9A8] hover:text-white text-primary px-3 py-2 rounded-full">
                                JS
                            </span>
                            <span className="text-sm font-medium border-2 border-[#e2876b] bg-[#FFEDEA] hover:bg-[#FFB9A8] hover:text-white text-primary px-3 py-2 rounded-full">
                                PHP
                            </span>
                            <span className="text-sm font-medium border-2 border-[#e2876b] bg-[#FFEDEA] hover:bg-[#FFB9A8] hover:text-white text-primary px-3 py-2 rounded-full">
                                MySQL
                            </span>
                        </div>
                        <a href="https://github.com/FlorCanete/Autogestion-de-Laboratorio-Clinico" target="_blank" className="mt-2 w-full md:w-auto flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 border border-primary text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/10 transition-colors hover:bg-[#181311] hover:text-white">
                            <span className="truncate ">Ver Git</span>
                        </a>
                    </div>
                </div>
            </div>
      </section>
    </>
  );
}
