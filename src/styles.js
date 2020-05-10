import styled, { css } from 'styled-components'
export const engrave = `
  border-radius: 10px; 
  background-color:  #eaf8fe;
  box-shadow: 
    8px 8px 15px rgba(0,0,0,0.05), 
    -8px -8px 15px rgba(255,255,255,0.7);
`
export const Div = styled.div`
  ${props => props.engrave && engrave }
  ${props => props.boxed && css`
    border: 1px solid #d1d1d1;
    border-radius: 10px;
  `}
  ${props => props.border && css`
    padding: 10px;
    margin: 10px;
  `}
` 
export const H2 =  styled.h2`
  color: #4900be;
  margin-top: 0px;
  margin-bottom: 10px;
`

export const Button = styled.button`
  ${engrave}
  outline: none;
  cursor: pointer;
  border: 0px;
  padding: 1rem 2rem;
  margin-right: 20px;
  transition: all ease-in-out 0.3s;
  background:#6002ee;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  :active {
    box-shadow: 
    inset -8px -8px 10px rgba(0,0,0,0.1), 
    inset 8px 8px 10px #fff;
  }
  :hover {
    background: transparent;
    color: #6002ee;
    border: 2px solid #6002ee;
    box-shadow: 
    8px 8px 15px rgba(0,0,0,0.2), 
    -8px -8px 15px rgba(255,255,255,0.9);
  }
`