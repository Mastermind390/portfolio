import cashpopImage from '../assets/images/cahpop.jpg'

const Projects = () => {
  return (
    <div className='mt-10'>
      <h1 className='text-center font-[caprasimo] text-xl bg-primary p-3 mb-4 text-white'>🚀 Real Projects. Real Value</h1>

      <div className='p-6'>
        <div className='w-80 bg-sky-100 h-100 rounded-3xl mb-5'>
          <img className='rounded-t-3xl w-full' src={cashpopImage} alt="" srcset="" />
           <div className='p-4'>
            <p className='font-bold'>Cashpop a task marketplace where user can complete simple task to earn money or airtime. Users can also create and manage task on this platform.</p>
          </div>
          <div className='p-4 flex justify-between'>
            <a className='bg-primary p-2 rounded-lg text-white w-25 text-center' href="">Live Demo</a>
            <a className='bg-black p-2 rounded-lg text-white w-25 text-center' href="">Github</a>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Projects

//h ttps://cashpop.com.ng/
