

const ProjectCard = ({imageSource, description, demoLink, githubLink}) => {
  return (
    <div className='w-80 bg-sky-100 rounded-3xl mb-5'>
        <img className='rounded-t-3xl' src={imageSource} alt="" srcset="" />
        <div className='p-4'>
        <p className='font-bold'>{description}</p>
        </div>
        <div className='p-4 flex justify-between'>
        <a className='bg-primary p-2 rounded-lg text-white w-25 text-center' href={demoLink} target="blank">Live Demo</a>
        <a className='bg-black p-2 rounded-lg text-white w-25 text-center' href={githubLink} target="blank">Github</a>
        </div>
    </div>
  )
}

export default ProjectCard
