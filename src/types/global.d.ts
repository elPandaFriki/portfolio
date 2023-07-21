export {};

declare global {
    interface Object {
        isEqual(this: unknown, target: unknown): boolean;
    }
    interface Array<T> {
        isEqual(this: Array<T>, target: unknown): boolean;
    }
    interface String {
        isEqual(this: string, target: unknown): boolean;
    }
    interface Number {
        isEqual(this: number, target: unknown): boolean;
    }
    interface Boolean {
        isEqual(this: boolean, target: unknown): boolean;
    }
    namespace Window {
        //
    }
}
