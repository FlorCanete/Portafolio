import AboutMeImage from '../assets/image/avatar_aboutme.png'

export default function AboutMe() {
  return (
    <section className='flex flex-col justify-center md:gap-28 bg-gradient-to-t from-[#FFD6CC] to-[#FFEDEA] py-10' id="aboutme">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-[#181311] text-4xl font-black leading-tight tracking-[-0.015em] pb-12 text-center">Sobre mi</h2>

        <div className="flex flex-col md:flex-row justify-center gap-10 p-10 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <img src={AboutMeImage} alt="Soy Yo" className='w-3xs rounded-2xl object-cover mx-auto'/>

            <p className=''>
              Soy <strong>Florencia Cañete</strong> y me dedico al desarrollo frontend. Me apasiona crear interfaces claras, atractivas y fáciles de usar. Me gusta transformar ideas en experiencias reales, combinando diseño, maquetación y desarrollo para que todo fluya de forma natural.
              Soy una persona adaptable, curiosa y muy atenta al detalle. Siempre busco aprender algo nuevo, aportar mis ideas y trabajar en equipo para resolver problemas de manera práctica, creativa y con buena onda.
            </p>
        </div>
      </div>
    </section>
  );
}
