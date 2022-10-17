import styled from "styled-components"
import { colors } from "./colors"
export const SrOnly = styled.h2`
border: 0 !important;
clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
-webkit-clip-path: inset(50%) !important;
clip-path: inset(50%) !important; /* 2 */
height: 1px !important;
margin: -1px !important;
overflow: hidden !important;
padding: 0 !important;
position: absolute !important;
width: 1px !important;
white-space: nowrap !important; /* 3 */

`

export const MainWrapper = styled.main`
flex: 1;
background-color: ${colors.bgDark};
`
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
    
`
export const InputLabel = styled.label`
    font-weight: bold;
`
export const InputStyled = styled.input`
    padding: 5px;
    font-size: 1.2rem;
    border-radius: 3px;
`
