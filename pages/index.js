import FeaturedBrands from "../app/components/Home/FeaturedBrands";
import HomeCategory from "../app/components/Home/HomeCategory";
import HomeHero from "../app/components/Home/HomeHero";
import HomePosters from "../app/components/Home/HomePosters";
import TodayDeals from "../app/components/Home/TodayDeals";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeCategory />
      <FeaturedBrands />
      <TodayDeals/>
      <HomePosters/>
    </>
  )
}
