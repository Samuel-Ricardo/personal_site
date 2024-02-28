import { IOccupationGateway } from '@/modules/@core/occupations/gateway/occupation.gateway';
import { SANITY_CMS_GATEWAY_MODULE } from './sanity.module';
import { SANITY_CMS_GATEWAY_REGISTRY } from './sanity.registry';
import { IAssemblerGateway } from '@/modules/@core/assembler/gateway/assembler.gateway';
import { IPersonGateway } from '@/modules/@core/person/gateway/person.gateway';
import { IHighlightGateway } from '@/modules/@core/highlight/gateway/highlight.gateway';
import { SanityTechGateway } from './tech/tech.gateway';
import { IPlatformGateway } from '@/modules/@core/platforms/gateway/platform.gateway';
import { IArticleGateway } from '@/modules/@core/articles/gateway/article.gateway';
import { ICompanyGateway } from '@/modules/@core/company/gateway/company.gateway';

export const SANITY_CMS_GATEWAY_FACTORY = {
  COMPANY: () =>
    SANITY_CMS_GATEWAY_MODULE.get<ICompanyGateway>(
      SANITY_CMS_GATEWAY_REGISTRY.COMPANY,
    ),

  PERSON: () =>
    SANITY_CMS_GATEWAY_MODULE.get<IPersonGateway>(
      SANITY_CMS_GATEWAY_REGISTRY.PERSON,
    ),
  OCCUPATION: () =>
    SANITY_CMS_GATEWAY_MODULE.get<IOccupationGateway>(
      SANITY_CMS_GATEWAY_REGISTRY.OCCUPATION,
    ),
  ASSEMBELER: () =>
    SANITY_CMS_GATEWAY_MODULE.get<IAssemblerGateway>(
      SANITY_CMS_GATEWAY_REGISTRY.ASSEMBLER,
    ),
  HIGHLIGHT: () =>
    SANITY_CMS_GATEWAY_MODULE.get<IHighlightGateway>(
      SANITY_CMS_GATEWAY_REGISTRY.HIGHLIGHT,
    ),
  TECH: () =>
    SANITY_CMS_GATEWAY_MODULE.get<SanityTechGateway>(
      SANITY_CMS_GATEWAY_REGISTRY.TECH,
    ),
  PLATFORM: () =>
    SANITY_CMS_GATEWAY_MODULE.get<IPlatformGateway>(
      SANITY_CMS_GATEWAY_REGISTRY.PLATFORM,
    ),
  ARTICLE: () =>
    SANITY_CMS_GATEWAY_MODULE.get<IArticleGateway>(
      SANITY_CMS_GATEWAY_REGISTRY.ARTICLE,
    ),
};
