import { CharactersPage } from "@/pages/CharactersPage";
import { NotFoundPage } from "@/pages/NotFount";

export const PATHS = [
  {
    path: "/personagens",
    element: <CharactersPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
