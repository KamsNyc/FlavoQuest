import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
  <div className="bg-white w-[360px] bg-opacity-10 backdrop-blur-md rounded-full shadow-lg px-4 py-2 flex justify-between items-center">
    <div className="flex items-center w-full justify-between px-[20px]">
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer">
        <Link href={'/'}><Image src="/Category.png" alt="Homepage" width={24} height={24} /></Link>
      </div>
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer">
      <Link href={'/'}><Image src="/Shuffle.png" alt="Homepage" width={24} height={24} /></Link>
      </div>
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer">
      <Link href={'/'}><Image src="/Heart.png" alt="Homepage" width={24} height={24} /></Link>
      </div>
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer">
      <Link href={'/account'}><Image src="/Account.png" alt="Homepage" width={24} height={24} /></Link>
      </div>
    </div>
  </div>
</div>
  )
}

export default Footer
