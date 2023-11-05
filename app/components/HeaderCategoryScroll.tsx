'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MealData {
  idCategory: number;
  strCategoryThumb: string;
  strCategory: string;
}



function HeaderCategoryScroll() {
  const [categories, setCategories] = useState<MealData[]>([]);
  
  const fetchCategories = async () => {
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await res.json();
      setCategories(data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="mt-[23px]">
      {/* HEADING/ALL BUTTON TOPSIDE */}
      <div className="flex justify-between items-center px-[20px]">
        {/* MAIN SECTION HEADING */}
        <h1 className="font-medium text-[20px] ">Categories</h1>
        {/* ALL ICON AND TEXT */}
        <span className="font-medium text-[13px] gap-2 flex items-center cursor-pointer"><Link href={`/category`}>All</Link> <Image src="/RightArrow.png" alt="right arrow icon" width={16} height={16} /></span>
      </div>

      {/* BADGES BOTTOMSIDE */}
      <div className="px-[20px] pt-[10px] flex items-center gap-3 overflow-hidden overflow-x-scroll  ">
        {/* MY BUTTONS */}
        {categories.map((category) => (
          <div key={category.idCategory} className="cursor-pointer bg-white/10 py-[12px] px-[15px] font-light italic text-[#8E94A4] text-[15px]  rounded-[10px] flex items-center gap-3 ">
            {/* IMAGE */}
            <div className="w-[24px] h-[24px] ">
              <Image
                src={category.strCategoryThumb}
                alt={category.strCategory}
                width={24}
                height={24}
                className='w-[24px] h-[24px]'
              />
            </div>
            {/* title */}
            <Link href={`/category/${encodeURIComponent(category.strCategory)}`}>{category.strCategory}</Link>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeaderCategoryScroll;
