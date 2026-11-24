import{S as p,ap as I,T as l}from"./index-KU9Zrkrq.js";const i={endpoint:l.hailaJavaGraphqlEndpoint,timeoutMs:6e4};class d extends Error{constructor(e,t=null){super(e),this.code=t,this.name="CnaeError"}code}function c(r){return r&&typeof r=="object"&&!Array.isArray(r)?r:null}function n(r){return typeof r=="string"&&r.trim()?r.trim():null}function u(r,e){const t=c(r);if(!t)throw new d(`Resposta inválida do CNAE (${e})`);if(t.success!==!0){const s=Array.isArray(t.errorMessages)?t.errorMessages.map(a=>String(a)).filter(Boolean):[];throw new d(s[0]??`Operação CNAE não concluída (${e})`,n(t.errorCode))}return c(t.payload)??{}}function f(r){const e=c(r);return e?{streetType:n(e.streetType),street:n(e.street),number:n(e.number),complement:n(e.complement),district:n(e.district),city:n(e.city),state:n(e.state),zipCode:n(e.zipCode)}:null}function C(r){return Array.isArray(r)?r.map(e=>c(e)).filter(e=>e!==null).map(e=>({code:String(e.code??"").trim(),description:String(e.description??"").trim(),isPrimary:e.isPrimary===!0})).filter(e=>e.code.length>0):[]}function m(r){const e=c(r);if(!e)return null;const t=n(e.legalName);return t?{cnpj:String(e.cnpj??"").trim(),legalName:t,brandingName:n(e.brandingName),email:n(e.email),phone:n(e.phone),registrationStatus:n(e.registrationStatus),openingDate:n(e.openingDate),address:f(e.address),cnaes:C(e.cnaes),source:n(e.source),retrievedAt:n(e.retrievedAt)}:null}function k(r){const e=n(r.queueId);if(!e)throw new d("O CNAE não retornou o queueId");const t=n(r.status);return{queueId:e,status:t==="ALREADY_QUEUED"?"ALREADY_QUEUED":"CREATED",alreadyQueued:r.alreadyQueued===!0||t==="ALREADY_QUEUED",workspaceId:String(r.workspaceId??"").trim(),cnpj:n(r.cnpj),preview:r.preview===!0}}function w(r){const e=n(r.queueId);if(!e)throw new d("O CNAE não retornou o queueId do status");const t=n(r.status)??"CREATED";return{queueId:e,status:t==="RUNNING"||t==="COMPLETED"||t==="FAILED"?t:"CREATED",retries:Number.isFinite(Number(r.retries))?Number(r.retries):0,errorMessage:n(r.errorMessage),workspaceId:n(r.workspaceId),cnpj:n(r.cnpj),registry:m(r.registry),cnaeCount:Number.isFinite(Number(r.cnaeCount))?Number(r.cnaeCount):0,preview:r.preview===!0}}function R(r){return{workspaceId:String(r.workspaceId??"").trim(),registry:m(r.registry),cnaeCount:Number.isFinite(Number(r.cnaeCount))?Number(r.cnaeCount):0}}const T=`
  query CnaeWorkspaceRegistry($workspaceId: String, $sessionWorkspaceId: String) {
    cnae_workspaceRegistry(
      workspaceId: $workspaceId
      sessionWorkspaceId: $sessionWorkspaceId
    )
  }
`,$=`
  mutation CnaeEnqueueLookup($workspaceId: String, $sessionWorkspaceId: String) {
    cnae_enqueueLookup(
      workspaceId: $workspaceId
      sessionWorkspaceId: $sessionWorkspaceId
    )
  }
`,h=`
  query CnaeLookupStatus($queueId: String, $sessionWorkspaceId: String) {
    cnae_lookupStatus(queueId: $queueId, sessionWorkspaceId: $sessionWorkspaceId)
  }
`,O=`
  mutation CnaePreviewLookup($workspaceId: String, $cnpj: String, $sessionWorkspaceId: String) {
    cnae_previewLookup(
      workspaceId: $workspaceId
      cnpj: $cnpj
      sessionWorkspaceId: $sessionWorkspaceId
    )
  }
`,_=`
  query CnaePreviewStatus($queueId: String, $sessionWorkspaceId: String) {
    cnae_previewStatus(queueId: $queueId, sessionWorkspaceId: $sessionWorkspaceId)
  }
`,P={async workspaceRegistry(r,e=null){const t=await p(T,{workspaceId:r,sessionWorkspaceId:e},i),s=u(t.cnae_workspaceRegistry,"workspaceRegistry");return R(s)},async enqueueLookup(r,e=null){const t=await I($,{workspaceId:r,sessionWorkspaceId:e},i),s=u(t.cnae_enqueueLookup,"enqueueLookup");return k(s)},async lookupStatus(r,e=null){const t=await p(h,{queueId:r,sessionWorkspaceId:e},i),s=u(t.cnae_lookupStatus,"lookupStatus");return w(s)},async previewLookup(r,e,t=null){const s=await I(O,{workspaceId:r,cnpj:e,sessionWorkspaceId:t},i),a=u(s.cnae_previewLookup,"previewLookup");return k(a)},async previewStatus(r,e=null){const t=await p(_,{queueId:r,sessionWorkspaceId:e},i),s=u(t.cnae_previewStatus,"previewStatus");return w(s)}},y={endpoint:l.hailaJavaGraphqlEndpoint,timeoutMs:12e4},E={endpoint:l.hailaJavaGraphqlEndpoint,timeoutMs:15e3};class S extends Error{constructor(e,t=null){super(e),this.code=t,this.name="IntegratorOnboardingError"}code}function A(r){return r&&typeof r=="object"&&!Array.isArray(r)?r:null}function o(r){return typeof r=="string"&&r.trim()?r.trim():null}function b(r){const e=A(r);if(!e)throw new S("Resposta inválida do onboarding");if(e.success!==!0){const t=Array.isArray(e.errorMessages)?e.errorMessages.map(s=>o(s)).filter(s=>s!==null):[];throw new S(t[0]??"Onboarding do integrador não concluído",o(e.errorCode))}return A(e.payload)??{}}function N(r){const e=b(r),t=o(e.status);return{status:t==="STARTED"||t==="COMPLETED"?t:"NONE",shouldResume:e.shouldResume===!0,sessionWorkspaceId:o(e.sessionWorkspaceId),cnpj:o(e.cnpj),legalPersonWorkspaceId:o(e.legalPersonWorkspaceId),contractId:o(e.contractId),hasLegalPerson:e.hasLegalPerson===!0,hasIntegratorContract:e.hasIntegratorContract===!0,preview:m(e.preview),matchedCnae:o(e.matchedCnae)}}const q=`
  query IntegratorOnboardingState {
    integratorOnboarding_state
  }
`,W=`
  mutation IntegratorOnboardingStart {
    integratorOnboarding_start
  }
`,v=`
  mutation IntegratorOnboardingProvision($input: Any) {
    integratorOnboarding_provision(input: $input)
  }
`;async function g(r,e,t={},s=y){const a=e==="mutation"?await I(r,t,s):await p(r,t,s);return N(a.integratorOnboarding_state??a.integratorOnboarding_start??a.integratorOnboarding_provision)}const U={state(){return g(q,"query",{},E)},start(){return g(W,"mutation",{},E)},provision(r){return g(v,"mutation",{input:r},y)}};export{d as C,S as I,P as c,U as i};
