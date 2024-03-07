export class Email {
  constructor(
    protected readonly _to: string,
    protected readonly _from: string,
    protected readonly _message: string,
  ) {}

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
