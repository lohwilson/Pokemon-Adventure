

class People {
    constructor(name, gender, pokemonList, backgroundImg){
        this.name = name;
        this.gender = gender;
        this.pokemonList = pokemonList;
        this.backgroundImg = backgroundImg
    }
}

const player = new People('Player', 'Male', userPokemonList, 'css/images/trainer/male_player.png')

const rival = new People('Gary', 'Male', rivalPokemonList, 'css/images/pokemon/pokemon_trainer_1.jpg')
const trainer1 = new People('Team Rocket Grunt', 'Male', trainer1PokemonList, 'css/images/trainer/teamrocketgrunt.jpg')
const trainer2 = new People('Team Rocket Grunt', 'Male', trainer2PokemonList, 'css/images/trainer/teamrocketgrunt.jpg')
const trainer3 = new People('Team Rocket Grunt', 'Male', trainer3PokemonList, 'css/images/trainer/teamrocketgrunt.jpg')

const teamRocket1 = new People('Team Rocket', 'Male', teamRocket1PokemonList, 'css/images/pokemon/team_rocket.jpg')
const teamRocket2 = new People('Team Rocket', 'Male', teamRocket2PokemonList, 'css/images/pokemon/team_rocket.jpg')

