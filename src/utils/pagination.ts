export const calculateTotalPages = (
  totalItems: number | undefined,
  itemsPerPage: number | undefined
) => {
  return totalItems && itemsPerPage ? Math.ceil(totalItems / itemsPerPage) : 0;
};
