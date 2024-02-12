import { TestimonialsBackground } from '@/images/background/testimonials/testimonials.background';
import './testimonials.style.scss';
import { StaticCarousel } from '@/components/carousel/horizontal/static/static.carousel';
import { SocialCard } from '@/components/card/social/social.card';

export const Testimonials = () => {
  return (
    <section id="testimonials-section">
      <TestimonialsBackground />
      <div className="content">
        <h1>Testimonials</h1>

        <StaticCarousel>
          <SocialCard />
          <SocialCard />
          <SocialCard />
        </StaticCarousel>
      </div>
    </section>
  );
};
