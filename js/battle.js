

// $(()=>{

//     class Battle {
//         constructor(enemyInfoDisplay,enemyPicture,userPicture,userInfoDisplay){
//             this.enemyInfoDisplay = enemyInfoDisplay;
//             this.enemyPicture = enemyPicture;
//             this.userPicture = userPicture;
//             this.userInfoDisplay = userInfoDisplay
//             // this.alertBox = alertBox;
//             // this.battleCommandsDisplay = battleCommandsDisplay
//         }
//     }

//     // let alertMessage = alert('You have encountered a wild zubat')

//     // if onclick on userbattlepokemon.skill === skill,
//     // alert (userbattlepokemon + 'used '+ userbattlepokemon.skill)
//     // if (userbattlePokemon.skill === )

//     // let randomNum = math.floor(math.random()*2)
//     // alert (enemybattlepokemon + 'used ' + enemybattlepokemon.skill[randomNum] )

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

// })

// $(()=>{

//     function battle(){
//         $('.mainTown').removeClass()
//         $('.practise').remove()
//         $mainTown.addClass('battle')

//         let enemyName = battleOpponent[0].name
//         let enemyPokemonList = battleOpponent[0].pokemonList

//         for (let i = 0; i < battleContainerArray.length; i++){
//             let $display = $('<div>').addClass(battleContainerArray[i])
//             $('.battle').append($display)
//         }

//         for (let i = 0; i < battleButtonsArray.length; i++){
//             $('.battleCommandsDisplay').append(battleButtonsArray[i])
//         }

//         //setting jquery variables
//         let $enemyInfoDisplay = $('.enemyInfoDisplay')
//         let $enemyPicture = $('.enemyPicture')
//         let $userPicture = $('.userPicture')
//         let $userInfoDisplay = $('.userInfoDisplay')
//         let $alertBox = $('.alertBox')
//         let $fightButton = $('.fightButton')
//         let $itemButton = $('.itemButton')
//         let $changePokemonButton = $('.changePokemonButton')
//         let $runButton = $('.runButton')

//         // choose the current pokemon for battle for both user and enemy
//         userBattlePokemon.push(userPokemonList[0])
//         enemyBattlePokemon.push(enemyPokemonList[0])
//         enemyPokemonList.shift()
//         console.log(enemyPokemonList)

//         let userFullHealth = userBattlePokemon[0].health
//         let userCurrentHealth = userBattlePokemon[0].health
//         let enemyFullHealth = enemyBattlePokemon[0].health
//         let enemyCurrentHealth = enemyBattlePokemon[0].health

//         // split user display to 2 rows to show level and name on top and HP at the bottom
//         for (let i = 0; i < 2; i++){
//             $splitDisplay = $('<div>').addClass('splitDisplay').attr('id', 'userDisplay'+i)
//             $userInfoDisplay.append($splitDisplay)
//         }
//         // split enemy display to 2 rows to show level and name on top and HP at the bottom
//         for (let i = 0; i < 2; i++){
//             $splitDisplay = $('<div>').addClass('splitDisplay').attr('id', 'enemyDisplay'+i)
//             $enemyInfoDisplay.append($splitDisplay)
//         }
        
//         function displayUserInfo(){
//             $('#userDisplay0').text('Level '+ userBattlePokemon[0].level + ' ' + userBattlePokemon[0].name)
//             $('#userDisplay1').text('Health Points: '+ userFullHealth + ' / ' + userFullHealth)
//             $userPicture.css('background-image', `url(${userBattlePokemon[0].image})`)
//         }
//         function displayEnemyInfo(){
//             $('#enemyDisplay0').text('Level '+ enemyBattlePokemon[0].level + ' ' + enemyBattlePokemon[0].name)
//             $('#enemyDisplay1').text('Health Points: '+ enemyFullHealth + ' / ' + enemyFullHealth)
//             $enemyPicture.css('background-image', `url(${enemyBattlePokemon[0].image})`)
//         }
//         displayUserInfo()
//         displayEnemyInfo()

//         // display image for user pokemon, need to add function to change image when pokemon changes

//         function updateUserHealth () {
//             $('#userDisplay1').text('Health Points: '+ userCurrentHealth + ' / ' + userFullHealth)
//             console.log(userBattlePokemon[0].name + ' has ' + userCurrentHealth + ' hitpoints left.')
//         }

//         function updateEnemyHealth () {
//             $('#enemyDisplay1').text('Health Points: '+ enemyCurrentHealth + ' / ' + enemyFullHealth)
//             console.log(enemyBattlePokemon[0].name + ' has ' + enemyCurrentHealth + ' hitpoints left.')
//         }

//         // let $alertBoxButton = $('<button>').addClass('alertBoxButton').text('Next')
//         // $('.alertBox').append($alertBoxButton)

//         let $alertButton = $('<button>').addClass('alertButton').text('Next')
//         $('.battle').append($alertButton)

//         function updateAlertBox(){
//             $alertBoxButton.on('click', (alertText)=>{
//                 return alertText
//             })
//         }

//         $alertBox.text(enemyName + ' would like to battle')
//         // $alertBox.text(enemyName + ' chooses ' + enemyBattlePokemon[0].name)

//         // create skill buttons
//         let userPokemonSkillsArray = Object.keys(userBattlePokemon[0].skills)
//         for (let i = 0; i < userPokemonSkillsArray.length; i++){
//             $pokemonSkill = $('<button>').attr('id', 'skill'+i)
//             $pokemonSkill.text(userBattlePokemon[0].skills[i].name)
//             $('.battleCommandsDisplay').append($pokemonSkill)
//         }
//         hideSkillButtons()

//         $fightButton.on('click', ()=>{
//             console.log('fight')
//             // $('.battleCommandsDisplay').empty()
//             hideBattleButtons()
//             showSkillButtons()

//             for (let i = 0; i < userPokemonSkillsArray.length; i++){
//                 $('#skill'+i).on('click', ()=>{
//                     enemyCurrentHealth = enemyCurrentHealth - userBattlePokemon[0].skills[i].damage
//                     if (enemyCurrentHealth <= 0){
//                         enemyCurrentHealth = 0;
//                     }
//                     updateEnemyHealth()
//                     checkPokemonHealth()
//                     hideSkillButtons()
//                     enemyAttack()
//                 })
//             }
//         })
        

//         // enemy attack function 
//         function enemyAttack() {
//             let enemyPokemonSkillsArray = Object.keys(enemyBattlePokemon[0].skills)
//             random = Math.floor(Math.random()*enemyPokemonSkillsArray.length)
//             userCurrentHealth = userCurrentHealth - enemyBattlePokemon[0].skills[random].damage
//             if (userCurrentHealth <= 0){
//                 userCurrentHealth = 0;
//             }
//             updateUserHealth()
//             checkPokemonHealth()
//         }

//         function checkPokemonHealth(){
//             // debugger;
//             if (userCurrentHealth <= 0){
//                 $alertBox.text(userBattlePokemon[0].name + ' has fainted.')
//                 checkUserPokemonAvailability()
//             } else if (enemyCurrentHealth <= 0){
//                 $alertBox.text(enemyBattlePokemon[0].name + ' has fainted.')
//                 $alertButton.on('click', ()=>{
//                     checkEnemyPokemonAvailability()
//                 })
//             } else {
//                 showBattleButtons()
//             }
//         }

//         function checkUserPokemonAvailability(){
//             // debugger;
//             if (userPokemonList.length === 0){
//                 $alertBox.text('You have no pokemon left!')
//                 pokeCentre()
//             } else {
//                 $alertBox.text('Please choose a new Pokemon.')
//             }
//         }

//         function checkEnemyPokemonAvailability(){
//             // debugger;
//             if (enemyPokemonList.length === 0){
//                 $alertBox.text(enemyName + ' has no pokemon left!')
//                 winBattle()
//             } else {
//                 enemyBattlePokemon.pop()
//                 enemyBattlePokemon.push(enemyPokemonList[0])
//                 enemyChooseNewPokemon()
//             }
//         }

//         function enemyChooseNewPokemon(){
//             // debugger;
//             console.log(enemyBattlePokemon)
//             $alertBox.text('Gary chose ' + enemyBattlePokemon[0].name)
//             displayEnemyInfo()
//         }
        
//         function winBattle(){
//             $alertBox.text(enemyName + ' has no pokemon left!')

//         }

//         // let $itemButton = $('.itemButton')
//         // $itemButton.on('click', (event)=>{
//         //     console.log('item')
//         //     console.log($(event.eventListener))
//         // })

//         // let $changePokemonButton = $('.changePokemonButton')
//         // $changePokemonButton.on('click', (event)=>{
//         //     console.log('change')
//         //     console.log($(event.eventListener))
//         // })

//         // let $runButton = $('.runButton')
//         // $runButton.on('click', (event)=>{
//         //     console.log('run')
//         //     console.log($(event.eventListener))
//         // })
//     }

//     function hideBattleButtons (){
//         $('.fightButton').hide()
//         $('.itemButton').hide()
//         $('.changePokemonButton').hide()
//         $('.runButton').hide()
//     }
//     function showBattleButtons (){
//         $('.fightButton').show()
//         $('.itemButton').show()
//         $('.changePokemonButton').show()
//         $('.runButton').show()
//     }

//     function hideSkillButtons (){
//         $('#skill0').hide()
//         $('#skill1').hide()
//         $('#skill2').hide()
//         $('#skill3').hide()
//     }

//     function showSkillButtons (){
//         $('#skill0').show()
//         $('#skill1').show()
//         $('#skill2').show()
//         $('#skill3').show()
//     }

// })





let randomEncounterIndex

function randomEncounter(){
    randomEncounterIndex = Math.floor(Math.random()*randomPokemon.length)
    enemyBattlePokemon.push(randomPokemon[randomEncounterIndex])
}



function randomBattle(){

    $('.battle').show()

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
    setEnemyHealth()

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
            $alertBox.text(battleOpponent[0].name + ' chose ' + enemyBattlePokemon[0].name + '.')
            enemyBattlePokemon.pop()
            enemyBattlePokemon.push(enemyPokemonList[0])
            enemyPokemonList.shift()
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

    $alertBox.text('A wild '+ enemyBattlePokemon[0].name + ' appeared.')

//////////////////////////////////      EVENT LISTENERS     /////////////////////////////////////
    $alertButton0.show()
    $alertButton0.on('click', ()=>{
        $alertButton0.hide()
        setEnemyHealth()
        displayEnemyInfo()
        showBattleButtons()
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

    //////////////////////////////////      EVENT LISTENERS     /////////////////////////////////////

}


