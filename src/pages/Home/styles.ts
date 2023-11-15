import styled from "styled-components";

export const BackgroundContainer = styled.div`
  background-image: url("image/wallpaper-marvel.png");
  background-size: cover;
  background-position: center;
  height: calc(100vh - 4rem);
  width: 100vw;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.light[200]};
`;
