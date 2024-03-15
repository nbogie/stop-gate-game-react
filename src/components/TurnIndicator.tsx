export function TurnIndicator({ whoseTurn }: { whoseTurn: 'red' | 'blue' }) {
    return (
        <div className="turnIndicator">
            <div className="turnIndicatorWords">It is {whoseTurn}'s turn</div>

            <div>
                <DemoGrid whoseTurn={whoseTurn} />
            </div>
        </div>
    );
}

/* little diagram of red or blue's piece orientation */
function DemoGrid({ whoseTurn }: { whoseTurn: 'red' | 'blue' }) {
    //1 2
    //3 4
    const c1Contents = whoseTurn === 'red' ? 'red' : 'blue';
    const c2Contents = whoseTurn === 'red' ? 'red' : null;
    const c3Contents = whoseTurn === 'red' ? null : 'blue';
    return (
        <div className="demoGrid">
            <div className={`demoCell ${c1Contents}`}></div>
            <div className={`demoCell ${c2Contents}`}></div>
            <div className={`demoCell ${c3Contents}`}></div>
            <div className={`demoCell`}></div>
        </div>
    );
}
