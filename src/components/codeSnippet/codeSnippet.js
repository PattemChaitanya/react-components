import React from 'react'
import "./codeSnippet.css";

const CodeSnippet = (props) => {
  const { code } = props;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="code-snippet-container">
      <div className='code-snippet-header'>
        <h6 style={{ fontWeight: 'bold' }}>Code Snippet:</h6>
        <button onClick={handleCopy}>Copy code</button>
      </div>
      <pre>{code}</pre>
    </div>
  )
}

export default CodeSnippet
