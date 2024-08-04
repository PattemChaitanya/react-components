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

const FullWidthAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      {accordionData.map((item, index) => (
        <div key={index}>
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
    width: '70%',
    margin: '0 auto',
    borderBottom: '1px solid #ddd',
    borderRadius: '5px',
  },
  title: {
    padding: '15px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    userSelect: 'none',
    borderBottom: '1px solid #ddd',
  },
  content: {
    padding: '15px',
    backgroundColor: '#fff',
  },
  icon: {
    marginLeft: '10px',
  },
};

export default FullWidthAccordion;
