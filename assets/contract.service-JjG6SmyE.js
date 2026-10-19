import{B as j,ak as B,al as z,aa as _,E as I}from"./index-t10Krp4d.js";import{p as y}from"./datetime-DeBZFhP4.js";import{p as K}from"./contract-DwGPrr_G.js";const m=1e-6;function $(e){return e.some(t=>!!t.transactionType)}function Z(e){return(e.transactionType??"DEBIT").toUpperCase()==="CREDIT"?e.value:-e.value}function R(e){const t=new Map;for(const n of e){const a=n.currencyUnit.id;if(!a)continue;const r=Z(n),s=t.get(a);s?s.net+=r:t.set(a,{net:r,unit:n.currencyUnit})}return t}function L(e){if(e.length===0)return!1;const t=R(e);return t.size===0?!1:[...t.values()].every(n=>Math.abs(n.net)<m)}function F(e,t){const n=new Map;for(const a of e){if(!t(a))continue;const r=a.currencyUnit.id;if(!r)continue;const s=n.get(r);s?s.net+=a.value:n.set(r,{net:a.value,unit:a.currencyUnit})}return n}function Q(e){return F(e,t=>(t.transactionType??"DEBIT").toUpperCase()==="DEBIT")}function x(e){const t=new Map;for(const n of e){const a=n.currencyUnit.id;if(!a)continue;const r=n.reversedPayment?-n.value:n.value,s=t.get(a);s?s.net+=r:t.set(a,{net:r,unit:n.currencyUnit})}return t}function S(e){if(e.length===0)return!1;const t=x(e);return t.size===0?!1:[...t.values()].every(n=>Math.abs(n.net)<m)}function X(e){return F(e,t=>!t.reversedPayment)}function J(e,t){const n=[];for(const a of e){if(a.currencyUnit.id!==t)continue;const r=Math.abs(a.value);r<m||n.some(s=>Math.abs(s-r)<m)||n.push(r)}return n}function U(e){const n=$(e)?Q(e):X(e),a=new Map;for(const s of e){const o=s.currencyUnit.id;o&&a.set(o,s.currencyUnit)}const r=new Map;for(const[s,o]of a){const l=J(e,s);if(l.length!==0)if(l.length===1)r.set(s,{net:l[0],unit:o});else{const u=n.get(s);u&&Math.abs(u.net)>=m&&r.set(s,u)}}return r}function ee(e){const t=[];for(const n of R(e).values())Math.abs(n.net)<m||t.push({signedNet:n.net,unit:n.unit});return t}function Le(e){const t=new Map;for(const n of e)for(const a of n.values){const r=a.currencyUnit.id;r&&t.set(r,a.currencyUnit)}return[...t.values()].sort((n,a)=>n.type!==a.type?n.type==="TIME"?-1:1:n.name.localeCompare(a.name))}var te=(e=>(e.ByStartDate="startDate",e.ByHolder="holder",e))(te||{});const Se={startDate:"Data da reserva",holder:"Titular (A–Z)"};function V(e){const t=Math.abs(Math.round(e)),n=Math.floor(t/60),a=t%60;return n>0&&a>0?`${n}h ${a}m`:n>0?`${n}h`:a>0?`${a}m`:"0m"}function G(e,t){if(t.type==="TIME"){const r=Math.round(e);if(r===0)return"0m";const s=V(r);return r<0?`-${s}`:s}const n=B(Math.abs(e),{useGrouping:!1});if(e<-m)return t.symbolBeforeValue?`-${t.symbol} ${n}`:`-${n} ${t.symbol}`;if(e>m)return t.symbolBeforeValue?`${t.symbol} ${n}`:`${n} ${t.symbol}`;const a=B(0,{useGrouping:!1});return t.symbolBeforeValue?`${t.symbol} ${a}`:`${a} ${t.symbol}`}function ne(e,t){if(t.type==="TIME")return V(e);const n=B(Math.abs(e),{useGrouping:!1});return t.symbolBeforeValue?`${t.symbol} ${n}`:`${n} ${t.symbol}`}function Y(e){return[...U(e.values).values()].map(t=>ne(t.net,t.unit))}function W(e,t){if(L(e.values)){const a=Y(e);return a.length===0?t?"Reserva estornada":"Estornada":t?`Reserva estornada — débitos: ${a.join(" · ")}`:`Estornada · ${a.join(" · ")}`}const n=ee(e.values).map(a=>G(a.signedNet,a.unit));return n.length===0?"Estornada":n.join(" · ")}function q(e,t){if(e.values.length===0)return"—";if(S(e.values)){const a=Y(e);return a.length===0?t?"Reserva estornada":"Estornada":t?`Reserva estornada — débitos: ${a.join(" · ")}`:`Estornada · ${a.join(" · ")}`}const n=[];for(const a of x(e.values).values())Math.abs(a.net)<m||n.push(G(-a.net,a.unit));return n.length===0?t?"Reserva estornada":"Estornada":n.join(" · ")}function Oe(e){return e.values.length===0?"—":$(e.values)?W(e,!1):q(e,!1)}function Pe(e){return e.values.length===0?"—":$(e.values)?W(e,!0):q(e,!0)}const re={day:"numeric",month:"short"},O={hour:"2-digit",minute:"2-digit"};function N(e){return j(e,re).replace(/\./g,"")}function Fe(e,t){const n=y(e),a=y(t);if(!n||!a)return"—";const r=n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()&&n.getDate()===a.getDate(),s=j(n,O),o=j(a,O);return r?`${N(n)} ${s} → ${o}`:`${N(n)} ${s} → ${N(a)} ${o}`}function xe(e){return e.areas.map(t=>t.displayName).join(", ")}function Ve(e){const t=y(e);return t?z(t):""}function Ge(e){return e.type==="TIME"?`${e.name} (minutos)`:`${e.name} (${e.symbol})`}var ae=(e=>(e.All="all",e.ConfirmedOnly="confirmedOnly",e))(ae||{});function Ye(e,t,n){if($(e.values)){if(L(e.values)){const o=U(e.values).get(t);return!o||Math.abs(o.net)<m?null:n.type==="TIME"?Math.round(o.net):o.net}const s=R(e.values).get(t)?.net;return s==null||Math.abs(s)<m?null:n.type==="TIME"?Math.round(s):s}if(S(e.values)){const s=U(e.values).get(t);return!s||Math.abs(s.net)<m?null:n.type==="TIME"?Math.round(s.net):s.net}let a=0;for(const s of e.values)s.currencyUnit.id===t&&(a+=s.reversedPayment?-s.value:s.value);if(Math.abs(a)<m)return null;const r=-a;return n.type==="TIME"?Math.round(r):r}function se(e){return e.replace(/[^\w-]/g,"_")}function We(e){const t=se(e.contractId),a=`reservas_ciclo_${e.periodSegment!=="unknown"?e.periodSegment:e.fallbackMonth&&e.fallbackYear?`${e.fallbackYear}_${String(e.fallbackMonth).padStart(2,"0")}`:"unknown"}_${t}`;return e.mode==="confirmedOnly"?`${a}_confirmadas`:a}function k(e,t){return!e&&!t?0:e?t?e.getTime()-t.getTime():-1:1}function qe(e,t){const n=[...e];return t==="startDate"?(n.sort((a,r)=>{const s=k(y(a.startDate),y(r.startDate));if(s!==0)return s;const o=a.holder.toLowerCase().localeCompare(r.holder.toLowerCase());if(o!==0)return o;const l=(a.holderEmail??"").toLowerCase().localeCompare((r.holderEmail??"").toLowerCase());return l!==0?l:k(y(a.endDate),y(r.endDate))}),n):(n.sort((a,r)=>{const s=a.holder.toLowerCase().localeCompare(r.holder.toLowerCase());if(s!==0)return s;const o=(a.holderEmail??"").toLowerCase().localeCompare((r.holderEmail??"").toLowerCase());if(o!==0)return o;const l=k(y(a.startDate),y(r.startDate));return l!==0?l:k(y(a.endDate),y(r.endDate))}),n)}const ce=`
  query getdashboardcontracts($selecteduserid: uuid!, $selectedworkspaceid: uuid!) {
    __typename
    getdashboardcontracts(
      args: { selecteduserid: $selecteduserid, selectedworkspaceid: $selectedworkspaceid }
    ) {
      __typename
      json
    }
  }
`,oe=`
  query GetContracts($workspaceId: uuid!, $userId: uuid!) {
    __typename
    getassignedcontractsbyuserid(
      args: { selecteduserid: $userId, selectedworkspaceid: $workspaceId }
    ) {
      __typename
      json
    }
  }
`,ie=`
  query GetContractById($id: uuid!) {
    __typename
    getcontractjson(args: { selectedcontractid: $id }) {
      __typename
      json
    }
  }
`,le=`
  query GetContracts($workspaceId: uuid!, $filters: jsonb) {
    __typename
    get_contracts_json(args: { p_workspace_id: $workspaceId, p_filters: $filters }) {
      __typename
      json
    }
  }
`,ue=`
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
`,de=`
  mutation UpdateContractClients($contractId: UUID!, $contractClientItem: ContractClientItemInput!) {
    __typename
    updateContractClients(contractId: $contractId, contractClientItem: $contractClientItem) {
      __typename
      success
      errorMessages
    }
  }
`,me=`
  mutation acceptContract($contractId: UUID!, $fullAccess: Boolean!, $accept: Boolean!) {
    __typename
    acceptContractById(contractId: $contractId, fullAccess: $fullAccess, status: $accept) {
      __typename
      success
      errorMessages
    }
  }
`,pe=`
  mutation DisableContract($contractId: UUID!) {
    __typename
    disableContract(workspaceLinkContractId: $contractId) {
      __typename
      success
      errorMessages
    }
  }
`,ye=`
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
`,fe=`
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
`,Ce=`
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
`,ge=`
  query GetEntriesByCycle($cycleId: uuid!, $workspaceId: uuid!) {
    __typename
    getcyclelinksjson(args: { selectedcycle: $cycleId, selectedworkspace: $workspaceId }) {
      __typename
      json
    }
  }
`,Ie=`
  mutation UpdateCreditsFlags($args: updatecontractcreditflags_args!) {
    __typename
    updatecontractcreditflags(args: $args) {
      __typename
      json
    }
  }
`,we=`
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
`,_e=`
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
`;function c(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function d(e){return Array.isArray(e)?e:[]}function C(e,t=0){if(typeof e=="number"&&Number.isFinite(e))return e;const n=Number(e);return Number.isFinite(n)?n:t}function i(e,t=""){return typeof e=="string"?e:t}function w(e,t=!1){return typeof e=="boolean"?e:t}function D(e){const t=c(e)??{};return{id:i(t.id),type:i(t.type),firstName:t.firstName??null,lastName:t.lastName??null,legalName:t.legalName??null,brandingName:t.brandingName??null,email:t.email??null,phone:t.phone??null}}function he(e){return e?e.type==="PERSON"&&(e.firstName||e.lastName)?[e.firstName,e.lastName].filter(Boolean).join(" ").trim():e.brandingName||e.legalName||e.id||"—":"—"}function A(e,t){return d(e).some(n=>c(n)?.name===t)}function $e(e){const t=c(e)??{},n=c(t.currencyUnit)??{};return{id:i(t.id),value:C(t.value),priority:typeof t.priority=="number"?t.priority:1,currencyUnit:{id:i(n.id),name:i(n.name),type:i(n.type,"TIME"),symbol:i(n.symbol),symbolBeforeValue:w(n.symbolBeforeValue)},overLimitAllowed:t.overLimitAllowed===!0||A(t.flags,"overLimitAllowed"),limitChangeAllowed:A(t.flags,"limitChangeAllowed"),customCreditAllowed:A(t.flags,"customCreditAllowed")}}function T(e){const t=c(e.template)??{},n=d(e.contractCredits).map(r=>c(r)).filter(r=>r!==null).map($e).sort((r,s)=>r.priority-s.priority),a=c(e.generalPreferences);return{id:i(e.id),status:i(e.status),template:{id:i(t.id),name:i(t.name),value:C(t.value),autoRenew:w(t.autoRenew),autoRenewPeriod:t.autoRenewPeriod??null},workspaceClient:D(e.workspaceClient),contractedWorkspace:D(e.workspace??e.contractedWorkspace),contractCredits:n,autoRenewPeriod:e.autoRenewPeriod??null,extendedContractBehaviour:a?a.extendedContractBehaviour??null:null,startDate:e.startDate??null,endDate:e.endDate??null}}function ke(e){const t=c(e.workspace)??{},n=c(e.workspace_link)??{},a=c(e.workspace_link_contract_template),r=c(n.workspace_client)??{},o=d(a?.workspace_link_contract_template_credits).map(u=>c(u)).filter(u=>u!==null).map((u,f)=>({id:u.id,value:u.value,priority:typeof u.priority=="number"?u.priority:f+1,currencyUnit:c(u.currency_unit)??{},overLimitAllowed:u.overLimitAllowed===!0})),l=a?{id:a.id,name:a.name,value:a.value,autoRenew:a.autoRenew}:{id:"",name:"",value:0,autoRenew:!1};return{id:e.id,status:e.status,workspace:t,contractedWorkspace:t,workspaceClient:r,template:l,contractCredits:o,autoRenewPeriod:e.autoRenewPeriod}}function be(e,t={}){if(!Array.isArray(e)||e.length===0)return[];const n=e[0]?.json,a=t.nested?Array.isArray(n)?n:[]:n;if(!Array.isArray(a))return[];const r=[];for(const s of a){if(!s||typeof s!="object")continue;const o=s.jsonb_build_object,l=o&&typeof o=="object"?o:s;r.push(l)}return r}function b(e){const t=c(e)??{};return{id:i(t.id),name:i(t.name),type:i(t.type,"TIME"),value:C(t.value),symbol:i(t.symbol),symbolBeforeValue:w(t.symbolBeforeValue),creditId:t.creditId??null}}function H(e){const t=c(e);if(!t)return null;const n="defaultCredits"in t?d(t.defaultCredits).map(b):[],a="customCredits"in t?d(t.customCredits).map(b):[];return{id:i(t.id),startDate:t.startDate??null,endDate:t.endDate??null,totalCredits:d(t.totalCredits).map(b),consumedCredits:d(t.consumedCredits).map(b),defaultCredits:n,customCredits:a}}function P(e,t){return[e?.trim()??"",t?.trim()??""].filter(Boolean).join(" ")}function De(e){const t=(r,s)=>{const o=r.find(l=>l.id===s);return o?o.value:0},n=r=>e.totalCredits.find(s=>s.id===r)??e.consumedCredits.find(s=>s.id===r)??e.defaultCredits.find(s=>s.id===r)??e.customCredits.find(s=>s.id===r)??null,a=[];for(const r of[e.totalCredits,e.defaultCredits,e.customCredits,e.consumedCredits])for(const s of r)!s.id||a.includes(s.id)||a.push(s.id);return a.map(r=>{const s=n(r),o=s?.name.trim()?s.name:s?.symbol??"Crédito",l=t(e.defaultCredits,r),u=t(e.consumedCredits,r);return{id:r,name:o,type:s?.type??"TIME",symbol:s?.symbol??"",symbolBeforeValue:s?.symbolBeforeValue??!1,renovacao:l,adquiridos:t(e.customCredits,r),total:t(e.totalCredits,r),consumed:u,excedente:Math.max(u-l,0)}})}function Ee(e){const t=c(e)??{},n=c(t.contractcycle)??{},a=c(n.contract),r=c(a?.template),s=c(a?.workspaceClient),o=H(n)??{id:"",startDate:null,endDate:null,totalCredits:[],consumedCredits:[],defaultCredits:[],customCredits:[]},l=i(t.firstName),u=i(t.lastName),f=i(t.brandingName),p=s?D(s):null,E=r?i(r.id):null,v=i(r?.name);let g=f.trim();if(!g){const h=P(p?.firstName,p?.lastName);h&&(g=h)}if(!g){const h=P(l,u);h&&(g=h)}return!g&&p&&(g=(p.brandingName??"").trim()||(p.legalName??"").trim()||he(p)),g||(g="—"),{firstName:l,lastName:u,brandingName:f,startDate:t.startDate??null,cycle:o,contractId:a?i(a.id):null,templateId:E,templateName:v,workspaceClient:p,displayName:g,templateFilterKey:E?.trim()?E:v.trim()?`name:${v}`:"name:",currencyLines:De(o)}}function ve(e){const t=c(e)??{},n=c(t.currency_unit)??{};return{id:i(t.id),value:C(t.value),transactionType:t.type??null,currencyUnit:{id:i(n.id),name:i(n.name),type:i(n.type,"TIME"),symbol:i(n.symbol),symbolBeforeValue:w(n.symbolBeforeValue)},reversedPayment:w(t.reversedPayment)}}function Ne(e){const t=c(e)??{},n=d(t.areaHierarchy).map(s=>c(s)).filter(s=>s!==null).map(s=>({id:i(s.id),name:i(s.name)})),a=i(t.name),r=n.map(s=>s.name).filter(Boolean);return{id:i(t.id),name:a,areaHierarchy:n,displayName:r.length?`${r.join(" > ")} > ${a}`:a}}function Ae(e){const t=c(e)??{},n=d(t.values).map(r=>c(r)).filter(r=>r!==null).map(ve),a=$(n)?L(n):S(n);return{id:i(t.id),holder:i(t.holder),holderEmail:t.holderEmail??null,startDate:t.startDate??null,endDate:t.endDate??null,areas:d(t.areas).map(r=>c(r)).filter(r=>r!==null).map(Ne),values:n,reversedPayment:a}}function Te(e){const t=c(e.workspace_link_contract_template)??c(e.template)??{};return{id:i(e.id),status:i(e.status),priority:typeof e.priority=="number"?e.priority:0,startDate:e.startDate??null,endDate:e.endDate??null,payDay:typeof e.payDay=="number"?e.payDay:null,workspaceClient:D(e.workspace_client),template:{id:i(t.id),name:i(t.name),value:C(t.value),autoRenew:w(t.autoRenew),autoRenewPeriod:t.autoRenewPeriod??null},creditExtension:K(e.contractDetails)}}function M(e,t){if(!e||e.success!==!0){const n=d(e?.errorMessages).map(a=>String(a));throw new Error(n.length?n.join("; "):t)}}const Me={async getDashboardContracts(e){const t=await I(ce,{selecteduserid:e.userId,selectedworkspaceid:e.selectedWorkspaceId},{timeoutMs:45e3}),n=new Map;for(const a of be(t.getdashboardcontracts,{nested:!0})){const r=T(a);r.status==="ACTIVE"&&r.contractedWorkspace.id===e.selectedWorkspaceId&&n.set(r.id,r)}return[...n.values()]},async getAssignedContracts(e){const t=await I(oe,{userId:e.userId,workspaceId:e.workspaceId},{timeoutMs:45e3}),n=d(t.getassignedcontractsbyuserid),r=c(n[0])?.json,s=Array.isArray(r)?r:r?[r]:[],o=new Map;for(const l of s){const u=c(l);if(!u)continue;const f=c(u.jsonb_build_object)??u;try{const p=T(ke(f));if(p.status!=="ACTIVE"&&p.status!=="PENDING")continue;o.set(p.id,p)}catch{continue}}return[...o.values()]},async getContractById(e){if(!e)return null;const t=await I(ie,{id:e}),n=d(t.getcontractjson),a=c(n[0]),r=d(a?.json),s=c(r[0]),o=c(s?.jsonb_build_object);return o?T(o):null},async getContracts(e){if(!e.workspaceId)return[];const t=await I(le,{workspaceId:e.workspaceId,filters:e.filters}),n=d(t.get_contracts_json),a=[];for(const r of n){const s=c(r);if(!s)continue;const o=s.json;let l=null;const u=c(o);if(u)l=u;else if(Array.isArray(o)&&o.length>0){const f=c(o[0]);l=c(f?.jsonb_build_object)??f}if(l)try{a.push(Te(l))}catch{continue}}return a},async getContractDetails(e){const t=await I(ue,{contractId:e}),n=c(t.contractDetails);if(!n)return null;const a=n.success===!0,r=d(n.errorMessages).map(l=>String(l));if(!a&&r.length)throw new Error(r.join("; "));const s=c(n.payload);if(!s)return null;const o=d(s.specificClients).map(l=>c(l)).filter(l=>l!==null).map(l=>{const u=c(l.workspaceClient)??{},f={id:i(u.id),firstName:u.firstName??null,lastName:u.lastName??null,brandingName:u.brandingName??null,legalName:u.legalName??null,type:i(u.type,"PERSON"),email:u.email??null,address:u.address??null,number:u.number??null};return{id:i(l.id),status:i(l.status,"ACTIVE"),workspaceClient:f}});return{fullAccess:w(s.fullAccess),dependentsLimit:typeof s.dependentsLimit=="number"?s.dependentsLimit:-1,extendedContractBehaviour:s.extendedContractBehaviour??"NO_FORCE",specificClients:o}},async updateContractClients(e){const t=await _(de,{contractId:e.contractId,contractClientItem:{fullAccess:e.fullAccess,specificClients:e.specificClients.map(n=>({id:n.id,status:n.status??"ACTIVE"}))}});M(c(t.updateContractClients),"Falha ao salvar dependentes do contrato")},async acceptContractById(e){const t=await _(me,{contractId:e.contractId,fullAccess:e.fullAccess,accept:e.accept});M(c(t.acceptContractById),"Falha ao aceitar/rejeitar contrato")},async disableContract(e){const t=await _(pe,{contractId:e});M(c(t.disableContract),"Falha ao cancelar contrato")},async extendContract(e){const t=l=>String(l).padStart(2,"0"),n=`${e.endDate.getFullYear()}-${t(e.endDate.getMonth()+1)}-${t(e.endDate.getDate())}T00:00:00.000`,a=await _(ye,{inputContractId:e.contractId,inputEndDate:n,inputFlags:{}}),r=d(a.extendcontract),s=c(c(r[0])?.json),o=i(s?.response);if(o&&o!=="OK")throw new Error(o)},async getContractCycles(e){const t=await I(fe,{contractId:e.contractId,workspaceId:e.workspaceId,selectedmonth:e.month??null,selectedyear:e.year??null}),n=d(t.getcyclesjson),a=d(c(n[0])?.json),r=[];for(const s of a){const o=H(c(s)?.contractcycle);o&&r.push(o)}return r},async getContractCycleForMonth(e){const t=await Me.getContractCycles(e);for(const n of t){const a=y(n.startDate);if(a&&a.getMonth()+1===e.month&&a.getFullYear()===e.year)return n}return null},async getWorkspaceCycles(e){if(!e.workspaceId)return[];const t=await I(Ce,{selectedfilters:e.searchQuery?.trim()??"",selectedhascustomcredit:e.onlyCustomCredit?!0:null,selectedhasexceedingconsume:e.onlyExceedingConsume?!0:null,selectediscompany:e.isCompany??!0,selectedisperson:e.isPerson??!0,selectedispersonwithoutcompany:e.isPersonWithoutCompany??!0,selectedmonth:e.month,selectedyear:e.year,selectedworkspaceid:e.workspaceId}),n=d(t.getcyclesjson);return d(c(n[0])?.json).map(r=>c(r)).filter(r=>r!==null).map(Ee)},async getEntriesByCycle(e){if(!e.cycleId||!e.workspaceId)return[];const t=await I(ge,{cycleId:e.cycleId,workspaceId:e.workspaceId}),n=d(t.getcyclelinksjson);return d(c(n[0])?.json).map(r=>c(r)).filter(r=>r!==null).map(Ae)},async updateContractCreditFlags(e){const t=await _(Ie,{args:{selectedworkspaceid:e.workspaceId,selecteduserid:e.userId,selectedcontractcredits:e.credits}}),n=d(t.updatecontractcreditflags),a=c(c(n[0])?.json),r=i(a?.response);if(r!=="OK")throw new Error(r||"Falha ao atualizar flags do crédito")},async getAreaBookingPricingByCurrencyUnit(e){const t=await I(we,{workspaceId:e.workspaceId,currencyUnitId:e.currencyUnitId}),n=c(t.areaBookingPricingByCurrencyUnit);if(!n)return[];const a=d(n.errorMessages).map(r=>String(r));if(n.success!==!0&&a.length)throw new Error(a.join("; "));return d(n.payload).map(r=>c(r)).filter(r=>r!==null).map(r=>{const s=c(r.currency)??{};return{id:i(r.id),name:i(r.name),priceMinute:C(r.priceMinute),priceHour:C(r.priceHour),priceDay:C(r.priceDay),priceWeek:C(r.priceWeek),priceMonth:C(r.priceMonth),priceYear:C(r.priceYear),workspaceId:i(r.workspaceId),currency:{id:i(s.id),name:i(s.name),symbol:i(s.symbol),symbolBeforeValue:w(s.symbolBeforeValue),type:i(s.type,"TIME"),workspaceId:i(s.workspaceId)}}})},async insertCreditOnCycleByContract(e){const t=await _(_e,{contractId:e.contractId,cycleDate:e.cycleDate,currencyUnitId:e.currencyUnitId,value:e.value,userId:e.userId});if(d(t.insertCreditOnCycleByContract).length===0)throw new Error("Resposta inválida ao adicionar créditos")}};export{te as C,Me as a,xe as b,he as c,Pe as d,Se as e,Fe as f,Oe as g,qe as h,ae as i,Le as j,Ve as k,Ye as l,We as m,Ge as x};
