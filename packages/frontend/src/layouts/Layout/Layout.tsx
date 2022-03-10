import React from 'react'
import { Outlet } from 'react-router-dom'

import * as S from './styled'

const Layout = () => (
  <S.Wrapper>
    <h1>Layout</h1>

    <Outlet />
  </S.Wrapper>
)

export default Layout
