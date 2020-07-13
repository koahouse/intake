// Begin surveysparrow initialisation
// Code pasted from surveysparrow form creation interface > Share > Embed
(function(){var e="ss-widget",t="script",a=document,r=window;var s,n,c;r.SS_WIDGET_TOKEN="tt-5031b3";r.SS_ACCOUNT="koa.surveysparrow.com";r.SS_SURVEY_NAME="intake-pre-navigation";if(!a.getElementById(e)){var S=function(){S.update(arguments)};S.args=[];S.update=function(e){S.args.push(e)};r.SparrowLauncher=S;s=a.getElementsByTagName(t);c=s[s.length-1];n=a.createElement(t);n.type="text/javascript";n.async=!0;n.id=e;n.src=["https://","koa.surveysparrow.com/widget/",r.SS_WIDGET_TOKEN].join("");c.parentNode.insertBefore(n,c)}})();
// End surveysparrow initialisation

(function(){

  // Handle surveysparrow completion
  window.addEventListener('message', function(event){

    if (!event || !event.data || event.data.type !== 'surveyCompleted') return;

    var contactDetails = event.data.response
      .find(function(item){ return item.id === 828908 })
      .answer;

    // Hide surveysparrow
    var surveySparrowContainer = window.document.querySelector('#ss_survey_widget');
    window.document.body.removeChild(surveySparrowContainer);

    // Show thank you message before booking
    var schedulingBlurbContainer = window.document.createElement('div');
    schedulingBlurbContainer.id = 'scheduling-blurb-container';
    var schedulingBlurbHeading = window.document.createElement('p');
    schedulingBlurbHeading.id = 'scheduling-blurb-heading';
    schedulingBlurbHeading.innerText = 'Thanks';
    var schedulingBlurbText = window.document.createElement('p');
    schedulingBlurbText.id = 'scheduling-blurb-text';
    schedulingBlurbText.innerText = 'That will help your care navigator get started.\n\nNow to book an appointment.\n\nYou will meet with a care navigator for 60 minutes to talk about how you are doing and the kind of care you are looking for. Your care navigator will be a qualified clinical psychologist.\n\nWe charge €60 for care navigation. We will do everything we can to find a good match with a care provider. If we can\'t, we give you your money back.';
    var schedulingBlurbButton = window.document.createElement('button');
    schedulingBlurbButton.id = 'scheduling-blurb-button';
    schedulingBlurbButton.innerText = 'OK';

    schedulingBlurbContainer.appendChild(schedulingBlurbHeading);
    schedulingBlurbContainer.appendChild(schedulingBlurbText);
    schedulingBlurbContainer.appendChild(schedulingBlurbButton);

    window.document.body.appendChild(schedulingBlurbContainer);

    // Show acuity scheduling when user clicks book button
    var acuityContainer = window.document.createElement('div');
    acuityContainer.id = 'acuity-container';

    var acuityIFrame = window.document.createElement('iframe');
    var acuityQueryString = Object.keys(contactDetails).map(function(key){
      switch (true) {
        case /First/.test(key):
          return 'firstName=' + contactDetails[key];
        case /Last/.test(key):
          return 'lastName=' + contactDetails[key];
        case /Email/.test(key):
          return 'email=' + contactDetails[key];
      }
    }).join('&');
    acuityIFrame.src = 'https://app.acuityscheduling.com/schedule.php?owner=20088051&' + acuityQueryString;

    var acuityScript = window.document.createElement('script');
    acuityScript.src = 'https://embed.acuityscheduling.com/js/embed.js';
    acuityScript.type = 'text/javascript';

    schedulingBlurbButton.onclick = function(){
      window.document.body.removeChild(schedulingBlurbContainer);

      acuityContainer.appendChild(acuityIFrame);
      window.document.body.appendChild(acuityContainer);
      window.document.body.appendChild(acuityScript);
    };
  });

})();
