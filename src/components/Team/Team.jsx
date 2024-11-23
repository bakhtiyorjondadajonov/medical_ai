import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./team.css";
import ProfileCard from "./ProfileCard/ProfileCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
export default function Team() {
  return (
    <SectionContainer>
      <SectionTitle title="Our Team" subtitle="We have a lot of experience." />
      <div className="team-container">
        <Swiper
          breakpoints={{
            600: {
              slidesPerView: 1, // For mobile devices (width <= 640px)
            },
            900: {
              slidesPerView: 2, // For desktop devices (width > 1024px)
            },
            1024: {
              slidesPerView: 3, // For desktop devices (width > 1024px)
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000, // Time in milliseconds between slide transitions
            disableOnInteraction: false, // Keeps autoplay running even after user interaction
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProfileCard
              imageSrc="./team/1.jpg"
              title="CTO"
              name="Bakhtiyorjon"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProfileCard
              imageSrc="./team/1.jpg"
              title="CTO"
              name="Bakhtiyorjon"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProfileCard
              imageSrc="./team/1.jpg"
              title="CTO"
              name="Bakhtiyorjon"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProfileCard
              imageSrc="./team/1.jpg"
              title="CTO"
              name="Bakhtiyorjon"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProfileCard
              imageSrc="./team/1.jpg"
              title="CTO"
              name="Bakhtiyorjon"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </SectionContainer>
  );
}
