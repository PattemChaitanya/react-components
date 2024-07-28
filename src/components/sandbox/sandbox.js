import React from 'react'
import "./sandbox.css"

const Sandbox = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Embedded CodeSandbox</h1>
      <iframe
        src="https://codesandbox.io/embed/new?codemirror=1&fontsize=14&hidenavigation=1&theme=dark&view=editor"
        style={{ width: '100%', height: '300px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
        title="sandbox"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
      <iframe
        src="https://codesandbox.io/embed/new?codemirror=1&fontsize=14&hidenavigation=1&theme=dark&view=preview"
        style={{ width: '100%', height: '200px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
        title="sandbox"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  )
}

export default Sandbox
