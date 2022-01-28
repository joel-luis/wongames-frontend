import { GetServerSideProps } from 'next'
import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

import filterItemsMock from 'components/ExplorerSidebar/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemsMock
    }
  }
}
