import { isEqual } from '../tools';

export function setBooleanPrototype() {
    Boolean.prototype.isEqual = isEqual;
}
