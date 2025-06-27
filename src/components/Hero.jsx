import dev from '../assets/images/dev.jpg'

const Hero = () => {
  return (
     <div className="mt-10 p-6">
          <div>
            <h1 className="text-4xl text-center font-[caprasimo] mb-4 text-red-700">
              👋 Hey, I’m Enitan Elijah. <br />
              I Build the Brains Behind the Web.
            </h1>
            <hr />
            <p className="font-serif text-lg mt-4 italic text-center">I’m a web developer who turns real-world problems into scalable, secure, and smart web solutions — all without fluff. From robust Django systems to API-powered trading bots and AI-powered platforms, I craft the logic that powers the user experience.</p>
          </div>
          <div className="mt-4">
            <img className='rounded-lg' src={dev} alt="Developer.jp"  />
          </div>
        </div>
  )
}

export default Hero
