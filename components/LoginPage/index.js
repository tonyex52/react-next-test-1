// @flow strict
import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoginForm = styled.form`
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
`

const InputContainer = styled.div`
  flex: none;
  width: 100%;
  display: flex;
  align-items: center;

  & + & {
    margin-top: 12px;
  }
`

const InputLabel = styled.div`
  flex: 0 0 80px;
  color: #9d9da7;
`

const Input = styled.input`
  flex: 1;
  border-width: 1px;
  border-style: solid;
  border-color: grey;
  padding: 8px 12px;

  &:not([type='submit']) {
    margin-left: 8px;
  }

  &[type='submit'] {
    padding: 12px 18px;
    border-radius: 4px;
    background-color: #6868e8;
    color: white;
    cursor: pointer;
  }
`

const LoginPage = ({
  className,
  loginUrl,
}: {
  className: ?string,
  loginUrl: string,
}) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const onChangeUserName = useCallback(
    (event) => {
      setUserName(event.currentTarget.value)
    },
    [setUserName]
  )
  const onChangePassword = useCallback(
    (event) => {
      setPassword(event.currentTarget.value)
    },
    [setPassword]
  )
  return (
    <Container className={className}>
      <LoginForm action={loginUrl} method="post">
        <InputContainer>
          <InputLabel>使用者名稱</InputLabel>
          <Input name="userName" onChange={onChangeUserName} value={userName} />
        </InputContainer>
        <InputContainer>
          <InputLabel>密碼</InputLabel>
          <Input
            type="password"
            name="password"
            onChange={onChangePassword}
            value={password}
          />
        </InputContainer>
        <InputContainer>
          <Input type="submit" value="確認" />
        </InputContainer>
      </LoginForm>
    </Container>
  )
}

export default LoginPage
