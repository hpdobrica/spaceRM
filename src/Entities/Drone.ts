import Universe from './Environment/Universe';
import MoveBehavior from '../Behaviors/MoveBehavior';
import System from './Environment/System';

import { LocationObject, ResourcesObject } from '../types';

interface ShipInterface {
    move: MoveBehavior["move"]
}

class Drone implements ShipInterface{
    name: string;
    resources: {
        max: ResourcesObject
        available: ResourcesObject
    };
    location: LocationObject
    move: MoveBehavior["move"]

    constructor(name:string, systemName:string) {
        this.name = name;
        this.resources = {
            max: {
                minerals: 100,
                gas: 50
            },
            available: {
                minerals: 0,
                gas: 0
            }
        };
        this.location = {
            system: Universe.getSystem(systemName)
        }

        this.move = new MoveBehavior(this).move;
    }
}

export default Drone;
