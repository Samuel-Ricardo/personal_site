export interface IHighlightDTO {
  identifier?: string;
  lang?: 'en' | 'pt-br';
  title: string;
  numbers: number;
  k: boolean;
  description?: string;
}
