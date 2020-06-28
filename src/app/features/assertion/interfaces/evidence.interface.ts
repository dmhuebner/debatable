import { Source } from './source.interface';
import { Objection } from './objection.interface';

export interface Evidence {
  text: string;
  conclusion: string;
  sources: Source[];
  objections?: Objection[];
}
