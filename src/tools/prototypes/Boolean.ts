import { isEqual } from '..';

export function setBooleanPrototype() {
    Boolean.prototype.isEqual = isEqual;
}
