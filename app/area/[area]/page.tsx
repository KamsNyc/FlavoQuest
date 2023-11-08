'use client'
import HeaderCategoryScroll from '@/app/components/HeaderCategoryScroll';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface PageProps {
  params: {
    area: string;
  };
}

interface AreaItem {
  strMeal: string;
  strMealThumb: string;
  idMeal: number;
}

function Page({ params }: PageProps) {
  const { area } = params; 
  const [currentItem, setCurrentItem] = useState<AreaItem[]>([]);

  const FetchAllCategories = async () => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
      const data = await res.json();
      setCurrentItem(data.meals);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  useEffect(() => {
    FetchAllCategories()
  }, []);

  return (
    <section className=''>
      {/* CATEGORY SCROLLBAR */}
      <HeaderCategoryScroll />

      {/* ALL CARDS */}
      <div className="mt-10 px-[20px] grid grid-cols-2 gap-x-[15px] gap-y-[15px] mb-24">
        {currentItem && currentItem.map((item) => (
          <div key={item.idMeal}>
            {/* CARD MOCK */}
            <Link href={`/category/${area}/${item.idMeal}`}>
              <div className="max-h-[230px] bg-[#353842] p-[10px] rounded-xl">
                {/* IMAGE */}
                <div className="w-full rounded-lg max-h-[141px] flex justify-center items-center">
                  <Image
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    width={146}
                    height={141}
                  />
                </div>

                {/* CONTEXT */}
                <div className="py-2">
                  <h1 className='text-[13px] font-light italic text-center'>{item.strMeal}</h1>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Page;
