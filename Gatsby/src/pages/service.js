import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/Footer/Footer.jsx'
import CustomSectionNavBar from '../Sections/CustomSectionNavBar'
import CustomSectionFooter from '../Sections/CustomSectionFooter'
import CustomSectionPills from "../Sections/CustomSectionPills"
import componentsStyle from '../assets/jss/material-kit-react/views/components.jsx'
import withStyles from '@material-ui/core/styles/withStyles'

const Components = () => (
  <Layout>
    <br/>
    <CustomSectionNavBar />
    <CustomSectionPills/>
    <CustomSectionFooter />
    <Footer />
  </Layout>
)

export default withStyles(componentsStyle)(Components)
