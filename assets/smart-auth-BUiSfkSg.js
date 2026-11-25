import{T as f,S as c,aw as d}from"./index-Dczi3G9i.js";import{b as m,c as h,e as s,d as i}from"./smart-auth.service-DAObLH4x.js";const l={endpoint:f.hailaJavaGraphqlEndpoint,timeoutMs:4e4},_=`
  query SmartMyCreated($countOnly: Boolean, $query: String, $status: String) {
    smart_myCreated(countOnly: $countOnly, query: $query, status: $status)
  }
`,g=`
  query SmartWorkspacePasses(
    $workspaceId: String
    $countOnly: Boolean
    $query: String
    $status: String
  ) {
    smart_workspacePasses(
      workspaceId: $workspaceId
      countOnly: $countOnly
      query: $query
      status: $status
    )
  }
`,w=`
  query SmartPassSummary {
    prod_get_smart_auth_pass_summary_json {
      json
    }
  }
`,k=`
  query SmartPassActivityManager {
    prod_get_smart_auth_pass_activity_json {
      json
    }
  }
`;function u(e,t=0){if(typeof e=="number"&&Number.isFinite(e))return Math.trunc(e);const r=Number.parseInt(String(e??""),10);return Number.isFinite(r)?r:t}function v(e){const t=i(e)??{};return{id:String(t.id??""),firstName:String(t.firstName??"").trim(),lastName:String(t.lastName??"").trim(),email:s(t.email),phone:s(t.phone)}}function I(e){const t=i(e)??{};return{workspaceLinkId:String(t.workspaceLinkId??""),uploadPath:s(t.uploadPath),url:s(t.url),message:s(t.message),whatsappUrl:s(t.whatsappUrl)}}function E(e){const t=i(e);return t?{id:String(t.id??""),name:s(t.name),complement:s(t.complement),label:s(t.label)}:null}function T(e){const t=i(e);if(!t)return null;const r=String(t.id??"").trim();return r?{id:r,status:String(t.status??"").trim().toUpperCase(),startDate:s(t.startDate),endDate:s(t.endDate),senderWorkspaceId:String(t.senderWorkspaceId??""),creatorWorkspaceId:String(t.creatorWorkspaceId??""),responsibleWorkspaceId:String(t.responsibleWorkspaceId??""),senderName:String(t.senderName??"").trim(),client:v(t.client),share:I(t.share),creatorName:s(t.creatorName),privateUnitLinkId:s(t.privateUnitLinkId),privateUnit:E(t.privateUnit),visitorKind:s(t.visitorKind),observations:s(t.observations)}:null}function p(e){const t=h(e);if(!t.success)throw new m("SMART_AUTH_QUERY_FAILED",t.errors[0]??null);const r=t.payload??{},a=(Array.isArray(r.items)?r.items:[]).map(T).filter(o=>o!==null);return{creatorWorkspaceId:String(r.creatorWorkspaceId??"").trim(),workspaceId:s(r.workspaceId),count:u(r.count,a.length),items:a}}function b(e){const t=i(e)??{};return{active:u(t.active),sending:u(t.sending),failed:u(t.failed),delivered:u(t.delivered)}}function P(e){switch(String(e??"").trim().toLowerCase()){case"sending":return"sending";case"failed":return"failed";case"delivered":return"delivered";default:return"active"}}function C(e){const t=i(e);if(!t)return null;const r=String(t.workspaceLinkId??"").trim();if(!r)return null;const n=Array.isArray(t.events)?t.events:[];return{workspaceLinkId:r,bucket:P(t.bucket),phase:String(t.phase??"").trim(),events:n.map(a=>i(a)).filter(a=>a!==null).map(a=>({at:s(a.at),kind:String(a.kind??"").trim(),text:String(a.text??"").trim()})).filter(a=>a.text.length>0)}}function U(e){const t=i(e)??{},r=Array.isArray(t.items)?t.items:[],n={};for(const a of r){const o=C(a);o&&(n[o.workspaceLinkId]=o)}return n}function y(e){const t=(e??"").trim().toUpperCase();return!t||t==="ALL"?null:t==="ACTIVE"?"ACCEPTED":t}function A(e){const t=(e??"").trim();return t.length?t:null}async function S(e,t,r){try{return(await c(e,t,l))[r]}catch(n){const a=n instanceof Error?n.message:null;throw new m("SMART_AUTH_QUERY_FAILED",a)}}const D={async getPassSummary(){const e=await c(w,{},l),t=d(e.prod_get_smart_auth_pass_summary_json);return b(t)},async getPassActivity(){const e=await c(k,{},l),t=d(e.prod_get_smart_auth_pass_activity_json);return U(t)},async getMine(e={}){const t=await S(_,{countOnly:e.countOnly===!0,query:A(e.query),status:y(e.status)},"smart_myCreated");return p(t)},async getWorkspacePasses(e){const t=e.workspaceId.trim();if(!t)throw new m("SMART_AUTH_QUERY_FAILED","workspaceId");const r=await S(g,{workspaceId:t,countOnly:e.countOnly===!0,query:A(e.query),status:y(e.status)},"smart_workspacePasses");return p(r)}};function O(e){if(!e)return"";const t=`${e.firstName??""} ${e.lastName??""}`.trim();return t||(e.email??"").trim()}function W(e){const t=(e??"").trim().toUpperCase();return t==="ACCEPTED"||t==="ACTIVE"}function K(e){switch(String(e??"").trim().toLowerCase()){case"sending":return"sending";case"failed":return"failed";case"delivered":return"delivered";default:return"active"}}function L(e){const t=new Map;for(const r of e){const n=r.senderWorkspaceId||"",a=t.get(n);if(a){a.items.push(r);continue}t.set(n,{senderWorkspaceId:n,senderName:r.senderName,items:[r]})}return[...t.values()]}function $(e){if(!e)return null;for(let t=e.events.length-1;t>=0;t-=1){const r=e.events[t]?.text?.trim();if(r)return r}return null}const N=[{value:"MINUTES_5",labelKey:"smartAuth.duration.minutes5"},{value:"HOURS_1",labelKey:"smartAuth.duration.hours1"},{value:"NOW_24H",labelKey:"smartAuth.duration.hours24"},{value:"DAYS_3",labelKey:"smartAuth.duration.days3"},{value:"WEEK_1",labelKey:"smartAuth.duration.week1"},{value:"PERMANENT",labelKey:"smartAuth.duration.permanent"}],R=[{value:"NOW_24H",labelKey:"smartAuth.duration.hours24"},{value:"DAYS_2",labelKey:"smartAuth.duration.days2"},{value:"WEEK_1",labelKey:"smartAuth.duration.week1"}];function x(e){const t=(e??"").trim().toUpperCase();return[...N,...R].find(n=>n.value===t)?.labelKey??"smartAuth.duration.custom"}export{R as S,W as a,D as b,O as c,N as d,x as e,L as g,K as p,$ as s};
