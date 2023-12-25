import { isEqual } from '../tools';

export function setNumberPrototype() {
    Number.prototype.isEqual = isEqual;
}
