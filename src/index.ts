/// <reference path="./types.d.ts"
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})



// const Universe = require('./Entities/Environment/Universe');
import Universe from './Entities/Environment/Universe';
import Ship from './Entities/Ship';
import Planet from './Entities/Environment/Planet';
import { Resource } from './types';
// const ship = require('./Entities/Ship');


// console.log(Universe.listSystems());

// Universe.addSystem('Ursula 14');
// Universe.addSystem('Ursula 15');
// Universe.connectSystems('Ursula 14', 'Ursula 15');

// Universe.addSystem('Andromeda Alpha 1');
// Universe.addSystem('Andromeda Alpha 2');


// Universe.addSystem('Andromeda Beta 1');

// Universe.connectSystems('Ursula 15', 'Andromeda Alpha 1');
// Universe.connectSystems('Andromeda Alpha 1', 'Andromeda Alpha 2');
// Universe.connectSystems('Andromeda Alpha 2', 'Andromeda Beta 1');

// console.log(Universe.listSystems());


// console.log(Universe.listNeighbourSystems('Ursula 15'));

// console.log(Universe.getSystem('Ursula 15'));

const player = new Ship('Player', 'Ursula 15');

// console.log(player.location);

player.move('Andromeda Alpha 2');

// console.log(player.location);


player.move('Andromeda Alpha 1');


// console.log(player.location);

const recursiveAsyncReadLine = () => {
    readline.question('> ',  (expression: string) => {
        const command = expression.split(' ')[0];
        const args = expression.split(' ').slice(1);
        switch (command) {
            case 'status':
                console.log(player);
                break;
            case 'location':
                console.log('System:', player.location.system.name);
                if (player.location.local) {
                    console.log('Local:' , player.location.local.name)
                    console.log(player.location.local);
                }
                break;
            case 'list':
                if (args[0] === 'system') {
                    console.log(Universe.listNeighbourSystems(player.location.system.name))
                }
                if (args[0] === 'local') {
                    console.log(player.location.system.listEntities());
                }
                break;
            case 'jump':
                player.jump(args.join(' '));
                break;
            case 'move':
                player.move(args.join(' '));
                break;
            case 'harvest':
                if (args[0] === 'start') {
                    if(player.location.local && player.location.local instanceof Planet) {
                        player.startHarvesting(player.location.local, Resource.minerals);
                    } else {
                        console.log('cant harvest here');
                    }
                }
                if (args[0] === 'stop') {
                    player.stopHarvesting();
                }
                break;

            case 'exit':
                readline.close();
                process.exit();
                break;
            default:
                console.log('status | list [local, system] | location');
                console.log('jump (systemName)| move (localEntity) | harvest [start, stop] | exit');
                break;
        }
      recursiveAsyncReadLine();
    });
  };

recursiveAsyncReadLine();


module.exports = {};