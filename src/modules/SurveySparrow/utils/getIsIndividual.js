export const getIsIndividual = ({ customParams, response }) => {
  if (customParams && customParams.individual) {
    return JSON.parse(customParams.individual);
  }

  const question = response.find(({ id }) =>
    [
      // English form
      828893,
      // Spanish form
      1068322,
    ].includes(id)
  );

  return question
    ? [
        // English form
        'Individual',
        // Spanish form
        '[Pending translation]',
      ].includes(question.answer)
    : true;
};
