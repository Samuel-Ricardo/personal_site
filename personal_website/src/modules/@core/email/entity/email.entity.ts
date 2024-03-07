export class Email {
  constructor(
    protected readonly _to: string,
    protected readonly _from: string,
    protected readonly _message: string,
  ) {}
}
