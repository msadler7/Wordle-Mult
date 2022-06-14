class GameService {
    turn = 1
    input = []

    constructor(word, setBoard, socketService) {
        this.word = word
        this.setBoard = setBoard
        this.socketService = socketService
    }

    handleKeyDown(e) {

        switch (e.key) {
            case ('Backspace'):
                if (this.input.length > (this.turn - 1) * 5) {
                    this.input.pop()
                    this.setBoard([...this.input])
                }
                return
            case ('Enter'):
                if (this.input.length === this.turn * 5) {
                    let didWin = true

                    for (let selection of this.input.slice((this.turn - 1) * 5, this.turn * 5)) {
                        if (selection.code !== 2) {
                            didWin = false;
                            break
                        }
                    }

                    if (didWin) {
                        this.socketService.sendWinMessage()
                    }
                    this.turn++
                    for (let obj of this.input) {
                        obj.showColor = true
                    }
                    this.setBoard([...this.input])
                }
                return
            default:
                if (e.key.match(/[A-Za-z]/) && this.input.length < this.turn * 5) {
                    let index = this.word.indexOf(e.key)
                    let code = 0

                    if (index === this.input.length - (5 * (this.turn - 1))) {
                        code = 2
                    }
                    else if (index !== -1) {
                        code = 1
                    }

                    this.input.push({
                        token: e.key,
                        code: code,
                        showColor: false
                    })

                    this.setBoard([...this.input])
                }
        }
    }

}

export default GameService