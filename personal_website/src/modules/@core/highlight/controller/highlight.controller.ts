import { inject, injectable } from 'inversify';
import { type IHighlightService } from '../service/service.interface';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class HighlightController {
  constructor(
    @inject(MODULE.HIGHLIGHT.SERVICE.MAIN)
    protected readonly service: IHighlightService,
  ) {}
}
