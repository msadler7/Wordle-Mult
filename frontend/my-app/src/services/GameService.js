class GameService {
    choice = ''
    choices = []

    constructor(word, setBoard) {
        this.word = word
        this.setBoard = setBoard
    }

    handleKeyDown(e) {

        switch(e.key){
            case ('Backspace'):
                this.choice = this.choice.substring(0, this.choice.length - 1)
                return
            case ('Enter'):
                if (this.choice.length === 5){
                    this.choices.push(this.choice)
                    this.setBoard([...this.choices])
                    this.choice = ''
                }
                return
            default:
                if (e.key.match(/[A-Za-z]/) && this.choice.length < 5){
                    this.choice += e.key
                }
        }
    }

}

export default GameService