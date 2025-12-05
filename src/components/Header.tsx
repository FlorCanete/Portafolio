import logo from '../assets/logo.png'

export default function Header () {
    return (
        <>
            <header className='flex items-center justify-between px-6 md:px-20 py-1 bg-[#ffffff99] backdrop-blur-md border-b-4 border-[#ffaa9633]'>
                <div>
                    <img src={ logo } alt="Logo de Flor" className='w-10'/>
                </div>

                <nav className='hidden md:block'>
                    <ul className='flex gap-6 text-[#2A1F2D]'>
                        <li className='hover:text-[#FF8F8F]'>Inicio</li>
                        <li className='hover:text-[#FF8F8F]'>Sobre mi</li>
                        <li className='hover:text-[#FF8F8F]'>Experiencia</li>
                        <li className='hover:text-[#FF8F8F]'>Habilidades</li>
                        <li className='hover:text-[#FF8F8F]'>Proyectos</li>
                        <li className='hover:text-[#FF8F8F]'>Contacto</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}