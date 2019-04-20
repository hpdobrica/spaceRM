import utils from '../../utils';
import System from './System';

class Planet {
    name: string;
    resources: {
        minerals: number;
        gas: number;
    }

    constructor(system: System) {
        this.name = system.name;
        this.resources = {
            minerals: utils.randomNumber(0, 1000),
            gas: utils.randomNumber(0, 100),
        }
    }
}

export default Planet;
