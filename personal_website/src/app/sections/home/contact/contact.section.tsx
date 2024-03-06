import { ContactBackground } from '@/assets/images/background/contact/contact.background';
import './contact.style.scss';
import { MotionH1 } from '@/components/motion/h1.component';
import { MODULES } from '@/modules/app.factory';

export const Contact = async () => {
  const { title } = await MODULES.ASSEMBLER.MAIN().assembleContact();

  return (
    <section id="contact-section">
      <ContactBackground />
      <MotionH1>{await title}</MotionH1>
    </section>
  );
};
