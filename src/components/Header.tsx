import { useState } from 'react';
import logo from '../assets/logo.svg'

const NAV_LINKS = [
    { href: '#experience', label: 'Experiencia' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#Projects', label: 'Proyecto' },
    { href: '#aboutme', label: 'Sobre mi' },
];

export default function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
            <header className='relative flex items-center justify-between px-6 md:px-20 py-1 bg-neutral-primary w-full z-20 top-0 start-0 bg-[#FFD6CC]'>
                <a href="#Home" className='cursor-pointer'>
                    <img src={logo} alt="Logo" className='h-12 w-auto cursor-pointer'/>
                </a>

                <nav className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
                        onClick={toggleMenu}
                    >
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor"strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
                    </button>
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-[#FFD6CC]/50 backdrop-blur-md shadow-lg md:static md:block md:w-auto md:bg-transparent md:border-0 md:shadow-none`}>
                        <ul className="font-medium flex flex-col items-center p-4 md:p-0 md:flex-row md:space-x-8">
                            {NAV_LINKS.map((link)=>
                                <li key={link.label} className='w-full md:w-auto text-center'>
                                    <a
                                        href={link.href}
                                        className="block py-2 px-3 relative group py-2"
                                        onClick={() =>setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF715B] transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}