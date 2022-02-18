import React from "react"
import styled from "styled-components"

import { Container } from "../global"
import Logo from "../common/logo"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      {/* <FooterColumn>
        <span>Features</span>
        <ul>
          <li>Automation</li>
          <li>Rewards</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Resources</span>
        <ul>
          <li>Compare</li>
          <li>Blog</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Company</span>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
        </ul>
      </FooterColumn> */}
      <FooterColumn>
        <span>Contact</span>
        <ul>
          <li><StyledA href="mailto:hi@axleapi.com">hi@axleapi.com</StyledA></li>
          {/* <li>Instagram</li> */}
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
    <BrandContainer>
      <Logo />
    </BrandContainer>
    <Copyright>
      &copy; {new Date().getFullYear()} Axle Technologies, Inc.
    </Copyright>
  </FooterWrapper>
)

const StyledA = styled.a`
  color: ${props => props.theme.color.accent};
`

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`

const Copyright = styled(Container)`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: ${props => props.theme.font.normal};
  color: ${props => props.theme.color.black.regular};

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`

const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
    }
  }
`

export default Footer
