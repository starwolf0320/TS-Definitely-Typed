// Type definitions for bootstrap.timepicker
// Project: https://github.com/jdewit/bootstrap-timepicker
// Definitions by: derikwhittaker <https://github.com/derikwhittaker/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery"/>

interface TimepickerOptions {
    defaultTime?: string;
    disableFocus?: boolean;
    isOpen?: boolean;
    minuteStep?: number;
    modalBackdrop?: boolean;
    secondStep?: number;
    showSeconds?: boolean;
    showInputs?: boolean;
    showMeridian?: boolean;
    template?: string;
    appendWidgetTo?: string;
}

interface JQuery {
    timepicker(methodName?: string, params?: any): JQuery;
    timepicker(options: TimepickerOptions): JQuery;
}
