import { ITestimonialDTO } from '@/modules/@core/testimonial/DTO/testimonial.dto';

export class GlobalTestimonial {
  private static _selected: ITestimonialDTO | undefined = undefined;

  static get selected(): ITestimonialDTO | undefined {
    return this._selected;
  }

  static set selected(data: ITestimonialDTO | undefined) {
    this._selected = data;
  }
}
