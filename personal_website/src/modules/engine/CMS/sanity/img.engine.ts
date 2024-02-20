import { MODULE } from '@/modules/app.registry';
import { interfaces } from 'inversify';
import { SanityClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const SANITY_IMAGE_BUILDER = ({ container }: interfaces.Context) => {
  const SANITY = container.get<SanityClient>(MODULE.ENGINE.CMS.SANITY);
  return imageUrlBuilder(SANITY);
};
