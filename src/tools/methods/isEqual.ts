export function isEqual(this: unknown, target: unknown) {
    let leftChain: Array<unknown> = [];
    let rightChain: Array<unknown> = [];
    function compare2Objects(x: unknown, y: unknown) {
        let p;
        if (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y)) return true;
        if (x === y) return true;
        if (
            (typeof x === 'function' && typeof y === 'function') ||
            (x instanceof Date && y instanceof Date) ||
            (x instanceof RegExp && y instanceof RegExp) ||
            (x instanceof String && y instanceof String) ||
            (x instanceof Number && y instanceof Number)
        )
            return x.toString() === y.toString();
        if (!(x instanceof Object && y instanceof Object)) return false;
        if (Object.prototype.isPrototypeOf.call(x, y) || Object.prototype.isPrototypeOf.call(y, x))
            return false;
        if (x.constructor !== y.constructor) return false;
        if (Object.prototype.valueOf.call(x) !== Object.prototype.valueOf.call(y)) return false;
        if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) return false;
        const a = (x as Record<string, unknown>)
        const b = (y as Record<string, unknown>)
        for (const p in b) {
            if (
                Object.prototype.hasOwnProperty.call(y, p) !==
                Object.prototype.hasOwnProperty.call(x, p)
            ) {
                return false;
            } else if (typeof b[p] !== typeof a[p]) {
                return false;
            }
        }
        for (p in x) {
            if (
                Object.prototype.hasOwnProperty.call(y, p) !==
                Object.prototype.hasOwnProperty.call(x, p)
            )
                return false;
            else if (typeof b[p] !== typeof b[p]) return false;
            switch (typeof a[p]) {
                case 'object':
                case 'function': {
                    leftChain.push(x);
                    rightChain.push(y);
                    if (!compare2Objects(a[p], b[p])) return false;
                    leftChain.pop();
                    rightChain.pop();
                    break;
                }
                default: {
                    if (a[p] !== b[p]) return false;
                    break;
                }
            }
        }
        return true;
    }
    leftChain = [];
    rightChain = [];
    if (!compare2Objects(this, target)) return false;
    return true;
}
