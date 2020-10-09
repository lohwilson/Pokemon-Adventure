
let userPokemon = []
let enemyPokemon = []

let pokemonName = []
let pokemonHealth = []
let pokemonLevel = []
let pokemonImage = []

let trainingPokemon = []
let randomPokemon1 = []
let randomPokemon2 = []
let randomPokemon3 = []
let randomPokemon4 = []
let randomPokemon5 = []

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
        damage: 10
    },
    {
        name: 'Thundershock',
        damage: 15
    },
    {
        name: 'Thunderbolt',
        damage: 30
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
        name: 'Tackle',
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
        name: 'Bug Bite',
        damage: 10
    }
]

let ratataSkill = [
    {
        name: 'Tackle',
        damage: 5
    },
    {
        name: 'Quick Attack',
        damage: 10
    }
]

let pidgeySkill = [
    {
        name: 'Tackle',
        damage: 5
    },
    {
        name: 'Gust',
        damage: 10
    }
]

let weedleSkill = [
    {
        name: 'Poison Sting',
        damage: 5
    },
    {
        name: 'Bug Bite',
        damage: 10
    }
]

let spearowSkill = [
    {
        name: 'Peck',
        damage: 7
    },
    {
        name: 'Fury Attack',
        damage: 13
    }
]

let ekansSkill = [
    {
        name: 'Wrap',
        damage: 9
    },
    {
        name: 'Bite',
        damage: 16
    }
]

let sandshrewSkill = [
    {
        name: 'Scratch',
        damage: 7
    },
    {
        name: 'Rapid Spin',
        damage: 13
    }
]

let nidoranSkill = [
    {
        name: 'Tackle',
        damage: 7
    },
    {
        name: 'Poison Sting',
        damage: 13
    }
]

let geodudeSkill = [
    {
        name: 'Tackle',
        damage: 9
    },
    {
        name: 'Mud Sport',
        damage: 14
    }
]

let zubatSkill = [
    {
        name: 'Absorb',
        damage: 8
    },
    {
        name: 'Bite',
        damage: 17
    }
]

let koffingSkill = [
    {
        name: 'Poison Gas',
        damage: 9
    },
    {
        name: 'Toxic',
        damage: 16
    }
]

let diglettSkill = [
    {
        name: 'Scratch',
        damage: 9
    },
    {
        name: 'Dig',
        damage: 20
    }
]

let meowthSkill = [
    {
        name: 'Scratch',
        damage: 15
    },
    {
        name: 'Payday',
        damage: 20
    }
]

let magikarpSkill = [
    {
        name: 'Splash',
        damage: 0
    },
    {
        name: 'Tackle',
        damage: 5
    }
]

let krabbySkill = [
    {
        name: 'Bubble',
        damage: 10
    },
    {
        name: 'Vice Grip',
        damage: 15
    }
]

let poliwagSkill = [
    {
        name: 'Pound',
        damage: 10
    },
    {
        name: 'Water Gun',
        damage: 15
    }
]

let oddishSkill = [
    {
        name: 'Absorb',
        damage: 10
    },
    {
        name: 'Poison Powder',
        damage: 15
    }
]

let parasSkill = [
    {
        name: 'Scratch',
        damage: 10
    },
    {
        name: 'Fury Swipes',
        damage: 15
    }
]

let venonatSkill = [
    {
        name: 'Tackle',
        damage: 10
    },
    {
        name: 'Supersonic',
        damage: 15
    }
]

let eeveeSkill = [
    {
        name: 'Tackle',
        damage: 10
    },
    {
        name: 'Double Kick',
        damage: 15
    }
]


const pikachu = new Pokemon('Pikachu', 200, 200, pikachuSkill, 5, 'css/images/pokemon/pikachu.png')
const charmander = new Pokemon('Charmander', 150, 150, charmanderSkill, 5, 'css/images/pokemon/charmander.png')
const squirtle = new Pokemon('Squirtle', 150, 150, squirtleSkill, 5, 'css/images/pokemon/squirtle.png')
const bulbasaur = new Pokemon('Bulbasaur', 150, 150, bulbasaurSkill, 5, 'css/images/pokemon/bulbasaur.png')

const ratata = new Pokemon('Ratata', 60, 60, ratataSkill, 5, 'css/images/pokemon/ratata.png')
const caterpie = new Pokemon('Caterpie', 60, 60, caterpieSkill, 5, 'css/images/pokemon/caterpie.png')
const pidgey = new Pokemon('Pidgey', 60, 60, pidgeySkill, 5, 'css/images/pokemon/pidgey.png')
const weedle = new Pokemon('Weedle', 60, 60, weedleSkill, 5, 'css/images/pokemon/weedle.png')
const spearow = new Pokemon('Spearow', 75, 75, spearowSkill, 5, 'css/images/pokemon/spearow.png')
const ekans = new Pokemon('Ekans', 100, 100, ekansSkill, 5, 'css/images/pokemon/ekans.png')
const sandshrew = new Pokemon('Sandshrew', 75, 75, sandshrewSkill, 5, 'css/images/pokemon/sandshrew.png')
const nidoran = new Pokemon('Nidoran', 75, 75, nidoranSkill, 5, 'css/images/pokemon/nidoran.png')
const geodude = new Pokemon('Geodude', 100, 100, geodudeSkill, 5, 'css/images/pokemon/geodude.png')
const zubat = new Pokemon('Zubat', 100, 100, zubatSkill, 5, 'css/images/pokemon/zubat.png')
const koffing = new Pokemon('Koffing', 100, 100, koffingSkill, 5, 'css/images/pokemon/koffing.png')
const diglett = new Pokemon('Diglett', 100, 100, diglettSkill, 5, 'css/images/pokemon/diglett.png')
const meowth = new Pokemon('Meowth', 120, 120, meowthSkill, 5, 'css/images/pokemon/meowth.png')
const magikarp = new Pokemon('Magikarp', 40, 40, magikarpSkill, 5, 'css/images/pokemon/magikarp.png')
const krabby = new Pokemon('Krabby', 80, 80, krabbySkill, 5, 'css/images/pokemon/krabby.png')
const poliwag = new Pokemon('Poliwag', 80, 80, poliwagSkill, 5, 'css/images/pokemon/poliwag.png')
const oddish = new Pokemon('Oddish', 90, 90, oddishSkill, 5, 'css/images/pokemon/oddish.png')
const paras = new Pokemon('Paras', 90, 90, parasSkill, 5, 'css/images/pokemon/paras.png')
const venonat = new Pokemon('Venonat', 90, 90, venonatSkill, 5, 'css/images/pokemon/venonat.png')
const eevee = new Pokemon('Eevee', 10, 10, eeveeSkill, 5, 'css/images/pokemon/eevee.png')

randomPokemon1.push(caterpie, ratata, pidgey, weedle) // meadow poke
randomPokemon2.push(spearow, sandshrew, nidoran) // forest poke
randomPokemon3.push(magikarp ,krabby, poliwag) // beach poke
randomPokemon4.push(oddish, paras, venonat) // deep forest poke
randomPokemon5.push(geodude, diglett, zubat) // cave poke


rivalPokemonList.push(ratata, caterpie)
trainer1PokemonList.push(magikarp, krabby, poliwag)
trainer2PokemonList.push(oddish, paras, venonat)
trainer3PokemonList.push(geodude,diglett, zubat)

teamRocket1PokemonList.push(koffing, ekans)
teamRocket2PokemonList.push(koffing, ekans, meowth)
