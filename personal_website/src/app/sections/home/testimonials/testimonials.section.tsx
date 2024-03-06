import { TestimonialsBackground } from '@/assets/images/background/testimonials/testimonials.background';
import './testimonials.style.scss';
import { Slider } from '@/components/carousel/horizontal/static/static.carousel';
import { SocialCard } from '@/components/card/social/social.card';
import { TestimonyCard } from '@/components/card/testimony/testimony.card';
import { MODULES } from '@/modules/app.factory';
import { MotionH1 } from '@/components/motion/h1.component';

export const Testimonials = async () => {
  const { testimonials, title } =
    await MODULES.ASSEMBLER.MAIN().assembbleTestimonials();

  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.DOWN()();
  return (
    <section id="testimonials-section" className="section">
      <TestimonialsBackground />
      <div className="content">
        <MotionH1 {...animation}>{await title}</MotionH1>

        <Slider>
          {(await testimonials).map((t, i) => (
            <SocialCard index={i} key={t.portfolio} data={t.toDTO()} />
          ))}
        </Slider>

        <TestimonyCard data={(await testimonials)[0].toDTO()} />
      </div>
    </section>
  );
};
