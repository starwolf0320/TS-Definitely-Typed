// Type definitions for gulp-watch v4.1.1
// Project: https://github.com/floatdrop/gulp-watch
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


interface IOptions {
    ignoreInitial?: boolean;
    events?: string[];
    base?: string;
    name?: string;
    verbose?: boolean;
    readDelay?: number;
}

interface IWatchStream extends NodeJS.ReadWriteStream {
    add(path: string | string[]): NodeJS.ReadWriteStream;
    unwatch(path: string | string[]): NodeJS.ReadWriteStream;
    close(): NodeJS.ReadWriteStream;
}

declare function watch(glob: string | string[], options?: IOptions, callback?: Function): IWatchStream;
declare namespace watch { }
export = watch;
