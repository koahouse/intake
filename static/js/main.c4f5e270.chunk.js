(this.webpackJsonpintake=this.webpackJsonpintake||[]).push([[0],[,function(e,t,n){e.exports={boat:"styles_boat__OBlm3",visible:"styles_visible__XghHV",boatStep1:"styles_boatStep1__1G4ic",boatStep2:"styles_boatStep2__1CV0-",boatStep3:"styles_boatStep3__3Sh0d"}},,function(e,t,n){e.exports={container:"styles_container__1Ybc_",middle:"styles_middle__jfYK9",up:"styles_up__2awH9",down:"styles_down__2NRt-"}},function(e,t,n){e.exports={sea:"styles_sea__3_FK6",seaStep1:"styles_seaStep1__2ELYi",seaStep2:"styles_seaStep2__1uliF",seaStep3:"styles_seaStep3__1mksO"}},function(e,t,n){e.exports={container:"styles_container__3W-sl",logo:"styles_logo__A_BxZ",heading:"styles_heading__h8pTJ"}},,function(e,t,n){e.exports={container:"styles_container__3SlFj",visible:"styles_visible__1cMLN"}},function(e,t,n){e.exports={button:"styles_button__3lKmz",centered:"styles_centered__34SFe"}},function(e,t,n){e.exports={subheading:"styles_subheading__2whtF",centered:"styles_centered__tDMVd"}},,,,function(e,t,n){e.exports={container:"styles_container__2MmGh"}},function(e,t,n){e.exports={container:"styles_container__3ENJa"}},function(e,t,n){e.exports={container:"styles_container__6mvs3"}},function(e,t,n){e.exports={container:"styles_container__DaIe2"}},function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(10),o=n.n(c),r=(n(22),n(2)),s=function(){return Object(a.useEffect)((function(){window.history.pushState(null,"",window.location.href),window.onpopstate=function(){window.history.pushState(null,"",window.location.href)}}),[]),null};s.displayName="BackButtonDisabler";var _=n(11),l=n.n(_),u=function(){return window.innerWidth<=900},d=function(){var e=Object(a.useState)(u()),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(a.useCallback)(l()((function(){i(u())}),100));return Object(a.useEffect)((function(){return window.addEventListener("resize",c),function(){return window.removeEventListener("resize",c)}}),[]),n},E=n(12),m={CARE_NAVIGATION_IS:"Care navigation is a 60 minute appointment with a qualified clinical psychologist.",CHECK_YOUR_INBOX:"Check your inbox",FIND_A_TIME:"Find a time",NEXT:"Next",NOW_TO_FIND_A_TIME:"Now to find a time.",SOME_MORE_COMFORTING_COPY:"Some more comforting copy, to build trust.",START_QUESTIONNAIRE:"Start questionnaire",TAKE_A_BREATH:"Breathe.",THANKS:"Thanks",THIS_WILL_TAKE_FIVE_TO_TEN_MINUTES:"This will take five to ten minutes",TIME_FOR_YOU:"Time for you.",WE_CHARGE_SIXTY_EUROS:"We charge \u20ac60 for care navigation. We will do everything we can to find a good match with a care provider. If we can't, we give you your money back.",WEVE_SENT_YOU_SOMETHING_WITH_ALL_THE_DETAILS:"We've sent you something with all the details.",YOUR_JOURNEY_STARTS_HERE:"Your journey to a better you starts here.",YOURE_DONE:"You're done. We'll get to work and see you soon",YOURE_MAKING_THE_RIGHT_CHOICE:"You're making the right choice, bravo.",YOURE_TAKING_A_POSITIVE_STEP:"You're taking a positive step. You're in good hands."},O={CARE_NAVIGATION_IS:"[Pending]",CHECK_YOUR_INBOX:"[Pending]",FIND_A_TIME:"[Pending]",NEXT:"[Pending]",NOW_TO_FIND_A_TIME:"[Pending]",SOME_MORE_COMFORTING_COPY:"[Pending]",START_QUESTIONNAIRE:"[Pending]",TAKE_A_BREATH:"[Pending]",THANKS:"[Pending]",THIS_WILL_TAKE_FIVE_TO_TEN_MINUTES:"[Pending]",TIME_FOR_YOU:"[Pending]",WE_CHARGE_SIXTY_EUROS:"[Pending]",WEVE_SENT_YOU_SOMETHING_WITH_ALL_THE_DETAILS:"[Pending]",YOUR_JOURNEY_STARTS_HERE:"[Pending]",YOURE_DONE:"[Pending]",YOURE_MAKING_THE_RIGHT_CHOICE:"[Pending]",YOURE_TAKING_A_POSITIVE_STEP:"[Pending]"},T={CARE_NAVIGATION_IS:"[Pending]",CHECK_YOUR_INBOX:"[Pending]",FIND_A_TIME:"[Pending]",NEXT:"[Pending]",NOW_TO_FIND_A_TIME:"[Pending]",SOME_MORE_COMFORTING_COPY:"[Pending]",START_QUESTIONNAIRE:"[Pending]",TAKE_A_BREATH:"[Pending]",THANKS:"[Pending]",THIS_WILL_TAKE_FIVE_TO_TEN_MINUTES:"[Pending]",TIME_FOR_YOU:"[Pending]",WE_CHARGE_SIXTY_EUROS:"[Pending]",WEVE_SENT_YOU_SOMETHING_WITH_ALL_THE_DETAILS:"[Pending]",YOUR_JOURNEY_STARTS_HERE:"[Pending]",YOURE_DONE:"[Pending]",YOURE_MAKING_THE_RIGHT_CHOICE:"[Pending]",YOURE_TAKING_A_POSITIVE_STEP:"[Pending]"},N=function(e){if(!e)return m;switch(!0){case e.startsWith("ca"):return O;case e.startsWith("es")||e.includes("-ES"):return T;default:return m}},S=i.a.createContext({setLanguageCode:function(){},strings:N()}),p=Object(E.parse)(window.location.search).language||window.navigator.language,I=function(e){var t=e.children,n=Object(a.useState)(p),c=Object(r.a)(n,2),o=c[0],s=c[1];return i.a.createElement(S.Provider,{value:{languageCode:o,setLanguageCode:s,strings:N(o)}},t)};I.displayName="I18nProvider";var g=function(){return Object(a.useContext)(S).languageCode},v=function(){return Object(a.useContext)(S).strings},f=n(7),b=n.n(f),w=function(e){var t=e.onSubmit,n=e.responseId,c=Object(a.useState)(!1),o=Object(r.a)(c,2),s=o[0],_=o[1],l=Object(a.useState)(!0),u=Object(r.a)(l,2),d=u[0],E=u[1],m=g(),O=function(e){e&&e.data&&e.origin.includes("acuity")&&(e.data.includes("sizing")&&_(!0),e.data.includes("load:")&&(E(!1),t()))};return Object(a.useEffect)((function(){return window.addEventListener("message",O),function(){return window.removeEventListener("message",O)}}),[]),Object(a.useEffect)((function(){n&&function(e,t){var n=window.document.createElement("iframe"),a=e.includes("es")?20408348:20088051;n.src="https://app.acuityscheduling.com/schedule.php?owner=".concat(a,"&phone=").concat(t);var i=window.document.createElement("script");i.src="https://embed.acuityscheduling.com/js/embed.js",i.type="text/javascript";var c=window.document.querySelector("#acuity-container");c.appendChild(n),c.appendChild(i)}(m,n)}),[n]),i.a.createElement("div",{className:"".concat(b.a.container," ").concat(s&&d&&b.a.visible),id:"acuity-container"})};w.displayName="Acuity";var A=n(8),h=n.n(A),y=function(e){var t=e.children,n=e.isCentered,a=e.onClick;return i.a.createElement("button",{className:"".concat(h.a.button," ").concat(n&&h.a.centered),onClick:a},t)};y.displayName="Button";var R=n(9),C=n.n(R),H=function(e){var t=e.children,n=e.isCentered;return i.a.createElement("h3",{className:"".concat(C.a.subheading," ").concat(n&&C.a.centered)},t)};H.displayName="Subheading";var P=n(13),Y=n.n(P),U=function(e){var t=e.children;return i.a.createElement("div",{className:Y.a.container},t)};U.displayName="Viewport";var M=n(14),j=n.n(M),F=function(e){var t=e.onFinish,n=d(),a=v(),c=a.START_QUESTIONNAIRE,o=a.THIS_WILL_TAKE_FIVE_TO_TEN_MINUTES;return i.a.createElement("div",{className:j.a.container},i.a.createElement(y,{isCentered:!n,onClick:t},c),i.a.createElement(H,{isCentered:!n},o))};F.displayName="BridgeMessage";var L=n(28),G=n(15),W=n.n(G),K=Object(L.a)().replace(/-/g,""),k=function(e){var t=e.onSubmit,n=g(),c=function(e){e&&e.data&&("surveyCompleted"!==e.data.type||t(K))};Object(a.useEffect)((function(){return window.addEventListener("message",c),function(){return window.removeEventListener("message",c)}}),[]);var o=Object(a.useMemo)((function(){return n.includes("es")?"https://oliva.surveysparrow.com/widget/intake--spanish/tt-246a95?id=".concat(K):"https://oliva.surveysparrow.com/widget/intake--english/tt-5031b3?id=".concat(K)}),[n]);return i.a.createElement("div",{className:W.a.container},i.a.createElement("iframe",{allowFullScreen:"",id:"ss_widget_frame",src:o}))};k.displayName="SurveySparrow";var V=n(16),x=n.n(V),B=function(){var e=d(),t=v(),n=t.CHECK_YOUR_INBOX,a=t.WEVE_SENT_YOU_SOMETHING_WITH_ALL_THE_DETAILS;return i.a.createElement("div",{className:x.a.container},i.a.createElement(H,{isCentered:!e},n),i.a.createElement(H,{isCentered:!e},a))};B.displayName="EndMessage";var D=n(3),X=n.n(D),J=function(e){var t=e.step,n=e.setStep,c=d(),o=Object(a.useState)(c),s=Object(r.a)(o,2),_=s[0],l=s[1],u=Object(a.useState)(!0),E=Object(r.a)(u,2),m=E[0],O=E[1],T=Object(a.useState)(null),N=Object(r.a)(T,2),S=N[0],p=N[1],I=function(){c&&(window.requestAnimationFrame((function(){return O(!1)})),window.setTimeout((function(){window.requestAnimationFrame((function(){O(!0),l(!1)}))}),3500))};return i.a.createElement("div",{className:X.a.container,style:{background:_&&"transparent",opacity:m?1:0,transition:m&&"opacity 0.4s ease-in",willChange:"opacity"}},i.a.createElement("div",{className:{0:X.a.middle}[t]||X.a.up},i.a.createElement(F,{onFinish:function(){I(),n(1)}})),i.a.createElement("div",{className:{0:X.a.down,1:X.a.middle}[t]||X.a.up},i.a.createElement(k,{onSubmit:function(e){I(),n(2),p(e)}})),i.a.createElement("div",{className:{0:X.a.down,1:X.a.down,2:X.a.middle}[t]||X.a.up},i.a.createElement(w,{onSubmit:function(){l(c),n(3)},responseId:S})),i.a.createElement("div",{className:{3:X.a.middle}[t]||X.a.down},i.a.createElement(B,null)))};J.displayName="Form";var q=n(1),z=n.n(q),Q=function(e){var t=e.step;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"".concat(z.a.boat," ").concat(0===t&&z.a.visible)}),i.a.createElement("div",{className:"".concat(z.a.boat," ").concat(z.a.boatStep1," ").concat(1===t&&z.a.visible)}),i.a.createElement("div",{className:"".concat(z.a.boat," ").concat(z.a.boatStep2," ").concat(2===t&&z.a.visible)}),i.a.createElement("div",{className:"".concat(z.a.boat," ").concat(z.a.boatStep3," ").concat(3===t&&z.a.visible)}),i.a.createElement("div",{className:"".concat(z.a.boat," ").concat(z.a.boatStep4," ").concat(4===t&&z.a.visible)}))};Q.displayName="Boat";var Z=n(4),$=n.n(Z),ee=function(e){var t=e.step;return i.a.createElement("div",{className:"".concat($.a.sea," ").concat({1:$.a.seaStep1,2:$.a.seaStep2,3:$.a.seaStep3}[t])})};ee.displayName="Sea";var te=n(5),ne=n.n(te),ae=function(e){var t=e.step,n=v();return i.a.createElement("div",{className:ne.a.container},i.a.createElement(Q,{step:t}),i.a.createElement(ee,{step:t}),i.a.createElement("h1",{className:ne.a.logo},"Oliva"),i.a.createElement("h2",{className:ne.a.heading},function(e,t){return{0:e.YOUR_JOURNEY_STARTS_HERE,1:e.YOURE_MAKING_THE_RIGHT_CHOICE,2:e.TIME_FOR_YOU,3:e.TAKE_A_BREATH}[t]}(n,t)),i.a.createElement(H,null,function(e,t){return{0:e.YOURE_TAKING_A_POSITIVE_STEP,1:e.SOME_MORE_COMFORTING_COPY,2:e.CARE_NAVIGATION_IS,3:e.YOURE_DONE}[t]}(n,t)))};ae.displayName="Hero";var ie=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),n=t[0],c=t[1];return i.a.createElement(I,null,i.a.createElement(s,null),i.a.createElement(U,null,i.a.createElement(ae,{step:n}),i.a.createElement(J,{setStep:c,step:n})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.c4f5e270.chunk.js.map