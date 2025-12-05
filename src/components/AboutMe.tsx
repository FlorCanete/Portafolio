import AboutMeImage from '../assets/avatar_aboutme.png'

export default function AboutMe() {
  return (
    <section className='flex flex-col justify-center h-screen md:gap-28 bg-[#FFEDEA]  py-20 md:py-28'>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-[#181311] text-4xl font-black leading-tight tracking-[-0.015em] pb-12 text-center">Sobre mi</h2>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          <img src={AboutMeImage} alt="Soy Yo" className='w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-2xl object-cover mx-auto'/>

            <p className=''>
              Soy Florencia Cañete y me dedico al desarrollador frontend y me apasiona crear interfaces claras, atractivas y fáciles de usar. Me gusta transformar ideas en experiencias reales, combinando diseño, maquetación y desarrollo para que todo fluya de forma natural.
              Soy una persona adaptable, curiosa y muy atenta al detalle. Siempre busco aprender algo nuevo, aportar mis ideas y trabajar en equipo para resolver problemas de manera práctica, creativa y con buena onda.
            </p>
        </div>
      </div>
    </section>
  );
}
