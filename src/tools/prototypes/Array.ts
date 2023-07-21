import { isEqual } from '..';

export function setArrayPrototype() {
    Array.prototype.isEqual = isEqual;
}
