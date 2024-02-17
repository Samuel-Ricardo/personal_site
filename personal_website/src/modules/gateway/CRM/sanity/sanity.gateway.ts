import { MODULE } from '@/modules/app.registry';
import { inject, injectable } from 'inversify';
import { type SanityClient } from 'next-sanity';

@injectable()
export abstract class SanitySupport {
  constructor(
    @inject(MODULE.ENGINE.CRM.SANITY)
    protected readonly client: SanityClient,
  ) {}
}
