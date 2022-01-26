import { GetServerSideProps } from 'next'
import Cart, { CardTemplateProps } from 'templates/Cart'

import itemMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function CartPage(props: CardTemplateProps) {
  return <Cart {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      items: itemMock,
      total: 'R$ 430,00',
      cards: cardsMock,
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock
    }
  }
}
