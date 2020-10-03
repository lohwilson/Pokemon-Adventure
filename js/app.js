console.log('hello world')

let keyItem = []
let itemList = []

let choosePokemonArray = ['charmander', 'squirtle', 'bulbasaur']
let choosePokemonText = ['my name is charmander', 'my name is squirtle', 'my name is bulbasaur']

let mainTownButtons = ['enterPokeCentre', 'training', 'enterShop', 'gym', 'enterForest', 'enterMeadow']
let mainTownText = ['Pokemon Centre', 'Training Grounds', 'Shop', 'Gym', 'Forest', 'Meadow']

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
    let $meadow = $('<div>').addClass('meadow')
    $layout.append($meadow)
    $meadow.hide()
    let $forest = $('<div>').addClass('forest')
    $layout.append($forest)
    $forest.hide()
    let $beach = $('<div>').addClass('beach')
    $layout.append($beach)
    $beach.hide()
    let $deepForest = $('<div>').addClass('deepForest')
    $layout.append($deepForest)
    $deepForest.hide()
    let $cave = $('<div>').addClass('cave')
    $layout.append($cave)
    $cave.hide()
    let $deepCave = $('<div>').addClass('deepCave')
    $layout.append($deepCave)
    $deepCave.hide()

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

    let $mainPageButton = $('<button>').addClass('mainPageButton').text('Start Game')
    $mainPage.append($mainPageButton)

    let $professorOak1 = $('<div>').addClass('professorOak1')
    $choosePokemonPage.append($professorOak1)
    let $professorOak2 = $('<div>').addClass('professorOak2')
    $choosePokemonPage.append($professorOak2)
    $professorOak2.hide()

    // create battle buttons 
    for (let i = 0; i < battleCommands.length; i++){
        let $buttons = $('<button>').addClass(battleCommandsButton[i]).text(battleCommands[i].toUpperCase())
        battleButtonsArray.push($buttons)
    }


    //////////////////////////////          CREATE BUTTONS              ////////////////////////////////
    // create start game button
    $mainPage.show()
   
    //////////////////////////////////      EVENT LISTENERS         //////////////////////////////////

    // click event listener on main page button
    $mainPageButton.on('click', ()=>{
        $mainPage.hide()
        alerts.beginJourney()
        $choosePokemonPage.show()
    })

    // try to set to open modal

    $professorOak1.on('click', ()=>{
        $professorOak1.hide()
        // alert('Hello there, '+ name + '. My name is Professor Oak. Welcome to my lab')
        // alert('You look very excited to begin your journey, so i\'ll get right to it.')
        // alert('I have been a pokemon researcher for many years, and while researching about pokemon, I do have my own collection.')
        // alert('So, alas, it is your lucky day! I have prepared 3 special pokemon for you.')
        // alert('Each of them have unique talents which will be essential for your journey as a new Pokemon adventurer.')
        // alert('Please take your time to choose, but remember, the adventure is waiting for you out there')
        choosePokemonButtons()
    })

    $professorOak2.on('click', ()=>{
        alert('Please come back when you have the item.')
        newJourneyBegins()
    })

    const alerts = {
        beginJourney: ()=>{
            alert('Your Pokemon Adventure Begins')
        }
    }

    function choosePokemonButtons(){

            // create choose pokemon buttons
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
                alert('You got charmander')
                userPokemonList.push(charmander)
                rivalPokemonList.push(squirtle)
            } else if (event.currentTarget.classList[0] === 'squirtle'){
                alert('You got squirtle')
                userPokemonList.push(squirtle)
                rivalPokemonList.push(bulbasaur)
            } else if (event.currentTarget.classList[0] === 'bulbasaur'){
                alert('You got bulbasaur')
                userPokemonList.push(bulbasaur)
                rivalPokemonList.push(charmander)
            }
            $('.choosePokemonButton').hide()
            $professorOak2.show()
        })  
    }

    // this should leave the choosing pokemon page, and run maintown function
    function newJourneyBegins(){
        $choosePokemonPage.hide()
        enterMeadow()
    }

    function enterMeadow(){
        $meadow.show()

        $townButton = $('<button>').addClass('enterTown').text('Town')
        $meadow.append($townButton)

        $exploreButton = $('<button>').addClass('explore').text('Explore')
        $meadow.append($exploreButton)
        
        $townButton.on('click', ()=>{
            $meadow.hide()
            $mainTown.show()
        })

        $exploreButton.on('click', ()=>{
            $meadow.hide()
            randomEncounter()
            randomBattle()
        })
    }

    function battleGary (){
        battleOpponent.push(rival)
    }

    for (let i = 0; i < mainTownButtons.length; i++){
        let $mainTownButton = $('<button>').addClass(mainTownButtons[i]).text(mainTownText[i])
        $mainTown.append($mainTownButton)
    }

    $training = $('.training')
    $enterPokeCentre = $('.enterPokeCentre')
    $enterShop = $('.enterShop')
    $gym = $('.gym')
    $enterForest = $('.enterForest')
    $enterMeadow = $('.enterMeadow')

    $training.on('click', ()=>{
        $mainTown.hide()
        battleGary()
        console.log(battleOpponent)
        battle()
    })
    $enterShop.on('click', ()=>{
        // $mainTown.hide()
        // $shop.show()
    })
    $enterPokeCentre.on('click', ()=>{
        // $mainTown.hide()
        // $pokeCentre.show()
    })
    $gym.on('click', ()=>{
        alert('The Gym is closed at this moment')
    })
    $enterForest.on('click', ()=>{
        $mainTown.hide()
        $forest.show()
    })
    $enterMeadow.on('click', ()=>{
            $mainTown.hide()
            $meadow.show()
        })
    


    $enterBeach = $('<button>').text('Beach').addClass('enterBeach')
    $forest.append($enterBeach)
    // $enterBeach.hide()
    $enterDeepForest = $('<button>').text('Deep Forest').addClass('enterDeepForest')
    $forest.append($enterDeepForest)
    // $enterDeepForest.hide()

    //need css animation and mouse hover to make it clickable
    $suspiciousTree = $('<div>').addClass('suspiciousTree')
    $forest.append($suspiciousTree)

    $enterMainTown = $('<button>').addClass('enterMainTown').text('Town')
    $forest.append($enterMainTown)
    $enterMainTown.on('click', ()=>{
        $forest.hide()
        $mainTown.show()
    })

    $enterBeach.on('click', ()=>{
        $forest.hide()
        $beach.show()
    })

    $beachButton1 = $('<button>').addClass('enterForest').text('Forest')
    $beach.append($beachButton1)

    $beachButton1.on('click', ()=>{
        $beach.hide()
        $forest.show()
    })

    $enterDeepForest.on('click', ()=>{
        $forest.hide()
        $deepForest.show()
    })

    $deepForestButton1 = $('<button>').addClass('enterForest').text('Forest')
    $deepForest.append($deepForestButton1)

    $deepForestButton1.on('click', ()=>{
        $deepForest.hide()
        $forest.show()
    })

    $suspiciousTree.on('click', ()=>{
        $suspiciousTree.hide()
        teamRocketAppears()
    })



    function teamRocketAppears(){
        alert('Prepare for trouble, and make it double')


    }









    function goToPokeCentre(){

    }

    function leavePage(){

    }

    let battleOpponent = []

    function goToMainTown(){
        $battle.hide()
        $mainTown.show()
    }

    // this should lead to the battle page

    function battle(){
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

        // console.log(enemyPokemonList)
        // enemyBattlePokemon.push(enemyPokemonList[0])
        // enemyPokemonList.shift()
        // console.log(enemyPokemonList)
        // console.log(enemyPokemonList.length)

        // console.log('Enemy Pokemon List: ' + enemyPokemonList)

        function setUserHealth(){
            userFullHealth = userBattlePokemon[0].health
            userCurrentHealth = userBattlePokemon[0].health
        }

        setUserHealth()

        function setEnemyHealth(){
            enemyFullHealth = enemyBattlePokemon[0].health
            enemyCurrentHealth = enemyBattlePokemon[0].health
        }



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

        // let $alertButton = $('<button>').addClass('alertButton').text('Next')
        // $('.battle').append($alertButton)

        for (let i = 0; i < 11; i++){
            let $alertButton = $('<button>').addClass('alertButton'+i).text('Next'+i)
            $('.battle').append($alertButton)
        }

        let $alertButton0 = $('.alertButton0')
        let $alertButton1 = $('.alertButton1')
        let $alertButton2 = $('.alertButton2')
        let $alertButton3 = $('.alertButton3')
        let $alertButton4 = $('.alertButton4')
        let $alertButton5 = $('.alertButton5')
        let $alertButton6 = $('.alertButton6')
        let $alertButton7 = $('.alertButton7')
        let $alertButton8 = $('.alertButton8')
        let $alertButton9 = $('.alertButton9')
        let $alertButton10 = $('.alertButton10')

        
        $alertButton0.hide()
        $alertButton1.hide()
        $alertButton2.hide()
        $alertButton3.hide()
        $alertButton4.hide()
        $alertButton5.hide()
        $alertButton6.hide()
        $alertButton7.hide()
        $alertButton8.hide()
        $alertButton9.hide()
        $alertButton10.hide()


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
        // displayEnemyInfo()

        // display image for user pokemon, need to add function to change image when pokemon changes

        function setHealth(){
            userFullHealth = userBattlePokemon[0].health
            userCurrentHealth = userBattlePokemon[0].health
            enemyFullHealth = enemyBattlePokemon[0].health
            enemyCurrentHealth = enemyBattlePokemon[0].health
        }
        // setHealth()

        function updateUserHealth () {
            $('#userDisplay1').text('Health Points: '+ userCurrentHealth + ' / ' + userFullHealth)
            console.log(userBattlePokemon[0].name + ' has ' + userCurrentHealth + ' hitpoints left.')
        }

        function updateEnemyHealth () {
            $('#enemyDisplay1').text('Health Points: '+ enemyCurrentHealth + ' / ' + enemyFullHealth)
            console.log(enemyBattlePokemon[0].name + ' has ' + enemyCurrentHealth + ' hitpoints left.')
        }

        function enemyAttack() {
            let enemyPokemonSkillsArray = Object.keys(enemyBattlePokemon[0].skills)
            random = Math.floor(Math.random()*enemyPokemonSkillsArray.length)
            userCurrentHealth = userCurrentHealth - enemyBattlePokemon[0].skills[random].damage
            if (userCurrentHealth <= 0){
                userCurrentHealth = 0;
            }
            $alertBox.text(enemyBattlePokemon[0].name + ' used ' + enemyBattlePokemon[0].skills[random].name + '.')
            $alertButton4.show()
            $alertButton4.on('click', (event)=>{
                event.preventDefault()
                $alertButton4.hide()
                checkUserHealth()
                updateUserHealth()
            })
        }

        function checkUserHealth(){
            if (userCurrentHealth <= 0){
                $alertBox.text(userBattlePokemon[0].name + ' has fainted.')
                $alertButton6.show()
                $alertButton6.on('click', (event)=>{
                    event.preventDefault()
                    $alertButton6.hide()
                    checkUserPokemonAvailability()
                })
            } else {
                $alertBox.text(userBattlePokemon[0].name + ' has ' + userCurrentHealth + ' hitpoints left.')
                $alertButton5.show()
                $alertButton5.on('click', (event)=>{
                    event.preventDefault()
                    $alertButton5.hide()
                    $alertBox.text('')
                    showBattleButtons()
                })

            }
        }

        function checkEnemyHealth(){
            if (enemyCurrentHealth <= 0){
                $alertBox.text(enemyBattlePokemon[0].name + ' has fainted.')

                $alertButton2.show()
                $alertButton2.on('click', (event)=>{
                    $alertButton2.hide()
                    event.preventDefault()
                    checkEnemyPokemonAvailability()
                })
            } else {
                $alertBox.text(enemyBattlePokemon[0].name + ' has ' + enemyCurrentHealth + ' hitpoints left.')
                $alertButton3.show()
                $alertButton3.on('click', (event)=>{
                    $alertButton3.hide()
                    event.preventDefault()
                    enemyAttack()
                    // showBattleButtons()
                })
            }
        }

        function checkUserPokemonAvailability(){
            if (userPokemonList.length === 0){
                $alertBox.text('You have no pokemon left!')
                loseBattle()
            } else {
                $alertBox.text('Please choose a new Pokemon.')
                userChooseNewPokemon()
            }
        }

        function checkEnemyPokemonAvailability(){
            console.log(enemyPokemonList.length)

            console.log(enemyBattlePokemon[0])
            console.log(enemyBattlePokemon)
            console.log(enemyPokemonList)
            console.log(enemyPokemonList[0])

            if (enemyPokemonList.length === 0){
                $alertBox.text(enemyName + ' has no pokemon left!')
                winBattle()
            } else {
                enemyBattlePokemon.pop()
                enemyBattlePokemon.push(enemyPokemonList[0])
                $alertBox.text(battleOpponent[0].name + ' chose ' + enemyBattlePokemon[0].name + '.')

                console.log(enemyPokemonList)
                enemyPokemonList.shift()
                console.log(enemyPokemonList)

                setHealth()
                displayEnemyInfo()

                $alertButton9.show()
                $alertButton9.on('click', (event)=>{
                    $alertButton9.hide()
                    event.preventDefault()
                    enemyAttack()
                })
            }
        }

        function userChooseNewPokemon(){
            $alertButton10.show()
            $alertButton10.on('click', ()=>{
                $alertButton10.hide()

            })
        }

        // function enemyChooseNewPokemon(){
        //     $alertBox.text(battleOpponent[0].name + ' chose ' + enemyBattlePokemon[0].name + '.')
        //     enemyBattlePokemon.push(enemyPokemonList[0])
        //     enemyPokemonList.shift()
        //     setHealth()
        //     displayEnemyInfo()

        //     $alertButton9.show()
        //     $alertButton9.on('click', ()=>{
        //         $alertButton9.hide()
        //         enemyAttack()
        //     })
        // }
        
        function loseBattle(){
            $alertBox.text(player.name + ' have no pokemon left!')
            hideBattleButtons()

            $alertButton7.show()
            $alertButton7.on('click', ()=>{
                $alertButton7.hide()
                $battle.empty()
                goToMainTown()
            })
        }

        function winBattle(){
            $alertBox.text(enemyName + ' has no pokemon left!')
            hideBattleButtons()

            $alertButton8.show()
            $alertButton8.on('click', ()=>{
                $alertButton8.hide()
                $battle.empty()
                goToMainTown()
            })
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
        $enemyPicture.css('background-image', `url(${battleOpponent[0].backgroundImg})`)

//////////////////////////////////      EVENT LISTENERS     /////////////////////////////////////
        $alertButton0.show()
        $alertButton0.on('click', ()=>{
            enemyBattlePokemon.push(enemyPokemonList[0])
            enemyPokemonList.shift()

            console.log(enemyPokemonList)
            console.log(enemyBattlePokemon)

            setEnemyHealth()
            displayEnemyInfo()

            $alertBox.text(enemyName + ' choose ' + enemyBattlePokemon[0].name)
            showBattleButtons()
            $alertButton0.hide()
        })

        $fightButton.on('click', ()=>{
            console.log('fight')
            hideBattleButtons()
            showSkillButtons()
        })

        for (let i = 0; i < userPokemonSkillsArray.length; i++){
            $('#skill'+i).on('click', (event)=>{
                event.preventDefault()

                enemyCurrentHealth = enemyCurrentHealth - userBattlePokemon[0].skills[i].damage
                if (enemyCurrentHealth <= 0){
                    enemyCurrentHealth = 0;
                }
                hideSkillButtons()
                $alertBox.text(userBattlePokemon[0].name + ' used ' + userBattlePokemon[0].skills[i].name + '.')
                
                $alertButton1.show()
                $alertButton1.on('click', ()=>{
                    $alertButton1.hide()
                    updateEnemyHealth()
                    checkEnemyHealth()
                })
            })
        }
        
        // async function clickSkill (){
        //     let skillClicked = await someClickFunction()
        //     let newVariable = await anotherFunction(skillClicked)
        //     let nextVariable = await lastFunction(newVariable)

        //     if (nextVariable === true){
        //         runSomeFunction()
        //     } else {
        //         runAnotherFunction()
        //     }
        // }

        // function someClickFunction(){
        //     return new Promise((resolve, reject) =>{
        //         //some function which has a resolve or reject, can return string, boolean etc
                
        //     })
        // }
        
        $itemButton.on('click', (event)=>{
            console.log('item')
            console.log($(event.eventListener))
        })

        $changePokemonButton.on('click', (event)=>{
            console.log('change')
            console.log($(event.eventListener))
        })

        $runButton.on('click', (event)=>{
            console.log('run')
            console.log($(event.eventListener))
        })
    }

    //////////////////////////////////      EVENT LISTENERS     /////////////////////////////////////

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



