import React from 'react'
import styled from 'styled-components'
import bank_tree from '../../assets/img/bank-tree.jpeg'
import icon_chat from '../../assets/img/icon-chat.png'
import icon_security from '../../assets/img/icon-security.png'
import icon_money from '../../assets/img/icon-money.png'

import { SrOnly } from '../../utils/style/atoms'

const HeroWrapper = styled.div`
  background-image: url(${bank_tree});
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;
`

const HeroContent = styled.section`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;

  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }
`


const HeroSubtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  @media (min-width: 920px) {
    font-size: 1.5rem;
  }
`
const HeroText = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;
  @media (min-width: 920px) {
    font-size: 1.2rem;
  }
`

const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`

const FeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;

`
const FeatureItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`
const FeatureImage = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`
export default function Home() {
  return (
    <main>
      <HeroWrapper>
        <HeroContent>
          <SrOnly>Promoted Content</SrOnly>
          <HeroSubtitle>No fees.</HeroSubtitle>
          <HeroSubtitle>No minimum deposit.</HeroSubtitle>
          <HeroSubtitle>High interest rates.</HeroSubtitle>
          <HeroText>Open a savings account with Argent Bank today!</HeroText>
        </HeroContent>
      </HeroWrapper>
      <FeaturesSection>
        <SrOnly>Features</SrOnly>
        <FeatureItem>
          <FeatureImage 
            src={icon_chat} 
            alt="Chat Icon"
          />
          <FeatureItemTitle>You are our #1 priority</FeatureItemTitle>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </FeatureItem>
        <FeatureItem>
          <FeatureImage
            src={icon_money}
            alt="money Icon"
          />
          <FeatureItemTitle>More savings means higher rates</FeatureItemTitle>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </FeatureItem>
        <FeatureItem>
          <FeatureImage
            src={icon_security}
            alt="security Icon"
          />
          <FeatureItemTitle>Security you can trust</FeatureItemTitle>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </FeatureItem>
      </FeaturesSection>
    </main>
  )
}
