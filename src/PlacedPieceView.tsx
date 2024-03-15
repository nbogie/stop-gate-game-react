import { PlacedPiece } from './types';

export function PlacedPieceView({
    piece,
}: {
    piece: PlacedPiece;
}): JSX.Element {
    const isVertical = piece.orientation === 'down';
    const style = {
        gridRowStart: piece.y + 1,
        gridRowEnd: piece.y + (isVertical ? 3 : 2),
        gridColumnStart: piece.x + 1,
        gridColumnEnd: piece.x + (isVertical ? 2 : 3),
        backgroundColor:
            piece.orientation === 'right' ? 'tomato' : 'dodgerblue',
        opacity: 1,
    };
    return <div style={style} className="placedPiece"></div>;
}
