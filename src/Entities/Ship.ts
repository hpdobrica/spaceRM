import Universe from './Environment/Universe';
import MoveBehavior from '../Behaviors/MoveBehavior';

import { LocationObject, ResourcesObject } from '../types';
import HarvestBehavior from '../Behaviors/HarvestBehavior';

interface ShipInterface {
    jump: MoveBehavior["jump"]
    move: MoveBehavior["move"]
    startHarvesting: HarvestBehavior["startHarvesting"]
    stopHarvesting: HarvestBehavior["stopHarvesting"]
}

class Ship implements ShipInterface{
    name: string;
    resources: {
        max: ResourcesObject,
        available: ResourcesObject
    };
    location: LocationObject;
    harvestData: {
        interval: number;
        amount: number;
    }

    jump: MoveBehavior["jump"]
    move: MoveBehavior["move"]
    startHarvesting: HarvestBehavior["startHarvesting"]
    stopHarvesting: HarvestBehavior["stopHarvesting"]

    constructor(name:string, systemName:string) {
        this.name = name;
        this.resources = {
            max: {
                minerals: 1000,
                gas: 1000
            },
            available: {
                minerals: 200,
                gas: 0
            }
        };
        this.harvestData = {
            interval: 1000,
            amount: 100
        }
        this.location = {
            system: Universe.getSystem(systemName)
        }

        
        this.implementMoveBehavior();
        this.implementHarvestBehavior();
    }

    private implementMoveBehavior() {
        const moveBehavior = new MoveBehavior(this);
        this.jump = moveBehavior.jump;
        this.move = moveBehavior.move;
    }

    private implementHarvestBehavior() {
        const harvestBehavior = new HarvestBehavior(this);
        this.startHarvesting = harvestBehavior.startHarvesting;
        this.stopHarvesting = harvestBehavior.stopHarvesting;
    }
}

export default Ship;
