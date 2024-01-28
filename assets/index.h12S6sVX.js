import{u as K}from"./vue.f36acd1f.iwrJwnkd.js";import{h as C,E as Q,j as O,p as Z,F as H,G as ee,H as W,l as te,m as P,c as A,d as se,r as $,o as E,g as oe,t as h,v as f,x as s,z as g,A as M,T as z,I as y,J as _,_ as N,K as q,L as w,M as S,y as b,N as U,O as F,C as ie,D as re,P as ne}from"./entry.JX-s1e8d.js";async function ae(e,t){return await le(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function le(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const o={width:i.width,height:i.height,ratio:i.width/i.height};t(o)},i.onerror=o=>r(o),i.src=e})}function B(e){return t=>t?e[t]||t:e.missingValue}function ce({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(a,l)=>`${a}=${l}`),t&&typeof t!="function"&&(t=B(t));const o=i||{};return Object.keys(o).forEach(a=>{typeof o[a]!="function"&&(o[a]=B(o[a]))}),(a={})=>Object.entries(a).filter(([n,c])=>typeof c<"u").map(([n,c])=>{const u=o[n];return typeof u=="function"&&(c=u(a[n])),n=typeof t=="function"?t(n):n,e(n,c)}).join(r)}function k(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function de(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function ue(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function pe(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function _e(e){const t={options:e},r=(o,a={})=>X(t,o,a),i=(o,a={},l={})=>r(o,{...l,modifiers:H(a,l.modifiers||{})}).url;for(const o in e.presets)i[o]=(a,l,n)=>i(a,l,{...e.presets[o],...n});return i.options=e,i.getImage=r,i.getMeta=(o,a)=>he(t,o,a),i.getSizes=(o,a)=>me(t,o,a),t.$img=i,i}async function he(e,t,r){const i=X(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await ae(e,i.url)}function X(e,t,r){if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:o}=fe(e,r.provider||e.options.provider),a=ge(e,r.preset);if(t=C(t)?t:Q(t),!i.supportsAlias)for(const u in e.options.alias)t.startsWith(u)&&(t=O(e.options.alias[u],t.substr(u.length)));if(i.validateDomains&&C(t)){const u=Z(t).host;if(!e.options.domains.find(m=>m===u))return{url:t}}const l=H(r,a,o);l.modifiers={...l.modifiers};const n=l.modifiers.format;l.modifiers?.width&&(l.modifiers.width=k(l.modifiers.width)),l.modifiers?.height&&(l.modifiers.height=k(l.modifiers.height));const c=i.getImage(t,l,e);return c.format=c.format||n||"",c}function fe(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function ge(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function me(e,t,r){const i=k(r.modifiers?.width),o=k(r.modifiers?.height),a=pe(r.sizes),l=r.densities?.trim()?de(r.densities.trim()):e.options.densities;ue(l);const n=i&&o?o/i:0,c=[],u=[];if(Object.keys(a).length>=1){for(const p in a){const v=V(p,String(a[p]),o,n,e);if(v!==void 0){c.push({size:v.size,screenMaxWidth:v.screenMaxWidth,media:`(max-width: ${v.screenMaxWidth}px)`});for(const I of l)u.push({width:v._cWidth*I,src:D(e,t,r,v,I)})}}xe(c)}else for(const p of l){const v=Object.keys(a)[0];let I=V(v,String(a[v]),o,n,e);I===void 0&&(I={size:"",screenMaxWidth:0,_cWidth:r.modifiers?.width,_cHeight:r.modifiers?.height}),u.push({width:p,src:D(e,t,r,I,p)})}be(u);const m=u[u.length-1],j=c.length?c.map(p=>`${p.media?p.media+" ":""}${p.size}`).join(", "):void 0,x=j?"w":"x",d=u.map(p=>`${p.src} ${p.width}${x}`).join(", ");return{sizes:j,srcset:d,src:m?.src}}function V(e,t,r,i,o){const a=o.options.screens&&o.options.screens[e]||parseInt(e),l=t.endsWith("vw");if(!l&&/^\d+$/.test(t)&&(t=t+"px"),!l&&!t.endsWith("px"))return;let n=parseInt(t);if(!a||!n)return;l&&(n=Math.round(n/100*a));const c=i?Math.round(n*i):r;return{size:t,screenMaxWidth:a,_cWidth:n,_cHeight:c}}function D(e,t,r,i,o){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*o:void 0,height:i._cHeight?i._cHeight*o:void 0},r)}function xe(e){e.sort((r,i)=>r.screenMaxWidth-i.screenMaxWidth);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.media===t&&e.splice(r,1),t=i.media}for(let r=0;r<e.length;r++)e[r].media=e[r+1]?.media||""}function be(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const ve=ce({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>W(e)+"_"+W(t)}),we=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const o=ve(t)||"_";return r||(r=O(i.options.nuxt.baseURL,"/_ipx")),{url:O(r,o,ee(e))}},ye=!0,ke=!0,je=Object.freeze(Object.defineProperty({__proto__:null,getImage:we,supportsAlias:ke,validateDomains:ye},Symbol.toStringTag,{value:"Module"})),G={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};G.providers={ipxStatic:{provider:je,defaults:{}}};const Y=()=>{const e=te(),t=P();return t.$img||t._img||(t._img=_e({...G,nuxt:{baseURL:e.app.baseURL}}))},$e={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},Se=e=>{const t=A(()=>({provider:e.provider,preset:e.preset})),r=A(()=>({width:k(e.width),height:k(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=Y(),o=A(()=>({...e.modifiers,width:k(e.width),height:k(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:o}},Ae={...$e,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},T=se({name:"NuxtImg",props:Ae,emits:["load","error"],setup:(e,t)=>{const r=Y(),i=Se(e),o=$(!1),a=A(()=>r.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:k(e.width),height:k(e.height)}})),l=A(()=>{const d={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||o.value)&&(d.sizes=a.value.sizes,d.srcset=a.value.srcset),d}),n=A(()=>{let d=e.placeholder;if(d===""&&(d=!0),!d||o.value)return!1;if(typeof d=="string")return d;const p=Array.isArray(d)?d:typeof d=="number"?[d,d]:[10,10];return r(e.src,{...i.modifiers.value,width:p[0],height:p[1],quality:p[2]||50,blur:p[3]||3},i.options.value)}),c=A(()=>e.sizes?a.value.src:r(e.src,i.modifiers.value,i.options.value)),u=A(()=>n.value?n.value:c.value);if(e.preload){const d=Object.values(a.value).every(p=>p);K({link:[{rel:"preload",as:"image",nonce:e.nonce,...d?{href:a.value.src,imagesizes:a.value.sizes,imagesrcset:a.value.srcset}:{href:u.value}}]})}const m=$(),x=P().isHydrating;return E(()=>{if(n.value){const d=new Image;d.src=c.value,e.sizes&&(d.sizes=a.value.sizes||"",d.srcset=a.value.srcset),d.onload=p=>{o.value=!0,t.emit("load",p)};return}m.value&&(m.value.complete&&x&&(m.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),m.value.onload=d=>{t.emit("load",d)},m.value.onerror=d=>{t.emit("error",d)})}),()=>oe("img",{ref:m,src:u.value,...l.value,...t.attrs})}}),Ie={class:"absolute top-[10%] right-[10%] flex items-center drop-shadow-sm"},Ee=s("span",null,"Scroll ",-1),Te={__name:"intro",setup(e){const t=$(!1),r=$(null),i=$(null),o=$(null),a=x=>{_.set(x,{opacity:0,y:-60})},l=x=>{_.to(x,{duration:2,y:0,opacity:1,ease:"bounce.out"})},n=x=>{_.set(x,{opacity:0,x:-60})},c=x=>{_.to(x,{duration:2,x:0,opacity:1,ease:"bounce.out"})},u=x=>{_.set(x,{opacity:0,x:-60})},m=x=>{_.to(x,{duration:2,x:0,opacity:1,ease:"bounce.out"})},j=x=>{var d="",p=document.querySelector(x);for(let v=0;v<p.innerText.length;v++)d+="<div>",p.innerText[v]==" "?d+="&nbsp;":d+=p.innerText[v],d+="</div>";p.innerHTML=d,_.fromTo(x+" div",{opacity:0,y:90},{duration:2,opacity:1,y:0,stagger:.03,ease:"elastic(1.2, 0.5)",scrollTrigger:{trigger:x,start:"top 70%",toggleActions:"restart none none reverse"}})};return E(()=>{document.getElementById("page-1-intro").style.display="none",setTimeout(()=>{document.getElementById("page-1-intro").style.display="flex",a(r.value),l(r.value),n(i.value),c(i.value),u(o.value),m(o.value),j("#article-heading-myname")},1e3)}),(x,d)=>{const p=T;return h(),f("div",{class:"flex justify-center flex-col text-center h-screen gap-y-2 w-full",id:"page-1-intro",onMouseover:d[0]||(d[0]=v=>t.value=!0),onMouseleave:d[1]||(d[1]=v=>t.value=!1)},[s("div",Ie,[Ee,g(p,{src:"/icons/scroll.svg",class:"w-[32px] h-[32px]"})]),g(z,{onBeforeEnter:a,onEnter:l,appear:""},{default:M(()=>[s("span",{class:"font-merienda sm:ml-[-28rem] ml-0 article-heading-greet",id:"article-heading-greet",ref_key:"span",ref:r},"Hey , I'm",512)]),_:1}),g(z,{onBeforeEnter:n,onEnter:c,appear:""},{default:M(()=>[s("h1",{ref_key:"heading",ref:i,class:y(["sm:text-8xl text-7xl font-rubik glitch work-c",t.value?"glitch":""]),"data-glitch":"ANIL DAS",id:"article-heading-myname"},"ANIL DAS",2)]),_:1}),g(z,{onBeforeEnter:a,onEnter:l,appear:""},{default:M(()=>[s("h2",{ref_key:"profile",ref:o,class:"text-2xl font-kalam",id:"article-heading-profile"},"FRONT END DEVELOPER",512)]),_:1})],32)}}},Le=Te,{work:R}=await q(()=>import("./work.7Roh4Zea.js"),__vite__mapDeps([]),import.meta.url),Me={setup(){const{$viewerApi:e}=P();return{Viewer:e}},data(){return{workList:R,activeJob:R[0],jobIndex:0,btnActive:0,scrnShots:[],isMob:null}},methods:{nextJOB(){this.jobIndex+=1,this.jobIndex<2?this.activeJob=this.workList[this.jobIndex]:(this.activeJob=this.workList[0],this.jobIndex=0)},prevJOB(){this.jobIndex===0?(this.jobIndex=1,this.activeJob=this.workList[this.jobIndex]):(this.activeJob=this.workList[0],this.jobIndex=0)},jobClick(e){this.btnActive=e,this.$bus.$emit("icon-job::click",e),this.scrnShots=this.activeJob.projects[e].scrnShots},show(e){this.Viewer({options:{toolbar:!0,rotatable:!1,scalable:!1,title:!1,initialViewIndex:e},images:this.scrnShots})}},mounted(){this.activeJob=this.workList[0],this.scrnShots=this.activeJob.projects[0].scrnShots,this.isMob=window?.matchMedia("(max-width: 480px)")?.matches,window.addEventListener("resize",()=>{this.isMob=window?.matchMedia("(max-width: 480px)")?.matches})}},ze=s("div",{class:"text-left leading-[2.5rem] pl-2 flex justify-between items-center font-rubik text-5xl",id:"work-head-1"}," WORK EXPRIENCE ",-1),Je={class:"flex gap-10 m-5 work-box"},Pe={class:"flex p-3 flex-col border border-black bg-white relative before:contents-[*] before:absolute before:-z-10 before:w-full before:h-full before:top-[7%] before:border-black before:left-[7%] before:border before:border-dashed"},Ne={class:"px-3 py-1 text-[8px] font-bold text text-blue-800 uppercase bg-blue-200 rounded-full"},Oe={class:"my-3"},qe=["href"],Ce={class:"font-bold"},We={class:"text-sm font-kalam"},Be={id:"page-3-work",class:"w-1/2 h-full flex flex-col justify-between pl-[10%] py-[5%] pr-[5%]"},Ve={class:"text-sm font-kalam px-2"},De=["onClick"],Re=s("span",{class:"absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"},null,-1),He={class:"grid grid-cols-3 w-full gap-3 p-8 max-w-[600px] place-items-center image-grid-cont"};function Ue(e,t,r,i,o,a){const l=T;return h(),f(w,null,[s("div",{id:"page-2-work",class:y([o.isMob?"bg-white":"","w-1/2 h-full flex flex-col justify-center"])},[ze,s("div",Je,[(h(!0),f(w,null,S(o.workList,n=>(h(),f("div",Pe,[s("div",null,[s("span",Ne,b(n.start+" to "+n.end),1)]),s("div",Oe,[s("a",{href:n.url,class:"flex justify-center rounded-lg py-7 px-2 bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 hover:cursor-pointer"},[g(l,{src:`/images/company/${n.logo}`},null,8,["src"])],8,qe)]),s("p",Ce,b(n.name),1),s("p",We,b(n.profile),1)]))),256))])],2),s("div",Be,[s("div",null,[s("p",{class:y(["font-bold bg-[mediumspringgreen] px-2 rounded-sm job-name",o.isMob?"text-[14px]":""])},b(o.activeJob.name),3),s("p",Ve,b(o.activeJob.profile),1)]),s("div",null,[(h(!0),f(w,null,S(o.activeJob.projects,(n,c)=>(h(),f("div",null,[s("a",{onClick:u=>a.jobClick(c),class:"job-projects relative inline-block px-2 py-1 font-medium group"},[Re,s("span",{class:y(["absolute inset-0 w-full h-full border-2 border-black group-hover:bg-black",o.btnActive===c?"bg-black":"bg-white"])},null,2),s("span",{class:y(["relative group-hover:text-white text-xs",o.btnActive===c?"text-white":"text-black"])},b(n.name),3)],8,De)]))),256))]),s("div",null,[s("div",He,[(h(!0),f(w,null,S(o.scrnShots,(n,c)=>(h(),U(l,{class:"cursor-zoom-in image-grid max-h-20 sm:min-w-20 min-w-fit hover:opacity-75 p-1 border border-[#00000021] border-dashed shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]",src:n,onClick:u=>a.show(c)},null,8,["src","onClick"]))),256))])])])],64)}const Fe=N(Me,[["render",Ue]]),{work:L}=await q(()=>import("./work.7Roh4Zea.js"),__vite__mapDeps([]),import.meta.url),Xe={setup(){const{$viewerApi:e}=P();return{Viewer:e}},data(){return{workList:L,activeJob:L[0],psychxJob:L[1],projects:L[0].projects[0],btnActive:0,scrnShots:[],isMob:null}},methods:{switchProjects(e){this.projects=this.workList[0].projects[e]},jobClick(e){this.btnActive=e,this.$bus.$emit("psychx-job::click",e),this.scrnShots=this.psychxJob.projects[e].scrnShots},show(e){this.Viewer({options:{toolbar:!0,rotatable:!1,scalable:!1,title:!1,initialViewIndex:e},images:this.scrnShots})}},mounted(){this.activeJob=this.workList[0],this.scrnShots=this.psychxJob.projects[0].scrnShots,this.$bus.$on("icon-job::click",this.switchProjects),this.isMob=window?.matchMedia("(max-width: 480px)")?.matches,window.addEventListener("resize",()=>{this.isMob=window?.matchMedia("(max-width: 480px)")?.matches})}},Ge={id:"page-3-work",class:"w-[50%] h-full flex py-[10%]"},Ye={class:"self-center flex flex-col gap-y-2"},Ke={class:"avatar w-16 h-16"},Qe={class:"flex flex-col justify-center px-[5%]"},Ze={class:"item-start"},et={class:"flex justify-between items-center"},tt={class:"font-bold project-heading"},st={class:"px-3 py-1 text-[10px] font-bold text text-blue-800 uppercase bg-blue-200 rounded-full"},ot={class:"text-sm font-ct text-[#8b8b8b] py-2 project-heading"},it={class:"self-end"},rt={class:"mt-2 font-semibold text-gray-800 font-kalam underline decoration-2 decoration-pink-500 job-key-heading"},nt={class:"mt-2 text-xs text-gray-600 job-key-description"},at={id:"page-4-work",class:"w-[50%] h-full flex flex-col justify-between pl-[10%] py-[5%] pr-[5%]"},lt={class:"text-sm font-kalam px-2"},ct=["onClick"],dt=s("span",{class:"absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"},null,-1),ut={class:"grid grid-cols-3 gap-3 p-8 w-full place-items-center image-grid-cont"};function pt(e,t,r,i,o,a){const l=T;return h(),f(w,null,[s("div",Ge,[s("div",Ye,[(h(!0),f(w,null,S(o.projects.techUsed,n=>(h(),f("div",Ke,[s("a",null,[g(l,{src:`/images/tech/${n.url}`,alt:"Skytsunami"},null,8,["src"])])]))),256))]),s("div",Qe,[s("div",Ze,[s("div",et,[s("p",tt,b(o.projects.name),1),s("span",st,b(o.projects.start+" to "+o.projects.end),1)]),s("p",ot,b(o.projects.details),1)]),s("div",it,[(h(!0),f(w,null,S(o.projects.key,n=>(h(),f("div",null,[s("h1",rt,b(n.head),1),s("p",nt,b(n.text),1)]))),256))])])]),s("div",at,[s("div",null,[s("p",{class:y(["font-bold bg-[mediumspringgreen] px-2 rounded-sm job-name",o.isMob?"text-[14px]":""])},b(o.psychxJob.name),3),s("p",lt,b(o.psychxJob.profile),1)]),s("div",null,[(h(!0),f(w,null,S(o.psychxJob.projects,(n,c)=>(h(),f("div",null,[s("a",{onClick:u=>a.jobClick(c),class:"job-projects relative inline-block px-2 py-1 font-medium group w-auto"},[dt,s("span",{class:y(["absolute inset-0 w-full h-full border-2 border-black group-hover:bg-black",o.btnActive===c?"bg-black":"bg-white"])},null,2),s("span",{class:y(["relative group-hover:text-white text-xs",o.btnActive===c?"text-white":"text-black"])},b(n.name),3)],8,ct)]))),256))]),s("div",null,[s("div",ut,[(h(!0),f(w,null,S(o.scrnShots,(n,c)=>(h(),U(l,{class:"cursor-zoom-in image-grid max-h-20 sm:min-w-20 min-w-0 hover:opacity-75 p-1 border border-[#00000021] border-dashed shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]",src:n,onClick:u=>a.show(c)},null,8,["src","onClick"]))),256))])])])],64)}const _t=N(Xe,[["render",pt]]),{work:J}=await q(()=>import("./work.7Roh4Zea.js"),__vite__mapDeps([]),import.meta.url);console.log(J);const ht={data(){return{workList:J,activeJob:J[1],projects:J[1].projects[1]}},methods:{switchProjects(e){this.projects=this.workList[1].projects[e]}},mounted(){this.activeJob=this.workList[1],this.$bus.$on("psychx-job::click",this.switchProjects)}},ft={id:"page-5-work",class:"w-[50%] h-full flex py-[10%]"},gt={class:"self-center flex flex-col gap-y-2"},mt={class:"avatar w-16 h-16"},xt={class:"flex flex-col justify-center px-[5%]"},bt={class:"item-start"},vt={class:"flex justify-between items-center"},wt={class:"font-bold project-heading"},yt={class:"px-3 py-1 text-[10px] font-bold text text-blue-800 uppercase bg-blue-200 rounded-full"},kt={class:"text-sm font-ct text-[#8b8b8b] py-2 project-heading"},jt={class:"self-end"},$t={class:"mt-2 font-semibold text-gray-800 font-kalam underline decoration-2 decoration-pink-500 job-key-heading"},St={class:"mt-2 text-xs text-gray-600 job-key-description"},At={id:"page-6-contacts",class:"w-[50%] flex justify-center h-full flex-col items-center gap-y-5"},It=s("div",{class:"text-left leading-[2.5rem] pl-2 flex justify-between items-center font-rubik text-3xl sm:text-5xl",id:"work-head-contacts"}," CONTACTS ",-1),Et=s("p",{class:"text-base text-pink-500 font-kalam"},"Let's build something together.",-1);function Tt(e,t,r,i,o,a){const l=T;return h(),f(w,null,[s("div",ft,[s("div",gt,[(h(!0),f(w,null,S(o.projects.techUsed,n=>(h(),f("div",mt,[s("a",null,[g(l,{src:`/images/tech/${n.url}`,alt:"Skytsunami"},null,8,["src"])])]))),256))]),s("div",xt,[s("div",bt,[s("div",vt,[s("p",wt,b(o.projects.name),1),s("span",yt,b(o.projects.start+" to "+o.projects.end),1)]),s("p",kt,b(o.projects.details),1)]),s("div",jt,[(h(!0),f(w,null,S(o.projects.key,n=>(h(),f("div",null,[s("h1",$t,b(n.head),1),s("p",St,b(n.text),1)]))),256))])])]),s("div",At,[g(l,{src:"/icons/raising-hands.svg",class:"w-16 h-16"}),It,Et])],64)}const Lt=N(ht,[["render",Tt]]),Mt={class:"w-full"},zt={class:"divide-x bg-white p-5 flex justify-between gap-8 items-center relative"},Jt={class:"p-3"},Pt={class:"w-full h-[50px]"},Nt=s("div",null,[s("span",{class:"font-rubik text-3xl subpixel-antialiased italic"},"Email"),s("div",null,[s("a",{href:"mailto:toxyanil@gmail.com",class:"text-sm font-bold underline decoration-1 decoration-indigo-500 anim"}," toxyanil@gmail.com ")]),s("div",null,[s("a",{href:"mailto:anil@psychx86.com",class:"text-sm font-bold underline decoration-1 decoration-sky-500 anim"}," anil@psychx86.com ")])],-1),Ot={class:"p-3"},qt={class:"w-full h-[50px]"},Ct=s("div",null,[s("span",{class:"font-rubik text-3xl subpixel-antialiased italic"},"Phone"),s("div",null,[s("a",{href:"tel:+919438392399",class:"text-sm font-bold underline decoration-2 decoration-pink-500 anim"}," +919438392399 ")])],-1),Wt={class:"p-3"},Bt={class:"w-full h-[50px]"},Vt=s("div",null,[s("span",{class:"font-rubik text-3xl subpixel-antialiased italic"},"linkedin"),s("div",null,[s("a",{a:"",href:"https://in.linkedin.com/in/anildas-toxy",target:"_blank",class:"text-sm font-bold underline decoration-2 decoration-blue-500 anim hover:!cursor-alias"},"@anildas-toxy")])],-1),Dt={class:"p-3"},Rt={class:"w-full h-[50px]"},Ht=s("div",null,[s("span",{class:"font-rubik text-3xl subpixel-antialiased italic"},"Stackoverflow"),s("div",null,[s("a",{a:"",href:"https://stackoverflow.com/users/11492378/anil",target:"_blank",class:"text-sm font-bold underline decoration-2 decoration-yellow-500 anim hover:!cursor-alias"},"@anil")])],-1),Ut={__name:"contacts",setup(e){let t=$(null);return E(()=>{t.value=window?.matchMedia("(max-width: 480px)")?.matches,window.addEventListener("resize",()=>{t.value=window?.matchMedia("(max-width: 480px)")?.matches})}),(r,i)=>{const o=T;return h(),f("div",{class:y(["flex justify-center items-center gap-5 flex-col w-full",F(t)?"p-[15%]":""])},[s("div",Mt,[s("div",zt,[s("div",Jt,[s("div",Pt,[g(o,{src:"/icons/mail.svg",class:"w-[50px] h-[50px]"})]),Nt]),s("div",Ot,[s("div",qt,[g(o,{src:"/icons/phone.svg",class:"w-[50px] h-[50px]"})]),Ct]),s("div",Wt,[s("div",Bt,[g(o,{src:"/icons/linkedin-line.svg",class:"w-[50px] h-[50px]"})]),Vt]),s("div",Dt,[s("div",Rt,[g(o,{src:"/icons/stackoverflow.svg",class:"w-[50px] h-[50px]"})]),Ht])])])],2)}}},Ft=Ut,Xt=e=>(ie("data-v-d6880109"),e=e(),re(),e),Gt={class:"loader-container",id:"loader-container"},Yt=Xt(()=>s("div",{class:"loader-line"},null,-1)),Kt=[Yt],Qt={__name:"loader",setup(e){return E(()=>{document.body.style.overflow="hidden",_.set(".loader-line",{scaleY:1.5}),_.set(".loader-line::after",{scaleX:1}),document.getElementById("loader-container");function t(){_.to(".loader-line",{duration:1,rotation:0,scaleY:1,ease:"expo.out"}),_.to(".loader-line::after",{duration:.3,scaleX:0,ease:"expo.out",onComplete:function(){_.to(".loader-container",{duration:1.2,scaleX:0,ease:"expo.out",onComplete:function(){document.querySelector(".loader-container").style.display="none",document.body.style.overflow="visible"}})}})}setTimeout(()=>{t(),document.body.style.overflow="visible"},1e3)}),(t,r)=>(h(),f("div",Gt,Kt))}},Zt=N(Qt,[["__scopeId","data-v-d6880109"]]),es={class:"fixed bottom-10 right-10"},ts={class:"flex flex-col gap-y-6 justify-center"},ss={class:"group"},os={class:"flex flex-col group-hover:skew-y-6 overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition bg-gray-100 border divide-x rounded-lg rtl:flex-row-reverse group-hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"},is={"data-href":"panel-1",class:"page-links justify-between flex items-center px-2 py-1 sm:text-[10px] text-[8px] font-medium text-gray-600 transition-colors duration-200 sm:px-3 sm:gap-x-3 gap-x-2 hover:bg-white"},rs={class:"group"},ns={class:"flex flex-col group-hover:skew-y-6 overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition bg-gray-100 border divide-x rounded-lg rtl:flex-row-reverse group-hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"},as={"data-href":"panel-2",class:"page-links justify-between flex items-center px-2 py-1 sm:text-[10px] text-[8px] font-medium text-gray-600 transition-colors duration-200 sm:px-3 sm:gap-x-3 gap-x-2 hover:bg-white"},ls={class:"group"},cs={class:"flex flex-col group-hover:skew-y-6 overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition bg-gray-100 border divide-x rounded-lg rtl:flex-row-reverse group-hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"},ds={"data-href":"linkedin",class:"page-links justify-between hover:!cursor-alias flex items-center px-2 py-1 sm:text-[10px] text-[8px] font-medium text-gray-600 transition-colors duration-200 sm:px-3 sm:gap-x-3 gap-x-2 hover:bg-white"},us={class:"group"},ps={class:"flex flex-col group-hover:skew-y-6 overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition bg-gray-100 border divide-x rounded-lg rtl:flex-row-reverse group-hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"},_s={"data-href":"pdf",class:"page-links flex justify-between hover:!cursor-alias items-center px-2 py-1 sm:text-[10px] text-[8px] font-medium text-gray-600 transition-colors duration-200 sm:px-3 sm:gap-x-3 gap-x-2 hover:bg-white"},hs=ne('<div class="fixed bottom-10 left-10 w-[18%]"><div><svg viewBox="0 0 500 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="5" r="5" fill="#000"></circle><circle cx="150" cy="5" r="5" fill="#000"></circle><circle cx="250" cy="5" r="5" fill="#000"></circle><circle cx="350" cy="5" r="5" fill="#000"></circle><circle cx="450" cy="5" r="5" fill="#000"></circle><rect class="mask" x="3" y="4" width="500" height="2" fill="#000"></rect></svg></div></div>',1),fs={__name:"floatmenu",setup(e){return E(()=>{document.querySelectorAll(".page-links").forEach(r=>{r.addEventListener("click",i=>{const o=r.getAttribute("data-href");if(o==="linkedin")window.open("https://in.linkedin.com/in/anildas-toxy","_blank");else if(o==="pdf")window.open("/Anil_Das_Resume_31-10-2023.pdf","_blank");else{const a=document.getElementById(o)?.offsetLeft;_.to("html",{scrollTo:a,duration:1.5}),console.log(o)}})})}),(t,r)=>{const i=T;return h(),f(w,null,[s("div",es,[s("div",ts,[s("div",ss,[s("div",os,[s("button",is,[g(i,{src:"/icons/briefcase.svg",class:"w-5 h-5 sm:w-5 sm:h-5"})])])]),s("div",rs,[s("div",ns,[s("button",as,[g(i,{src:"/icons/phonebook.svg",class:"w-5 h-5 sm:w-5 sm:h-5"})])])]),s("div",ls,[s("div",cs,[s("button",ds,[g(i,{src:"/icons/linkedin.svg",class:"w-5 h-5 sm:w-5 sm:h-5"})])])]),s("div",us,[s("div",ps,[s("button",_s,[g(i,{src:"/icons/file-pdf.svg",class:"w-5 h-5 sm:w-5 sm:h-5"})])])])])]),hs],64)}}},gs=fs,ms={class:"wrapper"},xs={class:"sec1 pin relative",id:"panel-0"},bs={class:"sec2 pin relative",id:"panel-1"},vs={class:"sec3 pin relative",id:"panel-2"},ws={class:"sec4 pin relative",id:"panel-3"},ys={class:"sec5 pin",id:"panel-2"},$s={__name:"index",setup(e){$(null);let t=$(null);return E(()=>{t.value=window?.matchMedia("(max-width: 480px)")?.matches,window.addEventListener("resize",()=>{t.value=window?.matchMedia("(max-width: 480px)")?.matches}),document.querySelector(".comp-container");const r=_.utils.toArray(".comp-container section");_.utils.toArray(".anim");const i=document.querySelector(".mask"),o=t?"+=8000":"+=5000",a=t?r.length-.8:r.length-1;console.log(o);let l=_.to(r,{xPercent:-100*a,ease:"none",scrollTrigger:{trigger:".comp-container",pin:!0,scrub:!0,end:o}});_.to(i,{width:"100%",background:"#000",scrollTrigger:{trigger:".wrapper",start:"top left",scrub:1}}),r.forEach(n=>{if(n.id==="panel-1"){let u=n.querySelectorAll("#work-head-1");_.from(u,{y:-490,opacity:0,duration:2,ease:"circ.out",stagger:.1,scrollTrigger:{trigger:n,containerAnimation:l,start:"left right",end:"10% center",scrub:!0}});let m=n.querySelectorAll(".work-box");_.from(m,{y:490,opacity:0,duration:2.5,ease:"sine.out",stagger:.1,scrollTrigger:{trigger:n,containerAnimation:l,start:"left right",end:"10% center",scrub:!0}})}if(n.id==="panel-1"||n.id==="panel-2"){let u=n.querySelectorAll(".job-name");_.from(u,{y:-490,opacity:0,duration:2.5,ease:"sine.out",stagger:.1,scrollTrigger:{trigger:n,containerAnimation:l,start:"center right",end:"100% 70% ",scrub:!0}});let m=n.querySelectorAll(".job-projects");_.from(m,{y:200,opacity:0,duration:2.5,scale:.7,ease:"sine.out",stagger:.1,delay:1,scrollTrigger:{trigger:n,containerAnimation:l,start:"center right",end:"100% 70% ",scrub:!0}},"+=0.75");let j=n.querySelectorAll(".image-grid");_.from(j,{y:200,opacity:0,duration:2.5,ease:"elastic.in",stagger:.1,delay:1,scrollTrigger:{trigger:n,containerAnimation:l,start:"center right",end:"100% 70% ",scrub:!0}},"+=1.5")}if(n.id==="panel-2"||n.id==="panel-3"){let u=n.querySelectorAll(".project-heading");_.from(u,{skewX:2,opacity:0,duration:2.5,ease:"bounce.in",stagger:1,scrollTrigger:{trigger:n,containerAnimation:l,start:"left 80%",end:"+=100",scrub:!0}},"+=0.5");let m=n.querySelectorAll(".job-key-description");_.from(m,{y:30,opacity:0,duration:2.5,ease:"expo.in",stagger:1,scrollTrigger:{trigger:n,containerAnimation:l,start:"left 80%",end:"+=300",scrub:!0}},"+=0.5");let j=n.querySelectorAll(".job-key-heading");_.from(j,{x:20,skewX:2,opacity:0,duration:2.5,ease:"sine.in",stagger:1,scrollTrigger:{trigger:n,containerAnimation:l,start:"left 80%",end:"+=300",scrub:!0}},"+=0.5")}if(n.id==="panel-3"){let u=n.querySelectorAll("#work-head-contacts");_.from(u,{x:t?100:490,scale:t?3:7,opacity:0,duration:2.5,ease:"sine.out",stagger:.1,scrollTrigger:{trigger:n,containerAnimation:l,start:"center 80%",end:"+=500",scrub:!0}})}let c=n.querySelectorAll(".anim");c.length&&_.from(c,{y:-230,opacity:0,duration:2,ease:"elastic",stagger:.1,scrollTrigger:{trigger:n,containerAnimation:l,start:"left center",scrub:!0}})})}),(r,i)=>{const o=Le,a=Fe,l=_t,n=Lt,c=Ft,u=Zt,m=gs;return h(),f(w,null,[s("div",ms,[s("div",{class:y([F(t)?"-mb":"","comp-container scrollx"])},[s("section",xs,[g(o)]),s("section",bs,[g(a)]),s("section",vs,[g(l)]),s("section",ws,[g(n)]),s("section",ys,[g(c)])],2)]),g(z,{name:"fade",mode:"out-in",duration:500},{default:M(()=>[g(u)]),_:1}),g(m)],64)}}};export{$s as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
