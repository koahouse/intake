export const startAcuity = (languageCode, responseId) => {
  const iframe = window.document.createElement('iframe');

  const owner = languageCode.includes('es') ? 20408348 : 20088051;

  iframe.src = `https://app.acuityscheduling.com/schedule.php?owner=${owner}&phone=${responseId}`;

  const script = window.document.createElement('script');

  script.src = 'https://embed.acuityscheduling.com/js/embed.js';
  script.type = 'text/javascript';

  const container = window.document.querySelector('#acuity-container');

  container.appendChild(iframe);
  container.appendChild(script);
};
