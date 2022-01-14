import { GetServerSideProps } from 'next'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'

import Home from 'templates/Home'
import HomeTemplateProps from 'templates/Home/types'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
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
