import { getFirstTestimonial } from '@/actions/get/testimonial/first.action';
import { ITestimonialDTO } from '@/modules/@core/testimonial/DTO/testimonial.dto';
import { useEffect, useState } from 'react';

export const useFirstTestimonial = () => {
  const [data, setData] = useState<ITestimonialDTO | undefined>(undefined);

  useEffect(() => {
    getFirstTestimonial().then(setData);
  }, [setData]);

  return { data };
};
