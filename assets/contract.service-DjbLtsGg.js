import{aj as C,Q as S,cR as U,cS as Q,ae as f,S as g,af as w,cT as k,T as Z,cu as X}from"./index-CZ6Aw2iN.js";import{p as ee}from"./contract-DwGPrr_G.js";const y=1e-6;function v(e){return e.some(t=>!!t.transactionType)}function te(e){return(e.transactionType??"DEBIT").toUpperCase()==="CREDIT"?e.value:-e.value}function O(e){const t=new Map;for(const n of e){const a=n.currencyUnit.id;if(!a)continue;const s=te(n),r=t.get(a);r?r.net+=s:t.set(a,{net:s,unit:n.currencyUnit})}return t}function F(e){if(e.length===0)return!1;const t=O(e);return t.size===0?!1:[...t.values()].every(n=>Math.abs(n.net)<y)}function x(e,t){const n=new Map;for(const a of e){if(!t(a))continue;const s=a.currencyUnit.id;if(!s)continue;const r=n.get(s);r?r.net+=a.value:n.set(s,{net:a.value,unit:a.currencyUnit})}return n}function ne(e){return x(e,t=>(t.transactionType??"DEBIT").toUpperCase()==="DEBIT")}function Y(e){const t=new Map;for(const n of e){const a=n.currencyUnit.id;if(!a)continue;const s=n.reversedPayment?-n.value:n.value,r=t.get(a);r?r.net+=s:t.set(a,{net:s,unit:n.currencyUnit})}return t}function P(e){if(e.length===0)return!1;const t=Y(e);return t.size===0?!1:[...t.values()].every(n=>Math.abs(n.net)<y)}function ae(e){return x(e,t=>!t.reversedPayment)}function re(e,t){const n=[];for(const a of e){if(a.currencyUnit.id!==t)continue;const s=Math.abs(a.value);s<y||n.some(r=>Math.abs(r-s)<y)||n.push(s)}return n}function L(e){const n=v(e)?ne(e):ae(e),a=new Map;for(const r of e){const o=r.currencyUnit.id;o&&a.set(o,r.currencyUnit)}const s=new Map;for(const[r,o]of a){const i=re(e,r);if(i.length!==0)if(i.length===1)s.set(r,{net:i[0],unit:o});else{const d=n.get(r);d&&Math.abs(d.net)>=y&&s.set(r,d)}}return s}function se(e){const t=[];for(const n of O(e).values())Math.abs(n.net)<y||t.push({signedNet:n.net,unit:n.unit});return t}function ze(e){const t=new Map;for(const n of e)for(const a of n.values){const s=a.currencyUnit.id;s&&t.set(s,a.currencyUnit)}return[...t.values()].sort((n,a)=>n.type!==a.type?n.type==="TIME"?-1:1:n.name.localeCompare(a.name))}var ce=(e=>(e.ByStartDate="startDate",e.ByHolder="holder",e))(ce||{});const Ke={startDate:"Data da reserva",holder:"Titular (A–Z)"};function J(e){const t=Math.abs(Math.round(e)),n=Math.floor(t/60),a=t%60;return n>0&&a>0?`${n}h ${a}m`:n>0?`${n}h`:a>0?`${a}m`:"0m"}function W(e,t){if(t.type==="TIME"){const s=Math.round(e);if(s===0)return"0m";const r=J(s);return s<0?`-${r}`:r}const n=U(Math.abs(e),{useGrouping:!1});if(e<-y)return t.symbolBeforeValue?`-${t.symbol} ${n}`:`-${n} ${t.symbol}`;if(e>y)return t.symbolBeforeValue?`${t.symbol} ${n}`:`${n} ${t.symbol}`;const a=U(0,{useGrouping:!1});return t.symbolBeforeValue?`${t.symbol} ${a}`:`${a} ${t.symbol}`}function oe(e,t){if(t.type==="TIME")return J(e);const n=U(Math.abs(e),{useGrouping:!1});return t.symbolBeforeValue?`${t.symbol} ${n}`:`${n} ${t.symbol}`}function q(e){return[...L(e.values).values()].map(t=>oe(t.net,t.unit))}function H(e,t){if(F(e.values)){const a=q(e);return a.length===0?t?"Reserva estornada":"Estornada":t?`Reserva estornada — débitos: ${a.join(" · ")}`:`Estornada · ${a.join(" · ")}`}const n=se(e.values).map(a=>W(a.signedNet,a.unit));return n.length===0?"Estornada":n.join(" · ")}function z(e,t){if(e.values.length===0)return"—";if(P(e.values)){const a=q(e);return a.length===0?t?"Reserva estornada":"Estornada":t?`Reserva estornada — débitos: ${a.join(" · ")}`:`Estornada · ${a.join(" · ")}`}const n=[];for(const a of Y(e.values).values())Math.abs(a.net)<y||n.push(W(-a.net,a.unit));return n.length===0?t?"Reserva estornada":"Estornada":n.join(" · ")}function Qe(e){return e.values.length===0?"—":v(e.values)?H(e,!1):z(e,!1)}function Ze(e){return e.values.length===0?"—":v(e.values)?H(e,!0):z(e,!0)}const ie={day:"numeric",month:"short"},G={hour:"2-digit",minute:"2-digit"};function N(e){return S(e,ie).replace(/\./g,"")}function Xe(e,t){const n=C(e),a=C(t);if(!n||!a)return"—";const s=n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()&&n.getDate()===a.getDate(),r=S(n,G),o=S(a,G);return s?`${N(n)} ${r} → ${o}`:`${N(n)} ${r} → ${N(a)} ${o}`}function et(e){return e.areas.map(t=>t.displayName).join(", ")}function tt(e){const t=C(e);return t?Q(t):""}function nt(e){return e.type==="TIME"?`${e.name} (minutos)`:`${e.name} (${e.symbol})`}var le=(e=>(e.All="all",e.ConfirmedOnly="confirmedOnly",e))(le||{});function at(e,t,n){if(v(e.values)){if(F(e.values)){const o=L(e.values).get(t);return!o||Math.abs(o.net)<y?null:n.type==="TIME"?Math.round(o.net):o.net}const r=O(e.values).get(t)?.net;return r==null||Math.abs(r)<y?null:n.type==="TIME"?Math.round(r):r}if(P(e.values)){const r=L(e.values).get(t);return!r||Math.abs(r.net)<y?null:n.type==="TIME"?Math.round(r.net):r.net}let a=0;for(const r of e.values)r.currencyUnit.id===t&&(a+=r.reversedPayment?-r.value:r.value);if(Math.abs(a)<y)return null;const s=-a;return n.type==="TIME"?Math.round(s):s}function de(e){return e.replace(/[^\w-]/g,"_")}function rt(e){const t=de(e.contractId),a=`reservas_ciclo_${e.periodSegment!=="unknown"?e.periodSegment:e.fallbackMonth&&e.fallbackYear?`${e.fallbackYear}_${String(e.fallbackMonth).padStart(2,"0")}`:"unknown"}_${t}`;return e.mode==="confirmedOnly"?`${a}_confirmadas`:a}function D(e,t){return!e&&!t?0:e?t?e.getTime()-t.getTime():-1:1}function st(e,t){const n=[...e];return t==="startDate"?(n.sort((a,s)=>{const r=D(C(a.startDate),C(s.startDate));if(r!==0)return r;const o=a.holder.toLowerCase().localeCompare(s.holder.toLowerCase());if(o!==0)return o;const i=(a.holderEmail??"").toLowerCase().localeCompare((s.holderEmail??"").toLowerCase());return i!==0?i:D(C(a.endDate),C(s.endDate))}),n):(n.sort((a,s)=>{const r=a.holder.toLowerCase().localeCompare(s.holder.toLowerCase());if(r!==0)return r;const o=(a.holderEmail??"").toLowerCase().localeCompare((s.holderEmail??"").toLowerCase());if(o!==0)return o;const i=D(C(a.startDate),C(s.startDate));return i!==0?i:D(C(a.endDate),C(s.endDate))}),n)}const ue=`
  query getdashboardcontracts($selecteduserid: uuid!, $selectedworkspaceid: uuid!) {
    __typename
    getdashboardcontracts(
      args: { selecteduserid: $selecteduserid, selectedworkspaceid: $selectedworkspaceid }
    ) {
      __typename
      json
    }
  }
`,me=`
  query GetContracts($workspaceId: uuid!, $userId: uuid!) {
    __typename
    getassignedcontractsbyuserid(
      args: { selecteduserid: $userId, selectedworkspaceid: $workspaceId }
    ) {
      __typename
      json
    }
  }
`,pe=`
  query GetContractById($id: uuid!) {
    __typename
    getcontractjson(args: { selectedcontractid: $id }) {
      __typename
      json
    }
  }
`,ye=`
  mutation GetContractById($id: String!) {
    __typename
    prod_getcontractjson(selectedcontractid: $id) {
      __typename
      json
    }
  }
`,$={endpoint:Z.hailaJavaGraphqlEndpoint},fe=`
  query FnContracts($workspaceId: String!, $filters: Any) {
    __typename
    fn_get_contracts_json(workspaceId: $workspaceId, filters: $filters) {
      __typename
      json
    }
  }
`,Ce=`
  mutation GetDashboardContracts($selecteduserid: String!, $selectedworkspaceid: String!) {
    __typename
    prod_getdashboardcontracts(
      selecteduserid: $selecteduserid
      selectedworkspaceid: $selectedworkspaceid
    ) {
      __typename
      json
    }
  }
`,_e=`
  mutation GetContracts($userId: String!, $workspaceId: String!) {
    __typename
    prod_getassignedcontractsbyuserid(
      selecteduserid: $userId
      selectedworkspaceid: $workspaceId
    ) {
      __typename
      json
    }
  }
`,ge=`
  query GetContracts($workspaceId: uuid!, $filters: jsonb) {
    __typename
    get_contracts_json(args: { p_workspace_id: $workspaceId, p_filters: $filters }) {
      __typename
      json
    }
  }
`,Ie=`
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
`,we=`
  mutation UpdateContractClients($contractId: UUID!, $contractClientItem: ContractClientItemInput!) {
    __typename
    updateContractClients(contractId: $contractId, contractClientItem: $contractClientItem) {
      __typename
      success
      errorMessages
    }
  }
`,$e=`
  mutation acceptContract($contractId: UUID!, $fullAccess: Boolean!, $accept: Boolean!) {
    __typename
    acceptContractById(contractId: $contractId, fullAccess: $fullAccess, status: $accept) {
      __typename
      success
      errorMessages
    }
  }
`,he=`
  mutation DisableContract($contractId: UUID!) {
    __typename
    disableContract(workspaceLinkContractId: $contractId) {
      __typename
      success
      errorMessages
    }
  }
`,ke=`
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
`,be=`
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
`,Ee=`
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
`,Ae=`
  query GetWorkspaceCycles(
    $selectedfilters: String
    $selectedhascustomcredit: Boolean
    $selectedhasexceedingconsume: Boolean
    $selectediscompany: Boolean
    $selectedisperson: Boolean
    $selectedispersonwithoutcompany: Boolean
    $selectedmonth: Int
    $selectedyear: Int
    $selectedworkspaceid: String
  ) {
    __typename
    prod_getcyclesjson(
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
    ) {
      __typename
      json
    }
  }
`,ve=`
  query GetEntriesByCycle($cycleId: uuid!, $workspaceId: uuid!) {
    __typename
    getcyclelinksjson(args: { selectedcycle: $cycleId, selectedworkspace: $workspaceId }) {
      __typename
      json
    }
  }
`,De=`
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
`,Te=`
  mutation GetEntriesByCycle($cycleId: String!, $workspaceId: String!) {
    __typename
    prod_getcyclelinksjson(selectedcycle: $cycleId, selectedworkspace: $workspaceId) {
      __typename
      json
    }
  }
`,je=`
  mutation UpdateCreditsFlags($args: updatecontractcreditflags_args!) {
    __typename
    updatecontractcreditflags(args: $args) {
      __typename
      json
    }
  }
`,Ne=`
  mutation ExtendContract($inputContractId: String!, $inputEndDate: String!, $inputFlags: Any) {
    __typename
    prod_extendcontract(
      inputcontractid: $inputContractId
      inputenddate: $inputEndDate
      inputflags: $inputFlags
    ) {
      __typename
      json
    }
  }
`,Be=`
  mutation UpdateCreditsFlags($workspaceId: String!, $userId: String!, $credits: Any!) {
    __typename
    prod_updatecontractcreditflags(
      selectedworkspaceid: $workspaceId
      selecteduserid: $userId
      selectedcontractcredits: $credits
    ) {
      __typename
      json
    }
  }
`,Me=`
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
`,Re=`
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
`;function c(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function u(e){return Array.isArray(e)?e:[]}function _(e,t=0){if(typeof e=="number"&&Number.isFinite(e))return e;const n=Number(e);return Number.isFinite(n)?n:t}function l(e,t=""){return typeof e=="string"?e:t}function b(e,t=!1){return typeof e=="boolean"?e:t}function j(e){const t=c(e)??{};return{id:l(t.id),type:l(t.type),firstName:t.firstName??null,lastName:t.lastName??null,legalName:t.legalName??null,brandingName:t.brandingName??null,email:t.email??null,phone:t.phone??null}}function Se(e){return e?e.type==="PERSON"&&(e.firstName||e.lastName)?[e.firstName,e.lastName].filter(Boolean).join(" ").trim():e.brandingName||e.legalName||e.id||"—":"—"}function B(e,t){return u(e).some(n=>c(n)?.name===t)}function Ue(e){const t=c(e)??{},n=c(t.currencyUnit)??{};return{id:l(t.id),value:_(t.value),priority:typeof t.priority=="number"?t.priority:1,currencyUnit:{id:l(n.id),name:l(n.name),type:l(n.type,"TIME"),symbol:l(n.symbol),symbolBeforeValue:b(n.symbolBeforeValue)},overLimitAllowed:t.overLimitAllowed===!0||B(t.flags,"overLimitAllowed"),limitChangeAllowed:B(t.flags,"limitChangeAllowed"),customCreditAllowed:B(t.flags,"customCreditAllowed")}}function M(e){const t=c(e.template)??{},n=u(e.contractCredits).map(s=>c(s)).filter(s=>s!==null).map(Ue).sort((s,r)=>s.priority-r.priority),a=c(e.generalPreferences);return{id:l(e.id),status:l(e.status),template:{id:l(t.id),name:l(t.name),value:_(t.value),autoRenew:b(t.autoRenew),autoRenewPeriod:t.autoRenewPeriod??null},workspaceClient:j(e.workspaceClient),contractedWorkspace:j(e.workspace??e.contractedWorkspace),contractCredits:n,autoRenewPeriod:e.autoRenewPeriod??null,extendedContractBehaviour:a?a.extendedContractBehaviour??null:null,startDate:e.startDate??null,endDate:e.endDate??null}}function Le(e){const t=c(e.workspace)??{},n=c(e.workspace_link)??{},a=c(e.workspace_link_contract_template),s=c(n.workspace_client)??{},o=u(a?.workspace_link_contract_template_credits).map(d=>c(d)).filter(d=>d!==null).map((d,p)=>({id:d.id,value:d.value,priority:typeof d.priority=="number"?d.priority:p+1,currencyUnit:c(d.currency_unit)??{},overLimitAllowed:d.overLimitAllowed===!0})),i=a?{id:a.id,name:a.name,value:a.value,autoRenew:a.autoRenew}:{id:"",name:"",value:0,autoRenew:!1};return{id:e.id,status:e.status,workspace:t,contractedWorkspace:t,workspaceClient:s,template:i,contractCredits:o,autoRenewPeriod:e.autoRenewPeriod}}function Oe(e,t={}){if(!Array.isArray(e)||e.length===0)return[];const n=e[0]?.json,a=t.nested?Array.isArray(n)?n:[]:n;if(!Array.isArray(a))return[];const s=[];for(const r of a){if(!r||typeof r!="object")continue;const o=r.jsonb_build_object,i=o&&typeof o=="object"?o:r;s.push(i)}return s}function T(e){const t=c(e)??{};return{id:l(t.id),name:l(t.name),type:l(t.type,"TIME"),value:_(t.value),symbol:l(t.symbol),symbolBeforeValue:b(t.symbolBeforeValue),creditId:t.creditId??null}}function K(e){const t=c(e);if(!t)return null;const n="defaultCredits"in t?u(t.defaultCredits).map(T):[],a="customCredits"in t?u(t.customCredits).map(T):[];return{id:l(t.id),startDate:t.startDate??null,endDate:t.endDate??null,totalCredits:u(t.totalCredits).map(T),consumedCredits:u(t.consumedCredits).map(T),defaultCredits:n,customCredits:a}}function V(e,t){return[e?.trim()??"",t?.trim()??""].filter(Boolean).join(" ")}function Fe(e){const t=(s,r)=>{const o=s.find(i=>i.id===r);return o?o.value:0},n=s=>e.totalCredits.find(r=>r.id===s)??e.consumedCredits.find(r=>r.id===s)??e.defaultCredits.find(r=>r.id===s)??e.customCredits.find(r=>r.id===s)??null,a=[];for(const s of[e.totalCredits,e.defaultCredits,e.customCredits,e.consumedCredits])for(const r of s)!r.id||a.includes(r.id)||a.push(r.id);return a.map(s=>{const r=n(s),o=r?.name.trim()?r.name:r?.symbol??"Crédito",i=t(e.defaultCredits,s),d=t(e.consumedCredits,s);return{id:s,name:o,type:r?.type??"TIME",symbol:r?.symbol??"",symbolBeforeValue:r?.symbolBeforeValue??!1,renovacao:i,adquiridos:t(e.customCredits,s),total:t(e.totalCredits,s),consumed:d,excedente:Math.max(d-i,0)}})}function Pe(e){const t=c(e)??{},n=c(t.contractcycle)??{},a=c(n.contract),s=c(a?.template),r=c(a?.workspaceClient),o=K(n)??{id:"",startDate:null,endDate:null,totalCredits:[],consumedCredits:[],defaultCredits:[],customCredits:[]},i=l(t.firstName),d=l(t.lastName),p=l(t.brandingName),m=r?j(r):null,E=s?l(s.id):null,h=l(s?.name);let I=p.trim();if(!I){const A=V(m?.firstName,m?.lastName);A&&(I=A)}if(!I){const A=V(i,d);A&&(I=A)}return!I&&m&&(I=(m.brandingName??"").trim()||(m.legalName??"").trim()||Se(m)),I||(I="—"),{firstName:i,lastName:d,brandingName:p,startDate:t.startDate??null,cycle:o,contractId:a?l(a.id):null,templateId:E,templateName:h,workspaceClient:m,displayName:I,templateFilterKey:E?.trim()?E:h.trim()?`name:${h}`:"name:",currencyLines:Fe(o)}}function Ge(e){const t=c(e)??{},n=c(t.currency_unit)??{};return{id:l(t.id),value:_(t.value),transactionType:t.type??null,currencyUnit:{id:l(n.id),name:l(n.name),type:l(n.type,"TIME"),symbol:l(n.symbol),symbolBeforeValue:b(n.symbolBeforeValue)},reversedPayment:b(t.reversedPayment)}}function Ve(e){const t=c(e)??{},n=u(t.areaHierarchy).map(r=>c(r)).filter(r=>r!==null).map(r=>({id:l(r.id),name:l(r.name)})),a=l(t.name),s=n.map(r=>r.name).filter(Boolean);return{id:l(t.id),name:a,areaHierarchy:n,displayName:s.length?`${s.join(" > ")} > ${a}`:a}}function xe(e){const t=c(e)??{},n=u(t.values).map(s=>c(s)).filter(s=>s!==null).map(Ge),a=v(n)?F(n):P(n);return{id:l(t.id),holder:l(t.holder),holderEmail:t.holderEmail??null,startDate:t.startDate??null,endDate:t.endDate??null,areas:u(t.areas).map(s=>c(s)).filter(s=>s!==null).map(Ve),values:n,reversedPayment:a}}function Ye(e){const t=c(e.workspace_link_contract_template)??c(e.template)??{};return{id:l(e.id),status:l(e.status),priority:typeof e.priority=="number"?e.priority:0,startDate:e.startDate??null,endDate:e.endDate??null,payDay:typeof e.payDay=="number"?e.payDay:null,workspaceClient:j(e.workspace_client),template:{id:l(t.id),name:l(t.name),value:_(t.value),autoRenew:b(t.autoRenew),autoRenewPeriod:t.autoRenewPeriod??null},creditExtension:ee(e.contractDetails)}}function R(e,t){if(!e||e.success!==!0){const n=u(e?.errorMessages).map(a=>String(a));throw new Error(n.length?n.join("; "):t)}}const Je={async getDashboardContracts(e){const t={selecteduserid:e.userId,selectedworkspaceid:e.selectedWorkspaceId},n=w(k)==="java",a=n?await f(Ce,t,{...$,timeoutMs:45e3}):await g(ue,t,{timeoutMs:45e3}),s=n?a.prod_getdashboardcontracts:a.getdashboardcontracts,r=new Map;for(const o of Oe(s,{nested:!0})){const i=M(o);i.status==="ACTIVE"&&i.contractedWorkspace.id===e.selectedWorkspaceId&&r.set(i.id,i)}return[...r.values()]},async getAssignedContracts(e){const t={userId:e.userId,workspaceId:e.workspaceId},n=w(k)==="java",a=n?await f(_e,t,{...$,timeoutMs:45e3}):await g(me,t,{timeoutMs:45e3}),s=u(n?a.prod_getassignedcontractsbyuserid:a.getassignedcontractsbyuserid),o=c(s[0])?.json,i=Array.isArray(o)?o:o?[o]:[],d=new Map;for(const p of i){const m=c(p);if(!m)continue;const E=c(m.jsonb_build_object)??m;try{const h=M(Le(E));if(h.status!=="ACTIVE"&&h.status!=="PENDING")continue;d.set(h.id,h)}catch{continue}}return[...d.values()]},async getContractById(e,t){if(!e)return null;const n=w(k,t)==="java",a=n?await f(ye,{id:e},$):await g(pe,{id:e}),s=u(n?a.prod_getcontractjson:a.getcontractjson),r=c(s[0]),o=u(r?.json),i=c(o[0]),d=c(i?.jsonb_build_object);return d?M(d):null},async getContracts(e){if(!e.workspaceId)return[];const t=w(X)==="java",n=t?await g(fe,{workspaceId:e.workspaceId,filters:e.filters},$):await g(ge,{workspaceId:e.workspaceId,filters:e.filters}),a=u(t?n.fn_get_contracts_json:n.get_contracts_json),s=[];for(const r of a){const o=c(r);if(!o)continue;const i=o.json;let d=null;const p=c(i);if(p)d=p;else if(Array.isArray(i)&&i.length>0){const m=c(i[0]);d=c(m?.jsonb_build_object)??m}if(d)try{s.push(Ye(d))}catch{continue}}return s},async getContractDetails(e){const t=await g(Ie,{contractId:e}),n=c(t.contractDetails);if(!n)return null;const a=n.success===!0,s=u(n.errorMessages).map(i=>String(i));if(!a&&s.length){const i=s.join("; ");if(/general preference( item)? not found/i.test(i))return{fullAccess:!1,dependentsLimit:-1,extendedContractBehaviour:"NO_FORCE",specificClients:[]};throw new Error(i)}const r=c(n.payload);if(!r)return null;const o=u(r.specificClients).map(i=>c(i)).filter(i=>i!==null).map(i=>{const d=c(i.workspaceClient)??{},p={id:l(d.id),firstName:d.firstName??null,lastName:d.lastName??null,brandingName:d.brandingName??null,legalName:d.legalName??null,type:l(d.type,"PERSON"),email:d.email??null,address:d.address??null,number:d.number??null};return{id:l(i.id),status:l(i.status,"ACTIVE"),workspaceClient:p}});return{fullAccess:b(r.fullAccess),dependentsLimit:typeof r.dependentsLimit=="number"?r.dependentsLimit:-1,extendedContractBehaviour:r.extendedContractBehaviour??"NO_FORCE",specificClients:o}},async updateContractClients(e){const t=await f(we,{contractId:e.contractId,contractClientItem:{fullAccess:e.fullAccess,specificClients:e.specificClients.map(n=>({id:n.id,status:n.status??"ACTIVE"}))}});R(c(t.updateContractClients),"Falha ao salvar dependentes do contrato")},async acceptContractById(e){const t=await f($e,{contractId:e.contractId,fullAccess:e.fullAccess,accept:e.accept});R(c(t.acceptContractById),"Falha ao aceitar/rejeitar contrato")},async disableContract(e){const t=await f(he,{contractId:e});R(c(t.disableContract),"Falha ao cancelar contrato")},async extendContract(e){const t=p=>String(p).padStart(2,"0"),n=`${e.endDate.getFullYear()}-${t(e.endDate.getMonth()+1)}-${t(e.endDate.getDate())}T00:00:00.000`,a={inputContractId:e.contractId,inputEndDate:n,inputFlags:{}},s=w(k,e.mode)==="java",r=s?await f(Ne,a,$):await f(ke,a),o=u(s?r.prod_extendcontract:r.extendcontract),i=c(c(o[0])?.json),d=l(i?.response);if(d&&d!=="OK")throw new Error(d)},async getContractCycles(e){const t={contractId:e.contractId,workspaceId:e.workspaceId,selectedmonth:e.month??null,selectedyear:e.year??null},n=w(k,e.mode)==="java",a=await g(n?De:be,t,n?$:{}),s=u(n?a.prod_getcyclesjson:a.getcyclesjson),r=u(c(s[0])?.json),o=[];for(const i of r){const d=K(c(i)?.contractcycle);d&&o.push(d)}return o},async getContractCycleForMonth(e){const t=await Je.getContractCycles(e);for(const n of t){const a=C(n.startDate);if(a&&a.getMonth()+1===e.month&&a.getFullYear()===e.year)return n}return null},async getWorkspaceCycles(e){if(!e.workspaceId)return[];const t=w(k)==="java",n=await g(t?Ae:Ee,{selectedfilters:e.searchQuery?.trim()??"",selectedhascustomcredit:e.onlyCustomCredit?!0:null,selectedhasexceedingconsume:e.onlyExceedingConsume?!0:null,selectediscompany:e.isCompany??!0,selectedisperson:e.isPerson??!0,selectedispersonwithoutcompany:e.isPersonWithoutCompany??!0,selectedmonth:e.month,selectedyear:e.year,selectedworkspaceid:e.workspaceId},t?$:void 0),a=u(t?n.prod_getcyclesjson:n.getcyclesjson);return u(c(a[0])?.json).map(r=>c(r)).filter(r=>r!==null).map(Pe)},async getEntriesByCycle(e){if(!e.cycleId||!e.workspaceId)return[];const t={cycleId:e.cycleId,workspaceId:e.workspaceId},n=w(k,e.mode)==="java",a=n?await f(Te,t,$):await g(ve,t),s=u(n?a.prod_getcyclelinksjson:a.getcyclelinksjson);return u(c(s[0])?.json).map(o=>c(o)).filter(o=>o!==null).map(xe)},async updateContractCreditFlags(e){const t=w(k,e.mode)==="java",n=t?await f(Be,{workspaceId:e.workspaceId,userId:e.userId,credits:e.credits},$):await f(je,{args:{selectedworkspaceid:e.workspaceId,selecteduserid:e.userId,selectedcontractcredits:e.credits}}),a=u(t?n.prod_updatecontractcreditflags:n.updatecontractcreditflags),s=c(c(a[0])?.json),r=l(s?.response);if(r!=="OK")throw new Error(r||"Falha ao atualizar flags do crédito")},async getAreaBookingPricingByCurrencyUnit(e){const t=await g(Me,{workspaceId:e.workspaceId,currencyUnitId:e.currencyUnitId}),n=c(t.areaBookingPricingByCurrencyUnit);if(!n)return[];const a=u(n.errorMessages).map(s=>String(s));if(n.success!==!0&&a.length)throw new Error(a.join("; "));return u(n.payload).map(s=>c(s)).filter(s=>s!==null).map(s=>{const r=c(s.currency)??{};return{id:l(s.id),name:l(s.name),priceMinute:_(s.priceMinute),priceHour:_(s.priceHour),priceDay:_(s.priceDay),priceWeek:_(s.priceWeek),priceMonth:_(s.priceMonth),priceYear:_(s.priceYear),workspaceId:l(s.workspaceId),currency:{id:l(r.id),name:l(r.name),symbol:l(r.symbol),symbolBeforeValue:b(r.symbolBeforeValue),type:l(r.type,"TIME"),workspaceId:l(r.workspaceId)}}})},async insertCreditOnCycleByContract(e){const t=await f(Re,{contractId:e.contractId,cycleDate:e.cycleDate,currencyUnitId:e.currencyUnitId,value:e.value,userId:e.userId});if(u(t.insertCreditOnCycleByContract).length===0)throw new Error("Resposta inválida ao adicionar créditos")}};export{ce as C,et as a,Se as b,Je as c,Ze as d,Ke as e,Xe as f,Qe as g,st as h,le as i,ze as j,tt as k,at as l,rt as m,nt as x};
