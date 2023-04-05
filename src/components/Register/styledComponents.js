import styled from 'styled-components/macro'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const ErrorMsg = styled.p`
  color: red;
`

export const Image = styled.img`
  height: 50vh;
  width: 40vw;
  margin: 30px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
`
export const Heading = styled.h1`
  font-size: 45px;
  margin-top: 15px;
  color: #334155;
  font-weight: bold;
`
export const FormContainer = styled.form`
  padding: 15px;
  display: flex;
  flex-direction: column;
`
export const CustomLabel = styled.label`
  color: #475569;
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 0px;
`

export const CustomInput = styled.input`
  color: #64748b;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
  width: 20vw;
`

export const CustomSelect = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`
export const CustomOption = styled.option`
  font-size: 16px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
`

export const Button = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  min-width: 25px;
  max-width: 150px;
  padding: 20px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`
