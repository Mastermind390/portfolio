import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className="mt-10">
        <h1 className='text-center font-[caprasimo] text-xl bg-primary p-3 mb-4 text-white'>💡 What I Do Best:</h1>
      <div className='mt-4 flex justify-center items-center gap-6 flex-wrap'>
        <SkillCard title="Backend Development with Django" description="Authentication, APIs, task scheduling, and more. All production-ready" />

        <SkillCard title="Automation & Smart Workflows" description="From Whatsapp Bot to Telegram Bot to Crypto Trading Bot, I automate what others do manually" />
      </div>
    </div>
  )
}

export default Skills
