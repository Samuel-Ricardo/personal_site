import { ContactBackground } from '@/assets/images/background/contact/contact.background';
import './contact.style.scss';
import { MotionH1 } from '@/components/motion/h1.component';
import { MotionH2 } from '@/components/motion/h2.component';
import { MODULES } from '@/modules/app.factory';
import { ContactContent } from '@/components/section/contact/content/content.component';

export const Contact = async () => {
  const { title, subtitle, contacts, paragraph, image, form } =
    await MODULES.ASSEMBLER.MAIN().assembleContact();

  const LEFT = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.IN()({
    animate: 'inactive',
  });
  const RIGHT = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.OUT()();
  const UP = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.UP()();

  return (
    <section id="contact-section">
      <ContactBackground />
      <MotionH1 {...LEFT}>{await title}</MotionH1>
      <MotionH2 {...RIGHT}>{await subtitle}</MotionH2>
      <div className="content-container">
        <ContactContent
          image={image}
          paragraph={paragraph}
          contacts={contacts}
        />
      </div>
    </section>
  );
};
