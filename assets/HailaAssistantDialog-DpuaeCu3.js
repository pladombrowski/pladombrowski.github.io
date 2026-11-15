import{O as X,a as v,D as w,M as se,V as ae,w as q,e as R,x as U,N as o,d as k,j as A,k as y,t as $,y as C,f as B,F as te,A as re,C as ne,B as oe,K as ie,H as le,n as K}from"./vue-C20_1o9P.js";import{A as ce}from"./features-C5MpqHeE.js";import{G as E,a as Z,u as de,k as ue,ah as L,af as J,N as pe,ai as fe}from"./index-D8y89bnq.js";import{b as me}from"./appointment-v2.service-Cy9HzNgI.js";import{a as Q}from"./authorization.service-C5eA4lSs.js";import{u as ye}from"./cameras.store-B-qUbmxk.js";import{u as ve}from"./dashboard.store-iWZrC4Ve.js";import{u as ge}from"./DoorOpenDialog-Bi0EVyMH.js";import{a as ke}from"./authorization-areas-DeUnidic.js";import{c as he}from"./camera-dashboard-scope-DfxyET93.js";import{e as Ie,f as F,b as we,n as _e,x as be}from"./primeui-BeK3lGcL.js";import{_ as Se}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Ae=`
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
`,We=`
  query GetDayStatus($input: getspecificdurationstatusbyperiod_args!) {
    __typename
    getspecificdurationstatusbyperiod(args: $input) {
      __typename
      json
    }
  }
`,Te=`
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
`;function O(e){if(typeof e!="string")return e;const s=e.trim();if(!s.startsWith("[")&&!s.startsWith("{"))return null;try{return JSON.parse(s)}catch{return null}}function N(e){if(!Array.isArray(e)||e.length===0)return null;const s=e[0];return!s||typeof s!="object"?null:O(s.json)}function D(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:null}function j(e){return Array.isArray(e)?e.map(s=>D(s)??D(O(s))).filter(s=>!!s):[]}function Be(e){return j(N(e)).map(s=>({id:String(s.id??""),name:String(s.name??""),areaHierarchyText:String(s.areaHierarchyText??"")}))}function Ee(e){return j(N(e)).map(s=>({id:String(s.id??""),name:String(s.name??""),description:String(s.description??"")}))}function xe(e){return j(N(e)).map(s=>({id:String(s.id??""),duration:String(s.duration??"")}))}function Ce(e){return j(N(e)).map(s=>({day:String(s.day??""),status:String(s.status??"")}))}function Pe(e){if(!Array.isArray(e))return[];const s=[];for(const n of e){const a=D(n);if(!a)continue;const t=D(a.json)??D(O(a.json));t&&s.push({start:String(t.start??""),end:String(t.end??""),available:t.available===!0,id:t.id==null?null:String(t.id),name:t.name==null?null:String(t.name),areaHierarchyText:t.areaHierarchyText==null?null:String(t.areaHierarchyText)})}return s}function Ne(e){if(!Array.isArray(e)||e.length===0)return null;const s=D(e[0]);if(!s)return null;const n=D(s.coverPhoto);return{id:String(s.id??""),legalName:String(s.legalName??""),brandingName:String(s.brandingName??""),logoPath:s.logoPath==null?null:String(s.logoPath),coverPhoto:n?{id:String(n.id??""),url:String(n.url??"")}:null}}function je(e){return{areas:Be(e.getavailableareasbyworkspaceandsenderjson),categories:Ee(e.getavailablecategoriesbyworkspacesenderjson),workspace:Ne(e.workspaceById)}}const He={async getAvailableAreasAndCategories(e){const s=await E(Ae,{senderworkspace:e.selectedWorkspaceId,selectedworkspace:e.sessionWorkspaceId,senderId:e.selectedWorkspaceId});return je(s)},async getSpecificDurations(e){const s=await E(De,{workspaceId:e.workspaceId,categoryId:e.categoryId??null,areaId:e.areaId??null});return xe(s.getspecificdurationsbyworkspacesenderjson)},async getDayStatusByPeriod(e){const s=await E(We,{input:{selectedareaid:e.selectedAreaId??null,selectedcategoryid:e.selectedCategoryId??null,selectedstartdate:e.selectedStartDate,selectedenddate:e.selectedEndDate,selectedspecificdurationid:e.selectedSpecificDurationId}});return Ce(s.getspecificdurationstatusbyperiod)},async getAvailableTimeSlotsByDay(e){const s={selectedworkspace:e.sessionWorkspaceId,selecteddate:e.selectedDate,selectedspecificdurationid:e.selectedSpecificDurationId};e.selectedAreaId&&(s.selectedareaid=e.selectedAreaId),e.selectedCategoryId&&(s.selectedcategoryid=e.selectedCategoryId);const n=await E(Te,{input:s});return Pe(n.getavailabletimeslotsbydayjson)},async checkAreaReservationByPeriod(e){const n=(await E($e,{areaId:e.areaId,startDate:e.startDate,endDate:e.endDate})).areaReservationByPeriod;return Array.isArray(n)?n.length===0:!0}};function Re(e){return!!(e&&e.areas.length>0)}function Ue(e){return!!(e&&e.categories.length>0)}async function Fe(e){const s=e.selectedWorkspaceId?.trim(),n=e.sessionWorkspaceId?.trim();if(!s||!n)return!1;try{if(ce)return(await me.appointmentAreas({selectedWorkspaceId:s,sessionWorkspaceId:n})).areas.length>0;const a=await He.getAvailableAreasAndCategories({selectedWorkspaceId:s,sessionWorkspaceId:n});return Re(a)||Ue(a)}catch{return!1}}const vs=X("person-dashboard-warm",()=>{const e=v(!1),s=v(!1),n=v([]),a=v([]),t=v(null);let r=0,d=null,f=null;function _(){r+=1,e.value=!1,s.value=!1,n.value=[],a.value=[],t.value=null,d=null,f=null}async function b(h){const I=Z(),S=de(),W=ve(),T=ye(),l=ge();if(I.sessionIsLegalPerson)return;const c=I.selectedWorkspaceId?.trim()||null,m=I.sessionWorkspaceId?.trim()||null;if(!c||!m)return;const u=`${m}:${c}`;if(!h?.force&&t.value===u){await l.warm(c,W.accesses);return}if(d&&f===u&&!h?.force)return d;const i=r,p=(async()=>{const g=I.primaryWorkspace?.id?.trim()||m,H=he({sessionWorkspaceId:m,selectedWorkspaceId:c}),[M,V,G,z]=await Promise.allSettled([Q.getAreasByWorkspace({workspaceId:g,permission:"{create}",relatedAreaType:"authorization"}),Fe({selectedWorkspaceId:c,sessionWorkspaceId:m}),ue.getAvailableWorkspaceIds(g),Q.getAreasByWorkspace({workspaceId:m,permission:"{create}",relatedAreaType:"authorization"})]);H&&await T.load([H.senderWorkspaceId],H.recipientWorkspaceId,S.userId).catch(()=>{}),await l.warm(c,W.accesses,h).catch(()=>{}),i===r&&(e.value=M.status==="fulfilled"&&M.value.some(x=>x.workspaceId===c&&ke(x)),s.value=V.status==="fulfilled"&&V.value===!0,n.value=G.status==="fulfilled"?G.value:[],a.value=z.status==="fulfilled"?z.value.filter(x=>x.workspaceId===c):[],t.value=u)})();d=p,f=u;try{await p}finally{d===p&&(d=null,f=null)}}return{hasBookableAreas:e,hasAppointmentAreas:s,bookableWorkspaceIds:n,fastAuthAreas:a,warmedFor:t,clear:_,warm:b}}),Oe=v(0);function gs(){Oe.value+=1}const Me=6e4;function Ve(e){const s=e.workspaceId.trim(),n=e.message.trim();if(!s)throw new Error("Workspace não selecionado.");if(!n)throw new Error("Mensagem vazia.");const a={selectedWorkspaceId:s,history:[{role:"user",content:n}]},t=e.sessionId?.trim();t&&(a.session_id=t);const r=e.systemInstruction?.trim();return r&&(a.system_instruction=r),a}function Ge(e){if(!e||typeof e!="object")throw new Error("Resposta inválida do assistente.");const s=e,n=typeof s.response=="string"?s.response:"",a=typeof s.session_id=="string"?s.session_id.trim():"";return{response:n,sessionId:a||null}}function ze(e){if(!e||typeof e!="object")return null;const s=e.detail;return typeof s=="string"&&s.trim()?s.trim():null}async function Y(e,s,n){const a=new AbortController,t=setTimeout(()=>a.abort(),Me);try{return await fetch(e,{method:"POST",headers:fe(n),body:JSON.stringify(s),signal:a.signal})}catch(r){throw r?.name==="AbortError"?new Error("Tempo esgotado ao falar com o assistente."):new Error("Falha de conexão com o assistente.")}finally{clearTimeout(t)}}const qe={async send(e){const s=Ve(e);if(!await L())throw new Error("Sessão expirada. Faça login novamente.");let a=J();if(!a)throw new Error("Sessão expirada. Faça login novamente.");const t=pe.hailaBotChatSendUrl();let r=await Y(t,s,a);if(r.status===401){const f=await L({force:!0});if(a=J(),!f||!a)throw new Error("Não autorizado. Faça login novamente.");if(r=await Y(t,s,a),r.status===401)throw new Error("Não autorizado. Faça login novamente.")}let d=null;try{d=await r.json()}catch{d=null}if(r.status>=400){const f=ze(d);throw new Error(f??`Erro ao falar com o assistente (${r.status}).`)}return Ge(d)}};function P(){return{messages:[],sessionId:null,draft:""}}function ee(e,s){return`${e.trim()}::${s.trim()}`}const Ke=X("haila-bot",()=>{const e=v({}),s=v(""),n=v(!1),a=v(null);let t=0;const r=w(()=>e.value[s.value]??P()),d=w(()=>r.value.messages),f=w(()=>r.value.sessionId),_=w(()=>r.value.draft),b=w(()=>d.value.length>0||!!f.value||!!_.value);function h(l){s.value=l,e.value[l]||(e.value[l]=P()),a.value=null}function I(l){const c=s.value;c&&(e.value[c]||(e.value[c]=P()),e.value[c].draft=l)}async function S(l){const c=l.sessionWorkspaceId.trim(),m=l.selectedWorkspaceId.trim();if(!m){a.value="Selecione um workspace para usar o assistente.";return}const u=ee(c,m);h(u);const i=e.value[u],p=i.draft.trim();if(!(!p||n.value)){i.messages.push({id:`user-${++t}`,isUser:!0,text:p}),i.draft="",a.value=null,n.value=!0;try{const g=await qe.send({workspaceId:m,message:p,sessionId:i.sessionId});g.response.trim()&&i.messages.push({id:`assistant-${++t}`,isUser:!1,text:g.response.trim()}),g.sessionId&&(i.sessionId=g.sessionId)}catch(g){a.value=g instanceof Error?g.message:"Falha ao falar com o assistente."}finally{n.value=!1}}}function W(){const l=s.value;l&&(e.value[l]=P(),a.value=null)}function T(){e.value={},s.value="",a.value=null}return{activeKey:s,sending:n,error:a,messages:d,sessionId:f,draft:_,hasConversation:b,activate:h,setDraft:I,sendUserMessage:S,reset:W,clear:T}}),Le={class:"haila-assistant__header"},Je={key:0,class:"haila-empty"},Qe={key:1,class:"haila-assistant__body"},Ye={key:0,class:"haila-empty"},Xe={key:0,class:"pi pi-sparkles haila-assistant__avatar"},Ze={class:"haila-assistant__bubble"},es={key:1,class:"haila-assistant__row"},ss={class:"haila-assistant__typing"},as={class:"haila-assistant__input"},ts=se({__name:"HailaAssistantDialog",props:{visible:{type:Boolean}},emits:["update:visible"],setup(e,{emit:s}){const n=e,a=s,{t}=ae(),r=Ke(),d=Z(),f=v(null),_=v(null),b=w(()=>d.selectedWorkspaceId??""),h=w(()=>d.sessionWorkspaceId??""),I=w(()=>!!b.value),S=w({get:()=>n.visible,set:u=>a("update:visible",u)});function W(){I.value&&r.activate(ee(h.value,b.value))}async function T(){await K(),f.value?.$el?.focus?.()}async function l(){await K();const u=_.value;u&&(u.scrollTop=u.scrollHeight)}async function c(){await r.sendUserMessage({sessionWorkspaceId:h.value,selectedWorkspaceId:b.value}),await l()}function m(){r.reset(),T()}return q(()=>n.visible,u=>{u&&(W(),T(),l())}),q(()=>r.messages.length,()=>{l()}),(u,i)=>(k(),R(o(Ie),{visible:S.value,"onUpdate:visible":i[2]||(i[2]=p=>S.value=p),modal:"",style:{width:"480px",maxWidth:"94vw"},class:"haila-assistant"},{header:U(()=>[y("div",Le,[i[3]||(i[3]=y("i",{class:"pi pi-sparkles"},null,-1)),y("strong",null,$(o(t)("assistant.title")),1),o(r).hasConversation?(k(),R(o(F),{key:0,label:o(t)("assistant.newConversation"),icon:"pi pi-plus",size:"small",text:"",onClick:m},null,8,["label"])):B("",!0)])]),default:U(()=>[I.value?(k(),A("div",Qe,[y("div",{ref_key:"listRef",ref:_,class:"haila-assistant__list"},[o(r).messages.length===0&&!o(r).sending?(k(),A("div",Ye,[i[5]||(i[5]=y("i",{class:"pi pi-comments"},null,-1)),y("p",null,$(o(t)("assistant.placeholder")),1)])):B("",!0),(k(!0),A(te,null,re(o(r).messages,p=>(k(),A("div",{key:p.id,class:ne(["haila-assistant__row",{"haila-assistant__row--user":p.isUser}])},[p.isUser?B("",!0):(k(),A("i",Xe)),y("p",Ze,$(p.text),1)],2))),128)),o(r).sending?(k(),A("div",es,[i[6]||(i[6]=y("i",{class:"pi pi-sparkles haila-assistant__avatar"},null,-1)),y("span",ss,[C(o(we),{"stroke-width":"5","animation-duration":"1s"})])])):B("",!0)],512),o(r).error?(k(),R(o(_e),{key:0,severity:"error",closable:!1},{default:U(()=>[oe($(o(r).error),1)]),_:1})):B("",!0),y("div",as,[C(o(be),{ref_key:"inputRef",ref:f,"model-value":o(r).draft,"auto-resize":"",rows:1,placeholder:o(t)("assistant.inputPlaceholder"),"onUpdate:modelValue":i[1]||(i[1]=p=>o(r).setDraft(String(p))),onKeydown:ie(le(c,["exact","prevent"]),["enter"])},null,8,["model-value","placeholder","onKeydown"]),C(o(F),{icon:"pi pi-send",rounded:"",disabled:!o(r).draft.trim()||o(r).sending,"aria-label":o(t)("assistant.send"),onClick:c},null,8,["disabled","aria-label"])])])):(k(),A("div",Je,[i[4]||(i[4]=y("i",{class:"pi pi-building"},null,-1)),y("p",null,$(o(t)("assistant.selectWorkspace")),1),C(o(F),{label:o(t)("common.close"),text:"",onClick:i[0]||(i[0]=p=>S.value=!1)},null,8,["label"])]))]),_:1},8,["visible"]))}}),ks=Se(ts,[["__scopeId","data-v-8fb9da06"]]);export{ks as H,Fe as h,gs as i,Oe as o,vs as u};
