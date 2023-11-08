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

interface MealItem {
    idMeal: string;
    strMealThumb: string;
    strMeal: string;
  }

function Page({ params }: PageProps) {
    const {category} = params;
    const [currentItem, setCurrentItem] = useState<MealItem[]>([]);

    const FetchCategoryItem = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await res.json();
    
        if (data.meals) {
            setCurrentItem(data.meals);
        } else {
            console.log('No meals found for the category:', category);
        }
        console.log(data);
        console.log(category);
    }

    useEffect(() => {
        FetchCategoryItem()
    }, [])
    return (
        <section className=''>
            {/* CATEGORY SCROLLBAR */}
            <HeaderCategoryScroll />

            {/* ALL CARDS */}
            <div className="mt-10 px-[20px] grid grid-cols-2 gap-x-[15px] gap-y-[15px] mb-24">
               {
                currentItem && currentItem.map((item) => (
                    <div key={item.idMeal}>
                     {/* CARD MOCK */}
                     <Link href={`/category/Chicken/${item.idMeal}`}>
                <div className="max-h-[230px] bg-[#353842] p-[10px] rounded-xl">
                    {/* IMAGE */}
                    <div className="max-full max-h-[141px] flex justify-center items-center">
                    <Image
                    src={item.strMealThumb}
                    alt={`${item.strMeal}`}
                    width={146}
                    height={141}
                    className='rounded-lg'
                    />
                    </div>

                    {/* CONTEXT */}
                    <div className="py-2">
                        <h1 className='text-[13px] font-light italic text-center'>{item.strMeal}</h1>
                    </div>
                </div>
                </Link>
                </div>
                ))
               }
            </div>
          
        </section>
        
       
    );
}

export default Page;

