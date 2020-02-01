import Universe from "../Entities/Environment/Universe";
import { LocationObject, IMovable, Entities } from "../types";


class MoveBehavior implements IMovable {
    location: LocationObject;

    constructor(obj : IMovable) {};

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
    public move(entityType: Entities, entityName: string): boolean {
        try {
            const availableEntities = this.location.system.listEntities(entityType);
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