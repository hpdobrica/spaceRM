// const utils = require('../utils');
// const Universe = require('./Environment/Universe');
// const canMove = require('../Behaviors/canMove');

import Universe from './Environment/Universe';
import MoveBehavior from '../Behaviors/MoveBehavior';
import System from './Environment/System';

interface ShipInterface {
    move: MoveBehavior["move"]
}

class Ship implements ShipInterface{
    name: string;
    resources: {
        minerals: number;
        gas: number;
    };
    location: {
        system: System;
    };
    move: MoveBehavior["move"]

    constructor(name:string, systemName:string) {
        this.name = name;
        this.resources = {
            minerals: 200,
            gas: 0
        };
        this.location = {
            system: Universe.getSystem(systemName)
        }

        this.move = new MoveBehavior().move;
    }
}

export default Ship;
