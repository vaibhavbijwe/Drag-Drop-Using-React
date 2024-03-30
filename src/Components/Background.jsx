import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen '> 
    <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-semibold text-x'>Documents</div>
      <h1 className='absolute top-1/2 left-1/2 text-9xl -translate-x-[50%] -translate-y-[50%] text-zinc-900 leading-none tracking-tighter uppercase font-semibold'>Docs.</h1>
    </div>
    </>
  )
}

export default Background