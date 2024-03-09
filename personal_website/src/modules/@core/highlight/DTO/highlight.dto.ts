export interface IHighlightDTO {
  identifier: string;
  position?: number;
  lang?: 'en' | 'pt-br';
  title: string;
  numbers: number;
  k: boolean;
  description?: string;
}
