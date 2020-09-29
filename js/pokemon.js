
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



let pikachuSkill = [{
    QuickAttack: 5, 
    Thundershock: 10,
}]

let charmanderSkill = [{
    Scratch: 5, 
    Ember: 10,
}]

let squirtleSkill = [{
    Scratch: 5, 
    Bubble: 10,
}]

let bulbasaurSkill = [{
    Tackle: 5, 
    LeechSeed: 10,
}]

let caterpieSkill = [{
    Tackle: 5, 
    LeechSeed: 10,
}]

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
console.log(pikachu)
const charmander = new Pokemon('charmander', '100', charmanderSkill, 5)
console.log(charmander)
const squirtle = new Pokemon('squirtle', '100', squirtleSkill, 5, 'css/images/pokemon/squirtle.png')
console.log(squirtle)
const bulbasaur = new Pokemon('bulbasaur', '100', bulbasaurSkill, 5, 'css/images/pokemon/bulbasaur.png')
console.log(bulbasaur)

const ratata = new Pokemon('Ratata', '100', ratataSkill, 5, 'css/images/pokemon/ratata.jpg')