import System from "../Entities/Environment/System";
import Universe from "../Entities/Environment/Universe";
import { LocationObject } from "../types";

declare interface MoveInterface {
    location: LocationObject;
}

class MoveBehavior implements MoveInterface{
    location: LocationObject;

    constructor(obj : MoveInterface) {};

    public jump(systemName: string):boolean {
        try {
            const neighbouringSystems = Universe.listNeighbourSystems(this.location.system.name);
            if (neighbouringSystems.includes(systemName)) {
                this.location.system = Universe.getSystem(systemName);
                this.location.local = undefined;
                return true;
            }
            return false;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
    public move(entityName: string): boolean {
        try {
            const availableEntities = this.location.system.listEntities();
            if(availableEntities.includes(entityName)) {
                this.location.local = this.location.system.getEntity(entityName);
                return true;
            }
            return false;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

}

export default MoveBehavior;

