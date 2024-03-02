import { TestimonialsBackground } from '@/assets/images/background/testimonials/testimonials.background';
import './testimonials.style.scss';
import { StaticCarousel } from '@/components/carousel/horizontal/static/static.carousel';
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

        <StaticCarousel>
          <SocialCard />
          <SocialCard />
          <SocialCard />
        </StaticCarousel>

        <TestimonyCard />
      </div>
    </section>
  );
};
