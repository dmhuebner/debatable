import { Objection } from './objection.interface';

export interface Source {
  title: string;
  mediaType: string;
  citations: string[];
  publishedDate: string;
  author?: string;
  link?: string;
  objections?: Objection[];
}
