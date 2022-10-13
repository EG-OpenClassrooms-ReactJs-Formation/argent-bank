import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import styled from 'styled-components'
import FormEditProfile from '../../components/FormEditProfile/FormEditProfile'
import TransactionCard from '../../components/TransactionCard/TransactionCard'
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


export default function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [displayFormEdit, setDisplayFormEdit] = useState(false)
  const auth = useSelector((state)=> state.auth)
  //console.log(auth)
  useEffect(() => {
		
    const fetchProfileData = async () => {
      const profileResult = await dispatch(
        profile({
          token: auth.token
        }))
        if(profileResult.payload.user.token === null){
          navigate("/")
        }
        return profileResult
    }
    fetchProfileData()
    
	}, [dispatch])
  
  const mockData = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      amountDescription: "Available Balance"
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      amountDescription: "Available Balance"
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      amountDescription: "Available Balance"
    },
  ]
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
      {
        mockData.map((transaction, index) => (
          <TransactionCard 
            key={index} 
            title={transaction.title} 
            amount={transaction.amount} 
            amountDescription={transaction.amountDescription}
          />
        ))
      }
    </MainWrapper>
  )
}
