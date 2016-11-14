// Type definitions for BigInteger.js
// Project: https://github.com/peterolson/BigInteger.js
// Definitions by: Ingo Bürk <https://github.com/Airblader>, Roel van Uden <https://github.com/Deathspike>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface BigInteger {
    /** Returns the absolute value of a bigInt. */
    abs(): BigInteger;

    /** Performs addition */
    add( number: number | BigInteger | string ): BigInteger;

    /** Alias for the add method. */
    plus( number: number | BigInteger | string ): BigInteger;

    /** Alias for the subtract method. */
    minus( number: number | BigInteger | string ): BigInteger;

    /** Performs subtraction. */
    subtract( number: number | BigInteger | string ): BigInteger;

    /** Performs multiplication. */
    multiply( number: number | BigInteger | string ): BigInteger;

    /** Alias for the multiply method. */
    times( number: number | BigInteger | string ): BigInteger;

    /** Performs integer division, disregarding the remainder. */
    divide( number: number | BigInteger | string ): BigInteger;

    /** Alias for the divide method. */
    over( number: number | BigInteger | string ): BigInteger;

    /** Performs exponentiation. If the exponent is less than 0, pow returns 0. bigInt.zero.pow(0) returns 1. */
    pow( number: number | BigInteger | string ): BigInteger;

    /** Adds one to the number. */
    next(): BigInteger;

    /** Subtracts one from the number. */
    prev(): BigInteger;

    /** Performs division and returns the remainder, disregarding the quotient. The sign of the remainder will match the sign of the dividend. */
    mod( number: number | BigInteger | string ): BigInteger;

    /** Performs division and returns an object with two properties: quotient and remainder. The sign of the remainder will match the sign of the dividend. */
    divmod( number: number | BigInteger | string ): { quotient: BigInteger; remainder: BigInteger };

    /** Checks if the first number is greater than the second. */
    greater( number: number | BigInteger | string ): boolean;

    /** Checks if the first number is greater than or equal to the second. */
    greaterOrEquals( number: number | BigInteger | string ): boolean;

    /** Checks if the first number is lesser than the second. */
    lesser( number: number | BigInteger | string ): boolean;

    /** Checks if the first number is less than or equal to the second. */
    lesserOrEquals( number: number | BigInteger | string ): boolean;

    /** Returns true if the number is even, false otherwise. */
    isEven(): boolean;

    /** Returns true if the number is odd, false otherwise. */
    isOdd(): boolean;

    /** Return true if the number is positive, false otherwise. Returns true for 0 and false for -0. */
    isPositive(): boolean;

    /** Returns true if the number is negative, false otherwise. Returns false for 0 and true for -0. */
    isNegative(): boolean;

    /**
     * Performs a comparison between two numbers. If the numbers are equal, it returns 0.
     * If the first number is greater, it returns 1. If the first number is lesser, it returns -1.
     */
    compare( number: number | BigInteger | string ): number;

    /** Performs a comparison between the absolute value of two numbers. */
    compareAbs( number: number | BigInteger | string ): number;

    /** Checks if two numbers are equal. */
    equals( number: number | BigInteger | string ): boolean;

    /** Checks if two numbers are not equal. */
    notEquals( number: number | BigInteger | string ): boolean;

    /** Performs the bitwise AND operation. */
    and( number: number | BigInteger | string ): BigInteger;

    /** Performs the bitwise NOT operation. */
    not(): BigInteger;

    /** Performs the bitwise OR operation. */
    or( number: number | BigInteger | string ): BigInteger;

    /** Performs the bitwise XOR operation. */
    xor( number: number | BigInteger | string ): BigInteger;

    /** Converts a bigInt into a native Javascript number. Loses precision for numbers outside the range. */
    toJSNumber(): number;

    /** Converts a bigInt to a string. */
    toString(): string;

    /** Converts a bigInt to a native Javascript number. This override allows you to use native arithmetic operators without explicit conversion. */
    valueOf(): number;
}

interface BigIntegerStatic {
    /** Equivalent to bigInt(1) */
    one: BigInteger;
    /** Equivalent to bigInt(0) */
    zero: BigInteger;
    /** Equivalent to bigInt(-1) */
    minusOne: BigInteger;

    /** Equivalent to bigInt(0) */
    (): BigInteger;
    /** Parse a Javascript number into a bigInt */
    ( number: number ): BigInteger;
    /** Parse a string into a bigInt */
    ( string: string,  base?: string | number | BigInteger): BigInteger;
    /** no-op */
    ( bigInt: BigInteger ): BigInteger;
}

declare var bigInt: BigIntegerStatic;

declare module "big-integer" {
    export = bigInt;
}
