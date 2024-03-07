import { IEmailDTO } from '../DTO/email.dto';

export class Email {
  constructor(
    protected readonly _to: string,
    protected readonly _from: string,
    protected readonly _message: string,
  ) {}

  toDTO(): IEmailDTO {
    return {
      to: this._to,
      from: this._from,
      message: this._message,
    };
  }

  get to(): string {
    return this._to;
  }

  get from(): string {
    return this._from;
  }

  get message(): string {
    return this._message;
  }
}
