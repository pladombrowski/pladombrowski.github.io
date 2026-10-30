import{C as me,L as ie,$ as h,M as X,G as T,a5 as K,f as fe}from"./index-DzAPNsFI.js";import{a as D}from"./area.service-DoGHPvzV.js";import{b as ge}from"./billing.service-Dkzd3G_a.js";import{r as ye,i as _e}from"./invite-link.service-B3XoiBgj.js";import{p as Ie}from"./datetime-BpKGdKSh.js";const Wt=[{value:"geral",labelKey:"options.integratorTabs.general",icon:"pi-bolt"},{value:"unidades",labelKey:"options.integratorTabs.units",icon:"pi-building"},{value:"dispositivos",labelKey:"options.integratorTabs.devices",icon:"pi-microchip"},{value:"funcionalidades",labelKey:"options.integratorTabs.features",icon:"pi-sliders-h"},{value:"cameras",labelKey:"options.integratorTabs.cameras",icon:"pi-video"},{value:"interfonia",labelKey:"options.integratorTabs.intercom",icon:"pi-phone"}];function Vt(e){const t=e.firstName?.trim()??"",r=e.lastName?.trim()??"",a=`${t} ${r}`.trim();return a||(e.brandingName?.trim()?e.brandingName.trim():e.legalName?.trim()?e.legalName.trim():e.email?.trim()?e.email.trim():"Cliente")}function Ht(e){return e.status.toUpperCase()==="ENABLED"}function Ae(e){return e.configs.auto_provision===!0}function N(e,t){const r=e.configs[t];return r==null?null:String(r).trim()||null}function Kt(e){return N(e,"api_host")}function qt(e){return N(e,"db_host")}function Yt(e){return N(e,"db_user")}function zt(e){return N(e,"database")}function Jt(e){const t=e.configs["custom-port"]??e.configs.custom_port;if(typeof t=="number"&&Number.isFinite(t))return Math.trunc(t);if(typeof t=="string"&&t.trim()){const r=Number.parseInt(t.trim(),10);return Number.isFinite(r)?r:null}return null}function Qt(e){return N(e,"hikvision_events_host")}function Xt(e){return N(e,"intelbras_events_host")}function q(e){const t=e.configs.deployment;if(!t||typeof t!="object")return null;const r=t;return{slug:r.slug??null,status:r.status??null,error:r.error??null,attempts:typeof r.attempts=="number"?r.attempts:null,queuedAt:r.queued_at??r.queuedAt??null,startedAt:r.started_at??r.startedAt??null,completedAt:r.completed_at??r.completedAt??null,provisionedAt:r.provisioned_at??r.provisionedAt??null,coolifyServiceUuid:r.coolify_service_uuid??r.coolifyServiceUuid??null}}function ce(e){return q(e)?.status??null}function Zt(e){return N(e,"slug")??q(e)?.slug??null}function Te(e){return(ce(e)??"").toUpperCase()==="READY"}function Ce(e){const t=(ce(e)??"").toUpperCase();return t==="FAILED"||t==="ERROR"}function er(e){return Te(e)||Ce(e)?!1:q(e)!=null?!0:Ae(e)}const Ee=new Set(["thumbnail","rtspLink","webRTCLink","go2rtc_rtsp","go2rtc_tapo","go2rtc_isapi","isapiLink","isapiUrl","isapi_url"]);function tr(e){return Ee.has(e.fieldSlug)}const ke=["brava_access_name","brava_module_serial","brava_sector"];function rr(e){if(!e)return!1;const t=new Set(e.deviceTemplateConfigs.map(r=>r.fieldSlug));return ke.every(r=>t.has(r))}function Y(e){return(e.template?.deviceType.slug??"").trim().toLowerCase()}function ar(e){return e.template?.deviceType.label??""}const he="camera",ve="extension_line",be="access_authenticator";function Z(e){return Y(e)===ve}function Se(e){return Y(e)===he}function le(e){const t=Y(e);return t===be||t==="authenticator"}function Re(e){if(!le(e))return!1;const t=[e.name,e.template?.name,e.template?.deviceType.label].filter(Boolean).join(" ").toLowerCase();return/facial|face[\s_-]?recog|reconhecimento|rosto|scan[\s_-]?face/.test(t)}function nr(e){return Se(e)?"cctv":Re(e)?"scan-face":le(e)?"key":"box"}function sr(e,t){const r=e.hierarchyName.trim().length>0,a=t.hierarchyName.trim().length>0;return r!==a?r?1:-1:e.name.toLowerCase().localeCompare(t.name.toLowerCase())}function or(e){const t=new Map;for(const r of e)for(const a of r.deviceTemplates){const n=a.deviceType;n.slug&&(t.has(n.slug)||t.set(n.slug,n))}return[...t.values()].sort((r,a)=>r.label.localeCompare(a.label))}function f(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function d(e){return typeof e=="string"?e:typeof e=="number"||typeof e=="boolean"?String(e):""}function g(e){return d(e).trim()||null}function Ne(e){return d(e).trim().toLowerCase()}function xe(e){return{id:d(e.id),type:d(e.type),firstName:d(e.firstName),lastName:d(e.lastName),brandingName:d(e.brandingName),email:d(e.email),legalName:d(e.legalName),phone:g(e.phone)}}function Pe(e){const t=g(e.complement)?.trim()||null,r=d(e.name).trim(),a=!!r&&r.toLowerCase()!=="moradores";let n=null;return a&&t&&t!==r?n=`${r} (${t})`:t?n=t:a&&(n=r),{id:d(e.id),name:r,complement:t,categoryName:g(e.categoryName),unitLabel:n}}function De(e){const r=f(e.groupsByClient)?.payload,a=Array.isArray(r)?r.filter(c=>!!f(c)).map(c=>Pe(c)):[],n=f(e.recognitionSettingByWorkspaceClientId),s=g(n?.processedUrl),o=g(n?.originalURL),i=g(e.photoUrl);return{id:d(e.id),type:d(e.type),email:g(e.email),phone:g(e.phone),firstName:g(e.firstName),lastName:g(e.lastName),legalName:g(e.legalName),brandingName:g(e.brandingName),groups:a,photoUrl:s??o??i}}function de(e){const t=f(e.workspaceClient);return{id:d(e.id),status:d(e.status),createdAt:g(e.createdAt),workspaceClient:t?De(t):null}}function we(e,t){const a=(Array.isArray(e.dependents)?e.dependents:[]).filter(i=>!!f(i)).map(de).sort((i,c)=>!i.createdAt&&!c.createdAt?0:i.createdAt?c.createdAt?c.createdAt.localeCompare(i.createdAt):-1:1),n=typeof e.registrantsCount=="number"?e.registrantsCount:Number.parseInt(String(e.registrantsCount??""),10),s=Number.isFinite(n)?n:a.length,o=d(e.url);return{id:d(e.id),url:o&&ye(o,t),name:d(e.name),startDate:g(e.startDate),endDate:g(e.endDate),registrantsCount:s,dependents:a}}function Le(e){const t=e.total,r=typeof t=="number"?t:Number.parseInt(String(t??"0"),10)||0,n=(Array.isArray(e.items)?e.items:[]).filter(s=>!!f(s)).map(de);return{total:r,items:n}}function Fe(e){const t=f(e.configs)??{};return{id:d(e.id),name:d(e.name),status:d(e.status),localIp:g(e.local_ip)??g(e.localIp),vpnIp:g(e.vpn_ip)??g(e.vpnIp),workspaceId:d(e.workspace_id)||d(e.workspaceId),configs:t}}function Be(e,t=null){if(!e&&!t)return null;const r=f(e?.deviceType)??t;return{id:d(e?.id),name:d(e?.name),deviceType:{id:d(r?.id),label:d(r?.label),slug:Ne(r?.slug)}}}function Ue(e){const t=Array.isArray(e.deviceManufacturers)?e.deviceManufacturers:[];let r=null;for(const o of t){const i=f(o),c=g(i?.externalApiKeyId);if(c){r=c;break}}const a=f(e.status)??f(e.deviceStatus),n=f(e.template)??f(e.deviceTemplate),s=f(e.deviceType);return{id:d(e.id),name:d(e.name),passageId:g(e.passageId),areaId:g(e.areaId),workspaceId:d(e.workspaceId),statusName:g(a?.name),externalApiKeyId:r,template:Be(n,s)}}function ee(e){if(!Array.isArray(e))return[];const t=new Set,r=[];for(const a of e){const n=f(a);if(!n)continue;const s=Ue(n);!s.id||t.has(s.id)||(t.add(s.id),r.push(s))}return r}function $e(e){const t=f(e.areaHierarchy),r=f(e.parentArea),a=Array.isArray(e.passages)?e.passages:[],n=[...Array.isArray(e.devices)?e.devices:[],...Array.isArray(e.areaDevices)?e.areaDevices:[]],s=f(e.areaType),o=f(e.areaCategory);return{id:d(e.id),name:d(e.name),hierarchyName:d(t?.name)||d(r?.name),areaTypeId:d(s?.id),areaTypeName:d(s?.name),areaCategoryId:d(o?.id),areaCategoryName:d(o?.name),passages:a.filter(i=>!!f(i)).map(i=>({id:d(i.id),name:d(i.name),devices:ee(i.devices)})),areaDevices:ee(n)}}function ir(e){return{...e,areaDevices:e.areaDevices.filter(t=>!Z(t)),passages:e.passages.map(t=>({...t,devices:t.devices.filter(r=>!Z(r))}))}}function Oe(e){return{id:d(e?.id),label:d(e?.label),slug:d(e?.slug)}}function Ge(e){return{id:d(e.id),fieldLabel:d(e.fieldLabel),fieldHelper:g(e.fieldHelper)??g(e.field_helper),fieldMask:g(e.fieldMask),fieldSlug:d(e.fieldSlug),fieldType:d(e.fieldType)||"string",fieldDefaultValue:g(e.fieldDefaultValue)}}function Me(e){const t=Array.isArray(e.deviceFeatures)?e.deviceFeatures:[],r=Array.isArray(e.deviceTemplateConfigs)?e.deviceTemplateConfigs:[];return{id:d(e.id),name:d(e.name),externalApiKeyIdLabel:d(e.externalApiKeyIdLabel)||"Código de integração",deviceType:Oe(f(e.deviceType)),deviceFeatures:t.filter(a=>!!f(a)).map(a=>({id:d(a.id),name:d(a.name)})),deviceTemplateConfigs:r.filter(a=>!!f(a)).map(a=>Ge(a))}}function je(e){const t=Array.isArray(e.deviceTemplates)?e.deviceTemplates:[];return{id:d(e.id),name:d(e.name),deviceTemplates:t.filter(r=>!!f(r)).map(r=>Me(r))}}function We(e,t){for(const r of e){const a=r.deviceTemplates.find(n=>n.id===t);if(a)return a}return null}function Ve(e){let t=e;for(const r of["json","payload","data","result"]){const a=f(t[r]);a&&(t=a)}return t}function cr(e){let t=e;if(typeof t=="string"){const E=t;try{t=JSON.parse(E)}catch{return{canHardDelete:!1,message:E,dependencies:[],impact:{},raw:{}}}}Array.isArray(t)&&(t=t[0]);const r=f(t);if(!r)return{canHardDelete:!1,message:"Resposta de verificação não reconhecida",dependencies:[],impact:{},raw:{}};const a=Ve(r),n=["can_hard_delete","canHardDelete","can_delete","canDelete","allowed","success","ok","removed","deleted"];let s=null;for(const E of n){const I=a[E];if(typeof I=="boolean"){s=I;break}if(typeof I=="number"){s=I!==0;break}if(typeof I=="string"&&(I==="true"||I==="false")){s=I==="true";break}}const o=(()=>{for(const E of["status","result","code"]){const I=a[E];if(typeof I=="string"&&I.trim())return I.trim()}return null})(),c=(E=>{for(const I of E){const H=a[I];if(typeof H=="string"&&H.trim())return H.trim()}return null})(["message","error","reason","detail"]),l=a.dependencies??a.blocking_dependencies??a.blockers??a.blocking??a.blocking_records,p=Array.isArray(l)?l.map(E=>String(E)).filter(E=>E.trim()):[],y=f(a.wouldRemove)??f(a.would_remove)??f(a.removed),u={};if(y)for(const[E,I]of Object.entries(y))typeof I=="number"&&(u[E]=I);const k=(o??"").toLowerCase(),F=k.includes("error")||k.includes("block")||k.includes("fail")||k.includes("denied"),pe=k.includes("success")||k==="ok"||k.includes("allowed"),Q=s??(F?!1:!!pe);return{canHardDelete:Q,message:c??(!Q&&s===null&&o===null?"Resposta de verificação não reconhecida":null),dependencies:p,impact:u,raw:a}}const lr="7f8cd27d-5dd4-4d1c-b648-348b5c16c513",dr="b73fa253-3126-45bb-b6cd-4b726092e579",ur="ef5169ae-da3c-41b3-bb1f-70965ce4f1e0",pr="cc917e4e-4799-48f6-a03d-f34cb2516edb",x="2313d889-801a-44f1-90dc-1257651ccf4b",He="VERTICAL_BATCH",z="SEQUENTIAL_BATCH",Ke="MULTI_BLOCK_BATCH",G=3,M="private_areas",j="DRAFT",mr="Porta unidade privativa",te="onboarding-draft",re=new Set(["apartment","casa","sala","unidade_privativa","unidade privativa"]);function fr(e){if(!e)return!1;const t=e.trim().toLowerCase().replace(/\s+/g,"_");return re.has(t)||re.has(e.trim().toLowerCase())}function b(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function _(e,t=""){return typeof e=="string"?e:t}function C(e){return typeof e!="string"?null:e.trim()||null}function v(e,t=0){if(typeof e=="number"&&Number.isFinite(e))return Math.trunc(e);if(typeof e=="string"&&e.trim()){const r=Number.parseInt(e,10);if(Number.isFinite(r))return r}return t}const qe=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function P(e){return!!(e&&qe.test(e.trim()))}function w(e){const t=e.trim().match(/(\d+)\s*$/);if(!t)return null;const r=Number.parseInt(t[1],10);return Number.isFinite(r)?r:null}function W(e){if(!e)return null;const t=e.replace(/\D/g,"");if(!t)return null;const r=Number.parseInt(t,10);return Number.isFinite(r)?r:null}function L(e,t){const r=(t??"").trim();if(!r)return t;const a=e.trim();return a?`${a}${r}`:r}function S(e){return w(e.name)??W(e.complement)}function J(e){const t=S(e);return t==null?-1:Math.trunc(t/100)}function gr(e){const t=e.units.map((n,s)=>({index:s,unit:n}));if(e.mode===z){const n=[...t].sort((s,o)=>{const i=S(s.unit),c=S(o.unit);return i!=null&&c!=null&&i!==c?i-c:i==null&&c!=null?1:i!=null&&c==null?-1:s.unit.name.toLowerCase().localeCompare(o.unit.name.toLowerCase())});return n.length?[{floorKey:0,entries:n}]:[]}const r=new Map;for(const n of t){const s=J(n.unit),o=r.get(s)??[];o.push(n),r.set(s,o)}return[...r.keys()].sort((n,s)=>n===-1?1:s===-1?-1:n-s).map(n=>({floorKey:n,entries:(r.get(n)??[]).sort((s,o)=>{const i=S(s.unit),c=S(o.unit);return i!=null&&c!=null&&i!==c?i-c:s.unit.name.toLowerCase().localeCompare(o.unit.name.toLowerCase())})}))}function B(e){return[...e].sort((t,r)=>{const a=S(t.unit),n=S(r.unit);return a!=null&&n!=null&&a!==n?a-n:a==null&&n!=null?1:a!=null&&n==null?-1:t.unit.name.toLowerCase().localeCompare(r.unit.name.toLowerCase())})}function yr(e){if(e.mode===z){const l=B(e.units.map((p,y)=>({index:y,unit:p})));return l.length?[{kind:"floor",floorKey:0,entries:l}]:[]}const t=new Map;e.units.forEach((l,p)=>{const y=J(l),u=t.get(y)??[];u.push({index:p,unit:l}),t.set(y,u)});const r=Math.trunc(e.initialFloor),a=Math.trunc(e.finalFloor),n=new Set((e.excludedFloors??[]).map(l=>Math.trunc(l)).filter(l=>Number.isFinite(l))),s=[];if(Number.isFinite(r)&&Number.isFinite(a)&&r<=a)for(let l=r;l<=a;l+=1){const p=B(t.get(l)??[]);if(p.length>0){s.push({kind:"floor",floorKey:l,entries:p});continue}n.has(l)&&s.push({kind:"skipped",floorKey:l})}const o=new Set(s.map(l=>l.floorKey)),i=[...t.keys()].filter(l=>l!==-1&&!o.has(l)).sort((l,p)=>l-p);for(const l of i){const p=B(t.get(l)??[]);p.length&&s.push({kind:"floor",floorKey:l,entries:p})}const c=B(t.get(-1)??[]);return c.length&&s.push({kind:"floor",floorKey:-1,entries:c}),s}function Ye(e){const t=Math.trunc(e.floor),r=String(e.suffix??"").trim(),a=`${t}${r}`;return{name:`${ue(e.prefix)}${a}`.trim(),digitComplement:a,complement:L(e.complementPrefix??"",a)}}function _r(e){const t=Ye(e);return{id:null,name:t.name,complement:t.complement,areaParentId:e.areaParentId,hasExternalLine:e.hasExternalLine,passages:[V({name:t.name,type:e.passageType,category:e.passageCategory??null,externalLine:e.hasExternalLine?t.complement:null})]}}function Ir(e,t){const r=(e.complementByFloor??[]).map(c=>String(c??"").trim()).filter(Boolean),a=Math.max(2,...r.map(c=>c.length),0),n=Math.trunc(t),s=String(n),o=new Set;for(const c of e.units){if(J(c)!==n)continue;const l=S(c);if(l==null)continue;const p=String(l);if(!p.startsWith(s)||p.length<=s.length)continue;const y=Number.parseInt(p.slice(s.length),10);Number.isFinite(y)&&o.add(y)}let i=1;for(;o.has(i);)i+=1;return String(i).padStart(a,"0")}function ze(e){if(!Number.isFinite(e.initialUnit)||!Number.isFinite(e.finalUnit))return[];if(e.initialUnit>e.finalUnit)return[];const t=e.prefix.trim(),r=[];for(let a=e.initialUnit;a<=e.finalUnit;a+=1)r.push(t?`${t} ${a}`:String(a));return r}function V(e){return{id:null,name:e.name,type:e.type??x,category:e.category??null,externalLine:e.externalLine}}function Je(e){const t=_(e.name),a=(Array.isArray(e.passages)?e.passages:[]).filter(i=>!!b(i)).map(i=>({id:C(i.id),name:_(i.name),type:C(i.type),category:C(i.category),externalLine:C(i.external_line)??C(i.externalLine)})),n=C(e.complement),s=w(t)??W(t),o=n??(s!=null?String(s):null);return{id:C(e.id),name:t,complement:o,areaParentId:C(e.areaParentId)??C(e.area_parent_id),hasExternalLine:e.has_external_line===!0||e.hasExternalLine===!0,passages:a}}function Qe(e,t=new Date().toISOString()){const r=b(e)??{},a=b(r.data)??{},n=b(a.area_forms)??{},s=b(n.generated_units)??{},o=Array.isArray(s.units)?s.units:[],i=Array.isArray(n.complement_by_floor)?n.complement_by_floor.map(u=>String(u??"")):[],l=_(n.condo_format).toLowerCase()==="multi"?"multi":"single",y=(Array.isArray(n.blocks)?n.blocks:[]).filter(u=>!!b(u)).map(u=>({areaId:_(u.areaId??u.area_id),name:_(u.name),mode:_(u.mode),prefix:_(u.prefix),complementPrefix:_(u.complementPrefix??u.complement_prefix).trim(),initialFloor:v(u.initialFloor??u.initial_floor),finalFloor:v(u.finalFloor??u.final_floor),unitsByFloor:v(u.unitsByFloor??u.units_by_floor),complementByFloor:Array.isArray(u.complementByFloor)?u.complementByFloor.map(k=>String(k??"")):Array.isArray(u.complement_by_floor)?u.complement_by_floor.map(k=>String(k??"")):[],excludedFloors:ae(u.excludedFloors??u.excluded_floors),unitCount:v(u.unitCount??u.unit_count)})).filter(u=>!!u.areaId);return{status:_(r.status),step:v(r.step),name:_(r.name),mode:_(n.mode),prefix:_(n.prefix),complementPrefix:_(n.complement_prefix).trim(),initialFloor:v(n.initial_floor),finalFloor:v(n.final_floor),areaParentId:C(n.area_parent_id),unitsByFloor:v(n.units_by_floor),passageCategory:_(n.passage_category),passageType:_(n.passage_type)||x,complementByFloor:i,excludedFloors:ae(n.excluded_floors??n.excludedFloors),units:o.filter(u=>!!b(u)).map(u=>Je(u)),generatedAt:t,savedItemId:null,generalPreferenceId:null,preferenceName:null,condoFormat:l,masterAreaId:C(n.master_area_id)??C(n.masterAreaId),blocks:y}}function ae(e){if(!Array.isArray(e))return[];const t=[],r=new Set;for(const a of e){const n=v(a,Number.NaN);!Number.isFinite(n)||r.has(n)||(r.add(n),t.push(n))}return t.sort((a,n)=>a-n)}function ue(e){const t=e.trim();return t?t.endsWith(" ")?t:`${t} `:""}function Ar(e){const t=Math.trunc(e.initialFloor),r=Math.trunc(e.finalFloor),a=new Set((e.excludedFloors??[]).map(p=>Math.trunc(p)).filter(p=>p>=t&&p<=r)),n=e.complementByFloor.map(p=>String(p??"").trim()).filter(Boolean),s=ue(e.prefix),o=(e.complementPrefix??"").trim(),i=[];if(Number.isFinite(t)&&Number.isFinite(r)&&t<=r&&n.length>0){for(let p=t;p<=r;p+=1)if(!a.has(p))for(const y of n){const u=`${s}${p}${y}`,k=`${p}${y}`,F=L(o,k);i.push({id:null,name:u,complement:F,areaParentId:e.areaParentId,hasExternalLine:e.insertIntercomExtension,passages:[V({name:u,category:e.passageCategory||null,externalLine:e.insertIntercomExtension?F:null})]})}}const c=[...a].sort((p,y)=>p-y),l=e.blockSnapshot?[{...e.blockSnapshot,excludedFloors:e.blockSnapshot.excludedFloors??c,unitCount:e.blockSnapshot.unitCount??i.length}]:[];return{status:j,step:G,name:M,mode:He,prefix:e.prefix.trim(),complementPrefix:o,initialFloor:t,finalFloor:r,areaParentId:e.areaParentId,unitsByFloor:e.unitsByFloor,passageCategory:e.passageCategory,passageType:x,complementByFloor:n,excludedFloors:c,units:i,generatedAt:new Date().toISOString(),savedItemId:null,generalPreferenceId:null,preferenceName:null,condoFormat:e.condoFormat??"single",masterAreaId:e.masterAreaId??e.areaParentId,blocks:l}}function Tr(e){const r=ze({prefix:e.prefix,initialUnit:e.initialUnit,finalUnit:e.finalUnit}).map(a=>{const n=L(e.complementPrefix??"",String(w(a)??""));return{id:null,name:a,complement:n,areaParentId:e.areaParentId,hasExternalLine:e.insertIntercomExtension,passages:[V({name:a,category:e.passageCategory||null,externalLine:e.insertIntercomExtension?n:null})]}});return{status:j,step:G,name:M,mode:z,prefix:e.prefix.trim(),complementPrefix:(e.complementPrefix??"").trim(),initialFloor:e.initialUnit,finalFloor:e.finalUnit,areaParentId:e.areaParentId,unitsByFloor:0,passageCategory:e.passageCategory,passageType:x,complementByFloor:[],excludedFloors:[],units:r,generatedAt:new Date().toISOString(),savedItemId:null,generalPreferenceId:null,preferenceName:null,condoFormat:"single",masterAreaId:e.areaParentId,blocks:[]}}function Cr(e){const t=e.blocks.filter(n=>n.units.length>0),r=t.flatMap(n=>n.units.map(s=>({...s,areaParentId:n.snapshot.areaId}))),a=t[0];return{status:j,step:G,name:M,mode:Ke,prefix:a?.snapshot.prefix??"",complementPrefix:a?.snapshot.complementPrefix??"",initialFloor:a?.snapshot.initialFloor??0,finalFloor:a?.snapshot.finalFloor??0,areaParentId:e.masterAreaId,unitsByFloor:a?.snapshot.unitsByFloor??0,passageCategory:e.passageCategory,passageType:e.passageType||x,complementByFloor:a?.snapshot.complementByFloor??[],excludedFloors:a?.snapshot.excludedFloors??[],units:r,generatedAt:new Date().toISOString(),savedItemId:null,generalPreferenceId:null,preferenceName:null,condoFormat:"multi",masterAreaId:e.masterAreaId,blocks:t.map(n=>({...n.snapshot,excludedFloors:n.snapshot.excludedFloors??[],unitCount:n.units.length}))}}function Er(e){const t=e.name.trim(),r=e.template?.passages[0]??null,a=w(t)??W(t),n=L(e.complementPrefix,a!=null?String(a):null);return{id:null,name:t,complement:n,areaParentId:e.areaParentId??e.template?.areaParentId??null,hasExternalLine:e.hasExternalLine,passages:[{id:null,name:t,type:r?.type??x,category:r?.category??null,externalLine:e.hasExternalLine?n:null}]}}function Xe(e,t,r={}){const a=r.name?.trim()||e.name,n=w(a)??W(a),s=L(t,n!=null?String(n):e.complement),o=r.hasExternalLine??e.hasExternalLine,i=e.passages.length?e.passages.map(c=>({...c,name:a,externalLine:o?s:null})):o?[V({name:a,externalLine:s})]:[];return{...e,name:a,complement:s,hasExternalLine:o,passages:i}}function kr(e,t){return{...e,complementPrefix:t.trim(),units:e.units.map(r=>Xe(r,t))}}function Ze(e){return{data:{area_forms:{mode:e.mode,condo_format:e.condoFormat??"single",master_area_id:e.masterAreaId,area_parent_id:e.areaParentId,prefix:e.prefix,complement_prefix:e.complementPrefix,final_floor:e.finalFloor,passage_type:e.passageType,initial_floor:e.initialFloor,units_by_floor:e.unitsByFloor,passage_category:e.passageCategory,complement_by_floor:e.complementByFloor,excluded_floors:e.excludedFloors??[],blocks:(e.blocks??[]).map(t=>({areaId:t.areaId,name:t.name,mode:t.mode,prefix:t.prefix,complement_prefix:t.complementPrefix,initial_floor:t.initialFloor,final_floor:t.finalFloor,units_by_floor:t.unitsByFloor,complement_by_floor:t.complementByFloor,excluded_floors:t.excludedFloors??[],unit_count:t.unitCount})),generated_units:{area:"",units:e.units.map(t=>({id:t.id,name:t.name,prefix:"",complement:t.complement,passages:t.passages.map(r=>({id:r.id,name:r.name,type:r.type,category:r.category,external_line:r.externalLine})),areaParentId:t.areaParentId,has_external_line:t.hasExternalLine}))}}},name:M,step:G,status:j}}function hr(e,t){const r=Ze(e),n=r.data.area_forms,s=P(t.passageTypeId)?t.passageTypeId:P(e.passageType)?e.passageType:x;n.passage_type=s,n.passage_category=t.passageCategoryId;const o=n.generated_units,i=Array.isArray(o.units)?o.units:[],c=P(e.areaParentId)?e.areaParentId:null;for(const l of i){const p=P(l.areaParentId)?l.areaParentId:c;p?l.areaParentId=p:delete l.areaParentId;const y=Array.isArray(l.passages)?l.passages:[];for(const u of y)u.category=P(u.category)?u.category:t.passageCategoryId,u.type=P(u.type)?u.type:s}return r}function et(e=new Date){const t=r=>String(r).padStart(2,"0");return`Rascunho${t(e.getDate())}${t(e.getMonth()+1)}${e.getFullYear()}${t(e.getHours())}${t(e.getMinutes())}`}function vr(e,t={}){if(!e)return"Sem data de atualização";const r=Ie(e);if(!r)return"Sem data de atualização";const a=me(r,{timeZone:"America/Sao_Paulo",weekday:"short",day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),n=a.charAt(0).toUpperCase()+a.slice(1);return t.includeRascunhoPrefix?`Rascunho ${n}`:n}function tt(e){const t=b(e.payload)??{};return{id:_(e.id),generalPreferenceId:C(e.generalPreferenceId),name:_(e.name),slug:_(e.slug),step:v(e.step),status:_(e.status),payload:t,createdAt:C(e.createdAt),updatedAt:C(e.updatedAt)}}function br(e){const t=e.updatedAt??e.createdAt??new Date().toISOString();return{...Qe(e.payload,t),savedItemId:e.id||null,generalPreferenceId:e.generalPreferenceId,preferenceName:e.name||null}}const rt=6e4,at=12e4;function m(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function A(e){if(Array.isArray(e)){if(e.length===0)return null;const r=m(e[0]);return r?r.json??null:null}const t=m(e);return t?t.json??t:null}function U(e,t){if(!e)throw new Error(t);if(e.success===!0)return;const r=Array.isArray(e.errorMessages)?e.errorMessages.map(a=>String(a)).filter(Boolean):[];throw new Error(r[0]??t)}const nt=`
  query GetActiveClientCount($input: getactiveworkspaceclientscountjson_args!) {
    getactiveworkspaceclientscountjson(args: $input) {
      json
    }
  }
`,st=`
  query FetchWorkspaceClients($input: getworkspaceclientsinprivateunitgroupsjson_args!) {
    getworkspaceclientsinprivateunitgroupsjson(args: $input) {
      json
    }
  }
`,ot=`
  query FetchWorkspaceClients($input: getworkspaceclientsnotinprivateunitgroupsjson_args!) {
    getworkspaceclientsnotinprivateunitgroupsjson(args: $input) {
      json
    }
  }
`,it=`
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
`,ct=`
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
`,lt=`
  query SessionPresenceByClients($input: Any!) {
    session_presenceByClients(input: $input)
  }
`;function dt(e){if(!e||typeof e!="object"||Array.isArray(e))return null;const t=e,r=typeof t.workspaceClientId=="string"?t.workspaceClientId.trim():"";if(!r)return null;const a=typeof t.status=="string"?t.status.trim():null;return{workspaceClientId:r,clientType:typeof t.clientType=="string"?t.clientType:null,presenceMode:typeof t.presenceMode=="string"?t.presenceMode:null,userId:typeof t.userId=="string"?t.userId:null,status:a,hasEverLoggedIn:t.hasEverLoggedIn===!0,lastSeenAt:typeof t.lastSeenAt=="string"?t.lastSeenAt:null,currentRoute:typeof t.currentRoute=="string"?t.currentRoute:null,online:t.online===!0||a==="online"}}const ut=`
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
`,$={endpoint:ie.hailaJavaGraphqlEndpoint,timeoutMs:3e4},pt=`
  query GetBridgesByWorkspace($workspaceId: uuid!) {
    getbridgesbyworkspacejson(args: { selectedworkspaceid: $workspaceId }) {
      json
    }
  }
`,mt=`
  mutation CreateBridge($name: String!, $workspaceId: uuid!) {
    create_bridge(args: { p_name: $name, p_workspace: $workspaceId }) {
      json
    }
  }
`,ft=`
  query GetWorkspaceAreasWithDevices($args: get_workspace_areas_with_devices_json_args!) {
    get_workspace_areas_with_devices_json(args: $args) {
      json
    }
  }
`,gt=`
  query GetWorkspaceAreaHierarchyLabels($workspaceId: UUID!) {
    workspaceAreasWithDevices(workspaceId: $workspaceId) {
      id
      areaHierarchy {
        name
      }
    }
  }
`,yt=`
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
`,_t=`
  query GetDeviceById($deviceId: uuid!, $userId: uuid!) {
    getdevicebyidjson(args: { device_id: $deviceId, user_id: $userId }) {
      json
    }
  }
`,It=`
  mutation SetDevice($input: DeviceInputDtoInput!) {
    setDevice(input: $input) {
      success
      errorMessages
      payload {
        id
      }
    }
  }
`,At=`
  mutation DeleteDevice($deviceId: UUID!) {
    deleteDevice(id: $deviceId) {
      success
      errorMessages
    }
  }
`,Tt=`
  mutation CreateWorkspaceLegalPersonFromWorkspace($input: WorkspaceLegalPersonCloneInput!) {
    createWorkspaceLegalPersonFromWorkspace(input: $input) {
      success
      errorMessages
      payload {
        id
      }
    }
  }
`,Ct=`
  mutation DeleteWorkspace($id: UUID!) {
    deleteWorkspace(id: $id) {
      success
      errorMessages
    }
  }
`,Et=`
  query Getareasbyworkspaceidwithoutfiltersjson($workspaceId: uuid!) {
    getareasbyworkspaceidwithoutfiltersjson(args: { selectedworkspaceid: $workspaceId }) {
      json
    }
  }
`,kt=`
  mutation GenerateBuildingUnits($p_params: jsonb!, $p_workspace_id: uuid!) {
    generate_building_units(args: { p_params: $p_params, p_workspace_id: $p_workspace_id }) {
      json
    }
  }
`,ht=`
  mutation RemoveOnboardingPrivateUnit($input: remove_onboarding_private_unit_args!) {
    remove_onboarding_private_unit(args: $input) {
      json
    }
  }
`,vt=`
  mutation GenerateOnboardingPrivateUnits($input: generate_onboarding_private_units_args!) {
    generate_onboarding_private_units(args: $input) {
      json
    }
  }
`,bt=`
  query ListOnboardingDrafts($input: getonboardingdraftsbyworkspacejson_args!) {
    getonboardingdraftsbyworkspacejson(args: $input) {
      json
    }
  }
`,St=`
  mutation SaveOnboardingDraft($input: set_general_preference_json_v2_args!) {
    set_general_preference_json_v2(args: $input) {
      json
    }
  }
`,Rt=`
  mutation GenerateBuildingUnits($p_params: jsonb!, $p_workspace_id: uuid!) {
    generate_building_units(args: { p_params: $p_params, p_workspace_id: $p_workspace_id }) {
      json
    }
  }
`,Nt=`
  query GetWorkspaceLinkByExternalApiKey($args: get_workspace_link_by_external_api_key_args!) {
    get_workspace_link_by_external_api_key(args: $args) {
      json
    }
  }
`,xt=`
  mutation UpdateWorkspaceLinksUpdatedAtTrigger($args: updateworkspacelinksupdatedattriggerjson_args!) {
    updateworkspacelinksupdatedattriggerjson(args: $args) {
      json
    }
  }
`,Pt=`
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
`,Dt=`
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
`,wt=`
  mutation createHailaClientContractsByTemplate($input: CreateHailaClientContractsInput!) {
    createHailaClientContractsByTemplate(input: $input) {
      success
      errorMessages
    }
  }
`,Lt=`
  mutation DisableContract($contractId: UUID!) {
    disableContract(workspaceLinkContractId: $contractId) {
      success
      errorMessages
    }
  }
`,ne="Unidades privativas",se="Porta unidade privativa",oe="Condomínio",Ft="7f8cd27d-5dd4-4d1c-b648-348b5c16c513",Bt="ef5169ae-da3c-41b3-bb1f-70965ce4f1e0",O="2313d889-801a-44f1-90dc-1257651ccf4b",Ut=Array.from({length:7},(e,t)=>({areaId:null,dayWeek:String(t+1),startHour:"00:00",endHour:"23:59"})),R={filterIntegratorClients(e,t){return e.filter(r=>r.type==="LEGAL_PERSON").filter(r=>r.id!==t).map(r=>r.id)},async getActiveClientCount(e){if(!e)return 0;const t=await T(nt,{input:{selectedworkspaceid:e}}),r=A(t.getactiveworkspaceclientscountjson);if(m(r)){const a=r.count;if(typeof a=="number")return a;if(typeof a=="string"&&a.trim())return Number(a)||0}return 0},async getWorkspaceClientsInPrivateUnitGroups(e){return R.fetchWorkspaceClients(e,st,"getworkspaceclientsinprivateunitgroupsjson")},async getWorkspaceClientsNotInPrivateUnitGroups(e){return R.fetchWorkspaceClients(e,ot,"getworkspaceclientsnotinprivateunitgroupsjson")},async fetchWorkspaceClients(e,t,r){if(!e)return[];const a=await T(t,{input:{selectedworkspaceid:e}}),n=A(a[r]);return Array.isArray(n)?n.filter(s=>!!m(s)).map(s=>xe(s)).filter(s=>s.id).sort((s,o)=>s.firstName.toLowerCase().localeCompare(o.firstName.toLowerCase())):[]},async getGroupSelectInviteLinks(e,t){if(!e)return[];const r=await T(it,{workspaceId:e,...K(t)},$),a=A(r.prod_get_autoadesao_invite_links_summary_json);return Array.isArray(a)?a.filter(n=>!!m(n)).map(n=>we(n,fe.officialInviteWebUrl)).filter(n=>n.id):[]},async getAutoadesaoInviteLinkRegistrants(e,t){if(!e)return{total:0,items:[]};const r=t?.limit??50,a=t?.offset??0,s=(t?.likeParam?.trim()??"")||null,o=t?.order==="alpha"?"alpha":"recent",i=t?.onlyManagerPending===!0,c=await T(ct,{inviteLinkId:e,...K(t?.sessionWorkspaceId),limit:r,offset:a,likeParam:s,order:o,onlyManagerPending:i},$),l=A(c.prod_get_autoadesao_invite_link_registrants_json),p=m(l);return p?Le(p):{total:0,items:[]}},async getWorkspaceClientFacePhotos(e,t,r){if(!e||t.length===0)return{};const a=[...new Set(t.filter(Boolean))].slice(0,100);if(a.length===0)return{};const n=await T(ut,{workspaceId:e,clientIds:a,...K(r)},$),s=A(n.prod_get_workspace_client_face_photos_json);if(!Array.isArray(s))return{};const o={};for(const i of s){const c=m(i);if(!c)continue;const l=String(c.workspaceClientId??"").trim(),p=String(c.photoUrl??"").trim();l&&p&&(o[l]=p)}return o},async getPresenceByClients(e){const t=[...new Set(e.filter(Boolean))].slice(0,500);if(t.length===0)return{};const r=await T(lt,{input:{workspaceClientIds:t}},$),a=m(r.session_presenceByClients);if(!a||a.success!==!0)return{};const n=Array.isArray(a.items)?a.items:[],s={};for(const o of n){const i=dt(o);i&&(s[i.workspaceClientId]=i)}return s},async setSelfEnrollmentInviteLink(e){const t=e.workspaceId;return _e.setWorkspaceInviteLink({workspaceLinkId:null,linkStatus:"ACCEPTED",responsibleWorkspaceId:t,senderWorkspaceId:t,permissionId:"0c8b41d5-2cc1-4674-b9ae-ed62ccf6e5bd",startDate:e.startDate,endDate:e.endDate,name:e.name,description:e.description,allowedWorkspaceTypes:["PERSON"],requireManagerApproval:!0,dependents:-1,allowedDomains:[],newContracts:[],groups:[],showOptionalCustomFields:!1,requireGroupSelectByUser:!0,addOnGroupAsAdmin:!0,reservations:[],cloneDetails:[],contractDependents:[]})},async getBridgesByWorkspace(e){if(!e)return[];const t=await T(pt,{workspaceId:e}),r=A(t.getbridgesbyworkspacejson);return Array.isArray(r)?r.filter(a=>!!m(a)).map(a=>Fe(a)).filter(a=>a.id):[]},async createBridge(e,t){const r=t.trim();if(!e||!r)throw new Error("Nome e workspace sao obrigatorios");const a=await h(mt,{name:r,workspaceId:e}),n=A(a.create_bridge),s=m(n);if(s&&s.success===!1){const o=Array.isArray(s.errorMessages)?s.errorMessages.map(i=>String(i)).filter(Boolean):[];throw new Error(o[0]??"Falha ao criar bridge")}},async getWorkspaceAreasWithDevices(e){if(!e)return[];const t=50,r=[];let a=0,n=!0;for(;n;){const o=await T(ft,{args:{p_workspace_id:e,p_offset:a,p_limit:t}},{timeoutMs:45e3}),i=A(o.get_workspace_areas_with_devices_json),c=typeof i=="string"?JSON.parse(i):i,l=m(c);if(!l)throw new Error("Resposta invalida ao carregar dispositivos");const p=Array.isArray(l.areas)?l.areas:[];r.push(...p.filter(u=>!!m(u)).map(u=>$e(u)));const y=m(l.pagination);n=y?.hasMore===!0,a=typeof y?.nextOffset=="number"?y.nextOffset:a+t}const s=await R.getAreaHierarchyLabels(e);return Object.keys(s).length===0?r:r.map(o=>{const i=s[o.id];return i?{...o,hierarchyName:i}:o})},async getAreaHierarchyLabels(e){try{const t=await T(gt,{workspaceId:e}),r=Array.isArray(t.workspaceAreasWithDevices)?t.workspaceAreasWithDevices:[],a={};for(const n of r){const s=m(n),o=typeof s?.id=="string"?s.id:"";if(!o)continue;const i=m(s?.areaHierarchy),c=typeof i?.name=="string"?i.name.trim():"";c&&(a[o]=c)}return a}catch{return{}}},async getManufacturers(){const e=await T(yt,{});return(Array.isArray(e.manufacturers)?e.manufacturers:[]).filter(r=>!!m(r)).map(r=>je(r))},async getDevice(e,t){const a=(await T(_t,{deviceId:e,userId:t})).getdevicebyidjson,n=A(a),s=m(n);if(!s||s.found===!1||!s.id)throw new Error("Dispositivo nao encontrado");return s},async setDevice(e){const t=!e.deviceId,r=!!e.passageId,a={id:t?null:e.deviceId,name:e.name,workspaceId:e.workspaceId,deviceTemplateId:e.deviceTemplateId,passageId:r?e.passageId:null,areaId:r?null:e.areaId??null,deviceStatus:{name:"NOT_SYNC"},bridgeId:e.bridgeId??null,deviceFeatures:(e.deviceFeatureIds??[]).filter(c=>c).map(c=>({id:c})),configs:e.deviceConfigs.map(c=>({...c.id?{id:c.id}:{},deviceTemplateConfigId:c.deviceTemplateConfigId,value:c.value}))};e.externalApiKey&&(a.externalApiKey=e.externalApiKey);const n=await h(It,{input:a}),s=m(n.setDevice);U(s,"Falha ao salvar dispositivo");const o=m(s?.payload),i=typeof o?.id=="string"?o.id:e.deviceId??"";if(!i)throw new Error("Dispositivo salvo sem identificador");return i},async deleteDevice(e){const t=await h(At,{deviceId:e});U(m(t.deleteDevice),"Falha ao remover dispositivo")},async createClientWorkspace(e){const t=await h(Tt,{input:{workspaceId:e.workspaceId,legalName:e.legalName,brandingName:e.brandingName,email:e.email,flagType:e.flagType,address:e.address??"",complement:e.complement??"",city:e.city??"",country:e.country??"",state:e.state??"",zipCode:e.zipCode??""}}),r=m(t.createWorkspaceLegalPersonFromWorkspace);if(!r)throw new Error("Resposta invalida ao criar workspace");const a=m(r.payload);return{success:r.success===!0,errorMessages:Array.isArray(r.errorMessages)?r.errorMessages.map(n=>String(n)):[],createdWorkspaceId:typeof a?.id=="string"?a.id:null}},async deleteWorkspace(e){const t=await h(Ct,{id:e});U(m(t.deleteWorkspace),"Falha ao excluir condominio")},async getAreasWithoutFilters(e){if(!e)return[];const t=await T(Et,{workspaceId:e}),r=A(t.getareasbyworkspaceidwithoutfiltersjson);return Array.isArray(r)?r.filter(a=>!!m(a)).map(a=>{const n=a,s=m(n.areaCategory);return{id:typeof n.id=="string"?n.id:"",name:typeof n.name=="string"?n.name:"",areaCategoryId:(typeof n.areaCategoryId=="string"?n.areaCategoryId:null)??(typeof s?.id=="string"?s.id:null),areaCategoryName:(typeof n.areaCategoryName=="string"?n.areaCategoryName:null)??(typeof s?.name=="string"?s.name:null)}}).filter(a=>a.id):[]},async generateSingleUnit(e){const t=e.prefix.trim()?e.prefix.trim().endsWith(" ")?e.prefix.trim():`${e.prefix.trim()} `:"",r={data:{area_forms:{mode:"VERTICAL_BATCH",area_parent_id:e.parentAreaId,prefix:t,final_floor:1,passage_type:e.passageTypeId||O,initial_floor:1,units_by_floor:1,passage_category:e.passageCategoryId,complement_by_floor:[e.complement.trim()]}},name:"private_areas",step:3,status:"DRAFT"},a=await h(kt,{p_params:r,p_workspace_id:e.workspaceId}),n=A(a.generate_building_units),s=m(n);return s||{raw:n}},async generateSinglePrivateUnit(e){const t=e.prefix.trim(),r=e.complement.trim(),a=[t,r].filter(Boolean).join(" "),n=e.passageTypeId||O,s=()=>{const o={id:null,name:a,prefix:"",complement:r,passages:[{id:null,name:a,type:n,category:e.passageCategoryId,external_line:e.insertIntercomExtension?r:null}],areaParentId:e.parentAreaId,has_external_line:e.insertIntercomExtension};return{data:{area_forms:{mode:"SEQUENTIAL_BATCH",area_parent_id:e.parentAreaId,prefix:t,complement_prefix:"",final_floor:0,passage_type:n,initial_floor:0,units_by_floor:1,passage_category:e.passageCategoryId,complement_by_floor:[r],generated_units:{area:"",units:[o]}}},name:"private_areas",step:3,status:"DRAFT"}};return R.generateOnboardingPrivateUnits({workspaceId:e.workspaceId,creatorUserId:e.creatorUserId,onboardingJson:s(),defaultAreaCategoryId:e.defaultAreaCategoryId})},async generateOnboardingPrivateUnits(e){const t=await h(vt,{input:{p_workspace_id:e.workspaceId,p_onboarding_json:e.onboardingJson,p_creator_user_id:e.creatorUserId,p_default_area_type_id:e.defaultAreaTypeId||"b73fa253-3126-45bb-b6cd-4b726092e579",p_default_area_category_id:e.defaultAreaCategoryId}}),r=A(t.generate_onboarding_private_units),a=m(r)??{},n=typeof a.processed=="number"?a.processed:Array.isArray(a.processed)?a.processed.length:0,s=typeof a.message=="string"&&a.message.trim()?a.message.trim():null,o=[];if(Array.isArray(a.errors))for(const i of a.errors){const c=m(i);if(!c)continue;const l=typeof c.error=="string"?c.error.trim():"";if(!l)continue;const p=c.index;o.push(typeof p=="number"?`Unidade ${p}: ${l}`:l)}return a.success!==!0&&!s&&o.length>0?{success:!1,processed:n,message:o[0],errors:o}:{success:a.success===!0,processed:n,message:s,errors:o}},async resolveAreaCategoryIdByName(e,t){if(!e)throw new Error("Workspace invalido");const r=t.trim();if(!r)throw new Error("Categoria de area nao informada");const a=r.toLowerCase(),s=(await D.getAreaOptions(e)).categories.find(c=>c.name.trim().toLowerCase()===a);if(s?.id)return s.id;const i=(await R.getAreasWithoutFilters(e)).find(c=>c.areaCategoryName?.trim().toLowerCase()===a&&c.areaCategoryId);if(i?.areaCategoryId)return i.areaCategoryId;try{return await D.createAreaCategory({workspaceId:e,name:r,description:r})}catch(c){if((c instanceof Error?c.message.toLowerCase():"").includes("already exists")){const y=(await D.getAreaOptions(e)).categories.find(u=>u.name.trim().toLowerCase()===a);if(y?.id)return y.id}throw c}},async resolveCondoAreaCategoryId(e){return R.resolveAreaCategoryIdByName(e,oe)},async resolvePrivateUnitAreaCategoryId(e){return R.resolveAreaCategoryIdByName(e,ne)},async resolveOrCreatePassageCategoryId(e,t=se){const r=t.trim();if(!r)throw new Error("Categoria de acesso nao informada");const a=await D.getPassageAccess(e),n=r.toLowerCase(),s=a.passageCategories.find(o=>o.name.trim().toLowerCase()===n);return s?.id?s.id:D.createPassageCategory({workspaceId:e,name:r,description:r})},async removeOnboardingPrivateUnit(e){const t=await h(ht,{input:{p_workspace_id:e.workspaceId,p_client_group_link_id:e.clientGroupLinkId,p_hard_delete:e.hardDelete,p_force:e.force,p_dry_run:e.dryRun}}),r=A(t.remove_onboarding_private_unit),a=m(r)??{};return{success:a.success===!0,action:typeof a.action=="string"?a.action:null,messages:Array.isArray(a.messages)?a.messages.map(n=>String(n)):[],raw:a}},async generateBuildingUnits(e){const t=e.prefix.trim(),r=t?t.endsWith(" ")?t:`${t} `:"",a=(e.excludedFloors??[]).map(i=>Math.trunc(i)).filter(i=>Number.isFinite(i)),n=await h(Rt,{p_params:{data:{area_forms:{mode:"VERTICAL_BATCH",area_parent_id:e.parentAreaId,prefix:r,final_floor:e.finalFloor,passage_type:e.passageTypeId||O,initial_floor:e.initialFloor,units_by_floor:e.unitsByFloor,passage_category:e.passageCategoryId,complement_by_floor:e.complementByFloor,excluded_floors:a}},name:"private_areas",step:3,status:"DRAFT"},p_workspace_id:e.workspaceId},{timeoutMs:12e4}),s=A(n.generate_building_units),o=m(s);if(!o)throw new Error("Resposta invalida ao gerar unidades");return o},async listOnboardingDrafts(e){if(!e)return[];const t=await T(bt,{input:{selectedworkspaceid:e,selectedslug:te}}),r=A(t.getonboardingdraftsbyworkspacejson);return Array.isArray(r)?r.filter(a=>!!m(a)).map(a=>tt(a)).filter(a=>a.id).sort((a,n)=>{const s=a.updatedAt??a.createdAt??"",o=n.updatedAt??n.createdAt??"";return!s&&!o?0:s?o?o.localeCompare(s):-1:1}):[]},async saveOnboardingDraft(e){const t=e.savedAt??new Date,r=e.preferenceName?.trim()||et(t),a=await h(St,{input:{p_id:e.existingDraftId??null,p_slug:te,p_payload:e.payload,p_recipient_workspace:e.recipientWorkspaceId,p_name:r,p_reference_of:"workspace",p_valuetype:"json"}}),n=A(a.set_general_preference_json_v2),s=m(n);if(!s||s.success!==!0){const o=Array.isArray(s?.errorMessages)?s?.errorMessages.map(i=>String(i)).filter(Boolean):[];throw new Error(o[0]??"Falha ao salvar rascunho")}return{id:typeof s.id=="string"?s.id:"",generalPreferenceId:typeof s.generalPreferenceId=="string"?s.generalPreferenceId:null,name:r}},async getWorkspaceLinkIdsByExternalApiKey(e){const t=e.trim();if(!t)return[];const r=await T(Nt,{args:{p_external_api_key:t}}),a=A(r.get_workspace_link_by_external_api_key);return(Array.isArray(a)?a:Array.isArray(a?.links)?a.links:[]).map(s=>m(s)).map(s=>typeof s?.id=="string"?s.id:"").filter(Boolean)},async resyncWorkspaceLinks(e){const t=e.map(r=>r.trim()).filter(Boolean);if(t.length===0)throw new Error("Nenhuma liberação encontrada para ressincronizar");await h(xt,{args:{workspacelinkids:t}})},async getContractsByRecipient(e,t){if(!e)return{success:!1,payload:[]};const r=await X(Pt,{variables:{workspaceId:e,currencyName:t??null},timeoutMs:rt}),a=m(r.contractsByRecipient);if(!a)return{success:!1,payload:[]};const n=Array.isArray(a.payload)?a.payload:[];return{success:a.success===!0,payload:n.filter(s=>!!m(s)).map(s=>{const o=s,i=m(o.template);return{id:typeof o.id=="string"?o.id:"",status:typeof o.status=="string"?o.status:"",templateId:typeof i?.id=="string"?i.id:"",templateName:typeof i?.name=="string"?i.name:""}}).filter(s=>s.id)}},async getSubscriptionTemplates(){const[e,t]=await Promise.all([T(Dt,{}),ge.getFeatureSkuMappings()]),r=m(e.hailaSubscriptionContractTemplates);if(!r)return{success:!1,errorMessages:["Resposta invalida do servidor"],payload:[]};const a=Array.isArray(r.payload)?r.payload:[];return{success:r.success===!0,errorMessages:Array.isArray(r.errorMessages)?r.errorMessages.map(n=>String(n)):[],payload:a.filter(n=>!!m(n)).map(n=>{const s=n,o=Array.isArray(s.workspaceLinkContractTemplateCredits)?s.workspaceLinkContractTemplateCredits:[],i=typeof s.id=="string"?s.id:"",c=t[i]?.trim()||null;return{id:i,name:typeof s.name=="string"?s.name:"",description:typeof s.description=="string"?s.description:null,creditIds:o.map(l=>{const p=m(l);return typeof p?.id=="string"?p.id:""}).filter(Boolean),skuSlug:c}}).filter(n=>n.id)}},async createClientContractsByTemplate(e){if(e.templateIds.length===0)return;const t=await X(wt,{variables:{input:{recipientWorkspaceId:e.recipientWorkspaceId,responsibleWorkspaceId:e.responsibleWorkspaceId,templateIds:e.templateIds}},timeoutMs:at}),r=m(t.createHailaClientContractsByTemplate);if(!r)throw new Error("Resposta invalida ao criar funcionalidades");if(r.success!==!0){const a=Array.isArray(r.errorMessages)?r.errorMessages.map(n=>String(n)).filter(Boolean):[];throw new Error(a[0]??"Falha ao criar funcionalidades")}},async disableContract(e){const t=await h(Lt,{contractId:e});U(m(t.disableContract),"Falha ao desativar contrato")},buildTemplateContractIndex(e){const t=new Map,r=new Set;for(const a of e){const n=a.status.toUpperCase();if(!(n==="ACTIVE"||n==="ACCEPTED"||n==="PENDING")||!a.templateId||r.has(a.id))continue;r.add(a.id);const o=t.get(a.templateId)??[];o.push(a.id),t.set(a.templateId,o)}return t},constants:{PRIVATE_UNIT_AREA_CATEGORY_NAME:ne,PRIVATE_UNIT_PASSAGE_CATEGORY_NAME:se,CONDO_AREA_CATEGORY_NAME:oe,INTEGRATOR_AREA_TYPE_ID:Ft,INTEGRATOR_OCCUPATION_FORMAT_ID:Bt,INTEGRATOR_PASSAGE_TYPE_ID:O,DEFAULT_AREA_WEEK_DAYS_INPUT:Ut},findTemplate:We,hailaJavaEndpoint:ie.hailaJavaGraphqlEndpoint};export{Vt as $,Tr as A,gr as B,vr as C,br as D,tr as E,or as F,We as G,rr as H,dr as I,Ht as J,ce as K,er as L,Te as M,Ce as N,Ae as O,Zt as P,Kt as Q,qt as R,Yt as S,zt as T,Jt as U,Qt as V,Xt as W,q as X,nr as Y,ar as Z,be as _,yr as a,Wt as a0,fr as b,_r as c,Ye as d,Xe as e,Ar as f,He as g,mr as h,R as i,hr as j,z as k,Y as l,he as m,Ir as n,sr as o,cr as p,pr as q,ur as r,lr as s,Cr as t,Er as u,Ze as v,ir as w,et as x,kr as y,Qe as z};
