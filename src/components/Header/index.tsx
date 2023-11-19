import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import LogoMarvel from "@/assets/images/marvel.svg";
import * as S from "./styles";
import { useHeroCharacterStore } from "@/stores/UseHeroCharacterStore/useHeroCharacterStore";

export default function Header() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const { setCurrentPage, setItemsPerPage } = useHeroCharacterStore();

  function handleCreateLogin(event: FormEvent) {
    event.preventDefault();
  }

  const navigateToCharactersPage = () => {
    setCurrentPage(1);
    setItemsPerPage(20);

    const queryParam = name ? `?name=${name}` : "";

    navigate(`/personagens${queryParam}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      navigateToCharactersPage();
    }
  };

  return (
    <S.Container>
      <S.Header>
        <Link to="/">
          <img alt="" src={LogoMarvel} width={100} />
        </Link>

        <S.Form onSubmit={handleCreateLogin}>
          <S.InputContainer>
            <S.Input
              type="search"
              placeholder="Procurar personagem"
              value={name}
              onKeyDown={handleKeyDown}
              onChange={(event) => setName(event.target.value)}
            />
            <S.SearchIcon onClick={navigateToCharactersPage} />
          </S.InputContainer>
        </S.Form>
      </S.Header>
    </S.Container>
  );
}
