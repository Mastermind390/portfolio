import React from 'react'

const SkillCard = ({title, description}) => {
  return (
    <>
        <div className="w-80 bg-secondary rounded-lg p-6 shadow-lg">
            <h1 className='text-2xl text-center font-black uppercase'>{title}</h1>
            <p className="text-center mt-4 bg-amber-100 p-3 rounded-lg">{description}</p>
        </div>
    </>
  )
}

export default SkillCard

// <div className='w-80 bg-secondary rounded-lg p-6'>
        //         <h1 className='text-2xl text-center font-black uppercase'>{title}</h1>
        //         <p className="text-center mt-4 bg-amber-100 p-3 rounded-lg">{description}</p>
        // </div>
