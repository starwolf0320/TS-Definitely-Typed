// Type definitions for ngCordova emailComposer plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Kapil Sachdeva <https://github.com/ksachdeva>
// Definitions: https://github.com/ksachdeva/DefinitelyTyped

/// <reference types="angular" />

declare namespace ngCordova {

  export interface IEmailComposerOptions {
        to: string | string[];
        cc?: string | string[];
        bcc?: string | string[];
        attachments?: any[];
        subject?: string;
        body?: string;
        isHtml?: boolean;
    }

  export interface IEmailComposerService {

    isAvailable(): ng.IPromise<boolean>;
    open(properties: IEmailComposerOptions): ng.IPromise<any>;
    addAlias(app: string, schema: string): void;

  }

}
