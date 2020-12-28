import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { GET_USERS } from 'apollo/queries'

import * as S from './styled'

const Home = () => {
  const { data, loading, error } = useQuery(GET_USERS)

  console.log('Error:', error)

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <S.Wrapper>
      <h2>Full-Stack Boilerplate</h2>
      <pre>Data: {JSON.stringify(data?.users, undefined, 2)}</pre>
    </S.Wrapper>
  )
}

export default Home
