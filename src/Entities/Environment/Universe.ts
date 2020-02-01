// const System = require('./System');
import System from './System';


class Universe {
    systems: {
        [key: string]: System
    }

    connections: {
        [key: string]: string[]
    }


    constructor() {
        this.systems = {};
        this.connections = {};
    }

    addSystem(system: System):void {
        this.systems[system.name] = system;
        this.connections[system.name] = [];
    }

    connectSystems(systemName1:string, systemName2:string):void {
        this.connections[systemName1].push(systemName2);
        this.connections[systemName2].push(systemName1);
    }

    listSystems ():string[] {
        return Object.keys(this.systems);
    } 

    getSystem (name:string):System {
        return this.systems[name];
    }

    listNeighbourSystems(name:string):string[] {
        return this.connections[name];
    }
}


export default new Universe();