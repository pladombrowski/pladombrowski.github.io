import{aa as p,E as y}from"./index-t10Krp4d.js";import{c as d}from"./contract-CJ1hGS16.js";const u=`
  query GetContractTemplatesByWorkspaceId($workspaceId: UUID!) {
    __typename
    workspace_link_contract_template: contractTemplateByWorkspaceId(
      workspaceId: $workspaceId
    ) {
      __typename
      id
      name
      payDay
      workspace_link_contract_cycle_type: cycleType {
        __typename
        id
        name
      }
      workspace_link_contract_payment_type: paymentType {
        __typename
        id
        name
      }
      workspace_link_contract_template_credits: workspaceLinkContractTemplateCredits {
        __typename
        id
        value
        overLimitAllowed
        priority
        flags {
          __typename
          id
          name
        }
        currency_unit: currencyUnit {
          __typename
          id
          name
          symbol
          symbolBeforeValue
          type
          workspaceId
        }
      }
    }
  }
`,_=`
  query GetPaymentAndCycleTypes($workspaceId: UUID!) {
    __typename
    workspace_link_contract_cycle_type: workspaceLinkContractCycleTypes {
      __typename
      id
      name
    }
    workspace_link_contract_payment_type: workspaceLinkContractPaymentTypes {
      __typename
      id
      name
    }
    currency_unit: currencyUnitByWorkspaceId(workspaceId: $workspaceId) {
      __typename
      id
      type
      symbolBeforeValue
      name
      symbol
      workspaceId
    }
  }
`,T=`
  mutation SetCurrencyUnit($input: CurrencyUnitInput_CoreInput!) {
    setCurrencyUnit(input: $input) {
      success
      errorMessages
      payload {
        id
        name
        symbol
        type
        workspaceId
        symbolBeforeValue
      }
    }
  }
`,f=`
  mutation CreateContractTemplate($args: createcontracttemplate_args!) {
    __typename
    createcontracttemplate(args: $args) {
      __typename
      json
    }
  }
`,C=`
  mutation UpdateContractTemplate(
    $contractTemplateId: UUID!
    $name: String!
    $status: String!
  ) {
    __typename
    updateContractTemplate_CORE(
      input: { contractTemplateId: $contractTemplateId, name: $name, status: $status }
    ) {
      __typename
      success
      errorMessages
    }
  }
`,w=`
  mutation UpdateCreditTemplate($input: UpdateCreditTemplateInput!) {
    __typename
    updateCreditTemplate_CORE(input: $input) {
      __typename
      success
    }
  }
`,k=`
  mutation CreateContract($args: createcontractbytemplate_args!) {
    __typename
    createcontractbytemplate(args: $args) {
      __typename
      json
    }
  }
`,h={day:"Dias",month:"Meses",year:"Anos"};function E(e,t){return e<1?1:t==="day"?e:t==="month"?Math.round(e*365/12):e*365}function R(e){const t=new Date;t.setSeconds(0,0);const a=new Date(t.getTime()+1440*60*1e3);return{template:e,mode:"duration",durationAmount:24,durationUnit:"month",fixedStart:t,fixedEnd:a}}function S(e){return e.mode==="fixedDate"?{templateId:e.template.id,startDate:e.fixedStart.toISOString(),endDate:e.fixedEnd.toISOString(),expirationPeriod:null,expireAfter:null}:{templateId:e.template.id,startDate:null,endDate:null,expirationPeriod:"DAY",expireAfter:String(E(e.durationAmount,e.durationUnit))}}function n(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function i(e){return Array.isArray(e)?e:[]}function r(e,t=""){return typeof e=="string"?e:t}function l(e,t){return i(e).some(a=>n(a)?.name===t)}function I(e){const t=n(e.currency_unit);return{id:r(e.id),value:typeof e.value=="number"?e.value:0,overLimitAllowed:e.overLimitAllowed===!0||l(e.flags,"overLimitAllowed"),priority:typeof e.priority=="number"?e.priority:1,limitChangeAllowed:l(e.flags,"limitChangeAllowed"),customCreditAllowed:l(e.flags,"customCreditAllowed"),currencyUnit:{id:r(t?.id),name:r(t?.name),symbol:r(t?.symbol),symbolBeforeValue:t?.symbolBeforeValue===!0,type:r(t?.type,"TIME")}}}function A(e){const t=n(e.workspace_link_contract_cycle_type),a=n(e.workspace_link_contract_payment_type),o=i(e.workspace_link_contract_template_credits).map(s=>n(s)).filter(s=>s!==null).map(I);return{id:r(e.id),name:r(e.name),payDay:typeof e.payDay=="number"?e.payDay:null,cycleType:t?{id:r(t.id),name:r(t.name)}:null,paymentType:a?{id:r(a.id),name:r(a.name)}:null,credits:o}}function m(e){return{id:r(e.id),name:r(e.name),type:r(e.type,"TIME"),symbol:r(e.symbol),symbolBeforeValue:e.symbolBeforeValue===!0}}const g="f7c82d0c-f948-4db4-9a37-4ae7e2c917c9",b="af68bdf7-4f60-4243-a6fb-961626ab32b3";function P(e){return e.cycleTypes.find(t=>t.id===g||t.name.toUpperCase().includes("MONTH")||t.name.toUpperCase().includes("MENS"))??e.cycleTypes[0]??null}function M(e){return e.paymentTypes.find(t=>t.id===b)??e.paymentTypes[0]??null}function L(e,t){return`PT${e*(t==="Dias"?86400:2592e3)}S`}const $={async getContractTemplatesByWorkspaceId(e){if(!e)return[];const t=await y(u,{workspaceId:e});return Array.isArray(t.workspace_link_contract_template)?t.workspace_link_contract_template.map(a=>n(a)).filter(a=>a!==null).map(A).filter(a=>a.id!==""):[]},async getPaymentAndCycleTypesByWorkspaceId(e){if(!e)return{cycleTypes:[],paymentTypes:[],currencyUnits:[]};const t=await y(_,{workspaceId:e});return{cycleTypes:i(t.workspace_link_contract_cycle_type).map(a=>n(a)).filter(a=>a!==null).map(a=>({id:r(a.id),name:r(a.name)})),paymentTypes:i(t.workspace_link_contract_payment_type).map(a=>n(a)).filter(a=>a!==null).map(a=>({id:r(a.id),name:r(a.name)})),currencyUnits:i(t.currency_unit).map(a=>n(a)).filter(a=>a!==null).map(m)}},async setCurrencyUnit(e){const t=await p(T,{input:{name:e.name,symbol:e.symbol,type:e.type,workspaceId:e.workspaceId,symbolBeforeValue:e.symbolBeforeValue}}),a=n(t.setCurrencyUnit);if(!a)throw new Error("Resposta inválida ao criar moeda");if(a.success!==!0){const o=i(a.errorMessages).map(s=>String(s));throw new Error(o.length?o.join(`
`):"Falha ao criar moeda")}const c=n(a.payload);if(!c)throw new Error("Resposta inválida ao criar moeda");return m(c)},async createContractTemplate(e){const t=await p(f,{args:{inputworkspaceid:e.workspaceId,inputvalue:0,inputcycletypeid:e.cycleTypeId,inputpaymenttypeid:e.paymentTypeId,inputpayday:e.payDay,inputname:e.name,inputautorenew:e.autoRenew,inputautorenewmeasure:e.autoRenewMeasure,inputmode:e.mode,inputcredits:JSON.stringify(e.credits),dependentslimit:e.dependentsLimit,extendedcontractbehaviour:e.extendedContractBehaviour}}),a=i(t.createcontracttemplate),c=n(n(a[0])?.json);if(!c)throw new Error("Resposta inválida ao criar modelo de contrato");const o=r(c.response);if(o!=="OK")throw new Error(o||"Falha ao criar modelo de contrato");const s=r(c.id);if(!s)throw new Error("Resposta inválida ao criar modelo de contrato");return s},async updateContractTemplate(e){const t=await p(C,{contractTemplateId:e.contractTemplateId,name:e.name,status:e.status}),a=n(t.updateContractTemplate_CORE);if(a?.success!==!0){const c=i(a?.errorMessages).map(o=>String(o));throw new Error(c.length?c.join(`
`):"Falha ao atualizar modelo de contrato")}},async updateCreditTemplate(e){const t={workspaceLinkContractTemplateCreditId:e.workspaceLinkContractTemplateCreditId,newStatus:e.newStatus??"ACTIVE"};e.creditValue!=null&&(t.creditValue=e.creditValue),e.removalType&&(t.removalType=e.removalType);const a=await p(w,{input:t});if(n(a.updateCreditTemplate_CORE)?.success!==!0)throw new Error("Falha ao atualizar crédito do modelo")},async createContractByTemplate(e){const t=await p(k,{args:{inputstartdate:d(e.startDate),inputenddate:d(e.endDate),inputtemplateid:e.templateId,inputresponsibleworkspaceid:e.responsibleWorkspaceId,inputclientworkspaceid:e.clientWorkspaceId,inputloggeduser:e.loggedUserId,inputpriority:e.priority}}),a=i(t.createcontractbytemplate),c=n(n(a[0])?.json);if(c){const o=r(c.response);if(o&&o!=="OK")throw new Error(o);const s=r(c.id);if(s)return s}throw new Error("Resposta inválida ao criar contrato")}};export{h as C,S as a,M as b,$ as c,R as d,L as e,P as r};
