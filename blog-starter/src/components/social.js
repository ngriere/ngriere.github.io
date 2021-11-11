
import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

const Social = () => {
    const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            linkedin
            github
            strava
          }
        }
      }
    }
  `);

    const social = data.site.siteMetadata?.social;

    return (
        <div>
            Follow me here:
            <a href={`https://www.linkedin.com/${social?.linkedin || ``}`} className='social-logo'>
                <StaticImage
                    layout="fixed"
                    formats={["auto", "webp", "avif"]}
                    src="../images/linkedin-logo.png"
                    width={32}
                    height={32}
                    quality={95}
                    alt="LinkedIn profile"
                />
            </a>
            <a href={`https://github.com/${social?.github || ``}`} className='social-logo'>
                <StaticImage
                    layout="fixed"
                    formats={["auto", "webp", "avif"]}
                    src="../images/github-logo.png"
                    width={32}
                    height={32}
                    quality={95}
                    alt="Github profile"
                />
            </a>
            <a href={`https://www.strava.com/athletes/${social?.strava || ``}`} className='social-logo'>
                <StaticImage
                    layout="fixed"
                    formats={["auto", "webp", "avif"]}
                    src="../images/strava-logo.png"
                    width={32}
                    height={32}
                    quality={95}
                    alt="Strava profile"
                />
            </a>
        </div>
    )
}

export default Social
