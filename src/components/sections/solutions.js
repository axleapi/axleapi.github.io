import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Solutions = () => (
  <Section id="solutions">
    <StyledContainer>
      <Subtitle>Solutions</Subtitle>
      <SectionTitle>Axle enables new use cases</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Telematics</FeatureTitle>
          <FeatureText>
            Axle can enable remote fleet diagnostics and monitoring to maximize vehicle uptime and predictive maintenance.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Self-Driving</FeatureTitle>
          <FeatureText>
            Axle unlocks driving controls such as steering and acceleration for aftermarket self-driving systems.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Security</FeatureTitle>
          <FeatureText>
            Axle equips the vehicle with an intrusion detection system, identifying and blocking malicious commands.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Entertainment</FeatureTitle>
          <FeatureText>
            Axle can control vehicle infotainment and media systems enabling new forms of entertainment.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Insurance</FeatureTitle>
          <FeatureText>Axle can help identify the driving style and safety parameters of the vehicle owner.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Car Sharing</FeatureTitle>
          <FeatureText>
            Axle allows for remote access and monitoring for a vehicle, simplifying onboarding for car sharing networks.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Solutions

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
