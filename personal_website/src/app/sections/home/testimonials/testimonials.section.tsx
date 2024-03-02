import { TestimonialsBackground } from '@/assets/images/background/testimonials/testimonials.background';
import './testimonials.style.scss';
import { Slider } from '@/components/carousel/horizontal/static/static.carousel';
import { SocialCard } from '@/components/card/social/social.card';
import { TestimonyCard } from '@/components/card/testimony/testimony.card';
import { MODULES } from '@/modules/app.factory';

export const Testimonials = async () => {
  const { testimonials, title } =
    await MODULES.ASSEMBLER.MAIN().assembbleTestimonials();
  return (
    <section id="testimonials-section" className="section">
      <TestimonialsBackground />
      <div className="content">
        <h1>{await title}</h1>

        <Slider>
          {(await testimonials).map(t => (
            <SocialCard key={t.portfolio} data={t.toDTO()} />
          ))}
        </Slider>

        <TestimonyCard data={(await testimonials)[0].toDTO()} />
      </div>
    </section>
  );
};
