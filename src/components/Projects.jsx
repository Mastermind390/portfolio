import cashpopImage from '../assets/images/cashhh.png';
import  robotImage from '../assets/images/robot.png';
import  ProjectCard from './ProjectCard'
import Punchy from './Punchy';

const Projects = () => {
  return (
    <div className='mt-10'>
      <h1 className='text-center font-[caprasimo] text-xl bg-primary p-3 mb-4 text-white'>🚀 Real Projects. Real Value</h1>

      <div className='p-6 flex flex-wrap gap-12 justify-center lg:px-40 lg:py-20'>
        <ProjectCard imageSource={cashpopImage} description={"Cashpop a task marketplace where user can complete simple task to earn money or airtime. Users can also create and manage task on this platform. This platform also allow users to convert their earnings to airtime whenever they like."} demoLink={"https://cashpop.com.ng/"} githubLink={"https://github.com/Mastermind390/cashpop"}/>

        <ProjectCard imageSource={robotImage} description={"A trading bot built with python, bybit api and telegram api. This robot generate trading signal based on data received from bybit, do some calculation based on preset parameters and send generated signal to a trading telegram channel."} demoLink={"https://t.me/cryptoSignalVaultt"} githubLink={"https://github.com/Mastermind390/rangeBreakBot/blob/main/rangeBreakBot.py"} />
        
        <Punchy description={`"I code like a strategist, not a hobbyist. Every line I write solves a problem."`} />
      </div>

      
    </div>
  )
}

export default Projects

//https://cashpop.com.ng/
