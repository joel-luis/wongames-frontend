import { GetServerSideProps } from 'next'

import Wishlist, { WishListTemplateProps } from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function WishlistPage(props: WishListTemplateProps) {
  return <Wishlist {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock
    }
  }
}
