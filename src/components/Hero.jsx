import dev from '../assets/images/dev.jpg'

const Hero = () => {
  return (
     <div className="mt-10 p-6 lg:px-40 lg:py-20 lg:flex lg:gap-30 lg:justify-between">
          <div>
            <h1 className="text-4xl text-center font-[caprasimo] mb-4 text-amber-400 lg:text-left lg:text:6xl">
              👋 Hey, I’m Enitan Elijah. <br />
              I Build the Brains Behind the Web.
            </h1>
            <div className='w-full h-1 bg-amber-100'></div>
            <p className="font-serif text-lg mt-4 italic text-center lg:text-left text-white">I’m a web developer who turns real-world problems into scalable, secure, and smart web solutions — all without fluff. From robust Django systems to API-powered trading bots and AI-powered platforms, I craft the logic that powers the user experience.</p>
          </div>
          <div className="mt-4">
            <img className='rounded-lg' src={dev} alt="Developer.jp"  />
          </div>
        </div>
  )
}

export default Hero
