import { isEqual } from '../tools';

export function setArrayPrototype() {
    Array.prototype.isEqual = isEqual;
}
