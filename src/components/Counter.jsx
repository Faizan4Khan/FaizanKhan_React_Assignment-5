import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function decreaseCount() {
        setCount((previousCount) => Math.max(0, previousCount - 1));
    }

    return (
        <section className="counter-panel" aria-labelledby="counter-title">
            <div className="panel-heading">
                <div>
                    <p className="eyebrow">A little state practice</p>
                    <h2 id="counter-title">Counter</h2>
                </div>
                <span className="counter-mark" aria-hidden="true">01</span>
            </div>

            <div className="counter-display" aria-live="polite" aria-atomic="true">
                {count}
            </div>

            <div className="counter-actions">
                <button className="button button-primary" type="button" onClick={() => setCount((previousCount) => previousCount + 1)}>
                    <span aria-hidden="true">+</span> Increase
                </button>
                <button className="button button-secondary" type="button" onClick={decreaseCount}>
                    <span aria-hidden="true">−</span> Decrease
                </button>
                <button className="button button-quiet" type="button" onClick={() => setCount(0)}>
                    Reset
                </button>
            </div>
            <p className="counter-note">The count stays at zero or above.</p>
        </section>
    );
}

export default Counter;
