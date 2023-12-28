import React, { useState } from 'react';
import './productListing.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import { BookData } from '../../../util/BookData';

const ProductListing = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showNextCards = () => {
        setCurrentIndex(currentIndex + 4);
    };

    const showPreviousCards = () => {
        setCurrentIndex(Math.max(0, currentIndex - 4));
    };

    return (
        <div className="product-listing-container">
            <div className="container">
                <h2>Here are some <span className="text-primary">books</span> that you might like</h2>

                <div className="listing-container">
                    {BookData.slice(currentIndex, currentIndex + 4).map((book) => (
                        <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>

                <div className="slider-buttons">
                    <button onClick={showPreviousCards} disabled={currentIndex === 0}>Previous</button>
                    <button onClick={showNextCards} disabled={currentIndex + 4 >= BookData.length}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default ProductListing;
