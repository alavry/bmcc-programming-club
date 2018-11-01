import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | BMCC Programming Club" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
