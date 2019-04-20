import System from './Entities/Environment/System';
import Planet from './Entities/Environment/Planet';
import Ship from './Entities/Ship';

export declare interface LocationObject {
    system: System;
    local?: Planet | Ship
}

export declare interface ResourcesObject {
    minerals: number;
    gas: number;
}

export declare interface HarvestableInterface {
    resources: ResourcesObject;
}

export declare const enum Resource {
    minerals = "minerals",
    gas = "gas",
}