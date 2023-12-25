export function isEqual(this: unknown, target: unknown) {
    if (this === target) return true;
    // this verification for primitives (number, string, boolean, etc.)
    if (this == null || target == null || (typeof this !== 'object' && typeof target !== 'object'))
        return this === target;
    // deep object/array comparison
    // keep shallow copy of comparator
    const remainder = {
        ...target
    };
    for (const key in this) {
        if (this[key].isEqual(target[key])) {
            // remove properties from shallow copy to keep track of verified children
            delete remainder[key];
            continue;
        }
        // if one property of comparator is not equal to itself on the original
        return false;
    }
    // check if comparator has the same properties than original
    return Object.entries(remainder).length === 0;
}
