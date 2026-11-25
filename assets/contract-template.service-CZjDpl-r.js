import{ae as s,T as f,S as y,af as m,cN as _}from"./index-DwA1oRma.js";import{c as T}from"./contract-Dd68836C.js";const k=`
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
`,g=`
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
`,A=`
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
`,E=`
  mutation CreateContractTemplate($args: createcontracttemplate_args!) {
    __typename
    createcontracttemplate(args: $args) {
      __typename
      json
    }
  }
`,$=`
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
`,I=`
  mutation UpdateCreditTemplate($input: UpdateCreditTemplateInput!) {
    __typename
    updateCreditTemplate_CORE(input: $input) {
      __typename
      success
    }
  }
`,b=`
  mutation CreateContract($args: createcontractbytemplate_args!) {
    __typename
    createcontractbytemplate(args: $args) {
      __typename
      json
    }
  }
`,S=`
  mutation CreateContractTemplate(
    $inputworkspaceid: String!
    $inputvalue: Float!
    $inputcycletypeid: String!
    $inputpaymenttypeid: String!
    $inputpayday: Int!
    $inputname: String!
    $inputmode: String!
    $inputcredits: String!
    $inputautorenew: Boolean!
    $inputautorenewmeasure: String!
    $extendedcontractbehaviour: String!
    $dependentslimit: Int!
  ) {
    __typename
    prod_createcontracttemplate(
      inputworkspaceid: $inputworkspaceid
      inputvalue: $inputvalue
      inputcycletypeid: $inputcycletypeid
      inputpaymenttypeid: $inputpaymenttypeid
      inputpayday: $inputpayday
      inputname: $inputname
      inputmode: $inputmode
      inputcredits: $inputcredits
      inputautorenew: $inputautorenew
      inputautorenewmeasure: $inputautorenewmeasure
      extendedcontractbehaviour: $extendedcontractbehaviour
      dependentslimit: $dependentslimit
    ) {
      __typename
      json
    }
  }
`,h=`
  mutation CreateContract(
    $inputtemplateid: String!
    $inputstartdate: String!
    $inputenddate: String!
    $inputclientworkspaceid: String!
    $inputresponsibleworkspaceid: String!
    $inputloggeduser: String!
    $inputpriority: Int!
  ) {
    __typename
    prod_createcontractbytemplate(
      inputtemplateid: $inputtemplateid
      inputstartdate: $inputstartdate
      inputenddate: $inputenddate
      inputclientworkspaceid: $inputclientworkspaceid
      inputresponsibleworkspaceid: $inputresponsibleworkspaceid
      inputloggeduser: $inputloggeduser
      inputpriority: $inputpriority
    ) {
      __typename
      json
    }
  }
`,w={endpoint:f.hailaJavaGraphqlEndpoint},O={day:"Dias",month:"Meses",year:"Anos"};function U(e,t){return e<1?1:t==="day"?e:t==="month"?Math.round(e*365/12):e*365}function B(e){const t=new Date;t.setSeconds(0,0);const a=new Date(t.getTime()+1440*60*1e3);return{template:e,mode:"duration",durationAmount:24,durationUnit:"month",fixedStart:t,fixedEnd:a}}function N(e){return e.mode==="fixedDate"?{templateId:e.template.id,startDate:e.fixedStart.toISOString(),endDate:e.fixedEnd.toISOString(),expirationPeriod:null,expireAfter:null}:{templateId:e.template.id,startDate:null,endDate:null,expirationPeriod:"DAY",expireAfter:String(U(e.durationAmount,e.durationUnit))}}function r(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function c(e){return Array.isArray(e)?e:[]}function n(e,t=""){return typeof e=="string"?e:t}function l(e,t){return c(e).some(a=>r(a)?.name===t)}function D(e){const t=r(e.currency_unit);return{id:n(e.id),value:typeof e.value=="number"?e.value:0,overLimitAllowed:e.overLimitAllowed===!0||l(e.flags,"overLimitAllowed"),priority:typeof e.priority=="number"?e.priority:1,limitChangeAllowed:l(e.flags,"limitChangeAllowed"),customCreditAllowed:l(e.flags,"customCreditAllowed"),currencyUnit:{id:n(t?.id),name:n(t?.name),symbol:n(t?.symbol),symbolBeforeValue:t?.symbolBeforeValue===!0,type:n(t?.type,"TIME")}}}function R(e){const t=r(e.workspace_link_contract_cycle_type),a=r(e.workspace_link_contract_payment_type),p=c(e.workspace_link_contract_template_credits).map(o=>r(o)).filter(o=>o!==null).map(D);return{id:n(e.id),name:n(e.name),payDay:typeof e.payDay=="number"?e.payDay:null,cycleType:t?{id:n(t.id),name:n(t.name)}:null,paymentType:a?{id:n(a.id),name:n(a.name)}:null,credits:p}}function C(e){return{id:n(e.id),name:n(e.name),type:n(e.type,"TIME"),symbol:n(e.symbol),symbolBeforeValue:e.symbolBeforeValue===!0}}const v="f7c82d0c-f948-4db4-9a37-4ae7e2c917c9",P="af68bdf7-4f60-4243-a6fb-961626ab32b3";function V(e){return e.cycleTypes.find(t=>t.id===v||t.name.toUpperCase().includes("MONTH")||t.name.toUpperCase().includes("MENS"))??e.cycleTypes[0]??null}function x(e){return e.paymentTypes.find(t=>t.id===P)??e.paymentTypes[0]??null}function j(e,t){return`PT${e*(t==="Dias"?86400:2592e3)}S`}const Y={async getContractTemplatesByWorkspaceId(e){if(!e)return[];const t=await y(k,{workspaceId:e});return Array.isArray(t.workspace_link_contract_template)?t.workspace_link_contract_template.map(a=>r(a)).filter(a=>a!==null).map(R).filter(a=>a.id!==""):[]},async getPaymentAndCycleTypesByWorkspaceId(e){if(!e)return{cycleTypes:[],paymentTypes:[],currencyUnits:[]};const t=await y(g,{workspaceId:e});return{cycleTypes:c(t.workspace_link_contract_cycle_type).map(a=>r(a)).filter(a=>a!==null).map(a=>({id:n(a.id),name:n(a.name)})),paymentTypes:c(t.workspace_link_contract_payment_type).map(a=>r(a)).filter(a=>a!==null).map(a=>({id:n(a.id),name:n(a.name)})),currencyUnits:c(t.currency_unit).map(a=>r(a)).filter(a=>a!==null).map(C)}},async setCurrencyUnit(e){const t=await s(A,{input:{name:e.name,symbol:e.symbol,type:e.type,workspaceId:e.workspaceId,symbolBeforeValue:e.symbolBeforeValue}}),a=r(t.setCurrencyUnit);if(!a)throw new Error("Resposta inválida ao criar moeda");if(a.success!==!0){const p=c(a.errorMessages).map(o=>String(o));throw new Error(p.length?p.join(`
`):"Falha ao criar moeda")}const i=r(a.payload);if(!i)throw new Error("Resposta inválida ao criar moeda");return C(i)},async createContractTemplate(e){const t={inputworkspaceid:e.workspaceId,inputvalue:0,inputcycletypeid:e.cycleTypeId,inputpaymenttypeid:e.paymentTypeId,inputpayday:e.payDay,inputname:e.name,inputautorenew:e.autoRenew,inputautorenewmeasure:e.autoRenewMeasure,inputmode:e.mode,inputcredits:JSON.stringify(e.credits),dependentslimit:e.dependentsLimit,extendedcontractbehaviour:e.extendedContractBehaviour},a=m(_)==="java",i=a?await s(S,t,w):await s(E,{args:t}),p=c(a?i.prod_createcontracttemplate:i.createcontracttemplate),o=r(r(p[0])?.json);if(!o)throw new Error("Resposta inválida ao criar modelo de contrato");const u=n(o.response);if(u!=="OK")throw new Error(u||"Falha ao criar modelo de contrato");const d=n(o.id);if(!d)throw new Error("Resposta inválida ao criar modelo de contrato");return d},async updateContractTemplate(e){const t=await s($,{contractTemplateId:e.contractTemplateId,name:e.name,status:e.status}),a=r(t.updateContractTemplate_CORE);if(a?.success!==!0){const i=c(a?.errorMessages).map(p=>String(p));throw new Error(i.length?i.join(`
`):"Falha ao atualizar modelo de contrato")}},async updateCreditTemplate(e){const t={workspaceLinkContractTemplateCreditId:e.workspaceLinkContractTemplateCreditId,newStatus:e.newStatus??"ACTIVE"};e.creditValue!=null&&(t.creditValue=e.creditValue),e.removalType&&(t.removalType=e.removalType);const a=await s(I,{input:t});if(r(a.updateCreditTemplate_CORE)?.success!==!0)throw new Error("Falha ao atualizar crédito do modelo")},async createContractByTemplate(e){const t={inputtemplateid:e.templateId,inputstartdate:T(e.startDate),inputenddate:T(e.endDate),inputclientworkspaceid:e.clientWorkspaceId,inputresponsibleworkspaceid:e.responsibleWorkspaceId,inputloggeduser:e.loggedUserId,inputpriority:e.priority},a=m(_)==="java",i=a?await s(h,t,w):await s(b,{args:t}),p=c(a?i.prod_createcontractbytemplate:i.createcontractbytemplate),o=r(r(p[0])?.json);if(o){const u=n(o.response);if(u&&u!=="OK")throw new Error(u);const d=n(o.id);if(d)return d}throw new Error("Resposta inválida ao criar contrato")}};export{O as C,N as a,x as b,Y as c,B as d,j as e,V as r};
