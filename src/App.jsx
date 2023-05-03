import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import data from "./data";

// import required modules
import { Pagination, Navigation } from "swiper";
import TestimonialCard from "./components/TestimonialCard";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {data.map((item) => (
          <SwiperSlide key={item.id} >
            <TestimonialCard {...item} />
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  );
}
