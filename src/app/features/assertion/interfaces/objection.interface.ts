import { Evidence } from './evidence.interface';

export interface Objection {
  sustained: boolean;
  reason: string;
  evidenceSet: Evidence[];
}
