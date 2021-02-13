import React from 'react'
import CustomContactSection from '../Sections/CustomContactSection'
import Layout from '../components/layout'
import Footer from '../components/Footer/Footer.jsx'
import CustomSectionNavBar from '../Sections/CustomSectionNavBar'
import CustomSectionFooter from '../Sections/CustomSectionFooter'

import componentsStyle from '../assets/jss/material-kit-react/views/components.jsx'
import withStyles from '@material-ui/core/styles/withStyles'

const Components = ({ classes }) => (
  <Layout>
    <CustomSectionNavBar />
    <CustomContactSection></CustomContactSection>    
    <CustomSectionFooter />
    <Footer />
  </Layout>
)

export default withStyles(componentsStyle)(Components)
