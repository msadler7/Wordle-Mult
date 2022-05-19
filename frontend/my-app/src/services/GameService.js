class GameService {
    turn = 1
    guess = ''
    choices = []

    constructor(word, changeState) {
        this.word = word
        this.changeState = changeState
    }

    handle(e) {

        if (e.key == 'Backspace'){
            this.guess = this.guess.substring(0, this.guess.length - 1)
            this.choices[this.turn] = this.guess
            this.changeState({boardState: this.choices})
            return
        }

        if (this.guess.length < 5) {
            this.guess += e.key
            this.choices[this.turn] = this.guess
            this.changeState({boardState: this.choices})
            return
        }

        if (this.guess.length == 5){
            if (e.key = "Enter"){
                this.turn += 1
                this.choices.push(this.guess)
            }
        }
    }

}

export default GameService