import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { ICustomPaginationProps } from "./types";
import * as S from "./styles";

export const CustomPagination = ({
  totalPages,
  currentPage,
  handlePageChange,
  handleSelectPerPage,
  selected,
}: ICustomPaginationProps) => {
  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <S.Wrapper>
      <S.PageButton
        disabled={isPreviousDisabled}
        onClick={() => handlePageChange(1)}
      >
        <FaAngleDoubleLeft />
      </S.PageButton>

      <S.PageButton
        disabled={isPreviousDisabled}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <FaAngleLeft />
      </S.PageButton>

      <S.PageButton active>{currentPage}</S.PageButton>

      <S.PageButton
        disabled={isNextDisabled}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <FaAngleRight />
      </S.PageButton>

      <S.PageButton
        disabled={isNextDisabled}
        onClick={() => handlePageChange(totalPages)}
      >
        <FaAngleDoubleRight />
      </S.PageButton>

      <S.PageSelect
        value={selected}
        onChange={(e) => handleSelectPerPage(Number(e.target.value))}
      >
        {[5, 10, 20].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </S.PageSelect>
    </S.Wrapper>
  );
};
