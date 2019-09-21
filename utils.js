const areSameColor = (piece1, piece2) => {
    return (piece1 > 0 && piece2 > 0) || (piece1 < 0 && piece2 < 0)
}

const isValidPosition = (pos) => {
    return !(pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7)
}

const getElement = (board, pos) => {
    if (!isValidPosition(pos)) {
        return
    }
    return board[pos[0]][pos[1]]
}

const setElement = (board, pos, ele) => {
    if (!isValidPosition(pos)) {
        return
    }
    board[pos[0]][pos[1]] = ele   
}

const getOffsetPos = (pos, offset) => {
    return [
        pos[0] - offset[1],
        pos[1] + offset[0]
    ]
}

const getColorByPos = (board, piecePos) => {
    const piece = getElement(board, piecePos)
    if (piece > 0) return 1
    else if (piece < 0) return -1
    else return 0
}

const getPositions = (board, piece) => {
    let positions = []
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === piece) {
                positions.push([i, j])
            }
        }
    }
    return positions
}

const checkIfSamePosition = (pos1, pos2) => {
    return pos1[0] === pos2[0] && pos1[1] === pos2[1]
}

module.exports = {
    areSameColor,
    getElement,
    setElement,
    getOffsetPos,
    getColorByPos,
    getPositions,
    checkIfSamePosition,
}