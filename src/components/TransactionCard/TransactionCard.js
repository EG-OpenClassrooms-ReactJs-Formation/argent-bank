import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'


const AccountSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`

const AccountContentWrapper = styled.div`
  width: 100%;
  flex: 1;
`

const AccountContentWrapperCTA = styled(AccountContentWrapper)`
  @media (min-width: 720px) {
    flex: 0;
  }
`
const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`

const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`
const AccountAmountDescription = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`

const TransactionButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: ${colors.buttonBorder};
  background-color: ${colors.buttonBackground};
  color: ${colors.buttonText};
`
export default function TransactionCard({title, amount, amountDescription}) {
  return (
    <AccountSection>
        <AccountContentWrapper>
            <AccountTitle>{title}</AccountTitle>
            <AccountAmount>{amount}</AccountAmount>
            <AccountAmountDescription>{amountDescription}</AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapperCTA>
            <TransactionButton>View transactions</TransactionButton>
        </AccountContentWrapperCTA>
    </AccountSection>
  )
}
