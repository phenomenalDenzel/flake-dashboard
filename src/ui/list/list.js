import React from "react";
import "./list.css";

const list = (props) => {
  //   const listItem = props.items.map((item) => <li></li>);
  return (
    <div className="list-wrapper">
      <div className="list-cap">List Title</div>
      <ul className="list">
        <li className="listItem">
          <div className="bookImage" style={{ width: "100px" }}>
            <img
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348514120l/1605760.jpg"
              alt="img"
            />
          </div>
          <div className="bookImage">Title</div>
          <button>Analyze Books</button>
        </li>
        <li>
          <div className="bookImage">Image</div>
          <div className="bookImage">Title</div>
          <button>Analyze Books</button>
        </li>
      </ul>
    </div>
  );
};
export default list;
