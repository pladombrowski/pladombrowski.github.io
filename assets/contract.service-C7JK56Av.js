import{ag as y,Q as R,cy as U,cz as K,at as I,S as _,T as Q,cA as A}from"./index-BhotVYT6.js";import{p as Z}from"./contract-DwGPrr_G.js";const m=1e-6;function $(e){return e.some(t=>!!t.transactionType)}function X(e){return(e.transactionType??"DEBIT").toUpperCase()==="CREDIT"?e.value:-e.value}function S(e){const t=new Map;for(const n of e){const r=n.currencyUnit.id;if(!r)continue;const a=X(n),s=t.get(r);s?s.net+=a:t.set(r,{net:a,unit:n.currencyUnit})}return t}function O(e){if(e.length===0)return!1;const t=S(e);return t.size===0?!1:[...t.values()].every(n=>Math.abs(n.net)<m)}function V(e,t){const n=new Map;for(const r of e){if(!t(r))continue;const a=r.currencyUnit.id;if(!a)continue;const s=n.get(a);s?s.net+=r.value:n.set(a,{net:r.value,unit:r.currencyUnit})}return n}function ee(e){return V(e,t=>(t.transactionType??"DEBIT").toUpperCase()==="DEBIT")}function x(e){const t=new Map;for(const n of e){const r=n.currencyUnit.id;if(!r)continue;const a=n.reversedPayment?-n.value:n.value,s=t.get(r);s?s.net+=a:t.set(r,{net:a,unit:n.currencyUnit})}return t}function P(e){if(e.length===0)return!1;const t=x(e);return t.size===0?!1:[...t.values()].every(n=>Math.abs(n.net)<m)}function te(e){return V(e,t=>!t.reversedPayment)}function ne(e,t){const n=[];for(const r of e){if(r.currencyUnit.id!==t)continue;const a=Math.abs(r.value);a<m||n.some(s=>Math.abs(s-a)<m)||n.push(a)}return n}function L(e){const n=$(e)?ee(e):te(e),r=new Map;for(const s of e){const o=s.currencyUnit.id;o&&r.set(o,s.currencyUnit)}const a=new Map;for(const[s,o]of r){const l=ne(e,s);if(l.length!==0)if(l.length===1)a.set(s,{net:l[0],unit:o});else{const u=n.get(s);u&&Math.abs(u.net)>=m&&a.set(s,u)}}return a}function re(e){const t=[];for(const n of S(e).values())Math.abs(n.net)<m||t.push({signedNet:n.net,unit:n.unit});return t}function Ge(e){const t=new Map;for(const n of e)for(const r of n.values){const a=r.currencyUnit.id;a&&t.set(a,r.currencyUnit)}return[...t.values()].sort((n,r)=>n.type!==r.type?n.type==="TIME"?-1:1:n.name.localeCompare(r.name))}var ae=(e=>(e.ByStartDate="startDate",e.ByHolder="holder",e))(ae||{});const Ve={startDate:"Data da reserva",holder:"Titular (A–Z)"};function Y(e){const t=Math.abs(Math.round(e)),n=Math.floor(t/60),r=t%60;return n>0&&r>0?`${n}h ${r}m`:n>0?`${n}h`:r>0?`${r}m`:"0m"}function q(e,t){if(t.type==="TIME"){const a=Math.round(e);if(a===0)return"0m";const s=Y(a);return a<0?`-${s}`:s}const n=U(Math.abs(e),{useGrouping:!1});if(e<-m)return t.symbolBeforeValue?`-${t.symbol} ${n}`:`-${n} ${t.symbol}`;if(e>m)return t.symbolBeforeValue?`${t.symbol} ${n}`:`${n} ${t.symbol}`;const r=U(0,{useGrouping:!1});return t.symbolBeforeValue?`${t.symbol} ${r}`:`${r} ${t.symbol}`}function se(e,t){if(t.type==="TIME")return Y(e);const n=U(Math.abs(e),{useGrouping:!1});return t.symbolBeforeValue?`${t.symbol} ${n}`:`${n} ${t.symbol}`}function W(e){return[...L(e.values).values()].map(t=>se(t.net,t.unit))}function H(e,t){if(O(e.values)){const r=W(e);return r.length===0?t?"Reserva estornada":"Estornada":t?`Reserva estornada — débitos: ${r.join(" · ")}`:`Estornada · ${r.join(" · ")}`}const n=re(e.values).map(r=>q(r.signedNet,r.unit));return n.length===0?"Estornada":n.join(" · ")}function z(e,t){if(e.values.length===0)return"—";if(P(e.values)){const r=W(e);return r.length===0?t?"Reserva estornada":"Estornada":t?`Reserva estornada — débitos: ${r.join(" · ")}`:`Estornada · ${r.join(" · ")}`}const n=[];for(const r of x(e.values).values())Math.abs(r.net)<m||n.push(q(-r.net,r.unit));return n.length===0?t?"Reserva estornada":"Estornada":n.join(" · ")}function xe(e){return e.values.length===0?"—":$(e.values)?H(e,!1):z(e,!1)}function Ye(e){return e.values.length===0?"—":$(e.values)?H(e,!0):z(e,!0)}const ce={day:"numeric",month:"short"},F={hour:"2-digit",minute:"2-digit"};function T(e){return R(e,ce).replace(/\./g,"")}function qe(e,t){const n=y(e),r=y(t);if(!n||!r)return"—";const a=n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()&&n.getDate()===r.getDate(),s=R(n,F),o=R(r,F);return a?`${T(n)} ${s} → ${o}`:`${T(n)} ${s} → ${T(r)} ${o}`}function We(e){return e.areas.map(t=>t.displayName).join(", ")}function He(e){const t=y(e);return t?K(t):""}function ze(e){return e.type==="TIME"?`${e.name} (minutos)`:`${e.name} (${e.symbol})`}var oe=(e=>(e.All="all",e.ConfirmedOnly="confirmedOnly",e))(oe||{});function Je(e,t,n){if($(e.values)){if(O(e.values)){const o=L(e.values).get(t);return!o||Math.abs(o.net)<m?null:n.type==="TIME"?Math.round(o.net):o.net}const s=S(e.values).get(t)?.net;return s==null||Math.abs(s)<m?null:n.type==="TIME"?Math.round(s):s}if(P(e.values)){const s=L(e.values).get(t);return!s||Math.abs(s.net)<m?null:n.type==="TIME"?Math.round(s.net):s.net}let r=0;for(const s of e.values)s.currencyUnit.id===t&&(r+=s.reversedPayment?-s.value:s.value);if(Math.abs(r)<m)return null;const a=-r;return n.type==="TIME"?Math.round(a):a}function ie(e){return e.replace(/[^\w-]/g,"_")}function Ke(e){const t=ie(e.contractId),r=`reservas_ciclo_${e.periodSegment!=="unknown"?e.periodSegment:e.fallbackMonth&&e.fallbackYear?`${e.fallbackYear}_${String(e.fallbackMonth).padStart(2,"0")}`:"unknown"}_${t}`;return e.mode==="confirmedOnly"?`${r}_confirmadas`:r}function k(e,t){return!e&&!t?0:e?t?e.getTime()-t.getTime():-1:1}function Qe(e,t){const n=[...e];return t==="startDate"?(n.sort((r,a)=>{const s=k(y(r.startDate),y(a.startDate));if(s!==0)return s;const o=r.holder.toLowerCase().localeCompare(a.holder.toLowerCase());if(o!==0)return o;const l=(r.holderEmail??"").toLowerCase().localeCompare((a.holderEmail??"").toLowerCase());return l!==0?l:k(y(r.endDate),y(a.endDate))}),n):(n.sort((r,a)=>{const s=r.holder.toLowerCase().localeCompare(a.holder.toLowerCase());if(s!==0)return s;const o=(r.holderEmail??"").toLowerCase().localeCompare((a.holderEmail??"").toLowerCase());if(o!==0)return o;const l=k(y(r.startDate),y(a.startDate));return l!==0?l:k(y(r.endDate),y(a.endDate))}),n)}const le=`
  query getdashboardcontracts($selecteduserid: uuid!, $selectedworkspaceid: uuid!) {
    __typename
    getdashboardcontracts(
      args: { selecteduserid: $selecteduserid, selectedworkspaceid: $selectedworkspaceid }
    ) {
      __typename
      json
    }
  }
`,ue=`
  query GetContracts($workspaceId: uuid!, $userId: uuid!) {
    __typename
    getassignedcontractsbyuserid(
      args: { selecteduserid: $userId, selectedworkspaceid: $workspaceId }
    ) {
      __typename
      json
    }
  }
`,de=`
  query GetContractById($id: uuid!) {
    __typename
    getcontractjson(args: { selectedcontractid: $id }) {
      __typename
      json
    }
  }
`,me=`
  mutation GetContractById($id: String!) {
    __typename
    prod_getcontractjson(selectedcontractid: $id) {
      __typename
      json
    }
  }
`,N={endpoint:Q.hailaJavaGraphqlEndpoint},pe=`
  query GetContracts($workspaceId: uuid!, $filters: jsonb) {
    __typename
    get_contracts_json(args: { p_workspace_id: $workspaceId, p_filters: $filters }) {
      __typename
      json
    }
  }
`,ye=`
  query ContractDetails($contractId: UUID!) {
    __typename
    contractDetails(contractId: $contractId) {
      __typename
      success
      payload {
        __typename
        fullAccess
        dependentsLimit
        extendedContractBehaviour
        specificClients {
          __typename
          id
          status
          workspaceClient {
            __typename
            id
            firstName
            lastName
            brandingName
            legalName
            type
            email
            address
            number
          }
        }
      }
      errorMessages
    }
  }
`,fe=`
  mutation UpdateContractClients($contractId: UUID!, $contractClientItem: ContractClientItemInput!) {
    __typename
    updateContractClients(contractId: $contractId, contractClientItem: $contractClientItem) {
      __typename
      success
      errorMessages
    }
  }
`,Ce=`
  mutation acceptContract($contractId: UUID!, $fullAccess: Boolean!, $accept: Boolean!) {
    __typename
    acceptContractById(contractId: $contractId, fullAccess: $fullAccess, status: $accept) {
      __typename
      success
      errorMessages
    }
  }
`,ge=`
  mutation DisableContract($contractId: UUID!) {
    __typename
    disableContract(workspaceLinkContractId: $contractId) {
      __typename
      success
      errorMessages
    }
  }
`,_e=`
  mutation ExtendContract($inputContractId: uuid!, $inputEndDate: timestamptz!, $inputFlags: jsonb!) {
    __typename
    extendcontract(
      args: {
        inputcontractid: $inputContractId
        inputenddate: $inputEndDate
        inputflags: $inputFlags
      }
    ) {
      __typename
      json
    }
  }
`,Ie=`
  query GetCycles($contractId: uuid!, $workspaceId: uuid, $selectedmonth: Int, $selectedyear: Int) {
    __typename
    getcyclesjson(
      args: {
        selectedcontractid: $contractId
        selectedworkspaceid: $workspaceId
        selectedfilters: null
        selectedhasexceedingconsume: null
        selectediscompany: null
        selectedisperson: null
        selectedispersonwithoutcompany: null
        selectedmonth: $selectedmonth
        selectedyear: $selectedyear
      }
    ) {
      __typename
      json
    }
  }
`,we=`
  query GetCycles(
    $selectedfilters: String
    $selectedhascustomcredit: Boolean
    $selectedhasexceedingconsume: Boolean
    $selectediscompany: Boolean
    $selectedisperson: Boolean
    $selectedispersonwithoutcompany: Boolean
    $selectedmonth: Int
    $selectedyear: Int
    $selectedworkspaceid: uuid
  ) {
    __typename
    getcyclesjson(
      args: {
        selectedcontractid: null
        selectedhascustomcredit: $selectedhascustomcredit
        selectedfilters: $selectedfilters
        selectedhasexceedingconsume: $selectedhasexceedingconsume
        selectediscompany: $selectediscompany
        selectedisperson: $selectedisperson
        selectedispersonwithoutcompany: $selectedispersonwithoutcompany
        selectedmonth: $selectedmonth
        selectedyear: $selectedyear
        selectedworkspaceid: $selectedworkspaceid
      }
    ) {
      __typename
      json
    }
  }
`,he=`
  query GetEntriesByCycle($cycleId: uuid!, $workspaceId: uuid!) {
    __typename
    getcyclelinksjson(args: { selectedcycle: $cycleId, selectedworkspace: $workspaceId }) {
      __typename
      json
    }
  }
`,$e=`
  query GetCycles($contractId: String!, $workspaceId: String, $selectedmonth: Int, $selectedyear: Int) {
    __typename
    prod_getcyclesjson(
      selectedcontractid: $contractId
      selectedworkspaceid: $workspaceId
      selectedfilters: null
      selectedhasexceedingconsume: null
      selectediscompany: null
      selectedisperson: null
      selectedispersonwithoutcompany: null
      selectedmonth: $selectedmonth
      selectedyear: $selectedyear
    ) {
      __typename
      json
    }
  }
`,ke=`
  mutation GetEntriesByCycle($cycleId: String!, $workspaceId: String!) {
    __typename
    prod_getcyclelinksjson(selectedcycle: $cycleId, selectedworkspace: $workspaceId) {
      __typename
      json
    }
  }
`,be=`
  mutation UpdateCreditsFlags($args: updatecontractcreditflags_args!) {
    __typename
    updatecontractcreditflags(args: $args) {
      __typename
      json
    }
  }
`,Ee=`
  query GetAreaBookingPricingByCurrencyUnit($workspaceId: UUID!, $currencyUnitId: UUID!) {
    __typename
    areaBookingPricingByCurrencyUnit(workspaceId: $workspaceId, currencyUnitId: $currencyUnitId) {
      __typename
      success
      payload {
        __typename
        id
        name
        priceMinute
        priceHour
        priceDay
        priceWeek
        priceMonth
        priceYear
        workspaceId
        currency: unit {
          __typename
          id
          name
          symbol
          symbolBeforeValue
          type
          workspaceId
        }
      }
      errorMessages
    }
  }
`,De=`
  mutation InsertCreditOnCycleByContract(
    $contractId: UUID!
    $cycleDate: String!
    $currencyUnitId: UUID!
    $value: Int!
    $userId: UUID!
  ) {
    __typename
    insertCreditOnCycleByContract(
      contractId: $contractId
      cycleDate: $cycleDate
      currencyUnitId: $currencyUnitId
      value: $value
      creatorUserId: $userId
    ) {
      __typename
      json
    }
  }
`;function c(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function d(e){return Array.isArray(e)?e:[]}function C(e,t=0){if(typeof e=="number"&&Number.isFinite(e))return e;const n=Number(e);return Number.isFinite(n)?n:t}function i(e,t=""){return typeof e=="string"?e:t}function w(e,t=!1){return typeof e=="boolean"?e:t}function E(e){const t=c(e)??{};return{id:i(t.id),type:i(t.type),firstName:t.firstName??null,lastName:t.lastName??null,legalName:t.legalName??null,brandingName:t.brandingName??null,email:t.email??null,phone:t.phone??null}}function ve(e){return e?e.type==="PERSON"&&(e.firstName||e.lastName)?[e.firstName,e.lastName].filter(Boolean).join(" ").trim():e.brandingName||e.legalName||e.id||"—":"—"}function j(e,t){return d(e).some(n=>c(n)?.name===t)}function Ae(e){const t=c(e)??{},n=c(t.currencyUnit)??{};return{id:i(t.id),value:C(t.value),priority:typeof t.priority=="number"?t.priority:1,currencyUnit:{id:i(n.id),name:i(n.name),type:i(n.type,"TIME"),symbol:i(n.symbol),symbolBeforeValue:w(n.symbolBeforeValue)},overLimitAllowed:t.overLimitAllowed===!0||j(t.flags,"overLimitAllowed"),limitChangeAllowed:j(t.flags,"limitChangeAllowed"),customCreditAllowed:j(t.flags,"customCreditAllowed")}}function M(e){const t=c(e.template)??{},n=d(e.contractCredits).map(a=>c(a)).filter(a=>a!==null).map(Ae).sort((a,s)=>a.priority-s.priority),r=c(e.generalPreferences);return{id:i(e.id),status:i(e.status),template:{id:i(t.id),name:i(t.name),value:C(t.value),autoRenew:w(t.autoRenew),autoRenewPeriod:t.autoRenewPeriod??null},workspaceClient:E(e.workspaceClient),contractedWorkspace:E(e.workspace??e.contractedWorkspace),contractCredits:n,autoRenewPeriod:e.autoRenewPeriod??null,extendedContractBehaviour:r?r.extendedContractBehaviour??null:null,startDate:e.startDate??null,endDate:e.endDate??null}}function Te(e){const t=c(e.workspace)??{},n=c(e.workspace_link)??{},r=c(e.workspace_link_contract_template),a=c(n.workspace_client)??{},o=d(r?.workspace_link_contract_template_credits).map(u=>c(u)).filter(u=>u!==null).map((u,f)=>({id:u.id,value:u.value,priority:typeof u.priority=="number"?u.priority:f+1,currencyUnit:c(u.currency_unit)??{},overLimitAllowed:u.overLimitAllowed===!0})),l=r?{id:r.id,name:r.name,value:r.value,autoRenew:r.autoRenew}:{id:"",name:"",value:0,autoRenew:!1};return{id:e.id,status:e.status,workspace:t,contractedWorkspace:t,workspaceClient:a,template:l,contractCredits:o,autoRenewPeriod:e.autoRenewPeriod}}function Ne(e,t={}){if(!Array.isArray(e)||e.length===0)return[];const n=e[0]?.json,r=t.nested?Array.isArray(n)?n:[]:n;if(!Array.isArray(r))return[];const a=[];for(const s of r){if(!s||typeof s!="object")continue;const o=s.jsonb_build_object,l=o&&typeof o=="object"?o:s;a.push(l)}return a}function b(e){const t=c(e)??{};return{id:i(t.id),name:i(t.name),type:i(t.type,"TIME"),value:C(t.value),symbol:i(t.symbol),symbolBeforeValue:w(t.symbolBeforeValue),creditId:t.creditId??null}}function J(e){const t=c(e);if(!t)return null;const n="defaultCredits"in t?d(t.defaultCredits).map(b):[],r="customCredits"in t?d(t.customCredits).map(b):[];return{id:i(t.id),startDate:t.startDate??null,endDate:t.endDate??null,totalCredits:d(t.totalCredits).map(b),consumedCredits:d(t.consumedCredits).map(b),defaultCredits:n,customCredits:r}}function G(e,t){return[e?.trim()??"",t?.trim()??""].filter(Boolean).join(" ")}function je(e){const t=(a,s)=>{const o=a.find(l=>l.id===s);return o?o.value:0},n=a=>e.totalCredits.find(s=>s.id===a)??e.consumedCredits.find(s=>s.id===a)??e.defaultCredits.find(s=>s.id===a)??e.customCredits.find(s=>s.id===a)??null,r=[];for(const a of[e.totalCredits,e.defaultCredits,e.customCredits,e.consumedCredits])for(const s of a)!s.id||r.includes(s.id)||r.push(s.id);return r.map(a=>{const s=n(a),o=s?.name.trim()?s.name:s?.symbol??"Crédito",l=t(e.defaultCredits,a),u=t(e.consumedCredits,a);return{id:a,name:o,type:s?.type??"TIME",symbol:s?.symbol??"",symbolBeforeValue:s?.symbolBeforeValue??!1,renovacao:l,adquiridos:t(e.customCredits,a),total:t(e.totalCredits,a),consumed:u,excedente:Math.max(u-l,0)}})}function Me(e){const t=c(e)??{},n=c(t.contractcycle)??{},r=c(n.contract),a=c(r?.template),s=c(r?.workspaceClient),o=J(n)??{id:"",startDate:null,endDate:null,totalCredits:[],consumedCredits:[],defaultCredits:[],customCredits:[]},l=i(t.firstName),u=i(t.lastName),f=i(t.brandingName),p=s?E(s):null,D=a?i(a.id):null,v=i(a?.name);let g=f.trim();if(!g){const h=G(p?.firstName,p?.lastName);h&&(g=h)}if(!g){const h=G(l,u);h&&(g=h)}return!g&&p&&(g=(p.brandingName??"").trim()||(p.legalName??"").trim()||ve(p)),g||(g="—"),{firstName:l,lastName:u,brandingName:f,startDate:t.startDate??null,cycle:o,contractId:r?i(r.id):null,templateId:D,templateName:v,workspaceClient:p,displayName:g,templateFilterKey:D?.trim()?D:v.trim()?`name:${v}`:"name:",currencyLines:je(o)}}function Be(e){const t=c(e)??{},n=c(t.currency_unit)??{};return{id:i(t.id),value:C(t.value),transactionType:t.type??null,currencyUnit:{id:i(n.id),name:i(n.name),type:i(n.type,"TIME"),symbol:i(n.symbol),symbolBeforeValue:w(n.symbolBeforeValue)},reversedPayment:w(t.reversedPayment)}}function Re(e){const t=c(e)??{},n=d(t.areaHierarchy).map(s=>c(s)).filter(s=>s!==null).map(s=>({id:i(s.id),name:i(s.name)})),r=i(t.name),a=n.map(s=>s.name).filter(Boolean);return{id:i(t.id),name:r,areaHierarchy:n,displayName:a.length?`${a.join(" > ")} > ${r}`:r}}function Ue(e){const t=c(e)??{},n=d(t.values).map(a=>c(a)).filter(a=>a!==null).map(Be),r=$(n)?O(n):P(n);return{id:i(t.id),holder:i(t.holder),holderEmail:t.holderEmail??null,startDate:t.startDate??null,endDate:t.endDate??null,areas:d(t.areas).map(a=>c(a)).filter(a=>a!==null).map(Re),values:n,reversedPayment:r}}function Le(e){const t=c(e.workspace_link_contract_template)??c(e.template)??{};return{id:i(e.id),status:i(e.status),priority:typeof e.priority=="number"?e.priority:0,startDate:e.startDate??null,endDate:e.endDate??null,payDay:typeof e.payDay=="number"?e.payDay:null,workspaceClient:E(e.workspace_client),template:{id:i(t.id),name:i(t.name),value:C(t.value),autoRenew:w(t.autoRenew),autoRenewPeriod:t.autoRenewPeriod??null},creditExtension:Z(e.contractDetails)}}function B(e,t){if(!e||e.success!==!0){const n=d(e?.errorMessages).map(r=>String(r));throw new Error(n.length?n.join("; "):t)}}const Se={async getDashboardContracts(e){const t=await _(le,{selecteduserid:e.userId,selectedworkspaceid:e.selectedWorkspaceId},{timeoutMs:45e3}),n=new Map;for(const r of Ne(t.getdashboardcontracts,{nested:!0})){const a=M(r);a.status==="ACTIVE"&&a.contractedWorkspace.id===e.selectedWorkspaceId&&n.set(a.id,a)}return[...n.values()]},async getAssignedContracts(e){const t=await _(ue,{userId:e.userId,workspaceId:e.workspaceId},{timeoutMs:45e3}),n=d(t.getassignedcontractsbyuserid),a=c(n[0])?.json,s=Array.isArray(a)?a:a?[a]:[],o=new Map;for(const l of s){const u=c(l);if(!u)continue;const f=c(u.jsonb_build_object)??u;try{const p=M(Te(f));if(p.status!=="ACTIVE"&&p.status!=="PENDING")continue;o.set(p.id,p)}catch{continue}}return[...o.values()]},async getContractById(e){if(!e)return null;const t=A==="java",n=t?await I(me,{id:e},N):await _(de,{id:e}),r=d(t?n.prod_getcontractjson:n.getcontractjson),a=c(r[0]),s=d(a?.json),o=c(s[0]),l=c(o?.jsonb_build_object);return l?M(l):null},async getContracts(e){if(!e.workspaceId)return[];const t=await _(pe,{workspaceId:e.workspaceId,filters:e.filters}),n=d(t.get_contracts_json),r=[];for(const a of n){const s=c(a);if(!s)continue;const o=s.json;let l=null;const u=c(o);if(u)l=u;else if(Array.isArray(o)&&o.length>0){const f=c(o[0]);l=c(f?.jsonb_build_object)??f}if(l)try{r.push(Le(l))}catch{continue}}return r},async getContractDetails(e){const t=await _(ye,{contractId:e}),n=c(t.contractDetails);if(!n)return null;const r=n.success===!0,a=d(n.errorMessages).map(l=>String(l));if(!r&&a.length){const l=a.join("; ");if(/general preference( item)? not found/i.test(l))return{fullAccess:!1,dependentsLimit:-1,extendedContractBehaviour:"NO_FORCE",specificClients:[]};throw new Error(l)}const s=c(n.payload);if(!s)return null;const o=d(s.specificClients).map(l=>c(l)).filter(l=>l!==null).map(l=>{const u=c(l.workspaceClient)??{},f={id:i(u.id),firstName:u.firstName??null,lastName:u.lastName??null,brandingName:u.brandingName??null,legalName:u.legalName??null,type:i(u.type,"PERSON"),email:u.email??null,address:u.address??null,number:u.number??null};return{id:i(l.id),status:i(l.status,"ACTIVE"),workspaceClient:f}});return{fullAccess:w(s.fullAccess),dependentsLimit:typeof s.dependentsLimit=="number"?s.dependentsLimit:-1,extendedContractBehaviour:s.extendedContractBehaviour??"NO_FORCE",specificClients:o}},async updateContractClients(e){const t=await I(fe,{contractId:e.contractId,contractClientItem:{fullAccess:e.fullAccess,specificClients:e.specificClients.map(n=>({id:n.id,status:n.status??"ACTIVE"}))}});B(c(t.updateContractClients),"Falha ao salvar dependentes do contrato")},async acceptContractById(e){const t=await I(Ce,{contractId:e.contractId,fullAccess:e.fullAccess,accept:e.accept});B(c(t.acceptContractById),"Falha ao aceitar/rejeitar contrato")},async disableContract(e){const t=await I(ge,{contractId:e});B(c(t.disableContract),"Falha ao cancelar contrato")},async extendContract(e){const t=l=>String(l).padStart(2,"0"),n=`${e.endDate.getFullYear()}-${t(e.endDate.getMonth()+1)}-${t(e.endDate.getDate())}T00:00:00.000`,r=await I(_e,{inputContractId:e.contractId,inputEndDate:n,inputFlags:{}}),a=d(r.extendcontract),s=c(c(a[0])?.json),o=i(s?.response);if(o&&o!=="OK")throw new Error(o)},async getContractCycles(e){const t={contractId:e.contractId,workspaceId:e.workspaceId,selectedmonth:e.month??null,selectedyear:e.year??null},n=A==="java",r=await _(n?$e:Ie,t,n?N:{}),a=d(n?r.prod_getcyclesjson:r.getcyclesjson),s=d(c(a[0])?.json),o=[];for(const l of s){const u=J(c(l)?.contractcycle);u&&o.push(u)}return o},async getContractCycleForMonth(e){const t=await Se.getContractCycles(e);for(const n of t){const r=y(n.startDate);if(r&&r.getMonth()+1===e.month&&r.getFullYear()===e.year)return n}return null},async getWorkspaceCycles(e){if(!e.workspaceId)return[];const t=await _(we,{selectedfilters:e.searchQuery?.trim()??"",selectedhascustomcredit:e.onlyCustomCredit?!0:null,selectedhasexceedingconsume:e.onlyExceedingConsume?!0:null,selectediscompany:e.isCompany??!0,selectedisperson:e.isPerson??!0,selectedispersonwithoutcompany:e.isPersonWithoutCompany??!0,selectedmonth:e.month,selectedyear:e.year,selectedworkspaceid:e.workspaceId}),n=d(t.getcyclesjson);return d(c(n[0])?.json).map(a=>c(a)).filter(a=>a!==null).map(Me)},async getEntriesByCycle(e){if(!e.cycleId||!e.workspaceId)return[];const t={cycleId:e.cycleId,workspaceId:e.workspaceId},n=A==="java",r=n?await I(ke,t,N):await _(he,t),a=d(n?r.prod_getcyclelinksjson:r.getcyclelinksjson);return d(c(a[0])?.json).map(o=>c(o)).filter(o=>o!==null).map(Ue)},async updateContractCreditFlags(e){const t=await I(be,{args:{selectedworkspaceid:e.workspaceId,selecteduserid:e.userId,selectedcontractcredits:e.credits}}),n=d(t.updatecontractcreditflags),r=c(c(n[0])?.json),a=i(r?.response);if(a!=="OK")throw new Error(a||"Falha ao atualizar flags do crédito")},async getAreaBookingPricingByCurrencyUnit(e){const t=await _(Ee,{workspaceId:e.workspaceId,currencyUnitId:e.currencyUnitId}),n=c(t.areaBookingPricingByCurrencyUnit);if(!n)return[];const r=d(n.errorMessages).map(a=>String(a));if(n.success!==!0&&r.length)throw new Error(r.join("; "));return d(n.payload).map(a=>c(a)).filter(a=>a!==null).map(a=>{const s=c(a.currency)??{};return{id:i(a.id),name:i(a.name),priceMinute:C(a.priceMinute),priceHour:C(a.priceHour),priceDay:C(a.priceDay),priceWeek:C(a.priceWeek),priceMonth:C(a.priceMonth),priceYear:C(a.priceYear),workspaceId:i(a.workspaceId),currency:{id:i(s.id),name:i(s.name),symbol:i(s.symbol),symbolBeforeValue:w(s.symbolBeforeValue),type:i(s.type,"TIME"),workspaceId:i(s.workspaceId)}}})},async insertCreditOnCycleByContract(e){const t=await I(De,{contractId:e.contractId,cycleDate:e.cycleDate,currencyUnitId:e.currencyUnitId,value:e.value,userId:e.userId});if(d(t.insertCreditOnCycleByContract).length===0)throw new Error("Resposta inválida ao adicionar créditos")}};export{ae as C,We as a,ve as b,Se as c,Ye as d,Ve as e,qe as f,xe as g,Qe as h,oe as i,Ge as j,He as k,Je as l,Ke as m,ze as x};
