import React, { useState, Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

import announcements from "@/data/announcements";

export default function AnnouncementSlider() {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full relative">
      <ArrowLeft2
        variant="Linear"
        size={20}
        className="text-[#bbb] hover:text-white duration-300 cursor-pointer absolute top-[50%] left-0 -translate-x-0 translate-y-[-50%] z-50"
        onClick={sliderRef?.slickPrev}
      />
      <ArrowRight2
        variant="Linear"
        size={20}
        className="text-[#bbb] hover:text-white duration-300 cursor-pointer absolute top-[50%] right-0 -translate-x-0 translate-y-[-50%] z-50"
        onClick={sliderRef?.slickNext}
      />
      <Slider ref={setSliderRef} {...settings} className="">
        {announcements.length > 0 &&
          announcements.map((info) => (
            <p key={info.id} className="text-center">
              {info.info}
            </p>
          ))}
      </Slider>
    </div>
  );
}
