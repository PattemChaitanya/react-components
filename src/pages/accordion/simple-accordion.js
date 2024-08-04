import React, { useState } from 'react';

const accordionData = [
  {
    title: 'Section 1',
    content: 'Content for section 1.'
  },
  {
    title: 'Section 2',
    content: 'Content for section 2.'
  },
  {
    title: 'Section 3',
    content: 'Content for section 3.'
  }
];

const SimpleAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      {accordionData.map((item, index) => (
        <div key={index} style={styles.section}>
          <div
            style={styles.title}
            onClick={() => handleToggle(index)}
          >
            {item.title}
            <span style={styles.icon}>
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          {activeIndex === index && (
            <div style={styles.content}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  section: {
    borderBottom: '1px solid #ddd',
  },
  title: {
    padding: '15px',
    backgroundColor: '#f4f4f4',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    userSelect: 'none',
  },
  content: {
    padding: '15px',
    backgroundColor: '#fff',
  },
  icon: {
    marginLeft: '10px',
  },
};

export default SimpleAccordion;
