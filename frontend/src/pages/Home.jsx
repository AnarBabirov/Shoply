import { Hero } from "../sections/Hero";
import { FeaturedCategories } from "../sections/FeaturedCategories";
import { FeaturedProducts } from "../sections/FeaturedProducts";


export const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts/>
    </>
  );
};