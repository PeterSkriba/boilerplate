import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { UserM } from 'types/datamodel'

import { GET_USER } from 'apollo/queries'

import * as S from './styled'

type QueryT = { user: UserM }

const Home = () => {
  const { data, loading, error } = useQuery<QueryT>(GET_USER, {
    variables: { email: 'johndoe@example.app' },
  })

  useEffect(() => {
    if (!loading && !!error) console.error(error)
  }, [loading])

  if (loading) return <small>Loading...</small>

  return (
    <S.Wrapper>
      <h2>Hello, World!</h2>

      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </S.Wrapper>
  )
}

export default React.memo(Home)
