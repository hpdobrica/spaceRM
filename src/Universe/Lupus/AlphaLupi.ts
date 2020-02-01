import Universe from '../../Entities/Environment/Universe';
import System from '../../Entities/Environment/System';
import Planet from '../../Entities/Environment/Planet';

const name = 'Alpha Lupi';

const system = new System(name);
Universe.addSystem(system);

const planets = [
    new Planet('Alpha Lupi A'),
    new Planet('Alpha Lupi B'),
    new Planet('Alpha Lupi C'),
] 

planets.forEach((planet) => {
    console.log('adding planet', planet.name)
    system.addEntity(planet);
})


export default system;
