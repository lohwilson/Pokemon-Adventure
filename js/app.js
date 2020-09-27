console.log('hello world')

let pages = ['mainPage', '2ndPage', '3rdPage', '4thPage']
let pagesArray = []

let battleCommands = ['fight', 'item', 'changePokemon', 'run']
let battleCommandsButton = ['fightButton', 'itemButton', 'changePokemonButton', 'runButton']
let battleButtonsArray = []
let battleContainerArray = ['enemyInfoDisplay', 'enemyPicture', 'userPicture', 'userInfoDisplay', 'alertBox', 'battleCommandsDisplay']

let choosePokemonArray = ['charmander', 'squirtle', 'bulbasaur']
let userPokemonList = []

$(()=>{
    let $layout = $('#layout')
    let $mainPage = $('<div>').addClass('mainPage')
    $layout.append($mainPage)

    // create pages array with specific page classes
    for (let i = 0; i < pages.length; i++){
        let $page = $('<div>').addClass(pages[i])
        pagesArray.push($page)
    }

    // create start game button
    let $mainPageButton = $('<button>').addClass('mainPageButton').text('Start Game')
    $mainPage.append($mainPageButton)

    // create battle buttons 
    for (let i = 0; i < battleCommands.length; i++){
        let $buttons = $('<button>').addClass(battleCommandsButton[i]).text(battleCommands[i].toUpperCase())
        battleButtonsArray.push($buttons)
    }

    // click event listener on main page button
    $mainPageButton.on('click', ()=>{
        $mainPage.removeClass()
        $mainPageButton.remove()
        choosePokemon()
    })

    // this should lead to the choose pokemon page
    function choosePokemon(){
        $mainPage.addClass('choosePokemon')
         
        for (let i = 0; i < choosePokemonArray.length; i++){
            let number = i+1
            let $button = $('<button>').addClass(choosePokemonArray[i]).text('Pokeball '+ number)
            $('.choosePokemon').append($button)
        }
    }

    // this should lead to the battle page
    function battle(){
        $mainPage.addClass('battle')

        for (let i = 0; i < battleContainerArray.length; i++){
            let $display = $('<div>').addClass(battleContainerArray[i])
            $('.battle').append($display)
        }

        for (let i = 0; i < battleButtonsArray.length; i++){
            $('.battleCommandsDisplay').append(battleButtonsArray[i])
        }
    }

})

class Scenes {
    constructor(){

    }
}

class mainPage extends Scenes {

}

class choosePokemon extends Scenes {

}

class Battle {
    constructor(enemyDisplay,yourDisplay,background,){
        this.enemyDisplay = enemyDisplay;
        this.yourDisplay = yourDisplay;
        this.background = background;
    }
}

const handlers = {

}

const background = {

}



