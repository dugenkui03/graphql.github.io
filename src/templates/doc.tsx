import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import DocsLayout from "../components/DocsLayout"
import FoundationLayout from "../components/FoundationLayout"
import BlogLayout from "../components/BlogLayout"
import CodeLayout from "../components/CodeLayout"
import FAQLayout from "../components/FAQLayout"

interface Props {
  data: any
  pageContext: any
}

const layoutMap: any = {
  docs: DocsLayout,
  foundation: FoundationLayout,
  blog: BlogLayout,
  code: CodeLayout,
  faq: FAQLayout,
}

const Blog = ({ data, pageContext }: Props) => {
  const {
    doc: {
      frontmatter: {
        title,
        date,
        heroText,
        permalink,
        byline,
        guestBio,
        layout,
        tags,
      },
      rawMarkdownBody,
    },
    nextDoc,
  } = data
  const InnerLayout = layoutMap[layout]
  return (
    <Layout title={`${title} | GraphQL`} pageContext={pageContext}>
      <InnerLayout
        title={title}
        date={date}
        heroText={heroText}
        permalink={permalink}
        byline={byline}
        guestBio={guestBio}
        rawMarkdownBody={rawMarkdownBody}
        nextDoc={nextDoc}
        sideBarData={pageContext.sideBarData}
        pageContext={pageContext}
        tags={tags}
      />
    </Layout>
  )
}

export const query = graphql`
  query LearnQuery($permalink: String!, $nextPermalink: String) {
    doc: markdownRemark(frontmatter: { permalink: { eq: $permalink } }) {
      frontmatter {
        title
        heroText
        date
        permalink
        byline
        guestBio
        sublinks
        layout
        tags
      }
      id
      rawMarkdownBody
    }
    nextDoc: markdownRemark(
      frontmatter: { permalink: { eq: $nextPermalink } }
    ) {
      frontmatter {
        title
        permalink
      }
    }
  }
`

export default Blog
