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
      codeBlock: `
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Col 1</td>
      <td>Row 1, Col 2</td>
      <td>Row 1, Col 3</td>
    </tr>
    <tr>
      <td>Row 2, Col 1</td>
      <td>Row 2, Col 2</td>
      <td>Row 2, Col 3</td>
    </tr>
  </tbody>
</table>
      `,
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
      codeBlock: `
<div style="overflow-x: auto;">
  <table>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Row 1, Col 1</td>
        <td>Row 1, Col 2</td>
        <td>Row 1, Col 3</td>
      </tr>
      <tr>
        <td>Row 2, Col 1</td>
        <td>Row 2, Col 2</td>
        <td>Row 2, Col 3</td>
      </tr>
    </tbody>
  </table>
</div>
      `,
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
