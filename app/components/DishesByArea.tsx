'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function DishesByArea() {
  const [areas, setAreas] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    // Fetch the list of areas from the MealDB API
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((response) => response.json())
      .then((data) => {
        // Store the list of areas in the state
        setAreas(data.meals);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const flagAPI = 'https://flagsapi.com/';

  // Mapping of country names to country codes
  const countryCodeMapping = {
    "American": "US",
    "British": "GB",
    "Canadian": "CA",
    "Chinese": "CN",
    "Croatian": "HR",
    "Dutch": "NL",
    "Egyptian": "EG",
    "Filipino": "PH",
    "French": "FR",
    "Greek": "GR",
    "Indian": "IN",
    "Irish": "IE",
    "Italian": "IT",
    "Jamaican": "JM",
    "Japanese": "JP",
    "Kenyan": "KE",
    "Malaysian": "MY",
    "Mexican": "MX",
    "Moroccan": "MA",
    "Polish": "PL",
    "Portuguese": "PT",
    "Russian": "RU",
    "Spanish": "ES",
    "Thai": "TH",
    "Tunisian": "TN",
    "Turkish": "TR",
    "Unknown": "UN",
    "Vietnamese": "VN"
  };

  // Define the number of items to initially display and the number to show on "View More" click
  const initialDisplayCount = 4;
  const additionalDisplayCount = 4;

  return (
    <section className="mt-[23px] mb-10">
      {/* HEADING/ALL BUTTON TOPSIDE */}
      <div className="flex justify-between items-center">
        {/* MAIN SECTION HEADING */}
        <h1 className="font-medium text-[20px]">Dishes by Area</h1>
        {/* ALL ICON AND TEXT */}
        {areas.length > initialDisplayCount && (
          <button
            className="font-medium text-[13px] flex items-center cursor-pointer"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "View Less" : "View More"}
          </button>
        )}
      </div>

      {/* BOTTOM SIDE */}
      <div className="grid grid-cols-4 grid-row-2 gap-x-[15px] gap-y-[15px] mt-[10px]">
        {areas &&
          areas.slice(0, showMore ? areas.length : initialDisplayCount).map((area) => (
            <div key={area.strArea} className="flex items-center justify-center cursor-pointer">
              <div className="rounded-full h-[60px] w-[60px] flex items-center justify-center overflow-hidden">
                <Image
                  src={`${flagAPI}${countryCodeMapping[area.strArea]}/flat/64.png`}
                  alt={`${area.strArea} flag`}
                  width={60}
                  height={60}
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default DishesByArea;