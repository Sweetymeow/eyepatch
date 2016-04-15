import {IEventHandlerT} from './iEventHandlerT';
import {IConditionT} from './iConditionT';

export interface IConditionalEventT<T> {
  on(eventHandler: IEventHandlerT<T>, condition?: IConditionT<T>): void;
  off(eventHandler: IEventHandlerT<T>, condition?: IConditionT<T>): void;
}
