// const System = require('./System');
import System from './System';


class Universe {
    state: {
        graph: {
            systems: {
                [key: string]: System
            },
            connections: {
                [key: string]: string[]
            }
        }
    };

    constructor() {
        this.state = {
            graph: {
                systems: {},
                connections: {},
            }
        };
    }

    addSystem(name:string):void {
        const system = new System(name);
        this.state.graph.systems[system.name] = system;
        this.state.graph.connections[system.name] = [];
    }

    connectSystems(systemName1:string, systemName2:string):void {
        this.state.graph.connections[systemName1].push(systemName2);
        this.state.graph.connections[systemName2].push(systemName1);
    }

    listSystems ():string[] {
        return Object.keys(this.state.graph.systems);
    } 

    getSystem (name:string):System {
        return this.state.graph.systems[name];
    }

    listNeighbourSystems(name:string):string[] {
        return this.state.graph.connections[name];
    }
}


export default new Universe();