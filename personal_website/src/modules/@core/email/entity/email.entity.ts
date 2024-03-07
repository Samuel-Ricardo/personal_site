export class Email {
  constructor(
    protected readonly _text: string,
    protected readonly _status: number,
  ) {}

  toDTO() {
    return {
      text: this._text,
      status: this._status,
    };
  }

  get text() {
    return this._text;
  }

  get status() {
    return this._status;
  }
}
