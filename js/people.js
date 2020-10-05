class People {
    constructor(name, gender, pokemonList, backgroundImg){
        this.name = name;
        this.gender = gender;
        this.pokemonList = pokemonList;
        this.backgroundImg = backgroundImg
    }
}

const player = new People('Player', 'Male', userPokemonList, 'css/images/trainer/female_player.jpg')

console.log(player)


const rival = new People('Gary', 'Male', rivalPokemonList, 'css/images/pokemon/pokemon_trainer_1.jpg')
const trainer1 = new People('Beginner Trainer', 'Male', trainer1PokemonList, 'css/images/trainer/male_player.png')
const trainer2 = new People('Proud Trainer', 'Male', trainer2PokemonList, 'css/images/pokemon/pokemon_trainer_1.jpg')
const trainer3 = new People('Skilled Trainer', 'Male', trainer3PokemonList, 'css/images/pokemon/pokemon_trainer_1.jpg')
const trainer4 = new People('Trainer 4', 'Male', trainer4PokemonList, 'css/images/pokemon/pokemon_trainer_1.jpg')
const trainer5 = new People('Trainer 5', 'Male', trainer5PokemonList, 'css/images/pokemon/pokemon_trainer_1.jpg')
const trainer6 = new People('Trainer 6', 'Male', trainer6PokemonList, 'css/images/pokemon/pokemon_trainer_1.jpg')
const trainer7 = new People('Trainer 7', 'Male', trainer7PokemonList, 'css/images/pokemon/pokemon_trainer_1.jpg')
const trainer8 = new People('Trainer 8', 'Male', trainer8PokemonList, 'css/images/pokemon/pokemon_trainer_1.jpg')

const teamRocket1 = new People('Team Rocket', 'Male', teamRocket1PokemonList, 'css/images/pokemon/team_rocket.jpg')
const teamRocket2 = new People('Team Rocket', 'Male', teamRocket2PokemonList, 'css/images/pokemon/team_rocket.jpg')


function battleGary (){
    battleOpponent.push(rival)
}

function battleTrainer1(){
    //location.hide()
    battleOpponent.push(trainer1)
    battle()
}

function battleTrainer2(){
        //location.hide()
    battleOpponent.push(trainer2)
    battle()
}

function battleTrainer3(){
        //location.hide()
    battleOpponent.push(trainer3)
    battle()
}

function battleTrainer4(){
        //location.hide()
    battleOpponent.push(trainer4)
    battle()
}

function battleTrainer5(){
    battleOpponent.push(trainer5)
}

function battleTrainer6(){
    battleOpponent.push(trainer6)
}

function battleTeamRocket1(){
    //location.hide()
    battleOpponent.push(teamRocket1)
    battle()
}
function battleTeamRocket2(){
    //location.hide()
    battleOpponent.push(teamRocket1)
    battle()
}