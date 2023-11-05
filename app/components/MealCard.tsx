import Image from 'next/image'
import React from 'react'

function MealCard() {
  return (
    <div className='bg-[#353842] p-[10px] rounded-2xl'>
      {/* IMAGE CONTAINER */}
      <div className="object-contain">
        {/* IMAGES */}
        <Image
        src={'/'}
        alt='Images'
        width={146}
        height={141}
        />
      </div>

      {/* TEXT CONTAINER */}
      <div className="px-[13px] pt-[15px] pb-[2px]">
        {/* MEAL NAME */}
        <h1 className='text-[13px] italic font-light text-center'>Fried Shrimp</h1>
        {/* TAGS */}
        <div className="flex justify-center items-center text-[--light-gray-text] text-[12px] gap-[10px] uppercase font-light italic pt-[4px]">
            <span><span className='text-white'>#</span> Tag1</span>
            <span><span className='text-white'>#</span> Tag1</span>
        </div>
      </div>
    </div>
  )
}

export default MealCard
