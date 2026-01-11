import Image from "next/image";
import HeroSection from "./components/home/hero";
import CategorySection from "./components/home/categories";
import ProductsSection from "./components/home/product";

export default function Home() {
  return ( 
  <main>
    <HeroSection />
    <CategorySection />
    <ProductsSection />
  </main>
  );
}
