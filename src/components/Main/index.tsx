import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, React Js, Next JS e Styled Components
    </S.Description>

    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="Imagem de um dev em frente para uma tela com código"
    />
  </S.Wrapper>
);

export default Main;
