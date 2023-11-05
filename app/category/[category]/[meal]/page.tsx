"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

function Page({ params }) {
  const { meal } = params;
  //use state
  const [mealData, setMealData] = useState([]);

  //fetch function
  const FetchMealDataId = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setMealData(data.meals);
    } catch (error) {
      console.error(error);
    }
  };
  //use effect
  useEffect(() => {
    FetchMealDataId();
  }, []);

  return (
    <div>
      {mealData &&
        mealData.map((item) => (
          <section key={item.idMeal}>
            {/* MAIN CONTAIN CONTAINER +z index 3 */}
            <section className="z-[3] relative">
              {/* IMAGE CONTAINER */}
              <div className="flex item-center justify-center rounded-full overflow-hidden pt-[110px]">
                <Image
                  src={item.strMealThumb}
                  alt={item.strTags}
                  width={210}
                  height={210}
                  className="max-w-[210px] max-h-[210px] object-cover rounded-full  border-2 border-[#FF7269]"
                />
              </div>

              {/* TEXT CONTAINER */}
              <section className="mt-[22px] px-[44px]">
                {/* MEAL NAME */}
                <h1 className="text-center text-[20px] italic font-light">
                  {item.strMeal}
                </h1>
                {/* CAREGORY/AREA BADGE */}
                <div className="pt-[3px] flex items-center justify-center gap-2">
                  {/* CATEGORY BADGE */}
                  <Link href={"/"}>
                    <Badge variant="outline" className="text-white">
                      {item.strCategory}
                    </Badge>
                  </Link>
                  {/* AREA BADGE */}
                  <Badge variant="outline" className="text-white">
                    {item.strArea}
                  </Badge>
                </div>

                {/* STEPS CONTAINER */}
                <section className=" pt-[15px]">
                  {/* HEADING */}
                  <h3 className="py-2 text-center uppercase text-[--light-gray-text]  font-medium">
                    Instructions
                  </h3>
                  <ScrollArea className="h-[300px] w-full rounded-md border border-white/10 p-4">
                    {item.strInstructions}
                  </ScrollArea>
                </section>

                {/* INGREDIENTS CONTAINER */}
                <div className="mt-8">
                  {/* HEADING SECTION       */}
                  <div className="flex justify-between items-center px-[20px]">
                    {/* MAIN SECTION HEADING */}
                    <h1 className="font-medium text-[20px] ">Ingridients</h1>
                    {/* ALL ICON AND TEXT */}
                    <span className="font-medium text-[13px] gap-2 flex items-center cursor-pointer">
                      <Link href={`/category`}>Search By Ingridients</Link>{" "}
                      <Image
                        src="/RightArrow.png"
                        alt="right arrow icon"
                        width={16}
                        height={16}
                      />
                    </span>
                  </div>
                  {/* BOTTOM SECTION CARDS CONTAINER*/}
                  <div className="px-[20px] pt-[10px] flex items-center gap-3 overflow-hidden overflow-x-scroll  ">
                    {/* MY INGRDIENT BUTTONS */}

                    {Array.from(
                      { length: 20 },
                      (_, i) => item[`strIngredient${i + 1}`]
                    )
                      .filter(
                        (ingredient) => ingredient && ingredient.trim() !== ""
                      )
                      .map((ingredient, index) => (
                          <Link href={'/'} key={index} className="flex items-center gap-2 pb-2">
                          {/* INGRIEDENT IMAGE */}
                          <div className="w-[24px] h-[24px]">
                            <Image
                              src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`}
                              alt={ingredient}
                              width={24}
                              height={24}
                              className=" object-fill"
                            />
                          </div>
                          {/* INGREDIENTS LOOPED */}
                          <span className=" whitespace-nowrap" key={index}>
                            {ingredient}
                          </span>
                          </Link>
                      ))}
                  </div>
                </div>
              </section>
            </section>
          </section>
        ))}

      {/*  __________BACKGROUND ELEMENTS__________ */}

      {/* BACKGROUND TOP ROUNDED BLOCK */}
      <div className="absolute bottom-0 z-[1] bg-[#272A32] w-full h-[75%] rounded-t-[6rem]" />

      {/* BACKGROUND TEXTURE ABSOLUTE */}
      <Image
        src={"/SmokeBackground.png"}
        alt="background texture"
        layout="fill"
        objectFit=""
        className="absolute top-0 left-0 w-full h-full z-0 opacity-90"
      />
    </div>
  );
}

export default Page;
