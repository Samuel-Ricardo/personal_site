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

  static fromDTO(dto: Email) {
    return new Email(dto.text, dto.status);
  }

  get text() {
    return this._text;
  }

  get status() {
    return this._status;
  }
}
