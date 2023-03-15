import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { ProductCard } from ".";

const AlsoLikeSlider = ({ rp }) => {
  const [scrollLeftVal, setScrollLeftVal] = useState(0);
  const [rpItems, setRpItems] = useState(null);

  const scrollLeftArr = [];

  const slideLeft = () => {
    var slider2 = document.getElementById("slider2");
    slider2.scrollLeft = slider2.scrollLeft - 295;
    scrollLeftArr.push(slider2.scrollLeft);
    setScrollLeftVal(slider2.scrollLeft);
    // console.log(slider2.scrollLeft);
  };

  const slideRight = () => {
    var slider2 = document.getElementById("slider2");
    slider2.scrollLeft = slider2.scrollLeft + 295;
    scrollLeftArr.push(slider2.scrollLeft);
    // console.log(slider2.scrollLeft);
  };

  useEffect(() => {
    setRpItems(rp.items);
    // console.log(rp);
  }, []);

  // console.log(rpItems);

  return (
    <section className="w-[100%] relative">
      {rp && rp.items.length > 0 ? (
        <>
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
            id="slider2"
            className="rounded-md w-[75%] sm2:w-[85%] md2:w-[92%] p-0 m-0 mx-auto whitespace-nowrap overflow-x-scroll space-x-3 scrollbar-none"
          >
            {rpItems &&
              rpItems.length > 0 &&
              rpItems.map((slide, i) => (
                <ProductCard product={slide} key={i} />
              ))}
          </section>
        </>
      ) : (
        <h3 className="text-[16px] font-inter font-medium text-center mb-3">
          No related products
        </h3>
      )}
    </section>
  );
};

export default AlsoLikeSlider;
