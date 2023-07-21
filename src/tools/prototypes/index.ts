import { setArrayPrototype } from './Array';
import { setBooleanPrototype } from './Boolean';
import { setNumberPrototype } from './Number';
import { setObjectPrototype } from './Object';
import { setStringPrototype } from './String';

export function setPrototypes() {
    setObjectPrototype();
    setNumberPrototype();
    setArrayPrototype();
    setStringPrototype();
    setBooleanPrototype();
}
