import { Evidence } from './evidence.interface';

export interface Assertion {
  text: string;
  evidenceSet: Evidence[];
}
