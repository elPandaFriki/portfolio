import { isEqual } from '..';

export function setNumberPrototype() {
    Number.prototype.isEqual = isEqual;
}
