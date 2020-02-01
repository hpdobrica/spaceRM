import { IDockable } from "../types";
import Ship from "../Entities/Ship";


class DockBehavior implements IDockable {
    hangar: IDockable['hangar'];
    hangarLimit: IDockable['hangarLimit'];

    constructor(obj : IDockable) {};

    public dock(shipToDock: Ship): boolean {
        if(this.hangar.length < this.hangarLimit) {
            this.hangar.push(shipToDock);
            return true;
        }
        return false;
    }

    public undock(shipToUndock: Ship): void {
        this.hangar = this.hangar.filter((ship) => ship !== shipToUndock);
    }

}

export default DockBehavior;

