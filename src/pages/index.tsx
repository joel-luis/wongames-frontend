import { GetServerSideProps } from 'next'
import { gql } from '@apollo/client'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'

import Home from 'templates/Home'
import HomeTemplateProps from 'templates/Home/types'
import { initializeApollo } from 'utils/tests/apollo'

const GET_GAMES = gql`
  query getGames {
    games {
      name
    }
  }
`

export default function Index(props: HomeTemplateProps) {
  if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>

  return <Home {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const appoloClient = initializeApollo()

  const { data } = await appoloClient.query({ query: GET_GAMES })

  return {
    props: {
      data: data,
      initialApolloState: appoloClient.cache.extract(),
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: HighlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: HighlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: HighlightMock
    }
  }
}
