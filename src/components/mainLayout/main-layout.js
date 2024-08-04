import React from 'react'
import { Helmet } from 'react-helmet'

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`${description} component from scratch`} />
      </Helmet>
      {children}
    </>
  )
}

export default Layout
