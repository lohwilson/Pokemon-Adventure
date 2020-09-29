console.log('hello world')

let pages = ['mainPage', '2ndPage', '3rdPage', '4thPage']
let pagesArray = []

let battleCommands = ['fight', 'item', 'changePokemon', 'run']
let battleCommandsButton = ['fightButton', 'itemButton', 'changePokemonButton', 'runButton']
let battleButtonsArray = []
let battleContainerArray = ['enemyInfoDisplay', 'enemyPicture', 'userPicture', 'userInfoDisplay', 'alertBox', 'battleCommandsDisplay']

let choosePokemonArray = ['charmander', 'squirtle', 'bulbasaur']
let choosePokemonText = ['my name is charmander', 'my name is squirtle', 'my name is bulbasaur']

let userPokemonList = []

let userBattlePokemon = []
let enemyBattlePokemon = []

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

        $professorOak.one('click', ()=>{
            // alert('Hello there, '+ name + '. My name is Professor Oak. Welcome to my lab')
            // alert('You look very excited to begin your journey, so i\'ll get right to it.')
            // alert('I have been a pokemon researcher for many years, and while researching about pokemon, I do have my own collection.')
            // alert('So, alas, it is your lucky day! I have prepared 3 special pokemon for you.')
            // alert('Each of them have unique talents which will be essential for your journey as a new Pokemon adventurer.')
            // alert('Please take your time to choose, but remember, the adventure is waiting for you out there')
            choosePokemonButtons()
        })


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

        for (let i = 0; i < choosePokemonArray.length; i++){
            let number = i+1
            let $button = $('<button>').addClass(choosePokemonArray[i]).addClass('choosePokemonButton').text('Pokeball '+ number)
            $('.choosePokemon').append($button)
        }

        // let $modal = $('<div>').attr('id', choosePokemonArray[i]+'Modal').text(choosePokemonText[i])
        // $modal.css('background-image', 'url(css/images/pokemon/pikachu.jpg)').css('opacity', 0.5)
        // $(choosePokemonArray[i]).append($modal)

        // click button should push chosen pokemon to userpokemonlist
        $('.choosePokemonButton').on('click', (event)=>{
            if (event.currentTarget.classList[0] === 'charmander'){
                console.log('i got charmander')
                userPokemonList.push(charmander)
                console.log(userPokemonList)
            } else if (event.currentTarget.classList[0] === 'squirtle'){
                console.log('i got squirtle')
                userPokemonList.push(squirtle)
                console.log(userPokemonList)
            } else if (event.currentTarget.classList[0] === 'bulbasaur'){
                console.log('i got bulbasaur')
                userPokemonList.push(bulbasaur)
                console.log(userPokemonList)
            }
            newJourneyBegins()
        })  
    }

    // this should leave the choosing pokemon page, and run maintown function
    function newJourneyBegins(){
        $('.choosePokemon').remove()
        mainTown()
    }

    // maintown function
    function mainTown(){
        $mainTown = $('<div>').addClass('mainTown')
        $layout.append($mainTown)

        $practise = $('<button>').addClass('practise').text('Practise')
        $mainTown.append($practise)

        $practise.on('click', ()=>{
            battle()
        })
    }

    function leavePage(){
    }

    // this should lead to the battle page
    function battle(){
        $('.mainTown').removeClass()
        $('.practise').remove()
        $mainTown.addClass('battle')

        for (let i = 0; i < battleContainerArray.length; i++){
            let $display = $('<div>').addClass(battleContainerArray[i])
            $('.battle').append($display)
        }

        for (let i = 0; i < battleButtonsArray.length; i++){
            $('.battleCommandsDisplay').append(battleButtonsArray[i])
        }

        // should display enemybattlepokemon[0].health
        let $enemyInfoDisplay = $('.enemyInfoDisplay')
        $enemyInfoDisplay.css('background-image', 'url(css/images/pokemon/pikachu.jpg)')

        // should display enemybattlepokemon[0]
        let $enemyPicture = $('.enemyPicture')
        $enemyPicture.css('background-image', 'url(js/team-rocket.900x.jpg)')

        // should display userbattlepokemon[0]
        let $userPicture = $('.userPicture')
        // $userPicture.css('background-image', 'url(js/team-rocket.900x.jpg)')

        //should display userbattlepokemon[0].health
        let $userInfoDisplay = $('.userInfoDisplay')
        // $userInfoDisplay.css('background-image', 'url(js/team-rocket.900x.jpg)')

        // on click, should display userbattlepokemon[0].skills 
        let $fightButton = $('.fightButton')


        // choose the current pokemon for battle for both user and enemy
        userBattlePokemon.push(userPokemonList[0])
        enemyBattlePokemon.push(ratata)

        // split user display to 2 rows to show level and name on top and HP at the bottom
        for (let i = 0; i < 2; i++){
            $splitDisplay = $('<div>').addClass('splitDisplay').attr('id', 'userDisplay'+i)
            $userInfoDisplay.append($splitDisplay)
        }
        $('#userDisplay0').text('Level '+ userBattlePokemon[0].level + ' ' + userBattlePokemon[0].name)
        $('#userDisplay1').text('Health Points: '+ userBattlePokemon[0].health)

        // split enemy display to 2 rows to show level and name on top and HP at the bottom
        for (let i = 0; i < 2; i++){
            $splitDisplay = $('<div>').addClass('splitDisplay').attr('id', 'enemyDisplay'+i)
            $enemyInfoDisplay.append($splitDisplay)
        }
        $('#enemyDisplay0').text('Level '+ enemyBattlePokemon[0].level + ' ' + enemyBattlePokemon[0].name)
        $('#enemyDisplay1').text('Health Points: '+ enemyBattlePokemon[0].health)

        // display image for user pokemon, need to add function to change image when pokemon changes
        $enemyPicture.css('background-image', `url(${enemyBattlePokemon[0].image})`)
        $userPicture.css('background-image', `url(${userBattlePokemon[0].image})`)

        // onclick skill should display the skill list of current pokemon

        userBattlePokemon[0].skills

        $fightButton.on('click', (event)=>{
            console.log('fight')
            // console.log($(event.eventListener))
            // console.log(userBattlePokemon[0].skills)
            // console.log(userBattlePokemon[0].skills[0])
            // console.log(Object.keys(userBattlePokemon[0].skills[0]))
            // console.log(Object.keys(userBattlePokemon[0].skills[0])[0])
            // console.log(Object.keys(userBattlePokemon[0].skills[0])[1])

            $('.battleCommandsDisplay').empty()
            $div1 = $('<div>').addClass(Object.keys(userBattlePokemon[0].skills[0])[0]).text(Object.keys(userBattlePokemon[0].skills[0])[0])
            $('.battleCommandsDisplay').append($div1)
            $div2 = $('<div>').addClass(Object.keys(userBattlePokemon[0].skills[0])[1]).text(Object.keys(userBattlePokemon[0].skills[0])[1])
            $('.battleCommandsDisplay').append($div2)
            $div3 = $('<div>').addClass(Object.keys(userBattlePokemon[0].skills[0])[2]).text(Object.keys(userBattlePokemon[0].skills[0])[2])
            $('.battleCommandsDisplay').append($div3)
            $div4 = $('<div>').addClass(Object.keys(userBattlePokemon[0].skills[0])[3]).text(Object.keys(userBattlePokemon[0].skills[0])[3])
            $('.battleCommandsDisplay').append($div4)


            // this loop function text has an error
            
            // for (let i = 0; i < 4; i++){
            //     console.log(Object.keys(userBattlePokemon[0].skills[0])[i])
            //     console.log(typeof Object.keys(userBattlePokemon[0].skills[0])[i])

            //     $pokemonSkill = $('<div>').attr('skill'+i).text(`${Object.keys(userBattlePokemon[0].skills[0])[i]}`)
            //     $('.battleCommandsDisplay').append($pokemonSkill)
            // }

        })


        // let $itemButton = $('.itemButton')
        // $itemButton.on('click', (event)=>{
        //     console.log('item')
        //     console.log($(event.eventListener))
        // })

        // let $changePokemonButton = $('.changePokemonButton')
        // $changePokemonButton.on('click', (event)=>{
        //     console.log('change')
        //     console.log($(event.eventListener))
        // })

        // let $runButton = $('.runButton')
        // $runButton.on('click', (event)=>{
        //     console.log('run')
        //     console.log($(event.eventListener))
        // })
    }

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



