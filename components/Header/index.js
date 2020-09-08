// @flow strict
import React from 'react'
import styled from 'styled-components'
import { Menu, ExitToApp } from '@styled-icons/material'

const Container = styled.div`
  padding: 5px 12px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryColor};
`

export const MenuContainer = styled.div`
  flex: 0 0 auto;
  color: white;
  cursor: pointer;
`

const Content = styled.div`
  margin-left: 18px;
  flex: 1 1 auto;
  color: white;
  font-size: 28px;
  user-select: none;
`

const UserName = styled.div`
  flex: 0 0 auto;
  color: white;
  font-weight: bold;
  user-select: none;
`

const LogoutContainer = styled.div`
  margin-left: 5px;
  flex: 0 0 auto;
  color: white;
  cursor: pointer;
`

const Header = ({
  className,
  title,
  userName,
  onClickMenu,
  onClickLogout,
}: {
  className: ?string,
  title: ?string,
  userName: string,
  onClickMenu: Function,
  onClickLogout: Function,
}) => (
  <Container className={className}>
    <MenuContainer onClick={onClickMenu}>
      <Menu size="30" />
    </MenuContainer>
    <Content>{title}</Content>
    <UserName>{userName}</UserName>
    <LogoutContainer onClick={onClickLogout}>
      <ExitToApp size="26" />
    </LogoutContainer>
  </Container>
)

export default Header
