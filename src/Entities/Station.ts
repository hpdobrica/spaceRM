import Ship from "./Ship";
import { IDockable } from "../types";
import DockBehavior from "../Behaviors/DockBehavior";



class Station implements IDockable{
    name: string;
    hangar: IDockable['hangar'];
    hangarLimit: IDockable['hangarLimit']

    dock: DockBehavior['dock'];
    undock: DockBehavior['undock'];

    constructor(name: string) {
        this.name = name;
        this.hangar = [];

        this.implementDockBehavior();
    }

    implementDockBehavior() {
        const dockBehavior = new DockBehavior(this);
        this.dock = dockBehavior.dock;
        this.undock = dockBehavior.undock;
    }
}

export default Station;