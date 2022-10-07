import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SrOnly } from '../../utils/style/atoms'
import argent_logo from '../../assets/img/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slices/authSlice'

const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`
const MainNavLogo = styled(Link)`
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  align-items: center;
`
const MainNavLogoImage = styled.img`
  max-width: 100%;
  width: 200px;
`
const MainNavItem = styled(Link)`
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`
export default function Header() {

  const auth = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(
      logout()
    )
  }
  return (
    <MainNav>
      <MainNavLogo to={"/"}>
        <MainNavLogoImage
          src={argent_logo}
          alt="Argent Bank Logo"
        />
        <SrOnly>Argent Bank</SrOnly>
      </MainNavLogo>
      <div>
        <MainNavItem to={"/profile"}>
          {/* <i class="fa fa-user-circle"></i> */}
          {auth.firstName == null ?
          'Profile': auth.firstName
          
          }
        </MainNavItem>
        <MainNavItem to={"/login"} onClick={handleLogout}>
          {/* <i class="fa fa-sign-out"></i> */}
          Sign Out
        </MainNavItem>
      </div>
    </MainNav>
  )
}
