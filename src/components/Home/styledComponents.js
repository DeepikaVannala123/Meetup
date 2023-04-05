import styled from 'styled-components/macro'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  margin: 30px;
  font-family: 'Roboto';
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 45px;
  margin-top: 15px;
  color: #334155;
  font-weight: bold;
`

export const WelcomeText = styled.p`
  font-size: 20px;
  margin-top: 15px;
  color: #475569;
  font-weight: bold;
`
export const RegisterButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  min-width: 25px;
  max-width: 150px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`
export const HomeImage = styled.img`
  margin-top: 15px;
  height: 50vh;
  width: 50vw;
`
