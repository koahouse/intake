export const startAcuity = (responseId) => {
  const iframe = window.document.createElement('iframe');

  iframe.src =
    'https://app.acuityscheduling.com/schedule.php?owner=20088051&phone=' +
    responseId;

  const script = window.document.createElement('script');

  script.src = 'https://embed.acuityscheduling.com/js/embed.js';
  script.type = 'text/javascript';

  const container = window.document.querySelector('#acuity-container');

  container.appendChild(iframe);
  container.appendChild(script);
};
