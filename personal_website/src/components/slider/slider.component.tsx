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
import { SliderItem } from './item/item.component';

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
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
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
        <SliderItem key={child?.toString()}>{child}</SliderItem>
      ))}
    </Swiper>
  );
};
