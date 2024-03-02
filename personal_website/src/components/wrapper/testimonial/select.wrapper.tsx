'use client';

import { ISelectedTestimonyWrapperProps } from '@/@types/props/wrapper/tesimony/selected';
import { useSelectedTestimonial } from '@/hooks/testimonial/select.hook';
import { useEffect, useRef } from 'react';

export const SelectTestimonialWrapper = ({
  data,
  children,
  className,
}: ISelectedTestimonyWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { setSelected } = useSelectedTestimonial();

  useEffect(() => {
    if (ref.current) ref.current.onclick = event => setSelected(data);
  }, [ref, data, setSelected]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
