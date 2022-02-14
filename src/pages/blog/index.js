import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/Layout';

const BlogPage = ({ data }) => {
  console.log(data);
    return (
        <Layout pageTitle="My Blog Posts">
            {data.allMdx.nodes.map(node => (
                <article key={node.id}>
                    <h2>
                      <Link to={node.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </h2>
                    <p>Posted: {node.frontmatter.date}</p>
                </article>
                )
            )}
        </Layout>
    )
}

export const query = graphql`query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      id
      slug
    }
  }
}`;

export default BlogPage;