(this.webpackJsonpintake=this.webpackJsonpintake||[]).push([[0],[,,function(e,t,a){e.exports={container:"styles_container__1Ybc_",middle:"styles_middle__jfYK9",up:"styles_up__2awH9",down:"styles_down__2NRt-"}},function(e,t,a){e.exports={container:"styles_container__3W-sl",isHidden:"styles_isHidden__pIkC3",heading:"styles_heading__h8pTJ",image:"styles_image__3OF-L",widescreenFlexPlaceholder:"styles_widescreenFlexPlaceholder__zfU_G"}},,,,function(e,t,a){e.exports={container:"styles_container__3SlFj"}},function(e,t,a){e.exports={button:"styles_button__3lKmz"}},function(e,t,a){e.exports={container:"styles_container__2MmGh"}},function(e,t,a){e.exports={container:"styles_container__3qgWD"}},function(e,t,a){e.exports={container:"styles_container__6mvs3"}},function(e,t,a){e.exports=a.p+"static/media/nads.b54e223c.png"},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),i=a.n(o),c=(a(18),function(){return Object(n.useEffect)((function(){window.history.pushState(null,"",window.location.href),window.onpopstate=function(){window.history.pushState(null,"",window.location.href)}}),[]),null});c.displayName="BackButtonDisabler";var s=a(1),l=a(7),u=a.n(l),d=function(e){var t=e.contactDetails;return Object(n.useEffect)((function(){t&&function(e){var t=Object.entries(e).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return"".concat(a,"=").concat(n)})).join("&"),a=window.document.createElement("iframe");a.src="https://app.acuityscheduling.com/schedule.php?owner=20088051&"+t;var n=window.document.createElement("script");n.src="https://embed.acuityscheduling.com/js/embed.js",n.type="text/javascript";var r=window.document.querySelector("#acuity-container");r.appendChild(a),r.appendChild(n)}(t)}),[t]),r.a.createElement("div",{className:u.a.container,id:"acuity-container"})};d.displayName="Acuity";var m=a(8),p=a.n(m),_=function(e){var t=e.children,a=e.onClick;return r.a.createElement("button",{className:p.a.button,onClick:a},t)};_.displayName="Button";var E=a(9),f=a.n(E),C=function(e){var t=e.children;return r.a.createElement("div",{className:f.a.container},t)};C.displayName="Viewport";var v={FIND_A_TIME:"Find a time",NEXT:"Next",NOW_TO_FIND_A_TIME:"Now to find a time.",WE_CHARGE_SIXTY_EUROS:"We charge \u20ac60 for care navigation. We will do everything we can to find a good match with a care provider. If we can't, we give you your money back.",THANKS:"Thanks",WELCOME_TO_YOUR_KOA_JOURNEY:"Welcome to your koa journey"},g={FIND_A_TIME:"Trobar una hora",NEXT:"Seg\xfcent",NOW_TO_FIND_A_TIME:"Ara trobareu una hora.",WE_CHARGE_SIXTY_EUROS:"Cargem 60\u20ac per navegaci\xf3 assistencial. Farem tot el que puguem per trobar una bona coincid\xe8ncia amb un prove\xefdor d\u2019atenci\xf3. Si no podem, us retornem els vostres diners.",THANKS:"Gr\xe0cies",WELCOME_TO_YOUR_KOA_JOURNEY:"Benvingut al teu viatge amb koa"},h={FIND_A_TIME:"Encuentra una hora",NEXT:"Siguiente",NOW_TO_FIND_A_TIME:"Ahora para encontrar una hora.",WE_CHARGE_SIXTY_EUROS:"Cargamos 60\u20ac por la navegaci\xf3n de atenci\xf3n. Haremos todo lo posible para encontrar una buena combinaci\xf3n con un proveedor de atenci\xf3n. Si no podemos, le devolveremos su dinero",THANKS:"Gracias",WELCOME_TO_YOUR_KOA_JOURNEY:"Bienvenido a tu viaje con koa"},O=function(e){if(!e)return v;switch(!0){case e.startsWith("ca"):return g;case e.startsWith("es")||e.includes("-ES"):return h;default:return v}},w=r.a.createContext({setLanguageCode:function(){},strings:O()}),y=function(e){var t=e.children,a=Object(n.useState)(window.navigator.language),o=Object(s.a)(a,2),i=o[0],c=o[1];return r.a.createElement(w.Provider,{value:{setLanguageCode:c,strings:O(i)}},t)};y.displayName="I18nProvider";var N=function(){return Object(n.useContext)(w).strings},b=a(10),L=a.n(b),S=function(e){var t=e.onFinish,a=N(),n=a.THANKS,o=a.NOW_TO_FIND_A_TIME,i=a.FIND_A_TIME,c=a.WE_CHARGE_SIXTY_EUROS;return r.a.createElement("div",{className:L.a.container},r.a.createElement("h1",null,n),r.a.createElement("p",null,o),r.a.createElement("p",null,c),r.a.createElement(_,{onClick:t},i))};S.displayName="BridgeMessage";var j=function(){var e,t,a,n="script",r=document,o=window;o.SS_WIDGET_TOKEN="tt-5031b3",o.SS_ACCOUNT="koa.surveysparrow.com",o.SS_SURVEY_NAME="intake-pre-navigation";var i=function e(){e.update(arguments)};i.args=[],i.update=function(e){i.args.push(e)},o.SparrowLauncher=i,a=(e=r.getElementsByTagName(n))[e.length-1],(t=r.createElement(n)).type="text/javascript",t.async=!0,t.id="ss-widget",t.src=["https://","koa.surveysparrow.com/widget/",o.SS_WIDGET_TOKEN].join(""),a.parentNode.insertBefore(t,a)},T=a(4),I=a(11),k=a.n(I),A=function(e){var t=e.onSubmit,a=Object(n.useContext)(w).setLanguageCode;Object(n.useLayoutEffect)(j,[]);var o=function(e){if(e&&e.data)if("languageChanged"!==e.data.type)if("surveyCompleted"!==e.data.type)var n;else{var r=(n=e.data.response,Object.entries(n.find((function(e){return 828908===e.id})).answer).reduce((function(e,t){var a=Object(s.a)(t,2),n=a[0],r=a[1];switch(!0){case/(First|Nom|Nombre)/.test(n):return Object(T.a)({},e,{firstName:r});case/(Last|Cognom|Apellido)/.test(n):return Object(T.a)({},e,{lastName:r});case/(Email|Correu)/.test(n):return Object(T.a)({},e,{email:r});default:return e}}),{}));t(r)}else a(e.data.code)};return Object(n.useEffect)((function(){return window.addEventListener("message",o),function(){return window.removeEventListener("message",o)}})),r.a.createElement("div",{className:k.a.container},r.a.createElement("div",{id:"ss-widget"}))};A.displayName="SurveySparrow";var F=a(2),R=a.n(F),W=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(null),c=Object(s.a)(i,2),l=c[0],u=c[1];return r.a.createElement("div",{className:R.a.container},r.a.createElement("div",{className:{0:R.a.middle,1:R.a.up,2:R.a.up}[a]},r.a.createElement(A,{onSubmit:function(e){o(1),u(e)}})),r.a.createElement("div",{className:{0:R.a.down,1:R.a.middle,2:R.a.up}[a]},r.a.createElement(S,{onFinish:function(){return o(2)}})),r.a.createElement("div",{className:{0:R.a.down,1:R.a.down,2:R.a.middle}[a]},r.a.createElement(d,{contactDetails:l})))};W.displayName="Form";var x=a(3),M=a.n(x);function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var D=r.a.createElement("title",null,"koa-logo"),H=r.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"desktop",transform:"translate(-50.000000, -64.000000)",fill:"#FFFFFF",fillRule:"nonzero"},r.a.createElement("g",{id:"koa-logo",transform:"translate(50.000000, 64.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(37.046632, 50.518135)"},r.a.createElement("path",{d:"M6.2229361,20.107547 L6.2229361,4.91355331 L6.31633851,0.552774748 L5.94272884,0.272000273 L0.256856649,1.6115285 L0.256856649,1.92155031 L0.659654577,2.01514181 C1.07412781,2.14090537 1.36309154,2.30469048 1.52946459,2.5123466 C1.69583765,2.72000273 1.77756477,3.03002454 1.77756477,3.44533679 L1.77756477,20.1046223 C1.77756477,20.8943005 1.42438687,21.4032043 0.720949914,21.6313335 L0.253937824,21.7863444 L0.253937824,22.0963662 L7.67943005,22.0963662 L7.67943005,21.7863444 L7.24452504,21.6605809 C6.56443869,21.4558495 6.2229361,20.9381715 6.2229361,20.107547 Z",id:"Path"}),r.a.createElement("path",{d:"M17.1276684,21.724925 C16.6723316,21.5582152 16.2987219,21.350559 16.0097582,21.1019566 C15.7207945,20.8533542 15.4084801,20.4994614 15.0786528,20.0432029 L9.51829016,12.2897328 L12.9975302,9.01988001 C13.3915717,8.66598718 13.7272366,8.39106218 14.0074439,8.19510499 C14.2876511,7.9991478 14.6554231,7.82658849 15.1107599,7.68035179 L16.0418653,7.43174939 L16.0418653,7.12172757 L11.4126079,7.12172757 L11.4126079,7.43174939 L11.9409154,7.58676029 C12.3553886,7.71252386 12.5363558,7.91433052 12.4838169,8.19510499 C12.4312781,8.47587947 12.2707427,8.73910554 12.0022107,8.98770794 L6.25504318,14.3136488 L11.7862176,22.099291 L17.2531779,22.099291 L17.2531779,21.7892692 L17.1276684,21.724925 Z",id:"Path"})),r.a.createElement("path",{d:"M91.3110424,70.8498495 L90.6133554,70.8498495 C89.7248481,70.8498495 89.2805945,70.3742973 89.2805945,69.4261651 L89.2805945,62.4325753 C89.2805945,60.3639232 88.7677648,58.8718781 87.7421053,57.9564401 C86.7164459,57.0380299 85.2614406,56.5803109 83.3770896,56.5803109 C82.214278,56.5803109 81.1349504,56.7289209 80.1391066,57.0231689 C79.1432629,57.3174168 78.3471842,57.7602748 77.7419258,58.3517429 C77.1396491,58.9432109 76.8385107,59.6714003 76.8385107,60.5363109 C76.8385107,61.1069735 77.0174048,61.5587481 77.3781745,61.8975791 C77.7389443,62.23641 78.1921426,62.4028533 78.7437327,62.4028533 C79.3370648,62.4028533 79.8320051,62.191827 80.2345168,61.7697744 C80.6370285,61.3477218 80.8576645,60.6819487 80.902388,59.7754273 L80.965001,59.4276798 C81.0484849,58.6251854 81.2393052,58.0604672 81.5374621,57.733525 C81.8326373,57.4065829 82.235149,57.2431118 82.7449971,57.2431118 C83.484426,57.2431118 84.030053,57.5343875 84.3788965,58.1139668 C84.72774,58.693546 84.9036525,59.7011223 84.9036525,61.1366955 L84.9036525,63.6363169 C84.4385278,63.7195385 83.9942742,63.7997879 83.5708915,63.874093 C83.1475088,63.948398 82.7658681,64.0167586 82.4289509,64.0791749 C80.2494246,64.5012275 78.6513041,65.1283619 77.6375709,65.9605783 C76.6208562,66.7927947 76.1139896,67.7052605 76.1139896,68.6979758 C76.1139896,70.0057444 76.5314092,71.0073762 77.3662482,71.7028713 C78.2010873,72.3983664 79.2327099,72.746114 80.461116,72.746114 C81.5195726,72.746114 82.3812458,72.5083379 83.0491171,72.0327857 C83.7169884,71.5572335 84.3669702,70.9835986 85.0020442,70.3089089 C85.1719936,71.0252094 85.5268002,71.6018165 86.066464,72.0327857 C86.6061279,72.4667271 87.3425752,72.6807256 88.2728245,72.6807256 C89.1404608,72.6807256 89.8113136,72.5440043 90.2883645,72.2705618 C90.7654154,71.9971193 91.2037059,71.6047887 91.6062176,71.0995144 L91.3110424,70.8498495 Z M84.8976893,69.5836918 C84.3908228,70.0057444 83.9495507,70.3178255 83.5798362,70.516963 C83.2101218,70.7161005 82.8135732,70.8171553 82.3901905,70.8171553 C81.8177295,70.8171553 81.3317339,70.6001846 80.9292222,70.1692154 C80.5267105,69.735274 80.3269454,69.0873341 80.3269454,68.2224235 C80.3269454,67.2089029 80.6191391,66.4034363 81.2005449,65.8030517 C81.7819506,65.202667 82.5601399,64.77467 83.5321311,64.5220329 C83.8064354,64.4804221 84.050924,64.4388112 84.2626153,64.3942282 L84.8976893,64.2664236 L84.8976893,69.5836918 Z",id:"Shape"}),r.a.createElement("path",{d:"M72.0725389,64.6617345 C72.0725389,66.6953919 71.511021,68.7438289 70.2727264,70.1656155 C68.7920925,71.8623007 66.4218962,72.746114 63.9896373,72.746114 C61.8529142,72.746114 59.9112446,71.7263294 58.466075,70.3754842 C56.8908697,68.9004914 55.9067358,66.9909817 55.9067358,64.6646904 C55.9067358,62.4655027 57.1657179,60.0889611 58.5931553,58.6317037 C60.0590124,57.1301078 61.7258338,56.5803109 63.9896373,56.5803109 C66.4218962,56.5803109 68.4138068,57.845435 69.8944407,59.5480319 C71.1327353,60.9639068 72.0725389,62.628077 72.0725389,64.6617345 Z",id:"Path"}),r.a.createElement("path",{d:"M69.9767844,130 C50.9365896,130 31.6803988,128.258981 19.8242899,115.631423 C8.15162964,103.20191 0,83.3767622 0,67.4208731 C0,46.0882219 6.97992535,28.2169168 19.6556355,17.1057299 C31.5087855,6.71282401 49.3062637,0 65,0 C79.6551803,0 98.2604243,9.48840382 110.196422,18.8910869 C124.449199,30.1175534 130,43.0259209 130,64.9320146 C130,80.6425648 122.203432,98.0438836 109.143072,111.478399 C96.9407775,124.029104 87.9695466,130 69.9767844,130 Z M65,2.35288768 C49.8477331,2.35288768 32.656819,8.83810823 21.2090313,18.8733515 C9.05111981,29.5322874 2.35524399,46.7710323 2.35524399,67.4179172 C2.35524399,82.8269668 10.2435361,101.989995 21.5404224,114.020464 C32.7840495,125.99477 51.4632647,127.647112 69.9767844,127.647112 C87.1203569,127.647112 95.7187728,121.90382 107.45061,109.840837 C120.093773,96.834925 127.641797,80.0484311 127.641797,64.9349704 C127.641797,43.5757162 122.51707,31.5984538 108.734751,20.7414734 C97.4970412,11.8856298 79.0160688,2.35288768 65,2.35288768 Z",id:"Shape"})))),K=function(e){var t=e.svgRef,a=e.title,n=Y(e,["svgRef","title"]);return r.a.createElement("svg",U({width:"130px",height:"130px",viewBox:"0 0 130 130",ref:t},n),void 0===a?D:a?r.a.createElement("title",null,a):null,H)},P=r.a.forwardRef((function(e,t){return r.a.createElement(K,U({svgRef:t},e))})),B=(a.p,a(12)),G=a.n(B),X=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],o=t[1],i=N(),c=i.NEXT,l=i.WELCOME_TO_YOUR_KOA_JOURNEY;return r.a.createElement("div",{className:"".concat(M.a.container," ").concat(a?M.a.isHidden:"")},r.a.createElement("img",{alt:"strong woman",className:M.a.image,src:G.a}),r.a.createElement(P,null),r.a.createElement("h1",{className:M.a.heading},l),r.a.createElement(_,{onClick:function(){return o(!0)}},c),r.a.createElement("div",{className:M.a.widescreenFlexPlaceholder}))};X.displayName="Hero";var J=function(){return r.a.createElement(y,null,r.a.createElement(c,null),r.a.createElement(C,null,r.a.createElement(X,null),r.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.e9b0e155.chunk.js.map