import React, { useState, useEffect } from "react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { allProducts } from "../data/allProducts";
import { ProductCard } from ".";

const NewStockSlider = () => {
  const [initialSlider, setInitialSlider] = useState(null);
  const [scrollLeftVal, setScrollLeftVal] = useState(0);

  const scrollLeftArr = [];

  useEffect(() => {
    const top5newest = [];
    const newStockArr = allProducts.filter((prod) => prod.is_new === true);

    for (let x = 0; x < newStockArr.length; x++) {
      top5newest.push(newStockArr[x]);
    }

    setInitialSlider(top5newest);
  }, []);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 295;
    scrollLeftArr.push(slider.scrollLeft);
    setScrollLeftVal(slider.scrollLeft);
    // console.log(slider.scrollLeft);
    
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 295;
    scrollLeftArr.push(slider.scrollLeft);
    // console.log(slider.scrollLeft);
  };

  // console.log(scrollLeftArr);

  return (
    <section className=" w-[100%]  relative">
      <ArrowLeft2
        variant="Linear"
        size={40}
        className="text-black hover:text-gray-500 duration-300 cursor-pointer absolute top-[50%] left-0 -translate-x-0 translate-y-[-50%]"
        onClick={() => slideLeft()}
      />
      <ArrowRight2
        variant="Linear"
        size={40}
        className="text-black hover:text-gray-500 duration-300 cursor-pointer absolute top-[50%] right-0 -translate-x-0 translate-y-[-50%]"
        onClick={() => slideRight()}
      />

      <section
        id="slider"
        className=" rounded-md w-[75%] sm2:w-[85%] md2:w-[92%] p-0 m-0 mx-auto whitespace-nowrap overflow-x-scroll space-x-3 scrollbar-none"
      >
        {/* flex flex-row items-center justify-between  */}
        {initialSlider &&
          initialSlider.length > 0 &&
          initialSlider.map((slide, i) => (
            <ProductCard product={slide} key={i} />
          ))}
      </section>
    </section>
  );
};

export default NewStockSlider;
