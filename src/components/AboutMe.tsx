import AboutMeImage from '../assets/avatar_aboutme.jpg'

export default function AboutMe() {
  return (
    <section className='flex flex-col justify-center h-screen md:gap-28 bg-[#FFEDEA]  py-20 md:py-28'>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-[#181311] text-4xl font-black leading-tight tracking-[-0.015em] pb-12 text-center">Sobre mi</h2>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          <img src={AboutMeImage} alt="Soy Yo" className='w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-2xl object-cover mx-auto'/>

            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar, a cras proin cubilia ornare nibh malesuada eget, sagittis lacinia tempor nulla nisl maecenas quisque. Cubilia ad a potenti sociis conubia nam leo diam mollis nibh et elementum pharetra risus turpis, aliquet curae at maecenas odio faucibus senectus phasellus dignissim praesent integer aliquam pulvinar. Potenti tellus faucibus vivamus nec torquent ultrices curabitur penatibus, senectus sodales fusce feugiat est ornare dictum facilisi, proin ad nulla maecenas parturient sapien class.
            </p>
        </div>
      </div>
    </section>
  );
}
