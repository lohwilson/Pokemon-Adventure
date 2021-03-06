console.log('hello world')

let pages = ['mainPage', '2ndPage', '3rdPage', '4thPage']
let pagesArray = []

let choosePokemonArray = ['charmander', 'squirtle', 'bulbasaur']
let choosePokemonText = ['my name is charmander', 'my name is squirtle', 'my name is bulbasaur']

let mainTownButtons = ['pokeCentre', 'training', 'shop', 'gym']
let mainTownText = ['Pokemon Centre', 'Training Grounds', 'Shop', 'Gym']

let battleCommands = ['fight', 'item', 'changePokemon', 'run']
let battleCommandsButton = ['fightButton', 'itemButton', 'changePokemonButton', 'runButton']
let battleButtonsArray = []
let battleContainerArray = ['enemyInfoDisplay', 'enemyPicture', 'userPicture', 'userInfoDisplay', 'alertBox', 'battleCommandsDisplay']

let userPokemonList = []
let enemyPokemonList = []

let userBattlePokemon = []
let enemyBattlePokemon = []

$(()=>{

    let $layout = $('#layout')

    ////////////////////////////////////        PAGES       //////////////////////////////////////////
    let $mainPage = $('<div>').addClass('mainPage')
    $layout.append($mainPage)
    $mainPage.hide()
    let $2ndPage = $('<div>').addClass('2ndPage')
    $layout.append($2ndPage)
    $2ndPage.hide()
    let $3rdPage = $('<div>').addClass('3rdPage')
    $layout.append($3rdPage)
    $3rdPage.hide()
    let $4thPage = $('<div>').addClass('4thPage')
    $layout.append($4thPage)
    $4thPage.hide()

    let $choosePokemonPage = $('<div>').addClass('choosePokemonPage')
    $layout.append($choosePokemonPage)
    $choosePokemonPage.hide()
    let $mainTown = $('<div>').addClass('mainTown')
    $layout.append($mainTown)
    $mainTown.hide()
    let $battle = $('<div>').addClass('battle')
    $layout.append($battle)
    $battle.hide()
    let $pokeCentre = $('<div>').addClass('pokeCentre')
    $layout.append($pokeCentre)
    $pokeCentre.hide()



    // create pages array with page classes
    // for (let i = 0; i < pages.length; i++){
    //     let $page = $('<div>').addClass(pages[i])
    //     pagesArray.push($page)
    //     $layout.append($page)
    //     $page.hide()
    // }

    // let $mainPage = ('.mainPage')
    // $($mainPage).show()


    //////////////////////////////////////////      PAGES       ///////////////////////////////////////

    //////////////////////////////          CREATE BUTTONS              ////////////////////////////////










































    //////////////////////////////          CREATE BUTTONS              ////////////////////////////////
    // create start game button
    $mainPage.show()
    let $mainPageButton = $('<button>').addClass('mainPageButton').text('Start Game')
    $mainPage.append($mainPageButton)

    // create battle buttons 
    for (let i = 0; i < battleCommands.length; i++){
        let $buttons = $('<button>').addClass(battleCommandsButton[i]).text(battleCommands[i].toUpperCase())
        battleButtonsArray.push($buttons)
    }

    // click event listener on main page button
    $mainPageButton.on('click', ()=>{
        $mainPage.hide()
        alerts.beginJourney()
        choosePokemonPage()
    })

    const alerts = {
        beginJourney: ()=>{
            alert('Your Pokemon Adventure Begins')
        }
    }

    // const choosePokemonPage = {

    // }

    // this should lead to the choose pokemon page
    function choosePokemonPage(){
        $choosePokemonPage.show()

        $professorOak = $('<div>').addClass('professorOak')
        $choosePokemonPage.append($professorOak)

        // try to set to open modal

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
            $choosePokemonPage.append($button)
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
        $choosePokemonPage.hide()
        mainTown()
    }

    // maintown function
    function mainTown(){
        $mainTown.show()

        for (let i = 0; i < mainTownButtons.length; i++){
            let $mainTownButton = $('<button>').addClass(mainTownButtons[i]).text(mainTownText[i])
            $mainTown.append($mainTownButton)
        }

        $training = $('.training')
        $pokeCentre = $('pokeCentre')
        $shop = $('.shop')
        $gtm = $('.gym')

        $training.on('click', ()=>{
            $mainTown.hide()
            battle()
        })
    }

    function goToPokeCentre(){

    }

    function leavePage(){

    }

    // const battleButtons = {
        
    //     setBattleOptions: ()=>{
    //         for (let i = 0; i < battleButtonsArray.length; i++){
    //             $('.battleCommandsDisplay').append(battleButtonsArray[i])
    //         }
    //     },

    //     setAlertButton: ()=>{
    //         let $alertBoxButton = $('<button>').addClass('alertBoxButton').text('Next')
    //         $('.alertBox').append($alertBoxButton)
    //     },

    // }

    // let enemyName = gary.name
    // let enemyPokemonList = garyPokemonList

    let battleOpponent = []
    battleOpponent.push(gary)

    // this should lead to the battle page

    function battle(){
        // $('.mainTown').removeClass()
        // $('.practise').remove()
        // $mainTown.addClass('battle')
        $battle.show()

        let enemyName = battleOpponent[0].name
        let enemyPokemonList = battleOpponent[0].pokemonList

        // create battle containers
        for (let i = 0; i < battleContainerArray.length; i++){
            let $display = $('<div>').addClass(battleContainerArray[i])
            $('.battle').append($display)
        }

        // create battle buttons
        for (let i = 0; i < battleButtonsArray.length; i++){
            $('.battleCommandsDisplay').append(battleButtonsArray[i])
        }
        hideBattleButtons()


        //setting jquery variables
        let $enemyInfoDisplay = $('.enemyInfoDisplay')
        let $enemyPicture = $('.enemyPicture')
        let $userPicture = $('.userPicture')
        let $userInfoDisplay = $('.userInfoDisplay')
        let $alertBox = $('.alertBox')
        let $fightButton = $('.fightButton')
        let $itemButton = $('.itemButton')
        let $changePokemonButton = $('.changePokemonButton')
        let $runButton = $('.runButton')

        // choose the current pokemon for battle for both user and enemy
        userBattlePokemon.push(userPokemonList[0])
        enemyBattlePokemon.push(enemyPokemonList[0])
        enemyPokemonList.shift()
        console.log(enemyPokemonList)

        let userFullHealth = userBattlePokemon[0].health
        let userCurrentHealth = userBattlePokemon[0].health
        let enemyFullHealth = enemyBattlePokemon[0].health
        let enemyCurrentHealth = enemyBattlePokemon[0].health

        // split user display to 2 rows to show level and name on top and HP at the bottom
        for (let i = 0; i < 2; i++){
            $splitDisplay = $('<div>').addClass('splitDisplay').attr('id', 'userDisplay'+i)
            $userInfoDisplay.append($splitDisplay)
        }
        // split enemy display to 2 rows to show level and name on top and HP at the bottom
        for (let i = 0; i < 2; i++){
            $splitDisplay = $('<div>').addClass('splitDisplay').attr('id', 'enemyDisplay'+i)
            $enemyInfoDisplay.append($splitDisplay)
        }
        
        // let $alertBoxButton = $('<button>').addClass('alertBoxButton').text('Next')
        // $('.alertBox').append($alertBoxButton)

        let $alertButton = $('<button>').addClass('alertButton').text('Next')
        $('.battle').append($alertButton)

        // function updateAlertBox(){
        //     $alertBoxButton.on('click', (alertText)=>{
        //         return alertText
        //     })
        // }

        // create skill buttons
        let userPokemonSkillsArray = Object.keys(userBattlePokemon[0].skills)
        for (let i = 0; i < userPokemonSkillsArray.length; i++){
            $pokemonSkill = $('<button>').attr('id', 'skill'+i)
            $pokemonSkill.text(userBattlePokemon[0].skills[i].name)
            $('.battleCommandsDisplay').append($pokemonSkill)
        }
        hideSkillButtons()

////////////////////////////////    FUNCTIONS    ////////////////////////////////////

        function displayUserInfo(){
            $('#userDisplay0').text('Level '+ userBattlePokemon[0].level + ' ' + userBattlePokemon[0].name)
            $('#userDisplay1').text('Health Points: '+ userCurrentHealth + ' / ' + userFullHealth)
            $userPicture.css('background-image', `url(${userBattlePokemon[0].image})`)
        }
        function displayEnemyInfo(){
            $('#enemyDisplay0').text('Level '+ enemyBattlePokemon[0].level + ' ' + enemyBattlePokemon[0].name)
            $('#enemyDisplay1').text('Health Points: '+ enemyCurrentHealth + ' / ' + enemyFullHealth)
            $enemyPicture.css('background-image', `url(${enemyBattlePokemon[0].image})`)
        }
        displayUserInfo()
        displayEnemyInfo()

        // display image for user pokemon, need to add function to change image when pokemon changes

        function updateUserHealth () {
            $('#userDisplay1').text('Health Points: '+ userCurrentHealth + ' / ' + userFullHealth)
            console.log(userBattlePokemon[0].name + ' has ' + userCurrentHealth + ' hitpoints left.')
        }

        function updateEnemyHealth () {
            $('#enemyDisplay1').text('Health Points: '+ enemyCurrentHealth + ' / ' + enemyFullHealth)
            console.log(enemyBattlePokemon[0].name + ' has ' + enemyCurrentHealth + ' hitpoints left.')
        }

        // enemy attack function 
        function enemyAttack() {
            let enemyPokemonSkillsArray = Object.keys(enemyBattlePokemon[0].skills)
            random = Math.floor(Math.random()*enemyPokemonSkillsArray.length)
            userCurrentHealth = userCurrentHealth - enemyBattlePokemon[0].skills[random].damage
            if (userCurrentHealth <= 0){
                userCurrentHealth = 0;
            }
            updateUserHealth()
            checkPokemonHealth()
        }

        function checkPokemonHealth(){
            // debugger;
            if (userCurrentHealth > 0 && enemyCurrentHealth > 0){
                showBattleButtons()
            } else if (userCurrentHealth <= 0){
                $alertBox.text(userBattlePokemon[0].name + ' has fainted.')
                checkUserPokemonAvailability()
            } else if (enemyCurrentHealth <= 0){
                $alertBox.text(enemyBattlePokemon[0].name + ' has fainted.')
                $alertButton.on('click', ()=>{
                    checkEnemyPokemonAvailability()
                })
            }
        }

        function moveUserDeadPokemon(){
            userPokemonList.push(userBattlePokemon)
            userBattlePokemon.pop()
        }
        
        function moveEnemyDeadPokemon(){
            enemyPokemonList.push(enemyBattlePokemon)
            enemyBattlePokemon.pop()
        }

        function checkUserPokemonAvailability(){
            // debugger;
            if (userPokemonList.length === 0){
                $alertBox.text('You have no pokemon left!')
                goToPokeCentre()
            } else {
                $alertBox.text('Please choose a new Pokemon.')
            }
        }

        function checkEnemyPokemonAvailability(){
            // debugger;
            if (enemyPokemonList.length === 0){
                $alertBox.text(enemyName + ' has no pokemon left!')
                winBattle()
            } else {
                enemyBattlePokemon.pop()
                enemyBattlePokemon.push(enemyPokemonList[0])
                enemyChooseNewPokemon()
            }
        }

        function userChooseNewPokemon(){

        }

        function enemyChooseNewPokemon(){
            // debugger;
            console.log(enemyBattlePokemon)
            $alertBox.text('Gary chose ' + enemyBattlePokemon[0].name)
            displayEnemyInfo()
        }
        
        function winBattle(){
            $alertBox.text(enemyName + ' has no pokemon left!')
        }

        
        function hideBattleButtons (){
            $('.fightButton').hide()
            $('.itemButton').hide()
            $('.changePokemonButton').hide()
            $('.runButton').hide()
        }
        function showBattleButtons (){
            $('.fightButton').show()
            $('.itemButton').show()
            $('.changePokemonButton').show()
            $('.runButton').show()
        }

        function hideSkillButtons (){
            $('#skill0').hide()
            $('#skill1').hide()
            $('#skill2').hide()
            $('#skill3').hide()
        }

        function showSkillButtons (){
            $('#skill0').show()
            $('#skill1').show()
            $('#skill2').show()
            $('#skill3').show()
        }

//////////////////////////////////      FUNCTIONS       ///////////////////////////////////////

        $alertBox.text(enemyName + ' would like to battle')

        $alertButton.on('click', ()=>{
            $alertBox.text(enemyName + ' chooses ' + enemyBattlePokemon[0].name)
            showBattleButtons()
        })



        $fightButton.on('click', ()=>{
            console.log('fight')
            // $('.battleCommandsDisplay').empty()
            hideBattleButtons()
            showSkillButtons()

            for (let i = 0; i < userPokemonSkillsArray.length; i++){
                $('#skill'+i).on('click', ()=>{
                    enemyCurrentHealth = enemyCurrentHealth - userBattlePokemon[0].skills[i].damage
                    if (enemyCurrentHealth <= 0){
                        enemyCurrentHealth = 0;
                    }
                    updateEnemyHealth()
                    checkPokemonHealth()
                    hideSkillButtons()
                    setTimeout(enemyAttack(), 2000)
                })
            }
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



