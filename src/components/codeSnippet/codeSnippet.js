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
    <div>
      <div className='code-snippet-header'>
        <h4 style={{ fontWeight: 'bold' }}>Code Snippet:</h4>
        {open[index] && (<div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button onClick={() => handleOpen(index)}>Hide Code</button>
          <button onClick={handleCopy}><FileCopyOutlinedIcon style={{ width: "20px", height: "20px" }} /></button>
        </div>)}
      </div>
      <div className="code-snippet-container">
        {!open[index] ? <button className='preview-button' onClick={() => handleOpen(index)}>Click here to open preview</button> :
          <pre>{code}</pre>}
      </div>
    </div>
  )
}

export default CodeSnippet
