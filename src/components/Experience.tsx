import TimeLine from './TimeLine';

export default function Experiencie() {
  return (
    <section className='flex items-center flex-col gap-20 bg-[#FFF7F5] py-20 md:py-28'>
        <div className="max-w-4xl mx-auto px-4">
            <p className="text-[#181311] text-4xl font-black leading-tight tracking-[-0.015em] pb-12 text-center">Experiencia</p>

            <TimeLine></TimeLine>
        </div>
    </section>
  );
}
