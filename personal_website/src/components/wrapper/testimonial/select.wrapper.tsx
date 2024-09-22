'use client';

import { ISelectedTestimonyWrapperProps } from '@/@types/props/wrapper/tesimony/selected';
import { MotionDiv } from '@/components/motion/div.component';
import { useSelectedTestimonial } from '@/hooks/testimonial/select.hook';
import { useEffect, useRef } from 'react';

export const SelectTestimonialWrapper = ({
  data,
  children,
  className,
  animation,
}: ISelectedTestimonyWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { setSelected } = useSelectedTestimonial();

  useEffect(() => {
    if (ref.current) ref.current.onclick = event => setSelected({ data, ref });
    //    if (ref.current) ref.current.onclick = event => selectTestimonial(data);
  }, [ref, data, setSelected]);

  if (animation)
    return (
      <MotionDiv {...animation} ref={ref} className={className}>
        {children}
      </MotionDiv>
    );

  return (
    <div
      ref={ref}
      className={className}
      onClick={() => setSelected({ data, ref })}
    >
      {children}
    </div>
  );
};
