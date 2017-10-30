// Type definitions for Ember.js 2.8
// Project: http://emberjs.com/
// Definitions by: Jed Mao <https://github.com/jedmao>
//                 bttf <https://github.com/bttf>
//                 Derek Wickern <https://github.com/dwickern>
//                 Chris Krycho <https://github.com/chriskrycho>
//                 Theron Cross <https://github.com/theroncross>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare module 'ember' {
    // Get an alias to the global Array type to use in inner scope below.
    type GlobalArray<T> = T[];

    /**
     * Deconstructs computed properties into the types which would be returned by `.get()`.
     */
    type ComputedProperties<T> = { [K in keyof T]: any };

    /**
     * Map type `T` to a plain object hash with the identity mapping.
     *
     * Discards any additional object identity like the ability to `new()` up the class.
     * The `new()` capability is added back later by merging `EmberClassConstructor<T>`
     *
     * Implementation is carefully chosen for the reasons described in
     * https://github.com/typed-ember/ember-typings/pull/29
     */
    type Objectify<T> = Readonly<T>;

    type Fix<T> = { [K in keyof T]: T[K] };

    /**
     * Ember.Object.extend(...) accepts any number of mixins or literals.
     */
    type MixinOrLiteral<T, Base> = Ember.Mixin<T, Base> | T;

    type EmberClassConstructor<T> = (new () => T) & (new (...args: any[]) => T);

    export namespace Ember {
        /**
        This module implements Observer-friendly Array-like behavior. This mixin is picked up by the
        Array class as well as other controllers, etc. that want to appear to be arrays.
        **/
        interface Array<T> {
            /**
             * Returns the object at the given `index`. If the given `index` is negative
             * or is greater or equal than the array length, returns `undefined`.
             */
            objectAt(idx: number): T | undefined;
            /**
             * This returns the objects at the specified indexes, using `objectAt`.
             */
            objectsAt(indexes: number[]): Ember.Array<T>;
            /**
             * Returns a new array that is a slice of the receiver. This implementation
             * uses the observable array methods to retrieve the objects for the new
             * slice.
             */
            slice(beginIndex?: number, endIndex?: number): T[];
            /**
             * Returns the index of the given object's first occurrence.
             * If no `startAt` argument is given, the starting location to
             * search is 0. If it's negative, will count backward from
             * the end of the array. Returns -1 if no match is found.
             */
            indexOf(searchElement: T, fromIndex?: number): number;
            /**
             * Returns the index of the given object's last occurrence.
             * If no `startAt` argument is given, the search starts from
             * the last position. If it's negative, will count backward
             * from the end of the array. Returns -1 if no match is found.
             */
            lastIndexOf(searchElement: T, fromIndex?: number): number;
            /**
             * Adds an array observer to the receiving array. The array observer object
             * normally must implement two methods:
             */
            addArrayObserver(target: {}, opts: {}): this;
            /**
             * Removes an array observer from the object if the observer is current
             * registered. Calling this method multiple times with the same object will
             * have no effect.
             */
            removeArrayObserver(target: {}, opts: {}): this;
            /**
             * If you are implementing an object that supports `Ember.Array`, call this
             * method just before the array content changes to notify any observers and
             * invalidate any related properties. Pass the starting index of the change
             * as well as a delta of the amounts to change.
             */
            arrayContentWillChange(startIdx: number, removeAmt: number, addAmt: number): this;
            /**
             * If you are implementing an object that supports `Ember.Array`, call this
             * method just after the array content changes to notify any observers and
             * invalidate any related properties. Pass the starting index of the change
             * as well as a delta of the amounts to change.
             */
            arrayContentDidChange(startIdx: number, removeAmt: number, addAmt: number): this;
        }
        // Ember.Array rather than Array because the `array-type` lint rule doesn't realize the global is shadowed
        const Array: Mixin<Ember.Array<any>>;

        /**
        An ArrayProxy wraps any other object that implements Ember.Array and/or Ember.MutableArray,
        forwarding all requests. This makes it very useful for a number of binding use cases or other cases
        where being able to swap out the underlying array is useful.
        **/
        interface ArrayProxy<T> {}
        /**
        AutoLocation will select the best location option based off browser support with the priority order: history, hash, none.
        **/
        class AutoLocation extends Object {}
        class CoreObject {
            static create<Instance, Args, T1>(
                this: EmberClassConstructor<Instance & ComputedProperties<Args>>,
                arg1: T1 & ThisType<Fix<T1 & Instance>>
            ): Fix<Instance & T1>;

            static extend<Statics, Instance extends B1, T1, B1>(
                this: Statics & EmberClassConstructor<Instance>,
                arg1: MixinOrLiteral<T1, B1> & ThisType<Fix<Instance & T1>>
            ): Objectify<Statics> & EmberClassConstructor<T1 & Instance>;
        }
        /**
         * The `Ember.Mixin` class allows you to create mixins, whose properties can be
         * added to other classes.
         */
        class Mixin<T, Base = Ember.Object> {
            /**
             * Mixin needs to have *something* on its prototype, otherwise it's treated like an empty interface.
             */
            private __ember_mixin__: never;

            static create<T, Base = Ember.Object>(
                args?: T & ThisType<Fix<T & Base>>
            ): Mixin<T, Base>;
        }
        /**
         * The NativeArray mixin contains the properties needed to make the native
         * Array support Ember.MutableArray and all of its dependent APIs. Unless you
         * have `EmberENV.EXTEND_PROTOTYPES` or `EmberENV.EXTEND_PROTOTYPES.Array` set to
         * false, this will be applied automatically. Otherwise you can apply the mixin
         * at anytime by calling `Ember.NativeArray.apply(Array.prototype)`.
         */
        interface NativeArray<T> extends GlobalArray<T> {
            /**
             * __Required.__ You must implement this method to apply this mixin.
             */
            length: number;

            // NOTE: some array polyfill methods are re-declared here because their signatures
            // differ between typescript versions 2.4 and 2.6. Since we need to compile against
            // both, pick the more recent signature and re-declare it here as a tie-breaker.

            /**
             * Returns the first item in the array for which the callback returns true.
             * This method works similar to the `filter()` method defined in JavaScript 1.6
             * except that it will stop working on the array once a match is found.
             */
            find(
                predicate: (value: T, index: number, obj: T[]) => boolean,
                thisArg?: any
            ): T | undefined;
            /**
             * This will combine the values of the enumerator into a single value. It
             * is a useful way to collect a summary value from an enumeration. This
             * corresponds to the `reduce()` method defined in JavaScript 1.8.
             */
            reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
            reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
        }
        const NativeArray: Mixin<NativeArray<any>>;
        class Object extends CoreObject.extend({}) {}
        class ArrayProxy<T> extends Object.extend({}) {
            /**
             * Should actually retrieve the object at the specified index from the
             * content. You can override this method in subclasses to transform the
             * content item to something new.
             */
            objectAtContent(idx: number): T | undefined;
        }

    }

    export default Ember;
}
