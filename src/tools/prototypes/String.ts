import { isEqual } from '..';

export function setStringPrototype() {
    String.prototype.isEqual = isEqual;
}
