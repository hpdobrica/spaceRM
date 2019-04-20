const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})



// const Universe = require('./Entities/Environment/Universe');
import Universe from './Entities/Environment/Universe';
import Ship from './Entities/Ship'
// const ship = require('./Entities/Ship');


// console.log(Universe.listSystems());

Universe.addSystem('Ursula 14');
Universe.addSystem('Ursula 15');
Universe.connectSystems('Ursula 14', 'Ursula 15');

Universe.addSystem('Andromeda Alpha 1');
Universe.addSystem('Andromeda Alpha 2');


Universe.addSystem('Andromeda Beta 1');

Universe.connectSystems('Ursula 15', 'Andromeda Alpha 1');
Universe.connectSystems('Andromeda Alpha 1', 'Andromeda Alpha 2');
Universe.connectSystems('Andromeda Alpha 2', 'Andromeda Beta 1');

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
                console.log(player.location.system.name);
                break;
            case 'listsys':
                console.log(Universe.listNeighbourSystems(player.location.system.name))
                break;
            case 'move':
                player.move(args.join(' '));
                break;
            case 'exit':
                readline.close();
                process.exit();
                break;
            default:
                console.log('status | listsys | location | move | exit');
                break;
        }
      recursiveAsyncReadLine();
    });
  };

recursiveAsyncReadLine();


module.exports = {};