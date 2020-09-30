class People {
    constructor(name, gender, pokemonList){
        this.name = name;
        this.gender = gender;
        this.pokemonList = pokemonList;
    }
}

const player = new People('Player', 'Male', userPokemonList)

console.log(player)


const gary = new People('Gary', 'Male', garyPokemonList)
console.log(gary)