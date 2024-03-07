import { injectable } from 'inversify';
import { EmailJSSupport } from '../email.support';
import { IEmailGateway } from '@/modules/@core/email/gateway/email.gateway';
import { Email } from '@/modules/@core/email/entity/email.entity';
import { ISendEmailDTO } from '@/modules/@core/email/DTO/send/email.dto';

@injectable()
export class EmailJSGateway extends EmailJSSupport implements IEmailGateway {}
