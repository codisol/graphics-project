export { Piece }

class Piece {
    static PAWN = "pawn"
    static LANCE = "lance"
    static ROOK = "rook"
    static BISHOP = "bishop"

    static GOTE = 1
    static SENTE = -1

    constructor(type, row, col, side, mesh) {
        this.type = type
        this.row = row
        this.col = col
        this.side = side
        this.mesh = mesh
    }

    getPossibleMoves() {}
}

class Pawn extends Piece {
    constructor(row, col, side, mesh) {
        super(Piece.PAWN, row, col, side, mesh)
    }

    getPossibleMoves(board) {
        const new_row = self.row + (this.side)
        if (board[new_row][self.col] == null ||
            board[new_row][self.col].side == this.side)
            return []
        return [[new_row, self.col]]
    }
}

class Lance extends Piece {
    constructor(row, col, side, mesh) {
        super(Piece.LANCE, row, col, side, mesh)
    }
    
    getPossibleMoves() {
        const moves = []
        for (let i = row; i <= 9; i++) moves.push([])
        return moves;
    }
}
