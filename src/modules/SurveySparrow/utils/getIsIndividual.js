export const getIsIndividual = ({ response }) =>
  response.find(({ id }) => id === 828893).answer === 'Individual';
