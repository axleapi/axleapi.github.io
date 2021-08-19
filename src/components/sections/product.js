import React from "react"
import styled from "styled-components"
import { FaLaptopCode, FaShieldAlt, FaTruckMoving } from 'react-icons/fa';

import { Section, Container } from "../global"

const Product = () => (
  <Section id="product">
    <StyledContainer>
      <Subtitle>Product</Subtitle>
      <SectionTitle>Axle unlocks a vehicle's data and controls</SectionTitle>
      <ProductGrid>
        <FeatureItem>
          <FeatureTitle><FaLaptopCode/></FeatureTitle>
          <FeatureText>
            Reduce development time and costs.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle><FaShieldAlt/></FeatureTitle>
          <FeatureText>
            Secure critical vehicle functions.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle><FaTruckMoving/></FeatureTitle>
          <FeatureText>
            Enable new vehicle applications.
          </FeatureText>
        </FeatureItem>
      </ProductGrid>
    </StyledContainer>
  </Section>
)

export default Product

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

const ProductGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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

const FeatureTitle = styled.h1`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
