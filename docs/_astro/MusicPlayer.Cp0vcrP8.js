import{o as La,b as Sa,i as Pa,a as $,s as rt,e as De}from"./props.DqoqTnyv.js";import{a3 as Ia,ao as za,au as Na,av as Wa,o as $a,u as Oa,aw as Ka,ax as Pe,ay as Va,v as Ga,az as ht,k as st,i as tt,a as O,p as Ua,b as Ya,s as o,m as F,ar as G,g as t,f as vt,d as v,c as r,r as i,n as qa,t as Lt,j as h}from"./utils.CX-8I5-i.js";import{a as Ha,s as X}from"./render.vXb-98OR.js";import{i as P,I as f}from"./Icon.TtdhB5SK.js";import{e as Xa,i as Ja}from"./each.DAdWb8-E.js";import{b as Re}from"./this.0g8WgyrV.js";import{m as xt}from"./config.BrO9LeBI.js";import{I as Qa}from"./zh_TW.D-fhrWWx.js";import{i as Za}from"./translation.S5Oop200.js";const ti=()=>performance.now(),J={tick:c=>requestAnimationFrame(c),now:()=>ti(),tasks:new Set};function Ie(){const c=J.now();J.tasks.forEach(s=>{s.c(c)||(J.tasks.delete(s),s.f())}),J.tasks.size!==0&&J.tick(Ie)}function ei(c){let s;return J.tasks.size===0&&J.tick(Ie),{promise:new Promise(w=>{J.tasks.add(s={c,f:w})}),abort(){J.tasks.delete(s)}}}function St(c,s){Pe(()=>{c.dispatchEvent(new CustomEvent(s))})}function ai(c){if(c==="float")return"cssFloat";if(c==="offset")return"cssOffset";if(c.startsWith("--"))return c;const s=c.split("-");return s.length===1?s[0]:s[0]+s.slice(1).map(w=>w[0].toUpperCase()+w.slice(1)).join("")}function Le(c){const s={},w=c.split(";");for(const k of w){const[M,A]=k.split(":");if(!M||A===void 0)break;const I=ai(M.trim());s[I]=A.trim()}return s}const ii=c=>c;function ri(c,s,w,k){var M=(c&Ka)!==0,A="both",I,x=s.inert,C=s.style.overflow,d,b;function S(){return Pe(()=>I??=w()(s,k?.()??{},{direction:A}))}var E={is_global:M,in(){s.inert=x,St(s,"introstart"),d=ae(s,S(),b,1,()=>{St(s,"introend"),d?.abort(),d=I=void 0,s.style.overflow=C})},out(R){s.inert=!0,St(s,"outrostart"),b=ae(s,S(),d,0,()=>{St(s,"outroend"),R?.()})},stop:()=>{d?.abort(),b?.abort()}},j=Ia;if((j.transitions??=[]).push(E),Ha){var D=M;if(!D){for(var u=j.parent;u&&(u.f&za)!==0;)for(;(u=u.parent)&&(u.f&Na)===0;);D=!u||(u.f&Wa)!==0}D&&$a(()=>{Oa(()=>E.in())})}}function ae(c,s,w,k,M){var A=k===1;if(Va(s)){var I,x=!1;return Ga(()=>{if(!x){var R=s({direction:A?"in":"out"});I=ae(c,R,w,k,M)}}),{abort:()=>{x=!0,I?.abort()},deactivate:()=>I.deactivate(),reset:()=>I.reset(),t:()=>I.t()}}if(w?.deactivate(),!s?.duration)return M(),{abort:ht,deactivate:ht,reset:ht,t:()=>k};const{delay:C=0,css:d,tick:b,easing:S=ii}=s;var E=[];if(A&&w===void 0&&(b&&b(0,1),d)){var j=Le(d(0,1));E.push(j,j)}var D=()=>1-k,u=c.animate(E,{duration:C,fill:"forwards"});return u.onfinish=()=>{u.cancel();var R=w?.t()??1-k;w?.abort();var g=k-R,et=s.duration*Math.abs(g),at=[];if(et>0){var z=!1;if(d)for(var p=Math.ceil(et/16.666666666666668),y=0;y<=p;y+=1){var a=R+g*S(y/p),Q=Le(d(a,1-a));at.push(Q),z||=Q.overflow==="hidden"}z&&(c.style.overflow="hidden"),D=()=>{var U=u.currentTime;return R+g*S(U/et)},b&&ei(()=>{if(u.playState!=="running")return!1;var U=D();return b(U,1-U),!0})}u=c.animate(at,{duration:et,fill:"forwards"}),u.onfinish=()=>{D=()=>k,b?.(k,1-k),M()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=ht)},deactivate:()=>{M=ht},reset:()=>{k===0&&b?.(1,0)},t:()=>D()}}function Se(c){return function(...s){var w=s[0];return w.stopPropagation(),c?.apply(this,s)}}function si(c){const s=c-1;return s*s*s+1}function ni(c,{delay:s=0,duration:w=400,easing:k=si,axis:M="y"}={}){const A=getComputedStyle(c),I=+A.opacity,x=M==="y"?"height":"width",C=parseFloat(A[x]),d=M==="y"?["top","bottom"]:["left","right"],b=d.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),S=parseFloat(A[`padding${b[0]}`]),E=parseFloat(A[`padding${b[1]}`]),j=parseFloat(A[`margin${b[0]}`]),D=parseFloat(A[`margin${b[1]}`]),u=parseFloat(A[`border${b[0]}Width`]),R=parseFloat(A[`border${b[1]}Width`]);return{delay:s,duration:w,easing:k,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*I};${x}: ${g*C}px;padding-${d[0]}: ${g*S}px;padding-${d[1]}: ${g*E}px;margin-${d[0]}: ${g*j}px;margin-${d[1]}: ${g*D}px;border-${d[0]}-width: ${g*u}px;border-${d[1]}-width: ${g*R}px;min-${x}: 0`}}var li=vt('<div class="fixed bottom-20 left-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),oi=vt('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),ui=vt('<span class="text-sm text-[var(--content-meta)]"></span>'),ci=vt('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),di=vt('<div class="playlist-panel float-panel fixed bottom-20 left-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),vi=vt(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    left: 0;
}
.expanded-player {
    width: 320px;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        left: 8px !important;
        bottom: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        left: 8px !important;
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        left: 8px !important;
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 4s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function wi(c,s){Ya(s,!1);let w=xt.mode??"local",k=xt.meting_api??"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",M=xt.id??"14164869977",A=xt.server??"netease",I=xt.type??"playlist",x=F(!1),C=F(!1),d=F(!1),b=F(!1),S=F(0),E=F(0),j=F(.7),D=F(!1),u=F(!1),R=F(!1),g=F(0),et=F(""),at=F(!1),z=F({title:"示例歌曲",artist:"示例艺术家",cover:"/favicon/favicon-light-192.png",url:"",duration:0}),p=F([]),y=F(0),a=F(),Q=F(),U=F();const ze=[{id:1,title:"龍武同舟 (Alicemetix Remix)",artist:"KARUT; Alicemetix",cover:"assets/music/cover/1、龍武同舟.jpg",url:"assets/music/url/1、龍武同舟.flac",duration:210},{id:2,title:"かたち",artist:"安月名莉子",cover:"assets/music/cover/2、かたち.PNG",url:"assets/music/url/2、かたち.flac",duration:220},{id:3,title:"RAVE INTO THE NIGHT",artist:"Sanaas",cover:"assets/music/cover/3、RAVE.jpg",url:"assets/music/url/3、RAVE.flac",duration:360},{id:4,title:"Cyberozar [2017]",artist:"削除",cover:"assets/music/cover/4、削除.jpg",url:"assets/music/url/4、削除.flac",duration:240},{id:5,title:"低音域 Emulator",artist:"takehirotei",cover:"assets/music/cover/5、低音域.png",url:"assets/music/url/5、低音域.flac",duration:360},{id:6,title:"Ignite",artist:"awfuless",cover:"assets/music/cover/6、Ignite.PNG",url:"assets/music/url/6、Ignite.flac",duration:200},{id:7,title:"Chameleon (Nota Remix)",artist:"RIKU; Nota",cover:"assets/music/cover/7、Chameleon.jpg",url:"assets/music/url/7、Chameleon.flac",duration:240},{id:8,title:"Groovy Movie",artist:"Modulation",cover:"assets/music/cover/8、Modulation.jpg",url:"assets/music/url/8、Modulation.mp3",duration:300},{id:9,title:"Aspiration",artist:"影虎。",cover:"assets/music/cover/9、Aspiration.jpg",url:"assets/music/url/9、Aspiration.flac",duration:180},{id:10,title:"Exist",artist:"OVERWERK",cover:"assets/music/cover/10、OVERWERK.jpg",url:"assets/music/url/10、OVERWERK.flac",duration:300}];async function Ne(){if(!k||!M)return;o(u,!0);const n=k.replace(":server",A).replace(":type",I).replace(":id",M).replace(":auth","").replace(":r",Date.now().toString());try{const L=await fetch(n);if(!L.ok)throw new Error("meting api error");const Y=await L.json();o(p,Y.map(W=>{let ft=W.name??W.title??"未知歌曲",Et=W.artist??W.author??"未知艺术家",N=W.duration??0;return N>1e4&&(N=Math.floor(N/1e3)),(!Number.isFinite(N)||N<=0)&&(N=0),{id:W.id,title:ft,artist:Et,cover:W.pic??"",url:W.url??"",duration:N}})),t(p).length>0&&It(t(p)[0]),o(u,!1)}catch{zt("Meting 歌单获取失败"),o(u,!1)}}function We(){!t(a)||!t(z).url||(t(x)?t(a).pause():t(a).play())}function yt(){o(C,!t(C)),t(C)&&(o(b,!1),o(d,!1))}function _t(){o(d,!t(d)),t(d)&&(o(C,!1),o(b,!1))}function ie(){o(b,!t(b))}function $e(){o(R,!t(R))}function Oe(){o(g,(t(g)+1)%3)}function Ke(){if(t(p).length<=1)return;const n=t(y)>0?t(y)-1:t(p).length-1;wt(n)}function Pt(){if(t(p).length<=1)return;let n;if(t(R))do n=Math.floor(Math.random()*t(p).length);while(n===t(y)&&t(p).length>1);else n=t(y)<t(p).length-1?t(y)+1:0;wt(n)}function wt(n){if(n<0||n>=t(p).length)return;const L=t(x);o(y,n),t(a)&&t(a).pause(),It(t(p)[t(y)]),(L||!t(x))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function kt(n){return n.startsWith("http://")||n.startsWith("https://")||n.startsWith("/")?n:`/${n}`}function It(n){!n||!t(a)||(o(z,{...n}),n.url?(o(u,!0),t(a).pause(),G(a,t(a).currentTime=0),o(S,0),o(E,n.duration??0),t(a).removeEventListener("loadeddata",re),t(a).removeEventListener("error",se),t(a).removeEventListener("loadstart",ne),t(a).addEventListener("loadeddata",re,{once:!0}),t(a).addEventListener("error",se,{once:!0}),t(a).addEventListener("loadstart",ne,{once:!0}),G(a,t(a).src=kt(n.url)),t(a).load()):o(u,!1))}function re(){o(u,!1),t(a)?.duration&&t(a).duration>1&&(o(E,Math.floor(t(a).duration)),t(p)[t(y)]&&G(p,t(p)[t(y)].duration=t(E)),G(z,t(z).duration=t(E)))}function se(n){o(u,!1),zt(`无法播放 "${t(z).title}"，正在尝试下一首...`),t(p).length>1?setTimeout(()=>Pt(),1e3):zt("播放列表中没有可用的歌曲")}function ne(){}function zt(n){o(et,n),o(at,!0),setTimeout(()=>{o(at,!1)},3e3)}function Ve(){o(at,!1)}function Ge(n){if(!t(a)||!t(Q))return;const L=t(Q).getBoundingClientRect(),W=(n.clientX-L.left)/L.width*t(E);G(a,t(a).currentTime=W),o(S,W)}function Ue(n){if(!t(a)||!t(U))return;const L=t(U).getBoundingClientRect(),Y=Math.max(0,Math.min(1,(n.clientX-L.left)/L.width));o(j,Y),G(a,t(a).volume=t(j)),o(D,t(j)===0)}function le(){t(a)&&(o(D,!t(D)),G(a,t(a).muted=t(D)))}function oe(n){if(!Number.isFinite(n)||n<0)return"0:00";const L=Math.floor(n/60),Y=Math.floor(n%60);return`${L}:${Y.toString().padStart(2,"0")}`}function Ye(){t(a)&&(t(a).addEventListener("play",()=>{o(x,!0)}),t(a).addEventListener("pause",()=>{o(x,!1)}),t(a).addEventListener("timeupdate",()=>{o(S,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(g)===1?(G(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(g)===2||t(y)<t(p).length-1||t(R)?Pt():o(x,!1)}),t(a).addEventListener("error",n=>{o(u,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}La(()=>{o(a,new Audio),G(a,t(a).volume=t(j)),Ye(),w==="meting"?Ne():(o(p,ze),t(p).length>0&&It(t(p)[0]))}),Sa(()=>{t(a)&&(t(a).pause(),G(a,t(a).src=""))}),Pa();var ue=st(),qe=tt(ue);{var He=n=>{var L=vi(),Y=tt(L);{var W=e=>{var m=li(),_=r(m),B=r(_);f(B,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var T=v(B,2),l=r(T,!0);i(T);var q=v(T,2),ct=r(q);f(ct,{icon:"material-symbols:close",class:"text-lg"}),i(q),i(_),i(m),Lt(()=>X(l,t(et))),h("click",q,Ve),O(e,m)};P(Y,e=>{t(at)&&e(W)})}var ft=v(Y,2);let Et;var N=r(ft);let ce;var Xe=r(N);{var Je=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},Qe=e=>{var m=st(),_=tt(m);{var B=l=>{var q=oi();O(l,q)},T=l=>{f(l,{icon:"material-symbols:music-note",class:"text-white text-lg"})};P(_,l=>{t(x)?l(B):l(T,!1)},!0)}O(e,m)};P(Xe,e=>{t(u)?e(Je):e(Qe,!1)})}i(N);var nt=v(N,2);let de;var ve=r(nt),Nt=r(ve),Wt=r(Nt);let fe;var pe=v(Wt,2),Ze=r(pe);{var ta=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},ea=e=>{var m=st(),_=tt(m);{var B=l=>{f(l,{icon:"material-symbols:pause",class:"text-white text-xl"})},T=l=>{f(l,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};P(_,l=>{t(x)?l(B):l(T,!1)},!0)}O(e,m)};P(Ze,e=>{t(u)?e(ta):e(ea,!1)})}i(pe),i(Nt);var $t=v(Nt,2),Ot=r($t),aa=r(Ot,!0);i(Ot);var me=v(Ot,2),ia=r(me,!0);i(me),i($t);var be=v($t,2),Ft=r(be),ra=r(Ft);f(ra,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Ft);var Kt=v(Ft,2),sa=r(Kt);f(sa,{icon:"material-symbols:expand-less",class:"text-lg"}),i(Kt),i(be),i(ve),i(nt);var At=v(nt,2);let ge;var Vt=r(At),Gt=r(Vt),he=r(Gt);let xe;i(Gt);var Ut=v(Gt,2),Yt=r(Ut),na=r(Yt,!0);i(Yt);var qt=v(Yt,2),la=r(qt,!0);i(qt);var ye=v(qt,2),oa=r(ye);i(ye),i(Ut);var _e=v(Ut,2),Bt=r(_e),ua=r(Bt);f(ua,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Bt);var Ht=v(Bt,2),ca=r(Ht);f(ca,{icon:"material-symbols:expand-more",class:"text-lg"}),i(Ht),i(_e),i(Vt);var Xt=v(Vt,2),lt=r(Xt),da=r(lt);i(lt),Re(lt,e=>o(Q,e),()=>t(Q)),i(Xt);var Jt=v(Xt,2),ot=r(Jt);let we;var va=r(ot);f(va,{icon:"material-symbols:shuffle",class:"text-lg"}),i(ot);var pt=v(ot,2),fa=r(pt);f(fa,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(pt);var ut=v(pt,2);let ke;var pa=r(ut);{var ma=e=>{f(e,{icon:"eos-icons:loading",class:"text-xl"})},ba=e=>{var m=st(),_=tt(m);{var B=l=>{f(l,{icon:"material-symbols:pause",class:"text-xl"})},T=l=>{f(l,{icon:"material-symbols:play-arrow",class:"text-xl"})};P(_,l=>{t(x)?l(B):l(T,!1)},!0)}O(e,m)};P(pa,e=>{t(u)?e(ma):e(ba,!1)})}i(ut);var mt=v(ut,2),ga=r(mt);f(ga,{icon:"material-symbols:skip-next",class:"text-xl"}),i(mt);var Ct=v(mt,2);let Ee;var ha=r(Ct);{var xa=e=>{f(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},ya=e=>{var m=st(),_=tt(m);{var B=l=>{f(l,{icon:"material-symbols:repeat",class:"text-lg"})},T=l=>{f(l,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};P(_,l=>{t(g)===2?l(B):l(T,!1)},!0)}O(e,m)};P(ha,e=>{t(g)===1?e(xa):e(ya,!1)})}i(Ct),i(Jt);var Fe=v(Jt,2),Tt=r(Fe),_a=r(Tt);{var wa=e=>{f(e,{icon:"material-symbols:volume-off",class:"text-lg"})},ka=e=>{var m=st(),_=tt(m);{var B=l=>{f(l,{icon:"material-symbols:volume-down",class:"text-lg"})},T=l=>{f(l,{icon:"material-symbols:volume-up",class:"text-lg"})};P(_,l=>{t(j)<.5?l(B):l(T,!1)},!0)}O(e,m)};P(_a,e=>{t(D)||t(j)===0?e(wa):e(ka,!1)})}i(Tt);var it=v(Tt,2),Ea=r(it);i(it),Re(it,e=>o(U,e),()=>t(U));var Mt=v(it,2);let Ae;var Fa=r(Mt);f(Fa,{icon:"material-symbols:queue-music",class:"text-lg"}),i(Mt),i(Fe),i(At);var Aa=v(At,2);{var Ba=e=>{var m=di(),_=r(m),B=r(_),T=r(B,!0);i(B);var l=v(B,2),q=r(l);f(q,{icon:"material-symbols:close",class:"text-lg"}),i(l),i(_);var ct=v(_,2);Xa(ct,5,()=>t(p),Ja,(bt,Z,K)=>{var H=ci();let jt;var gt=r(H),Ca=r(gt);{var Ta=V=>{f(V,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Ma=V=>{var Rt=st(),te=tt(Rt);{var ee=dt=>{f(dt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Ra=dt=>{var je=ui();je.textContent=K+1,O(dt,je)};P(te,dt=>{K===t(y)?dt(ee):dt(Ra,!1)},!0)}O(V,Rt)};P(Ca,V=>{K===t(y)&&t(x)?V(Ta):V(Ma,!1)})}i(gt);var Qt=v(gt,2),Be=r(Qt);i(Qt);var Ce=v(Qt,2),Dt=r(Ce);let Te;var ja=r(Dt,!0);i(Dt);var Zt=v(Dt,2);let Me;var Da=r(Zt,!0);i(Zt),i(Ce),i(H),Lt((V,Rt,te,ee)=>{jt=$(H,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,jt,V),rt(H,"aria-label",`播放 ${t(Z).title??""} - ${t(Z).artist??""}`),rt(Be,"src",Rt),rt(Be,"alt",t(Z).title),Te=$(Dt,1,"font-medium truncate",null,Te,te),X(ja,t(Z).title),Me=$(Zt,1,"text-sm text-[var(--content-meta)] truncate",null,Me,ee),X(Da,t(Z).artist)},[()=>({"bg-[var(--btn-plain-bg)]":K===t(y),"text-[var(--primary)]":K===t(y)}),()=>kt(t(Z).cover),()=>({"text-[var(--primary)]":K===t(y),"text-90":K!==t(y)}),()=>({"text-[var(--primary)]":K===t(y)})]),h("click",H,()=>wt(K)),h("keydown",H,V=>{(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),wt(K))}),O(bt,H)}),i(ct),i(m),Lt(bt=>X(T,bt),[()=>Za(Qa.playlist)]),h("click",l,ie),ri(3,m,()=>ni,()=>({duration:300,axis:"y"})),O(e,m)};P(Aa,e=>{t(b)&&e(Ba)})}i(ft),qa(2),Lt((e,m,_,B,T,l,q,ct,bt,Z,K,H,jt,gt)=>{Et=$(ft,1,"music-player fixed bottom-4 left-4 z-50 transition-all duration-300 ease-in-out",null,Et,e),ce=$(N,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,ce,m),de=$(nt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,de,_),rt(Wt,"src",B),fe=$(Wt,1,"w-full h-full object-cover transition-transform duration-300",null,fe,T),X(aa,t(z).title),X(ia,t(z).artist),ge=$(At,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,ge,l),rt(he,"src",q),xe=$(he,1,"w-full h-full object-cover transition-transform duration-300",null,xe,ct),X(na,t(z).title),X(la,t(z).artist),X(oa,`${bt??""} / ${Z??""}`),rt(lt,"aria-valuenow",t(E)>0?t(S)/t(E)*100:0),De(da,`width: ${t(E)>0?t(S)/t(E)*100:0}%`),we=$(ot,1,"w-10 h-10 rounded-lg",null,we,K),ot.disabled=t(p).length<=1,pt.disabled=t(p).length<=1,ke=$(ut,1,"btn-regular w-12 h-12 rounded-full",null,ke,H),ut.disabled=t(u),mt.disabled=t(p).length<=1,Ee=$(Ct,1,"w-10 h-10 rounded-lg",null,Ee,jt),rt(it,"aria-valuenow",t(j)*100),De(Ea,`width: ${t(j)*100}%`),Ae=$(Mt,1,"btn-plain w-8 h-8 rounded-lg",null,Ae,gt)},[()=>({expanded:t(C),"hidden-mode":t(d)}),()=>({"opacity-0":!t(d),"scale-0":!t(d),"pointer-events-none":!t(d)}),()=>({"opacity-0":t(C)||t(d),"scale-95":t(C)||t(d),"pointer-events-none":t(C)||t(d)}),()=>kt(t(z).cover),()=>({spinning:t(x)&&!t(u),"animate-pulse":t(u)}),()=>({"opacity-0":!t(C),"scale-95":!t(C),"pointer-events-none":!t(C)}),()=>kt(t(z).cover),()=>({spinning:t(x)&&!t(u),"animate-pulse":t(u)}),()=>oe(t(S)),()=>oe(t(E)),()=>({"btn-regular":t(R),"btn-plain":!t(R)}),()=>({"opacity-50":t(u)}),()=>({"btn-regular":t(g)>0,"btn-plain":t(g)===0}),()=>({"text-[var(--primary)]":t(b)})]),h("click",N,_t),h("keydown",N,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),_t())}),h("click",Ft,Se(_t)),h("click",Kt,Se(yt)),h("click",nt,yt),h("keydown",nt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),yt())}),h("click",Bt,_t),h("click",Ht,yt),h("click",lt,Ge),h("keydown",lt,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(Q).getBoundingClientRect();const _=.5*t(E);t(a)&&(G(a,t(a).currentTime=_),o(S,_))}}),h("click",ot,$e),h("click",pt,Ke),h("click",ut,We),h("click",mt,Pt),h("click",Ct,Oe),h("click",Tt,le),h("click",it,Ue),h("keydown",it,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&le())}),h("click",Mt,ie),O(n,L)};P(qe,n=>{n(He)})}O(c,ue),Ua()}export{wi as default};
