
let userPokemon = []
let enemyPokemon = []

let pokemonName = []
let pokemonHealth = []
let pokemonLevel = []
let pokemonImage = []

class Pokemon {
    constructor(name, health, skills, level, image){
        this.name = name;
        this.health = health;
        // this.attack = attack;
        // this.defense = defense;
        // this.speed = speed;
        this.skills = skills;
        this.level = level;
        this.image = image;
    }
}

// const pokemonSkills = [
//     {
//         pikachuSkill: [{
//             QuickAttack: 5, 
//             Thundershock: 10,
//             }]
//     },
//     {

//     }
// ]


let pikachuSkill = [
    {
        name: 'Quick Attack',
        damage: 5
    },
    {
        name: 'Thunder',
        damage: 10
    }
]

let charmanderSkill = [
    {
        name: 'Scratch',
        damage: 5
    },
    {
        name: 'Ember',
        damage: 10
    },
    {
        name: 'Slash',
        damage: 20
    },
    {
        name: 'Fire Spin',
        damage: 45
    }
]

let squirtleSkill = [
    {
        name: 'Scratch',
        damage: 5
    },
    {
        name: 'Bubble',
        damage: 10
    }
]

let bulbasaurSkill = [
    {
        name: 'Tackle',
        damage: 5
    },
    {
        name: 'Leech Seed',
        damage: 10
    }
]

let caterpieSkill = [
    {
        name: 'Tackle',
        damage: 5
    },
    {
        name: 'Leech Seed',
        damage: 10
    }
]

let ratataSkill = [{
    Tackle: 5, 
    LeechSeed: 10,
}]

let pidgeySkill = [{
    Tackle: 5, 
    LeechSeed: 10,
}]

let weedleSkill = [{
    Tackle: 5, 
    LeechSeed: 10,
}]

const pikachu = new Pokemon('pikachu', '100', pikachuSkill, 5)
const charmander = new Pokemon('charmander', '100', charmanderSkill, 5, 'css/images/pokemon/charmander.jpg')
const squirtle = new Pokemon('squirtle', '100', squirtleSkill, 5, 'css/images/pokemon/squirtle.png')
const bulbasaur = new Pokemon('bulbasaur', '100', bulbasaurSkill, 5, 'css/images/pokemon/bulbasaur.png')

const ratata = new Pokemon('Ratata', '100', ratataSkill, 5, 'css/images/pokemon/ratata.jpg')