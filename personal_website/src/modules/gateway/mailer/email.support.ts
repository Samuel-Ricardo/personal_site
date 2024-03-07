import { type Environment } from '@/@types/module/config/env';
import { type EmailJS } from '@/@types/module/engine/mailer/emailjs';
import { MODULE } from '@/modules/app.registry';
import { inject, injectable } from 'inversify';

@injectable()
export abstract class EmailJSSupport {
  constructor(
    @inject(MODULE.ENGINE.MAILER.EMAILJS)
    protected readonly client: EmailJS,
    @inject(MODULE.CONFIG.ENV)
    protected readonly ENV: Environment,
  ) {}
}
