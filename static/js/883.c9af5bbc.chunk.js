/*! For license information please see 883.c9af5bbc.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmyApp=globalThis.webpackChunkmyApp||[]).push([[883],{883:(e,t,n)=>{n.d(t,{c:()=>g});var i=n(811);let o;const a=e=>(e.forEach((e=>{for(const t in e)if(e.hasOwnProperty(t)){const n=e[t];if("easing"===t){e["animation-timing-function"]=n,delete e[t]}else{const i=r(t);i!==t&&(e[i]=n,delete e[t])}}})),e),r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=e=>{if(void 0===o){const t=void 0!==e.style.animationName,n=void 0!==e.style.webkitAnimationName;o=!t&&n?"-webkit-":""}return o},l=(e,t,n)=>{const i=t.startsWith("animation")?s(e):"";e.style.setProperty(i+t,n)},f=(e,t)=>{const n=t.startsWith("animation")?s(e):"";e.style.removeProperty(n+t)},d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((e=>{const t=e.offset,n=[];for(const i in e)e.hasOwnProperty(i)&&"offset"!==i&&n.push(`${i}: ${e[i]};`);return`${100*t}% { ${n.join(" ")} }`})).join(" ")},c=[],m=e=>{let t=c.indexOf(e);return t<0&&(t=c.push(e)-1),`ion-animation-${t}`},h=(e,t,n)=>{const i=(e=>{const t=e.getRootNode();return t.head||t})(n),o=s(n),a=i.querySelector("#"+e);if(a)return a;const r=(n.ownerDocument||document).createElement("style");return r.id=e,r.textContent=`@${o}keyframes ${e} { ${t} } @${o}keyframes ${e}-alt { ${t} }`,i.appendChild(r),r},u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(void 0!==t){const n=Array.isArray(t)?t:[t];return[...e,...n]}return e},g=e=>{let t,n,o,r,s,c,g,p,v,y,E,A,$,b=[],C=[],w=[],k=!1,T={},S=[],D=[],L={},P=0,F=!1,R=!1,N=!0,O=!1,W=!0,K=!1;const x=e,I=[],j=[],M=[],q=[],z=[],Z=[],B=[],G=[],H=[],J=[],Q="function"===typeof AnimationEffect||"function"===typeof window.AnimationEffect,U="function"===typeof Element&&"function"===typeof Element.prototype.animate&&Q,V=()=>J,X=e=>{ee(),e&&te()},Y=(e,t)=>(((null===t||void 0===t?void 0:t.oneTimeCallback)?j:I).push({c:e,o:t}),$),_=()=>(I.length=0,j.length=0,$),ee=()=>{if(U)J.forEach((e=>{e.cancel()})),J.length=0;else{const e=M.slice();(0,i.r)((()=>{e.forEach((e=>{f(e,"animation-name"),f(e,"animation-duration"),f(e,"animation-timing-function"),f(e,"animation-iteration-count"),f(e,"animation-delay"),f(e,"animation-play-state"),f(e,"animation-fill-mode"),f(e,"animation-direction")}))}))}},te=()=>{z.forEach((e=>{(null===e||void 0===e?void 0:e.parentNode)&&e.parentNode.removeChild(e)})),z.length=0},ne=()=>void 0!==s?s:g?g.getFill():"both",ie=()=>void 0!==v?v:void 0!==c?c:g?g.getDirection():"normal",oe=()=>F?"linear":void 0!==o?o:g?g.getEasing():"linear",ae=()=>R?0:void 0!==y?y:void 0!==n?n:g?g.getDuration():0,re=()=>void 0!==r?r:g?g.getIterations():1,se=()=>void 0!==E?E:void 0!==t?t:g?g.getDelay():0,le=e=>{U?V().forEach((t=>{if(t.effect.setKeyframes)t.effect.setKeyframes(e);else{const n=new KeyframeEffect(t.effect.target,e,t.effect.getTiming());t.effect=n}})):ce()},fe=()=>{Z.forEach((e=>e())),B.forEach((e=>e()));const e=C,t=w,n=T;M.forEach((i=>{const o=i.classList;e.forEach((e=>o.add(e))),t.forEach((e=>o.remove(e)));for(const e in n)n.hasOwnProperty(e)&&l(i,e,n[e])}))},de=()=>{0!==P&&(P--,0===P&&((()=>{Ae(),G.forEach((e=>e())),H.forEach((e=>e()));const e=N?1:0,t=S,n=D,i=L;M.forEach((e=>{const o=e.classList;t.forEach((e=>o.add(e))),n.forEach((e=>o.remove(e)));for(const t in i)i.hasOwnProperty(t)&&l(e,t,i[t])})),I.forEach((t=>t.c(e,$))),j.forEach((t=>t.c(e,$))),j.length=0,W=!0,N&&(O=!0),N=!0})(),g&&g.animationFinish()))},ce=function(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];te();const n=a(b);M.forEach((o=>{if(n.length>0){const a=d(n);A=void 0!==e?e:m(a);const r=h(A,a,o);z.push(r),l(o,"animation-duration",`${ae()}ms`),l(o,"animation-timing-function",oe()),l(o,"animation-delay",`${se()}ms`),l(o,"animation-fill-mode",ne()),l(o,"animation-direction",ie());const s=re()===1/0?"infinite":re().toString();l(o,"animation-iteration-count",s),l(o,"animation-play-state","paused"),t&&l(o,"animation-name",`${r.id}-alt`),(0,i.r)((()=>{l(o,"animation-name",r.id||null)}))}}))},me=()=>{M.forEach((e=>{const t=e.animate(b,{id:x,delay:se(),duration:ae(),easing:oe(),iterations:re(),fill:ne(),direction:ie()});t.pause(),J.push(t)})),J.length>0&&(J[0].onfinish=()=>{de()})},he=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];fe(),b.length>0&&(U?me():ce(e)),k=!0},ue=e=>{if(e=Math.min(Math.max(e,0),.9999),U)J.forEach((t=>{t.currentTime=t.effect.getComputedTiming().delay+ae()*e,t.pause()}));else{const t=`-${ae()*e}ms`;M.forEach((e=>{b.length>0&&(l(e,"animation-delay",t),l(e,"animation-play-state","paused"))}))}},ge=e=>{J.forEach((e=>{e.effect.updateTiming({delay:se(),duration:ae(),easing:oe(),iterations:re(),fill:ne(),direction:ie()})})),void 0!==e&&ue(e)},pe=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;(0,i.r)((()=>{M.forEach((n=>{l(n,"animation-name",A||null),l(n,"animation-duration",`${ae()}ms`),l(n,"animation-timing-function",oe()),l(n,"animation-delay",void 0!==t?`-${t*ae()}ms`:`${se()}ms`),l(n,"animation-fill-mode",ne()||null),l(n,"animation-direction",ie()||null);const o=re()===1/0?"infinite":re().toString();l(n,"animation-iteration-count",o),e&&l(n,"animation-name",`${A}-alt`),(0,i.r)((()=>{l(n,"animation-name",A||null)}))}))}))},ve=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;return e&&q.forEach((i=>{i.update(e,t,n)})),U?ge(n):pe(t,n),$},ye=()=>{k&&(U?J.forEach((e=>{e.pause()})):M.forEach((e=>{l(e,"animation-play-state","paused")})),K=!0)},Ee=()=>{p=void 0,de()},Ae=()=>{p&&clearTimeout(p)},$e=()=>{M.forEach((e=>{f(e,"animation-duration"),f(e,"animation-delay"),f(e,"animation-play-state")}))},be=e=>new Promise((t=>{(null===e||void 0===e?void 0:e.sync)&&(R=!0,Y((()=>R=!1),{oneTimeCallback:!0})),k||he(),O&&(U?(ue(0),ge()):pe(),O=!1),W&&(P=q.length+1,W=!1),Y((()=>t()),{oneTimeCallback:!0}),q.forEach((e=>{e.play()})),U?(J.forEach((e=>{e.play()})),0!==b.length&&0!==M.length||de()):(()=>{if(Ae(),(0,i.r)((()=>{M.forEach((e=>{b.length>0&&l(e,"animation-play-state","running")}))})),0===b.length||0===M.length)de();else{const e=se()||0,t=ae()||0,n=re()||1;isFinite(n)&&(p=setTimeout(Ee,e+t*n+100)),((e,t)=>{let n;const i={passive:!0},o=()=>{n&&n()},a=n=>{e===n.target&&(o(),t(n))};e&&(e.addEventListener("webkitAnimationEnd",a,i),e.addEventListener("animationend",a,i),n=()=>{e.removeEventListener("webkitAnimationEnd",a,i),e.removeEventListener("animationend",a,i)})})(M[0],(()=>{Ae(),(0,i.r)((()=>{$e(),(0,i.r)(de)}))}))}})(),K=!1})),Ce=(e,t)=>{const n=b[0];return void 0===n||void 0!==n.offset&&0!==n.offset?b=[{offset:0,[e]:t},...b]:n[e]=t,$};return $={parentAnimation:g,elements:M,childAnimations:q,id:x,animationFinish:de,from:Ce,to:(e,t)=>{const n=b[b.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?b=[...b,{offset:1,[e]:t}]:n[e]=t,$},fromTo:(e,t,n)=>Ce(e,t).to(e,n),parent:e=>(g=e,$),play:be,pause:()=>(q.forEach((e=>{e.pause()})),ye(),$),stop:()=>{q.forEach((e=>{e.stop()})),k&&(ee(),k=!1),F=!1,R=!1,W=!0,v=void 0,y=void 0,E=void 0,P=0,O=!1,N=!0,K=!1},destroy:e=>(q.forEach((t=>{t.destroy(e)})),X(e),M.length=0,q.length=0,b.length=0,_(),k=!1,W=!0,$),keyframes:e=>{const t=b!==e;return b=e,t&&le(b),$},addAnimation:e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent($),q.push(t);else e.parent($),q.push(e);return $},addElement:e=>{if(null!=e)if(1===e.nodeType)M.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)M.push(e[t]);else console.error("Invalid addElement value");return $},update:ve,fill:e=>(s=e,ve(!0),$),direction:e=>(c=e,ve(!0),$),iterations:e=>(r=e,ve(!0),$),duration:e=>(U||0!==e||(e=1),n=e,ve(!0),$),easing:e=>(o=e,ve(!0),$),delay:e=>(t=e,ve(!0),$),getWebAnimations:V,getKeyframes:()=>b,getFill:ne,getDirection:ie,getDelay:se,getIterations:re,getEasing:oe,getDuration:ae,afterAddRead:e=>(G.push(e),$),afterAddWrite:e=>(H.push(e),$),afterClearStyles:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];for(const t of e)L[t]="";return $},afterStyles:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return L=e,$},afterRemoveClass:e=>(D=u(D,e),$),afterAddClass:e=>(S=u(S,e),$),beforeAddRead:e=>(Z.push(e),$),beforeAddWrite:e=>(B.push(e),$),beforeClearStyles:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];for(const t of e)T[t]="";return $},beforeStyles:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return T=e,$},beforeRemoveClass:e=>(w=u(w,e),$),beforeAddClass:e=>(C=u(C,e),$),onFinish:Y,isRunning:()=>0!==P&&!K,progressStart:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return q.forEach((n=>{n.progressStart(e,t)})),ye(),F=e,k||he(),ve(!1,!0,t),$},progressStep:e=>(q.forEach((t=>{t.progressStep(e)})),ue(e),$),progressEnd:(e,t,n)=>(F=!1,q.forEach((i=>{i.progressEnd(e,t,n)})),void 0!==n&&(y=n),O=!1,N=!0,0===e?(v="reverse"===ie()?"normal":"reverse","reverse"===v&&(N=!1),U?(ve(),ue(1-t)):(E=(1-t)*ae()*-1,ve(!1,!1))):1===e&&(U?(ve(),ue(t)):(E=t*ae()*-1,ve(!1,!1))),void 0!==e&&(Y((()=>{y=void 0,v=void 0,E=void 0}),{oneTimeCallback:!0}),g||be()),$)}}}}]);
//# sourceMappingURL=883.c9af5bbc.chunk.js.map