import { isEqual } from '../tools';

export function setObjectPrototype() {
    Object.prototype.isEqual = isEqual;
}
