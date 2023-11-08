'use client'
import HeaderCategoryScroll from '@/app/components/HeaderCategoryScroll';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface PageProps {
  params: {
    category: string;
  };
}

interface CategoryItem {
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
  // Add other properties as needed
}

function Page({ params }: PageProps) {
  const [currentCategory, setCurrentCategory] = useState<CategoryItem[]>([]);

  const FetchAllCategories = async () => {
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await res.json();
      setCurrentCategory(data.categories);
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
        {currentCategory && currentCategory.map((item) => (
          <div key={item.strCategory}>
            {/* CARD MOCK */}
            <Link href={`/category/${item.strCategory}`}>
              <div className="max-h-[230px] bg-[#353842] p-[10px] rounded-xl">
                {/* IMAGE */}
                <div className="w-full rounded-lg h-auto flex justify-center items-center">
                  <Image
                    src={item.strCategoryThumb}
                    alt={item.strCategoryDescription}
                    width={146}
                    height={141}
                    property=''
                  />
                </div>

                {/* CONTEXT */}
                <div className="py-2">
                  <h1 className='text-[13px] font-light italic text-center'>{item.strCategory}</h1>
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
