import Base from 'templates/Base'
import ExploreSidebar, { ItemProps } from 'components/ExplorerSidebar'
import { Grid } from 'components/Grid'

import GameCard, { GameCardProps } from 'components/GameCard'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ games = [], filterItems }: GamesTemplateProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <S.GridWrapper>
          <Grid>
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </Grid>
          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show more</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </S.GridWrapper>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
