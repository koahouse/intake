export const startAcuity = (languageCode, responseId) => {
  const iframe = window.document.createElement('iframe');

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

  iframe.src = `https://app.acuityscheduling.com/schedule.php?owner=${owner}&${idFieldName}=${responseId}&${linkFieldName}=${window.encodeURIComponent(
    `https://sanc.typeform.com/to/lXfBjpxR#memberid=${responseId}`
  )}`;

  const script = window.document.createElement('script');

  script.src = 'https://embed.acuityscheduling.com/js/embed.js';
  script.type = 'text/javascript';

  const container = window.document.querySelector('#acuity-container');

  container.appendChild(iframe);
  container.appendChild(script);
};
