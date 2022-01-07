import * as Style from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => (
  <Style.Wrapper>
    <Style.Logo src="/images/logo.svg" alt="React Avançado" />
    <Style.Title>{title}</Style.Title>
    <Style.Description>{description}</Style.Description>
    <Style.Illustration
      src="/images/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    ></Style.Illustration>
  </Style.Wrapper>
)

export default Main
