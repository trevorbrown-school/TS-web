
export class Attributes<T> {
    
    constructor(private data: T) { }
    /*
    get<K extends keyof T>
    This part sets up the type k which is defined as any of the KEYS on the OBJECT T.

    (key: K)
    The parameter is the key we want to retrieve from the object T. K is restricted to be a string where the value can only be 
    any of the keys defined on object T.

    : T[K]
    The method returns an object lookup.
    <code>
        const colors = {};
        colors['red'] = "red";

        colors['red']; // "red"
    </code>


    This same structure can be useful in redux but how could such a thing be implemented?
    */

    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }

    set(update: T): void {
        Object.assign(this.data, update);
    }

    getAll(): T {
        return this.data;
    }
}