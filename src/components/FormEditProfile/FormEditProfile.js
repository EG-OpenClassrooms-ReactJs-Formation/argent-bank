import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editprofile } from '../../redux/slices/authSlice'
import { InputLabel, InputStyled, InputWrapper } from '../../utils/style/atoms'
import styled from 'styled-components'

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
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
    const handleEditProfile = () => {
        dispatch(
            editprofile({
                token: auth.token,
                firstName: firstName,
                lastName: lastName
            })
        )
    }
    return (
    <FormStyled>
        <div>
            <InputStyled type="text" placeholder={firstName} id="firstname" onChange={onChangeFirstName}/>
            <InputStyled type="text" placeholder={lastName} id="lastname" onChange={onChangeLastName}/>
        </div>
        <div>
            <button onClick={handleEditProfile}>Save</button>
            <button onClick={()=>setDisplay(false)}>Cancel</button>
        </div>
    </FormStyled>
  )
}
