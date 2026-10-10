import{L as E,M as N,o as x,h as m,j as r,t as u,O as n,x as L,e as y,v as F,F as R,f as k,z as P,a as v,C,d as l,A as M,W as V}from"./vue-CkqhcCuX.js";import{i as O,l as S,s as T}from"./primeui-DU_zVIBJ.js";import{W as B}from"./WebRtcPlayer-C8e3FWx8.js";import{V as j,y as D,cV as W,f as q,cU as z,_ as G}from"./index-B3kC9Ijv.js";import{r as H}from"./webrtc.service-DIUJUjgB.js";import"./vendor-BLJ6Dn9P.js";import"./logger.service-lm_aVkMi.js";const J=`
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
`,K=`
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
`;function Q(f){const e=f;return(Array.isArray(e?.areas)?e.areas:[]).filter(s=>!!s&&typeof s=="object").map(s=>{const i=Array.isArray(s.passages)?s.passages:[];return{id:String(s.id??""),name:String(s.name??""),passages:i.filter(o=>!!o&&typeof o=="object").map(o=>({id:String(o.id??""),name:String(o.name??"")}))}})}const U={async getFastIntercom(f){const p=(await D(J,{id:f})).fastIntercom;if(!p)return{success:!1,errorMessages:["Nao foi possivel carregar o interfone."],payload:null};const s=p.payload;return{success:p.success,errorMessages:(p.errorMessages??[]).map(i=>String(i)),payload:s?{areas:Q(s.passages),webRTCLink:String(s.webRTCLink??"").trim()}:null}},async openFastIntercomPassage(f,e){const s=(await j(K,{fastIntercomId:f,passageId:e},{auth:!1})).openFastIntercomPassage;if(!s)throw new Error("Resposta invalida do servidor.");return{success:s.success,errorMessages:(s.errorMessages??[]).map(i=>String(i))}}},X={class:"fast-link"},Y={class:"fast-link__card haila-card"},Z={class:"fast-link__header"},ee={class:"haila-muted"},ae={key:0,class:"fast-link__loading"},se={class:"haila-muted"},te={key:0,class:"fast-link__player"},ne={key:1,class:"fast-link__camera haila-muted"},re={class:"fast-link__passages"},le={class:"fast-link__passage-info"},oe={key:0,class:"haila-muted"},ie=E({__name:"FastIntercomView",setup(f){const{t:e}=N(),p=V(),s=W(q.fastIntercomWebOrigin),i=C(()=>z(String(p.params.id??""))),o=v(!0),_=v(null),d=v(null),I=v(null),g=v(null),b=v(null),h=C(()=>H(_.value?.payload?.webRTCLink)),w=C(()=>(_.value?.payload?.areas??[]).flatMap(t=>t.passages.map(a=>({passage:a,areaName:t.name}))));async function $(){if(o.value=!0,d.value=null,!s){d.value=e("fastLinks.intercomDisabled"),o.value=!1;return}if(!i.value){d.value=e("fastLinks.invalidLink"),o.value=!1;return}try{const t=await U.getFastIntercom(i.value);if(_.value=t,!t.success||!t.payload){d.value=t.errorMessages.join(`
`)||e("fastLinks.intercomUnavailable");return}w.value.length===0&&(d.value=e("fastLinks.noPassages"))}catch(t){d.value=t instanceof Error?t.message:e("errors.generic")}finally{o.value=!1}}async function A(t){if(i.value){I.value=t.passage.id,g.value=null;try{const a=await U.openFastIntercomPassage(i.value,t.passage.id);g.value=a.success?{severity:"success",text:e("fastLinks.passageOpened",{name:t.passage.name})}:{severity:"error",text:a.errorMessages.join(`
`)||e("fastLinks.passageFailed",{name:t.passage.name})}}catch(a){g.value={severity:"error",text:a instanceof Error?a.message:e("errors.generic")}}finally{I.value=null}}}return x($),(t,a)=>(l(),m("div",X,[r("div",Y,[r("header",Z,[a[3]||(a[3]=r("i",{class:"pi pi-phone fast-link__icon"},null,-1)),r("div",null,[r("h1",null,u(n(e)("fastLinks.fastIntercomTitle")),1),r("p",ee,u(n(e)("fastLinks.fastIntercomSubtitle")),1)])]),o.value?(l(),m("div",ae,[L(n(O),{"stroke-width":"4","animation-duration":"1s"}),r("span",se,u(n(e)("common.loading")),1)])):d.value?(l(),y(n(S),{key:1,severity:"error",closable:!1},{default:F(()=>[M(u(d.value),1)]),_:1})):(l(),m(R,{key:2},[h.value?(l(),m("div",te,[(l(),y(B,{key:h.value,"ws-url":h.value,mode:"intercom",title:n(e)("fastLinks.fastIntercomTitle"),onError:a[0]||(a[0]=c=>b.value=c),onConnected:a[1]||(a[1]=c=>b.value=null)},null,8,["ws-url","title"])),b.value?(l(),y(n(S),{key:0,severity:"warn",closable:!1},{default:F(()=>[M(u(n(e)("fastLinks.cameraUnavailable")),1)]),_:1})):k("",!0)])):_.value?.payload?.webRTCLink?(l(),m("div",ne,[a[4]||(a[4]=r("i",{class:"pi pi-video"},null,-1)),r("span",null,u(n(e)("fastLinks.cameraAvailable")),1)])):k("",!0),g.value?(l(),y(n(S),{key:2,severity:g.value.severity,closable:!1},{default:F(()=>[M(u(g.value.text),1)]),_:1},8,["severity"])):k("",!0),r("section",re,[r("h2",null,u(n(e)("fastLinks.passages")),1),(l(!0),m(R,null,P(w.value,c=>(l(),m("div",{key:c.passage.id,class:"fast-link__passage"},[r("div",le,[r("strong",null,u(c.passage.name),1),c.areaName?(l(),m("span",oe,u(c.areaName),1)):k("",!0)]),L(n(T),{label:n(e)("fastLinks.open"),icon:"pi pi-lock-open",loading:I.value===c.passage.id,onClick:ce=>A(c)},null,8,["label","loading","onClick"])]))),128))])],64)),L(n(T),{label:n(e)("fastLinks.goToLogin"),icon:"pi pi-sign-in",text:"",class:"fast-link__login",onClick:a[2]||(a[2]=c=>t.$router.push({name:"login-email"}))},null,8,["label"])])]))}}),_e=G(ie,[["__scopeId","data-v-6e50600a"]]);export{_e as default};
