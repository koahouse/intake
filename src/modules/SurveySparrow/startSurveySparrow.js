export const startSurveySparrow = () => {
  // Code pasted from surveysparrow form creation interface > Share > Embed
  var e = 'ss-widget',
    t = 'script',
    a = document,
    r = window;
  var s, n, c;

  r.SS_WIDGET_TOKEN = 'tt-5031b3';
  r.SS_ACCOUNT = 'koa.surveysparrow.com';
  r.SS_SURVEY_NAME = 'intake-pre-navigation';
  // if (!a.getElementById(e)) {
  var S = function () {
    S.update(arguments);
  };

  S.args = [];
  S.update = function (e) {
    S.args.push(e);
  };
  r.SparrowLauncher = S;
  s = a.getElementsByTagName(t);
  c = s[s.length - 1];
  n = a.createElement(t);
  n.type = 'text/javascript';
  n.async = !0;
  n.id = e;
  n.src = ['https://', 'koa.surveysparrow.com/widget/', r.SS_WIDGET_TOKEN].join(
    ''
  );
  c.parentNode.insertBefore(n, c);
  // }
};
