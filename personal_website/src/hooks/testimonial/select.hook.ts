import { ISelectedTestimonialState } from '@/@types/hooks/testimonial/selected';
import { create } from 'zustand';

export const useSelectedTestimonial = create<ISelectedTestimonialState>(set => {
  return {
    selected: 0,
    setSelected: (selected: number) => set({ selected }),
  };
});
