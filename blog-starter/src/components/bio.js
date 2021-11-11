/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import Social from "./social"

const Bio = () => {
    const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

    // Set these values by editing "siteMetadata" in gatsby-config.js
    const author = data.site.siteMetadata?.author

    return (
        <div className="bio">
            <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/profile-pic.png"
                width={50}
                height={50}
                quality={95}
                alt="Profile picture"
            />
            {author?.name && (
                <p>
                    Howdy ! I am <strong>{author.name}</strong>, {author?.summary || null}
                    {` `}
                    <Social/>
                </p>
            )}
        </div>
    )
}

export default Bio
