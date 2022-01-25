import Base from 'templates/Base'

import { Container } from 'components/Container'
import { HighlightProps } from 'components/Highlight'
import { Divider } from 'components/Divider'
import { Grid } from 'components/Grid'
import GameCard, { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'

import Showcase from 'components/ShowCase'
import Empty from 'components/Empty'

export type WishListTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  games = [],
  recommendedGames,
  recommendedHighlight
}: WishListTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games.length ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}
      <Divider />
    </Container>
    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
