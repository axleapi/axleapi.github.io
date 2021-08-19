import React from "react"
import styled from "styled-components"
import { CodeBlock, dracula } from "react-code-blocks";
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import { Section, Container } from "../global"

const Developers = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "product diagram" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledSection id="developers" >
      <StyledContainer>
        <Subtitle>For Developers</Subtitle>
        <SectionTitle>Axle's API unlocks a vehicle's data and controls so developers can build new apps</SectionTitle>
        <DeveloperGrid>
          <FeatureItem>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
          </FeatureItem>
          <FeatureItem>
            <CodeBlock
              text={"import axleapi\n\nveh = axleapi.connect()\n\nprint(veh.oilLevel())"}
              language={"python"}
              showLineNumbers={true}
              startingLineNumber={0}
              theme={dracula}
            />
          </FeatureItem>
        </DeveloperGrid>
      </StyledContainer>
    </StyledSection >
  )
}
export default Developers

const StyledSection = styled(Section)`
background: ${props => props.theme.color.background.light};
`

const StyledContainer = styled(Container)`
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const DeveloperGrid = styled.div`
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
`

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`