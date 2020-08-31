export const getSrc = (languageCode, responseId) => {
  const { owner, idFieldName, linkFieldName } = languageCode.includes('es')
    ? {
        owner: 20408348,
        idFieldName: 'field:8295360',
        linkFieldName: 'field:8295365',
      }
    : {
        owner: 20088051,
        idFieldName: 'field:8295421',
        linkFieldName: 'field:8295422',
      };

  return `https://app.acuityscheduling.com/schedule.php?owner=${owner}&${idFieldName}=${responseId}&${linkFieldName}=${window.encodeURIComponent(
    `https://sanc.typeform.com/to/lXfBjpxR#memberid=${responseId}`
  )}`;
};
