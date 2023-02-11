import { Heart } from "iconsax-react";
import Image from "next/image";
import React from "react";
import productImage from "../public/page_imgs/main_hero5a.jpg";

const productCard = ({ product }) => {
  return (
    <section className="w-[290px] h-[490px] relative inline-block">
      {product.is_new && (
        <span className="font-inter text-white bg-black rounded-full px-3 py-1 text-[14px] absolute top-3 left-3">
          New!
        </span>
      )}

      <Image
        src={productImage}
        alt={product.name}
        width={290}
        height={370}
        loading="lazy"
        className="w-[290px] h-[370px]"
      />

      <section className="w-full flex items-start justify-between mt-4">
        <section className="">
          <h3 className="text-[14px]">{product.name}</h3>
          {/* <p className="">{product.desc}</p> */}
          <p className="text-[17px] font-anybody font-bold mt-3">
            {product.price}
          </p>
        </section>
        <Heart variant="linear" size={25} className="text-black ml-6" />
      </section>
    </section>
  );
};

export default productCard;
