import { IEventT } from '../events/interfaces/iEvent';
import { IItemsChangedEventArgs } from './interfaces/iItemsChangedEventArgs';
import { IKeyValue } from './interfaces/iKeyValue';
import { IObservableDictionary } from './interfaces/iObservableDictionary';
export declare class ObservableDictionary<TKey, TValue> implements IObservableDictionary<TKey, TValue> {
    private static _observableDictionaryId;
    private _dictionaryId;
    private _lastKeyId;
    private _keyIdPropertyName;
    private _keyIdsToKeysMap;
    private _keyIdsToValuesMap;
    private _size;
    private _itemsChanged;
    constructor();
    readonly keys: TKey[];
    readonly values: TValue[];
    readonly size: number;
    readonly itemsChanged: IEventT<IItemsChangedEventArgs<IKeyValue<TKey, TValue>>>;
    add(key: TKey, value: TValue): void;
    remove(key: TKey): void;
    containsKey(key: TKey): boolean;
    containsValue(value: TValue): boolean;
    getValueByKey(key: TKey): TValue;
    clear(): void;
    private _getNewObservabledDictionaryId();
    private _getNewKeyId();
    private _createKeyIdPropertyNameForCurrentDictionary();
    private _addNewKeyValuePair(key, value);
    private _overrideExistingKeyValuePair(key, value);
    private _addNewKeyValuePairWithoutRaisingEvent(key, value);
    private _removeWithoutRaisingEventAndReturnRemovedValue(key);
    private _raiseItemsChanged(added, removed);
    private _getAllKeyValuePairs();
    private _defineKeyId(key);
    private _getKeyIdFromKey(key);
    private _removeIdFromKey(key);
    private _removeKeyFromMap(keyId);
    private _removeValueFromValues(keyId);
    private _resetDictionary();
}
