import { ResourcesObject, Resource, HarvestableInterface } from "../types";

declare interface HarvesterInterface {
    resources: {
        max: ResourcesObject;
        available: ResourcesObject;
    }
    harvestData: {
        interval: number;
        amount: number;
    }
}


class HarvestBehavior implements HarvesterInterface {
    resources: {
        max: ResourcesObject;
        available: ResourcesObject;
    }
    harvestData: {
        interval: number;
        amount: number;
        intervalHandle?: NodeJS.Timeout;
    }

    constructor(obj: HarvesterInterface){}

    public startHarvesting(harvestable: HarvestableInterface, targetResource: Resource) {
        this.harvestData.intervalHandle = setInterval(() => {
            let valueToHarvest = 0;
            if(harvestable.resources[targetResource] - this.harvestData.amount < 0) {
                // if almost harvested, harvest the rest, dont allow negative
                valueToHarvest = harvestable.resources[targetResource];

                console.log('...resurce fully harvested, stopping the harvest');
                this.stopHarvesting();
            } else if(harvestable.resources[targetResource] - this.harvestData.amount === 0) {
                // if everything is harvested stop
                console.log('...resurce fully harvested, stopping the harvest');
                this.stopHarvesting();
            } else {
                valueToHarvest = this.harvestData.amount;
            }
    
            const newResourceValue = this.resources.available[targetResource] + this.harvestData.amount;
    
            if(newResourceValue > this.resources.max[targetResource]) {
                // resource limit reached
                console.log('...resource limit reached, stopping the harvest')
                this.stopHarvesting();
            }

            // do the actual harvest
            harvestable.resources[targetResource] -= valueToHarvest;
            this.resources.available[targetResource] += valueToHarvest;
            console.log(`...harvested ${valueToHarvest} ${targetResource}`);
        }, this.harvestData.interval);
    }

    public stopHarvesting() {
        if(this.harvestData.intervalHandle) {
            console.log('...harvesting stopped');
            clearTimeout(this.harvestData.intervalHandle);
            this.harvestData.intervalHandle = undefined;
        }
    }
}

export default HarvestBehavior;
