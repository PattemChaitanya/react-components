import SortableTable from "./sortableTable";

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
