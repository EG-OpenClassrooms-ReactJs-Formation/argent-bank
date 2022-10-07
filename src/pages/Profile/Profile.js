import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import FormEditProfile from '../../components/FormEditProfile/FormEditProfile'
import { editprofile, profile } from '../../redux/slices/authSlice'
import { MainWrapper, SrOnly } from '../../utils/style/atoms'
import { colors } from '../../utils/style/colors'

const ProfileHeader = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`
const EditButton = styled.button`
  border-color: ${colors.buttonBorder};
  background-color: ${colors.buttonBackground};
  color: ${colors.buttonText};
  font-weight: bold;
  padding: 10px;
`
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

export default function Profile() {
  const dispatch = useDispatch()
  const [displayFormEdit, setDisplayFormEdit] = useState(false)
  const auth = useSelector((state)=> state.auth)
  //console.log(auth)
  useEffect(() => {
		dispatch(
      profile({
        token: auth.token
      })
    );
	}, [dispatch])
  

  return (
    <MainWrapper>
      <ProfileHeader>
      <h1>Welcome back<br />{auth.firstName} {auth.lastName}!</h1>
      {
        displayFormEdit ?
          <FormEditProfile setDisplay={setDisplayFormEdit}/>
          :
          <EditButton onClick={()=>setDisplayFormEdit(true)}>Edit Name</EditButton>
      }
      </ProfileHeader>
        
      <SrOnly>Accounts</SrOnly>
      <AccountSection>
        <AccountContentWrapper>
          <AccountTitle>Argent Bank Checking (x8349)</AccountTitle>
          <AccountAmount>$2,082.79</AccountAmount>
          <AccountAmountDescription>Available Balance</AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapperCTA>
          <TransactionButton>View transactions</TransactionButton>
        </AccountContentWrapperCTA>
      </AccountSection>
      <AccountSection>
        <AccountContentWrapper>
          <AccountTitle>Argent Bank Savings (x6712)</AccountTitle>
          <AccountAmount>$10,928.42</AccountAmount>
          <AccountAmountDescription>Available Balance</AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapperCTA>
          <TransactionButton>View transactions</TransactionButton>
        </AccountContentWrapperCTA>
      </AccountSection>
      <AccountSection>
        <AccountContentWrapper>
          <AccountTitle>Argent Bank Credit Card (x8349)</AccountTitle>
          <AccountAmount>$184.30</AccountAmount>
          <AccountAmountDescription>Current Balance</AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapperCTA>
          <TransactionButton>View transactions</TransactionButton>
        </AccountContentWrapperCTA>
      </AccountSection>
    </MainWrapper>
  )
}
