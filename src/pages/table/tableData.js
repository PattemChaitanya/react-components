import SortableTable from "./sortableTable";
import { BasicTableComponent, ResponsiveHTMLTable } from "./table-component";

export const jsonToPageDisplay = {
  pageTitle: "Tables",
  description: "Variety of Tables",
  jsonToDisplay: [
    {
      component: <SortableTable />,
      open: false,
      toDisplay: `
import React, { useState } from 'react';

const initialData = [
  { name: 'John Doe', age: 28, city: 'New York' },
  { name: 'Jane Smith', age: 34, city: 'Los Angeles' },
  { name: 'Michael Johnson', age: 45, city: 'Chicago' },
  { name: 'Emily Davis', age: 23, city: 'Houston' },
];

const SortableTable = () => {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.header} onClick={() => sortData('name')}>
              Name {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th style={styles.header} onClick={() => sortData('age')}>
              Age {sortConfig.key === 'age' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th style={styles.header} onClick={() => sortData('city')}>
              City {sortConfig.key === 'city' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={styles.row}>
              <td style={styles.cell}>{row.name}</td>
              <td style={styles.cell}>{row.age}</td>
              <td style={styles.cell}>{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
  },
  table: {
    borderCollapse: 'collapse',
    width: '80%',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  header: {
    cursor: 'pointer',
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    userSelect: 'none',
  },
  row: {
    '&:nth-child(even)': {
      backgroundColor: '#f9f9f9',
    },
  },
  cell: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
  },
};

export default SortableTable;
`,
    },
  ],
};

export const tableData = {
  seoTitle: "HTML Table Component - Usage and Accessibility",
  seoDescription:
    "Learn how to create, style, and use HTML table components effectively with accessibility and usability in mind.",
  seoKeywords: [
    "HTML table",
    "table accessibility",
    "responsive table",
    "HTML table styling",
  ],
  pageTitle: "HTML Table",
  pageDescription: [
    "HTML tables are used to display tabular data in rows and columns. They can be styled for aesthetics and enhanced for accessibility.",
    "This guide covers basic usage, best practices, and examples of how to implement tables in modern web development.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: ["Basic Table", "Responsive Table", "Accessible Table"],
  interactiveDemo: "",
  accessibity:
    "Ensure that tables use semantic tags like <thead>, <tbody>, and <th> for structure. Add ARIA roles and attributes for better screen reader support, and use captions for context.",
  examples: [
    {
      component: <BasicTableComponent />,
      description: "A simple HTML table with rows and columns displaying data.",
      id: "basic-table",
      title: "Basic Table",
      usages: "Use for displaying basic data sets with no interactivity.",
      purpose:
        "To demonstrate the structure of a table with <table>, <tr>, <th>, and <td> tags.",
      codeBlock: {
        "app.jsx": `import React from "react";
import TableComponent from "./table-component";
        
export const App = () => {
  const data = [
    { Name: "John Doe", Age: 28, Country: "USA" },
    { Name: "Jane Smith", Age: 34, Country: "UK" },
    { Name: "Alex Johnson", Age: 22, Country: "Canada" },
  ];

  const columns = ["Name", "Age", "Country"];

  return (
    <div>
      <TableComponent data={data} columns={columns} />
    </div>
  );
};`,
        "table-component.jsx": `import React from "react";
import "./app.css";

export default const TableComponent = ({ data, columns }) => {
  return (
    <table className="table"}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} className="header"}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="row"}>
            {columns.map((col) => (
              <td key={col} className="cell"}>
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};`,
        "app.css": `.table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
};

.header {
  background-color: #f1f1f1;
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
  color: #292929;
};

.row {
  background-color: #fff;
  color: #292929;
};

.cell {
  padding: 10px;
  border: 1px solid #ddd;
  color: #292929;
};`,
      },
      open: false,
    },
    {
      component: <ResponsiveHTMLTable />,
      description: "An HTML table styled to be responsive on smaller screens.",
      id: "responsive-table",
      title: "Responsive Table",
      usages:
        "Use for tables that need to adapt to mobile devices or smaller screens.",
      purpose: "To demonstrate CSS techniques for making tables responsive.",
      codeBlock: {
        "app.jsx": `import React from "react";
import TableComponent from "./table-component";

export const App = () => {
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
};`,
        "table-component.jsx": `import React from "react";
import "./app.css";

export default const TableComponent = ({ data, columns }) => {
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
};`,
        "app.css": `.table-container {
  overflow-x: auto;
  margin: 20px;
  border-radius: 8px;
}

.responsive-table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
}

.responsive-table th,
.responsive-table td {
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: left;
}

.responsive-table th {
  background-color: #f4f4f4;
  color: #333;
  font-weight: bold;
}

/* Responsive Styles */
@media (max-width: 600px) {
  .responsive-table thead {
    display: none;
  }

  .responsive-table tr {
    display: block;
    margin-bottom: 15px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .responsive-table td {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    text-align: right;
    border: none;
    border-bottom: 1px solid #ddd;
  }

  .responsive-table td::before {
    content: attr(data-label);
    font-weight: bold;
    text-transform: uppercase;
    color: #555;
    text-align: left;
  }

  .responsive-table tr:last-child td {
    border-bottom: none;
  }
}`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Table": "#basic-table",
      "Responsive Table": "#responsive-table",
    },
    References: "#references",
  },
  references: {
    MDN: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table",
    W3C: "https://www.w3.org/WAI/tutorials/tables/",
    "CSS Tricks": "https://css-tricks.com/complete-guide-table-element/",
  },
};
