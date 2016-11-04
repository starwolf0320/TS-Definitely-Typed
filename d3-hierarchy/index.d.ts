// Type definitions for D3JS d3-hierarchy module v1.0.2
// Project: https://github.com/d3/d3-hierarchy/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// -----------------------------------------------------------------------
// Hierarchy
// -----------------------------------------------------------------------


export interface HierarchyLink<Datum> {
    source: HierarchyNode<Datum>;
    target: HierarchyNode<Datum>;
}

export interface HierarchyNode<Datum> {
    data: Datum;
    readonly depth: number;
    readonly height: number;
    parent: HierarchyNode<Datum> | null;
    children?: HierarchyNode<Datum>[];
    /**
     * Aggregated numeric value as calculated by sum(value),
     * if previously invoked.
     */
    readonly value?: number;
    /**
     * Optional Node Id string set by StratifyOperator, if
     * hierarchical data was created from tabular data using stratify()
     */
    readonly id?: string;
    ancestors(): HierarchyNode<Datum>[];
    descendants(): HierarchyNode<Datum>[];
    leaves(): HierarchyNode<Datum>[];
    path(target: HierarchyNode<Datum>): HierarchyNode<Datum>[];
    links(): HierarchyLink<Datum>[];
    sum(value: (d: Datum) => number): this;
    sort(compare: (a: HierarchyNode<Datum>, b: HierarchyNode<Datum>) => number): this;
    each(func: (node: HierarchyNode<Datum>) => void): this;
    eachAfter(func: (node: HierarchyNode<Datum>) => void): this;
    eachBefore(func: (node: HierarchyNode<Datum>) => void): this;
    copy(): HierarchyNode<Datum>;
}


export function hierarchy<Datum>(data: Datum, children?: (d: Datum) => (Datum[] | null)): HierarchyNode<Datum>;

// -----------------------------------------------------------------------
// Stratify
// -----------------------------------------------------------------------

// TODO: Review the comment in the API documentation related to 'reserved properties': id, parentId, children. If this is refering to the element on node, it should be 'parent'?


export interface StratifyOperator<Datum> {
    (data: Datum[]): HierarchyNode<Datum>;
    id(): (d: Datum, i: number, data: Datum[]) => (string | null | '' | undefined);
    id(id: (d: Datum, i?: number, data?: Datum[]) => (string | null | '' | undefined)): this;
    parentId(): (d: Datum, i: number, data: Datum[]) => (string | null | '' | undefined);
    parentId(parentId: (d: Datum, i?: number, data?: Datum[]) => (string | null | '' | undefined)): this;
}

export function stratify<Datum>(): StratifyOperator<Datum>;

// -----------------------------------------------------------------------
// Cluster
// -----------------------------------------------------------------------

export interface HierarchyPointLink<Datum> {
    source: HierarchyPointNode<Datum>;
    target: HierarchyPointNode<Datum>;
}

export interface HierarchyPointNode<Datum> {
    x: number;
    y: number;
    data: Datum;
    readonly depth: number;
    readonly height: number;
    parent: HierarchyPointNode<Datum> | null;
    children?: HierarchyPointNode<Datum>[];
    /**
     * Aggregated numeric value as calculated by sum(value),
     * if previously invoked.
     */
    readonly value?: number;
    /**
     * Optional Node Id string set by StratifyOperator, if
     * hierarchical data was created from tabular data using stratify()
     */
    readonly id?: string;
    ancestors(): HierarchyPointNode<Datum>[];
    descendants(): HierarchyPointNode<Datum>[];
    leaves(): HierarchyPointNode<Datum>[];
    path(target: HierarchyPointNode<Datum>): HierarchyPointNode<Datum>[];
    links(): HierarchyPointLink<Datum>[];
    sum(value: (d: Datum) => number): this;
    sort(compare: (a: HierarchyPointNode<Datum>, b: HierarchyPointNode<Datum>) => number): this;
    each(func: (node: HierarchyPointNode<Datum>) => void): this;
    eachAfter(func: (node: HierarchyPointNode<Datum>) => void): this;
    eachBefore(func: (node: HierarchyPointNode<Datum>) => void): this;
    copy(): HierarchyPointNode<Datum>;
}

export interface ClusterLayout<Datum> {
    (root: HierarchyNode<Datum>): HierarchyPointNode<Datum>;
    size(): [number, number] | null;
    size(size: [number, number]): this;
    nodeSize(): [number, number] | null;
    nodeSize(size: [number, number]): this;
    separation(): (a: HierarchyPointNode<Datum>, b: HierarchyPointNode<Datum>) => number;
    separation(separation: (a: HierarchyPointNode<Datum>, b: HierarchyPointNode<Datum>) => number): this;
}

export function cluster<Datum>(): ClusterLayout<Datum>;

// -----------------------------------------------------------------------
// Tree
// -----------------------------------------------------------------------

export interface TreeLayout<Datum> {
    (root: HierarchyNode<Datum>): HierarchyPointNode<Datum>;
    size(): [number, number] | null;
    size(size: [number, number]): this;
    nodeSize(): [number, number] | null;
    nodeSize(size: [number, number]): this;
    separation(): (a: HierarchyPointNode<Datum>, b: HierarchyPointNode<Datum>) => number;
    separation(separation: (a: HierarchyPointNode<Datum>, b: HierarchyPointNode<Datum>) => number): this;
}

export function tree<Datum>(): TreeLayout<Datum>;

// -----------------------------------------------------------------------
// Treemap
// -----------------------------------------------------------------------

export interface HierarchyRectangularLink<Datum> {
    source: HierarchyRectangularNode<Datum>;
    target: HierarchyRectangularNode<Datum>;
}

export interface HierarchyRectangularNode<Datum> {
    x0: number;
    y0: number;
    x1: number;
    y1: number;
    data: Datum;
    readonly depth: number;
    readonly height: number;
    parent: HierarchyRectangularNode<Datum> | null;
    children?: HierarchyRectangularNode<Datum>[];
    /**
     * Aggregated numeric value as calculated by sum(value),
     * if previously invoked.
     */
    readonly value?: number;
    /**
     * Optional Node Id string set by StratifyOperator, if
     * hierarchical data was created from tabular data using stratify()
     */
    readonly id?: string;
    ancestors(): HierarchyRectangularNode<Datum>[];
    descendants(): HierarchyRectangularNode<Datum>[];
    leaves(): HierarchyRectangularNode<Datum>[];
    path(target: HierarchyRectangularNode<Datum>): HierarchyRectangularNode<Datum>[];
    links(): HierarchyRectangularLink<Datum>[];
    sum(value: (d: Datum) => number): this;
    sort(compare: (a: HierarchyRectangularNode<Datum>, b: HierarchyRectangularNode<Datum>) => number): this;
    each(func: (node: HierarchyRectangularNode<Datum>) => void): this;
    eachAfter(func: (node: HierarchyRectangularNode<Datum>) => void): this;
    eachBefore(func: (node: HierarchyRectangularNode<Datum>) => void): this;
    copy(): HierarchyRectangularNode<Datum>;
}

export interface TreemapLayout<Datum> {
    (root: HierarchyNode<Datum>): HierarchyRectangularNode<Datum>;
    tile(): (node: HierarchyRectangularNode<Datum>, x0: number, y0: number, x1: number, y1: number) => void;
    tile(tile: (node: HierarchyRectangularNode<Datum>, x0: number, y0: number, x1: number, y1: number) => void): this;
    size(): [number, number];
    size(size: [number, number]): this;
    round(): boolean;
    round(round: boolean): this;
    padding(): (node: HierarchyRectangularNode<Datum>) => number;
    padding(padding: number): this;
    padding(padding: (node: HierarchyRectangularNode<Datum>) => number): this;
    paddingInner(): (node: HierarchyRectangularNode<Datum>) => number;
    paddingInner(padding: number): this;
    paddingInner(padding: (node: HierarchyRectangularNode<Datum>) => number): this;
    paddingOuter(): (node: HierarchyRectangularNode<Datum>) => number;
    paddingOuter(padding: number): this;
    paddingOuter(padding: (node: HierarchyRectangularNode<Datum>) => number): this;
    paddingTop(): (node: HierarchyRectangularNode<Datum>) => number;
    paddingTop(padding: number): this;
    paddingTop(padding: (node: HierarchyRectangularNode<Datum>) => number): this;
    paddingRight(): (node: HierarchyRectangularNode<Datum>) => number;
    paddingRight(padding: number): this;
    paddingRight(padding: (node: HierarchyRectangularNode<Datum>) => number): this;
    paddingBottom(): (node: HierarchyRectangularNode<Datum>) => number;
    paddingBottom(padding: number): this;
    paddingBottom(padding: (node: HierarchyRectangularNode<Datum>) => number): this;
    paddingLeft(): (node: HierarchyRectangularNode<Datum>) => number;
    paddingLeft(padding: number): this;
    paddingLeft(padding: (node: HierarchyRectangularNode<Datum>) => number): this;
}

export function treemap<Datum>(): TreemapLayout<Datum>;

// Tiling functions ---------------------------------------------------------------------------------


export function treemapBinary(node: HierarchyRectangularNode<any>, x0: number, y0: number, x1: number, y1: number): void;
export function treemapDice(node: HierarchyRectangularNode<any>, x0: number, y0: number, x1: number, y1: number): void;
export function treemapSlice(node: HierarchyRectangularNode<any>, x0: number, y0: number, x1: number, y1: number): void;
export function treemapSliceDice(node: HierarchyRectangularNode<any>, x0: number, y0: number, x1: number, y1: number): void;

// TODO: Test Factory code
export interface RatioSquarifyTilingFactory {
    (node: HierarchyRectangularNode<any>, x0: number, y0: number, x1: number, y1: number): void;
    ratio(ratio: number): RatioSquarifyTilingFactory;
}

export var treemapSquarify: RatioSquarifyTilingFactory;
export var treemapResquarify: RatioSquarifyTilingFactory;


// -----------------------------------------------------------------------
// Partition
// -----------------------------------------------------------------------

export interface PartitionLayout<Datum> {
    (root: HierarchyNode<Datum>): HierarchyRectangularNode<Datum>;
    size(): [number, number];
    size(size: [number, number]): this;
    round(): boolean;
    round(round: boolean): this;
    padding(): number;
    padding(padding: number): this;
}

export function partition<Datum>(): PartitionLayout<Datum>;

// -----------------------------------------------------------------------
// Pack
// -----------------------------------------------------------------------

export interface HierarchyCircularLink<Datum> {
    source: HierarchyCircularNode<Datum>;
    target: HierarchyCircularNode<Datum>;
}

export interface HierarchyCircularNode<Datum> {
    x: number;
    y: number;
    r: number;
    data: Datum;
    readonly depth: number;
    readonly height: number;
    parent: HierarchyCircularNode<Datum> | null;
    children?: HierarchyCircularNode<Datum>[];
    /**
     * Aggregated numeric value as calculated by sum(value),
     * if previously invoked.
     */
    readonly value?: number;
    /**
     * Optional Node Id string set by StratifyOperator, if
     * hierarchical data was created from tabular data using stratify()
     */
    readonly id?: string;
    ancestors(): HierarchyCircularNode<Datum>[];
    descendants(): HierarchyCircularNode<Datum>[];
    leaves(): HierarchyCircularNode<Datum>[];
    path(target: HierarchyCircularNode<Datum>): HierarchyCircularNode<Datum>[];
    links(): HierarchyCircularLink<Datum>[];
    sum(value: (d: Datum) => number): this;
    sort(compare: (a: HierarchyCircularNode<Datum>, b: HierarchyCircularNode<Datum>) => number): this;
    each(func: (node: HierarchyCircularNode<Datum>) => void): this;
    eachAfter(func: (node: HierarchyCircularNode<Datum>) => void): this;
    eachBefore(func: (node: HierarchyCircularNode<Datum>) => void): this;
    copy(): HierarchyCircularNode<Datum>;
}


export interface PackLayout<Datum> {
    (root: HierarchyNode<Datum>): HierarchyCircularNode<Datum>;
    radius(): null | ((node: HierarchyCircularNode<Datum>) => number);
    radius(radius: (node: HierarchyCircularNode<Datum>) => number): this;
    size(): [number, number];
    size(size: [number, number]): this;
    padding(): (node: HierarchyCircularNode<Datum>) => number;
    padding(padding: number): this;
    padding(padding: (node: HierarchyCircularNode<Datum>) => number): this;
}

export function pack<Datum>(): PackLayout<Datum>;


// -----------------------------------------------------------------------
// Pack Siblings and Enclosure
// -----------------------------------------------------------------------

export interface PackCircle {
    r: number;
    x?: number;
    y?: number;
}

// TODO: Since packSiblings manipulates the circles array in place, technically the x and y properties
// are optional on invocation, but will be created after execution for each entry.
// For invocation of packEnclose the x and y coordinates are mandatory. It seems easier to just comment
// on the mandatory nature, then to create separate interfaces and having to deal with recasting.

export function packSiblings<Datum extends PackCircle>(circles: Datum[]): Datum[];

export function packEnclose<Datum extends PackCircle>(circles: Datum[]): { r: number, x: number, y: number };
