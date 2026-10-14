import Counter from './components/Counter.jsx';
import ProductLike from './components/ProductLike.jsx';
import './App.css';

const products = [
    { name: 'Laptop', number: '01', accent: 'accent-blue' },
    { name: 'Smartphone', number: '02', accent: 'accent-violet' },
    { name: 'Wireless Headphones', number: '03', accent: 'accent-coral' },
];

function App() {
    return (
        <main className="app-shell">
            <header className="hero">
                <div className="hero-copy">
                    <p className="eyebrow hero-eyebrow"><span /> React state lab</p>
                    <h1>Interactive Counter<br />&amp; Product Likes</h1>
                    <p className="hero-subtitle">
                        A hands-on look at React state management, functional updates, and reusable components.
                    </p>
                </div>
                <div className="hero-index" aria-hidden="true">
                    <span>ASSIGNMENT</span>
                    <strong>05</strong>
                    <span>USE STATE</span>
                </div>
            </header>

            <section className="counter-section" aria-label="Counter demo">
                <Counter />
                <aside className="concept-note">
                    <span className="concept-icon" aria-hidden="true">↗</span>
                    <div>
                        <p className="eyebrow">Independent state</p>
                        <p>Every card keeps its own like count. Try a few and see the others stay put.</p>
                    </div>
                </aside>
            </section>

            <section className="products-section" aria-labelledby="products-title">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">Choose your favorite</p>
                        <h2 id="products-title">Product likes</h2>
                    </div>
                    <span className="section-count">03 PRODUCTS</span>
                </div>
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductLike
                            key={product.name}
                            productName={product.name}
                            productNumber={product.number}
                            accent={product.accent}
                        />
                    ))}
                </div>
            </section>

            <footer className="page-footer">
                <span>BUILT WITH REACT</span>
                <span>One click, one state update.</span>
            </footer>
        </main>
    );
}

export default App;
