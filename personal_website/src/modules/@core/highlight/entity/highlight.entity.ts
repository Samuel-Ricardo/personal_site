import { injectable } from 'inversify';

@injectable()
export class Highlight {
  constructor(
    protected readonly identifier: string,
    protected readonly title: string,
    protected readonly numbers: number,
    protected readonly k: number,
    protected readonly position?: number,
    protected readonly description?: string,
  ) {}
}
