import { inject, injectable } from 'inversify';
import { type ITestimonialService } from '../service/service.interface';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class TestimonialController implements ITestimonialModule {
  constructor(
    @inject(MODULE.TESTIMONIAL.SERVICE.MAIN)
    protected readonly service: ITestimonialService,
  ) {}
}
