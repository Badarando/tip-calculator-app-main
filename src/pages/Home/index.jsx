import { Title, TitleSmall } from './style';

export function Home() {
  return (
    <>
      <Title fontSize={30}>
        funcionando tudo bb
        <span>texto menor</span>
      </Title>

      <TitleSmall>Menor</TitleSmall>
      <TitleSmall>OIR</TitleSmall>
    </>
  )
}
