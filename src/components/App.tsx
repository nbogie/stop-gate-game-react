import { useState } from 'react';
import { isLegalPiecePlacement } from '../gameCore/isLegalPiecePlacement';
import { Cell, PlacedPiece, allCells } from '../gameCore/types';
import { CellViews } from './CellViews';
import { PlacedPieceView } from './PlacedPieceView';
import { TurnIndicator } from './TurnIndicator';

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
                    {/* We add these cells to add click-handlers at each square (and they give the grid its width).  
                    
                    Alternatively, we could use one click handler which computes position
                     based on click coords, and specify the grid's overall width. */}
                    <CellViews
                        cells={allCells}
                        handleClickAtCell={handleClickAtCell}
                    />

                    {/* place the pieces */}
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
