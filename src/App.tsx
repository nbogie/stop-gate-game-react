import { useState } from 'react';
import { CellViews } from './CellViews';
import { PlacedPieceView } from './PlacedPieceView';
import { isLegalPiecePlacement } from './isLegalPiecePlacement';
import { Cell, ColOrRowNum, PlacedPiece } from './types';
import { TurnIndicator } from './TurnIndicator';

const allCells = createCells();

function App() {
    const [placedPieces, setPlacedPieces] = useState<PlacedPiece[]>([]);
    const whoseTurn = placedPieces.length % 2 === 0 ? 'red' : 'blue'; //always derive state rather than store it, where possible

    function handleClickAtCell(cell: Cell) {
        const pieceOrNull = isLegalPiecePlacement(
            cell,
            whoseTurn,
            placedPieces
        );
        if (pieceOrNull) {
            setPlacedPieces((prev) => [...prev, pieceOrNull]);
        }
    }

    return (
        <div className="app">
            <>
                <h1>Stop-Gate</h1>
                <div className="boardGrid">
                    {/* We add these cells to add click-handlers at each
                    square (and they give the grid its width).  Alternatively, we could use one click handler which computes position
                    based on click coords, and specify the grid's overall width. */}
                    <CellViews
                        cells={allCells}
                        handleClickAtCell={handleClickAtCell}
                    />
                    {placedPieces.map((piece) => {
                        return <PlacedPieceView piece={piece} key={piece.id} />;
                    })}
                </div>
                <TurnIndicator whoseTurn={whoseTurn} />
            </>
        </div>
    );
}

export default App;

function createCells(): Cell[] {
    const cells: Cell[] = [];
    for (let i = 0; i < 64; i++) {
        const x = (i % 8) as ColOrRowNum;
        const y = Math.floor(i / 8) as ColOrRowNum;
        const id = 'cell_' + x + ',' + y;
        cells.push({ id, x, y });
    }
    return cells;
}
