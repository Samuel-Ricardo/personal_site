import { inject, injectable } from 'inversify';
import { ITestimonialService } from './service.interface';
import { FindAllTestimonialUseCase } from '../use_case/find/all.use_case';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class TestimonialService implements ITestimonialService {
  constructor(
    @inject(MODULE.TESTIMONIAL.USE_CASE.FIND.ALL)
    protected readonly _findAll: FindAllTestimonialUseCase,
  ) {}
}
