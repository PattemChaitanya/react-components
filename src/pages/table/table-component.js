import React from "react";
import "./table.css";

/* --------- basic table component --------- */
const BasicTable = ({ data, columns }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} style={styles.header}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} style={styles.row}>
            {columns.map((col) => (
              <td key={col} style={styles.cell}>
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const BasicTableComponent = () => {
  const data = [
    { Name: "John Doe", Age: 28, Country: "USA" },
    { Name: "Jane Smith", Age: 34, Country: "UK" },
    { Name: "Alex Johnson", Age: 22, Country: "Canada" },
  ];

  const columns = ["Name", "Age", "Country"];

  return (
    <div>
      <BasicTable data={data} columns={columns} />
    </div>
  );
};

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    backgroundColor: "#f1f1f1",
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left",
    color: "#292929",
  },
  row: {
    backgroundColor: "#fff",
    color: "#292929",
  },
  cell: {
    padding: "10px",
    border: "1px solid #ddd",
    color: "#292929",
  },
};

const ResponsiveTable = ({ data, columns }) => {
  return (
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col} data-label={col}>
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const ResponsiveHTMLTable = () => {
  const data = [
    { Name: "John Doe", Age: 28, Country: "USA" },
    { Name: "Jane Smith", Age: 34, Country: "UK" },
    { Name: "Alex Johnson", Age: 22, Country: "Canada" },
    { Name: "Maria Garcia", Age: 30, Country: "Spain" },
  ];

  const columns = ["Name", "Age", "Country"];

  return (
    <div>
      <ResponsiveTable data={data} columns={columns} />
    </div>
  );
};
