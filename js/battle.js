

$(()=>{

    class Battle {
        constructor(enemyInfoDisplay,enemyPicture,userPicture,userInfoDisplay){
            this.enemyInfoDisplay = enemyInfoDisplay;
            this.enemyPicture = enemyPicture;
            this.userPicture = userPicture;
            this.userInfoDisplay = userInfoDisplay
            // this.alertBox = alertBox;
            // this.battleCommandsDisplay = battleCommandsDisplay
        }
    }

    // let alertMessage = alert('You have encountered a wild zubat')

    // if onclick on userbattlepokemon.skill === skill,
    // alert (userbattlepokemon + 'used '+ userbattlepokemon.skill)
    // if (userbattlePokemon.skill === )

    // let randomNum = math.floor(math.random()*2)
    // alert (enemybattlepokemon + 'used ' + enemybattlepokemon.skill[randomNum] )

    let a = 'enemy display'
    let b = '../css/images/pokemon/team_rocket.jpg'
    let c = '../css/images/pokemon/pikachu.jpg'
    let d = '../css/images/pokemon/pikachu.jpg'

    let pokeBattle = new Battle(a,b,c,d)
    pokeBattle.set = () => {
        let $enemyInfoDisplay = $('.enemyInfoDisplay')
        $enemyInfoDisplay.css('background-img', pokeBattle.enemyInfoDisplay)

        let $enemyPicture = $('.enemyPicture')
        $enemyPicture.css('background-img', pokeBattle.enemyPicture)

        let $userPicture = $('.userPicture')
        $userPicture.css('background-img', pokeBattle.userPicture)

        let $userInfoDisplay = $('.userInfoDisplay')
        $userInfoDisplay.css('background-img', pokeBattle.userInfoDisplay)
    }
})




