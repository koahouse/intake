export const getIsIndividual = ({ customParams, response }) => {
  if (customParams && customParams.individual) {
    return JSON.parse(customParams.individual);
  }

  const question = response.find(({ id }) => id === 828893);

  return question ? question.answer === 'Individual' : true;
};
