import{O as z,a as k,D as h,M as pe,W as fe,w as Z,e as J,x as H,N as i,d as I,j as $,k as w,t as E,y as N,f as j,F as me,A as ye,C as ge,B as ve,K as ke,H as _e,n as ee}from"./vue-Uf6PQK4d.js";import{s as V,S as W,ae as P,T as oe,af as x,ag as C,a as ie,u as we,l as Ie,ah as ae,X as te,ai as he}from"./index-D4QDpgXN.js";import{A as Se}from"./features-BuooHanA.js";import{b as be}from"./appointment-v2.service-BQcotkRa.js";import{a as se}from"./authorization.service-DsU4ZwWd.js";import{u as Ae}from"./cameras.store-Cxh1zLUD.js";import{u as $e}from"./dashboard.store-Dv08N1QM.js";import{u as Te}from"./SipCallDialog-B1I6KJll.js";import{a as We}from"./authorization-areas-BV-6O0j2.js";import{c as De,a as Ee}from"./camera-dashboard-scope-DeZEXjo6.js";import{b as je,f as F,c as Be,l as Ne,x as Pe}from"./primeui-C_SbtksU.js";import{_ as xe}from"./_plugin-vue_export-helper-DlAUqK2U.js";const q="haila.workspaceAccessMode.";function Ce(e){if(!e)return{};try{const a=V.get(`${q}${e}`);if(!a)return{};const t=JSON.parse(a);if(!t||typeof t!="object"||Array.isArray(t))return{};const s={};for(const[r,o]of Object.entries(t))(o==="client"||o==="manager")&&(s[r]=o);return s}catch{return{}}}const Da=z("workspaceAccessMode",()=>{const e=k(null),a=k({}),t=h(()=>e.value?a.value:{});function s(g){const d=g?.trim()||null;d!==e.value&&(e.value=d,a.value=Ce(d))}function r(g){const d=g?.trim();return d?a.value[d]??null:null}function o(g,d){const m=g.trim();if(!m||!e.value)return;const _={...a.value,[m]:d};a.value=_;try{V.set(`${q}${e.value}`,JSON.stringify(_))}catch{}}function n(g){const d=g.trim();if(!d||!(d in a.value))return;const m={...a.value};if(delete m[d],a.value=m,!!e.value)try{V.set(`${q}${e.value}`,JSON.stringify(m))}catch{}}function y(){a.value={}}return{userId:e,current:t,bindUser:s,modeFor:r,setMode:o,clearWorkspace:n,clear:y}}),Oe=`
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
`,Me=`
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
`,Ge=`
  query GetDayStatus($input: getspecificdurationstatusbyperiod_args!) {
    __typename
    getspecificdurationstatusbyperiod(args: $input) {
      __typename
      json
    }
  }
`,Re=`
  query GetTimeSlots($input: getavailabletimeslotsbydayjson_args!) {
    __typename
    getavailabletimeslotsbydayjson(args: $input) {
      __typename
      json
    }
  }
`,Ue=`
  query AreaReservationByPeriod($areaId: UUID!, $startDate: DateTime!, $endDate: DateTime!) {
    __typename
    areaReservationByPeriod(areaId: $areaId, startDate: $startDate, endDate: $endDate) {
      __typename
      id
    }
  }
`,O={endpoint:oe.hailaJavaGraphqlEndpoint},Je=`
  mutation GetData($selectedworkspace: String!, $senderworkspace: String!) {
    __typename
    prod_getavailableareasbyworkspaceandsenderjson(
      selectedworkspace: $selectedworkspace
      senderworkspace: $senderworkspace
    ) {
      __typename
      json
    }
    prod_getavailablecategoriesbyworkspacesenderjson(
      selectedworkspace: $selectedworkspace
      senderworkspace: $senderworkspace
    ) {
      __typename
      json
    }
  }
`,He=`
  query GetAppointmentWorkspace($senderId: UUID!) {
    __typename
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
`,Fe=`
  mutation GetDurations($workspaceId: String, $categoryId: String, $areaId: String) {
    __typename
    prod_getspecificdurationsbyworkspacesenderjson(
      selectedworkspace: $workspaceId
      selectedcategoryid: $categoryId
      selectedareaid: $areaId
    ) {
      __typename
      json
    }
  }
`,Ve=`
  mutation GetDayStatus(
    $selectedstartdate: String
    $selectedenddate: String
    $selectedspecificdurationid: String
    $selectedareaid: String
    $selectedcategoryid: String
  ) {
    __typename
    prod_getspecificdurationstatusbyperiod(
      selectedstartdate: $selectedstartdate
      selectedenddate: $selectedenddate
      selectedspecificdurationid: $selectedspecificdurationid
      selectedareaid: $selectedareaid
      selectedcategoryid: $selectedcategoryid
    ) {
      __typename
      json
    }
  }
`,qe=`
  mutation GetTimeSlots(
    $selectedspecificdurationid: String
    $selectedworkspace: String
    $selectedareaid: String
    $selectedcategoryid: String
    $selecteddate: String
  ) {
    __typename
    prod_getavailabletimeslotsbydayjson(
      selectedspecificdurationid: $selectedspecificdurationid
      selectedworkspace: $selectedworkspace
      selectedareaid: $selectedareaid
      selectedcategoryid: $selectedcategoryid
      selecteddate: $selecteddate
    ) {
      __typename
      json
    }
  }
`;function K(e){if(typeof e!="string")return e;const a=e.trim();if(!a.startsWith("[")&&!a.startsWith("{"))return null;try{return JSON.parse(a)}catch{return null}}function G(e){if(!Array.isArray(e)||e.length===0)return null;const a=e[0];return!a||typeof a!="object"?null:K(a.json)}function T(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:null}function R(e){return Array.isArray(e)?e.map(a=>T(a)??T(K(a))).filter(a=>!!a):[]}function ce(e){return R(G(e)).map(a=>({id:String(a.id??""),name:String(a.name??""),areaHierarchyText:String(a.areaHierarchyText??"")}))}function le(e){return R(G(e)).map(a=>({id:String(a.id??""),name:String(a.name??""),description:String(a.description??"")}))}function ze(e){return R(G(e)).map(a=>({id:String(a.id??""),duration:String(a.duration??"")}))}function re(e){return R(G(e)).map(a=>({day:String(a.day??""),status:String(a.status??"")}))}function Ke(e){if(!Array.isArray(e))return[];const a=[];for(const t of e){const s=T(t);if(!s)continue;const r=T(s.json)??T(K(s.json));r&&a.push({start:String(r.start??""),end:String(r.end??""),available:r.available===!0,id:r.id==null?null:String(r.id),name:r.name==null?null:String(r.name),areaHierarchyText:r.areaHierarchyText==null?null:String(r.areaHierarchyText)})}return a}function de(e){if(!Array.isArray(e)||e.length===0)return null;const a=T(e[0]);if(!a)return null;const t=T(a.coverPhoto);return{id:String(a.id??""),legalName:String(a.legalName??""),brandingName:String(a.brandingName??""),logoPath:a.logoPath==null?null:String(a.logoPath),coverPhoto:t?{id:String(t.id??""),url:String(t.url??"")}:null}}function Le(e){return{areas:ce(e.getavailableareasbyworkspaceandsenderjson),categories:le(e.getavailablecategoriesbyworkspacesenderjson),workspace:de(e.workspaceById)}}const Ye={async getAvailableAreasAndCategories(e){if(!(x(C)==="java")){const r=await W(Oe,{senderworkspace:e.selectedWorkspaceId,selectedworkspace:e.sessionWorkspaceId,senderId:e.selectedWorkspaceId});return Le(r)}const[t,s]=await Promise.all([P(Je,{selectedworkspace:e.sessionWorkspaceId,senderworkspace:e.selectedWorkspaceId},O),W(He,{senderId:e.selectedWorkspaceId})]);return{areas:ce(t.prod_getavailableareasbyworkspaceandsenderjson),categories:le(t.prod_getavailablecategoriesbyworkspacesenderjson),workspace:de(s.workspaceById)}},async getSpecificDurations(e){const a=x(C)==="java",t={workspaceId:e.workspaceId,categoryId:e.categoryId??null,areaId:e.areaId??null},s=a?await P(Fe,t,O):await W(Me,t);return ze(a?s.prod_getspecificdurationsbyworkspacesenderjson:s.getspecificdurationsbyworkspacesenderjson)},async getDayStatusByPeriod(e){if(x(C)==="java"){const s=await P(Ve,{selectedstartdate:e.selectedStartDate,selectedenddate:e.selectedEndDate,selectedspecificdurationid:e.selectedSpecificDurationId,selectedareaid:e.selectedAreaId??null,selectedcategoryid:e.selectedCategoryId??null},O);return re(s.prod_getspecificdurationstatusbyperiod)}const t=await W(Ge,{input:{selectedareaid:e.selectedAreaId??null,selectedcategoryid:e.selectedCategoryId??null,selectedstartdate:e.selectedStartDate,selectedenddate:e.selectedEndDate,selectedspecificdurationid:e.selectedSpecificDurationId}});return re(t.getspecificdurationstatusbyperiod)},async getAvailableTimeSlotsByDay(e){const a=x(C)==="java",t={selectedworkspace:e.sessionWorkspaceId,selecteddate:e.selectedDate,selectedspecificdurationid:e.selectedSpecificDurationId};e.selectedAreaId&&(t.selectedareaid=e.selectedAreaId),e.selectedCategoryId&&(t.selectedcategoryid=e.selectedCategoryId);const s=a?await P(qe,t,O):await W(Re,{input:t});return Ke(a?s.prod_getavailabletimeslotsbydayjson:s.getavailabletimeslotsbydayjson)},async checkAreaReservationByPeriod(e){const t=(await W(Ue,{areaId:e.areaId,startDate:e.startDate,endDate:e.endDate})).areaReservationByPeriod;return Array.isArray(t)?t.length===0:!0}};function Qe(e){return!!(e&&e.areas.length>0)}function Xe(e){return!!(e&&e.categories.length>0)}async function Ze(e){const a=e.selectedWorkspaceId?.trim(),t=e.sessionWorkspaceId?.trim();if(!a||!t)return!1;try{if(Se)return(await be.appointmentAreas({selectedWorkspaceId:a,sessionWorkspaceId:t})).areas.length>0;const s=await Ye.getAvailableAreasAndCategories({selectedWorkspaceId:a,sessionWorkspaceId:t});return Qe(s)||Xe(s)}catch{return!1}}const Ea=z("person-dashboard-warm",()=>{const e=k(!1),a=k(!1),t=k([]),s=k([]),r=k(null);let o=0,n=null,y=null;function g(){o+=1,e.value=!1,a.value=!1,t.value=[],s.value=[],r.value=null,n=null,y=null}async function d(m){const _=ie(),A=we(),b=$e(),D=Ae(),p=Te();if(_.sessionIsLegalPerson)return;const u=_.selectedWorkspaceId?.trim()||null,v=_.sessionWorkspaceId?.trim()||null;if(!u||!v)return;const S=`${v}:${u}`;if(!m?.force&&r.value===S){await p.warm(u,b.accesses);return}if(n&&y===S&&!m?.force)return n;const f=o,c=(async()=>{const l=_.primaryWorkspace?.id?.trim()||v,U=De({sessionWorkspaceId:v,selectedWorkspaceId:u,recipientWorkspaceId:Ee({sessionWorkspaceId:v,workspaces:_.workspaces,userId:A.userId})}),[L,Y,Q,X]=await Promise.allSettled([se.getAreasByWorkspace({workspaceId:l,permission:"{create}",relatedAreaType:"authorization"}),Ze({selectedWorkspaceId:u,sessionWorkspaceId:v}),Ie.getAvailableWorkspaceIds(l),se.getAreasByWorkspace({workspaceId:v,permission:"{create}",relatedAreaType:"authorization"})]);U&&await D.load([U.senderWorkspaceId],U.recipientWorkspaceId,A.userId).catch(()=>{}),await p.warm(u,b.accesses,m).catch(()=>{}),f===o&&(e.value=L.status==="fulfilled"&&L.value.some(B=>B.workspaceId===u&&We(B)),a.value=Y.status==="fulfilled"&&Y.value===!0,t.value=Q.status==="fulfilled"?Q.value:[],s.value=X.status==="fulfilled"?X.value.filter(B=>B.workspaceId===u):[],r.value=S)})();n=c,y=S;try{await c}finally{n===c&&(n=null,y=null)}}return{hasBookableAreas:e,hasAppointmentAreas:a,bookableWorkspaceIds:t,fastAuthAreas:s,warmedFor:r,clear:g,warm:d}}),ea=k(0);function ja(){ea.value+=1}const aa=6e4;function ta(e){const a=e.workspaceId.trim(),t=e.message.trim();if(!a)throw new Error("Workspace não selecionado.");if(!t)throw new Error("Mensagem vazia.");const s={selectedWorkspaceId:a,history:[{role:"user",content:t}],surface:e.surface??"condo",locale:e.locale?.trim()||"pt-BR"},r=e.sessionId?.trim();r&&(s.session_id=r);const o=e.systemInstruction?.trim();return o&&(s.system_instruction=o),s}function sa(e){if(!e||typeof e!="object")throw new Error("Resposta inválida do assistente.");const a=e,t=typeof a.response=="string"?a.response:"",s=typeof a.session_id=="string"?a.session_id.trim():"";return{response:t,sessionId:s||null}}function ra(e){if(!e||typeof e!="object")return null;const a=e.detail;return typeof a=="string"&&a.trim()?a.trim():null}async function ne(e,a,t){const s=new AbortController,r=setTimeout(()=>s.abort(),aa);try{return await fetch(e,{method:"POST",headers:he(t),body:JSON.stringify(a),signal:s.signal})}catch(o){throw o?.name==="AbortError"?new Error("Tempo esgotado ao falar com o assistente."):new Error("Falha de conexão com o assistente.")}finally{clearTimeout(r)}}const na={async send(e){const a=ta(e);if(!await ae())throw new Error("Sessão expirada. Faça login novamente.");let s=te();if(!s)throw new Error("Sessão expirada. Faça login novamente.");const r=oe.hailaBotChatSendUrl();let o=await ne(r,a,s);if(o.status===401){const y=await ae({force:!0});if(s=te(),!y||!s)throw new Error("Não autorizado. Faça login novamente.");if(o=await ne(r,a,s),o.status===401)throw new Error("Não autorizado. Faça login novamente.")}let n=null;try{n=await o.json()}catch{n=null}if(o.status>=400){const y=ra(n);throw new Error(y??`Erro ao falar com o assistente (${o.status}).`)}return sa(n)}};function M(){return{messages:[],sessionId:null,draft:""}}function ue(e,a){return`${e.trim()}::${a.trim()}`}const oa=z("haila-bot",()=>{const e=k({}),a=k(""),t=k(!1),s=k(null);let r=0;const o=h(()=>e.value[a.value]??M()),n=h(()=>o.value.messages),y=h(()=>o.value.sessionId),g=h(()=>o.value.draft),d=h(()=>n.value.length>0||!!y.value||!!g.value);function m(p){a.value=p,e.value[p]||(e.value[p]=M()),s.value=null}function _(p){const u=a.value;u&&(e.value[u]||(e.value[u]=M()),e.value[u].draft=p)}async function A(p){const u=p.sessionWorkspaceId.trim(),v=p.selectedWorkspaceId.trim();if(!v){s.value="Selecione um workspace para usar o assistente.";return}const S=ue(u,v);m(S);const f=e.value[S],c=f.draft.trim();if(!(!c||t.value)){f.messages.push({id:`user-${++r}`,isUser:!0,text:c}),f.draft="",s.value=null,t.value=!0;try{const l=await na.send({workspaceId:v,message:c,sessionId:f.sessionId,surface:"condo",locale:p.locale});l.response.trim()&&f.messages.push({id:`assistant-${++r}`,isUser:!1,text:l.response.trim()}),l.sessionId&&(f.sessionId=l.sessionId)}catch(l){s.value=l instanceof Error?l.message:"Falha ao falar com o assistente."}finally{t.value=!1}}}function b(){const p=a.value;p&&(e.value[p]=M(),s.value=null)}function D(){e.value={},a.value="",s.value=null}return{activeKey:a,sending:t,error:s,messages:n,sessionId:y,draft:g,hasConversation:d,activate:m,setDraft:_,sendUserMessage:A,reset:b,clear:D}}),ia={class:"haila-assistant__header"},ca={key:0,class:"haila-empty"},la={key:1,class:"haila-assistant__body"},da={key:0,class:"haila-empty"},ua={key:0,class:"pi pi-sparkles haila-assistant__avatar"},pa={class:"haila-assistant__bubble"},fa={key:1,class:"haila-assistant__row"},ma={class:"haila-assistant__typing"},ya={class:"haila-assistant__input"},ga=pe({__name:"HailaAssistantDialog",props:{visible:{type:Boolean}},emits:["update:visible"],setup(e,{emit:a}){const t=e,s=a,{t:r,locale:o}=fe(),n=oa(),y=ie(),g=k(null),d=k(null),m=h(()=>y.selectedWorkspaceId??""),_=h(()=>y.sessionWorkspaceId??""),A=h(()=>!!m.value),b=h({get:()=>t.visible,set:f=>s("update:visible",f)});function D(){A.value&&n.activate(ue(_.value,m.value))}async function p(){await ee(),g.value?.$el?.focus?.()}async function u(){await ee();const f=d.value;f&&(f.scrollTop=f.scrollHeight)}async function v(){await n.sendUserMessage({sessionWorkspaceId:_.value,selectedWorkspaceId:m.value,locale:o.value}),await u()}function S(){n.reset(),p()}return Z(()=>t.visible,f=>{f&&(D(),p(),u())}),Z(()=>n.messages.length,()=>{u()}),(f,c)=>(I(),J(i(je),{visible:b.value,"onUpdate:visible":c[2]||(c[2]=l=>b.value=l),modal:"",style:{width:"480px",maxWidth:"94vw"},class:"haila-assistant"},{header:H(()=>[w("div",ia,[c[3]||(c[3]=w("i",{class:"pi pi-sparkles"},null,-1)),w("strong",null,E(i(r)("assistant.title")),1),i(n).hasConversation?(I(),J(i(F),{key:0,label:i(r)("assistant.newConversation"),icon:"pi pi-plus",size:"small",text:"",onClick:S},null,8,["label"])):j("",!0)])]),default:H(()=>[A.value?(I(),$("div",la,[w("div",{ref_key:"listRef",ref:d,class:"haila-assistant__list"},[i(n).messages.length===0&&!i(n).sending?(I(),$("div",da,[c[5]||(c[5]=w("i",{class:"pi pi-comments"},null,-1)),w("p",null,E(i(r)("assistant.placeholder")),1)])):j("",!0),(I(!0),$(me,null,ye(i(n).messages,l=>(I(),$("div",{key:l.id,class:ge(["haila-assistant__row",{"haila-assistant__row--user":l.isUser}])},[l.isUser?j("",!0):(I(),$("i",ua)),w("p",pa,E(l.text),1)],2))),128)),i(n).sending?(I(),$("div",fa,[c[6]||(c[6]=w("i",{class:"pi pi-sparkles haila-assistant__avatar"},null,-1)),w("span",ma,[N(i(Be),{"stroke-width":"5","animation-duration":"1s"})])])):j("",!0)],512),i(n).error?(I(),J(i(Ne),{key:0,severity:"error",closable:!1},{default:H(()=>[ve(E(i(n).error),1)]),_:1})):j("",!0),w("div",ya,[N(i(Pe),{ref_key:"inputRef",ref:g,"model-value":i(n).draft,"auto-resize":"",rows:1,placeholder:i(r)("assistant.inputPlaceholder"),"onUpdate:modelValue":c[1]||(c[1]=l=>i(n).setDraft(String(l))),onKeydown:ke(_e(v,["exact","prevent"]),["enter"])},null,8,["model-value","placeholder","onKeydown"]),N(i(F),{icon:"pi pi-send",rounded:"",disabled:!i(n).draft.trim()||i(n).sending,"aria-label":i(r)("assistant.send"),onClick:v},null,8,["disabled","aria-label"])])])):(I(),$("div",ca,[c[4]||(c[4]=w("i",{class:"pi pi-building"},null,-1)),w("p",null,E(i(r)("assistant.selectWorkspace")),1),N(i(F),{label:i(r)("common.close"),text:"",onClick:c[0]||(c[0]=l=>b.value=!1)},null,8,["label"])]))]),_:1},8,["visible"]))}}),Ba=xe(ga,[["__scopeId","data-v-bae369bc"]]);export{Ba as H,Ea as a,Ze as h,ja as i,ea as o,Da as u};
