import Image from 'next/image'
import React from 'react'

function SearchBar() {
  return (
    <section className='mt-[28px] h-16 flex items-center justify-center relative'>
        {/* INPUT SEACH COMPOENT */}
        <input 
        className="w-full h-full rounded-[15px] bg-[#252830] placeholder:text-light-gray-text p-[20px] text-[14px] font-medium"
        placeholder='Find your dishes'
        />

        {/* FILTER BUTTON */}
        <Image 
        src={'/Filter.svg'}
        alt='filter button image'
        width={24}
        height={24}
        className='absolute right-8 top-1/2 translate-y-[-50%] translate-x-[-50%] cursor-pointer'
        />

    </section>
  )
}

export default SearchBar
