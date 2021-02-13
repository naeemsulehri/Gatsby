// import React from ' react'
// import { graphql } from 'gatsby'
// import image from 'gatsby-image'
// import layout from '../components/layout'
// export const query = graphql`
// query($slug: String!){
// merchJson.(slug:{eq:$slug} ){
//     title
//     price
//     image{
//         childImageSharp{
//             fluid{
//                 ..GatsbyImageSharpFluid
//             }
//         }
//     }

// }
// }
// `
// const MerchPage = ({ data }) => {
//   const merch = data.merchJson
//   return (
//     <layout>
//       <h1>{merch.title}</h1>
//       <h2>{merch.price}</h2>
//       <img fluid={merch.image.childImageSharp} alt={merch.title} />
//     </layout>
//   )
// }
// export default Merch
