import System from "../Entities/Environment/System";
import Universe from "../Entities/Environment/Universe";

/* eslint-disable no-param-reassign */

class MoveBehavior {
    location: {
        system: System
    }
    public move(systemName: string):boolean {
        const neighbouringSystems = Universe.listNeighbourSystems(this.location.system.name);
        if (neighbouringSystems.includes(systemName)) {
            this.location.system = Universe.getSystem(systemName);
            return true;
        }
        return false;
    }
}

export default MoveBehavior;

