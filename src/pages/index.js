import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const BlogCard = styled.div`
  margin: 40px 0 40px;
  background: #ecdfff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 4px 10px 10px rgba(0, 0, 0,0.5);
  transition: all .4s ease;

  &:hover{
    box-shadow: 4px 10px 5px rgba(0, 0, 0,0.3);
  }
`

const BlogLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const BlogTitile = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

export default ({ data }) => {
  console.log(data)
  return(
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Davies' Thoughts</h1>
    </div>
    {
      data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogCard key={node.id}>
          <BlogLink to={node.fields.slug}>
          <BlogTitile>
            {node.frontmatter.title} - {node.frontmatter.date}
          </BlogTitile>
            <p>{node.excerpt}</p>
          </BlogLink>
        </BlogCard>
      ))
    }
  </Layout>
)}

export const query = graphql`
query{
	allMarkdownRemark(sort: { fields: [frontmatter___date],order: DESC}){
    totalCount
    edges{
      node{
        id
        frontmatter{
          description
          title
          date
        }
        fields{
          slug
        }
        excerpt
      }
    }     
  }
}
`
