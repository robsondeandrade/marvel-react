import * as S from "./styles";

export const NotFoundPage = () => {
  return (
    <S.BackgroundContainer>
      <S.Box>
        <h1>Página Não Encontrada</h1>

        <p>
          Você se perdeu no Multiverso Marvel, mas pode voltar clicando{" "}
          <S.StyledLink to={"/personagens"}>aqui</S.StyledLink> para explorar
          outros personagens.
        </p>
      </S.Box>
    </S.BackgroundContainer>
  );
};
