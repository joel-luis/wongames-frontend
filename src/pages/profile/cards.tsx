import CardsList, { CardsListprops } from 'components/CardsList'
import Profile from 'templates/Profile'

import mockCards from 'components/PaymentOptions/mock'

export default function Cards({ cards }: CardsListprops) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  }
}
