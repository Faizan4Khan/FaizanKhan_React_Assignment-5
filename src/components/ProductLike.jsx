import { useState } from 'react';

function ProductLike({ productName, productNumber, accent }) {
    const [likeCount, setLikeCount] = useState(0);

    return (
        <article className={`product-card ${accent}`}>
            <div className="product-card-topline">
                <span className="product-number">{productNumber}</span>
                <span className="product-category">Featured pick</span>
            </div>
            <div className="product-art" aria-hidden="true">
                {productNumber === '01' && <span className="laptop-art"><i /></span>}
                {productNumber === '02' && <span className="phone-art"><i /></span>}
                {productNumber === '03' && <span className="headphones-art"><i /><b /></span>}
            </div>
            <div className="product-details">
                <div>
                    <h3>{productName}</h3>
                    <p>Everyday technology, thoughtfully chosen.</p>
                </div>
                <div className="like-row">
                    <span className="like-total" aria-label={`${likeCount} likes`}>
                        <span className="heart" aria-hidden="true">♥</span>
                        <span aria-live="polite" aria-atomic="true">{likeCount}</span>
                    </span>
                    <button
                        className="like-button"
                        type="button"
                        onClick={() => setLikeCount((previousCount) => previousCount + 1)}
                        aria-label={`Like ${productName}`}
                    >
                        <span aria-hidden="true">♡</span> Like
                    </button>
                </div>
            </div>
        </article>
    );
}

export default ProductLike;
