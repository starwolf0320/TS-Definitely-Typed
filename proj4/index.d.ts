// Type definitions for proj4 2.3.15
// Project: https://github.com/proj4js/proj4js
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "proj4" {
    const TemplateCoordinates: number[] | InterfaceCoordinates;

    interface InterfaceCoordinates {
        x: number;
        y: number;
        z?: number;
        m?: number;
    }

    interface InterfaceDatum {
        datum_type: number;
        a: number;
        b: number;
        es: number;
        ep2: number;
    }

    interface Proj4Static {
        forward(coordinates: typeof TemplateCoordinates): number[];
        inverse(coordinates: typeof TemplateCoordinates): number[];
    }

    interface InterfaceProjection {
        datum: string;
        b: number;
        rf: number;
        sphere: number;
        es: number;
        e: number;
        ep2: number;
        forward(coordinates: typeof TemplateCoordinates): number[];
        inverse(coordinates: typeof TemplateCoordinates): number[];
    }

    namespace proj4 {
        /**
         * @name defaultDatum
         */
        export const defaultDatum: string;

        /**
         * @name Proj
         */
        export function Proj(srsCode: any, callback?: any): InterfaceProjection;

        /**
         * @name WGS84
         */
        export const WGS84: any;

        /**
         * Depecrated v3
         * @name Point
         */
        export function Point(x: number, y: number, z?: number): InterfaceCoordinates;
        export function Point(coordinates: number[]): InterfaceCoordinates;
        export function Point(coordinates: InterfaceCoordinates): InterfaceCoordinates;
        export function Point(coordinates: string): InterfaceCoordinates;

        /**
         * @name toPoint
         */
        export function toPoint(array: number[]): InterfaceCoordinates;

        /**
         * @name defs
         */
        export function defs(name: string): any;
        export function defs(name: string, projection: string): any;
        export function defs(name: string[][]): any;

        /**
         * @name transform
         */
        export function transform(source: InterfaceProjection, dest: InterfaceProjection, point: typeof TemplateCoordinates): any;

        /**
         * @name mgrs
         */
        export function mgrs(coordinates: number[], accuracy: number): string;

        /**
         * @name version
         */
        export const version: string;
    }

    /**
     * @name proj4
     */
    function proj4(fromProjection: string): Proj4Static;
    function proj4(fromProjection: string, toProjection: string): Proj4Static;
    function proj4(fromProjection: string, coordinates: typeof TemplateCoordinates): number[];
    function proj4(fromProjection: string, toProjection: string, coordinates: typeof TemplateCoordinates): number[];
    export = proj4;
}
