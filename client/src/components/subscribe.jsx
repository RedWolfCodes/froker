import React from 'react'

const Subscribe = () => {
  return (
    <div className='flex xl:flex-row flex-col-reverse items-center gap-y-4 xl:space-y-0 xl:mx-72 mx-8 rounded-2xl border-2 space-x-4 border-slate-300 p-8'>
      <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1721478483/Froker/crvak8icuhxrkjjhoeje.png" className='xl:w-60 mt-20 xl:mt-0' alt="" />
      <div className='flex flex-col space-y-4'>
        <h1 className='font-bold text-[2rem] xl:text-left text-center'>Subscribe to our newsletter to get the latest updates and news</h1>
        <div className='flex xl:flex-row flex-col items-center xl:space-y-0 space-y-4 justify-between'>
            <input 
                type='email'
                placeholder='Enter your email'
                className=' placeholder:text-slate-400 border-2 border-slate-300 xl:rounded-tl-full xl:rounded-bl-full xl:p-4 py-2 px-4 rounded-3xl w-full'
            />
            <button className='bg-orange-500 text-white xl:w-auto w-1/2 xl:rounded-tr-full xl:rounded-br-full xl:p-4 p-2 xl:px-16 rounded-3xl'>Subscribe</button>
        </div>
      </div>

    </div>
  )
}

export default Subscribe
