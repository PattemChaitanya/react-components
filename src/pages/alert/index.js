import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { jsonToDisplay } from './alertData'
import CodeSnippet from '../../components/codeSnippet/codeSnippet'
import InteractiveUi from '../../components/interactiveUi/interactiveUi'
import Layout from '../../components/mainLayout/main-layout'

const Alert = () => {
  const [openIndexes, setOpenIndexes] = useState(jsonToDisplay.map(() => false));

  const handleOpen = (index) => {
    setOpenIndexes(openIndexes.map((item, idx) => idx === index ? !item : item));
  }

  return (
    <Layout title="Alert" description={"Alert"}>
      <>
        <Link to={-1}>Back</Link>
        <br />
        {jsonToDisplay.map((item, index) => (
          <div key={index} className='gap-each-section'>
            <h2>{item.title}</h2>
            <p>{item.subTitle}</p>
            <InteractiveUi>
              <div key={index} style={{ padding: "10px" }}>
                {item.component}
              </div>
              <CodeSnippet code={item.toDisplay} open={openIndexes} handleOpen={handleOpen} index={index} />
            </InteractiveUi>
          </div>
        ))}
      </>
    </Layout>
  )
}

export default Alert
