import React from "react";
import "./Table.css";
const table = ({ data, headers, title }) => {
  let row = data.map((row, i) => (
    <tr className="row">
      {Object.keys(row).map((item, i) => (
        <td key={i}>{row[item]}</td>
      ))}
    </tr>
  ));

  return (
    <div className="table">
      <div className="table-cap">{title}</div>
      <table className="content-table">
        <thead>
          <tr>
            {headers.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
      {row.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>No Records</h2>
      ) : null}
    </div>
  );
};

export default table;
