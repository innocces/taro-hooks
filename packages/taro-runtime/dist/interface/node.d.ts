import { HydratedData } from './index';
export declare type UpdatePayloadValue = string | boolean | HydratedData;
export declare type DataTree = Record<
  string,
  UpdatePayloadValue | ReturnType<HydratedData>
>;
export interface UpdatePayload {
  path: string;
  value: UpdatePayloadValue;
}
