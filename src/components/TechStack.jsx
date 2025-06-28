import TechCard from './TechCard'
import css from '../assets/icons/css.png';
import javascript from '../assets/icons/javascript.png';
import tailwind from '../assets/icons/tailwind.png'
import react from '../assets/icons/react.png';
import python from '../assets/icons/python.png';
import django from '../assets/icons/django.png';
import git from '../assets/icons/git.png';
import github from '../assets/icons/github.png';
import Punchy from './Punchy';

const TechStack = () => {
  return (
    <div className="mt-10">
      <h1 className='text-center font-[caprasimo] text-xl bg-primary p-3 mb-4 text-white'>⚙️ Tech Stack</h1>
      <div className="p-6 flex gap-3 flex-wrap justify-center">
        <TechCard logo={css} name={"CSS"} />
        <TechCard logo={javascript} name={"JAVASCRIPT"}  />
        <TechCard logo={react} name={"REACT"}/>
        <TechCard logo={tailwind} name={"TAILWINDCSS"} />
        <TechCard logo={python} name={"PYTHON"} />
        <TechCard logo={django} name={"DJANGO"} />
        <TechCard logo={git} name={"GIT"} />
        <TechCard logo={github} name={"GITHUB"} />
      </div>

      <Punchy description={`"Looking for someone who thinks deeply, codes cleanly, and builds like a business partner and not just a developer?"`} />
    </div>
  )
}

export default TechStack
