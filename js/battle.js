

function goToMeadows(){
    $('.battle').hide()
    $('.meadow').show()
}

let randomEncounterIndex

function randomEncounter(){
    randomEncounterIndex = Math.floor(Math.random()*randomPokemon1.length)
    enemyBattlePokemon.push(randomPokemon1[randomEncounterIndex])
    console.log(randomEncounterIndex)
}




function randomBattle(){
    $('.battle').show()

    let currentPokemon = userPokemonList[0]

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
    userBattlePokemon = userPokemonList[0]
    // userBattlePokemon.push(userPokemonList[0])

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

    // split alert box to 2 divs
    for (let i = 0; i < 2; i++){
        $splitDisplay = $('<div>').addClass('splitDisplay').attr('id', 'alertDisplay'+i)
        $alertBox.append($splitDisplay)
    }

    // let $alertBoxButton = $('<button>').addClass('alertBoxButton').text('Next')
    // $('.alertBox').append($alertBoxButton)

    // let $alertButton = $('<button>').addClass('alertButton').text('Next')
    // $('.battle').append($alertButton)

    for (let i = 0; i < 12; i++){
        let $alertButton = $('<button>').addClass('alertButton'+i).text('Next'+i).addClass('alertButtons').hide()
        $('#alertDisplay1').append($alertButton)
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
    let $alertButton11 = $('.alertButton11')

    // create skill buttons
    let userPokemonSkillsArray = Object.keys(currentPokemon.skills)
    for (let i = 0; i < userPokemonSkillsArray.length; i++){
        $pokemonSkill = $('<button>').attr('id', 'skill'+i)
        $pokemonSkill.text(currentPokemon.skills[i].name)
        $('.battleCommandsDisplay').append($pokemonSkill)
    }
    hideSkillButtons()


////////////////////////////////    EVENT LISTENERS    ////////////////////////////////////

    $alertButton0.on('click', ()=>{
        $alertButton0.hide()
        $('#alertDisplay0').text('Player chose '+ currentPokemon.name)
        displayUserInfo()


        $alertButton11.show()
    })

    $alertButton1.on('click', ()=>{
        $alertButton1.hide()
        updateEnemyHealth()
        checkEnemyHealth()
    })

    $alertButton2.on('click', ()=>{
        $alertButton2.hide()
        checkEnemyPokemonAvailability()
    })

    $alertButton3.on('click', ()=>{
        $alertButton3.hide()
        enemyAttack()
        // showBattleButtons()
    })

    $alertButton4.on('click', ()=>{
        $alertButton4.hide()
        checkUserHealth()
        updateUserHealth()
    })
    
    $alertButton5.on('click', ()=>{
        $alertButton5.hide()
        $('#alertDisplay0').text('')
        showBattleButtons()
    })

    $alertButton6.on('click', ()=>{
        $alertButton6.hide()
        checkUserPokemonAvailability()
    })

    $alertButton7.on('click', ()=>{
        $alertButton7.hide()
        $battle.empty()
        goToPokeCentre()
    })

    $alertButton8.on('click', ()=>{
        $alertButton8.hide()
        $('.battle').empty()
        goToMeadows()
    })

    $alertButton9.on('click', ()=>{
        $alertButton9.hide()
        enemyAttack()
    })

    $alertButton10.on('click', ()=>{
        $alertButton10.hide()
    })

    $alertButton11.on('click', ()=>{
        $alertButton11.hide()
        showBattleButtons()
    })


    $fightButton.on('click', ()=>{
        console.log('fight')
        hideBattleButtons()
        showSkillButtons()
    })

    $itemButton.on('click', ()=>{
        console.log('item')
        hideBattleButtons()
        $('#alertDisplay0').text('You do not have any items!')
        $cancelItem.show()
    })

    $cancelItem = $('<button>').addClass('cancelItem').text('Cancel')
    $('.battleCommandsDisplay').append($cancelItem)
    $cancelItem.hide()
    $cancelItem.on('click', ()=>{
        $cancelItem.hide()
        showBattleButtons()
    })

    $changePokemonButton.on('click', (event)=>{
        console.log('change')
        console.log($(event.eventListener))
    })

    $runButton.on('click', (event)=>{
        console.log('run')
        console.log($(event.eventListener))
    })

////////////////////////////////    EVENT LISTENERS    ////////////////////////////////////







////////////////////////////////    FUNCTIONS    ////////////////////////////////////

    
    function setUserHealth(){
        userFullHealth = currentPokemon.fullHealth
        userCurrentHealth = currentPokemon.health
    }
    setUserHealth()

    function setEnemyHealth(){
        enemyFullHealth = enemyBattlePokemon[0].fullHealth
        enemyCurrentHealth = enemyBattlePokemon[0].health
    }

    function displayUserInfo(){
        $('#userDisplay0').text('Level '+ currentPokemon.level + ' ' + currentPokemon.name)
        $('#userDisplay1').text('Health Points: '+ userCurrentHealth + ' / ' + userFullHealth)
        $userPicture.css('background-image', `url(${currentPokemon.image})`)
    }
    function displayEnemyInfo(){
        $('#enemyDisplay0').text('Level '+ enemyBattlePokemon[0].level + ' ' + enemyBattlePokemon[0].name)
        $('#enemyDisplay1').text('Health Points: '+ enemyCurrentHealth + ' / ' + enemyFullHealth)
        $enemyPicture.css('background-image', `url(${enemyBattlePokemon[0].image})`)
    }

    function updateUserHealth () {
        $('#userDisplay1').text('Health Points: '+ userCurrentHealth + ' / ' + userFullHealth)
        console.log(currentPokemon.name + ' has ' + userCurrentHealth + ' hitpoints left.')
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
        $('#alertDisplay0').text(enemyBattlePokemon[0].name + ' used ' + enemyBattlePokemon[0].skills[random].name + '.')
        $alertButton4.show()
    }

    function checkUserHealth(){
        if (userCurrentHealth <= 0){
            $('#alertDisplay0').text(currentPokemon.name + ' has fainted.')
            $alertButton6.show()
        } else {
            $('#alertDisplay0').text(currentPokemon.name + ' has ' + userCurrentHealth + ' hitpoints left.')
            $alertButton5.show()
        }
    }

    function checkEnemyHealth(){
        if (enemyCurrentHealth <= 0){
            $('#alertDisplay0').text(enemyBattlePokemon[0].name + ' has fainted.')
            enemyBattlePokemon.pop()
            winBattle()
        } else {
            $('#alertDisplay0').text(enemyBattlePokemon[0].name + ' has ' + enemyCurrentHealth + ' hitpoints left.')
            $alertButton3.show()
        }
    }

    // currently only have 1 pokemon, so automatically lose if pokemon dies
    function checkUserPokemonAvailability(){
            $('#alertDisplay0').text('You have no pokemon left!')
            loseBattle()

        // if (userPokemonList.length === 0){
        //     $('#alertDisplay0').text('You have no pokemon left!')
        //     loseBattle()
        // } else {
        //     $('#alertDisplay0').text('Please choose a new Pokemon.')
        //     userChooseNewPokemon()
        // }
    }

    function userChooseNewPokemon(){
        $alertButton10.show()
    }
    
    function loseBattle(){
        $('#alertDisplay0').text(player.name + ' has no pokemon left!')
        hideBattleButtons()
        $alertButton7.show()
    }

    function winBattle(){
        hideBattleButtons()
        currentPokemon.health = userCurrentHealth
        $alertButton8.show()
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

    $('#alertDisplay0').text('A wild '+ enemyBattlePokemon[0].name + ' appeared.')
    setEnemyHealth()
    displayEnemyInfo()

    $('#userDisplay0').text(player.name)
    $userPicture.css('background-image', `url(${player.backgroundImg})`)

    $alertButton0.show()

    for (let i = 0; i < userPokemonSkillsArray.length; i++){
        $('#skill'+i).on('click', (event)=>{
            event.preventDefault()

            enemyCurrentHealth = enemyCurrentHealth - currentPokemon.skills[i].damage
            if (enemyCurrentHealth <= 0){
                enemyCurrentHealth = 0;
            }
            hideSkillButtons()
            $('#alertDisplay0').text(currentPokemon.name + ' used ' + currentPokemon.skills[i].name + '.')
            
            $alertButton1.show()
        })
    }
}


