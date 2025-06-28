import SkillCard from './SkillCard';
import Punchy from './Punchy'

const Skills = () => {
  return (
    <div className="mt-10">
        <h1 className='text-center font-[caprasimo] text-xl bg-primary p-3 mb-4 text-white'>💡 What I Do Best:</h1>
      <div className='mt-4 flex justify-center items-center gap-6 flex-wrap p-6'>
        <SkillCard title="Backend Development with Django" description="Authentication, APIs, task scheduling, and more. All production-ready" />

        <SkillCard title="Automation & Smart Workflows" description="From Whatsapp Bot to Telegram Bot to Crypto Trading Bot, I automate what others do manually" />

        <SkillCard title="API Integration Wizardry" description="Payment systems, API data, AI models, and more. if it has an API, I can bend it to your will" />

        <SkillCard title="Frontend Integration" description="Functional, fast, and clean. I always built with a backend-first mindset." />

        <Punchy description={"I don’t just code. I build tools that help businesses save time, earn more, and grow faster."} />
        
      </div>
    </div>
  )
}

export default Skills
