import { inject, injectable } from 'inversify';
import { type ITestimonialService } from '../service/service.interface';
import { MODULE } from '@/modules/app.registry';
import { ITestimonialModule } from '../testimonial.interface';
import { Testimonial } from '../entity/testimonial.entity';

@injectable()
export class TestimonialController implements ITestimonialModule {
  constructor(
    @inject(MODULE.TESTIMONIAL.SERVICE.MAIN)
    protected readonly service: ITestimonialService,
  ) {}
  findAll(): Promise<Testimonial[]> {
    return this.service.findAll();
  }
}
