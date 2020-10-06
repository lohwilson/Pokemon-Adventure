
let userPokemon = []
let enemyPokemon = []

let pokemonName = []
let pokemonHealth = []
let pokemonLevel = []
let pokemonImage = []

let trainingPokemon = []
let randomPokemon1 = []
let randomPokemon2 = []

let rivalPokemonList = []
let trainer1PokemonList = []
let trainer2PokemonList = []
let trainer3PokemonList = []
let trainer4PokemonList = []
let trainer5PokemonList = []
let trainer6PokemonList = []
let trainer7PokemonList = []
let trainer8PokemonList = []
let teamRocket1PokemonList = []
let teamRocket2PokemonList = []


class Pokemon {
    constructor(name, health, fullHealth, skills, level, image){
        this.name = name;
        this.health = health;
        this.fullHealth = fullHealth;
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

let spearowSkill = [
    {
        name: 'Sting',
        damage: 5
    },
    {
        name: 'Poison Attack',
        damage: 10
    }
]

let ekansSkill = [
    {
        name: 'Sting',
        damage: 5
    },
    {
        name: 'Poison Attack',
        damage: 10
    }
]

let sandshrewSkill = [
    {
        name: 'Sting',
        damage: 5
    },
    {
        name: 'Poison Attack',
        damage: 10
    }
]

let nidoranSkill = [
    {
        name: 'Sting',
        damage: 5
    },
    {
        name: 'Poison Attack',
        damage: 10
    }
]

let geodudeSkill = [
    {
        name: 'Sting',
        damage: 5
    },
    {
        name: 'Poison Attack',
        damage: 10
    }
]

let zubatSkill = [
    {
        name: 'Sting',
        damage: 5
    },
    {
        name: 'Poison Attack',
        damage: 10
    }
]

let koffingSkill = [
    {
        name: 'Sting',
        damage: 5
    },
    {
        name: 'Poison Attack',
        damage: 10
    }
]

let diglettSkill = [
    {
        name: 'Sting',
        damage: 5
    },
    {
        name: 'Dig',
        damage: 20
    }
]

let meowthSkill = [
    {
        name: 'Scratch',
        damage: 10
    },
    {
        name: 'Payday',
        damage: 15
    }
]

const pikachu = new Pokemon('Pikachu', 100, 100, pikachuSkill, 5, 'css/images/pokemon/pikachu.jpg')
const charmander = new Pokemon('Charmander', 100, 100, charmanderSkill, 5, 'css/images/pokemon/charmander.jpg')
const squirtle = new Pokemon('Squirtle', 100, 100, squirtleSkill, 5, 'css/images/pokemon/squirtle.png')
const bulbasaur = new Pokemon('Bulbasaur', 100, 100, bulbasaurSkill, 5, 'css/images/pokemon/bulbasaur.png')

const ratata = new Pokemon('Ratata', 40, 40, ratataSkill, 5, 'css/images/pokemon/ratata.jpg')
const caterpie = new Pokemon('Caterpie', 40, 40, caterpieSkill, 5, 'css/images/pokemon/caterpie.jpg')
const pidgey = new Pokemon('Pidgey', 40, 40, pidgeySkill, 5, 'css/images/pokemon/pidgey.jpg')
const weedle = new Pokemon('Weedle', 40, 40, weedleSkill, 5, 'css/images/pokemon/weedle.png')
const spearow = new Pokemon('Spearow', 40, 40, spearowSkill, 5, 'css/images/pokemon/spearow.png')
const ekans = new Pokemon('Ekans', 40, 40, ekansSkill, 5, 'css/images/pokemon/ekans.png')
const sandshrew = new Pokemon('Sandshrew', 40, 40, sandshrewSkill, 5, 'css/images/pokemon/sandshrew.png')
const nidoran = new Pokemon('Nidoran', 40, 40, nidoranSkill, 5, 'css/images/pokemon/nidoran.png')
const geodude = new Pokemon('Geodude', 40, 40, geodudeSkill, 5, 'css/images/pokemon/geodude.png')
const zubat = new Pokemon('Zubat', 40, 40, zubatSkill, 5, 'css/images/pokemon/zubat.jpg')
const koffing = new Pokemon('Koffing', 40, 40, koffingSkill, 5, 'css/images/pokemon/koffing.png')
const diglett = new Pokemon('Diglett', 40, 40, diglettSkill, 5, 'css/images/pokemon/diglett.jpg')
const meowth = new Pokemon('Meowth', 100, 100, meowthSkill, 5, 'css/images/pokemon/meowth.jpg')



trainingPokemon.push(caterpie, ratata, pidgey, weedle)
randomPokemon1.push(caterpie, ratata, pidgey, weedle, spearow, ekans, sandshrew, nidoran, geodude, zubat)


rivalPokemonList.push(ratata, caterpie)
trainer1PokemonList.push(sandshrew, nidoran)
trainer2PokemonList.push(spearow, ratata)
trainer3PokemonList.push(geodude,diglett)

teamRocket1PokemonList.push(koffing, ekans)
teamRocket2PokemonList.push(koffing, ekans, meowth)
