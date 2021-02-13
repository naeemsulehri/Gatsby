import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/Footer/Footer.jsx'
import CustomSectionNavBar from '../Sections/CustomSectionNavBar'
import CustomSectionFooter from '../Sections/CustomSectionFooter'

import componentsStyle from '../assets/jss/material-kit-react/views/components.jsx'
import withStyles from '@material-ui/core/styles/withStyles'
import { graphql } from 'gatsby'
// import CustomValidationForm from '../Sections/CustomValidation'
import HeaderLinks from '../components/Header/HeaderLinks'
// export const query = graphql`
//   query Products {
//     products {
//       products {
//         id
//         product_name
//         createdAt
//       }
//     }
//   }
// `
const Components = ({ data }) => (
  <Layout>
    <CustomSectionNavBar />
    <br />
    <CustomSectionFooter />
    {/* <CustomValidationForm/> */}
    <Footer />
<<<<<<< HEAD
    <HeaderLinks />
=======
    {/* <div>{JSON.stringify(data.products)}</div> */}
>>>>>>> 0d78e170c5d504262879f9ab31190799049cbf6b
  </Layout>
)

export default withStyles(componentsStyle)(Components)
