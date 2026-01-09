import Image from "next/image";
import HeroSection from "./components/home/hero";
import CategorySection from "./components/home/categories";
import ProductsSection from "./components/home/product";
import ProductAction from "./components/product-details/product-action";

export default function Home() {
  return ( 
  <main>
    <HeroSection />
    <CategorySection />
    <ProductsSection />
  </main>
  );
}
