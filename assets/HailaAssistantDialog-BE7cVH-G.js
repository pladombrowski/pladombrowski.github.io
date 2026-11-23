import{O as X,a as v,D as w,M as se,V as ae,w as q,e as R,x as U,N as o,d as k,j as S,k as y,t as $,y as C,f as B,F as te,A as re,C as ne,B as oe,K as ie,H as le,n as K}from"./vue-X2zTFtGs.js";import{A as ce}from"./features-BuooHanA.js";import{z as E,a as Z,u as de,k as ue,T as L,E as J,A as pe,U as fe}from"./index-nkV2n6LU.js";import{b as me}from"./appointment-v2.service-DMBP194v.js";import{a as Q}from"./authorization.service-D61U21Es.js";import{u as ye}from"./cameras.store-CDeuwVd5.js";import{u as ve}from"./dashboard.store--K4jDC8-.js";import{u as ge}from"./DoorOpenDialog-Bcwbc6nH.js";import{a as ke}from"./authorization-areas-DeUnidic.js";import{c as he}from"./camera-dashboard-scope-DfxyET93.js";import{e as Ie,f as F,b as we,n as _e,x as be}from"./primeui-Kq0eae_H.js";import{_ as Se}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Ae=`
  query GetData($selectedworkspace: uuid!, $senderworkspace: uuid!, $senderId: UUID!) {
    __typename
    getavailableareasbyworkspaceandsenderjson(
      args: { selectedworkspace: $selectedworkspace, senderworkspace: $senderworkspace }
    ) {
      __typename
      json
    }
    getavailablecategoriesbyworkspacesenderjson(
      args: { selectedworkspace: $selectedworkspace, senderworkspace: $senderworkspace }
    ) {
      __typename
      json
    }
    workspaceById(id: $senderId) {
      __typename
      id
      legalName
      lastName
      type
      firstName
      brandingName
      logoPath
      coverPhoto {
        __typename
        id
        url
      }
    }
  }
`,De=`
  query GetDurations($workspaceId: uuid!, $categoryId: uuid, $areaId: uuid) {
    __typename
    getspecificdurationsbyworkspacesenderjson(
      args: {
        selectedworkspace: $workspaceId
        selectedcategoryid: $categoryId
        selectedareaid: $areaId
      }
    ) {
      __typename
      json
    }
  }
`,Te=`
  query GetDayStatus($input: getspecificdurationstatusbyperiod_args!) {
    __typename
    getspecificdurationstatusbyperiod(args: $input) {
      __typename
      json
    }
  }
`,We=`
  query GetTimeSlots($input: getavailabletimeslotsbydayjson_args!) {
    __typename
    getavailabletimeslotsbydayjson(args: $input) {
      __typename
      json
    }
  }
`,$e=`
  query AreaReservationByPeriod($areaId: UUID!, $startDate: DateTime!, $endDate: DateTime!) {
    __typename
    areaReservationByPeriod(areaId: $areaId, startDate: $startDate, endDate: $endDate) {
      __typename
      id
    }
  }
`;function O(e){if(typeof e!="string")return e;const s=e.trim();if(!s.startsWith("[")&&!s.startsWith("{"))return null;try{return JSON.parse(s)}catch{return null}}function j(e){if(!Array.isArray(e)||e.length===0)return null;const s=e[0];return!s||typeof s!="object"?null:O(s.json)}function A(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:null}function N(e){return Array.isArray(e)?e.map(s=>A(s)??A(O(s))).filter(s=>!!s):[]}function Be(e){return N(j(e)).map(s=>({id:String(s.id??""),name:String(s.name??""),areaHierarchyText:String(s.areaHierarchyText??"")}))}function Ee(e){return N(j(e)).map(s=>({id:String(s.id??""),name:String(s.name??""),description:String(s.description??"")}))}function xe(e){return N(j(e)).map(s=>({id:String(s.id??""),duration:String(s.duration??"")}))}function Ce(e){return N(j(e)).map(s=>({day:String(s.day??""),status:String(s.status??"")}))}function Pe(e){if(!Array.isArray(e))return[];const s=[];for(const r of e){const a=A(r);if(!a)continue;const t=A(a.json)??A(O(a.json));t&&s.push({start:String(t.start??""),end:String(t.end??""),available:t.available===!0,id:t.id==null?null:String(t.id),name:t.name==null?null:String(t.name),areaHierarchyText:t.areaHierarchyText==null?null:String(t.areaHierarchyText)})}return s}function je(e){if(!Array.isArray(e)||e.length===0)return null;const s=A(e[0]);if(!s)return null;const r=A(s.coverPhoto);return{id:String(s.id??""),legalName:String(s.legalName??""),brandingName:String(s.brandingName??""),logoPath:s.logoPath==null?null:String(s.logoPath),coverPhoto:r?{id:String(r.id??""),url:String(r.url??"")}:null}}function Ne(e){return{areas:Be(e.getavailableareasbyworkspaceandsenderjson),categories:Ee(e.getavailablecategoriesbyworkspacesenderjson),workspace:je(e.workspaceById)}}const He={async getAvailableAreasAndCategories(e){const s=await E(Ae,{senderworkspace:e.selectedWorkspaceId,selectedworkspace:e.sessionWorkspaceId,senderId:e.selectedWorkspaceId});return Ne(s)},async getSpecificDurations(e){const s=await E(De,{workspaceId:e.workspaceId,categoryId:e.categoryId??null,areaId:e.areaId??null});return xe(s.getspecificdurationsbyworkspacesenderjson)},async getDayStatusByPeriod(e){const s=await E(Te,{input:{selectedareaid:e.selectedAreaId??null,selectedcategoryid:e.selectedCategoryId??null,selectedstartdate:e.selectedStartDate,selectedenddate:e.selectedEndDate,selectedspecificdurationid:e.selectedSpecificDurationId}});return Ce(s.getspecificdurationstatusbyperiod)},async getAvailableTimeSlotsByDay(e){const s={selectedworkspace:e.sessionWorkspaceId,selecteddate:e.selectedDate,selectedspecificdurationid:e.selectedSpecificDurationId};e.selectedAreaId&&(s.selectedareaid=e.selectedAreaId),e.selectedCategoryId&&(s.selectedcategoryid=e.selectedCategoryId);const r=await E(We,{input:s});return Pe(r.getavailabletimeslotsbydayjson)},async checkAreaReservationByPeriod(e){const r=(await E($e,{areaId:e.areaId,startDate:e.startDate,endDate:e.endDate})).areaReservationByPeriod;return Array.isArray(r)?r.length===0:!0}};function Re(e){return!!(e&&e.areas.length>0)}function Ue(e){return!!(e&&e.categories.length>0)}async function Fe(e){const s=e.selectedWorkspaceId?.trim(),r=e.sessionWorkspaceId?.trim();if(!s||!r)return!1;try{if(ce)return(await me.appointmentAreas({selectedWorkspaceId:s,sessionWorkspaceId:r})).areas.length>0;const a=await He.getAvailableAreasAndCategories({selectedWorkspaceId:s,sessionWorkspaceId:r});return Re(a)||Ue(a)}catch{return!1}}const vs=X("person-dashboard-warm",()=>{const e=v(!1),s=v(!1),r=v([]),a=v([]),t=v(null);let l=0,n=null,f=null;function b(){l+=1,e.value=!1,s.value=!1,r.value=[],a.value=[],t.value=null,n=null,f=null}async function D(g){const h=Z(),T=de(),_=ve(),W=ye(),u=ge();if(h.sessionIsLegalPerson)return;const d=h.selectedWorkspaceId?.trim()||null,m=h.sessionWorkspaceId?.trim()||null;if(!d||!m)return;const I=`${m}:${d}`;if(!g?.force&&t.value===I){await u.warm(d,_.accesses);return}if(n&&f===I&&!g?.force)return n;const p=l,i=(async()=>{const c=h.primaryWorkspace?.id?.trim()||m,H=he({sessionWorkspaceId:m,selectedWorkspaceId:d}),[M,V,z,G]=await Promise.allSettled([Q.getAreasByWorkspace({workspaceId:c,permission:"{create}",relatedAreaType:"authorization"}),Fe({selectedWorkspaceId:d,sessionWorkspaceId:m}),ue.getAvailableWorkspaceIds(c),Q.getAreasByWorkspace({workspaceId:m,permission:"{create}",relatedAreaType:"authorization"})]);H&&await W.load([H.senderWorkspaceId],H.recipientWorkspaceId,T.userId).catch(()=>{}),await u.warm(d,_.accesses,g).catch(()=>{}),p===l&&(e.value=M.status==="fulfilled"&&M.value.some(x=>x.workspaceId===d&&ke(x)),s.value=V.status==="fulfilled"&&V.value===!0,r.value=z.status==="fulfilled"?z.value:[],a.value=G.status==="fulfilled"?G.value.filter(x=>x.workspaceId===d):[],t.value=I)})();n=i,f=I;try{await i}finally{n===i&&(n=null,f=null)}}return{hasBookableAreas:e,hasAppointmentAreas:s,bookableWorkspaceIds:r,fastAuthAreas:a,warmedFor:t,clear:b,warm:D}}),Oe=v(0);function gs(){Oe.value+=1}const Me=6e4;function Ve(e){const s=e.workspaceId.trim(),r=e.message.trim();if(!s)throw new Error("Workspace não selecionado.");if(!r)throw new Error("Mensagem vazia.");const a={selectedWorkspaceId:s,history:[{role:"user",content:r}],surface:e.surface??"condo",locale:e.locale?.trim()||"pt-BR"},t=e.sessionId?.trim();t&&(a.session_id=t);const l=e.systemInstruction?.trim();return l&&(a.system_instruction=l),a}function ze(e){if(!e||typeof e!="object")throw new Error("Resposta inválida do assistente.");const s=e,r=typeof s.response=="string"?s.response:"",a=typeof s.session_id=="string"?s.session_id.trim():"";return{response:r,sessionId:a||null}}function Ge(e){if(!e||typeof e!="object")return null;const s=e.detail;return typeof s=="string"&&s.trim()?s.trim():null}async function Y(e,s,r){const a=new AbortController,t=setTimeout(()=>a.abort(),Me);try{return await fetch(e,{method:"POST",headers:fe(r),body:JSON.stringify(s),signal:a.signal})}catch(l){throw l?.name==="AbortError"?new Error("Tempo esgotado ao falar com o assistente."):new Error("Falha de conexão com o assistente.")}finally{clearTimeout(t)}}const qe={async send(e){const s=Ve(e);if(!await L())throw new Error("Sessão expirada. Faça login novamente.");let a=J();if(!a)throw new Error("Sessão expirada. Faça login novamente.");const t=pe.hailaBotChatSendUrl();let l=await Y(t,s,a);if(l.status===401){const f=await L({force:!0});if(a=J(),!f||!a)throw new Error("Não autorizado. Faça login novamente.");if(l=await Y(t,s,a),l.status===401)throw new Error("Não autorizado. Faça login novamente.")}let n=null;try{n=await l.json()}catch{n=null}if(l.status>=400){const f=Ge(n);throw new Error(f??`Erro ao falar com o assistente (${l.status}).`)}return ze(n)}};function P(){return{messages:[],sessionId:null,draft:""}}function ee(e,s){return`${e.trim()}::${s.trim()}`}const Ke=X("haila-bot",()=>{const e=v({}),s=v(""),r=v(!1),a=v(null);let t=0;const l=w(()=>e.value[s.value]??P()),n=w(()=>l.value.messages),f=w(()=>l.value.sessionId),b=w(()=>l.value.draft),D=w(()=>n.value.length>0||!!f.value||!!b.value);function g(u){s.value=u,e.value[u]||(e.value[u]=P()),a.value=null}function h(u){const d=s.value;d&&(e.value[d]||(e.value[d]=P()),e.value[d].draft=u)}async function T(u){const d=u.sessionWorkspaceId.trim(),m=u.selectedWorkspaceId.trim();if(!m){a.value="Selecione um workspace para usar o assistente.";return}const I=ee(d,m);g(I);const p=e.value[I],i=p.draft.trim();if(!(!i||r.value)){p.messages.push({id:`user-${++t}`,isUser:!0,text:i}),p.draft="",a.value=null,r.value=!0;try{const c=await qe.send({workspaceId:m,message:i,sessionId:p.sessionId,surface:"condo",locale:u.locale});c.response.trim()&&p.messages.push({id:`assistant-${++t}`,isUser:!1,text:c.response.trim()}),c.sessionId&&(p.sessionId=c.sessionId)}catch(c){a.value=c instanceof Error?c.message:"Falha ao falar com o assistente."}finally{r.value=!1}}}function _(){const u=s.value;u&&(e.value[u]=P(),a.value=null)}function W(){e.value={},s.value="",a.value=null}return{activeKey:s,sending:r,error:a,messages:n,sessionId:f,draft:b,hasConversation:D,activate:g,setDraft:h,sendUserMessage:T,reset:_,clear:W}}),Le={class:"haila-assistant__header"},Je={key:0,class:"haila-empty"},Qe={key:1,class:"haila-assistant__body"},Ye={key:0,class:"haila-empty"},Xe={key:0,class:"pi pi-sparkles haila-assistant__avatar"},Ze={class:"haila-assistant__bubble"},es={key:1,class:"haila-assistant__row"},ss={class:"haila-assistant__typing"},as={class:"haila-assistant__input"},ts=se({__name:"HailaAssistantDialog",props:{visible:{type:Boolean}},emits:["update:visible"],setup(e,{emit:s}){const r=e,a=s,{t,locale:l}=ae(),n=Ke(),f=Z(),b=v(null),D=v(null),g=w(()=>f.selectedWorkspaceId??""),h=w(()=>f.sessionWorkspaceId??""),T=w(()=>!!g.value),_=w({get:()=>r.visible,set:p=>a("update:visible",p)});function W(){T.value&&n.activate(ee(h.value,g.value))}async function u(){await K(),b.value?.$el?.focus?.()}async function d(){await K();const p=D.value;p&&(p.scrollTop=p.scrollHeight)}async function m(){await n.sendUserMessage({sessionWorkspaceId:h.value,selectedWorkspaceId:g.value,locale:l.value}),await d()}function I(){n.reset(),u()}return q(()=>r.visible,p=>{p&&(W(),u(),d())}),q(()=>n.messages.length,()=>{d()}),(p,i)=>(k(),R(o(Ie),{visible:_.value,"onUpdate:visible":i[2]||(i[2]=c=>_.value=c),modal:"",style:{width:"480px",maxWidth:"94vw"},class:"haila-assistant"},{header:U(()=>[y("div",Le,[i[3]||(i[3]=y("i",{class:"pi pi-sparkles"},null,-1)),y("strong",null,$(o(t)("assistant.title")),1),o(n).hasConversation?(k(),R(o(F),{key:0,label:o(t)("assistant.newConversation"),icon:"pi pi-plus",size:"small",text:"",onClick:I},null,8,["label"])):B("",!0)])]),default:U(()=>[T.value?(k(),S("div",Qe,[y("div",{ref_key:"listRef",ref:D,class:"haila-assistant__list"},[o(n).messages.length===0&&!o(n).sending?(k(),S("div",Ye,[i[5]||(i[5]=y("i",{class:"pi pi-comments"},null,-1)),y("p",null,$(o(t)("assistant.placeholder")),1)])):B("",!0),(k(!0),S(te,null,re(o(n).messages,c=>(k(),S("div",{key:c.id,class:ne(["haila-assistant__row",{"haila-assistant__row--user":c.isUser}])},[c.isUser?B("",!0):(k(),S("i",Xe)),y("p",Ze,$(c.text),1)],2))),128)),o(n).sending?(k(),S("div",es,[i[6]||(i[6]=y("i",{class:"pi pi-sparkles haila-assistant__avatar"},null,-1)),y("span",ss,[C(o(we),{"stroke-width":"5","animation-duration":"1s"})])])):B("",!0)],512),o(n).error?(k(),R(o(_e),{key:0,severity:"error",closable:!1},{default:U(()=>[oe($(o(n).error),1)]),_:1})):B("",!0),y("div",as,[C(o(be),{ref_key:"inputRef",ref:b,"model-value":o(n).draft,"auto-resize":"",rows:1,placeholder:o(t)("assistant.inputPlaceholder"),"onUpdate:modelValue":i[1]||(i[1]=c=>o(n).setDraft(String(c))),onKeydown:ie(le(m,["exact","prevent"]),["enter"])},null,8,["model-value","placeholder","onKeydown"]),C(o(F),{icon:"pi pi-send",rounded:"",disabled:!o(n).draft.trim()||o(n).sending,"aria-label":o(t)("assistant.send"),onClick:m},null,8,["disabled","aria-label"])])])):(k(),S("div",Je,[i[4]||(i[4]=y("i",{class:"pi pi-building"},null,-1)),y("p",null,$(o(t)("assistant.selectWorkspace")),1),C(o(F),{label:o(t)("common.close"),text:"",onClick:i[0]||(i[0]=c=>_.value=!1)},null,8,["label"])]))]),_:1},8,["visible"]))}}),ks=Se(ts,[["__scopeId","data-v-bae369bc"]]);export{ks as H,Fe as h,gs as i,Oe as o,vs as u};
