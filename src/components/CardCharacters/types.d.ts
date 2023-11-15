export interface ICardCharactersProps {
  character: {
    id: number;
    thumbnail: {
      path: string;
      extension: string;
    };
    name: string;
  };
  openModal: () => void;
}
