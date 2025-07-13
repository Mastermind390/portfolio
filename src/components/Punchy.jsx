import React from 'react'

const Punchy = ({description}) => {
  return (
    <>
      <div className='mt-10'>
            <div className='h-2 bg-cyan-800'></div>
            <h1 className='text-center text-3xl mt-3 mb-3 font-bold font-[caprasimo] text-white lg:text-4xl'>{description}</h1>
            <div className='h-2 bg-cyan-800'></div>
        </div>
    </>
  )
}

export default Punchy
