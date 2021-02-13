import React from 'react'
// nodejs library that concatenates classes
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import Layout from '../components/layout'

// @material-ui/icons

// core components

import Footer from '../components/Footer/Footer.jsx'
import componentsStyle from '../assets/jss/material-kit-react/views/components.jsx'
import CustomSectionCarousel from '../Sections/CustomSectionCarousel'
import CustomSectionNavBar from '../Sections/CustomSectionNavBar'
import CustomMiddleSection from '../Sections/CustomMiddleSection'
import CustomSectionFooter from '../Sections/CustomSectionFooter'
import { graphql } from 'gatsby'

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`

const Components = ({ data }) => (
  <Layout>
    <CustomSectionNavBar />
    <CustomSectionCarousel />
    <CustomMiddleSection />
    <CustomSectionFooter />
    <Footer />
    <div>{JSON.stringify(data)}</div>
  </Layout>
)

export default withStyles(componentsStyle)(Components)
