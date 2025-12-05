import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className='flex flex-col lg:flex-row items-center justify-center h-screen bg-gradient-to-b from-[#FFD6CC] via-[#FFEDEA] to-[#FFFFFF]'>
        <div className='flex-1 flex flex-col items-center justify-center gap-5 h-full '>
            <p className='text-6xl text-[#2A1F2D] text-center'>Hola, soy Florencia</p>
            <p className='text-3xl text-[#4B3A47] text-center'>Frontend Developer</p>
            <button type="button" className='bg-[#FFB9A8] hover:bg-[#FF8F8F] text-white cursor-pointer p-2 rounded-md'>Ver Proyectos</button>
        </div>
        <div className='flex-1 h-full'>
            <Spline scene="https://prod.spline.design/XZs3G-pplPllYgzC/scene.splinecode"/>
        </div>
    </section>
  );
}
