import { Container } from 'inversify';
import { SANITY_CMS_GATEWAY_REGISTRY } from './sanity.registry';
import { SanityOccupationGateway } from './occupation/occupation.gateway';
import { SanityAssemblerGateway } from './assembler/assembler.gateway';
import { SanityPersonGateway } from './person/person.gateway';
import { SanityHighlightGateway } from './highlight/highlight.gateway';
import { SanityTechGateway } from './tech/tech.gateway';
import { SanityProjectGateway } from './project/project.gateway';
import { SanityPlatformGateway } from './platform/platform.gateway';
import { SanityArticleGateway } from './article/article.gateway';
import { SanityCompanyGateway } from './company/company.gateway';
import { SanityExperienceGateway } from './experience/experience.gateway';

export const SANITY_CMS_GATEWAY_MODULE = new Container({
  defaultScope: 'Singleton',
});

SANITY_CMS_GATEWAY_MODULE.bind(SANITY_CMS_GATEWAY_REGISTRY.OCCUPATION).to(
  SanityOccupationGateway,
);

SANITY_CMS_GATEWAY_MODULE.bind(SANITY_CMS_GATEWAY_REGISTRY.ASSEMBLER).to(
  SanityAssemblerGateway,
);

SANITY_CMS_GATEWAY_MODULE.bind(SANITY_CMS_GATEWAY_REGISTRY.PERSON).to(
  SanityPersonGateway,
);
SANITY_CMS_GATEWAY_MODULE.bind(SANITY_CMS_GATEWAY_REGISTRY.HIGHLIGHT).to(
  SanityHighlightGateway,
);
SANITY_CMS_GATEWAY_MODULE.bind(SANITY_CMS_GATEWAY_REGISTRY.TECH).to(
  SanityTechGateway,
);
SANITY_CMS_GATEWAY_MODULE.bind(SANITY_CMS_GATEWAY_REGISTRY.PROJECT).to(
  SanityProjectGateway,
);
SANITY_CMS_GATEWAY_MODULE.bind(SANITY_CMS_GATEWAY_REGISTRY.PLATFORM).to(
  SanityPlatformGateway,
);
SANITY_CMS_GATEWAY_MODULE.bind(SANITY_CMS_GATEWAY_REGISTRY.ARTICLE).to(
  SanityArticleGateway,
);
SANITY_CMS_GATEWAY_MODULE.bind(SANITY_CMS_GATEWAY_REGISTRY.COMPANY).to(
  SanityCompanyGateway,
);
SANITY_CMS_GATEWAY_MODULE.bind(SANITY_CMS_GATEWAY_REGISTRY.EXPERIENCE).to(
  SanityExperienceGateway,
);
