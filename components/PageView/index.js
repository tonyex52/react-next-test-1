// @flow strict
import React, { useState, useCallback, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Header, { MenuContainer } from 'components/Header'
import Navigation, { Item as NavItem } from 'components/Navigation'
import { type NavItemType } from 'components/Navigation/constants'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 60px auto;

  @media only screen and (min-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: 60px 40px auto;
  }
`

const StyledHeader = styled(Header)`
  grid-column: 1 / span 2;
  grid-row: 1 / span 1;

  @media only screen and (max-width: 767px) {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  @media only screen and (min-width: 768px) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;

    & ${MenuContainer} {
      display: none;
    }
  }
`

const StyledNav = styled(Navigation)`
  & ${NavItem} {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      background-color: ${({ theme }) => theme.separatorColor};
    }
  }

  @media only screen and (max-width: 767px) {
    position: fixed;
    left: -80%;
    top: 60px;
    z-index: 90;
    width: 80%;
    height: calc(100% - 60px);
    flex-direction: column;
    align-items: flex-start;
    background-color: rgb(0 0 0 / 63%);
    transform: translateX(0);
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;

    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: translateX(100%);
      `}

    & ${NavItem} {
      width: 100%;
      color: white;

      &:not(:first-of-type) {
        margin-top: 3px;

        &::before {
          left: 50%;
          top: -2px;
          width: 97%;
          height: 1px;
          transform: translateX(-50%);
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    box-shadow: ${({ theme }) => theme.boxShadow};

    & ${NavItem} {
      &:not(:first-of-type) {
        margin-left: 3px;

        &::before {
          left: -2px;
          top: 50%;
          width: 1px;
          height: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
`

const PageView = ({
  className,
  title,
  userName,
  navList,
  onClickLogout,
}: {
  className: ?string,
  title: ?string,
  userName: string,
  navList: $ReadOnlyArray<NavItemType>,
  onClickLogout: Function,
}) => {
  const [isOpenNav, setIsOpenNav] = useState(false)
  const onClickMenu = useCallback(() => {
    setIsOpenNav(!isOpenNav)
  }, [isOpenNav, setIsOpenNav])

  useEffect(() => {
    window.onresize = (event) => {
      if (event.currentTarget.innerWidth > 767 && isOpenNav) {
        setIsOpenNav(false)
      }
    }
  }, [isOpenNav, setIsOpenNav])

  return (
    <Container className={className}>
      <StyledHeader
        title={title}
        userName={userName}
        onClickMenu={onClickMenu}
        onClickLogout={onClickLogout}
      />
      <StyledNav isOpen={isOpenNav} list={navList} />
    </Container>
  )
}

export default PageView
