import React from "react";
import "./BookLogo.css";
import booksFill from "../../assets/images/books-fill.jpg";
import books from "../../assets/images/books.jpg";
import bookFill from "../../assets/images/book-fill.jpg";
import libraryShelve from "../../assets/images/library-shelve.jpg";
import booksStack from "../../assets/images/books-stack.jpg";

export const BooksFill = (props) => {
  return <img className="logo-img" src={booksFill} alt="logo" />;
};

export const Books = (props) => {
  return <img className="logo-img" src={books} alt="logo" />;
};

export const BookFill = (props) => {
  return <img className="logo-img" src={bookFill} alt="logo" />;
};

export const LibraryShelve = (props) => {
  return <img className="logo-img" src={libraryShelve} alt="logo" />;
};

export const BooksStack = (props) => {
  return <img className="logo-img" src={booksStack} alt="logo" />;
};
