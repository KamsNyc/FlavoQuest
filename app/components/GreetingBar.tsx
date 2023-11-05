import Image from 'next/image'
import React from 'react'

function GreetingBar() {
  return (
    <section className='w-full h-12 flex items-center justify-between mt-[33px]'>
        {/* LEFT SIDE */}
        <div className="">
            <p className='text-[--light-gray-text] text-[13px]'>Good morning</p>
            <h3 className='text-white text-[20px] tracking-wide'>User Name</h3>
        </div>
        {/* RIGHT SIDE */}

        <div className="">
            <Image
            src={'/Avatar.png'}
            alt='avatar'
            width={35}
            height={35}
            className="bg-black/30 rounded-[14px]"/>
        </div>
    </section>
  )
}

export default GreetingBar
