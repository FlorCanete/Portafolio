export default function TimeLine() {
  return (
    <>
        <div className="timeline">
            <div className="container right">
                <div className="content backdrop-blur-xl bg-white/50 border border-white/30 shadow-lg rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]">
                    <p className="text-2xl font-bold text-[#FF715B]">Frontend Developer & UI Designer</p>
                    <p className="text-md text-gray-600">Freelance <span>(Febrero 2025 - Actual)</span></p>
                    <ul className="list-disc ml-6 mt-3">
                        <li>Desarrollo de interfaces de usuario atractivas y funcionales utilizando tecnologías como HTML, CSS, JavaScript y React.</li>
                        <li>Implementación de diseños responsivos.</li>
                        <li>Mantenimiento y actualización de sitios web existentes según las necesidades del cliente.</li>
                    </ul>
                </div>
            </div>
            <div className="container right">
                <div className="content backdrop-blur-xl bg-white/50 border border-white/30 shadow-lg rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]">
                    <p className="text-2xl font-bold text-[#FF715B]">Frontend Developer &  UI Designer</p>
                    <p className="text-md text-gray-600">AdminSEG <span>(Junio 2023 - Febrero 2025)</span></p>
                    <ul className="list-disc ml-6 mt-4">
                        <li>Colaborar en el diseño y elaboración de prototipos de nuevas funcionalidades utilizando Figma.</li>
                        <li>Implementar interfaces.</li>
                        <li>Resolver conflictos.</li>
                        <li>Mantener y actualizar vistas y componentes existentes, mejorando el rendimiento y la experiencia de usuario.</li>
                        <li>Brindar soporte técnico</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  );
}
