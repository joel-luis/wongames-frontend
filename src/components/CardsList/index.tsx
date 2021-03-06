import Heading from 'components/Heading'
import { PaymentCard } from 'components/PaymentOptions'

import * as S from './styles'

export type CardsListprops = {
  cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardsListprops) => (
  <>
    <Heading lineBottom size="small" color="black">
      My cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.number}>
        <img src={card.img} alt={card.flag} />
        <span>{card.number}</span>
      </S.Card>
    ))}
  </>
)

export default CardsList
