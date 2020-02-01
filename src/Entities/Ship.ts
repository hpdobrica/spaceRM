import Universe from './Environment/Universe';


import { IHarvester, IMovable } from '../types';
import MoveBehavior from '../Behaviors/MoveBehavior';
import HarvestBehavior from '../Behaviors/HarvestBehavior';

class Ship implements IHarvester, IMovable {
    name: string;
    
    location: MoveBehavior['location'];
    jump: MoveBehavior["jump"];
    move: MoveBehavior["move"];

    resources: HarvestBehavior['resources'];
    harvestData: HarvestBehavior['harvestData'];
    startHarvesting: HarvestBehavior["startHarvesting"];
    stopHarvesting: HarvestBehavior["stopHarvesting"];

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
