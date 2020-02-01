import utils from '../../utils';
import System from './System';
import { IHarvestable } from '../../types';


class Planet implements IHarvestable {
    name: string;
    resources: {
        minerals: number;
        gas: number;
    }

    constructor(name: string) {
        this.name = name;
        this.resources = {
            minerals: utils.randomNumber(0, 1000),
            gas: utils.randomNumber(0, 100),
        }


    }
}

export default Planet;
