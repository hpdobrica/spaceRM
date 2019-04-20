import utils from '../../utils';
import Planet from './Planet';


class System {
    name: string;
    planets: Planet[];

    constructor(name: string) {
        this.name = name;
        this.planets = [];

        const numberOfPlanets = utils.randomNumber(0, 5);

        for (let i = 0; i < numberOfPlanets; i += 1) {
            this.planets.push(new Planet(this));
        }
    }
}


export default System;