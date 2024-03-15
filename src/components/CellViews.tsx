import { Cell } from '../gameCore/types';

export function CellViews({
    cells,
    handleClickAtCell,
}: {
    cells: Cell[];
    handleClickAtCell: (cell: Cell) => void;
}): JSX.Element[] {
    return cells.map((cell) => {
        const styleForCell = {
            gridColumn: cell.x + 1,
            gridRow: cell.y + 1,
        };

        return (
            <div
                key={cell.id}
                className="cell"
                onClick={() => handleClickAtCell(cell)}
                style={styleForCell}
            ></div>
        );
    });
}
