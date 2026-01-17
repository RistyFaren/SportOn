import Image from "next/image";
import HeroSection from "./components/home/hero";
import CategorySection from "./components/home/categories";
import ProductsSection from "./components/home/product";
import { getAllCategories } from "../services/category.services";
import { getAllProduct } from "../services/product.services";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProduct()
  ])
  return ( 
  <main>
    <HeroSection />
    <CategorySection categories={categories}/>
    <ProductsSection products={products}/>
  </main>
  );
}
