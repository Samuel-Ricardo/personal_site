import { MODULE } from '@/modules/app.registry';
import { inject, injectable } from 'inversify';
import { type SanityClient } from 'next-sanity';
import { type ImageUrlBuilder } from 'sanity';

@injectable()
export abstract class SanitySupport {
  constructor(
    @inject(MODULE.ENGINE.CMS.SANITY)
    protected readonly client: SanityClient,
    @inject(MODULE.ENGINE.CMS.BUILDER.IMAGE)
    protected readonly imageBuilder: ImageUrlBuilder,
  ) {}
}
