import{ad as m,L as u,G as _}from"./index-l1Wp4LV5.js";const T="94af670c-4c96-4683-86a9-6cb9280c248f";function n(e){return typeof e=="string"?e.trim():e==null?"":String(e).trim()}function c(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function r(e){return typeof e=="number"&&Number.isFinite(e)?e:typeof e=="string"&&e.trim()&&Number.isFinite(Number(e))?Number(e):null}function l(e,t){const s=e[t];if(!Array.isArray(s))return[];const a=[];for(const o of s){const d=c(o),i=c(d?.json);i&&a.push(i)}return a}async function p(e,t,s){return _(e.replace("{argType}",t),s,{endpoint:u.hailaJavaGraphqlEndpoint})}function g(e){if(!e)throw new Error("O servidor não retornou o resultado da alteração.");if(e.success===!1){const t=e.errorMessages,s=Array.isArray(t)?t.map(a=>String(a)).filter(Boolean).join(`
`):n(t);throw new Error(s||"Não foi possível salvar o item de cobrança.")}return c(e.payload)??e}function f(e){return{id:n(e.id),name:n(e.name),slug:n(e.slug),status:n(e.status),description:n(e.description),workspaceId:n(e.workspaceId),retailFixedMonthly:r(e.retailFixedMonthly)}}function y(e){return{id:n(e.agreementItemId)||n(e.id),label:n(e.label)||n(e.name),pricingMode:n(e.pricingMode),packagePrice:r(e.packagePrice),status:n(e.status)||"ACTIVE"}}function I(e){const t=n(e.channel||e.source||e.origin||e.type).toLowerCase();let s="unknown";return t.includes("integr")?s="viaIntegrator":(t.includes("direct")||t.includes("diret"))&&(s="direct"),{id:n(e.agreementId)||n(e.id)||n(e.licenseId),name:n(e.name)||n(e.customerName)||n(e.workspaceName)||n(e.clientName)||n(e.brandingName)||n(e.legalName),email:n(e.email)||n(e.customerEmail)||n(e.workspaceEmail),planName:n(e.planName)||n(e.planSlug)||n(e.plan),status:n(e.status)||n(e.paymentStatus),amount:r(e.retailMonthlyValue)??r(e.amount)??r(e.monthlyValue)??r(e.value),channel:s}}const b=`
  query GetBillingPlans($filters: {argType}) {
    prod_get_billing_plans_json(p_filters: $filters) {
      json
    }
  }
`,h=`
  query GetBillingPlanItems($filters: {argType}) {
    prod_get_billing_plan_items_json(p_filters: $filters) {
      json
    }
  }
`,P=`
  mutation SetBillingPlan($input: {argType}) {
    prod_set_billing_plan_json(p_input: $input) {
      json
    }
  }
`,A=`
  query GetBillingLicensesDashboard($filters: {argType}) {
    prod_get_billing_workspace_licenses_dashboard_json(p_input: $filters) {
      json
    }
  }
`,N=`
  mutation SetBillingAgreement($input: {argType}) {
    prod_set_billing_agreement_json(p_input: $input) {
      json
    }
  }
`;function E(e){const t=/^(\d{4})-(\d{2})/.exec(e.trim());return t?`${t[1]}-${t[2]}-01`:e}const S={async listPlans(e){const t=await p(b,"ProdGetBillingPlansJsonPFiltersInput",{filters:{status:["ACTIVE"],workspaceId:e}});return l(t,"prod_get_billing_plans_json").map(f).filter(s=>s.id)},async listPlanItems(e){const t=await p(h,"ProdGetBillingPlanItemsJsonPFiltersInput",{filters:{planId:e,status:["ACTIVE"]}});return l(t,"prod_get_billing_plan_items_json").map(y).filter(s=>s.id)},async createPlan(e){const t=await m(P.replace("{argType}","ProdSetBillingPlanJsonPInput"),{input:{workspaceId:e.workspaceId,name:e.name,slug:e.slug,description:e.description,status:"ACTIVE"}},{endpoint:u.hailaJavaGraphqlEndpoint});g(l(t,"prod_set_billing_plan_json")[0])},async licensesDashboard(e){const t=await p(A,"ProdGetBillingWorkspaceLicensesDashboardJsonPInput",{filters:{workspaceId:e.workspaceId,scope:e.scope,month:E(e.month),...e.search.trim()?{search:e.search.trim()}:{}}}),s=l(t,"prod_get_billing_workspace_licenses_dashboard_json")[0],a=s?.licenses,o=c(s?.totals);return{licenses:Array.isArray(a)?a.map(i=>c(i)).filter(i=>!!i).map(I).filter(i=>i.id):[],totals:{active:Number(o?.active??0)||0,cancelled:Number(o?.cancelled??0)||0,monthlyValue:r(o?.monthlyValue)??r(o?.retailMonthlyValue)??0}}},async cancelLicense(e){const t=await m(N.replace("{argType}","ProdSetBillingAgreementJsonPInput"),{input:{id:e,status:"CANCELLED",endDate:new Date().toISOString()}},{endpoint:u.hailaJavaGraphqlEndpoint});g(l(t,"prod_set_billing_agreement_json")[0])}};export{T as H,S as b};
