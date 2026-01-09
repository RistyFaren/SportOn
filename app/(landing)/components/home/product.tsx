import Link from "next/link";
import Image from "next/image";
import Button from "../UI/button";
import { FiPlus } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";

const ProductList = [
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 450000,
    imgUrl: "shoes-2.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    imgUrl: "racket.png",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    imgUrl: "sportshirt-1.png",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: 458000,
    imgUrl: "football-shoes.png",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: 450000,
    imgUrl: "football-shoes.png",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    imgUrl: "sportshirt-2.png",
  },
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    imgUrl: "shoes-1.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    imgUrl: "racket-2.png",
  },
];

const ProductsSection = () => {
  return (
    <section id="products-section" className="container mx-auto mt-32">
      <h2 className="font-bold italic text-4xl text-center mb-11">
        <span className="text-primary">OUR</span> PRODUCT
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {ProductList.map((product, index) => (
          <Link
            href="#"
            key={index}
            className="p-1.5 bg-white hover:drop-shadow-xl duration-300"
          >
            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
              <Image
                src={`/images/products/${product.imgUrl}`}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square object-contain"
              />
              <Button className="w-10 h-10 p-2! absolute right-3 top-3">
                <FiPlus size={24} />
              </Button>
            </div>
            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between mb-8">
              <div className="text-gray-500">{product.category}</div>
              <div className="font-medium text-primary">
                {priceFormatter(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
