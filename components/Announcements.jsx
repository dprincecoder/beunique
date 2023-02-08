import React from "react";
import { AnnouncementSlider } from ".";

const Announcements = () => {
  return (
    <section className="font-inter bg-black text-white grid place-items-center w-full py-[6px] px-3 text-[12px] md:text-[14px] lg2:text-[16px]">
      <section className="w-[95%] sm:w-[80%] md:w-[60%] overflow-hidden">
        <AnnouncementSlider />
      </section>
    </section>
  );
};

export default Announcements;
