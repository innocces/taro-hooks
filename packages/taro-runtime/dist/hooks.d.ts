import type {
  IHooks,
  OnRemoveAttribute,
  GetLifecycle,
  GetPathIndex,
  GetEventCenter,
  IsBubbleEvents,
  GetSpecialNodes,
  BatchedEventUpdates,
  MergePageInstance,
  CreatePullDownComponent,
  GetDOMNode,
  InitNativeApi,
  ModifySetAttrPayload,
  ModifyHydrateData,
  ModifyRmAttrPayload,
  MpEvent,
  OnAddEvent,
} from './interface';
import type { TaroElement } from './dom/element';
import type { TaroEvent } from './dom/event';
export declare class Hooks implements IHooks {
  getLifecycle: GetLifecycle;
  getPathIndex: GetPathIndex;
  getEventCenter: GetEventCenter;
  isBubbleEvents: IsBubbleEvents;
  getSpecialNodes: GetSpecialNodes;
  onRemoveAttribute?: OnRemoveAttribute;
  batchedEventUpdates?: BatchedEventUpdates;
  mergePageInstance?: MergePageInstance;
  createPullDownComponent?: CreatePullDownComponent;
  getDOMNode?: GetDOMNode;
  modifyHydrateData?: ModifyHydrateData;
  modifySetAttrPayload?: ModifySetAttrPayload;
  modifyRmAttrPayload?: ModifyRmAttrPayload;
  onAddEvent?: OnAddEvent;
  private modifyMpEventImpls?;
  modifyMpEvent(e: MpEvent): void;
  private modifyTaroEventImpls?;
  modifyTaroEvent(e: TaroEvent, element: TaroElement): void;
  initNativeApiImpls?: InitNativeApi[];
  initNativeApi(taro: Record<string, any>): void;
}
