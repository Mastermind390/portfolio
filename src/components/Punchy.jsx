import React from 'react'

const Punchy = ({description}) => {
  return (
    <>
      <div className='mt-10 bg-white p-4'>
            <div className='h-2 bg-gray-300'></div>
            <h1 className='text-center text-2xl mt-3 mb-3 font-bold font-[caprasimo] text-red-600'>{description}</h1>
            <div className='h-2 bg-gray-300'></div>
        </div>
    </>
  )
}

export default Punchy
