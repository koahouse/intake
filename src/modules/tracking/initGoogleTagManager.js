export const initGoogleTagManager = () => {
  const newScript = global.document.createElement('script');

  newScript.async = true;
  newScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-528274137';
  newScript.addEventListener('load', () => {
    global.dataLayer = global.dataLayer || [];
    global.gtag = function () {
      global.dataLayer.push(arguments);
    };
    global.gtag('js', new Date());
    global.gtag('config', 'AW-528274137');
  });

  const scriptElements = global.document.getElementsByTagName('script')[0];

  scriptElements.parentNode.insertBefore(newScript, scriptElements);
};
