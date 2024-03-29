export type Orientation = 'right' | 'down';

export type PlacedPiece = {
    id: string;
    x: ColOrRowNum;
    y: ColOrRowNum;
    orientation: Orientation;
};

export type Cell = {
    id: string;
    x: ColOrRowNum;
    y: ColOrRowNum;
};

export type ColOrRowNum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type Position = { x: ColOrRowNum; y: ColOrRowNum };
export function areSamePos(a: Position, b: Position): boolean {
    return a.x === b.x && a.y === b.y;
}

export function createCells(): Cell[] {
    const cells: Cell[] = [];
    for (let i = 0; i < 64; i++) {
        const x = (i % 8) as ColOrRowNum;
        const y = Math.floor(i / 8) as ColOrRowNum;
        const id = 'cell_' + x + ',' + y;
        cells.push({ id, x, y });
    }
    return cells;
}
export const allCells = createCells();
