
let userPokemon = []
let enemyPokemon = []

let pokemonName = []
let pokemonHealth = []
let pokemonLevel = []
let pokemonImage = []

let trainingPokemon = []
let randomPokemon = []

let garyPokemonList = []

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
    },
    {
        name: 'Water Gun',
        damage: 20
    },
    {
        name: 'Hydro Pump',
        damage: 45
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
    },
    {
        name: 'Vine Whip',
        damage: 20
    },
    {
        name: 'Solar Beam',
        damage: 45
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

let ratataSkill = [
    {
        name: 'Tackle',
        damage: 5
    },
    {
        name: 'Scratch',
        damage: 10
    }
]

let pidgeySkill = [
    {
        name: 'Gust',
        damage: 5
    },
    {
        name: 'Wing Attack',
        damage: 10
    }
]

let weedleSkill = [
    {
        name: 'Sting',
        damage: 5
    },
    {
        name: 'Poison Attack',
        damage: 10
    }
]

const pikachu = new Pokemon('Pikachu', '100', pikachuSkill, 5)
const charmander = new Pokemon('Charmander', '100', charmanderSkill, 5, 'css/images/pokemon/charmander.jpg')
const squirtle = new Pokemon('Squirtle', '100', squirtleSkill, 5, 'css/images/pokemon/squirtle.png')
const bulbasaur = new Pokemon('Bulbasaur', '100', bulbasaurSkill, 5, 'css/images/pokemon/bulbasaur.png')

const ratata = new Pokemon('Ratata', '100', ratataSkill, 5, 'css/images/pokemon/ratata.jpg')
const caterpie = new Pokemon('Caterpie', '100', caterpieSkill, 5, 'css/images/pokemon/caterpie.jpg')
const pidgey = new Pokemon('Pidgey', '100', pidgeySkill, 5, 'css/images/pokemon/pidgey.jpg')
const weedle = new Pokemon('Weedle', '100', weedleSkill, 5, 'css/images/pokemon/weedle.jpg')


garyPokemonList.push(ratata, caterpie)
trainingPokemon.push(caterpie, ratata, pidgey, weedle)
randomPokemon.push(caterpie, ratata, pidgey, weedle)

