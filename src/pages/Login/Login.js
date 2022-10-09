import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import { MainWrapper, InputLabel, InputStyled, InputWrapper } from '../../utils/style/atoms'
import { useDispatch, useSelector } from 'react-redux'
import { login, profile } from '../../redux/slices/authSlice'
import { useNavigate } from "react-router-dom";

const LoginContent = styled.section`
    box-sizing: border-box;
    background-color: ${colors.loginContentBackground};
    width: 300px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;
`

const InputRememberWrapper = styled.div`
    display: flex;
`
const InputRememberlabel = styled.label`
    margin-left: 0.25rem;
`

const LoginButton = styled.button`
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
export default function Login() {
  const auth = useSelector((state)=> state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberLog, setRememberLog] = useState(false)
  const onChangeUsername = event => {
    setUsername(event.target.value);
  };
  const onChangePassword = event => {
    setPassword(event.target.value);
  };
  
  const handleLogin = async () => {
    const loginResult = await dispatch(
      login({
        email: username,
        password: password,
        rememberLog: rememberLog
      })
    )
    await dispatch(
      profile({
        token: loginResult.payload.user.token
      })
    )
    navigate("/");
  }

  return (
    <MainWrapper>
      <LoginContent>
        {/* <i class="fa fa-user-circle sign-in-icon"></i> */}
        <h1>Sign In</h1>
        <form>
          <InputWrapper>
            <InputLabel htmlFor="username">Username</InputLabel>
            <InputStyled type="text" id="username" onChange={onChangeUsername}/>
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputStyled type="password" id="password" onChange={onChangePassword}/>
          </InputWrapper>
          <InputRememberWrapper>
            <input type="checkbox" id="remember-me" checked={rememberLog} onChange={e => setRememberLog(e.target.checked)}/>
            <InputRememberlabel htmlFor="remember-me">Remember me</InputRememberlabel>
          </InputRememberWrapper>

          <LoginButton onClick={handleLogin}>Sign In</LoginButton>
          
        </form>
      </LoginContent>
    </MainWrapper>
  )
}
