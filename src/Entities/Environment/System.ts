import utils from '../../utils';
import Planet from './Planet';

const has = Object.hasOwnProperty;


class System {
    name: string;
    entities: {
        planets: Planet[];
        [key: string]: Planet[];
    }
    

    constructor(name: string) {
        this.name = name;
        this.entities = {
            planets: []
        }

        // const numberOfPlanets = utils.randomNumber(0, 5);

        // for (let i = 0; i < numberOfPlanets; i += 1) {
        //     this.entities.planets.push(new Planet(this));
        // }
    }

    listEntities(): string[] {
        const result: Planet[] = [];
        Object.keys(this.entities).forEach((entityKey) => {
            result.push(...this.entities[entityKey])
        })
        return result.map(entity => entity.name);
    }

    getEntity(entityName: string): Planet {
        const entityKeys = Object.keys(this.entities);
        for (let i = 0; i< entityKeys.length; i++) {
            const foundEntity = this.entities[entityKeys[i]].find((entity) => entity.name === entityName)
            if(foundEntity) {
                return foundEntity;
            }
        }
        throw new Error('ENTITY_NOT_FOUND');
    }

    addEntity(entity: Planet): void {
        this.entities.planets.push(entity);
    }

}


export default System;