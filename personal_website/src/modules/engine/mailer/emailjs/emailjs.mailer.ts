import { interfaces } from 'inversify';
import emaijs from '@emailjs/browser';
import { Config } from '@/@types/module/config/all';
import { MODULE } from '@/modules/app.registry';

export const SETUP_EMAILJS = ({ container }: interfaces.Context) => {
  const CONFIG = container.get<Config>(MODULE.CONFIG.ALL);
  const EMAILJS = emaijs;

  EMAILJS.init(CONFIG.ENV.MAILER.KEY.PUBLIC);

  return { EMAILJS };
};
