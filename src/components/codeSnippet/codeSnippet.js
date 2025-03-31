import React from 'react'
import "./codeSnippet.css";
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';

const CodeSnippet = (props) => {
  const { code, open, handleOpen, index } = props;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <section className="code-snippet-section">
      <div className='code-snippet-header'>
        <h4 style={{ fontWeight: 'bold' }}>Code Snippet:</h4>
        {open[index] && (
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button 
              onClick={() => handleOpen(index)}
              aria-expanded={open[index]}
              aria-controls={`code-snippet-${index}`}
            >
              Hide Code
            </button>
            <button 
              onClick={handleCopy}
              aria-label="Copy code to clipboard"
            >
              <FileCopyOutlinedIcon style={{ width: "20px", height: "20px" }} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      <div 
        className="code-snippet-container"
        id={`code-snippet-${index}`}
      >
        {!open[index] ? (
          <button 
            className='preview-button' 
            onClick={() => handleOpen(index)}
            aria-expanded={open[index]}
            aria-controls={`code-snippet-${index}`}
          >
            Click here to open preview
          </button>
        ) : (
          <pre tabIndex="0" aria-label="Code example">{code}</pre>
        )}
      </div>
    </section>
  )
}

export default CodeSnippet
