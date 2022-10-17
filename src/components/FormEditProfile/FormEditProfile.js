import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editprofile } from '../../redux/slices/authSlice'
import { InputLabel, InputStyled, InputWrapper } from '../../utils/style/atoms'
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'


const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
`
const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding-bottom: 15px;
`
const EditButton = styled.button`
    width: 150px;
    height: 30px;
    color: ${colors.editButtonText};
    background-color: white;
    border-color: ${colors.editButtonBorder};
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 700;
`
export default function FormEditProfile({setDisplay}) {
    const auth = useSelector((state)=> state.auth)
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState(auth.firstName)
    const [lastName, setLastName] = useState(auth.lastName)

    const onChangeFirstName = event => {
        setFirstName(event.target.value)
    }

    const onChangeLastName = event => {
        setLastName(event.target.value)
    }

    const handleEditProfile = (event) => {
        event.preventDefault()
        dispatch(
            editprofile({
                token: auth.token,
                firstName: firstName,
                lastName: lastName
            })
        )
        setDisplay(false)
    }
    return (
    <FormStyled>
        <FormContainer>
            <InputStyled type="text" placeholder={firstName} id="firstname" onChange={onChangeFirstName}/>
            <InputStyled type="text" placeholder={lastName} id="lastname" onChange={onChangeLastName}/>
        </FormContainer>
        <FormContainer>
            <EditButton onClick={handleEditProfile}>Save</EditButton>
            <EditButton onClick={()=>setDisplay(false)}>Cancel</EditButton>
        </FormContainer>
    </FormStyled>
  )
}
