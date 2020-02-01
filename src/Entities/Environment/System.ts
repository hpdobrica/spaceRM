import utils from '../../utils';
import Planet from './Planet';
import Station from '../Station';
import { Entity, Entities } from '../../types';

const has = Object.hasOwnProperty;


class System {
    name: string;
    entities: {
        [key in Entities]: Entity[];
    }
    

    constructor(name: string) {
        this.name = name;
        this.entities = {
            planets: [],
            stations: [],
            ships: [],
        }

        // const numberOfPlanets = utils.randomNumber(0, 5);

        // for (let i = 0; i < numberOfPlanets; i += 1) {
        //     this.entities.planets.push(new Planet(this));
        // }
    }

    listEntities(entityType: Entities): string[] {
        const result: Entity[] = [];
        // Object.keys(this.entities).forEach((entityKey) => {
            result.push(...this.entities[entityType])
        // })
        return result.map(entity => entity.name);
    }

    getEntity(entityName: string): Entity {
        const entityKeys = Object.values(Entities);
        for (let i = 0; i< entityKeys.length; i++) {
            const foundEntity = this.entities[entityKeys[i]].find((entity: Entity) => entity.name === entityName)
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