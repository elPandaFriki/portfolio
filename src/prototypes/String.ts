import { isEqual } from '../tools';

export function setStringPrototype() {
    String.prototype.isEqual = isEqual;
}
