import{$ as I,L as _,G as p}from"./index-DzAPNsFI.js";const F="94af670c-4c96-4683-86a9-6cb9280c248f";function a(t){return!t||typeof t!="object"||Array.isArray(t)?null:t}function S(t){const n=a(t);if(n)return n;if(typeof t=="string"&&t.trim())try{return a(JSON.parse(t))}catch{return null}return null}function m(t,n){const r=a(t)?.[n];let i;if(Array.isArray(r)&&r.length>0?i=a(r[0])?.json:i=a(r)?.json,Array.isArray(i))return i.filter(o=>!!a(o));const l=a(i);return l?[l]:[]}function g(t,n){const e=t[n];if(!Array.isArray(e))return[];const r=[];for(const i of e){const l=a(i),o=a(l?.json);o&&r.push(o)}return r}function u(t){return typeof t=="number"&&!Number.isNaN(t)?t:null}function s(t){return typeof t=="string"?t.trim():t==null?"":String(t).trim()}function c(t){return typeof t=="number"&&Number.isFinite(t)?t:typeof t=="string"&&t.trim()&&Number.isFinite(Number(t))?Number(t):null}function h(t){if(t.hasAgreement===!1)return null;const n=String(t.id??"").trim();return n?{id:n,workspaceId:String(t.workspaceId??""),planId:String(t.planId??""),planName:String(t.planName??""),planSlug:String(t.planSlug??""),planDescription:String(t.planDescription??""),status:String(t.status??""),payDay:typeof t.payDay=="number"?t.payDay:null}:null}function A(t){const n=String(t.id??"").trim();return n?{id:n,name:String(t.name??""),slug:String(t.slug??""),status:String(t.status??""),description:String(t.description??""),workspaceId:t.workspaceId!=null?String(t.workspaceId):null,retailFixedMonthly:c(t.retailFixedMonthly)??c(t.retail_fixed_monthly)}:null}function E(t){return{id:String(t.id??""),planItemId:String(t.planItemId??""),fromQuantity:u(t.fromQuantity)??0,toQuantity:u(t.toQuantity),unitPrice:u(t.unitPrice),flatAmount:u(t.flatAmount),sortOrder:u(t.sortOrder)??0}}function P(t){const e=((t.agreementItemId!=null?String(t.agreementItemId):"")||String(t.id??"")).trim();if(!e)return null;const i=(Array.isArray(t.tiers)?t.tiers:[]).map(l=>a(l)).filter(l=>!!l).map(E).sort((l,o)=>l.sortOrder-o.sortOrder);return{id:e,label:String(t.label??t.name??""),planId:String(t.planId??""),status:String(t.status??"ACTIVE"),meterId:t.meterId!=null?String(t.meterId):null,meterSlug:t.meterSlug!=null?String(t.meterSlug):null,meterName:t.meterName!=null?String(t.meterName):null,skuSlug:t.skuSlug!=null?String(t.skuSlug):null,pricingMode:String(t.pricingMode??""),packagePrice:u(t.packagePrice),includedQuantity:u(t.includedQuantity),overageUnitPrice:u(t.overageUnitPrice),sortOrder:u(t.sortOrder)??0,tiers:i}}function N(t){const n=String(t.id??"").trim();if(!n)return null;const e=Array.isArray(t.pendingSkuSlugs)?t.pendingSkuSlugs:[];return{id:n,workspaceId:String(t.workspaceId??""),planSlug:String(t.planSlug??""),pendingSkuSlugs:e.map(r=>String(r).trim().toLowerCase()).filter(Boolean)}}function k(t,n){const e=n.trim();return t.filter(r=>r.planId===e).slice().sort((r,i)=>r.sortOrder-i.sortOrder)}function j(t){const n=s(t.channel||t.source||t.origin||t.type).toLowerCase();let e="unknown";return n.includes("integr")?e="viaIntegrator":(n.includes("direct")||n.includes("diret"))&&(e="direct"),{id:s(t.agreementId)||s(t.id)||s(t.licenseId),name:s(t.name)||s(t.customerName)||s(t.workspaceName)||s(t.clientName)||s(t.brandingName)||s(t.legalName),email:s(t.email)||s(t.customerEmail)||s(t.workspaceEmail),planName:s(t.planName)||s(t.planSlug)||s(t.plan),status:s(t.status)||s(t.paymentStatus),amount:c(t.retailMonthlyValue)??c(t.amount)??c(t.monthlyValue)??c(t.value),channel:e}}function b(t){if(!t)throw new Error("O servidor não retornou o resultado da alteração.");if(t.success===!1){const n=t.errorMessages,e=Array.isArray(n)?n.map(r=>String(r)).filter(Boolean).join(`
`):s(n);throw new Error(e||"Não foi possível salvar o item de cobrança.")}return a(t.payload)??t}async function f(t,n,e){return p(t.replace("{argType}",n),e,{endpoint:_.hailaJavaGraphqlEndpoint})}const B=`
  query GetBillingWorkspaceAgreement($input: ProdGetBillingWorkspaceAgreementJsonPInput) {
    prod_get_billing_workspace_agreement_json(p_input: $input) {
      json
    }
  }
`,G=`
  query GetBillingPlans($filters: ProdGetBillingPlansJsonPFiltersInput) {
    prod_get_billing_plans_json(p_filters: $filters) {
      json
    }
  }
`,T=`
  query GetBillingPlanItems($filters: ProdGetBillingPlanItemsJsonPFiltersInput) {
    prod_get_billing_plan_items_json(p_filters: $filters) {
      json
    }
  }
`,L=`
  query GetBillingAgreements($filters: ProdGetBillingAgreementsJsonPFiltersInput) {
    prod_get_billing_agreements_json(p_filters: $filters) {
      json
    }
  }
`,C=`
  query GetBillingFeatureSkus {
    billing_featureSkus
  }
`,$=`
  query GetBillingPlans($filters: {argType}) {
    prod_get_billing_plans_json(p_filters: $filters) {
      json
    }
  }
`,O=`
  query GetBillingPlanItems($filters: {argType}) {
    prod_get_billing_plan_items_json(p_filters: $filters) {
      json
    }
  }
`,M=`
  mutation SetBillingPlan($input: {argType}) {
    prod_set_billing_plan_json(p_input: $input) {
      json
    }
  }
`,R=`
  query GetBillingLicensesDashboard($filters: {argType}) {
    prod_get_billing_workspace_licenses_dashboard_json(p_input: $filters) {
      json
    }
  }
`,J=`
  mutation SetBillingAgreement($input: {argType}) {
    prod_set_billing_agreement_json(p_input: $input) {
      json
    }
  }
`,d={endpoint:_.hailaJavaGraphqlEndpoint,timeoutMs:3e4};function q(t){const n=/^(\d{4})-(\d{2})/.exec(t.trim());return n?`${n[1]}-${n[2]}-01`:t}const V={async getWorkspaceAgreement(t){if(!t)return null;try{const n=await p(B,{input:{workspaceId:t}},d),e=m(n,"prod_get_billing_workspace_agreement_json");return e.length===0?null:h(e[0])}catch{return null}},async getPlans(t){const n={status:["ACTIVE"]},e=t?.trim();e&&(n.workspaceId=e);try{const r=await p(G,{filters:n},d);return m(r,"prod_get_billing_plans_json").map(A).filter(i=>!!i)}catch{return[]}},async getPlanItems(t){const n=t?.trim()??"",e=n?{planId:n,status:["ACTIVE"]}:{status:["ACTIVE"]};try{const r=await p(T,{filters:e},d),i=m(r,"prod_get_billing_plan_items_json").map(P).filter(l=>!!l);return n?k(i,n):i}catch{return[]}},async getAgreements(t){const n={},e=t?.trim();e&&(n.workspaceId=e);try{const r=await p(L,{filters:n},d);return m(r,"prod_get_billing_agreements_json").map(N).filter(i=>!!i)}catch{return[]}},async getSessionCondoPlanItems(t){const n=t.trim();if(!n)return[];const r=(await this.getPlans(n)).find(i=>i.slug.toUpperCase()==="CONDO"&&i.status.toUpperCase()==="ACTIVE");return r?this.getPlanItems(r.id):[]},async getClientPendingSkuSlugs(t){const n=t.trim();if(!n)return new Set;const e=await this.getAgreements(n);for(const r of e)if(r.planSlug.toUpperCase()==="CONDO")return new Set(r.pendingSkuSlugs);return new Set},async getFeatureSkuMappings(){try{const t=await p(C,{},d),n=S(t.billing_featureSkus);if(!n||n.success!==!0)return{};const e=Array.isArray(n.payload)?n.payload:[],r={};for(const i of e){const l=S(i)??a(i);if(!l)continue;const o=String(l.templateId??"").trim(),y=String(l.skuSlug??"").trim();o&&y&&(r[o]=y)}return r}catch{return{}}},async listPlans(t){const n=await f($,"ProdGetBillingPlansJsonPFiltersInput",{filters:{status:["ACTIVE"],workspaceId:t}});return g(n,"prod_get_billing_plans_json").map(A).filter(e=>!!e?.id)},async listPlanItems(t){const n=await f(O,"ProdGetBillingPlanItemsJsonPFiltersInput",{filters:{planId:t,status:["ACTIVE"]}});return g(n,"prod_get_billing_plan_items_json").map(P).filter(e=>!!e?.id)},async createPlan(t){const n=await I(M.replace("{argType}","ProdSetBillingPlanJsonPInput"),{input:{workspaceId:t.workspaceId,name:t.name,slug:t.slug,description:t.description,status:"ACTIVE"}},{endpoint:_.hailaJavaGraphqlEndpoint});b(g(n,"prod_set_billing_plan_json")[0])},async licensesDashboard(t){const n=await f(R,"ProdGetBillingWorkspaceLicensesDashboardJsonPInput",{filters:{workspaceId:t.workspaceId,scope:t.scope,month:q(t.month),...t.search.trim()?{search:t.search.trim()}:{}}}),e=g(n,"prod_get_billing_workspace_licenses_dashboard_json")[0],r=e?.licenses,i=a(e?.totals);return{licenses:Array.isArray(r)?r.map(o=>a(o)).filter(o=>!!o).map(j).filter(o=>o.id):[],totals:{active:Number(i?.active??0)||0,cancelled:Number(i?.cancelled??0)||0,monthlyValue:c(i?.monthlyValue)??c(i?.retailMonthlyValue)??0}}},async cancelLicense(t){const n=await I(J.replace("{argType}","ProdSetBillingAgreementJsonPInput"),{input:{id:t,status:"CANCELLED",endDate:new Date().toISOString()}},{endpoint:_.hailaJavaGraphqlEndpoint});b(g(n,"prod_set_billing_agreement_json")[0])}};export{F as H,V as b};
