(this.webpackJsonpintake=this.webpackJsonpintake||[]).push([[0],[,function(e,t,n){e.exports={boat:"styles_boat__OBlm3",visible:"styles_visible__XghHV",boatStep1:"styles_boatStep1__1G4ic",boatStep2:"styles_boatStep2__1CV0-",boatStep3:"styles_boatStep3__3Sh0d"}},,function(e,t,n){e.exports={container:"styles_container__1Ybc_",middle:"styles_middle__jfYK9",up:"styles_up__2awH9",down:"styles_down__2NRt-"}},function(e,t,n){e.exports={sea:"styles_sea__3_FK6",seaStep1:"styles_seaStep1__2ELYi",seaStep2:"styles_seaStep2__1uliF",seaStep3:"styles_seaStep3__1mksO"}},function(e,t,n){e.exports={container:"styles_container__3W-sl",logo:"styles_logo__A_BxZ",heading:"styles_heading__h8pTJ"}},,function(e,t,n){e.exports={container:"styles_container__3SlFj",visible:"styles_visible__1cMLN"}},function(e,t,n){e.exports={button:"styles_button__3lKmz",centered:"styles_centered__34SFe"}},function(e,t,n){e.exports={subheading:"styles_subheading__2whtF",centered:"styles_centered__tDMVd"}},,,,function(e,t,n){e.exports={container:"styles_container__2MmGh"}},function(e,t,n){e.exports={container:"styles_container__3ENJa"}},function(e,t,n){e.exports={container:"styles_container__6mvs3"}},function(e,t,n){e.exports=n.p+"static/media/envelope.d7660e3d.png"},function(e,t,n){e.exports={container:"styles_container__DaIe2"}},function(e,t,n){e.exports=n(27)},,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(10),c=n.n(o),r=(n(23),n(2)),s=function(){return Object(a.useEffect)((function(){window.history.pushState(null,"",window.location.href),window.onpopstate=function(){window.history.pushState(null,"",window.location.href)}}),[]),null};s.displayName="BackButtonDisabler";var _=function(e){var t=e.step,n=function(e){if(0!==t)return e.preventDefault(),e.returnValue="something","something"};return Object(a.useEffect)((function(){return window.addEventListener("beforeunload",n),function(){return window.removeEventListener("beforeunload",n)}}),[]),null};_.displayName="CloseWindowWarner";var l=n(11),d=n.n(l),u=function(){return window.innerWidth<=900},E=function(){var e=Object(a.useState)(u()),t=Object(r.a)(e,2),n=t[0],i=t[1],o=Object(a.useCallback)(d()((function(){i(u())}),100));return Object(a.useEffect)((function(){return window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}}),[]),n},m=n(12),O={CARE_NAVIGATION_IS:"Care navigation is a 60 minute appointment with a qualified clinical psychologist.",CHECK_YOUR_INBOX:"Check your inbox",FIND_A_TIME:"Find a time",NEXT:"Next",NOW_TO_FIND_A_TIME:"Now to find a time.",SOME_MORE_COMFORTING_COPY:"Some more comforting copy, to build trust.",START_QUESTIONNAIRE:"Start questionnaire",TAKE_A_BREATH:"Breathe.",THANKS:"Thanks",THIS_WILL_TAKE_FIVE_TO_TEN_MINUTES:"This will take five to ten minutes",TIME_FOR_YOU:"Time for you.",WE_CHARGE_SIXTY_EUROS:"We charge \u20ac60 for care navigation. We will do everything we can to find a good match with a care provider. If we can't, we give you your money back.",WEVE_SENT_YOU_SOMETHING_WITH_ALL_THE_DETAILS:"We've sent you something with all the details.",YOUR_JOURNEY_STARTS_HERE:"Your journey to a better you starts here.",YOURE_DONE:"You're done. We'll get to work and see you soon",YOURE_MAKING_THE_RIGHT_CHOICE:"You're making the right choice, bravo.",YOURE_TAKING_A_POSITIVE_STEP:"You're taking a positive step. You're in good hands."},T={CARE_NAVIGATION_IS:"[Pending]",CHECK_YOUR_INBOX:"[Pending]",FIND_A_TIME:"[Pending]",NEXT:"[Pending]",NOW_TO_FIND_A_TIME:"[Pending]",SOME_MORE_COMFORTING_COPY:"[Pending]",START_QUESTIONNAIRE:"[Pending]",TAKE_A_BREATH:"[Pending]",THANKS:"[Pending]",THIS_WILL_TAKE_FIVE_TO_TEN_MINUTES:"[Pending]",TIME_FOR_YOU:"[Pending]",WE_CHARGE_SIXTY_EUROS:"[Pending]",WEVE_SENT_YOU_SOMETHING_WITH_ALL_THE_DETAILS:"[Pending]",YOUR_JOURNEY_STARTS_HERE:"[Pending]",YOURE_DONE:"[Pending]",YOURE_MAKING_THE_RIGHT_CHOICE:"[Pending]",YOURE_TAKING_A_POSITIVE_STEP:"[Pending]"},p={CARE_NAVIGATION_IS:"[Pending]",CHECK_YOUR_INBOX:"[Pending]",FIND_A_TIME:"[Pending]",NEXT:"[Pending]",NOW_TO_FIND_A_TIME:"[Pending]",SOME_MORE_COMFORTING_COPY:"[Pending]",START_QUESTIONNAIRE:"[Pending]",TAKE_A_BREATH:"[Pending]",THANKS:"[Pending]",THIS_WILL_TAKE_FIVE_TO_TEN_MINUTES:"[Pending]",TIME_FOR_YOU:"[Pending]",WE_CHARGE_SIXTY_EUROS:"[Pending]",WEVE_SENT_YOU_SOMETHING_WITH_ALL_THE_DETAILS:"[Pending]",YOUR_JOURNEY_STARTS_HERE:"[Pending]",YOURE_DONE:"[Pending]",YOURE_MAKING_THE_RIGHT_CHOICE:"[Pending]",YOURE_TAKING_A_POSITIVE_STEP:"[Pending]"},N=function(e){if(!e)return O;switch(!0){case e.startsWith("ca"):return T;case e.startsWith("es")||e.includes("-ES"):return p;default:return O}},S=i.a.createContext({setLanguageCode:function(){},strings:N()}),I=Object(m.parse)(window.location.search).language||window.navigator.language,f=function(e){var t=e.children,n=Object(a.useState)(I),o=Object(r.a)(n,2),c=o[0],s=o[1];return i.a.createElement(S.Provider,{value:{languageCode:c,setLanguageCode:s,strings:N(c)}},t)};f.displayName="I18nProvider";var g=function(){return Object(a.useContext)(S).languageCode},v=function(){return Object(a.useContext)(S).strings},w=n(7),b=n.n(w),h=function(e){var t=e.onSubmit,n=e.responseId,o=Object(a.useState)(!1),c=Object(r.a)(o,2),s=c[0],_=c[1],l=Object(a.useState)(!0),d=Object(r.a)(l,2),u=d[0],E=d[1],m=Object(a.useRef)(null),O=g(),T=function(e){e&&e.data&&e.origin.includes("acuity")&&(m.current&&window.clearTimeout(m.current),e.data.includes("sizing")&&_(!0),e.data.includes("load:")&&(m.current=window.setTimeout((function(){E(!1),t()}),500)))};return Object(a.useEffect)((function(){return window.addEventListener("message",T),function(){return window.removeEventListener("message",T)}}),[]),Object(a.useEffect)((function(){n&&function(e,t){var n=window.document.createElement("iframe"),a=e.includes("es")?{owner:20408348,idFieldName:"field:8295360",linkFieldName:"field:8295365"}:{owner:20088051,idFieldName:"field:8295421",linkFieldName:"field:8295422"},i=a.owner,o=a.idFieldName,c=a.linkFieldName;n.src="https://app.acuityscheduling.com/schedule.php?owner=".concat(i,"&").concat(o,"=").concat(t,"&").concat(c,"=").concat(window.encodeURIComponent("https://sanc.typeform.com/to/lXfBjpxR#memberid=".concat(t)));var r=window.document.createElement("script");r.src="https://embed.acuityscheduling.com/js/embed.js",r.type="text/javascript";var s=window.document.querySelector("#acuity-container");s.appendChild(n),s.appendChild(r)}(O,n)}),[n]),i.a.createElement("div",{className:"".concat(b.a.container," ").concat(s&&u&&b.a.visible),id:"acuity-container"})};h.displayName="Acuity";var A=n(8),y=n.n(A),R=function(e){var t=e.children,n=e.isCentered,a=e.onClick;return i.a.createElement("button",{className:"".concat(y.a.button," ").concat(n&&y.a.centered),onClick:a},t)};R.displayName="Button";var C=n(9),H=n.n(C),P=function(e){var t=e.children,n=e.isCentered;return i.a.createElement("h3",{className:"".concat(H.a.subheading," ").concat(n&&H.a.centered)},t)};P.displayName="Subheading";var Y=n(13),U=n.n(Y),M=function(e){var t=e.children;return i.a.createElement("div",{className:U.a.container},t)};M.displayName="Viewport";var F=n(14),j=n.n(F),L=function(e){var t=e.onFinish,n=E(),a=v(),o=a.START_QUESTIONNAIRE,c=a.THIS_WILL_TAKE_FIVE_TO_TEN_MINUTES;return i.a.createElement("div",{className:j.a.container},i.a.createElement(R,{isCentered:!n,onClick:t},o),i.a.createElement(P,{isCentered:!n},c))};L.displayName="BridgeMessage";var W=n(29),G=n(15),k=n.n(G),K=Object(W.a)().replace(/-/g,""),x=function(e){var t=e.onSubmit,n=g(),o=function(e){e&&e.data&&("surveyCompleted"!==e.data.type||t(K))};Object(a.useEffect)((function(){return window.addEventListener("message",o),function(){return window.removeEventListener("message",o)}}),[]);var c=Object(a.useMemo)((function(){return n.includes("es")?"https://oliva.surveysparrow.com/widget/intake--spanish/tt-246a95?id=".concat(K):"https://oliva.surveysparrow.com/widget/intake--english/tt-5031b3?id=".concat(K)}),[n]);return i.a.createElement("div",{className:k.a.container},i.a.createElement("iframe",{allowFullScreen:"",id:"ss_widget_frame",src:c}))};x.displayName="SurveySparrow";var V=n(16),B=n.n(V),D=n(17),X=n.n(D),J=function(){var e=E(),t=v().WEVE_SENT_YOU_SOMETHING_WITH_ALL_THE_DETAILS;return i.a.createElement("div",{className:X.a.container},i.a.createElement("img",{alt:"envelope",src:B.a}),i.a.createElement(P,{isCentered:!e},t))};J.displayName="EndMessage";var q=n(3),z=n.n(q),Q=function(e){var t=e.step,n=e.setStep,o=E(),c=Object(a.useState)(o),s=Object(r.a)(c,2),_=s[0],l=s[1],d=Object(a.useState)(!0),u=Object(r.a)(d,2),m=u[0],O=u[1],T=Object(a.useState)(null),p=Object(r.a)(T,2),N=p[0],S=p[1],I=function(){o&&(window.requestAnimationFrame((function(){return O(!1)})),window.setTimeout((function(){window.requestAnimationFrame((function(){O(!0),l(!1)}))}),3500))};return i.a.createElement("div",{className:z.a.container,style:{background:_&&"transparent",opacity:m?1:0,transition:m&&"opacity 0.4s ease-in",willChange:"opacity"}},i.a.createElement("div",{className:{0:z.a.middle}[t]||z.a.up},i.a.createElement(L,{onFinish:function(){I(),n(1)}})),i.a.createElement("div",{className:{0:z.a.down,1:z.a.middle}[t]||z.a.up},i.a.createElement(x,{onSubmit:function(e){I(),n(2),S(e)}})),i.a.createElement("div",{className:{0:z.a.down,1:z.a.down,2:z.a.middle}[t]||z.a.up},i.a.createElement(h,{onSubmit:function(){l(o),n(3)},responseId:N})),i.a.createElement("div",{className:{3:z.a.middle}[t]||z.a.down},i.a.createElement(J,null)))};Q.displayName="Form";var Z=n(1),$=n.n(Z),ee=function(e){var t=e.step;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"".concat($.a.boat," ").concat(0===t&&$.a.visible)}),i.a.createElement("div",{className:"".concat($.a.boat," ").concat($.a.boatStep1," ").concat(1===t&&$.a.visible)}),i.a.createElement("div",{className:"".concat($.a.boat," ").concat($.a.boatStep2," ").concat(2===t&&$.a.visible)}),i.a.createElement("div",{className:"".concat($.a.boat," ").concat($.a.boatStep3," ").concat(3===t&&$.a.visible)}),i.a.createElement("div",{className:"".concat($.a.boat," ").concat($.a.boatStep4," ").concat(4===t&&$.a.visible)}))};ee.displayName="Boat";var te=n(4),ne=n.n(te),ae=function(e){var t=e.step;return i.a.createElement("div",{className:"".concat(ne.a.sea," ").concat({1:ne.a.seaStep1,2:ne.a.seaStep2,3:ne.a.seaStep3}[t])})};ae.displayName="Sea";var ie=n(5),oe=n.n(ie),ce=function(e){var t=e.step,n=v();return i.a.createElement("div",{className:oe.a.container},i.a.createElement(ee,{step:t}),i.a.createElement(ae,{step:t}),i.a.createElement("h1",{className:oe.a.logo},"Oliva"),i.a.createElement("h2",{className:oe.a.heading},function(e,t){return{0:e.YOUR_JOURNEY_STARTS_HERE,1:e.YOURE_MAKING_THE_RIGHT_CHOICE,2:e.TIME_FOR_YOU,3:e.TAKE_A_BREATH}[t]}(n,t)),i.a.createElement(P,null,function(e,t){return{0:e.YOURE_TAKING_A_POSITIVE_STEP,1:e.SOME_MORE_COMFORTING_COPY,2:e.CARE_NAVIGATION_IS,3:e.YOURE_DONE}[t]}(n,t)))};ce.displayName="Hero";var re=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),n=t[0],o=t[1];return i.a.createElement(f,null,i.a.createElement(s,null),i.a.createElement(_,null),i.a.createElement(M,null,i.a.createElement(ce,{step:n}),i.a.createElement(Q,{setStep:o,step:n})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.20eacedb.chunk.js.map