import React from 'react'

const Punchy = ({description}) => {
  return (
    <>
      <div className='mt-10 bg-white p-6'>
            <div className='h-2 bg-red-300'></div>
            <h1 className='text-center text-3xl mt-3 mb-3 font-bold font-[caprasimo] text-black lg:text-4xl'>{description}</h1>
            <div className='h-2 bg-red-300'></div>
        </div>
    </>
  )
}

export default Punchy
