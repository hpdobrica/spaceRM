import System from './Entities/Environment/System';
import Planet from './Entities/Environment/Planet';
import Ship from './Entities/Ship';
import Station from './Entities/Station';

export declare type Entity = Planet | Ship | Station;

export enum ENTITY {
    planets = "planets",
    ships = "ships", 
    stations = "stations"
}

export enum RESOURCE {
    minerals = "minerals",
    gas = "gas",
}


export declare interface LocationObject {
    system: System;
    local?: Entity
}

export declare interface ResourcesObject {
    minerals: number;
    gas: number;
    [key: string]: number;
    // [key in Resources]: number;
}

export declare interface IHarvester {
    resources: {
        max: ResourcesObject;
        available: ResourcesObject;
    }
    harvestData: {
        interval: number;
        amount: number;
        intervalHandle?: NodeJS.Timeout;
    },
    // startHarvesting: Function;
    // stopHarvesting: Function;
    // startHarvesting: (harvestable: IHarvestable, targetResource: Resource) => void;
    // stopHarvesting: () => void;
}

export declare interface IHarvestable {
    resources: ResourcesObject;
}

export declare interface IDockable {
    hangar: Ship[];
    hangarLimit: number;
}

export declare interface IMovable {
    location: LocationObject;
    // jump: Function;
    // move: Function;
    // jump: (systemName: string) => boolean;
    // move: (entityName: string) => boolean;
}

