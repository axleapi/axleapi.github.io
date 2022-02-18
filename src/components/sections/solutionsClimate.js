import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const SolutionsClimate = () => (
  <Section id="solutions">
    <StyledContainer>
      <Subtitle>Solutions</Subtitle>
      <SectionTitle>Axle enables new use cases</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Repair and Predictive maintenance</FeatureTitle>
          <FeatureText>
            Axle can enable remote fleet diagnostics to maximize vehicle uptime and preventative maintenance.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Telematics</FeatureTitle>
          <FeatureText>
            Axle lets developers build tools to manage and understand driver behavior.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Fleet Management</FeatureTitle>
          <FeatureText>
            Axle gives developers tracking and monitoring data for fleet insights.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Sustainability</FeatureTitle>
          <FeatureText>
            Axle pulls data from multiple sources to give resources for new sustainable tooling.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Logistics</FeatureTitle>
          <FeatureText>
            Axle provides insight into the shipping and delivery of packages on vehicles.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Insurance</FeatureTitle>
          <FeatureText>
            Axle can help identify the driving style and safety parameters of the vehicle owner.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default SolutionsClimate

const StyledContainer = styled(Container)``

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
