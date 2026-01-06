import Avatar3D from './Avatar3d';
import Button from './ui/Button';
import { motion } from 'framer-motion';


export default function Hero() {
  return (
    <section className='flex flex-col lg:flex-row items-center justify-center h-screen bg-gradient-to-b from-[#FFD6CC] via-[#FFEDEA] to-[#FFFFFF] pb-10' id='Home'>
        <div className='flex flex-col items-center justify-center text-center lg:text-left gap-4 lg:gap-5 p-4 order-2 lg:order-1 '>
          <div className="inline-block px-4 py-1 rounded-full bg-white/50 border border-gray-200 backdrop-blur-sm mb-2">
            <span className="text-sm font-semibold text-center  tracking-wider uppercase text-[#FF7A7A]">👋 Bienvenido a mi portafolio</span>
          </div>

          <p className='text-6xl text-[#2A1F2D] text-center max-w-2xl'>
            Hola, soy <motion.span className='font-black'>Florencia</motion.span>
          </p>

          <motion.p
          animate={{ scale: 2 }}
            className="font-semibold text-2xl text-gray-400 text-shadow-md text-shadow-gray-300">
            Frontend Developer
          </motion.p>

          <div className='flex gap-3'>
            <Button name="Proyecto" href="#Projects" bg-color="bg-[#FF715B]"/>
            <Button name="Contacto" href="#Contact" bg-color="bg-[#FF715B]"/>
          </div>
        </div>

        <div className='flex items-center justify-center h-full w-full lg:w-1/2 md:p-4 order-1 lg:order-2'>
          <Avatar3D />
        </div>
    </section>
  );
}