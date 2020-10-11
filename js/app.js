console.log('hello world')

let choosePokemonArray = ['charmander', 'squirtle', 'bulbasaur']

let mainTownButtons = ['training', 'enterPokeCentre', 'enterForest', 'enterMeadow', 'enterShop', 'gym']
let mainTownText = ['Training Grounds', 'Pokemon Centre', 'Forest', 'Meadow', 'Shop', 'Gym']

let battleCommands = ['fight', 'item', 'changePokemon', 'run']
let battleCommandsButton = ['fightButton', 'itemButton', 'changePokemonButton', 'runButton']
let battleButtonsArray = []
let battleContainerArray = ['userInfoDisplay', 'enemyPicture', 'userPicture', 'enemyInfoDisplay', 'alertBox', 'battleCommandsDisplay']

let soundsArray = ['Absorb', 'Bite', 'Bubble', 'Bubblebeam', 'Dig', 'DoubleKick', 'Ember', 'FireSpin', 'FuryAttack', 'FurySwipes', 'Gust', 'LeechSeed', 'Payday', 'Peck', 'PoisonGas', 'PoisonPowder', 'PoisonSting', 'QuickAttack', 'RockSlide', 'Scratch', 'Slash', 'SolarBeam', 'Splash', 'StringShot', 'Supersonic', 'Tackle', 'Thunderbolt', 'ThunderShock', 'Toxic', 'ViceGrip', 'VineWhip', 'WaterGun', 'Wrap']

let userPokemonList = []
let enemyPokemonList = []
let userBattlePokemon = []
let enemyBattlePokemon = []
let currentLocation
let battleOpponent = []

let gymClickCounter = 0
let caveUnlock = 0
let rustledTrees = 0
let swimCounter = 0
let shroomCounter = 0
let rockCounter = 0
let cavemap = 0
let unlockPikachu = 0
let randomEncounterIndex
let currentBgm = 0
let bgmOn = true;

let myStorage = window.localStorage;

$(()=>{

    let $layout = $('#layout')

    /////////////////////////////////////       SOUND         //////////////////////////////////////////

    let $audio = $('<audio>').attr('id', 'bgm').attr('preload', 'auto')
    $layout.append($audio)
    let $source = $('<source>').attr('type', 'audio/mpeg')
    $audio.append($source)

    $audio[0].loop = true;
    $(document).ready(mainPageBgm)

    function lowerVolume(){
        $audio[0].volume = 0.5;
    }
    lowerVolume()

    function toggleBgm(){
        if (bgmOn === true){
            $('audio')[0].pause();
            bgmOn = false;
            $pauseButton.css('background-image', 'url("css/images/audio_off.png")')
        } else {
            $('audio')[0].play();
            bgmOn = true;
            $pauseButton.css('background-image', 'url("css/images/audio_on.png")')
        }
    }

    function mainPageBgm (){
        $source.attr('src', 'sounds/opening.mp3')
        $('audio')[0].load();
        $('audio')[0].play();
    }

    function oakBgm(){
        $source.attr('src', 'sounds/oak.mp3')
        $('audio')[0].load();
        $('audio')[0].play();
    }

    function meadowBgm(){
        $source.attr('src', 'sounds/meadow.mp3')
        $('audio')[0].load();
        $('audio')[0].play();
    }

    function townBgm(){
        $source.attr('src', 'sounds/town.mp3')
        $('audio')[0].load();
        $('audio')[0].play();
    }

    function pokecentreBgm(){
        $source.attr('src', 'sounds/pokecentre.mp3')
        $('audio')[0].load();
        $('audio')[0].play();
    }

    function battleBgm(){
        $source.attr('src', 'sounds/battle.mp3')
        $('audio')[0].load();
        $('audio')[0].play();
    }

    function battle2Bgm(){
        $source.attr('src', 'sounds/battle2.mp3')
        $('audio')[0].load();
        $('audio')[0].play();
    }

    function lastBattleBgm(){
        $source.attr('src', 'sounds/lastBattle.mp3')
        $('audio')[0].load();
        $('audio')[0].play();
    }

    function forestBgm(){
        $source.attr('src', 'sounds/forest.mp3')
        $('audio')[0].load();
        $('audio')[0].play();
    }

    function caveBgm(){
        $source.attr('src', 'sounds/cave.mp3')
        $('audio')[0].load();
        $('audio')[0].play();
    }

    function endingBgm(){
        $source.attr('src', 'sounds/ending.mp3')
        $('audio')[0].load();
        $('audio')[0].play();
    }

    function playCurrentBgm(){
        if (currentBgm === 1){
            meadowBgm()
        } else if (currentBgm === 2){
            townBgm()
        } else if (currentBgm === 3){
            forestBgm()
        } else if (currentBgm === 4){
            caveBgm()
        }
    }

    function playButtonSound(){
        // let $sound = $('<source>').attr('src', 'sounds/click1.mp3').attr('type', 'audio')
        sound = new Audio('sounds/click1.mp3')
        sound.play()
    }

    function playUserSound(chosenSkill){
        sound = new Audio('sounds/battlesounds/'+chosenSkill+'.mp3')
        sound.play()
    }

    function playEnemySound(){
        sound = new Audio('sounds/battlesounds/'+enemyBattlePokemon[0].skills[random].name+'.mp3')
        sound.play()
    }
    
    function playThundershock(){
        sound = new Audio('sounds/battlesounds/ThunderShock.mp3')
        sound.play()
    }




    /////////////////////////////////////       SOUND         //////////////////////////////////////////



    ////////////////////////////////////        PAGES       //////////////////////////////////////////

    let pagesArray = ['mainPage', 'professorOaksLab', 'meadow', 'mainTown', 'battle', 'pokeCentre', 'shop', 'forest', 'beach', 'deepForest', 'cave', 'deepCave', 'endGamePage']

    for (let i = 0; i < pagesArray.length; i++){
        let $page = $('<div>').addClass(pagesArray[i])
        $layout.append($page)
        $page.hide()
    }
    let $mainPage = $('.mainPage')
    let $meadow = $('.meadow')
    let $forest = $('.forest')
    let $beach = $('.beach')
    let $deepForest = $('.deepForest')
    let $cave = $('.cave')
    let $deepCave = $('.deepCave')
    let $endGamePage = $('.endGamePage')
    let $professorOaksLab = $('.professorOaksLab')
    let $mainTown = $('.mainTown')
    let $battle = $('.battle')
    let $pokeCentre = $('.pokeCentre')
    let $shop = $('.shop')
    $mainPage.show()


    //////////////////////////////////////////      PAGES       ///////////////////////////////////////



    //////////////////////////////////////////      DIVS       ///////////////////////////////////////

    // MAIN PAGE DIVS
    $mainPageButton = $('<button>').addClass('mainPageButton').text('Start Game')
    $mainPage.append($mainPageButton)
    $continueButton = $('<button>').addClass('continueButton').text('Continue')
    $mainPage.append($continueButton)
    $pauseButton = $('<div>').addClass('pauseButton').css('background-image', 'url("css/images/audio_on.png")')
    $layout.append($pauseButton)

    // OAK LAB DIVS
    for (let i = 0; i < 3; i++){
        let $oakLabDiv = $('<div>').addClass('oakLabDiv'+i)
        $professorOaksLab.append($oakLabDiv)
    }
    let $oakLabDiv0 = $('.oakLabDiv0')
    let $oakLabDiv1 = $('.oakLabDiv1')
    let $oakLabDiv2 = $('.oakLabDiv2')
    $professorOak1 = $('<div>').addClass('professorOak1').text('Professor Oak').css('font-weight', '900').css('color', 'black')
    $oakLabDiv0.append($professorOak1)
    $professorOak2 = $('<div>').addClass('professorOak2').text('Professor Oak').css('font-weight', '900').css('color', 'black')
    $oakLabDiv0.append($professorOak2)
    $professorOak2.hide()
    $professorOak3 = $('<div>').addClass('professorOak3').text('Professor Oak').css('font-weight', '900').css('color', 'black')
    $oakLabDiv0.append($professorOak3)
    $professorOak3.hide()
    $professorOak4 = $('<div>').addClass('professorOak4').text('Professor Oak').css('font-weight', '900').css('color', 'black')
    $oakLabDiv0.append($professorOak4)
    $professorOak4.hide()
    $exitLab = $('<button>').addClass('exitLab').text('Exit')
    $oakLabDiv2.append($exitLab)
    $exitLab.hide()

    // MEADOW DIVS
    for (let i = 0; i < 3; i++){
        let $meadowDiv = $('<div>').addClass('meadowDiv'+i)
        $meadow.append($meadowDiv)
    }
    let $meadowDiv0 = $('.meadowDiv0')
    let $meadowDiv1 = $('.meadowDiv1')
    let $meadowDiv2 = $('.meadowDiv2')
    $enterLab = $('<button>').addClass('enterLab').text('Enter Lab')
    $meadowDiv0.append($enterLab)
    $exploreButton = $('<button>').addClass('explore').text('Shake Bush')
    $meadowDiv1.append($exploreButton)
    $townButton = $('<button>').addClass('enterTown').text('Town')
    $meadowDiv2.append($townButton)
    $townButton.hide()

    // MAIN TOWN DIVS
    for (let i = 0; i < 6; i++){
        let $mainTownDiv = $('<div>').addClass('mainTownDiv'+i)
        $mainTown.append($mainTownDiv)
    }
    for (let i = 0; i < mainTownButtons.length; i++){
        let $mainTownButton = $('<button>').addClass(mainTownButtons[i]).text(mainTownText[i])
        $('.mainTownDiv'+i).append($mainTownButton)
    }
    $training = $('.training')
    $enterPokeCentre = $('.enterPokeCentre')
    $enterShop = $('.enterShop')
    $gym = $('.gym')
    $enterForest = $('.enterForest')
    $enterForest.hide()
    $enterMeadow = $('.enterMeadow')

    // SHOP DIVS
    $shopDiv1 = $('<div>').addClass('shopDiv1')
    $shop.append($shopDiv1)
    $shopDiv2 = $('<div>').addClass('shopDiv2')
    $shop.append($shopDiv2)
    $shopkeeper = $('<div>').addClass('shopkeeper').text('Shopkeeper')
    $shopDiv1.append($shopkeeper)
    $shopToTown = $('<button>').addClass('shopToTown').text('Exit')
    $shopDiv2.append($shopToTown)
    $buyItems = $('<button>').addClass('buyItems').text('Buy')
    $shopDiv1.append($buyItems)
    $buyItems.hide()
    $sellItems = $('<button>').addClass('sellItems').text('Sell')
    $shopDiv1.append($sellItems)
    $sellItems.hide()
    $shopTalk = $('<button>').addClass('shopTalk1').text('Talk')
    $shopDiv1.append($shopTalk)
    $shopTalk.hide()
    $leaveShop = $('<button>').addClass('leaveShop').text('Leave')
    $shopDiv1.append($leaveShop)
    $leaveShop.hide()

    // POKE CENTRE DIVS
    $pokeCentreDiv1 = $('<div>').addClass('pokeCentreDiv1')
    $pokeCentre.append($pokeCentreDiv1)
    $pokeCentreDiv2 = $('<div>').addClass('pokeCentreDiv2')
    $pokeCentre.append($pokeCentreDiv2)
    $pokeCentreNurse = $('<div>').addClass('pokeCentreNurse').text('Nurse Joy')
    $pokeCentreDiv1.append($pokeCentreNurse)
    $pokeCentreToTown = $('<button>').addClass('pokeCentreToTown').text('Exit')
    $pokeCentreDiv2.append($pokeCentreToTown)
    $healButton = $('<button>').text('Heal Pokemon').addClass('healPokemon')
    $pokeCentreDiv1.append($healButton)
    $healButton.hide()
    $leaveButton = $('<button>').text('Leave').addClass('leaveButton')
    $pokeCentreDiv2.append($leaveButton)
    $leaveButton.hide()
    $respawnButton = $('<button>').text('Respawn').addClass('respawnButton')
    $pokeCentreDiv1.append($respawnButton)
    $respawnButton.hide()

   // FOREST DIVS
    for (let i = 0; i < 5; i++){
        let $forestDiv = $('<div>').addClass('forestDiv'+i)
        $forest.append($forestDiv)
    }
    $enterBeach = $('<button>').text('Beach').addClass('enterBeach')
    $('.forestDiv4').append($enterBeach)
    $enterBeach.hide()
    $enterDeepForest = $('<button>').text('Deep Forest').addClass('enterDeepForest')
    $('.forestDiv3').append($enterDeepForest)
    $enterDeepForest.hide()
    //need css animation and mouse hover to make it clickable
    $shakeTrees = $('<div>').addClass('shakeTrees')
    $('.forestDiv1').append($shakeTrees)
    $suspiciousTree = $('<div>').addClass('suspiciousTree')
    $('.forestDiv1').append($suspiciousTree)
    $suspiciousTree1 = $('<div>').addClass('suspiciousTree1')
    $('.forestDiv1').append($suspiciousTree1)
    $suspiciousTree1.hide()
    $enterCave = $('<button>').text('Mysterious Cave').addClass('enterCave')
    $('.forestDiv2').append($enterCave)
    $enterCave.hide()
    $enterMainTown = $('<button>').addClass('enterMainTown').text('Town')
    $('.forestDiv0').append($enterMainTown)

    // BEACH DIVS
    $beachDiv1 = $('<div>').addClass('beachDiv1')
    $beach.append($beachDiv1)
    $beachDiv2 = $('<div>').addClass('beachDiv2')
    $beach.append($beachDiv2)
    $beachButton1 = $('<button>').addClass('enterForest').text('Forest')
    $beachDiv1.append($beachButton1)
    $swim = $('<button>').addClass('swim').text('Swim')
    $beachDiv1.append($swim)
    $suspiciousRock = $('<div>').addClass('suspiciousRock')
    $beachDiv2.append($suspiciousRock)
    $suspiciousRock1 = $('<div>').addClass('suspiciousRock1')
    $beachDiv2.append($suspiciousRock1)
    $suspiciousRock1.hide()

    // DEEP FOREST DIVS
    $deepForestDiv1 = $('<div>').addClass('deepForestDiv1')
    $deepForest.append($deepForestDiv1)
    $deepForestDiv2 = $('<div>').addClass('deepForestDiv2')
    $deepForest.append($deepForestDiv2)
    $deepForestButton1 = $('<button>').addClass('enterForest').text('Forest')
    $deepForestDiv1.append($deepForestButton1)
    $playWithShrooms = $('<button>').addClass('playWithShrooms').text('Play With Shrooms')
    $deepForestDiv1.append($playWithShrooms)
    $suspiciousMoss = $('<div>').addClass('suspiciousMoss')
    $deepForestDiv2.append($suspiciousMoss)
    $suspiciousMoss1 = $('<div>').addClass('suspiciousMoss1')
    $deepForestDiv2.append($suspiciousMoss1)
    $suspiciousMoss1.hide()

    // CAVE DIVS
    $caveDiv1 = $('<div>').addClass('caveDiv1')
    $cave.append($caveDiv1)
    $caveDiv2 = $('<div>').addClass('caveDiv2')
    $cave.append($caveDiv2)
    $caveToForest = $('<button>').addClass('caveToForest').text('Forest')
    $caveDiv1.append($caveToForest)
    $kickRock = $('<button>').addClass('kickRock').text('Kick Rock')
    $caveDiv1.append($kickRock)
    $suspiciousObject = $('<div>').addClass('suspiciousObject')
    $caveDiv2.append($suspiciousObject)
    $suspiciousObject1 = $('<div>').addClass('suspiciousObject1')
    $caveDiv2.append($suspiciousObject1)
    $suspiciousObject1.hide()
    $caveToDeepCave = $('<button>').addClass('caveToDeepCave').text('Deep Cave')
    $caveDiv2.append($caveToDeepCave)
    $caveToDeepCave.hide()

    // DEEP CAVE DIVS
    $deepCaveToCave = $('<button>').addClass('deepCaveToCave').text('Cave')
    $deepCave.append($deepCaveToCave)
    $suspiciousThing = $('<div>').addClass('suspiciousThing')
    $deepCave.append($suspiciousThing)
    $suspiciousThing1 = $('<div>').addClass('suspiciousThing1')
    $deepCave.append($suspiciousThing1)
    $suspiciousThing1.hide()

       // create battle buttons 
    for (let i = 0; i < battleCommands.length; i++){
        let $buttons = $('<button>').addClass(battleCommandsButton[i]).text(battleCommands[i].toUpperCase())
        battleButtonsArray.push($buttons)
    }

    // END GAME PAGE DIV
    $endGamePage.append($('<div>').text('Thank you for playing!').addClass('endGameText'))

    //////////////////////////////////////////      DIVS       ///////////////////////////////////////










    //////////////////////////////////////////      MODAL       ///////////////////////////////////////

    $createModal = $('<div>').attr('id', 'modal')
    $mainPage.append($createModal)
    $createModalBox = $('<div>').attr('id', 'modal-textBox')
    $createModal.append($createModalBox)
    $createText = $('<h1>').text('Please input your name.').css('font-size', '15px').css('font-weight', '750')
    $createModalBox.append($createText)
    $createInputBox = $('<input>').attr('type', 'text').attr('id', 'inputBox')
    $createModalBox.append($createInputBox)
    $createModalFooter = $('<div>').attr('id', 'modal-footer')
    $createModalBox.append($createModalFooter)
    $createBeginJourneyButton = $('<button>').attr('id', 'beginJourney').attr('href', '#').text('Begin Journey')
    $createModalFooter.append($createBeginJourneyButton)
    $createModalFooterButton = $('<button>').attr('id', 'close').attr('href', '#').text('Close')
    $createModalFooter.append($createModalFooterButton)

    // Grabbing About the Game button
    const $openBtn = $('.mainPageButton');

    // Grabbing modal element
    const $modal = $('#modal');
    $modal.hide()

    // Grabbing close button
    const $beginJourney = $('#beginJourney')
    const $closeBtn = $('#close');

    // Event handler to open the modal
    const openModal = () => {
        $modal.css('display', 'block');
    }
    // Event handler to close the modal
    const closeModal = () => {
        $modal.css('display', 'none');
    }
    const beginJourey = () =>{
        $mainPage.hide()
        let userName = $('#inputBox').val()
        player.name = userName
        oakBgm()
        playButtonSound()
        $professorOaksLab.show()
    }

    //Add event listener to About the Game button
    $openBtn.on('click', openModal);
    //Add event listener to Close button
    $beginJourney.on('click', beginJourey)
    $closeBtn.on('click', closeModal);

    
    //////////////////////////////////////////      MODAL       ///////////////////////////////////////





    function checkMyStorage(){
        if (myStorage.length > 0){
            console.log('there is a save file')
        } else {
            console.log('there is no save file')
        }
        return;
    }

    let pokemonList 

    function updateFiles(){
        //update bgm to new page

        //update userPokemonList to mystoragePokemonList
        //update rivalPokemonList to mystorageRivalPokemonList
        console.log('updating files')

        pokemonList = JSON.parse(myStorage.pokemonList)
        pageData = JSON.parse(myStorage.pageData)
        userPokemonList = pokemonList.userPokemonList
        rivalPokemonList = pokemonList.rivalPokemonList

        console.log(userPokemonList)
        console.log(rivalPokemonList)

        console.log(pageData)

        if (pageData.pageFlow === 1){
            console.log('pageflow1')
            oakBgm()
            $professorOak1.hide()
            $professorOak2.show()
            $professorOaksLab.show()
        } else if (pageDate.pageFlow === 2){
            console.log('pageflow2')
            oakBgm()
            $professorOak1.hide()
            $professorOak2.show()
            $professorOaksLab.show()
        }
    }

    //////////////////////////////////      EVENT LISTENERS         //////////////////////////////////

    $pauseButton.on('click', ()=>{
        toggleBgm()
    })
    
    $continueButton.on('click', ()=>{
        console.log('a')
        console.log(myStorage)
        $mainPage.hide()
        checkMyStorage()
        updateFiles()
    })


    $professorOak1.on('click', ()=>{
        $professorOak1.hide()
        playButtonSound()
        alert('Hello there, '+ player.name + '. My name is Professor Oak. Welcome to my lab')
        alert('You look very excited to begin your journey, so i\'ll get right to it.')
        alert('I have been a pokemon researcher for many years, and while researching about pokemon, I do have my own collection.')
        alert('So, alas, it is your lucky day! I have prepared 3 special pokemon for you.')
        alert('Each of them have unique talents which will be essential for your journey as a new Pokemon adventurer.')
        alert('Please take your time to choose, but remember, the adventure is waiting for you out there.')
        choosePokemonButtons()
    })
    $professorOak2.on('click', ()=>{
        $professorOak2.hide()
        playButtonSound()
        alert('Great choice! I\'m sure you will treat '+ userPokemonList[0].name + ' well.')
        alert('I was supposed to introduce you to my grandson today but i\'m not sure where he went.')
        alert('He did mention that he wanted to check out the gym in town.')
        alert('But, anyway, i do have a task for you. I need you to get to town and obtain a parcel from the shopkeeper.')
        alert('The contents of this parcel is very important to me, so please return when you have gotten it.')
        alert('Oh, and on the way to town, you might want to test out your new Pokemon. I always hear some wild pokemon rustling near the bushes')
        alert('Please come back when you have my parcel.')
        $exitLab.show()
        $professorOak3.show()
    })
    $professorOak3.on('click', ()=>{
        playButtonSound()
        alert('Please come back when you have my parcel from the shopkeeper.')
    })
    $professorOak4.on('click', ()=>{
        playButtonSound()
        alert('Thank you for bringing back my parcel for me')
        alert('I hope it wasn\'t too much of a hassle')
        alert('I\'m sure you will be a great Pokemon Trainer in the future')
        endGame()
    })
    
    function exitLab(){
        playButtonSound()
        $professorOaksLab.hide()
        $meadow.show()
        meadowBgm()
        currentBgm = 1
    }
    $exitLab.on('click', ()=>{
        exitLab()
    })

    $townButton.on('click', ()=>{
        playButtonSound()
        $meadow.hide()
        $mainTown.show()
        townBgm()
        currentBgm = 2
    })
    $exploreButton.on('click', ()=>{
        playButtonSound()
        alert('Player rustled the bushes')
        rustledTrees++
        if (rustledTrees%3 === 0){
            alert('The bushes are shaking vigorously')
            currentLocation = $meadow
            battleBgm()
            meadowBattle()
            $townButton.show()
        }
    })
    $enterLab.on('click', ()=>{
        playButtonSound()
        $meadow.hide()
        $professorOaksLab.show()
        oakBgm()
    })

    $training.on('click', ()=>{
        playButtonSound()
        alert('The training grounds is closed.')
    })
    $enterShop.on('click', ()=>{
        playButtonSound()
        $mainTown.hide()
        $shop.show()
    })
    $enterPokeCentre.on('click', ()=>{
        playButtonSound()
        $mainTown.hide()
        $pokeCentre.show()
        pokecentreBgm()
    })
    $gym.on('click', ()=>{
        playButtonSound()
        alert('The Gym is closed at this moment')
        gymClickCounter++

        if (gymClickCounter === 5){
            alert('Stranger: Well, well, well, look who it is?')
            alert('Stranger: My gramps did mention about you this morning!')
            alert('Stranger: Time for me to show you who is the real Pokemon Master!')
            $mainTown.hide()
            battle2Bgm()
            battleRival()
            $battle.css('background-image', 'url("css/images/trainerbattle.png")')
            battle()
        }
    })
    $enterForest.on('click', ()=>{
        playButtonSound()
        $mainTown.hide()
        $forest.show()
        forestBgm()
        currentBgm = 3
    })
    $enterMeadow.on('click', ()=>{
        playButtonSound()
        $mainTown.hide()
        $meadow.show()
        meadowBgm()
        currentBgm = 1
        })

    $shopToTown.on('click', ()=>{
        playButtonSound()
        $shop.hide()
        $mainTown.show()
    })
    $buyItems.on('click', ()=>{
        alert('I have nothing to sell to you right now!')
    })
    $sellItems.on('click', ()=>{
        alert('You have nothing to sell!')
    })
    $shopTalk.on('click', ()=>{
        alert('Oh, so Professor Oak sent you?')
        alert('I would love to help you but my shop a suspicious person entered my shop late last night and robbed me.')
        alert('Last I heard, they were spotted heading towards the forest.')
        alert('Some locals mentioned that they had a secret hideout in the trees after entering the forest. You can check out that spot first.')
        alert('You might be able to track them down and retrieve the package.')
        $enterForest.show()
    })
    $leaveShop.on('click', ()=>{
        playButtonSound()
        $buyItems.hide()
        $sellItems.hide()
        $leaveShop.hide()
        $shopTalk.hide()
        $shopkeeper.show()
        $shopToTown.show()
    })
    $shopkeeper.on('click', ()=>{
        playButtonSound()
        $shopToTown.hide()
        $shopkeeper.hide()
        $buyItems.show()
        $sellItems.show()
        $leaveShop.show()
        $shopTalk.show()
    })

    $pokeCentreNurse.on('click', ()=>{
        playButtonSound()
        $pokeCentreNurse.hide()
        $pokeCentreToTown.hide()
        $healButton.show()
        $leaveButton.show()
        alert('Hi, I am Nurse Joy. How may I assist you today?')
    })
    $healButton.on('click', ()=>{
        playButtonSound()
        if (userPokemonList[0].health === userPokemonList[0].fullHealth){
            alert('Your pokemon are fully healed.')
        } else {
            for (let i = 0; i < userPokemonList.length; i++){
                userPokemonList[i].health = userPokemonList[0].fullHealth
            }
            alert('Give me a second.')
            alert('Okay, I have healed your pokemon!')
            alert('Please come again')
        }
    })
    $leaveButton.on('click', ()=>{
        playButtonSound()
        $healButton.hide()
        $leaveButton.hide()
        $pokeCentreNurse.show()
        $pokeCentreToTown.show()
    })
    $pokeCentreToTown.on('click', ()=>{
        playButtonSound()
        $pokeCentre.hide()
        $mainTown.show()
        townBgm()
    })
    $respawnButton.on('click', ()=>{
        playButtonSound()
        $respawnButton.hide()
        userPokemonList[0].health = userPokemonList[0].fullHealth
        alert('Looks like your pokemon ran out of hp!')
        alert('I have healed your pokemon back to full health.')
        alert('Please treat your pokemon with more care in the future.')
        $pokeCentreNurse.show()
        $pokeCentreToTown.show()
    })
    
    $enterMainTown.on('click', ()=>{
        playButtonSound()
        $forest.hide()
        $mainTown.show()
        townBgm()
    })
    $enterBeach.on('click', ()=>{
        playButtonSound()
        $forest.hide()
        $beach.show()
    })
    $enterDeepForest.on('click', ()=>{
        playButtonSound()
        $forest.hide()
        $deepForest.show()
    })
    $shakeTrees.on('click', ()=>{
        suspiciousTree++
        if (suspiciousTree%4 ===0){
            randomBattle2()
        }
    })
    $suspiciousTree.on('click', ()=>{
        playButtonSound()
        $suspiciousTree.hide()
        teamRocketAppears()
        $suspiciousTree1.show()
    })
    $suspiciousTree1.on('click', ()=>{
        alert('There\'s no trace of team rocket but you found some footprints leading to the beach and deeper into the forest.')
        alert('There\'s also a note stating .... spores.... rocks....')
        alert('Might be worth checking them out for clues!')
        $enterBeach.show()
        $enterDeepForest.show()
    }) 
    $enterCave.on('click', ()=>{
        playButtonSound()
        $forest.hide()
        $cave.show()
        caveBgm()
    })

    $beachButton1.on('click', ()=>{
        playButtonSound()
        $beach.hide()
        $forest.show()
    })
    $suspiciousRock.on('click', ()=>{
        playButtonSound()
        $suspiciousRock.hide()
        suspiciousRockMoves()
        $suspiciousRock1.show()
    })
    $suspiciousRock1.on('click', ()=>{
        $suspiciousRock1.hide()
        alert('The team rocket member is nowhere to be found, but there\'s something on the ground.')
        alert('You found a half of a map.')
        cavemap++
        unlockCave()
    })
    $swim.on('click', ()=>{
        playButtonSound()
        alert('You had a good swim.')
        swimCounter++
        if (swimCounter%3 === 0){
            alert('Something snagged your leg while swimming!')
            currentLocation = $beach
            battleBgm()
            beachBattle()
        }
    })

    $deepForestButton1.on('click', ()=>{
        playButtonSound()
        $deepForest.hide()
        $forest.show()
    })
    $suspiciousMoss.on('click', ()=>{
        playButtonSound()
        $suspiciousMoss.hide()
        suspiciousMossMoves()
        $suspiciousMoss1.show()
    })
    $suspiciousMoss1.on('click', ()=>{
        $suspiciousMoss1.hide()
        alert('The team rocket member is nowhere to be found, but there\'s something on the ground.')
        alert('You found a half of a map.')
        cavemap++
        unlockCave()
    })
    $playWithShrooms.on('click', ()=>{
        playButtonSound()
        alert('You played with the shrooms.')
        shroomCounter++
        if (shroomCounter%3 === 0){
            alert('Something moved!')
            currentLocation = $deepForest
            battleBgm()
            deepForestBattle()
        }
    })

    $caveToForest.on('click', ()=>{
        playButtonSound()
        $cave.hide()
        $forest.show()
        forestBgm()
    })
    $caveToDeepCave.on('click', ()=>{
        playButtonSound()
        $cave.hide()
        $deepCave.show()
    })
    $suspiciousObject.on('click', ()=>{
        playButtonSound()
        $suspiciousObject.hide()
        $suspiciousObject1.show()
        suspiciousObjectMoves()
    })
    $suspiciousObject1.on('click', ()=>{
        $suspiciousObject1.hide()
        alert('The team rocket member is nowhere to be found.')
        alert('You hear some noise from deeper in the cave.')
        $caveToDeepCave.show()
    })
    $kickRock.on('click', ()=>{
        playButtonSound()
        alert('You kicked a rock deep into the cave.')
        rockCounter++
        if (rockCounter%3 === 0){
            alert('Something moved!')
            currentLocation = $cave
            battleBgm()
            caveBattle()
        }
    })

    $deepCaveToCave.on('click', ()=>{
        playButtonSound()
        $deepCave.hide()
        $cave.show()
    })
    $suspiciousThing.on('click', ()=>{
        playButtonSound()
        $suspiciousThing.hide()
        $suspiciousThing1.show()
        suspiciousThingMoves()
    })
    $suspiciousThing1.on('click', ()=>{
        $suspiciousThing1.hide()
        alert('Team Rocket is nowhere to be found, but there\'s something on the ground.')
        alert('You retrived the stolen package!')
        $professorOak3.hide()
        $professorOak4.show()
    })



    //////////////////////////////////////      FUNCTIONS         /////////////////////////////////////

    function choosePokemonButtons(){
            // create choose pokemon buttons
        for (let i = 0; i < choosePokemonArray.length; i++){
            let $button = $('<button>').addClass(choosePokemonArray[i]).addClass('choosePokemonButton').text(choosePokemonArray[i].charAt(0).toUpperCase()+choosePokemonArray[i].slice(1))
            $button.addClass('alert-success')
            $oakLabDiv1.append($button)
        }

    
        let chosenPokemon = ''
        let rivalPokemon = ''

        // click button should push chosen pokemon to userpokemonlist
        $('.choosePokemonButton').on('click', (event)=>{
            playButtonSound()
            if (event.currentTarget.classList[0] === 'charmander'){
                alert('You chose charmander!')
                chosenPokemon = charmander
                rivalPokemon = squirtle
            } else if (event.currentTarget.classList[0] === 'squirtle'){
                alert('You chose squirtle!')
                chosenPokemon = squirtle
                rivalPokemon = bulbasaur
            } else if (event.currentTarget.classList[0] === 'bulbasaur'){
                alert('You chose bulbasaur!')
                chosenPokemon = bulbasaur
                rivalPokemon = charmander
            }
            $pikachuDiv.hide()
            $('.choosePokemonButton').hide()
            $professorOak2.show()

            userPokemonList.push(chosenPokemon)
            rivalPokemonList.push(rivalPokemon)

            let localStoragePokemonList = {
                userPokemonList: userPokemonList,
                rivalPokemonList: rivalPokemonList,
            }
            let localStoragePageData = {
                pageFlow: 1
            }

            myStorage.pokemonList = JSON.stringify(localStoragePokemonList)
            console.log(myStorage.pokemonList)
            myStorage.pageData = JSON.stringify(localStoragePageData)
            console.log(myStorage.pageData)
        })  

        $pikachuDiv = $('<div>').addClass('pikachu')
        $oakLabDiv0.append($pikachuDiv)

        $pikachuDiv.on('click', ()=>{
            unlockPikachu++
            if (unlockPikachu%5 === 0){
                playThundershock()
                alert('Professor Oak: You need to choose from the PokeBalls!')
            }
            if (unlockPikachu === 25){
                $pikachuDiv.hide()
                $('.choosePokemonButton').hide()
                $professorOak2.show()
                alert('Professor Oak: Alright, alright. Since you\'re so persistent, I have a surprise for you!')
                alert('You received pikachu!')
                chosenPokemon = pikachu
                rivalPokemon = eevee
            }
            userPokemonList.push(chosenPokemon)
            rivalPokemonList.push(rivalPokemon)
        })
    }
    function meadowBattle(){
        $meadow.hide()
        randomEncounter(randomPokemon1)
        randomBattle()
        $battle.css('background-image', 'url("css/images/meadowbattle.jpg")')
        // $battle.css('background-image', 'white')
    }
    function beachBattle(){
        $beach.hide()
        randomEncounter(randomPokemon3)
        randomBattle()
        $battle.css('background-image', 'url("css/images/beachbattle.png")')
        // $battle.css('background-image', 'white')
    }
    function deepForestBattle(){
        $deepForest.hide()
        randomEncounter(randomPokemon4)
        randomBattle()
        $battle.css('background-image', 'url("css/images/forestbattle.png")')
        // $battle.css('background-image', 'white')
    }
    function caveBattle(){
        $cave.hide()
        randomEncounter(randomPokemon5)
        randomBattle()
        $battle.css('background-image', 'url("css/images/cavebattle.png")')
        // $battle.css('background-image', 'white')
    }

    function battleRival (){
        battleOpponent.push(rival)
        currentLocation = $mainTown
    }
    function teamRocketAppears(){
        alert('Prepare for trouble! And make it double!')
        alert('To protect the world from devastation! To unite all peoples within our nation! ')
        alert('To denounce the evils of truth and love! To extend our reach to the stars above!')
        alert('Jessie! James!')
        alert('Team rocket blasts off in the speed of light! Surrender now or prepare to fight!')
        battleTeamRocket1()
    }    
    function battleTeamRocket1(){
        $forest.hide()
        battleOpponent.push(teamRocket1)
        battle2Bgm()
        battle()
        currentLocation = $forest
        $battle.css('background-image', 'url("css/images/forestbattle.png")')
    }
    function randomBattle2(){
        currentLocation = $forest
        battleBgm()
        $forest.hide()
        randomEncounter(randomPokemon2)
        randomBattle()
        // clearInterval(setInterval(randomBattle2, 10000))
    }
    function suspiciousRockMoves(){
        alert('The suspicious rock starts moving, and someone appears behind it!')
        battleTrainer1()
    }
    function battleTrainer1(){
        $beach.hide()
        battleOpponent.push(trainer1)
        battle2Bgm()
        battle()
        currentLocation = $beach
        $battle.css('background-image', 'url("css/images/beachbattle.png")')
    }
    function suspiciousMossMoves(){
        alert('The suspicious Moss starts moving, and someone appears behind it!')
        battleTrainer2()
    }
    function battleTrainer2(){
        $deepForest.hide()
        battleOpponent.push(trainer2)
        battle2Bgm()
        battle()
        currentLocation = $deepForest
        $battle.css('background-image', 'url("css/images/forestbattle.png")')
    }
    function unlockCave(){
        if (cavemap === 2){
            alert('You joined two pieces of map and found a hidden entrance!')
            alert('There is an X marked on the northeast of the map')
            alert(userPokemonList[0].name + ' learned a new skill!')
            $enterCave.show()
            pokemonLearnNewSkill()
        }
    }
    function pokemonLearnNewSkill(){
        if(userPokemonList[0].name === 'Pikachu'){
            userPokemonList[0].skills.push(newPikachuSkill)
        } else if(userPokemonList[0].name === 'Charmander'){
            userPokemonList[0].skills.push(newCharmanderSkill)
        } else if(userPokemonList[0].name === 'Squirtle'){
            userPokemonList[0].skills.push(newSquirtleSkill)
        } else if(userPokemonList[0].name === 'Bulbasaur'){
            userPokemonList[0].skills.push(newCharmanderSkill)
        }
    }

    function suspiciousObjectMoves(){
        alert('Team Rocket Member: Who goes there?!')
        battleTrainer3()
    }
    function battleTrainer3(){
        $cave.hide()
        battleOpponent.push(trainer3)
        battle2Bgm()
        battle()
        currentLocation = $cave
        $battle.css('background-image', 'url("css/images/cavebattle.png")')
    }
    function suspiciousThingMoves(){
        alert('You found the source of the sound!')
        battleTeamRocket2()
    }
    function battleTeamRocket2(){
        $deepCave.hide()
        battleOpponent.push(teamRocket2)
        lastBattleBgm()
        battle()
        currentLocation = $deepCave
        $battle.css('background-image', 'url("css/images/deep_cave.png")')
    }
    function exitBattle(){
        $battle.hide()
        currentLocation.show()
        playCurrentBgm()
        checkIfRivalDefeated()
        checkIfTeamRocket1Defeated()
        checkIfTeamRocket2Defeated()
    }
    function goToPokeCentre(){
        $battle.hide()
        $pokeCentre.show()
        $pokeCentreNurse.hide()
        $pokeCentreToTown.hide()
        $respawnButton.show()
        pokecentreBgm()
    }
    function userPokemonAnimation(){
        $('.userPicture').addClass('userAnimation')
    }
    function enemyPokemonAnimation(){
        $('.enemyPicture').addClass('enemyAnimation')
    }
    function randomEncounter(pokeArray){
        randomEncounterIndex = Math.floor(Math.random()*pokeArray.length)
        enemyBattlePokemon.push(pokeArray[randomEncounterIndex])
    }
    function checkIfRivalDefeated(){
        if (rival.pokemonList.length === 0){
            alert(rival.name + ': Hmph, you just got lucky this time.')
            // alert(rival.name + ': Gramps told me to pass you this.')
            alert(rival.name + ': See you, loser!')
            rival.pokemonList.push(eevee)
        }
    }
    function checkIfTeamRocket1Defeated(){
        if (teamRocket1.pokemonList.length === 0){
            alert('Team Rocket: How... can you be so strong!')
            alert('Team Rocket: Retreat! Retreat!')
            alert('Team Rocket used a smoke bomb and vanished!')
            alert('Something fell on the ground!')
            teamRocket1.pokemonList.push(koffing)
        }
    }
    function checkIfTeamRocket2Defeated(){
        if (teamRocket2.pokemonList.length === 0){
            alert('Team Rocket: Team Rocket\'s blasting off again!')
            alert('Team Rocket disappeared in the distance, but something dropped down.')
            teamRocket2.pokemonList.push(koffing)
        }
    }

    function battle(){
        $battle.show()

        currentPokemon = userPokemonList[0]
        userBattlePokemon = userPokemonList[0]
        enemyName = battleOpponent[0].name
        enemyPokemonList = battleOpponent[0].pokemonList

        let $battleDiv1 = $('<div>').addClass('battleDiv1')
        $battle.append($battleDiv1)
        let $battleDiv2 = $('<div>').addClass('battleDiv2')
        $battle.append($battleDiv2)

        // create battle containers
        for (let i = 0; i < battleContainerArray.length; i++){
            let $display = $('<div>').addClass(battleContainerArray[i])
            if (i%2 === 0){
                $battleDiv1.append($display)
            } else {
                $battleDiv2.append($display)
            }
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

        $progress1 = $('<div>').addClass('progress')
        $enemyInfoDisplay.append($progress1)

        $progressBar1 = $('<div>').addClass('progress-bar1').text('100%').addClass('bg-success')
        $progressBar1.attr('style', 'width: 100%').attr('aria-valuenow', '25').attr('aria-valuemin', '0').attr('aria-valuemax', '100')
        $progress1.append($progressBar1)
        $progress1.hide()

        
        $progress2 = $('<div>').addClass('progress')
        $userInfoDisplay.append($progress2)

        $progressBar2 = $('<div>').addClass('progress-bar2').text('100%').addClass('bg-success')
        $progressBar2.attr('style', 'width: 100%').attr('aria-valuenow', '25').attr('aria-valuemin', '0').attr('aria-valuemax', '200')
        $progress2.append($progressBar2)
        $progress2.hide()



        // split alert box to 2 divs
        for (let i = 0; i < 2; i++){
            $splitDisplay = $('<div>').addClass('splitDisplay').attr('id', 'alertDisplay'+i)
            $alertBox.append($splitDisplay)
        }

        for (let i = 0; i < 12; i++){
            let $alertButton = $('<button>').addClass('alertButton'+i).text('Next').addClass('alertButtons').hide()
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
            $('#alertDisplay0').text(player.name + ' chose '+ currentPokemon.name)
            displayUserInfo()
            $progress2.show()
    
            $alertButton11.show()
        })

        $alertButton1.on('click', ()=>{
            $alertButton1.hide()
            updateEnemyHealth()
            checkEnemyHealth()
            $('.userPicture').removeClass('userAnimation')
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
            $enemyPicture.removeClass('enemyAnimation')
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
            battleOpponent.pop()
            enemyPokemonList.length = 0
            enemyBattlePokemon.length = 0
            userCurrentHealth = userFullHealth
        })

        $alertButton8.on('click', ()=>{
            $alertButton8.hide()
            $battle.empty()
            battleOpponent.pop()
            enemyPokemonList.length = 0
            enemyBattlePokemon.length = 0
            exitBattle()
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

            enemyBattlePokemon.push(enemyPokemonList[0])
            enemyPokemonList.shift()

            setEnemyHealth()
            displayEnemyInfo()
            $progress1.show()

            $('#alertDisplay0').text(enemyName + ' choose ' + enemyBattlePokemon[0].name)
            showBattleButtons()
        })

        $fightButton.on('click', ()=>{
            hideBattleButtons()
            showSkillButtons()
        })

        $itemButton.on('click', ()=>{
            $('#alertDisplay0').text(player.name + ' do not have any items!')
        })

        $changePokemonButton.on('click', ()=>{
            $('#alertDisplay0').text(player.name + ' have only one pokemon now!')
        })

        $runButton.on('click', ()=>{
            $('#alertDisplay0').text('You can\'t run away!')
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
            userPercentage = Math.round(userCurrentHealth/userFullHealth*100)
            $progressBar2.text(`${userPercentage}%`)
            $progressBar2.attr('style', `width: ${userPercentage}%`)
        }

        function displayEnemyInfo(){
            $('#enemyDisplay0').text('Level '+ enemyBattlePokemon[0].level + ' ' + enemyBattlePokemon[0].name)
            $('#enemyDisplay1').text('Health Points: '+ enemyCurrentHealth + ' / ' + enemyFullHealth)
            $enemyPicture.css('background-image', `url(${enemyBattlePokemon[0].image})`)
            enemyPercentage = enemyCurrentHealth/enemyFullHealth*100
            $progressBar1.text(`${enemyPercentage}%`)
            $progressBar1.attr('style', `width: ${enemyPercentage}%`)
        }

        function updateUserHealth () {
            $('#userDisplay1').text('Health Points: '+ userCurrentHealth + ' / ' + userFullHealth)
            console.log(currentPokemon.name + ' has ' + userCurrentHealth + ' hitpoints left.')
            userPercentage = Math.round(userCurrentHealth/userFullHealth*100)
            $progressBar2.text(`${userPercentage}%`)
            $progressBar2.attr('style', `width: ${userPercentage}%`)
        }

        function updateEnemyHealth () {
            $('#enemyDisplay1').text('Health Points: '+ enemyCurrentHealth + ' / ' + enemyFullHealth)
            console.log(enemyBattlePokemon[0].name + ' has ' + enemyCurrentHealth + ' hitpoints left.')
            enemyPercentage = Math.round(enemyCurrentHealth/enemyFullHealth*100)
            $progressBar1.text(`${enemyPercentage}%`)
            $progressBar1.attr('style', `width: ${enemyPercentage}%`)
        }

        function enemyAttack() {
            let enemyPokemonSkillsArray = Object.keys(enemyBattlePokemon[0].skills)
            random = Math.floor(Math.random()*enemyPokemonSkillsArray.length)
            userCurrentHealth = userCurrentHealth - enemyBattlePokemon[0].skills[random].damage
            enemyPokemonAnimation()
            if (userCurrentHealth <= 0){
                userCurrentHealth = 0;
            }
            $('#alertDisplay0').text(enemyBattlePokemon[0].name + ' used ' + enemyBattlePokemon[0].skills[random].name + '.')
            playEnemySound()
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
                $alertButton2.show()
            } else {
                $('#alertDisplay0').text(enemyBattlePokemon[0].name + ' has ' + enemyCurrentHealth + ' hitpoints left.')
                $alertButton3.show()
            }
        }

        // currently only have 1 pokemon, so automatically lose if pokemon dies
        function checkUserPokemonAvailability(){
            $('#alertDisplay0').text('You have no pokemon left!')
            loseBattle()
        }

        function checkEnemyPokemonAvailability(){
            if (enemyPokemonList.length === 0){
                $('#alertDisplay0').text(enemyName + ' has no pokemon left!')
                winBattle()
            } else {
                enemyBattlePokemon.pop()
                enemyBattlePokemon.push(enemyPokemonList[0])
                $('#alertDisplay0').text(battleOpponent[0].name + ' chose ' + enemyBattlePokemon[0].name + '.')
                enemyPokemonList.shift()

                setEnemyHealth()
                displayEnemyInfo()
                $alertButton9.show()
            }
        }
        
        function loseBattle(){
            $('#alertDisplay0').text(player.name + ' has no pokemon left!')
            hideBattleButtons()
            $alertButton7.show()
        }

        function winBattle(){
            $('#alertDisplay0').text(enemyName + ' has no pokemon left!')
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

        $('#alertDisplay0').text(enemyName + ' challenged you to a battle!')
        // $('#alertDisplay0').text(enemyName + ' would like to battle')
        $enemyPicture.css('background-image', `url(${battleOpponent[0].backgroundImg})`)

        $('#userDisplay0').text(player.name)
        $('#enemyDisplay0').text(enemyName)
        $userPicture.css('background-image', `url(${player.backgroundImg})`)

        $alertButton0.show()
        let chosenSkill

        for (let i = 0; i < userPokemonSkillsArray.length; i++){
            $('#skill'+i).on('click', (event)=>{
                event.preventDefault()

                userPokemonAnimation()
                enemyCurrentHealth = enemyCurrentHealth - currentPokemon.skills[i].damage
                if (enemyCurrentHealth <= 0){
                    enemyCurrentHealth = 0;
                }
                hideSkillButtons()
                $('#alertDisplay0').text(currentPokemon.name + ' used ' + currentPokemon.skills[i].name + '.')
                chosenSkill = currentPokemon.skills[i].name
                playUserSound(chosenSkill)
                $alertButton1.show()
            })
        }
    }
    function randomBattle(){
        $('.battle').show()
        let currentPokemon = userPokemonList[0]
        let $battleDiv1 = $('<div>').addClass('battleDiv1')
        $('.battle').append($battleDiv1)
        let $battleDiv2 = $('<div>').addClass('battleDiv2')
        $('.battle').append($battleDiv2)

        // create battle containers
        for (let i = 0; i < battleContainerArray.length; i++){
            let $display = $('<div>').addClass(battleContainerArray[i])

            if (i%2 === 0){
                $battleDiv1.append($display)
            } else {
                $battleDiv2.append($display)
            }
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

        $progress1 = $('<div>').addClass('progress')
        $enemyInfoDisplay.append($progress1)

        $progressBar1 = $('<div>').addClass('progress-bar1').text('100%').addClass('bg-success')
        $progressBar1.attr('style', 'width: 100%').attr('aria-valuenow', '25').attr('aria-valuemin', '0').attr('aria-valuemax', '100')
        $progress1.append($progressBar1)
        
        $progress2 = $('<div>').addClass('progress')
        $userInfoDisplay.append($progress2)

        $progressBar2 = $('<div>').addClass('progress-bar2').text('100%').addClass('bg-success')
        $progressBar2.attr('style', 'width: 100%').attr('aria-valuenow', '25').attr('aria-valuemin', '0').attr('aria-valuemax', '200')
        $progress2.append($progressBar2)
        $progress2.hide()


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
            let $alertButton = $('<button>').addClass('alertButton'+i).text('Next').addClass('alertButtons').hide()
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
            $('#alertDisplay0').text(player.name + ' chose '+ currentPokemon.name)
            displayUserInfo()
            $progress2.show()

            $alertButton11.show()
        })

        $alertButton1.on('click', ()=>{
            $alertButton1.hide()
            updateEnemyHealth()
            checkEnemyHealth()
            $('.userPicture').removeClass('userAnimation')
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
            $enemyPicture.removeClass('enemyAnimation')
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
            exitBattle()
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
            hideBattleButtons()
            showSkillButtons()
        })

        $itemButton.on('click', ()=>{
            $('#alertDisplay0').text(player.name + ' do not have any items!')
        })

        $cancelItem = $('<button>').addClass('cancelItem').text('Cancel')
        $('.battleCommandsDisplay').append($cancelItem)
        $cancelItem.hide()

        $cancelItem.on('click', ()=>{
            $cancelItem.hide()
            showBattleButtons()
        })

        $changePokemonButton.on('click', (event)=>{
            $('#alertDisplay0').text(player.name + ' only have 1 pokemon now.')
        })

        $runButton.on('click', ()=>{
            $('#alertDisplay0').text('You can\'t run away!')
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
            userPercentage = Math.round(userCurrentHealth/userFullHealth*100)
            $progressBar2.text(`${userPercentage}%`)
            $progressBar2.attr('style', `width: ${userPercentage}%`)
        }
        function displayEnemyInfo(){
            $('#enemyDisplay0').text('Level '+ enemyBattlePokemon[0].level + ' ' + enemyBattlePokemon[0].name)
            $('#enemyDisplay1').text('Health Points: '+ enemyCurrentHealth + ' / ' + enemyFullHealth)
            $enemyPicture.css('background-image', `url(${enemyBattlePokemon[0].image})`)
            enemyPercentage = enemyCurrentHealth/enemyFullHealth*100
            $progressBar1.text(`${enemyPercentage}%`)
            $progressBar1.attr('style', `width: ${enemyPercentage}%`)
        }

        function updateUserHealth () {
            $('#userDisplay1').text('Health Points: '+ userCurrentHealth + ' / ' + userFullHealth)
            console.log(currentPokemon.name + ' has ' + userCurrentHealth + ' hitpoints left.')
            userPercentage = Math.round(userCurrentHealth/userFullHealth*100)
            $progressBar2.text(`${userPercentage}%`)
            $progressBar2.attr('style', `width: ${userPercentage}%`)
        }

        function updateEnemyHealth () {
            $('#enemyDisplay1').text('Health Points: '+ enemyCurrentHealth + ' / ' + enemyFullHealth)
            console.log(enemyBattlePokemon[0].name + ' has ' + enemyCurrentHealth + ' hitpoints left.')
            enemyPercentage = Math.round(enemyCurrentHealth/enemyFullHealth*100)
            $progressBar1.text(`${enemyPercentage}%`)
            $progressBar1.attr('style', `width: ${enemyPercentage}%`)
        }

        function enemyAttack() {
            let enemyPokemonSkillsArray = Object.keys(enemyBattlePokemon[0].skills)
            random = Math.floor(Math.random()*enemyPokemonSkillsArray.length)
            userCurrentHealth = userCurrentHealth - enemyBattlePokemon[0].skills[random].damage
            playEnemySound()
            enemyPokemonAnimation()
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
                $('#alertDisplay0').text(player.name + ' have no pokemon left!')
                loseBattle()
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

                userPokemonAnimation()
                enemyCurrentHealth = enemyCurrentHealth - currentPokemon.skills[i].damage
                playUserSound(currentPokemon.skills[i].name)
                if (enemyCurrentHealth <= 0){
                    enemyCurrentHealth = 0;
                }
                hideSkillButtons()
                $('#alertDisplay0').text(currentPokemon.name + ' used ' + currentPokemon.skills[i].name + '.')
                
                $alertButton1.show()
            })
        }
    }

    function endGame(){
    $professorOaksLab.hide()
    $endGamePage.show()
    endingBgm()
    }
})




