import GameService from "./GameService"

class GameController{

    constructor(){
        this.game = null
    }

    startGame(){
        this.game = new GameService()
    }
}

export default GameController