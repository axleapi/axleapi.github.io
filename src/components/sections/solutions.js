import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Solutions = () => (
  <StyledSection id="solutions">
    <Container>
      <Subtitle>Solutions</Subtitle>
      <SectionTitle>Axle enables new use cases in</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Fleet Management</FeatureTitle>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Fuel Tracking</FeatureTitle>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Sustainability</FeatureTitle>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Logistics</FeatureTitle>
        </FeatureItem>
      </FeaturesGrid>
    </Container>
  </StyledSection>
)

export default Solutions


const StyledSection = styled(Section)`
background: ${props => props.theme.color.background.light};
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

const FeaturesGrid = styled.div`
  max-width: 670px;
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
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
  text-align: center;
`

const FeatureText = styled.p`
  text-align: center;
`
