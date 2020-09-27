
let yourPokemon = []
let enemyPokemon = []

class Pokemon {
    constructor(name, health, skills, level){
        this.name = name;
        this.health = health;
        // this.attack = attack;
        // this.defense = defense;
        // this.speed = speed;
        this.skills = skills;
        this.level = level
    }
}

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

const pikachu = new Pokemon('pikachu', '100', pikachuSkill, 5)
console.log(pikachu)
const charmander = new Pokemon('charmander', '100', charmanderSkill, 5)
console.log(charmander)
const squirtle = new Pokemon('squirtle', '100', squirtleSkill, 5)
console.log(squirtle)
const bulbasaur = new Pokemon('bulbasaur', '100', bulbasaurSkill, 5)
console.log(bulbasaur)