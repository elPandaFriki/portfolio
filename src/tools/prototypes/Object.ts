import { isEqual } from '..';

export function setObjectPrototype() {
    Object.prototype.isEqual = isEqual;
}
