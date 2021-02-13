import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/Footer/Footer.jsx'
import CustomSectionNavBar from '../Sections/CustomSectionNavBar'
import CustomSectionFooter from '../Sections/CustomSectionFooter'

import componentsStyle from '../assets/jss/material-kit-react/views/components.jsx'
import withStyles from '@material-ui/core/styles/withStyles'
import CustomHeatingOilPriceCalculatorSection from '../Sections/CustomHeatingOilPriceCalculatorSection'
import { graphql } from 'gatsby'

const Components = () => (
  <Layout>
    <CustomSectionNavBar />
    <CustomHeatingOilPriceCalculatorSection />
    <CustomSectionFooter />
    <Footer />
  </Layout>
)

// export const query = graphql`
// query Products {
//   products{
//     products {
//       id
//       product_name
//       createdAt
//     }
//   }
// }
// `

export default withStyles(componentsStyle)(Components)
