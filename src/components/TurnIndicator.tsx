export function TurnIndicator({ whoseTurn }: { whoseTurn: 'red' | 'blue' }) {
    const c1Contents = whoseTurn === 'red' ? 'red' : 'blue';
    const c2Contents = whoseTurn === 'red' ? 'red' : null;
    const c3Contents = whoseTurn === 'red' ? null : 'blue';
    return (
        <div className="turnIndicator">
            <div className="turnIndicatorWords">It is {whoseTurn}'s turn</div>
            <div>
                <div className="demoGrid">
                    <div className={`demoCell ${c1Contents}`}></div>
                    <div className={`demoCell ${c2Contents}`}></div>
                    <div className={`demoCell ${c3Contents}`}></div>
                    <div className={`demoCell`}></div>
                </div>
            </div>
        </div>
    );
}
