class People {
    constructor(name, gender, pokemonList, backgroundImg){
        this.name = name;
        this.gender = gender;
        this.pokemonList = pokemonList;
        this.backgroundImg = backgroundImg
    }
}

const player = new People('Player', 'Male', userPokemonList)

console.log(player)


const gary = new People('Gary', 'Male', garyPokemonList, 'css/images/pokemon/pokemon_trainer_1.jpg')
console.log(gary)


