import{C as ce,L as ee,$ as k,M as K,G as A,f as le}from"./index-DfGwNIK-.js";import{i as F}from"./integrator-session-workspace-CZYBluc9.js";import{a as P}from"./area.service-CAwBangE.js";import{b as de}from"./billing.service-BDGoGxq9.js";import{r as ue,i as pe}from"./invite-link.service-DqKzLiYK.js";import{p as me}from"./datetime-DKQtLSJM.js";const $t=[{value:"geral",labelKey:"options.integratorTabs.general",icon:"pi-bolt"},{value:"unidades",labelKey:"options.integratorTabs.units",icon:"pi-building"},{value:"dispositivos",labelKey:"options.integratorTabs.devices",icon:"pi-microchip"},{value:"funcionalidades",labelKey:"options.integratorTabs.features",icon:"pi-sliders-h"},{value:"cameras",labelKey:"options.integratorTabs.cameras",icon:"pi-video"},{value:"interfonia",labelKey:"options.integratorTabs.intercom",icon:"pi-phone"}];function Ft(e){const t=e.firstName?.trim()??"",r=e.lastName?.trim()??"",a=`${t} ${r}`.trim();return a||(e.brandingName?.trim()?e.brandingName.trim():e.legalName?.trim()?e.legalName.trim():e.email?.trim()?e.email.trim():"Cliente")}function Gt(e){return e.status.toUpperCase()==="ENABLED"}function ge(e){return e.configs.auto_provision===!0}function h(e,t){const r=e.configs[t];return r==null?null:String(r).trim()||null}function jt(e){return h(e,"api_host")}function Mt(e){return h(e,"db_host")}function Wt(e){return h(e,"db_user")}function Ht(e){return h(e,"database")}function Vt(e){const t=e.configs["custom-port"]??e.configs.custom_port;if(typeof t=="number"&&Number.isFinite(t))return Math.trunc(t);if(typeof t=="string"&&t.trim()){const r=Number.parseInt(t.trim(),10);return Number.isFinite(r)?r:null}return null}function qt(e){return h(e,"hikvision_events_host")}function Kt(e){return h(e,"intelbras_events_host")}function G(e){const t=e.configs.deployment;if(!t||typeof t!="object")return null;const r=t;return{slug:r.slug??null,status:r.status??null,error:r.error??null,attempts:typeof r.attempts=="number"?r.attempts:null,queuedAt:r.queued_at??r.queuedAt??null,startedAt:r.started_at??r.startedAt??null,completedAt:r.completed_at??r.completedAt??null,provisionedAt:r.provisioned_at??r.provisionedAt??null,coolifyServiceUuid:r.coolify_service_uuid??r.coolifyServiceUuid??null}}function te(e){return G(e)?.status??null}function Yt(e){return h(e,"slug")??G(e)?.slug??null}function fe(e){return(te(e)??"").toUpperCase()==="READY"}function ye(e){const t=(te(e)??"").toUpperCase();return t==="FAILED"||t==="ERROR"}function zt(e){return fe(e)||ye(e)?!1:G(e)!=null?!0:ge(e)}const _e=new Set(["thumbnail","rtspLink","webRTCLink","go2rtc_rtsp","go2rtc_tapo","go2rtc_isapi","isapiLink","isapiUrl","isapi_url"]);function Jt(e){return _e.has(e.fieldSlug)}const Ie=["brava_access_name","brava_module_serial","brava_sector"];function Qt(e){if(!e)return!1;const t=new Set(e.deviceTemplateConfigs.map(r=>r.fieldSlug));return Ie.every(r=>t.has(r))}function j(e){return(e.template?.deviceType.slug??"").trim().toLowerCase()}function Xt(e){return e.template?.deviceType.label??""}const Ae="camera",Te="extension_line",Ce="access_authenticator";function Y(e){return j(e)===Te}function Ee(e){return j(e)===Ae}function re(e){const t=j(e);return t===Ce||t==="authenticator"}function ke(e){if(!re(e))return!1;const t=[e.name,e.template?.name,e.template?.deviceType.label].filter(Boolean).join(" ").toLowerCase();return/facial|face[\s_-]?recog|reconhecimento|rosto|scan[\s_-]?face/.test(t)}function Zt(e){return Ee(e)?"cctv":ke(e)?"scan-face":re(e)?"key":"box"}function er(e,t){const r=e.hierarchyName.trim().length>0,a=t.hierarchyName.trim().length>0;return r!==a?r?1:-1:e.name.toLowerCase().localeCompare(t.name.toLowerCase())}function tr(e){const t=new Map;for(const r of e)for(const a of r.deviceTemplates){const n=a.deviceType;n.slug&&(t.has(n.slug)||t.set(n.slug,n))}return[...t.values()].sort((r,a)=>r.label.localeCompare(a.label))}function p(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function l(e){return typeof e=="string"?e:typeof e=="number"||typeof e=="boolean"?String(e):""}function g(e){return l(e).trim()||null}function ve(e){return l(e).trim().toLowerCase()}function be(e){return{id:l(e.id),type:l(e.type),firstName:l(e.firstName),lastName:l(e.lastName),brandingName:l(e.brandingName),email:l(e.email),legalName:l(e.legalName),phone:g(e.phone)}}function Re(e){const t=g(e.complement)?.trim()||null,r=l(e.name).trim(),a=!!r&&r.toLowerCase()!=="moradores";let n=null;return a&&t&&t!==r?n=`${r} (${t})`:t?n=t:a&&(n=r),{id:l(e.id),name:r,complement:t,categoryName:g(e.categoryName),unitLabel:n}}function Se(e){const r=p(e.groupsByClient)?.payload,a=Array.isArray(r)?r.filter(c=>!!p(c)).map(c=>Re(c)):[],n=p(e.recognitionSettingByWorkspaceClientId),s=g(n?.processedUrl),o=g(n?.originalURL),i=g(e.photoUrl);return{id:l(e.id),type:l(e.type),email:g(e.email),phone:g(e.phone),firstName:g(e.firstName),lastName:g(e.lastName),legalName:g(e.legalName),brandingName:g(e.brandingName),groups:a,photoUrl:s??o??i}}function ae(e){const t=p(e.workspaceClient);return{id:l(e.id),status:l(e.status),createdAt:g(e.createdAt),workspaceClient:t?Se(t):null}}function he(e,t){const a=(Array.isArray(e.dependents)?e.dependents:[]).filter(i=>!!p(i)).map(ae).sort((i,c)=>!i.createdAt&&!c.createdAt?0:i.createdAt?c.createdAt?c.createdAt.localeCompare(i.createdAt):-1:1),n=typeof e.registrantsCount=="number"?e.registrantsCount:Number.parseInt(String(e.registrantsCount??""),10),s=Number.isFinite(n)?n:a.length,o=l(e.url);return{id:l(e.id),url:o&&ue(o,t),name:l(e.name),startDate:g(e.startDate),endDate:g(e.endDate),registrantsCount:s,dependents:a}}function Ne(e){const t=e.total,r=typeof t=="number"?t:Number.parseInt(String(t??"0"),10)||0,n=(Array.isArray(e.items)?e.items:[]).filter(s=>!!p(s)).map(ae);return{total:r,items:n}}function De(e){const t=p(e.configs)??{};return{id:l(e.id),name:l(e.name),status:l(e.status),localIp:g(e.local_ip)??g(e.localIp),vpnIp:g(e.vpn_ip)??g(e.vpnIp),workspaceId:l(e.workspace_id)||l(e.workspaceId),configs:t}}function Pe(e,t=null){if(!e&&!t)return null;const r=p(e?.deviceType)??t;return{id:l(e?.id),name:l(e?.name),deviceType:{id:l(r?.id),label:l(r?.label),slug:ve(r?.slug)}}}function Le(e){const t=Array.isArray(e.deviceManufacturers)?e.deviceManufacturers:[];let r=null;for(const o of t){const i=p(o),c=g(i?.externalApiKeyId);if(c){r=c;break}}const a=p(e.status)??p(e.deviceStatus),n=p(e.template)??p(e.deviceTemplate),s=p(e.deviceType);return{id:l(e.id),name:l(e.name),passageId:g(e.passageId),areaId:g(e.areaId),workspaceId:l(e.workspaceId),statusName:g(a?.name),externalApiKeyId:r,template:Pe(n,s)}}function z(e){if(!Array.isArray(e))return[];const t=new Set,r=[];for(const a of e){const n=p(a);if(!n)continue;const s=Le(n);!s.id||t.has(s.id)||(t.add(s.id),r.push(s))}return r}function we(e){const t=p(e.areaHierarchy),r=p(e.parentArea),a=Array.isArray(e.passages)?e.passages:[],n=[...Array.isArray(e.devices)?e.devices:[],...Array.isArray(e.areaDevices)?e.areaDevices:[]],s=p(e.areaType),o=p(e.areaCategory);return{id:l(e.id),name:l(e.name),hierarchyName:l(t?.name)||l(r?.name),areaTypeId:l(s?.id),areaTypeName:l(s?.name),areaCategoryId:l(o?.id),areaCategoryName:l(o?.name),passages:a.filter(i=>!!p(i)).map(i=>({id:l(i.id),name:l(i.name),devices:z(i.devices)})),areaDevices:z(n)}}function rr(e){return{...e,areaDevices:e.areaDevices.filter(t=>!Y(t)),passages:e.passages.map(t=>({...t,devices:t.devices.filter(r=>!Y(r))}))}}function Be(e){return{id:l(e?.id),label:l(e?.label),slug:l(e?.slug)}}function xe(e){return{id:l(e.id),fieldLabel:l(e.fieldLabel),fieldHelper:g(e.fieldHelper)??g(e.field_helper),fieldMask:g(e.fieldMask),fieldSlug:l(e.fieldSlug),fieldType:l(e.fieldType)||"string",fieldDefaultValue:g(e.fieldDefaultValue)}}function Oe(e){const t=Array.isArray(e.deviceFeatures)?e.deviceFeatures:[],r=Array.isArray(e.deviceTemplateConfigs)?e.deviceTemplateConfigs:[];return{id:l(e.id),name:l(e.name),externalApiKeyIdLabel:l(e.externalApiKeyIdLabel)||"Código de integração",deviceType:Be(p(e.deviceType)),deviceFeatures:t.filter(a=>!!p(a)).map(a=>({id:l(a.id),name:l(a.name)})),deviceTemplateConfigs:r.filter(a=>!!p(a)).map(a=>xe(a))}}function Ue(e){const t=Array.isArray(e.deviceTemplates)?e.deviceTemplates:[];return{id:l(e.id),name:l(e.name),deviceTemplates:t.filter(r=>!!p(r)).map(r=>Oe(r))}}function $e(e,t){for(const r of e){const a=r.deviceTemplates.find(n=>n.id===t);if(a)return a}return null}function Fe(e){let t=e;for(const r of["json","payload","data","result"]){const a=p(t[r]);a&&(t=a)}return t}function ar(e){let t=e;if(typeof t=="string"){const C=t;try{t=JSON.parse(C)}catch{return{canHardDelete:!1,message:C,dependencies:[],impact:{},raw:{}}}}Array.isArray(t)&&(t=t[0]);const r=p(t);if(!r)return{canHardDelete:!1,message:"Resposta de verificação não reconhecida",dependencies:[],impact:{},raw:{}};const a=Fe(r),n=["can_hard_delete","canHardDelete","can_delete","canDelete","allowed","success","ok","removed","deleted"];let s=null;for(const C of n){const _=a[C];if(typeof _=="boolean"){s=_;break}if(typeof _=="number"){s=_!==0;break}if(typeof _=="string"&&(_==="true"||_==="false")){s=_==="true";break}}const o=(()=>{for(const C of["status","result","code"]){const _=a[C];if(typeof _=="string"&&_.trim())return _.trim()}return null})(),c=(C=>{for(const _ of C){const $=a[_];if(typeof $=="string"&&$.trim())return $.trim()}return null})(["message","error","reason","detail"]),m=a.dependencies??a.blocking_dependencies??a.blockers??a.blocking??a.blocking_records,f=Array.isArray(m)?m.map(C=>String(C)).filter(C=>C.trim()):[],E=p(a.wouldRemove)??p(a.would_remove)??p(a.removed),d={};if(E)for(const[C,_]of Object.entries(E))typeof _=="number"&&(d[C]=_);const v=(o??"").toLowerCase(),oe=v.includes("error")||v.includes("block")||v.includes("fail")||v.includes("denied"),ie=v.includes("success")||v==="ok"||v.includes("allowed"),q=s??(oe?!1:!!ie);return{canHardDelete:q,message:c??(!q&&s===null&&o===null?"Resposta de verificação não reconhecida":null),dependencies:f,impact:d,raw:a}}const nr="7f8cd27d-5dd4-4d1c-b648-348b5c16c513",sr="b73fa253-3126-45bb-b6cd-4b726092e579",or="ef5169ae-da3c-41b3-bb1f-70965ce4f1e0",ir="cc917e4e-4799-48f6-a03d-f34cb2516edb",D="2313d889-801a-44f1-90dc-1257651ccf4b",cr="VERTICAL_BATCH",ne="SEQUENTIAL_BATCH",Ge="MULTI_BLOCK_BATCH",M=3,W="private_areas",H="DRAFT",lr="Porta unidade privativa",J="onboarding-draft";function R(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function y(e,t=""){return typeof e=="string"?e:t}function T(e){return typeof e!="string"?null:e.trim()||null}function b(e,t=0){if(typeof e=="number"&&Number.isFinite(e))return Math.trunc(e);if(typeof e=="string"&&e.trim()){const r=Number.parseInt(e,10);if(Number.isFinite(r))return r}return t}const je=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function N(e){return!!(e&&je.test(e.trim()))}function w(e){const t=e.trim().match(/(\d+)\s*$/);if(!t)return null;const r=Number.parseInt(t[1],10);return Number.isFinite(r)?r:null}function U(e){if(!e)return null;const t=e.replace(/\D/g,"");if(!t)return null;const r=Number.parseInt(t,10);return Number.isFinite(r)?r:null}function V(e,t){const r=(t??"").trim();if(!r)return t;const a=e.trim();return a?`${a}${r}`:r}function L(e){return w(e.name)??U(e.complement)}function Me(e){const t=L(e);return t==null?-1:Math.trunc(t/100)}function dr(e){const t=e.units.map((n,s)=>({index:s,unit:n}));if(e.mode===ne){const n=[...t].sort((s,o)=>{const i=L(s.unit),c=L(o.unit);return i!=null&&c!=null&&i!==c?i-c:i==null&&c!=null?1:i!=null&&c==null?-1:s.unit.name.toLowerCase().localeCompare(o.unit.name.toLowerCase())});return n.length?[{floorKey:0,entries:n}]:[]}const r=new Map;for(const n of t){const s=Me(n.unit),o=r.get(s)??[];o.push(n),r.set(s,o)}return[...r.keys()].sort((n,s)=>n===-1?1:s===-1?-1:n-s).map(n=>({floorKey:n,entries:(r.get(n)??[]).sort((s,o)=>{const i=L(s.unit),c=L(o.unit);return i!=null&&c!=null&&i!==c?i-c:s.unit.name.toLowerCase().localeCompare(o.unit.name.toLowerCase())})}))}function We(e){if(!Number.isFinite(e.initialUnit)||!Number.isFinite(e.finalUnit))return[];if(e.initialUnit>e.finalUnit)return[];const t=e.prefix.trim(),r=[];for(let a=e.initialUnit;a<=e.finalUnit;a+=1)r.push(t?`${t} ${a}`:String(a));return r}function se(e){return{id:null,name:e.name,type:e.type??D,category:e.category??null,externalLine:e.externalLine}}function He(e){const t=y(e.name),a=(Array.isArray(e.passages)?e.passages:[]).filter(i=>!!R(i)).map(i=>({id:T(i.id),name:y(i.name),type:T(i.type),category:T(i.category),externalLine:T(i.external_line)??T(i.externalLine)})),n=T(e.complement),s=w(t)??U(t),o=n??(s!=null?String(s):null);return{id:T(e.id),name:t,complement:o,areaParentId:T(e.areaParentId)??T(e.area_parent_id),hasExternalLine:e.has_external_line===!0||e.hasExternalLine===!0,passages:a}}function Ve(e,t=new Date().toISOString()){const r=R(e)??{},a=R(r.data)??{},n=R(a.area_forms)??{},s=R(n.generated_units)??{},o=Array.isArray(s.units)?s.units:[],i=Array.isArray(n.complement_by_floor)?n.complement_by_floor.map(d=>String(d??"")):[],m=y(n.condo_format).toLowerCase()==="multi"?"multi":"single",E=(Array.isArray(n.blocks)?n.blocks:[]).filter(d=>!!R(d)).map(d=>({areaId:y(d.areaId??d.area_id),name:y(d.name),mode:y(d.mode),prefix:y(d.prefix),complementPrefix:y(d.complementPrefix??d.complement_prefix).trim(),initialFloor:b(d.initialFloor??d.initial_floor),finalFloor:b(d.finalFloor??d.final_floor),unitsByFloor:b(d.unitsByFloor??d.units_by_floor),complementByFloor:Array.isArray(d.complementByFloor)?d.complementByFloor.map(v=>String(v??"")):Array.isArray(d.complement_by_floor)?d.complement_by_floor.map(v=>String(v??"")):[],unitCount:b(d.unitCount??d.unit_count)})).filter(d=>!!d.areaId);return{status:y(r.status),step:b(r.step),name:y(r.name),mode:y(n.mode),prefix:y(n.prefix),complementPrefix:y(n.complement_prefix).trim(),initialFloor:b(n.initial_floor),finalFloor:b(n.final_floor),areaParentId:T(n.area_parent_id),unitsByFloor:b(n.units_by_floor),passageCategory:y(n.passage_category),passageType:y(n.passage_type)||D,complementByFloor:i,units:o.filter(d=>!!R(d)).map(d=>He(d)),generatedAt:t,savedItemId:null,generalPreferenceId:null,preferenceName:null,condoFormat:m,masterAreaId:T(n.master_area_id)??T(n.masterAreaId),blocks:E}}function ur(e){const r=We({prefix:e.prefix,initialUnit:e.initialUnit,finalUnit:e.finalUnit}).map(a=>{const n=V(e.complementPrefix??"",String(w(a)??""));return{id:null,name:a,complement:n,areaParentId:e.areaParentId,hasExternalLine:e.insertIntercomExtension,passages:[se({name:a,category:e.passageCategory||null,externalLine:e.insertIntercomExtension?n:null})]}});return{status:H,step:M,name:W,mode:ne,prefix:e.prefix.trim(),complementPrefix:(e.complementPrefix??"").trim(),initialFloor:e.initialUnit,finalFloor:e.finalUnit,areaParentId:e.areaParentId,unitsByFloor:0,passageCategory:e.passageCategory,passageType:D,complementByFloor:[],units:r,generatedAt:new Date().toISOString(),savedItemId:null,generalPreferenceId:null,preferenceName:null,condoFormat:"single",masterAreaId:e.areaParentId,blocks:[]}}function pr(e){const t=e.blocks.filter(n=>n.units.length>0),r=t.flatMap(n=>n.units.map(s=>({...s,areaParentId:n.snapshot.areaId}))),a=t[0];return{status:H,step:M,name:W,mode:Ge,prefix:a?.snapshot.prefix??"",complementPrefix:a?.snapshot.complementPrefix??"",initialFloor:a?.snapshot.initialFloor??0,finalFloor:a?.snapshot.finalFloor??0,areaParentId:e.masterAreaId,unitsByFloor:a?.snapshot.unitsByFloor??0,passageCategory:e.passageCategory,passageType:e.passageType||D,complementByFloor:a?.snapshot.complementByFloor??[],units:r,generatedAt:new Date().toISOString(),savedItemId:null,generalPreferenceId:null,preferenceName:null,condoFormat:"multi",masterAreaId:e.masterAreaId,blocks:t.map(n=>({...n.snapshot,unitCount:n.units.length}))}}function mr(e){const t=e.name.trim(),r=e.template?.passages[0]??null,a=w(t)??U(t),n=V(e.complementPrefix,a!=null?String(a):null);return{id:null,name:t,complement:n,areaParentId:e.areaParentId??e.template?.areaParentId??null,hasExternalLine:e.hasExternalLine,passages:[{id:null,name:t,type:r?.type??D,category:r?.category??null,externalLine:e.hasExternalLine?n:null}]}}function qe(e,t,r={}){const a=r.name?.trim()||e.name,n=w(a)??U(a),s=V(t,n!=null?String(n):e.complement),o=r.hasExternalLine??e.hasExternalLine,i=e.passages.length?e.passages.map(c=>({...c,name:a,externalLine:o?s:null})):o?[se({name:a,externalLine:s})]:[];return{...e,name:a,complement:s,hasExternalLine:o,passages:i}}function gr(e,t){return{...e,complementPrefix:t.trim(),units:e.units.map(r=>qe(r,t))}}function Ke(e){return{data:{area_forms:{mode:e.mode,condo_format:e.condoFormat??"single",master_area_id:e.masterAreaId,area_parent_id:e.areaParentId,prefix:e.prefix,complement_prefix:e.complementPrefix,final_floor:e.finalFloor,passage_type:e.passageType,initial_floor:e.initialFloor,units_by_floor:e.unitsByFloor,passage_category:e.passageCategory,complement_by_floor:e.complementByFloor,blocks:(e.blocks??[]).map(t=>({areaId:t.areaId,name:t.name,mode:t.mode,prefix:t.prefix,complement_prefix:t.complementPrefix,initial_floor:t.initialFloor,final_floor:t.finalFloor,units_by_floor:t.unitsByFloor,complement_by_floor:t.complementByFloor,unit_count:t.unitCount})),generated_units:{area:"",units:e.units.map(t=>({id:t.id,name:t.name,prefix:"",complement:t.complement,passages:t.passages.map(r=>({id:r.id,name:r.name,type:r.type,category:r.category,external_line:r.externalLine})),areaParentId:t.areaParentId,has_external_line:t.hasExternalLine}))}}},name:W,step:M,status:H}}function fr(e,t){const r=Ke(e),n=r.data.area_forms,s=N(t.passageTypeId)?t.passageTypeId:N(e.passageType)?e.passageType:D;n.passage_type=s,n.passage_category=t.passageCategoryId;const o=n.generated_units,i=Array.isArray(o.units)?o.units:[],c=N(e.areaParentId)?e.areaParentId:null;for(const m of i){const f=N(m.areaParentId)?m.areaParentId:c;f?m.areaParentId=f:delete m.areaParentId;const E=Array.isArray(m.passages)?m.passages:[];for(const d of E)d.category=N(d.category)?d.category:t.passageCategoryId,d.type=N(d.type)?d.type:s}return r}function Ye(e=new Date){const t=r=>String(r).padStart(2,"0");return`Rascunho${t(e.getDate())}${t(e.getMonth()+1)}${e.getFullYear()}${t(e.getHours())}${t(e.getMinutes())}`}function yr(e,t={}){if(!e)return"Sem data de atualização";const r=me(e);if(!r)return"Sem data de atualização";const a=ce(r,{timeZone:"America/Sao_Paulo",weekday:"short",day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),n=a.charAt(0).toUpperCase()+a.slice(1);return t.includeRascunhoPrefix?`Rascunho ${n}`:n}function ze(e){const t=R(e.payload)??{};return{id:y(e.id),generalPreferenceId:T(e.generalPreferenceId),name:y(e.name),slug:y(e.slug),step:b(e.step),status:y(e.status),payload:t,createdAt:T(e.createdAt),updatedAt:T(e.updatedAt)}}function _r(e){const t=e.updatedAt??e.createdAt??new Date().toISOString();return{...Ve(e.payload,t),savedItemId:e.id||null,generalPreferenceId:e.generalPreferenceId,preferenceName:e.name||null}}const Je=6e4,Qe=12e4;function u(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function I(e){if(Array.isArray(e)){if(e.length===0)return null;const r=u(e[0]);return r?r.json??null:null}const t=u(e);return t?t.json??t:null}function B(e,t){if(!e)throw new Error(t);if(e.success===!0)return;const r=Array.isArray(e.errorMessages)?e.errorMessages.map(a=>String(a)).filter(Boolean):[];throw new Error(r[0]??t)}const Xe=`
  query GetActiveClientCount($input: getactiveworkspaceclientscountjson_args!) {
    getactiveworkspaceclientscountjson(args: $input) {
      json
    }
  }
`,Ze=`
  query FetchWorkspaceClients($input: getworkspaceclientsinprivateunitgroupsjson_args!) {
    getworkspaceclientsinprivateunitgroupsjson(args: $input) {
      json
    }
  }
`,et=`
  query FetchWorkspaceClients($input: getworkspaceclientsnotinprivateunitgroupsjson_args!) {
    getworkspaceclientsnotinprivateunitgroupsjson(args: $input) {
      json
    }
  }
`,tt=`
  query GetAutoadesaoInviteLinksSummary(
    $workspaceId: String!
    $sessionWorkspaceId: String
  ) {
    prod_get_autoadesao_invite_links_summary_json(
      selectedworkspaceid: $workspaceId
      p_session_workspace_id: $sessionWorkspaceId
    ) {
      json
    }
  }
`,rt=`
  query GetAutoadesaoInviteLinkRegistrants(
    $inviteLinkId: String!
    $sessionWorkspaceId: String
    $limit: Int
    $offset: Int
    $likeParam: String
    $order: String
    $onlyManagerPending: Boolean
  ) {
    prod_get_autoadesao_invite_link_registrants_json(
      selectedinvitelinkid: $inviteLinkId
      p_session_workspace_id: $sessionWorkspaceId
      selectedlimit: $limit
      selectedoffset: $offset
      selectedlikeparam: $likeParam
      selectedorder: $order
      selectedonlymanagerpending: $onlyManagerPending
    ) {
      json
    }
  }
`,at=`
  query SessionPresenceByClients($input: Any!) {
    session_presenceByClients(input: $input)
  }
`;function nt(e){if(!e||typeof e!="object"||Array.isArray(e))return null;const t=e,r=typeof t.workspaceClientId=="string"?t.workspaceClientId.trim():"";if(!r)return null;const a=typeof t.status=="string"?t.status.trim():null;return{workspaceClientId:r,clientType:typeof t.clientType=="string"?t.clientType:null,presenceMode:typeof t.presenceMode=="string"?t.presenceMode:null,userId:typeof t.userId=="string"?t.userId:null,status:a,hasEverLoggedIn:t.hasEverLoggedIn===!0,lastSeenAt:typeof t.lastSeenAt=="string"?t.lastSeenAt:null,currentRoute:typeof t.currentRoute=="string"?t.currentRoute:null,online:t.online===!0||a==="online"}}const st=`
  query GetWorkspaceClientFacePhotos(
    $workspaceId: String!
    $clientIds: [String!]
    $sessionWorkspaceId: String
  ) {
    prod_get_workspace_client_face_photos_json(
      selectedworkspaceid: $workspaceId
      selectedworkspaceclientids: $clientIds
      p_session_workspace_id: $sessionWorkspaceId
    ) {
      json
    }
  }
`,x={endpoint:ee.hailaJavaGraphqlEndpoint,timeoutMs:3e4},ot=`
  query GetBridgesByWorkspace($workspaceId: uuid!) {
    getbridgesbyworkspacejson(args: { selectedworkspaceid: $workspaceId }) {
      json
    }
  }
`,it=`
  mutation CreateBridge($name: String!, $workspaceId: uuid!) {
    create_bridge(args: { p_name: $name, p_workspace: $workspaceId }) {
      json
    }
  }
`,ct=`
  query GetWorkspaceAreasWithDevices($args: get_workspace_areas_with_devices_json_args!) {
    get_workspace_areas_with_devices_json(args: $args) {
      json
    }
  }
`,lt=`
  query GetWorkspaceAreaHierarchyLabels($workspaceId: UUID!) {
    workspaceAreasWithDevices(workspaceId: $workspaceId) {
      id
      areaHierarchy {
        name
      }
    }
  }
`,dt=`
  query GetManufacturers {
    manufacturers {
      id
      name
      deviceTemplates {
        id
        name
        externalApiKeyIdLabel
        deviceFeatures {
          id
          name
        }
        deviceTemplateConfigs {
          id
          fieldLabel
          fieldMask
          fieldSlug
          fieldType
          fieldDefaultValue
        }
        deviceType {
          id
          label
          slug
        }
      }
    }
  }
`,ut=`
  query GetDeviceById($deviceId: uuid!, $userId: uuid!) {
    getdevicebyidjson(args: { device_id: $deviceId, user_id: $userId }) {
      json
    }
  }
`,pt=`
  mutation SetDevice($input: DeviceInputDtoInput!) {
    setDevice(input: $input) {
      success
      errorMessages
      payload {
        id
      }
    }
  }
`,mt=`
  mutation DeleteDevice($deviceId: UUID!) {
    deleteDevice(id: $deviceId) {
      success
      errorMessages
    }
  }
`,gt=`
  mutation CreateWorkspaceLegalPersonFromWorkspace($input: WorkspaceLegalPersonCloneInput!) {
    createWorkspaceLegalPersonFromWorkspace(input: $input) {
      success
      errorMessages
      payload {
        id
      }
    }
  }
`,ft=`
  mutation DeleteWorkspace($id: UUID!) {
    deleteWorkspace(id: $id) {
      success
      errorMessages
    }
  }
`,yt=`
  query Getareasbyworkspaceidwithoutfiltersjson($workspaceId: uuid!) {
    getareasbyworkspaceidwithoutfiltersjson(args: { selectedworkspaceid: $workspaceId }) {
      json
    }
  }
`,_t=`
  mutation GenerateBuildingUnits($p_params: jsonb!, $p_workspace_id: uuid!) {
    generate_building_units(args: { p_params: $p_params, p_workspace_id: $p_workspace_id }) {
      json
    }
  }
`,It=`
  mutation RemoveOnboardingPrivateUnit($input: remove_onboarding_private_unit_args!) {
    remove_onboarding_private_unit(args: $input) {
      json
    }
  }
`,At=`
  mutation GenerateOnboardingPrivateUnits($input: generate_onboarding_private_units_args!) {
    generate_onboarding_private_units(args: $input) {
      json
    }
  }
`,Tt=`
  query ListOnboardingDrafts($input: getonboardingdraftsbyworkspacejson_args!) {
    getonboardingdraftsbyworkspacejson(args: $input) {
      json
    }
  }
`,Ct=`
  mutation SaveOnboardingDraft($input: set_general_preference_json_v2_args!) {
    set_general_preference_json_v2(args: $input) {
      json
    }
  }
`,Et=`
  mutation GenerateBuildingUnits($p_params: jsonb!, $p_workspace_id: uuid!) {
    generate_building_units(args: { p_params: $p_params, p_workspace_id: $p_workspace_id }) {
      json
    }
  }
`,kt=`
  query GetWorkspaceLinkByExternalApiKey($args: get_workspace_link_by_external_api_key_args!) {
    get_workspace_link_by_external_api_key(args: $args) {
      json
    }
  }
`,vt=`
  mutation UpdateWorkspaceLinksUpdatedAtTrigger($args: updateworkspacelinksupdatedattriggerjson_args!) {
    updateworkspacelinksupdatedattriggerjson(args: $args) {
      json
    }
  }
`,bt=`
  query GetContractsByRecipient($workspaceId: UUID!, $currencyName: String) {
    contractsByRecipient(workspaceId: $workspaceId, currencyName: $currencyName) {
      success
      payload {
        id
        status
        template {
          id
          name
        }
      }
    }
  }
`,Rt=`
  query GetTemplates {
    hailaSubscriptionContractTemplates {
      success
      errorMessages
      payload {
        id
        name
        description
        workspaceLinkContractTemplateCredits {
          id
        }
      }
    }
  }
`,St=`
  mutation createHailaClientContractsByTemplate($input: CreateHailaClientContractsInput!) {
    createHailaClientContractsByTemplate(input: $input) {
      success
      errorMessages
    }
  }
`,ht=`
  mutation DisableContract($contractId: UUID!) {
    disableContract(workspaceLinkContractId: $contractId) {
      success
      errorMessages
    }
  }
`,Q="Unidades privativas",X="Porta unidade privativa",Z="Condomínio",Nt="7f8cd27d-5dd4-4d1c-b648-348b5c16c513",Dt="ef5169ae-da3c-41b3-bb1f-70965ce4f1e0",O="2313d889-801a-44f1-90dc-1257651ccf4b",Pt=Array.from({length:7},(e,t)=>({areaId:null,dayWeek:String(t+1),startHour:"00:00",endHour:"23:59"})),S={filterIntegratorClients(e,t){return e.filter(r=>r.type==="LEGAL_PERSON").filter(r=>r.id!==t).map(r=>r.id)},async getActiveClientCount(e){if(!e)return 0;const t=await A(Xe,{input:{selectedworkspaceid:e}}),r=I(t.getactiveworkspaceclientscountjson);if(u(r)){const a=r.count;if(typeof a=="number")return a;if(typeof a=="string"&&a.trim())return Number(a)||0}return 0},async getWorkspaceClientsInPrivateUnitGroups(e){return S.fetchWorkspaceClients(e,Ze,"getworkspaceclientsinprivateunitgroupsjson")},async getWorkspaceClientsNotInPrivateUnitGroups(e){return S.fetchWorkspaceClients(e,et,"getworkspaceclientsnotinprivateunitgroupsjson")},async fetchWorkspaceClients(e,t,r){if(!e)return[];const a=await A(t,{input:{selectedworkspaceid:e}}),n=I(a[r]);return Array.isArray(n)?n.filter(s=>!!u(s)).map(s=>be(s)).filter(s=>s.id).sort((s,o)=>s.firstName.toLowerCase().localeCompare(o.firstName.toLowerCase())):[]},async getGroupSelectInviteLinks(e,t){if(!e)return[];const r=await A(tt,{workspaceId:e,...F(t)},x),a=I(r.prod_get_autoadesao_invite_links_summary_json);return Array.isArray(a)?a.filter(n=>!!u(n)).map(n=>he(n,le.officialInviteWebUrl)).filter(n=>n.id):[]},async getAutoadesaoInviteLinkRegistrants(e,t){if(!e)return{total:0,items:[]};const r=t?.limit??50,a=t?.offset??0,s=(t?.likeParam?.trim()??"")||null,o=t?.order==="alpha"?"alpha":"recent",i=t?.onlyManagerPending===!0,c=await A(rt,{inviteLinkId:e,...F(t?.sessionWorkspaceId),limit:r,offset:a,likeParam:s,order:o,onlyManagerPending:i},x),m=I(c.prod_get_autoadesao_invite_link_registrants_json),f=u(m);return f?Ne(f):{total:0,items:[]}},async getWorkspaceClientFacePhotos(e,t,r){if(!e||t.length===0)return{};const a=[...new Set(t.filter(Boolean))].slice(0,100);if(a.length===0)return{};const n=await A(st,{workspaceId:e,clientIds:a,...F(r)},x),s=I(n.prod_get_workspace_client_face_photos_json);if(!Array.isArray(s))return{};const o={};for(const i of s){const c=u(i);if(!c)continue;const m=String(c.workspaceClientId??"").trim(),f=String(c.photoUrl??"").trim();m&&f&&(o[m]=f)}return o},async getPresenceByClients(e){const t=[...new Set(e.filter(Boolean))].slice(0,500);if(t.length===0)return{};const r=await A(at,{input:{workspaceClientIds:t}},x),a=u(r.session_presenceByClients);if(!a||a.success!==!0)return{};const n=Array.isArray(a.items)?a.items:[],s={};for(const o of n){const i=nt(o);i&&(s[i.workspaceClientId]=i)}return s},async setSelfEnrollmentInviteLink(e){const t=e.workspaceId;return pe.setWorkspaceInviteLink({workspaceLinkId:null,linkStatus:"ACCEPTED",responsibleWorkspaceId:t,senderWorkspaceId:t,permissionId:"0c8b41d5-2cc1-4674-b9ae-ed62ccf6e5bd",startDate:e.startDate,endDate:e.endDate,name:e.name,description:e.description,allowedWorkspaceTypes:["PERSON"],requireManagerApproval:!0,dependents:-1,allowedDomains:[],newContracts:[],groups:[],showOptionalCustomFields:!1,requireGroupSelectByUser:!0,addOnGroupAsAdmin:!0,reservations:[],cloneDetails:[],contractDependents:[]})},async getBridgesByWorkspace(e){if(!e)return[];const t=await A(ot,{workspaceId:e}),r=I(t.getbridgesbyworkspacejson);return Array.isArray(r)?r.filter(a=>!!u(a)).map(a=>De(a)).filter(a=>a.id):[]},async createBridge(e,t){const r=t.trim();if(!e||!r)throw new Error("Nome e workspace sao obrigatorios");const a=await k(it,{name:r,workspaceId:e}),n=I(a.create_bridge),s=u(n);if(s&&s.success===!1){const o=Array.isArray(s.errorMessages)?s.errorMessages.map(i=>String(i)).filter(Boolean):[];throw new Error(o[0]??"Falha ao criar bridge")}},async getWorkspaceAreasWithDevices(e){if(!e)return[];const t=50,r=[];let a=0,n=!0;for(;n;){const o=await A(ct,{args:{p_workspace_id:e,p_offset:a,p_limit:t}},{timeoutMs:45e3}),i=I(o.get_workspace_areas_with_devices_json),c=typeof i=="string"?JSON.parse(i):i,m=u(c);if(!m)throw new Error("Resposta invalida ao carregar dispositivos");const f=Array.isArray(m.areas)?m.areas:[];r.push(...f.filter(d=>!!u(d)).map(d=>we(d)));const E=u(m.pagination);n=E?.hasMore===!0,a=typeof E?.nextOffset=="number"?E.nextOffset:a+t}const s=await S.getAreaHierarchyLabels(e);return Object.keys(s).length===0?r:r.map(o=>{const i=s[o.id];return i?{...o,hierarchyName:i}:o})},async getAreaHierarchyLabels(e){try{const t=await A(lt,{workspaceId:e}),r=Array.isArray(t.workspaceAreasWithDevices)?t.workspaceAreasWithDevices:[],a={};for(const n of r){const s=u(n),o=typeof s?.id=="string"?s.id:"";if(!o)continue;const i=u(s?.areaHierarchy),c=typeof i?.name=="string"?i.name.trim():"";c&&(a[o]=c)}return a}catch{return{}}},async getManufacturers(){const e=await A(dt,{});return(Array.isArray(e.manufacturers)?e.manufacturers:[]).filter(r=>!!u(r)).map(r=>Ue(r))},async getDevice(e,t){const a=(await A(ut,{deviceId:e,userId:t})).getdevicebyidjson,n=I(a),s=u(n);if(!s||s.found===!1||!s.id)throw new Error("Dispositivo nao encontrado");return s},async setDevice(e){const t=!e.deviceId,r=!!e.passageId,a={id:t?null:e.deviceId,name:e.name,workspaceId:e.workspaceId,deviceTemplateId:e.deviceTemplateId,passageId:r?e.passageId:null,areaId:r?null:e.areaId??null,deviceStatus:{name:"NOT_SYNC"},bridgeId:e.bridgeId??null,deviceFeatures:(e.deviceFeatureIds??[]).filter(c=>c).map(c=>({id:c})),configs:e.deviceConfigs.map(c=>({...c.id?{id:c.id}:{},deviceTemplateConfigId:c.deviceTemplateConfigId,value:c.value}))};e.externalApiKey&&(a.externalApiKey=e.externalApiKey);const n=await k(pt,{input:a}),s=u(n.setDevice);B(s,"Falha ao salvar dispositivo");const o=u(s?.payload),i=typeof o?.id=="string"?o.id:e.deviceId??"";if(!i)throw new Error("Dispositivo salvo sem identificador");return i},async deleteDevice(e){const t=await k(mt,{deviceId:e});B(u(t.deleteDevice),"Falha ao remover dispositivo")},async createClientWorkspace(e){const t=await k(gt,{input:{workspaceId:e.workspaceId,legalName:e.legalName,brandingName:e.brandingName,email:e.email,flagType:e.flagType,address:e.address??"",complement:e.complement??"",city:e.city??"",country:e.country??"",state:e.state??"",zipCode:e.zipCode??""}}),r=u(t.createWorkspaceLegalPersonFromWorkspace);if(!r)throw new Error("Resposta invalida ao criar workspace");const a=u(r.payload);return{success:r.success===!0,errorMessages:Array.isArray(r.errorMessages)?r.errorMessages.map(n=>String(n)):[],createdWorkspaceId:typeof a?.id=="string"?a.id:null}},async deleteWorkspace(e){const t=await k(ft,{id:e});B(u(t.deleteWorkspace),"Falha ao excluir condominio")},async getAreasWithoutFilters(e){if(!e)return[];const t=await A(yt,{workspaceId:e}),r=I(t.getareasbyworkspaceidwithoutfiltersjson);return Array.isArray(r)?r.filter(a=>!!u(a)).map(a=>{const n=a,s=u(n.areaCategory);return{id:typeof n.id=="string"?n.id:"",name:typeof n.name=="string"?n.name:"",areaCategoryId:(typeof n.areaCategoryId=="string"?n.areaCategoryId:null)??(typeof s?.id=="string"?s.id:null),areaCategoryName:(typeof n.areaCategoryName=="string"?n.areaCategoryName:null)??(typeof s?.name=="string"?s.name:null)}}).filter(a=>a.id):[]},async generateSingleUnit(e){const t=e.prefix.trim()?e.prefix.trim().endsWith(" ")?e.prefix.trim():`${e.prefix.trim()} `:"",r={data:{area_forms:{mode:"VERTICAL_BATCH",area_parent_id:e.parentAreaId,prefix:t,final_floor:1,passage_type:e.passageTypeId||O,initial_floor:1,units_by_floor:1,passage_category:e.passageCategoryId,complement_by_floor:[e.complement.trim()]}},name:"private_areas",step:3,status:"DRAFT"},a=await k(_t,{p_params:r,p_workspace_id:e.workspaceId}),n=I(a.generate_building_units),s=u(n);return s||{raw:n}},async generateSinglePrivateUnit(e){const t=e.prefix.trim(),r=e.complement.trim(),a=[t,r].filter(Boolean).join(" "),n=e.passageTypeId||O,s=()=>{const o={id:null,name:a,prefix:"",complement:r,passages:[{id:null,name:a,type:n,category:e.passageCategoryId,external_line:e.insertIntercomExtension?r:null}],areaParentId:e.parentAreaId,has_external_line:e.insertIntercomExtension};return{data:{area_forms:{mode:"SEQUENTIAL_BATCH",area_parent_id:e.parentAreaId,prefix:t,complement_prefix:"",final_floor:0,passage_type:n,initial_floor:0,units_by_floor:1,passage_category:e.passageCategoryId,complement_by_floor:[r],generated_units:{area:"",units:[o]}}},name:"private_areas",step:3,status:"DRAFT"}};return S.generateOnboardingPrivateUnits({workspaceId:e.workspaceId,creatorUserId:e.creatorUserId,onboardingJson:s(),defaultAreaCategoryId:e.defaultAreaCategoryId})},async generateOnboardingPrivateUnits(e){const t=await k(At,{input:{p_workspace_id:e.workspaceId,p_onboarding_json:e.onboardingJson,p_creator_user_id:e.creatorUserId,p_default_area_type_id:e.defaultAreaTypeId||"b73fa253-3126-45bb-b6cd-4b726092e579",p_default_area_category_id:e.defaultAreaCategoryId}}),r=I(t.generate_onboarding_private_units),a=u(r)??{},n=typeof a.processed=="number"?a.processed:Array.isArray(a.processed)?a.processed.length:0,s=typeof a.message=="string"&&a.message.trim()?a.message.trim():null,o=[];if(Array.isArray(a.errors))for(const i of a.errors){const c=u(i);if(!c)continue;const m=typeof c.error=="string"?c.error.trim():"";if(!m)continue;const f=c.index;o.push(typeof f=="number"?`Unidade ${f}: ${m}`:m)}return a.success!==!0&&!s&&o.length>0?{success:!1,processed:n,message:o[0],errors:o}:{success:a.success===!0,processed:n,message:s,errors:o}},async resolveAreaCategoryIdByName(e,t){if(!e)throw new Error("Workspace invalido");const r=t.trim();if(!r)throw new Error("Categoria de area nao informada");const a=r.toLowerCase(),s=(await P.getAreaOptions(e)).categories.find(c=>c.name.trim().toLowerCase()===a);if(s?.id)return s.id;const i=(await S.getAreasWithoutFilters(e)).find(c=>c.areaCategoryName?.trim().toLowerCase()===a&&c.areaCategoryId);if(i?.areaCategoryId)return i.areaCategoryId;try{return await P.createAreaCategory({workspaceId:e,name:r,description:r})}catch(c){if((c instanceof Error?c.message.toLowerCase():"").includes("already exists")){const E=(await P.getAreaOptions(e)).categories.find(d=>d.name.trim().toLowerCase()===a);if(E?.id)return E.id}throw c}},async resolveCondoAreaCategoryId(e){return S.resolveAreaCategoryIdByName(e,Z)},async resolvePrivateUnitAreaCategoryId(e){return S.resolveAreaCategoryIdByName(e,Q)},async resolveOrCreatePassageCategoryId(e,t=X){const r=t.trim();if(!r)throw new Error("Categoria de acesso nao informada");const a=await P.getPassageAccess(e),n=r.toLowerCase(),s=a.passageCategories.find(o=>o.name.trim().toLowerCase()===n);return s?.id?s.id:P.createPassageCategory({workspaceId:e,name:r,description:r})},async removeOnboardingPrivateUnit(e){const t=await k(It,{input:{p_workspace_id:e.workspaceId,p_client_group_link_id:e.clientGroupLinkId,p_hard_delete:e.hardDelete,p_force:e.force,p_dry_run:e.dryRun}}),r=I(t.remove_onboarding_private_unit),a=u(r)??{};return{success:a.success===!0,action:typeof a.action=="string"?a.action:null,messages:Array.isArray(a.messages)?a.messages.map(n=>String(n)):[],raw:a}},async generateBuildingUnits(e){const t=e.prefix.trim(),r=t?t.endsWith(" ")?t:`${t} `:"",a=await k(Et,{p_params:{data:{area_forms:{mode:"VERTICAL_BATCH",area_parent_id:e.parentAreaId,prefix:r,final_floor:e.finalFloor,passage_type:e.passageTypeId||O,initial_floor:e.initialFloor,units_by_floor:e.unitsByFloor,passage_category:e.passageCategoryId,complement_by_floor:e.complementByFloor}},name:"private_areas",step:3,status:"DRAFT"},p_workspace_id:e.workspaceId},{timeoutMs:12e4}),n=I(a.generate_building_units),s=u(n);if(!s)throw new Error("Resposta invalida ao gerar unidades");return s},async listOnboardingDrafts(e){if(!e)return[];const t=await A(Tt,{input:{selectedworkspaceid:e,selectedslug:J}}),r=I(t.getonboardingdraftsbyworkspacejson);return Array.isArray(r)?r.filter(a=>!!u(a)).map(a=>ze(a)).filter(a=>a.id).sort((a,n)=>{const s=a.updatedAt??a.createdAt??"",o=n.updatedAt??n.createdAt??"";return!s&&!o?0:s?o?o.localeCompare(s):-1:1}):[]},async saveOnboardingDraft(e){const t=e.savedAt??new Date,r=e.preferenceName?.trim()||Ye(t),a=await k(Ct,{input:{p_id:e.existingDraftId??null,p_slug:J,p_payload:e.payload,p_recipient_workspace:e.recipientWorkspaceId,p_name:r,p_reference_of:"workspace",p_valuetype:"json"}}),n=I(a.set_general_preference_json_v2),s=u(n);if(!s||s.success!==!0){const o=Array.isArray(s?.errorMessages)?s?.errorMessages.map(i=>String(i)).filter(Boolean):[];throw new Error(o[0]??"Falha ao salvar rascunho")}return{id:typeof s.id=="string"?s.id:"",generalPreferenceId:typeof s.generalPreferenceId=="string"?s.generalPreferenceId:null,name:r}},async getWorkspaceLinkIdsByExternalApiKey(e){const t=e.trim();if(!t)return[];const r=await A(kt,{args:{p_external_api_key:t}}),a=I(r.get_workspace_link_by_external_api_key);return(Array.isArray(a)?a:Array.isArray(a?.links)?a.links:[]).map(s=>u(s)).map(s=>typeof s?.id=="string"?s.id:"").filter(Boolean)},async resyncWorkspaceLinks(e){const t=e.map(r=>r.trim()).filter(Boolean);if(t.length===0)throw new Error("Nenhuma liberação encontrada para ressincronizar");await k(vt,{args:{workspacelinkids:t}})},async getContractsByRecipient(e,t){if(!e)return{success:!1,payload:[]};const r=await K(bt,{variables:{workspaceId:e,currencyName:t??null},timeoutMs:Je}),a=u(r.contractsByRecipient);if(!a)return{success:!1,payload:[]};const n=Array.isArray(a.payload)?a.payload:[];return{success:a.success===!0,payload:n.filter(s=>!!u(s)).map(s=>{const o=s,i=u(o.template);return{id:typeof o.id=="string"?o.id:"",status:typeof o.status=="string"?o.status:"",templateId:typeof i?.id=="string"?i.id:"",templateName:typeof i?.name=="string"?i.name:""}}).filter(s=>s.id)}},async getSubscriptionTemplates(){const[e,t]=await Promise.all([A(Rt,{}),de.getFeatureSkuMappings()]),r=u(e.hailaSubscriptionContractTemplates);if(!r)return{success:!1,errorMessages:["Resposta invalida do servidor"],payload:[]};const a=Array.isArray(r.payload)?r.payload:[];return{success:r.success===!0,errorMessages:Array.isArray(r.errorMessages)?r.errorMessages.map(n=>String(n)):[],payload:a.filter(n=>!!u(n)).map(n=>{const s=n,o=Array.isArray(s.workspaceLinkContractTemplateCredits)?s.workspaceLinkContractTemplateCredits:[],i=typeof s.id=="string"?s.id:"",c=t[i]?.trim()||null;return{id:i,name:typeof s.name=="string"?s.name:"",description:typeof s.description=="string"?s.description:null,creditIds:o.map(m=>{const f=u(m);return typeof f?.id=="string"?f.id:""}).filter(Boolean),skuSlug:c}}).filter(n=>n.id)}},async createClientContractsByTemplate(e){if(e.templateIds.length===0)return;const t=await K(St,{variables:{input:{recipientWorkspaceId:e.recipientWorkspaceId,responsibleWorkspaceId:e.responsibleWorkspaceId,templateIds:e.templateIds}},timeoutMs:Qe}),r=u(t.createHailaClientContractsByTemplate);if(!r)throw new Error("Resposta invalida ao criar funcionalidades");if(r.success!==!0){const a=Array.isArray(r.errorMessages)?r.errorMessages.map(n=>String(n)).filter(Boolean):[];throw new Error(a[0]??"Falha ao criar funcionalidades")}},async disableContract(e){const t=await k(ht,{contractId:e});B(u(t.disableContract),"Falha ao desativar contrato")},buildTemplateContractIndex(e){const t=new Map,r=new Set;for(const a of e){const n=a.status.toUpperCase();if(!(n==="ACTIVE"||n==="ACCEPTED"||n==="PENDING")||!a.templateId||r.has(a.id))continue;r.add(a.id);const o=t.get(a.templateId)??[];o.push(a.id),t.set(a.templateId,o)}return t},constants:{PRIVATE_UNIT_AREA_CATEGORY_NAME:Q,PRIVATE_UNIT_PASSAGE_CATEGORY_NAME:X,CONDO_AREA_CATEGORY_NAME:Z,INTEGRATOR_AREA_TYPE_ID:Nt,INTEGRATOR_OCCUPATION_FORMAT_ID:Dt,INTEGRATOR_PASSAGE_TYPE_ID:O,DEFAULT_AREA_WEEK_DAYS_INPUT:Pt},findTemplate:$e,hailaJavaEndpoint:ee.hailaJavaGraphqlEndpoint};export{Zt as A,Xt as B,Ce as C,ir as D,or as E,nr as F,mr as G,qe as H,Ae as I,Ke as J,Ye as K,lr as L,sr as M,fr as N,gr as O,Ve as P,ur as Q,cr as R,ne as S,pr as T,dr as U,Ft as V,$t as W,j as a,er as b,Gt as c,_r as d,te as e,yr as f,zt as g,fe as h,S as i,ye as j,ge as k,Yt as l,jt as m,Mt as n,Wt as o,ar as p,Ht as q,Vt as r,qt as s,Kt as t,G as u,Jt as v,rr as w,tr as x,$e as y,Qt as z};
