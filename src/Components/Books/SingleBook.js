import React from "react";
import "./Book.css";

const Book = ({ book }) => {
  const { name, author, price, cover } = book;
  return (
    <div className="book-card card">
      <div className="book-info">
        <div className="book-tag-discount">
          <b>5%</b> Discount
        </div>
        <div className="book-card-image">
          <img src={cover} alt="You Don't Know JS Yet: Get Started" />
        </div>
        <p className="book-title">{name}</p>
        <span className="book-author">{author}</span>
        <div>
          <div className="book-card-price">
            <span className="price-original">
              <small>৳</small>
              {price}
            </span>
            <span className="price-discount">
              <small>৳</small>
              2100
            </span>
          </div>
        </div>
      </div>
      <button className="btn-buy">Add to cart</button>
    </div>
  );
};

export default Book;
