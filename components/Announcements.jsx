import React from "react";
import { AnnouncementSlider } from ".";

const Announcements = () => {
  return (
    <section className="font-inter font-normal bg-black text-white grid place-items-center w-full py-[6px] px-[40px] text-[14px]">
      <section className="w-[95%] sm:w-[70%] sm2:w-[60%] sm3:w-[50%] md:w-[40%] overflow-hidden">
        <AnnouncementSlider />
      </section>
    </section>
  );
};

export default Announcements;
