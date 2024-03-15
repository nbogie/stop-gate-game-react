import { Cell, PlacedPiece, Position, areSamePos, ColOrRowNum } from './types';

export function isLegalPiecePlacement(
    cell: Cell,
    whoseTurn: string,
    placedPieces: readonly PlacedPiece[]
): PlacedPiece | null {
    const id = 'piece_' + cell.id; //there can't be more than one piece with this cell as its home

    const piece: PlacedPiece = {
        id,
        x: cell.x,
        y: cell.y,
        orientation: whoseTurn === 'blue' ? 'down' : 'right',
    };

    function isEmpty(pos: Position) {
        return !placedPieces.some((piece) => isPieceAtPosition(piece, pos));
    }

    const positions = getPositionsForPiece(piece);

    if (positions.every(isInboundsPosition) && positions.every(isEmpty)) {
        return piece;
    } else {
        return null;
    }
}
function isPieceAtPosition(piece: PlacedPiece, queriedPos: Position): boolean {
    return getPositionsForPiece(piece).some((pos) =>
        areSamePos(pos, queriedPos)
    );
}

function getPositionsForPiece(piece: PlacedPiece): Position[] {
    const firstPos = { x: piece.x, y: piece.y };
    const secondPos =
        piece.orientation === 'right'
            ? { x: (piece.x + 1) as ColOrRowNum, y: piece.y }
            : { x: piece.x, y: (piece.y + 1) as ColOrRowNum };
    return [firstPos, secondPos];
}

function isInboundsPosition(value: {
    x: number;
    y: number;
}): value is Position {
    const { x, y } = value;
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}
