'use client';
import './slider.style.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'; // Import the fade effect styles

import {
  Navigation,
  Pagination,
  //  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Slider = ({ children }: any) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      effect="fade"
      fadeEffect={{ crossFade: true }}
    >
      {children.map((child: any) => (
        <SwiperSlide key={child?.toString()}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};
