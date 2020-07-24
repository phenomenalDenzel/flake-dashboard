import React, { useState, useEffect } from "react";
import styles from "./SearchResult.module.css";
import StarRating from "../../../ui/star/StarRating";
import Spinner from "../../../ui/loader/Spinner/Spinner";
import Aux from "../../../hoc/Aux";
import axios from "../../../axios-scrape";
import ScrapeLoader from "../../../ui/loader/ScrapeLoader/ScrapeLoader";
import { Link } from "react-router-dom";

const maps = [
  {
    googleBook: {
      title: "This is title",
      averageRating: 4.5,
      authors: [
        {
          authorNames: "blablas",
        },
      ],
      imageLink: "",
    },
    amazonBook: {
      title: "This is title",
      averageRating: 4.23,
      authorNames: "bla bla",
      imageLink: "",
    },
  },
];
const SearchResult = (props) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagenatedLoading, setPagenatedLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // window.addEventListener("scroll", performScrollEvent);
    const query = new URLSearchParams(props.location.search);
    let search = "";
    for (let param of query.entries()) {
      search = param[1];
    }
    loadData(search);

    return () => {
      // window.removeEventListener("scroll", performScrollEvent);
    };
    function loadData(search) {
      if (search !== "") {
        console.log("Making request");
        setLoading(true);
        setSearchTerm(search);
        setBooks([]);
        // axios
        //   .get(`?q=${search}`)
        //   .then((res) => {
        //     setBooks(cleanData(res.data));
        //     sessionStorage.clear();
        //     sessionStorage.setItem("books", JSON.stringify(books));
        //     sessionStorage.setItem("searchQuery", search);
        //     // console.log(cleanData(res.data));
        //     setLoading(false);
        //   })
        //   .catch((error) => {
        //     setLoading(false);
        //     setError(error.message);
        //   });
        setTimeout(function () {
          setBooks(maps);
          setLoading(false);
        }, 1000);
      }
      console.log(error);
    }

    function performScrollEvent() {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      if (Math.ceil(scrolled) === scrollable) {
        getMoreBooks(books.length + 1);
      }
    }

    function getMoreBooks(startIndex) {
      // this.setState({ pagenatedLoading: true });
      setPagenatedLoading(true);
      axios
        .get(`?q=${searchTerm}&maxResults=10&startIndex=${startIndex}`)
        .then((res) => {
          // this.setState({
          //   books: [...this.state.books.concat(this.cleanData(res.data.items))],
          //   pagenatedLoading: false,
          // });
          setBooks([...books.concat(cleanData(res.data.items))]);
        })
        .catch((error) => {
          setError(error);
          setPagenatedLoading(false);
        });
    }
  }, [props.location.search]);

  const cleanData = (book) => {
    // const cleanedDate = books.map((book) => {
    //   if (!book.volumeInfo.hasOwnProperty("imageLinks")) {
    //     book.volumeInfo["imageLinks"] = {
    //       thumbnail:
    //         "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337",
    //     };
    //   }
    //   if (!book.volumeInfo.hasOwnProperty("authors")) {
    //     book.volumeInfo["authors"] = [];
    //   }
    //   return book;
    // });
    const books = [];
    for (let key in book) {
      const bookSet = book[key];
      let amazonImage = "";
      if (bookSet.hasOwnProperty("abeBook")) {
        amazonImage = bookSet["abeBook"].goodreadsImageLink;
      }
      if (bookSet.hasOwnProperty("amazonBook")) {
        bookSet.amazonBook["imageLink"] = amazonImage;
      }
      for (let key in bookSet) {
        const bookItem = bookSet[key];
        if (bookItem.imageLink === "") {
          bookItem["imageLink"] =
            "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337";
        }
      }
      books.push(bookSet);
    }
    return books;
  };

  let results = loading ? <ScrapeLoader /> : null;
  if (error === "Network Error") {
    results = <p>Check your network dumbass</p>;
  }
  if (books.length > 0) {
    results = (
      <div>
        {books.length}
        <ul className={styles.BookList}>
          {books.map((book) => {
            return (
              <Link to={"/acquire_new/" + book["googleBook"].id}>
                <li className={styles.BookItem} key={book["googleBook"].id}>
                  <div className={styles.ThumbnailSection}>
                    <img src={book["googleBook"].imageLink} alt="book" />
                  </div>
                  <div className={styles.BookSummary}>
                    <h3>{book["googleBook"].title}</h3>
                    <h4>
                      <span>by </span>
                      {book["googleBook"].authors
                        .map((author) => author.authorNames)
                        .join(", ")}
                    </h4>
                    <StarRating rate={book["googleBook"].averageRating} />
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
        {pagenatedLoading ? <Spinner /> : null}
      </div>
    );
  }
  return <Aux> {results} </Aux>;
};

export default SearchResult;
