import{ap as y,S as p,T as B}from"./index-KU9Zrkrq.js";function o(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function h(e){const t=o(e);if(t)return t;if(typeof e=="string"&&e.trim())try{return o(JSON.parse(e))}catch{return null}return null}function i(e){return typeof e=="number"&&Number.isFinite(e)?e:typeof e=="string"&&e.trim()&&Number.isFinite(Number(e))?Number(e):null}function n(e){return typeof e=="string"?e.trim():e==null?"":String(e).trim()}function u(e){return i(e)??0}function g(e){return Array.isArray(e)?e.map(o).filter(t=>!!t):[]}function _(e,t){const r=e[t];return Array.isArray(r)?r.map(a=>h(o(a)?.json)).filter(a=>!!a):[]}function d(e,t){return _(e,t)[0]??null}function D(e,t=""){return{id:n(e.id),planItemId:n(e.planItemId)||t,agreementItemId:n(e.agreementItemId),fromQuantity:u(e.fromQuantity),toQuantity:i(e.toQuantity),unitPrice:i(e.unitPrice),flatAmount:i(e.flatAmount),minCharge:i(e.minCharge),sortOrder:u(e.sortOrder)}}function E(e){const t=n(e.planItemId)||n(e.id);return t?{id:t,planId:n(e.planId),meterId:n(e.meterId)||null,meterSlug:n(e.meterSlug)||null,meterName:n(e.meterName)||null,skuSlug:n(e.skuSlug)||null,label:n(e.label)||n(e.name),pricingMode:n(e.pricingMode).toUpperCase(),packagePrice:i(e.packagePrice),includedQuantity:i(e.includedQuantity),overageUnitPrice:i(e.overageUnitPrice),floorPreviousBand:e.floorPreviousBand!==!1,sortOrder:u(e.sortOrder),status:n(e.status)||"ACTIVE",tiers:g(e.tiers).map(r=>D(r,t)).sort((r,a)=>r.sortOrder-a.sortOrder||r.fromQuantity-a.fromQuantity)}:null}function S(e){const t=n(e.id);if(!t)return null;const r=Array.isArray(e.permittedFlags)?e.permittedFlags.map(n).filter(Boolean):[];return{id:t,workspaceId:n(e.workspaceId),sourcePlanId:n(e.sourcePlanId)||null,slug:n(e.slug).toUpperCase(),name:n(e.name),description:n(e.description),status:n(e.status)||"ACTIVE",retailFixedMonthly:i(e.retailFixedMonthly),permittedFlags:r}}function j(e){const t=S(e);return t?{...t,items:g(e.items).map(r=>({id:n(r.id),label:n(r.label),meterId:n(r.meterId)||null,skuSlug:n(r.skuSlug)||null,pricingMode:n(r.pricingMode).toUpperCase(),sortOrder:u(r.sortOrder),required:r.required===!0})).filter(r=>r.id)}:null}function L(e){const t=E(e);return t?{...t,agreementItemId:n(e.agreementItemId),planItemId:n(e.planItemId)||t.id,quantity:u(e.quantity),totalValue:i(e.totalValue)??0,hailaDueValue:i(e.hailaDueValue)??0,required:e.required===!0}:null}function f(e){const t=e??{};return{planId:n(t.planId),planName:n(t.planName),retailFixedMonthly:i(t.retailFixedMonthly),retailPricingMode:n(t.retailPricingMode)||"ITEM",items:g(t.items).map(L).filter(r=>!!r).sort((r,a)=>r.sortOrder-a.sortOrder),totalValue:i(t.totalValue)??0,retailTotalValue:i(t.retailTotalValue)??0,hailaDueTotalValue:i(t.hailaDueTotalValue)??0,integratorMarginTotalValue:i(t.integratorMarginTotalValue)??0}}function N(e){if(!e||e.hasAgreement===!1)return null;const t=n(e.id);return t?{id:t,workspaceId:n(e.workspaceId),planId:n(e.planId),planName:n(e.planName),planSlug:n(e.planSlug),planDescription:n(e.planDescription),status:n(e.status),payDay:i(e.payDay),integratorWorkspaceId:n(e.integratorWorkspaceId)||null}:null}function C(e){const t=n(e.channel).toUpperCase();return{agreementId:n(e.agreementId),workspaceId:n(e.workspaceId),customerName:n(e.customerName)||n(e.name),customerEmail:n(e.customerEmail)||n(e.email),logoPath:n(e.logoPath)||null,channel:t==="VIA_INTEGRATOR"?"VIA_INTEGRATOR":"DIRECT",integratorWorkspaceId:n(e.integratorWorkspaceId)||null,integratorName:n(e.integratorName),planSlug:n(e.planSlug),monthlyValue:i(e.monthlyValue),hailaDueValue:i(e.hailaDueValue),payDay:i(e.payDay),dueAt:n(e.dueAt)||null,status:n(e.status).toUpperCase(),cycleId:n(e.cycleId)||null}}function P(e){const t=o(e)??{};return{overdue:u(t.overdue),cancelled:u(t.cancelled),active:u(t.active),averagePerLicense:i(t.averagePerLicense)??0,mrr:i(t.mrr)??0,hailaDueMrr:i(t.hailaDueMrr)??0}}function M(e){const t=e??{},r=o(t.metrics)??{},a=o(t.totals)??{};return{workspaceId:n(t.workspaceId),month:n(t.month),scope:n(t.scope)||"ALL",metrics:{direct:P(r.direct),viaIntegrator:P(r.viaIntegrator)},totals:{...P(a),licenseCount:u(a.licenseCount),monthlyValue:i(a.monthlyValue)??0,hailaDueValue:i(a.hailaDueValue)??0},licenses:g(t.licenses).map(C).filter(s=>s.agreementId)}}function G(e){return{id:n(e.id),documentType:n(e.documentType),title:n(e.title),fileUploadId:n(e.fileUploadId),url:n(e.url)}}function V(e){return{...G(e),sortOrder:u(e.sortOrder),createdAt:n(e.createdAt)||null}}function O(e){return{cycleId:n(e.cycleId),invoice:n(e.invoice),startDate:n(e.startDate)||null,endDate:n(e.endDate)||null,dueAt:n(e.dueAt)||null,value:i(e.value),hailaDueValue:i(e.hailaDueValue),status:n(e.status).toUpperCase(),documents:g(e.documents).map(G)}}function $(e){return{id:n(e.id),text:n(e.text),authorUserId:n(e.authorUserId)||null,authorEmail:n(e.authorEmail),createdAt:n(e.createdAt)||null,updatedAt:n(e.updatedAt)||null}}function R(e){if(!e)return null;const t=n(e.agreementId);if(!t)return null;const r=o(e.customer)??{},a=o(e.plan)??{},s=o(e.integrator),c=o(e.activation)??{},m=o(e.contract)??{},I=n(e.channel).toUpperCase();return{agreementId:t,workspaceId:n(e.workspaceId),customer:{name:n(r.name),email:n(r.email),logoPath:n(r.logoPath)||null},status:n(e.status).toUpperCase(),plan:{id:n(a.id),slug:n(a.slug).toUpperCase(),name:n(a.name),description:n(a.description),workspaceId:n(a.workspaceId)},channel:I==="VIA_INTEGRATOR"?"VIA_INTEGRATOR":"DIRECT",integrator:s?{workspaceId:n(s.workspaceId),name:n(s.name),email:n(s.email)}:null,activation:{activatedAt:n(c.activatedAt)||null,activatedByUserId:n(c.activatedByUserId)||null,activatedByEmail:n(c.activatedByEmail)},payDay:i(e.payDay),observations:n(e.observations),summary:f(o(e.summary)),history:g(e.history).map(O),contract:{documents:g(m.documents).map(V),notes:g(m.notes).map($)}}}function U(e){const t=e??{},r=o(t.metrics)??{};return{month:n(t.month),metrics:{overdue:u(r.overdue),cancelled:u(r.cancelled),active:u(r.active),averagePerLicense:i(r.averagePerLicense)??0,mrr:i(r.mrr)??0,retailMrr:i(r.retailMrr)??0},integrators:g(t.integrators).map(a=>({integratorWorkspaceId:n(a.integratorWorkspaceId),name:n(a.name),email:n(a.email),logoPath:n(a.logoPath)||null,overdueLicenses:u(a.overdueLicenses),cancelledLicenses:u(a.cancelledLicenses),activeLicenses:u(a.activeLicenses),monthlyValue:i(a.monthlyValue)??0,retailMonthlyValue:i(a.retailMonthlyValue)??0,dueAt:n(a.dueAt)||null,status:n(a.status).toUpperCase()})).filter(a=>a.integratorWorkspaceId)}}const q="94af670c-4c96-4683-86a9-6cb9280c248f";function ie(e){return(e??"").trim()===q}function v(e){return typeof e=="string"?e.trim():e==null?"":String(e).trim()}function A(e){if(!e)throw new Error("O servidor não retornou o resultado da alteração.");if(e.success===!1){const t=e.errorMessages,r=Array.isArray(t)?t.map(a=>String(a)).filter(Boolean).join(`
`):v(t);throw new Error(r||"Não foi possível salvar a alteração de cobrança.")}return o(e.payload)??e}const l={endpoint:B.hailaJavaGraphqlEndpoint,timeoutMs:3e4},W=`
  query GetBillingWorkspaceAgreement($input: ProdGetBillingWorkspaceAgreementJsonPInput) {
    prod_get_billing_workspace_agreement_json(p_input: $input) {
      json
    }
  }
`,Q=`
  query GetBillingPlans($filters: ProdGetBillingPlansJsonPFiltersInput) {
    prod_get_billing_plans_json(p_filters: $filters) {
      json
    }
  }
`,F=`
  query GetBillingPlanItems($filters: ProdGetBillingPlanItemsJsonPFiltersInput) {
    prod_get_billing_plan_items_json(p_filters: $filters) {
      json
    }
  }
`,J=`
  query GetBillingMeters {
    prod_get_billing_meters {
      id
      slug
      name
      description
    }
  }
`,x=`
  query GetBillingAgreements($filters: ProdGetBillingAgreementsJsonPFiltersInput) {
    prod_get_billing_agreements_json(p_filters: $filters) {
      json
    }
  }
`,H=`
  query GetBillingFeatureSkus {
    billing_featureSkus
  }
`,K=`
  query GetBillingEligiblePlans($input: ProdGetBillingEligiblePlansForWorkspaceJsonPInput) {
    prod_get_billing_eligible_plans_for_workspace_json(p_input: $input) {
      json
    }
  }
`,Y=`
  query GetBillingPlanWorkspaceQuote($input: ProdGetBillingPlanWorkspaceQuoteJsonPInput) {
    prod_get_billing_plan_workspace_quote_json(p_input: $input) {
      json
    }
  }
`,z=`
  query GetBillingAgreementQuote($input: ProdGetBillingAgreementQuoteJsonPInput) {
    prod_get_billing_agreement_quote_json(p_input: $input) {
      json
    }
  }
`,X=`
  query GetBillingLicenseDetails($agreementId: String) {
    prod_get_billing_license_details_json(p_agreement_id: $agreementId) {
      json
    }
  }
`,Z=`
  query GetBillingWorkspaceLicensesDashboard($input: ProdGetBillingWorkspaceLicensesDashboardJsonPInput) {
    prod_get_billing_workspace_licenses_dashboard_json(p_input: $input) {
      json
    }
  }
`,w=`
  query GetBillingIntegratorsDashboard($filters: ProdGetBillingIntegratorsDashboardJsonPFiltersInput) {
    prod_get_billing_integrators_dashboard_json(p_filters: $filters) {
      json
    }
  }
`,ee=`
  query GetBillingPlans($filters: {argType}) {
    prod_get_billing_plans_json(p_filters: $filters) {
      json
    }
  }
`,te=`
  query GetBillingPlanItems($filters: {argType}) {
    prod_get_billing_plan_items_json(p_filters: $filters) {
      json
    }
  }
`,ne=`
  mutation SetBillingPlan($input: {argType}) {
    prod_set_billing_plan_json(p_input: $input) {
      json
    }
  }
`,k=`
  mutation SetBillingAgreement($input: {argType}) {
    prod_set_billing_agreement_json(p_input: $input) {
      json
    }
  }
`,re=`
  mutation SetBillingAgreementItems($input: ProdSetBillingAgreementItemsJsonPInput) {
    prod_set_billing_agreement_items_json(p_input: $input) {
      json
    }
  }
`;async function b(e,t,r){return p(e.replace("{argType}",t),r,{endpoint:B.hailaJavaGraphqlEndpoint})}function T(e){const t=/^(\d{4})-(\d{2})/.exec(e.trim());return t?`${t[1]}-${t[2]}-01`:e}const se={async getWorkspaceAgreement(e){if(!e)return null;try{const t=await p(W,{input:{workspaceId:e}},l);return N(d(t,"prod_get_billing_workspace_agreement_json"))}catch{return null}},async getPlans(e){const t={status:["ACTIVE"],limit:1e3},r=e?.trim();r&&(t.workspaceId=r);try{const a=await p(Q,{filters:t},l);return _(a,"prod_get_billing_plans_json").map(S).filter(s=>!!s)}catch{return[]}},async getPlanItems(e){const t=e?.trim()??"",r=t?{planId:t,status:["ACTIVE"],limit:1e3}:{status:["ACTIVE"],limit:1e3};try{const a=await p(F,{filters:r},l),s=_(a,"prod_get_billing_plan_items_json").map(E).filter(c=>!!c);return t?s.filter(c=>c.planId===t):s}catch{return[]}},async getMeters(){try{const e=await p(J,{},l);return g(e.prod_get_billing_meters).map(t=>({id:n(t.id),slug:n(t.slug),name:n(t.name),description:n(t.description)})).filter(t=>t.id)}catch{return[]}},async getAgreements(e){const t={},r=e?.trim();r&&(t.workspaceId=r);try{const a=await p(x,{filters:t},l);return _(a,"prod_get_billing_agreements_json").map(s=>{const c=n(s.id);if(!c)return null;const m=Array.isArray(s.pendingSkuSlugs)?s.pendingSkuSlugs:[];return{id:c,workspaceId:n(s.workspaceId),planSlug:n(s.planSlug),pendingSkuSlugs:m.map(I=>String(I).trim().toLowerCase()).filter(Boolean)}}).filter(s=>!!s)}catch{return[]}},async getSessionCondoPlanItems(e){const t=e.trim();if(!t)return[];const a=(await this.getPlans(t)).find(s=>s.slug.toUpperCase()==="CONDO"&&s.status.toUpperCase()==="ACTIVE");return a?this.getPlanItems(a.id):[]},async getClientPendingSkuSlugs(e){const t=e.trim();if(!t)return new Set;const r=await this.getAgreements(t);for(const a of r)if(a.planSlug.toUpperCase()==="CONDO")return new Set(a.pendingSkuSlugs);return new Set},async getFeatureSkuMappings(){try{const e=await p(H,{},l),t=h(e.billing_featureSkus);if(!t||t.success!==!0)return{};const r=Array.isArray(t.payload)?t.payload:[],a={};for(const s of r){const c=h(s)??o(s);if(!c)continue;const m=String(c.templateId??"").trim(),I=String(c.skuSlug??"").trim();m&&I&&(a[m]=I)}return a}catch{return{}}},async getEligiblePlans(e,t){if(!e||!t)return[];const r=await p(K,{input:{clientWorkspaceId:e,integratorWorkspaceId:t}},l);return _(r,"prod_get_billing_eligible_plans_for_workspace_json").map(j).filter(a=>!!a)},async getPlanWorkspaceQuote(e){if(!e.workspaceId||!e.planId)return f(null);const t=await p(Y,{input:{workspaceId:e.workspaceId,planId:e.planId,selectedPlanItemIds:e.selectedPlanItemIds??[]}},l);return f(d(t,"prod_get_billing_plan_workspace_quote_json"))},async getAgreementQuote(e){if(!e)return f(null);try{const t=await p(z,{input:{agreementId:e}},l);return f(d(t,"prod_get_billing_agreement_quote_json"))}catch{return f(null)}},async getLicenseDetails(e){if(!e)return null;const t=await p(X,{agreementId:e},l);return R(d(t,"prod_get_billing_license_details_json"))},async getLicensesDashboard(e){const t=await p(Z,{input:{workspaceId:e.workspaceId,scope:e.scope,month:T(e.month),...e.search.trim()?{search:e.search.trim()}:{}}},l);return M(d(t,"prod_get_billing_workspace_licenses_dashboard_json"))},async getIntegratorsDashboard(e){const t=await p(w,{filters:{month:T(e.month),...e.search?.trim()?{search:e.search.trim()}:{}}},l);return U(d(t,"prod_get_billing_integrators_dashboard_json"))},async cancelLicense(e){const t=await y(k.replace("{argType}","ProdSetBillingAgreementJsonPInput"),{input:{id:e,status:"CANCELLED",endDate:new Date().toISOString()}},l);A(d(t,"prod_set_billing_agreement_json"))},async createAgreementFromPlan(e){const t=await y(k.replace("{argType}","ProdSetBillingAgreementJsonPInput"),{input:{workspaceId:e.workspaceId,planId:e.planId,planWorkspaceId:e.planWorkspaceId,integratorWorkspaceId:e.integratorWorkspaceId,selectedPlanItemIds:e.selectedPlanItemIds,payDay:e.payDay,startDate:e.startDate??new Date().toISOString(),activate:!0}},l),r=A(d(t,"prod_set_billing_agreement_json"));return n(r.id)},async setAgreementItems(e){const t=await y(re,{input:{agreementId:e.agreementId,replace:!0,items:e.items}},l);A(d(t,"prod_set_billing_agreement_items_json"))},async listPlans(e){const t=await b(ee,"ProdGetBillingPlansJsonPFiltersInput",{filters:{status:["ACTIVE"],workspaceId:e,limit:1e3}});return _(t,"prod_get_billing_plans_json").map(S).filter(r=>!!r?.id)},async listPlanItems(e){const t=await b(te,"ProdGetBillingPlanItemsJsonPFiltersInput",{filters:{planId:e,status:["ACTIVE"],limit:1e3}});return _(t,"prod_get_billing_plan_items_json").map(E).filter(r=>!!r?.id)},async createPlan(e){const t=await y(ne.replace("{argType}","ProdSetBillingPlanJsonPInput"),{input:{workspaceId:e.workspaceId,name:e.name,slug:e.slug,description:e.description,status:"ACTIVE"}},l);A(d(t,"prod_set_billing_plan_json"))}};export{q as H,se as b,ie as i};
