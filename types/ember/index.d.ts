declare module 'ember' {
    export type GlobalArray<T> = T[];

    export type ComputedProperties<T> = { [K in keyof T]: any };

    export type EmberClassConstructor<T> = (new () => T) & (new (...args: any[]) => T);

    export interface ArrayProxy<T> {}
    export class CoreObject {
        static create<Instance, Args, T1>(
            this: EmberClassConstructor<Instance>,
            arg1: T1 & ThisType<T1 & Instance>
        ): Instance & T1;

        static extend<Statics, Instance, T1>(
            this: Statics & EmberClassConstructor<Instance>,
            arg1: T1 & ThisType<Instance & T1>
        ): Statics & EmberClassConstructor<T1 & Instance>;
    }
    export interface NativeArray<T> extends GlobalArray<T> {}
    export class ArrayProxy<T> extends CoreObject {
        m(): T;
    }
}
