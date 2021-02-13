import React from 'react';
import Helmet from 'react-helmet';

export default function productByName({data}) {
  const {markdownRemark: product} = data;
  // const post = data.markdownRemark;
  return (
    <div>
      <h1>{product.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: product.html}} />
    </div>
  )
}

export const productQuery = graphql`
  query productByName 
  {
    markdownRemark {
        html
        frontmatter {
          category
          cover
          date
          slug
          tags
          title
        }
      }
  }
`