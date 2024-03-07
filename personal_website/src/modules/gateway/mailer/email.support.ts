import { EmailJS } from '@/@types/module/engine/mailer/emailjs';
import { MODULE } from '@/modules/app.registry';
import { inject, injectable } from 'inversify';

@injectable()
export abstract class EmailJSSupport {
  constructor(
    @inject(MODULE.ENGINE.MAILER.EMAILJS)
    private readonly client: EmailJS,
  ) {}
}
