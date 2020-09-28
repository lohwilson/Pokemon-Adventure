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

    // create pages array with page classes
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
        battle()
        callAlerts()
    })

    const alerts = {
        beginJourney: console.log('Your Pokemon Adventure Begins'),
    }

    function callAlerts () {
        return alerts.beginJourney
    }



    // alert('Welcome to Professor Oak\'s lab')


    // this should lead to the choose pokemon page
    function choosePokemon(){
        $mainPage.addClass('choosePokemon')
    }


    function choosePokemonButtons(){
        let $button = $('button')

        for (let i = 0; i < choosePokemonArray.length; i++){
            let number = i+1
            let $button = $('<button>').addClass(choosePokemonArray[i]).addClass('choosePokemonButton').text('Pokeball '+ number)
            $('.choosePokemon').append($button)
        }

        // click button should push chosen pokemon to userpokemonlist
        $('.choosePokemonButton').on('click', (event)=>{
            console.log($(event.eventListener))
            console.log()
        })  
        
        if ($button.text === 'Pokeball 1'){
            userPokemonList.push(charmander)
        }
    }
    userPokemonList.push(squirtle)

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

        let $enemyInfoDisplay = $('.enemyInfoDisplay')
        $enemyInfoDisplay.css('background-image', 'url(../css/images/pokemon/pikachu.jpg);')

        let $enemyPicture = $('.enemyPicture')
        $enemyPicture.css('background-image', '../css/images/pokemon/team_rocket.jpg')

        let $userPicture = $('.userPicture')
        $userPicture.css('background-image', 'url(images/pokemon/pikachu.jpg)')

        let $userInfoDisplay = $('.userInfoDisplay')
        $userInfoDisplay.css('background-image', 'url(../css/images/pokemon/pikachu.jpg);')
    }


//     class Battle {
//         constructor(enemyInfoDisplay,enemyPicture,userPicture,userInfoDisplay){
//             this.enemyInfoDisplay = enemyInfoDisplay;
//             this.enemyPicture = enemyPicture;
//             this.userPicture = userPicture;
//             this.userInfoDisplay = userInfoDisplay
//         }
//     }

//     let a = 'enemy display'
//     let b = '../css/images/pokemon/team_rocket.jpg'
//     let c = '../css/images/pokemon/pikachu.jpg'
//     let d = '../css/images/pokemon/pikachu.jpg'

//     let pokeBattle = new Battle(a,b,c,d)

//     pokeBattle.set = () => {
//         let $enemyInfoDisplay = $('.enemyInfoDisplay')
//         $enemyInfoDisplay.css('background-img', pokeBattle.enemyInfoDisplay)

//         let $enemyPicture = $('.enemyPicture')
//         $enemyPicture.css('background-img', pokeBattle.enemyPicture)

//         let $userPicture = $('.userPicture')
//         $userPicture.css('background-img', pokeBattle.userPicture)

//         let $userInfoDisplay = $('.userInfoDisplay')
//         $userInfoDisplay.css('background-img', pokeBattle.userInfoDisplay)
//     }



})












// class Scenes {
//     constructor(){

//     }
// }

// class mainPage extends Scenes {

// }

// class choosePokemon extends Scenes {

// }



// const handlers = {

// }

// const background = {

// }



