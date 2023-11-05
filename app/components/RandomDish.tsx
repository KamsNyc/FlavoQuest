'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Meal {
  strMeal: string;
  strMealThumb: string;
  strTags: string | null;
}

function RandomDish() {
  const [singleMeal, setSingleMeal] = useState<Meal | null>(null);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data: { meals: Meal[] }) => {
        if (data.meals) {
          // Store the random meal in the state
          setSingleMeal(data.meals[0]);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to extract the first two tags from strTags
  const getFirstTwoTags = (tags: string | null): string[] => {
    return tags ? tags.split(',').slice(0, 2).map(tag => tag.trim()) : [];
  };

  return (
    <section>
      <div className="bg-[#353842] p-[10px] rounded-2xl mt-10">
        {/* TEXT CONTAINER */}
        <div className="px-[13px] pb-[2px]">
          {/* HEADING */}
          <span className='text-[12px] font-light italic text-center flex items-center justify-center'>RANDOM MEAL OF THE DAY</span>
          {/* MEAL NAME */}
          <h1 className="text-[16px] italic font-medium text-[#FF7269] text-center">
            {singleMeal?.strMeal || 'Loading...'}
          </h1>
          {/* TAGS */}
          <div className="flex justify-center items-center text-white text-[10px] gap-[10px] uppercase font-light italic pt-[2px]">
  {getFirstTwoTags(singleMeal?.strTags as string | null).map(tag => (
    <span key={tag}>
      <span className="text-white">#</span>  {tag}
    </span>
  ))}
</div>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="object-contain pt-[15px] flex items-center justify-center relative">
          {/* IMAGES */}
          <Image
            src={singleMeal?.strMealThumb || ''}
            alt={singleMeal?.strMeal || ''}
            width={320}
            height={130}
            className='rounded-xl p-2'
          />
          {/* VIEW CURRENT ITEM */}
          <div className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white py-1 px-2 rounded-xl text-black cursor-pointer opacity-60">HOW ITS MADE</div>
        </div>
      </div>
    </section>
  );
}

export default RandomDish;
