export const getSrc = (
  languageCode,
  responseId,
  isIndividual,
  { firstName, lastName, email, certificate }
) => {
  const {
    appointmentTypeCouple,
    appointmentTypeIndividual,
    idFieldName,
    linkFieldName,
    owner,
  } = languageCode.includes('es')
    ? // Spanish
      {
        appointmentTypeCouple: 16266387,
        appointmentTypeIndividual: 16738020,
        idFieldName: 'field:8295360',
        linkFieldName: 'field:8295365',
        owner: 20408348,
      }
    : // English
      {
        appointmentTypeCouple: 16735191,
        appointmentTypeIndividual: 15473079,
        idFieldName: 'field:8295421',
        linkFieldName: 'field:8295422',
        owner: 20088051,
      };

  return [
    'https://app.acuityscheduling.com/schedule.php',
    `?owner=${owner}`,
    `&appointmentType=${
      isIndividual ? appointmentTypeIndividual : appointmentTypeCouple
    }`,
    `&${idFieldName}=${responseId}`,
    `&${linkFieldName}=${window.encodeURIComponent(
      `https://sanc.typeform.com/to/lXfBjpxR#memberid=${responseId}&languagecode=${languageCode}`
    )}`,
    `&certificate=${certificate}`,
    `&firstName=${firstName}`,
    `&lastName=${lastName}`,
    `&email=${email}`,
  ].join('');
};