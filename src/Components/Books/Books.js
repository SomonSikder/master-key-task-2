import React, { useEffect, useState } from "react";
import "./Book.css";
import SingleBook from "./SingleBook";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Book = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("../../../data/books.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((books) => setData(books));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-4">
      <span className="tw-bolder text-warning">List Of Books</span>
      <div className="row d-flex justify-content-between align-items-center">
        {data.map((book) => (
          <div className="col-lg-3 col-md-4 col-12 m-1" data-aos="zoom-in-up">
            <SingleBook key={book.id} book={book}></SingleBook>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
