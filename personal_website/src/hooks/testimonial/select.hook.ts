import { ISelectedTestimonialState } from '@/@types/hooks/testimonial/selected';
import { create } from 'zustand';

export const useSelectedTestimonial = create<ISelectedTestimonialState>(set => {
  return {
    selected: undefined,
    setSelected: selected => {
      selected.ref.current?.scrollIntoView({
        behavior: 'smooth',
      });

      set({ selected });
    },
  };
});
