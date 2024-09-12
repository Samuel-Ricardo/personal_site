'use client';
import './item.style.scss';

import { SwiperSlide } from 'swiper/react';

export const SliderItem = ({ children }: any) => {
  return <SwiperSlide>{children}</SwiperSlide>;
};
