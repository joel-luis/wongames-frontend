import Base from 'templates/Base'

import { Grid } from 'components/Grid'
import { Container } from 'components/Container'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Heading from 'components/Heading'

import Showcase from 'components/ShowCase'

export type WishListTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishListTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`wishlist-${index}`} {...game} />
        ))}
      </Grid>
    </Container>
    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
