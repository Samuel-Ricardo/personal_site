import { IContactFormProps } from '@/@types/props/section/contact/form';
import './form.style.scss';

import { ContactFormFields } from './fields/fields.component';

export const ContactForm = async ({ title }: IContactFormProps) => {
  return (
    <div className="contact-form-container">
      <ContactFormFields>
        {(await title) || 'Write me a letter 🖋️'}
      </ContactFormFields>
    </div>
  );
};
