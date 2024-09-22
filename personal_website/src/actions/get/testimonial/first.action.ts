'use server';

import { ITestimonialDTO } from '@/modules/@core/testimonial/DTO/testimonial.dto';
import { MODULES } from '@/modules/app.factory';

export const getFirstTestimonial = async (): Promise<ITestimonialDTO> => {
  const { testimonials } =
    await MODULES.ASSEMBLER.MAIN().assembbleTestimonials();

  return (await testimonials)[0].toDTO();
};
