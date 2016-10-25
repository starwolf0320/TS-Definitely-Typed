// Type definitions for tilebelt 1.0.1
// Project: https://github.com/mapbox/tilebelt
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="geojson" />

declare const tilebelt: tilebelt.TilebeltStatic;
declare namespace tilebelt {
    interface TilebeltStatic {
        /**
         * Get a geojson representation of a tile
         *
         * @name tileToGeoJSON
         * @param {number[]} tile
         * @returns {Feature<Polygon>}
         * @example
         * var poly = tileToGeoJSON([5, 10, 10])
         * //=poly
         */
        tileToGeoJSON(tile: number[]): GeoJSON.Feature<GeoJSON.Polygon>;

        /**
         * Get the bbox of a tile
         *
         * @name tileToBBOX
         * @param {number[]} tile
         * @returns {number[]} bbox
         * @example
         * var bbox = tileToBBOX([5, 10, 10])
         * //=bbox
         */
        tileToBBOX(tile: number[]): number[];

        /**
         * Get the tile for a point at a specified zoom level
         *
         * @name pointToTile
         * @param {number} lon
         * @param {number} lat
         * @param {number} z
         * @returns {number[]} tile
         * @example
         * var tile = pointToTile(1, 1, 20)
         * //=tile
         */
        pointToTile(lon: number, lat: number, z: number): number[];

        /**
         * Get the 4 tiles one zoom level higher
         *
         * @name getChildren
         * @param {number[]} tile
         * @returns {Array<number[]>} tiles
         * @example
         * var tiles = getChildren([5, 10, 10])
         * //=tiles
         */
        getChildren(tile: number[]): Array<number[]>;

        /**
         * Get the tile one zoom level lower
         *
         * @name getParent
         * @param {number[]} tile
         * @returns {number[]} tile
         * @example
         * var tile = getParent([5, 10, 10])
         * //=tile
         */
        getParent(tile: number[]): number[];

        /**
         * Get the 3 sibling tiles for a tile
         *
         * @name getSiblings
         * @param {number[]} tile
         * @returns {Array<number[]>} tiles
         * @example
         * var tiles = getSiblings([5, 10, 10])
         * //=tiles
         */
        getSiblings(tile: number[]): Array<number[]>;

        /**
         * Check to see if an array of tiles contains a tiles siblings
         *
         * @name hasSiblings
         * @param {number[]} tile
         * @param {Array<number[]>} tiles
         * @returns {boolean}
         * @example
         * var tiles = [
         *     [0, 0, 5],
         *     [0, 1, 5],
         *     [1, 1, 5],
         *     [1, 0, 5]
         * ]
         * hasSiblings([0, 0, 5], tiles)
         * //=boolean
         */
        hasSiblings(tile: number[], tiles: Array<number[]>): boolean;

        /**
         * Check to see if an array of tiles contains a particular tile
         *
         * @name hasTile
         * @param {Array<number[]>} tiles
         * @param {number[]} tile
         * @returns {boolean}
         * @example
         * var tiles = [
         *     [0, 0, 5],
         *     [0, 1, 5],
         *     [1, 1, 5],
         *     [1, 0, 5]
         * ]
         * hasTile(tiles, [0, 0, 5])
         * //=boolean
         */
        hasTile(tiles: Array<number[]>, tile: number[]): boolean;

        /**
         * Check to see if two tiles are the same
         *
         * @name tilesEqual
         * @param {number[]} tile1
         * @param {number[]} tile2
         * @returns {boolean}
         * @example
         * tilesEqual([0, 1, 5], [0, 0, 5])
         * //=boolean
         */
        tilesEqual(tile1: number[], tile2: number[]): boolean;

        /**
         * Get the quadkey for a tile
         *
         * @name tileToQuadkey
         * @param {number[]} tile
         * @returns {string} quadkey
         * @example
         * var quadkey = tileToQuadkey([0, 1, 5])
         * //=quadkey
         */
        tileToQuadkey(tile: number[]): string;

        /**
         * Get the tile for a quadkey
         *
         * @name quadkeyToTile
         * @param {string} quadkey
         * @returns {number[]} tile
         * @example
         * var tile = quadkeyToTile('00001033')
         * //=tile
         */
        quadkeyToTile(quadkey: string): number[];

        /**
         * Get the smallest tile to cover a bbox
         *
         * @name bboxToTile
         * @param {number[]} bbox
         * @returns {number[]} tile
         * @example
         * var tile = bboxToTile([ -178, 84, -177, 85 ])
         * //=tile
         */
        bboxToTile(bbox: number[]): number[];

        /**
         * Get the precise fractional tile location for a point at a zoom level
         *
         * @name pointToTileFraction
         * @param {number} lon
         * @param {number} lat
         * @param {number} z
         * @returns {number[]} tile fraction
         * var tile = pointToTileFraction(30.5, 50.5, 15)
         * //=tile
         */
        pointToTileFraction(lon: number, lat: number, z: number): number[];
    }
}

declare module "tilebelt" {
  export = tilebelt;
}