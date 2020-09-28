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
        choosePokemon()
    })

    const alerts = {
        beginJourney: console.log('Your Pokemon Adventure Begins'),
    }

    function callAlerts () {
        return alerts.beginJourney
    }

    function showAlert(){
        alert('Welcome to Professor Oak\'s lab')
        alert('You will begin your journey')
    }

    // this should lead to the choose pokemon page
    function choosePokemon(){
        $mainPage.addClass('choosePokemon')

        $professorOak = $('<div>').addClass('professorOak')
        $('.choosePokemon').append($professorOak)
        // setTimeout(showAlert(), 10000)

        // alert('Welcome to Professor Oak\'s lab')
        // alert('You will begin your journey')
        // let input = prompt('Are you ready?')
        // if(input.toLowerCase() === 'yes'){
        //     alert('Let\'s begin')
        // } else if (input == null || input == ""){
        //     alert('No one is born ready! let\'s go')
        // } else {
        //     alert('No one is born ready! let\'s go')
        // }
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
        $enemyInfoDisplay.css('background-image', 'url(css/images/pokemon/pikachu.jpg)')

        let $enemyPicture = $('.enemyPicture')
        $enemyPicture.css('background-image', 'url(js/team-rocket.900x.jpg)')

        let $userPicture = $('.userPicture')
        $userPicture.css('background-image', 'url(js/team-rocket.900x.jpg)')

        let $userInfoDisplay = $('.userInfoDisplay')
        $userInfoDisplay.css('background-image', 'url(js/team-rocket.900x.jpg)')

        let $fightButton = $('.fightButton')
        $fightButton.on('click', (event)=>{
            console.log('fight')
            console.log($(event.eventListener))
        })

        let $itemButton = $('.itemButton')
        $itemButton.on('click', (event)=>{
            console.log('item')
            console.log($(event.eventListener))
        })

        let $changePokemonButton = $('.changePokemonButton')
        $changePokemonButton.on('click', (event)=>{
            console.log('change')
            console.log($(event.eventListener))
        })

        let $runButton = $('.runButton')
        $runButton.on('click', (event)=>{
            console.log('run')
            console.log($(event.eventListener))
        })
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



