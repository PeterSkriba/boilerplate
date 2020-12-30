import React from 'react'

import { Children } from 'types/global'

import * as S from './styled'

const Layout = ({ children }: Children) => (
  <S.Wrapper>
    <h1>Layout</h1>

    {children}
  </S.Wrapper>
)

export default Layout
