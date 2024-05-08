import styled from "styled-components";
import { MyAnimation } from "../styles/animation/Animation";

export const StyledBtn = styled.button`
  border: none;
  background-color: pink;
  padding: 10px 20px;
  color: snow;
  font-size: 2 rem;
  font-weight: bold;
  
  &:hover{
    background-color: green;
  }

  &:last-child{
    background-color: orange;
  }
`

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: yellow;
  color: black;
  &:hover {
    animation: ${MyAnimation} 2s infinite;
  }
  
`
