import{M as N,N as U,o as P,j as m,k as r,t as u,P as n,y as L,e as y,x as F,F as R,f as k,A as x,a as v,D as C,d as l,B as M,Y as B}from"./vue-CAXvV0O3.js";import{c as D,m as S,s as T}from"./primeui-C8aJvWu3.js";import{W as O}from"./WebRtcPlayer-CUiuAUg6.js";import{$ as V,E as j,dC as W,f as q,dA as z,_ as G}from"./index-DMXT_rP5.js";import{r as Y}from"./webrtc.service-DbxJOPFo.js";import"./vendor-BwpWOswh.js";import"./logger.service-BiCmLuDw.js";const H=`
  query FastIntercom($id: UUID!) {
    __typename
    fastIntercom(id: $id) {
      __typename
      success
      errorMessages
      payload {
        __typename
        passages {
          __typename
          areas {
            __typename
            id
            name
            passages {
              __typename
              id
              name
            }
          }
        }
        webRTCLink
      }
    }
  }
`,J=`
  mutation OpenFastIntercomPassage($fastIntercomId: UUID!, $passageId: UUID!) {
    __typename
    openFastIntercomPassage(
      input: { fastIntercomId: $fastIntercomId, passageId: $passageId }
    ) {
      __typename
      success
      errorMessages
    }
  }
`;function K(f){const e=f;return(Array.isArray(e?.areas)?e.areas:[]).filter(s=>!!s&&typeof s=="object").map(s=>{const i=Array.isArray(s.passages)?s.passages:[];return{id:String(s.id??""),name:String(s.name??""),passages:i.filter(o=>!!o&&typeof o=="object").map(o=>({id:String(o.id??""),name:String(o.name??"")}))}})}const $={async getFastIntercom(f){const d=(await j(H,{id:f})).fastIntercom;if(!d)return{success:!1,errorMessages:["Nao foi possivel carregar o interfone."],payload:null};const s=d.payload;return{success:d.success,errorMessages:(d.errorMessages??[]).map(i=>String(i)),payload:s?{areas:K(s.passages),webRTCLink:String(s.webRTCLink??"").trim()}:null}},async openFastIntercomPassage(f,e){const s=(await V(J,{fastIntercomId:f,passageId:e},{auth:!1})).openFastIntercomPassage;if(!s)throw new Error("Resposta invalida do servidor.");return{success:s.success,errorMessages:(s.errorMessages??[]).map(i=>String(i))}}},Q={class:"fast-link"},X={class:"fast-link__card haila-card"},Z={class:"fast-link__header"},ee={class:"haila-muted"},ae={key:0,class:"fast-link__loading"},se={class:"haila-muted"},te={key:0,class:"fast-link__player"},ne={key:1,class:"fast-link__camera haila-muted"},re={class:"fast-link__passages"},le={class:"fast-link__passage-info"},oe={key:0,class:"haila-muted"},ie=N({__name:"FastIntercomView",setup(f){const{t:e}=U(),d=B(),s=W(q.fastIntercomWebOrigin),i=C(()=>z(String(d.params.id??""))),o=v(!0),_=v(null),p=v(null),I=v(null),g=v(null),b=v(null),h=C(()=>Y(_.value?.payload?.webRTCLink)),w=C(()=>(_.value?.payload?.areas??[]).flatMap(t=>t.passages.map(a=>({passage:a,areaName:t.name}))));async function A(){if(o.value=!0,p.value=null,!s){p.value=e("fastLinks.intercomDisabled"),o.value=!1;return}if(!i.value){p.value=e("fastLinks.invalidLink"),o.value=!1;return}try{const t=await $.getFastIntercom(i.value);if(_.value=t,!t.success||!t.payload){p.value=t.errorMessages.join(`
`)||e("fastLinks.intercomUnavailable");return}w.value.length===0&&(p.value=e("fastLinks.noPassages"))}catch(t){p.value=t instanceof Error?t.message:e("errors.generic")}finally{o.value=!1}}async function E(t){if(i.value){I.value=t.passage.id,g.value=null;try{const a=await $.openFastIntercomPassage(i.value,t.passage.id);g.value=a.success?{severity:"success",text:e("fastLinks.passageOpened",{name:t.passage.name})}:{severity:"error",text:a.errorMessages.join(`
`)||e("fastLinks.passageFailed",{name:t.passage.name})}}catch(a){g.value={severity:"error",text:a instanceof Error?a.message:e("errors.generic")}}finally{I.value=null}}}return P(A),(t,a)=>(l(),m("div",Q,[r("div",X,[r("header",Z,[a[3]||(a[3]=r("i",{class:"pi pi-phone fast-link__icon"},null,-1)),r("div",null,[r("h1",null,u(n(e)("fastLinks.fastIntercomTitle")),1),r("p",ee,u(n(e)("fastLinks.fastIntercomSubtitle")),1)])]),o.value?(l(),m("div",ae,[L(n(D),{"stroke-width":"4","animation-duration":"1s"}),r("span",se,u(n(e)("common.loading")),1)])):p.value?(l(),y(n(S),{key:1,severity:"error",closable:!1},{default:F(()=>[M(u(p.value),1)]),_:1})):(l(),m(R,{key:2},[h.value?(l(),m("div",te,[(l(),y(O,{key:h.value,"ws-url":h.value,mode:"intercom",title:n(e)("fastLinks.fastIntercomTitle"),onError:a[0]||(a[0]=c=>b.value=c),onConnected:a[1]||(a[1]=c=>b.value=null)},null,8,["ws-url","title"])),b.value?(l(),y(n(S),{key:0,severity:"warn",closable:!1},{default:F(()=>[M(u(n(e)("fastLinks.cameraUnavailable")),1)]),_:1})):k("",!0)])):_.value?.payload?.webRTCLink?(l(),m("div",ne,[a[4]||(a[4]=r("i",{class:"pi pi-video"},null,-1)),r("span",null,u(n(e)("fastLinks.cameraAvailable")),1)])):k("",!0),g.value?(l(),y(n(S),{key:2,severity:g.value.severity,closable:!1},{default:F(()=>[M(u(g.value.text),1)]),_:1},8,["severity"])):k("",!0),r("section",re,[r("h2",null,u(n(e)("fastLinks.passages")),1),(l(!0),m(R,null,x(w.value,c=>(l(),m("div",{key:c.passage.id,class:"fast-link__passage"},[r("div",le,[r("strong",null,u(c.passage.name),1),c.areaName?(l(),m("span",oe,u(c.areaName),1)):k("",!0)]),L(n(T),{label:n(e)("fastLinks.open"),icon:"pi pi-lock-open",loading:I.value===c.passage.id,onClick:ce=>E(c)},null,8,["label","loading","onClick"])]))),128))])],64)),L(n(T),{label:n(e)("fastLinks.goToLogin"),icon:"pi pi-sign-in",text:"",class:"fast-link__login",onClick:a[2]||(a[2]=c=>t.$router.push({name:"login-email"}))},null,8,["label"])])]))}}),_e=G(ie,[["__scopeId","data-v-6e50600a"]]);export{_e as default};
