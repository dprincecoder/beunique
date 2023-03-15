import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from ".";
import { fetchNewProducts } from "../redux/features/slider/sliderSlice";
import { dispatch } from "../redux/store";

const NewStockSlider = () => {
  const [initialSlider, setInitialSlider] = useState([]);
  const [scrollLeftVal, setScrollLeftVal] = useState(0);
  const { products, status, error } = useSelector((state) => state.slider);

  const scrollLeftArr = [];

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

  // const GetAllNewProducts = async () => {
  //   try {
  //     const res1 = await axios.get(
  //       `https://beunique.live/users/get_dress/short-dress`
  //     );

  //     const res2 = await axios.get(
  //       `https://beunique.live/users/get_dress/long-dress`
  //     );

  //     const res3 = await axios.get(
  //       `https://beunique.live/users/get_dress/two-piece`
  //     );

  //     const res4 = await axios.get(
  //       `https://beunique.live/users/get_dress/gown`
  //     );

  //     const res5 = await axios.get(
  //       `https://beunique.live/users/get_dress/jumpsuit`
  //     );

  //     const res1Arr = res1.data.detail;
  //     const res2Arr = res2.data.detail;
  //     const res3Arr = res3.data.detail;
  //     const res4Arr = res4.data.detail;
  //     const res5Arr = res5.data.detail;

  //     const nsa = res1Arr.concat(res2Arr, res3Arr, res4Arr, res5Arr);

  //     setInitialSlider(nsa);
  //     console.log(`new stock slider: ${nsa}`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const GetAllNewProducts = async () => {
  //   try {
  //     const endpoints = [
  //       "short-dress",
  //       "long-dress",
  //       "two-piece",
  //       "gown",
  //       "jumpsuit",
  //     ];

  //     const responses = await Promise.all(
  //       endpoints.map((endpoint) =>
  //         axios.get(`https://beunique.live/users/get_dress/${endpoint}`)
  //       )
  //     );

  //     const products = responses.reduce(
  //       (acc, { data: { detail } }) => acc.concat(detail),
  //       []
  //     );

  //     setInitialSlider(products);
  //     console.log(`new stock slider:`, products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    dispatch(fetchNewProducts());
  }, []);

  return (
    <section className="w-[100%] relative">
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
        className="rounded-md w-[75%] sm2:w-[85%] md2:w-[92%] p-0 m-0 mx-auto whitespace-nowrap overflow-x-scroll space-x-3 scrollbar-none"
      >
        {products.length > 0 &&
          products.map((slide, i) => <ProductCard product={slide} key={i} />)}
      </section>
    </section>
  );
};

export default NewStockSlider;
