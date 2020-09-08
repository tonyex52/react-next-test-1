// @flow strict
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { type NavItemType } from './constants'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
`

export const Item = styled.div`
  flex: 0 0 auto;
  padding: 8px 12px;
  color: ${({ theme }) => theme.fontGrayColor};
  cursor: pointer;
`

const Navigation = ({
  className,
  list = [],
}: {
  className: ?string,
  list?: $ReadOnlyArray<NavItemType>,
}) =>
  list.length !== 0 ? (
    <Container className={className}>
      {list.map((item) => (
        <Link key={item.url} href={item.url}>
          <Item>{item.name}</Item>
        </Link>
      ))}
    </Container>
  ) : null

export default Navigation
