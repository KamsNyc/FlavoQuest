import Image from 'next/image';
import GreetingBar from './components/GreetingBar';
import SearchBar from './components/SearchBar';
import HeaderCategoryScroll from './components/HeaderCategoryScroll';
import DishesByArea from './components/DishesByArea';
import RandomDish from './components/RandomDish';

export default function Home() {
  return (
    <div className="relative">
      {/* INNER CONTAINER */}
      <section className='z-10 relative px-[20px]'>

        {/* GREETING USER */}
        <GreetingBar />

        {/* SEARCH BAR */}
        <SearchBar />

        {/* CATEGORIES */}
        <HeaderCategoryScroll />

        {/* RANDOM RECIPE OF THE DAY */}
        <RandomDish />
        {/* DISH BY AREA 2 by 4 */}
        <DishesByArea />
        {/* DISH BY INGREDIENT 2 by 4 grid */}
        {/* NAVBAR ON THE BOTTOM */}
     
      </section>

      {/* BACKGROUND TEXTURE ABSOLUTE */}
      <Image 
        src={'/BackgroundTexture.png'}
        alt='background texture'
        layout="fill"
        objectFit=""
        className='absolute top-0 left-0 w-full h-full z-0'
      />
    </div>
  );
}
