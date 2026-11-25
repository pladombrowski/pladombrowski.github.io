import{aj as _e,Q as ye,T as z,ae as I,a5 as re,S as A,ay as Ie,aK as Y,f as Ae,aU as Te}from"./index-cKfYqwVK.js";import{g as ke}from"./general-preference.service-BSEsvtv8.js";import{a as L}from"./area.service-DfiS8Dtq.js";import{b as Ee}from"./billing.service-B1Ij8zlm.js";import{i as Ce}from"./invite-link.service-4pBuP97Y.js";import{r as ve}from"./express-invite-koFWeL9I.js";const nr=[{value:"geral",labelKey:"options.integratorTabs.general",icon:"pi-bolt"},{value:"unidades",labelKey:"options.integratorTabs.units",icon:"pi-building"},{value:"dispositivos",labelKey:"options.integratorTabs.devices",icon:"pi-microchip"},{value:"funcionalidades",labelKey:"options.integratorTabs.features",icon:"pi-sliders-h"},{value:"cameras",labelKey:"options.integratorTabs.cameras",icon:"pi-video"},{value:"interfonia",labelKey:"options.integratorTabs.intercom",icon:"pi-phone"}];function sr(e){const t=e.firstName?.trim()??"",r=e.lastName?.trim()??"",a=`${t} ${r}`.trim();return a||(e.brandingName?.trim()?e.brandingName.trim():e.legalName?.trim()?e.legalName.trim():e.email?.trim()?e.email.trim():"Cliente")}function or(e){return e.status.toUpperCase()==="ENABLED"}function be(e){return e.configs.auto_provision===!0}function w(e,t){const r=e.configs[t];return r==null?null:String(r).trim()||null}function ir(e){return w(e,"api_host")}function cr(e){return w(e,"db_host")}function lr(e){return w(e,"db_user")}function dr(e){return w(e,"database")}function ur(e){const t=e.configs["custom-port"]??e.configs.custom_port;if(typeof t=="number"&&Number.isFinite(t))return Math.trunc(t);if(typeof t=="string"&&t.trim()){const r=Number.parseInt(t.trim(),10);return Number.isFinite(r)?r:null}return null}function pr(e){return w(e,"hikvision_events_host")}function mr(e){return w(e,"intelbras_events_host")}function Q(e){const t=e.configs.deployment;if(!t||typeof t!="object")return null;const r=t;return{slug:r.slug??null,status:r.status??null,error:r.error??null,attempts:typeof r.attempts=="number"?r.attempts:null,queuedAt:r.queued_at??r.queuedAt??null,startedAt:r.started_at??r.startedAt??null,completedAt:r.completed_at??r.completedAt??null,provisionedAt:r.provisioned_at??r.provisionedAt??null,coolifyServiceUuid:r.coolify_service_uuid??r.coolifyServiceUuid??null}}function ue(e){return Q(e)?.status??null}function gr(e){return w(e,"slug")??Q(e)?.slug??null}function he(e){return(ue(e)??"").toUpperCase()==="READY"}function Se(e){const t=(ue(e)??"").toUpperCase();return t==="FAILED"||t==="ERROR"}function fr(e){return he(e)||Se(e)?!1:Q(e)!=null?!0:be(e)}const Re=new Set(["thumbnail","rtspLink","webRTCLink","go2rtc_rtsp","go2rtc_tapo","go2rtc_isapi","isapiLink","isapiUrl","isapi_url"]);function _r(e){return Re.has(e.fieldSlug)}const Ne=["brava_access_name","brava_module_serial","brava_sector"];function yr(e){if(!e)return!1;const t=new Set(e.deviceTemplateConfigs.map(r=>r.fieldSlug));return Ne.every(r=>t.has(r))}function X(e){return(e.template?.deviceType.slug??"").trim().toLowerCase()}function Ir(e){return e.template?.deviceType.label??""}const Pe="camera",we="extension_line",xe="access_authenticator";function ae(e){return X(e)===we}function De(e){return X(e)===Pe}function pe(e){const t=X(e);return t===xe||t==="authenticator"}function Le(e){if(!pe(e))return!1;const t=[e.name,e.template?.name,e.template?.deviceType.label].filter(Boolean).join(" ").toLowerCase();return/facial|face[\s_-]?recog|reconhecimento|rosto|scan[\s_-]?face/.test(t)}function Ar(e){return De(e)?"cctv":Le(e)?"scan-face":pe(e)?"key":"box"}function Tr(e,t){const r=e.hierarchyName.trim().length>0,a=t.hierarchyName.trim().length>0;return r!==a?r?1:-1:e.name.toLowerCase().localeCompare(t.name.toLowerCase())}function kr(e){const t=new Map;for(const r of e)for(const a of r.deviceTemplates){const n=a.deviceType;n.slug&&(t.has(n.slug)||t.set(n.slug,n))}return[...t.values()].sort((r,a)=>r.label.localeCompare(a.label))}function f(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function u(e){return typeof e=="string"?e:typeof e=="number"||typeof e=="boolean"?String(e):""}function _(e){return u(e).trim()||null}function Be(e){return u(e).trim().toLowerCase()}function Fe(e){return{id:u(e.id),type:u(e.type),firstName:u(e.firstName),lastName:u(e.lastName),brandingName:u(e.brandingName),email:u(e.email),legalName:u(e.legalName),phone:_(e.phone)}}function $e(e){const t=_(e.complement)?.trim()||null,r=u(e.name).trim(),a=!!r&&r.toLowerCase()!=="moradores";let n=null;return a&&t&&t!==r?n=`${r} (${t})`:t?n=t:a&&(n=r),{id:u(e.id),name:r,complement:t,categoryName:_(e.categoryName),unitLabel:n}}function Oe(e){const r=f(e.groupsByClient)?.payload,a=Array.isArray(r)?r.filter(c=>!!f(c)).map(c=>$e(c)):[],n=f(e.recognitionSettingByWorkspaceClientId),s=_(n?.processedUrl),o=_(n?.originalURL),i=_(e.photoUrl);return{id:u(e.id),type:u(e.type),email:_(e.email),phone:_(e.phone),firstName:_(e.firstName),lastName:_(e.lastName),legalName:_(e.legalName),brandingName:_(e.brandingName),groups:a,photoUrl:s??o??i}}function me(e){const t=f(e.workspaceClient),r=f(e.inviteLink);return{id:u(e.id),status:u(e.status),createdAt:_(e.createdAt),inviteLink:r?{id:_(r.id),name:_(r.name)}:null,workspaceClient:t?Oe(t):null}}function Ue(e,t){const a=(Array.isArray(e.dependents)?e.dependents:[]).filter(i=>!!f(i)).map(me).sort((i,c)=>!i.createdAt&&!c.createdAt?0:i.createdAt?c.createdAt?c.createdAt.localeCompare(i.createdAt):-1:1),n=typeof e.registrantsCount=="number"?e.registrantsCount:Number.parseInt(String(e.registrantsCount??""),10),s=Number.isFinite(n)?n:a.length,o=u(e.url);return{id:u(e.id),url:o&&ve(o,t),name:u(e.name),startDate:_(e.startDate),endDate:_(e.endDate),registrantsCount:s,dependents:a}}function Ge(e){const t=e.total,r=typeof t=="number"?t:Number.parseInt(String(t??"0"),10)||0,n=(Array.isArray(e.items)?e.items:[]).filter(s=>!!f(s)).map(me);return{total:r,items:n}}function je(e){const t=f(e.configs)??{};return{id:u(e.id),name:u(e.name),status:u(e.status),localIp:_(e.local_ip)??_(e.localIp),vpnIp:_(e.vpn_ip)??_(e.vpnIp),workspaceId:u(e.workspace_id)||u(e.workspaceId),configs:t}}function Me(e,t=null){if(!e&&!t)return null;const r=f(e?.deviceType)??t;return{id:u(e?.id),name:u(e?.name),deviceType:{id:u(r?.id),label:u(r?.label),slug:Be(r?.slug)}}}function We(e){const t=Array.isArray(e.deviceManufacturers)?e.deviceManufacturers:[];let r=null;for(const o of t){const i=f(o),c=_(i?.externalApiKeyId);if(c){r=c;break}}const a=f(e.status)??f(e.deviceStatus),n=f(e.template)??f(e.deviceTemplate),s=f(e.deviceType);return{id:u(e.id),name:u(e.name),passageId:_(e.passageId),areaId:_(e.areaId),workspaceId:u(e.workspaceId),statusName:_(a?.name),externalApiKeyId:r,template:Me(n,s)}}function ne(e){if(!Array.isArray(e))return[];const t=new Set,r=[];for(const a of e){const n=f(a);if(!n)continue;const s=We(n);!s.id||t.has(s.id)||(t.add(s.id),r.push(s))}return r}function Ve(e){const t=f(e.areaHierarchy),r=f(e.parentArea),a=Array.isArray(e.passages)?e.passages:[],n=[...Array.isArray(e.devices)?e.devices:[],...Array.isArray(e.areaDevices)?e.areaDevices:[]],s=f(e.areaType),o=f(e.areaCategory);return{id:u(e.id),name:u(e.name),hierarchyName:u(t?.name)||u(r?.name),areaTypeId:u(s?.id),areaTypeName:u(s?.name),areaCategoryId:u(o?.id),areaCategoryName:u(o?.name),passages:a.filter(i=>!!f(i)).map(i=>({id:u(i.id),name:u(i.name),devices:ne(i.devices)})),areaDevices:ne(n)}}function Er(e){return{...e,areaDevices:e.areaDevices.filter(t=>!ae(t)),passages:e.passages.map(t=>({...t,devices:t.devices.filter(r=>!ae(r))}))}}function Ke(e){return{id:u(e?.id),label:u(e?.label),slug:u(e?.slug)}}function He(e){return{id:u(e.id),fieldLabel:u(e.fieldLabel),fieldHelper:_(e.fieldHelper)??_(e.field_helper),fieldMask:_(e.fieldMask),fieldSlug:u(e.fieldSlug),fieldType:u(e.fieldType)||"string",fieldDefaultValue:_(e.fieldDefaultValue)}}function qe(e){const t=Array.isArray(e.deviceFeatures)?e.deviceFeatures:[],r=Array.isArray(e.deviceTemplateConfigs)?e.deviceTemplateConfigs:[];return{id:u(e.id),name:u(e.name),externalApiKeyIdLabel:u(e.externalApiKeyIdLabel)||"Código de integração",deviceType:Ke(f(e.deviceType)),deviceFeatures:t.filter(a=>!!f(a)).map(a=>({id:u(a.id),name:u(a.name)})),deviceTemplateConfigs:r.filter(a=>!!f(a)).map(a=>He(a))}}function Ye(e){const t=Array.isArray(e.deviceTemplates)?e.deviceTemplates:[];return{id:u(e.id),name:u(e.name),deviceTemplates:t.filter(r=>!!f(r)).map(r=>qe(r))}}function Je(e,t){for(const r of e){const a=r.deviceTemplates.find(n=>n.id===t);if(a)return a}return null}function ze(e){let t=e;for(const r of["json","payload","data","result"]){const a=f(t[r]);a&&(t=a)}return t}function Cr(e){let t=e;if(typeof t=="string"){const C=t;try{t=JSON.parse(C)}catch{return{canHardDelete:!1,message:C,dependencies:[],impact:{},raw:{}}}}Array.isArray(t)&&(t=t[0]);const r=f(t);if(!r)return{canHardDelete:!1,message:"Resposta de verificação não reconhecida",dependencies:[],impact:{},raw:{}};const a=ze(r),n=["can_hard_delete","canHardDelete","can_delete","canDelete","allowed","success","ok","removed","deleted"];let s=null;for(const C of n){const T=a[C];if(typeof T=="boolean"){s=T;break}if(typeof T=="number"){s=T!==0;break}if(typeof T=="string"&&(T==="true"||T==="false")){s=T==="true";break}}const o=(()=>{for(const C of["status","result","code"]){const T=a[C];if(typeof T=="string"&&T.trim())return T.trim()}return null})(),c=(C=>{for(const T of C){const q=a[T];if(typeof q=="string"&&q.trim())return q.trim()}return null})(["message","error","reason","detail"]),l=a.dependencies??a.blocking_dependencies??a.blockers??a.blocking??a.blocking_records,p=Array.isArray(l)?l.map(C=>String(C)).filter(C=>C.trim()):[],g=f(a.wouldRemove)??f(a.would_remove)??f(a.removed),d={};if(g)for(const[C,T]of Object.entries(g))typeof T=="number"&&(d[C]=T);const v=(o??"").toLowerCase(),$=v.includes("error")||v.includes("block")||v.includes("fail")||v.includes("denied"),fe=v.includes("success")||v==="ok"||v.includes("allowed"),te=s??($?!1:!!fe);return{canHardDelete:te,message:c??(!te&&s===null&&o===null?"Resposta de verificação não reconhecida":null),dependencies:p,impact:d,raw:a}}const vr="7f8cd27d-5dd4-4d1c-b648-348b5c16c513",br="b73fa253-3126-45bb-b6cd-4b726092e579",hr="ef5169ae-da3c-41b3-bb1f-70965ce4f1e0",Sr="cc917e4e-4799-48f6-a03d-f34cb2516edb",x="2313d889-801a-44f1-90dc-1257651ccf4b",Qe="VERTICAL_BATCH",Z="SEQUENTIAL_BATCH",Xe="MULTI_BLOCK_BATCH",M=3,W="private_areas",V="DRAFT",Rr="Porta unidade privativa",J="onboarding-draft",se=new Set(["apartment","casa","sala","unidade_privativa","unidade privativa"]);function Nr(e){if(!e)return!1;const t=e.trim().toLowerCase().replace(/\s+/g,"_");return se.has(t)||se.has(e.trim().toLowerCase())}function R(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function y(e,t=""){return typeof e=="string"?e:t}function E(e){return typeof e!="string"?null:e.trim()||null}function b(e,t=0){if(typeof e=="number"&&Number.isFinite(e))return Math.trunc(e);if(typeof e=="string"&&e.trim()){const r=Number.parseInt(e,10);if(Number.isFinite(r))return r}return t}const Ze=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function D(e){return!!(e&&Ze.test(e.trim()))}function B(e){const t=e.trim().match(/(\d+)\s*$/);if(!t)return null;const r=Number.parseInt(t[1],10);return Number.isFinite(r)?r:null}function K(e){if(!e)return null;const t=e.replace(/\D/g,"");if(!t)return null;const r=Number.parseInt(t,10);return Number.isFinite(r)?r:null}function F(e,t){const r=(t??"").trim();if(!r)return t;const a=e.trim();return a?`${a}${r}`:r}function N(e){return B(e.name)??K(e.complement)}function ee(e){const t=N(e);return t==null?-1:Math.trunc(t/100)}function Pr(e){const t=e.units.map((n,s)=>({index:s,unit:n}));if(e.mode===Z){const n=[...t].sort((s,o)=>{const i=N(s.unit),c=N(o.unit);return i!=null&&c!=null&&i!==c?i-c:i==null&&c!=null?1:i!=null&&c==null?-1:s.unit.name.toLowerCase().localeCompare(o.unit.name.toLowerCase())});return n.length?[{floorKey:0,entries:n}]:[]}const r=new Map;for(const n of t){const s=ee(n.unit),o=r.get(s)??[];o.push(n),r.set(s,o)}return[...r.keys()].sort((n,s)=>n===-1?1:s===-1?-1:n-s).map(n=>({floorKey:n,entries:(r.get(n)??[]).sort((s,o)=>{const i=N(s.unit),c=N(o.unit);return i!=null&&c!=null&&i!==c?i-c:s.unit.name.toLowerCase().localeCompare(o.unit.name.toLowerCase())})}))}function O(e){return[...e].sort((t,r)=>{const a=N(t.unit),n=N(r.unit);return a!=null&&n!=null&&a!==n?a-n:a==null&&n!=null?1:a!=null&&n==null?-1:t.unit.name.toLowerCase().localeCompare(r.unit.name.toLowerCase())})}function wr(e){if(e.mode===Z){const l=O(e.units.map((p,g)=>({index:g,unit:p})));return l.length?[{kind:"floor",floorKey:0,entries:l}]:[]}const t=new Map;e.units.forEach((l,p)=>{const g=ee(l),d=t.get(g)??[];d.push({index:p,unit:l}),t.set(g,d)});const r=Math.trunc(e.initialFloor),a=Math.trunc(e.finalFloor),n=new Set((e.excludedFloors??[]).map(l=>Math.trunc(l)).filter(l=>Number.isFinite(l))),s=[];if(Number.isFinite(r)&&Number.isFinite(a)&&r<=a)for(let l=r;l<=a;l+=1){const p=O(t.get(l)??[]);if(p.length>0){s.push({kind:"floor",floorKey:l,entries:p});continue}n.has(l)&&s.push({kind:"skipped",floorKey:l})}const o=new Set(s.map(l=>l.floorKey)),i=[...t.keys()].filter(l=>l!==-1&&!o.has(l)).sort((l,p)=>l-p);for(const l of i){const p=O(t.get(l)??[]);p.length&&s.push({kind:"floor",floorKey:l,entries:p})}const c=O(t.get(-1)??[]);return c.length&&s.push({kind:"floor",floorKey:-1,entries:c}),s}function et(e){const t=Math.trunc(e.floor),r=String(e.suffix??"").trim(),a=`${t}${r}`;return{name:`${ge(e.prefix)}${a}`.trim(),digitComplement:a,complement:F(e.complementPrefix??"",a)}}function xr(e){const t=et(e);return{id:null,name:t.name,complement:t.complement,areaParentId:e.areaParentId,hasExternalLine:e.hasExternalLine,passages:[H({name:t.name,type:e.passageType,category:e.passageCategory??null,externalLine:e.hasExternalLine?t.complement:null})]}}function Dr(e,t){const r=(e.complementByFloor??[]).map(c=>String(c??"").trim()).filter(Boolean),a=Math.max(2,...r.map(c=>c.length),0),n=Math.trunc(t),s=String(n),o=new Set;for(const c of e.units){if(ee(c)!==n)continue;const l=N(c);if(l==null)continue;const p=String(l);if(!p.startsWith(s)||p.length<=s.length)continue;const g=Number.parseInt(p.slice(s.length),10);Number.isFinite(g)&&o.add(g)}let i=1;for(;o.has(i);)i+=1;return String(i).padStart(a,"0")}function tt(e){if(!Number.isFinite(e.initialUnit)||!Number.isFinite(e.finalUnit))return[];if(e.initialUnit>e.finalUnit)return[];const t=e.prefix.trim(),r=[];for(let a=e.initialUnit;a<=e.finalUnit;a+=1)r.push(t?`${t} ${a}`:String(a));return r}function H(e){return{id:null,name:e.name,type:e.type??x,category:e.category??null,externalLine:e.externalLine}}function rt(e){const t=y(e.name),a=(Array.isArray(e.passages)?e.passages:[]).filter(i=>!!R(i)).map(i=>({id:E(i.id),name:y(i.name),type:E(i.type),category:E(i.category),externalLine:E(i.external_line)??E(i.externalLine)})),n=E(e.complement),s=B(t)??K(t),o=n??(s!=null?String(s):null);return{id:E(e.id),name:t,complement:o,areaParentId:E(e.areaParentId)??E(e.area_parent_id),hasExternalLine:e.has_external_line===!0||e.hasExternalLine===!0,passages:a}}function at(e,t=new Date().toISOString()){const r=R(e)??{},a=R(r.data)??{},n=R(a.area_forms)??{},s=R(n.generated_units)??{},o=Array.isArray(s.units)?s.units:[],i=Array.isArray(n.complement_by_floor)?n.complement_by_floor.map(d=>String(d??"")):[],l=y(n.condo_format).toLowerCase()==="multi"?"multi":"single",g=(Array.isArray(n.blocks)?n.blocks:[]).filter(d=>!!R(d)).map(d=>({areaId:y(d.areaId??d.area_id),name:y(d.name),mode:y(d.mode),prefix:y(d.prefix),complementPrefix:y(d.complementPrefix??d.complement_prefix).trim(),initialFloor:b(d.initialFloor??d.initial_floor),finalFloor:b(d.finalFloor??d.final_floor),unitsByFloor:b(d.unitsByFloor??d.units_by_floor),complementByFloor:Array.isArray(d.complementByFloor)?d.complementByFloor.map(v=>String(v??"")):Array.isArray(d.complement_by_floor)?d.complement_by_floor.map(v=>String(v??"")):[],excludedFloors:oe(d.excludedFloors??d.excluded_floors),unitCount:b(d.unitCount??d.unit_count)})).filter(d=>!!d.areaId);return{status:y(r.status),step:b(r.step),name:y(r.name),mode:y(n.mode),prefix:y(n.prefix),complementPrefix:y(n.complement_prefix).trim(),initialFloor:b(n.initial_floor),finalFloor:b(n.final_floor),areaParentId:E(n.area_parent_id),unitsByFloor:b(n.units_by_floor),passageCategory:y(n.passage_category),passageType:y(n.passage_type)||x,complementByFloor:i,excludedFloors:oe(n.excluded_floors??n.excludedFloors),units:o.filter(d=>!!R(d)).map(d=>rt(d)),generatedAt:t,savedItemId:null,generalPreferenceId:null,preferenceName:null,condoFormat:l,masterAreaId:E(n.master_area_id)??E(n.masterAreaId),blocks:g}}function oe(e){if(!Array.isArray(e))return[];const t=[],r=new Set;for(const a of e){const n=b(a,Number.NaN);!Number.isFinite(n)||r.has(n)||(r.add(n),t.push(n))}return t.sort((a,n)=>a-n)}function ge(e){const t=e.trim();return t?t.endsWith(" ")?t:`${t} `:""}function Lr(e){const t=Math.trunc(e.initialFloor),r=Math.trunc(e.finalFloor),a=new Set((e.excludedFloors??[]).map(p=>Math.trunc(p)).filter(p=>p>=t&&p<=r)),n=e.complementByFloor.map(p=>String(p??"").trim()).filter(Boolean),s=ge(e.prefix),o=(e.complementPrefix??"").trim(),i=[];if(Number.isFinite(t)&&Number.isFinite(r)&&t<=r&&n.length>0){for(let p=t;p<=r;p+=1)if(!a.has(p))for(const g of n){const d=`${s}${p}${g}`,v=`${p}${g}`,$=F(o,v);i.push({id:null,name:d,complement:$,areaParentId:e.areaParentId,hasExternalLine:e.insertIntercomExtension,passages:[H({name:d,category:e.passageCategory||null,externalLine:e.insertIntercomExtension?$:null})]})}}const c=[...a].sort((p,g)=>p-g),l=e.blockSnapshot?[{...e.blockSnapshot,excludedFloors:e.blockSnapshot.excludedFloors??c,unitCount:e.blockSnapshot.unitCount??i.length}]:[];return{status:V,step:M,name:W,mode:Qe,prefix:e.prefix.trim(),complementPrefix:o,initialFloor:t,finalFloor:r,areaParentId:e.areaParentId,unitsByFloor:e.unitsByFloor,passageCategory:e.passageCategory,passageType:x,complementByFloor:n,excludedFloors:c,units:i,generatedAt:new Date().toISOString(),savedItemId:null,generalPreferenceId:null,preferenceName:null,condoFormat:e.condoFormat??"single",masterAreaId:e.masterAreaId??e.areaParentId,blocks:l}}function Br(e){const t=Math.trunc(e.initialUnit),r=Math.trunc(e.finalUnit),a=tt({prefix:e.prefix,initialUnit:t,finalUnit:r}),n=(e.complementPrefix??"").trim(),s=a.map(i=>{const c=F(n,String(B(i)??""));return{id:null,name:i,complement:c,areaParentId:e.areaParentId,hasExternalLine:e.insertIntercomExtension,passages:[H({name:i,category:e.passageCategory||null,externalLine:e.insertIntercomExtension?c:null})]}}),o=e.blockSnapshot?[{...e.blockSnapshot,excludedFloors:e.blockSnapshot.excludedFloors??[],unitCount:e.blockSnapshot.unitCount??s.length}]:[];return{status:V,step:M,name:W,mode:Z,prefix:e.prefix.trim(),complementPrefix:n,initialFloor:t,finalFloor:r,areaParentId:e.areaParentId,unitsByFloor:0,passageCategory:e.passageCategory,passageType:x,complementByFloor:[],excludedFloors:[],units:s,generatedAt:new Date().toISOString(),savedItemId:null,generalPreferenceId:null,preferenceName:null,condoFormat:e.condoFormat??"single",masterAreaId:e.masterAreaId??e.areaParentId,blocks:o}}function Fr(e){const t=e.blocks.filter(n=>n.units.length>0),r=t.flatMap(n=>n.units.map(s=>({...s,areaParentId:n.snapshot.areaId}))),a=t[0];return{status:V,step:M,name:W,mode:Xe,prefix:a?.snapshot.prefix??"",complementPrefix:a?.snapshot.complementPrefix??"",initialFloor:a?.snapshot.initialFloor??0,finalFloor:a?.snapshot.finalFloor??0,areaParentId:e.masterAreaId,unitsByFloor:a?.snapshot.unitsByFloor??0,passageCategory:e.passageCategory,passageType:e.passageType||x,complementByFloor:a?.snapshot.complementByFloor??[],excludedFloors:a?.snapshot.excludedFloors??[],units:r,generatedAt:new Date().toISOString(),savedItemId:null,generalPreferenceId:null,preferenceName:null,condoFormat:"multi",masterAreaId:e.masterAreaId,blocks:t.map(n=>({...n.snapshot,excludedFloors:n.snapshot.excludedFloors??[],unitCount:n.units.length}))}}function $r(e){const t=e.name.trim(),r=e.template?.passages[0]??null,a=B(t)??K(t),n=F(e.complementPrefix,a!=null?String(a):null);return{id:null,name:t,complement:n,areaParentId:e.areaParentId??e.template?.areaParentId??null,hasExternalLine:e.hasExternalLine,passages:[{id:null,name:t,type:r?.type??x,category:r?.category??null,externalLine:e.hasExternalLine?n:null}]}}function nt(e,t,r={}){const a=r.name?.trim()||e.name,n=B(a)??K(a),s=F(t,n!=null?String(n):e.complement),o=r.hasExternalLine??e.hasExternalLine,i=e.passages.length?e.passages.map(c=>({...c,name:a,externalLine:o?s:null})):o?[H({name:a,externalLine:s})]:[];return{...e,name:a,complement:s,hasExternalLine:o,passages:i}}function Or(e,t){return{...e,complementPrefix:t.trim(),units:e.units.map(r=>nt(r,t))}}function st(e){return{data:{area_forms:{mode:e.mode,condo_format:e.condoFormat??"single",master_area_id:e.masterAreaId,area_parent_id:e.areaParentId,prefix:e.prefix,complement_prefix:e.complementPrefix,final_floor:e.finalFloor,passage_type:e.passageType,initial_floor:e.initialFloor,units_by_floor:e.unitsByFloor,passage_category:e.passageCategory,complement_by_floor:e.complementByFloor,excluded_floors:e.excludedFloors??[],blocks:(e.blocks??[]).map(t=>({areaId:t.areaId,name:t.name,mode:t.mode,prefix:t.prefix,complement_prefix:t.complementPrefix,initial_floor:t.initialFloor,final_floor:t.finalFloor,units_by_floor:t.unitsByFloor,complement_by_floor:t.complementByFloor,excluded_floors:t.excludedFloors??[],unit_count:t.unitCount})),generated_units:{area:"",units:e.units.map(t=>({id:t.id,name:t.name,prefix:"",complement:t.complement,passages:t.passages.map(r=>({id:r.id,name:r.name,type:r.type,category:r.category,external_line:r.externalLine})),areaParentId:t.areaParentId,has_external_line:t.hasExternalLine}))}}},name:W,step:M,status:V}}function Ur(e,t){const r=st(e),n=r.data.area_forms,s=D(t.passageTypeId)?t.passageTypeId:D(e.passageType)?e.passageType:x;n.passage_type=s,n.passage_category=t.passageCategoryId;const o=n.generated_units,i=Array.isArray(o.units)?o.units:[],c=D(e.areaParentId)?e.areaParentId:null;for(const l of i){const p=D(l.areaParentId)?l.areaParentId:c;p?l.areaParentId=p:delete l.areaParentId;const g=Array.isArray(l.passages)?l.passages:[];for(const d of g)d.category=D(d.category)?d.category:t.passageCategoryId,d.type=D(d.type)?d.type:s}return r}function ot(e=new Date){const t=r=>String(r).padStart(2,"0");return`Rascunho${t(e.getDate())}${t(e.getMonth()+1)}${e.getFullYear()}${t(e.getHours())}${t(e.getMinutes())}`}function Gr(e,t={}){if(!e)return"Sem data de atualização";const r=_e(e);if(!r)return"Sem data de atualização";const a=ye(r,{timeZone:"America/Sao_Paulo",weekday:"short",day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),n=a.charAt(0).toUpperCase()+a.slice(1);return t.includeRascunhoPrefix?`Rascunho ${n}`:n}function it(e){const t=R(e.payload)??{};return{id:y(e.id),generalPreferenceId:E(e.generalPreferenceId),name:y(e.name),slug:y(e.slug),step:b(e.step),status:y(e.status),payload:t,createdAt:E(e.createdAt),updatedAt:E(e.updatedAt)}}function jr(e){const t=e.updatedAt??e.createdAt??new Date().toISOString();return{...at(e.payload,t),savedItemId:e.id||null,generalPreferenceId:e.generalPreferenceId,preferenceName:e.name||null}}const ct=6e4,lt=12e4;function m(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function k(e){if(Array.isArray(e)){if(e.length===0)return null;const r=m(e[0]);return r?r.json??null:null}const t=m(e);return t?t.json??t:null}function U(e,t){if(!e)throw new Error(t);if(e.success===!0)return;const r=Array.isArray(e.errorMessages)?e.errorMessages.map(a=>String(a)).filter(Boolean):[];throw new Error(r[0]??t)}const dt=`
  query GetActiveClientCount($input: getactiveworkspaceclientscountjson_args!) {
    getactiveworkspaceclientscountjson(args: $input) {
      json
    }
  }
`,ut=`
  query FetchWorkspaceClients($input: getworkspaceclientsinprivateunitgroupsjson_args!) {
    getworkspaceclientsinprivateunitgroupsjson(args: $input) {
      json
    }
  }
`,pt=`
  query FetchWorkspaceClients($input: getworkspaceclientsnotinprivateunitgroupsjson_args!) {
    getworkspaceclientsnotinprivateunitgroupsjson(args: $input) {
      json
    }
  }
`,mt=`
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
`,gt=`
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
`,ft=`
  query SessionPresenceByClients($input: Any!) {
    session_presenceByClients(input: $input)
  }
`;function _t(e){if(!e||typeof e!="object"||Array.isArray(e))return null;const t=e,r=typeof t.workspaceClientId=="string"?t.workspaceClientId.trim():"";if(!r)return null;const a=typeof t.status=="string"?t.status.trim():null;return{workspaceClientId:r,clientType:typeof t.clientType=="string"?t.clientType:null,presenceMode:typeof t.presenceMode=="string"?t.presenceMode:null,userId:typeof t.userId=="string"?t.userId:null,status:a,hasEverLoggedIn:t.hasEverLoggedIn===!0,lastSeenAt:typeof t.lastSeenAt=="string"?t.lastSeenAt:null,currentRoute:typeof t.currentRoute=="string"?t.currentRoute:null,online:t.online===!0||a==="online"}}const yt=`
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
`,G={endpoint:z.hailaJavaGraphqlEndpoint,timeoutMs:3e4},h={endpoint:z.hailaJavaGraphqlEndpoint,timeoutMs:3e4};function S(){return Te==="java"}const It=`
  query GetBridgesByWorkspace($workspaceId: uuid!) {
    getbridgesbyworkspacejson(args: { selectedworkspaceid: $workspaceId }) {
      json
    }
  }
`,At=`
  mutation CreateBridge($name: String!, $workspaceId: uuid!) {
    create_bridge(args: { p_name: $name, p_workspace: $workspaceId }) {
      json
    }
  }
`,Tt=`
  query GetWorkspaceAreasWithDevices($args: get_workspace_areas_with_devices_json_args!) {
    get_workspace_areas_with_devices_json(args: $args) {
      json
    }
  }
`,kt=`
  query GetWorkspaceAreaHierarchyLabels($workspaceId: UUID!) {
    workspaceAreasWithDevices(workspaceId: $workspaceId) {
      id
      areaHierarchy {
        name
      }
    }
  }
`,Et=`
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
`,Ct=`
  query GetDeviceById($deviceId: uuid!, $userId: uuid!) {
    getdevicebyidjson(args: { device_id: $deviceId, user_id: $userId }) {
      json
    }
  }
`,vt=`
  mutation SetDevice($input: DeviceInputDtoInput!) {
    setDevice(input: $input) {
      success
      errorMessages
      payload {
        id
      }
    }
  }
`,bt=`
  mutation DeleteDevice($deviceId: UUID!) {
    deleteDevice(id: $deviceId) {
      success
      errorMessages
    }
  }
`,ht=`
  mutation CreateWorkspaceLegalPersonFromWorkspace($input: WorkspaceLegalPersonCloneInput!) {
    createWorkspaceLegalPersonFromWorkspace(input: $input) {
      success
      errorMessages
      payload {
        id
      }
    }
  }
`,St=`
  mutation DeleteWorkspace($id: UUID!) {
    deleteWorkspace(id: $id) {
      success
      errorMessages
    }
  }
`,Rt=`
  query Getareasbyworkspaceidwithoutfiltersjson($workspaceId: uuid!) {
    getareasbyworkspaceidwithoutfiltersjson(args: { selectedworkspaceid: $workspaceId }) {
      json
    }
  }
`,Nt=`
  mutation GenerateBuildingUnits($p_params: jsonb!, $p_workspace_id: uuid!) {
    generate_building_units(args: { p_params: $p_params, p_workspace_id: $p_workspace_id }) {
      json
    }
  }
`,Pt=`
  mutation RemoveOnboardingPrivateUnit($input: remove_onboarding_private_unit_args!) {
    remove_onboarding_private_unit(args: $input) {
      json
    }
  }
`,wt=`
  mutation GenerateOnboardingPrivateUnits($input: generate_onboarding_private_units_args!) {
    generate_onboarding_private_units(args: $input) {
      json
    }
  }
`,xt=`
  query ListOnboardingDrafts($input: getonboardingdraftsbyworkspacejson_args!) {
    getonboardingdraftsbyworkspacejson(args: $input) {
      json
    }
  }
`,Dt=`
  mutation SaveOnboardingDraft($input: set_general_preference_json_v2_args!) {
    set_general_preference_json_v2(args: $input) {
      json
    }
  }
`,Lt=`
  mutation GenerateBuildingUnits($p_params: jsonb!, $p_workspace_id: uuid!) {
    generate_building_units(args: { p_params: $p_params, p_workspace_id: $p_workspace_id }) {
      json
    }
  }
`,Bt=`
  query GetWorkspaceLinkByExternalApiKey($args: get_workspace_link_by_external_api_key_args!) {
    get_workspace_link_by_external_api_key(args: $args) {
      json
    }
  }
`,Ft=`
  mutation UpdateWorkspaceLinksUpdatedAtTrigger($args: updateworkspacelinksupdatedattriggerjson_args!) {
    updateworkspacelinksupdatedattriggerjson(args: $args) {
      json
    }
  }
`,$t=`
  query ProdActiveClientCount($workspaceId: String!) {
    prod_getactiveworkspaceclientscountjson(selectedworkspaceid: $workspaceId) {
      json
    }
  }
`,Ot=`
  query ProdClientsInPrivateUnitGroups($workspaceId: String!) {
    prod_getworkspaceclientsinprivateunitgroupsjson(selectedworkspaceid: $workspaceId) {
      json
    }
  }
`,Ut=`
  query ProdClientsNotInPrivateUnitGroups($workspaceId: String!) {
    prod_getworkspaceclientsnotinprivateunitgroupsjson(selectedworkspaceid: $workspaceId) {
      json
    }
  }
`,Gt=`
  query ProdBridgesByWorkspace($workspaceId: String!) {
    prod_getbridgesbyworkspacejson(selectedworkspaceid: $workspaceId) {
      json
    }
  }
`,jt=`
  mutation ProdCreateBridge($name: String!, $workspaceId: String!) {
    prod_create_bridge(p_workspace: $workspaceId, p_name: $name) {
      json
    }
  }
`,ie=`
  mutation ProdGenerateBuildingUnits($p_params: Any!, $p_workspace_id: String!) {
    prod_generate_building_units(p_params: $p_params, p_workspace_id: $p_workspace_id) {
      json
    }
  }
`,Mt=`
  mutation ProdGenerateOnboardingPrivateUnits(
    $p_workspace_id: String!
    $p_onboarding_json: Any!
    $p_creator_user_id: String!
    $p_default_area_type_id: String
    $p_default_area_category_id: String
  ) {
    prod_generate_onboarding_private_units(
      p_workspace_id: $p_workspace_id
      p_onboarding_json: $p_onboarding_json
      p_creator_user_id: $p_creator_user_id
      p_default_area_type_id: $p_default_area_type_id
      p_default_area_category_id: $p_default_area_category_id
    ) {
      json
    }
  }
`,Wt=`
  mutation ProdWorkspaceLinkByExternalApiKey($key: String!) {
    prod_get_workspace_link_by_external_api_key(p_external_api_key: $key) {
      json
    }
  }
`,Vt=`
  mutation ProdUpdateWorkspaceLinksTrigger($ids: Any!) {
    prod_updateworkspacelinksupdatedattriggerjson(workspacelinkids: $ids) {
      json
    }
  }
`,Kt=`
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
`,Ht=`
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
`,qt=`
  mutation createHailaClientContractsByTemplate($input: CreateHailaClientContractsInput!) {
    createHailaClientContractsByTemplate(input: $input) {
      success
      errorMessages
    }
  }
`,Yt=`
  mutation DisableContract($contractId: UUID!) {
    disableContract(workspaceLinkContractId: $contractId) {
      success
      errorMessages
    }
  }
`,ce="Unidades privativas",le="Porta unidade privativa",de="Condomínio",Jt="7f8cd27d-5dd4-4d1c-b648-348b5c16c513",zt="ef5169ae-da3c-41b3-bb1f-70965ce4f1e0",j="2313d889-801a-44f1-90dc-1257651ccf4b",Qt=Array.from({length:7},(e,t)=>({areaId:null,dayWeek:String(t+1),startHour:"00:00",endHour:"23:59"})),P={filterIntegratorClients(e,t){return e.filter(r=>r.type==="LEGAL_PERSON").filter(r=>r.id!==t).map(r=>r.id)},async getActiveClientCount(e){if(!e)return 0;const t=S(),r=t?await A($t,{workspaceId:e},h):await A(dt,{input:{selectedworkspaceid:e}}),a=k(t?r.prod_getactiveworkspaceclientscountjson:r.getactiveworkspaceclientscountjson);if(m(a)){const n=a.count;if(typeof n=="number")return n;if(typeof n=="string"&&n.trim())return Number(n)||0}return 0},async getWorkspaceClientsInPrivateUnitGroups(e){return P.fetchWorkspaceClients(e,ut,"getworkspaceclientsinprivateunitgroupsjson",{document:Ot,key:"prod_getworkspaceclientsinprivateunitgroupsjson"})},async getWorkspaceClientsNotInPrivateUnitGroups(e){return P.fetchWorkspaceClients(e,pt,"getworkspaceclientsnotinprivateunitgroupsjson",{document:Ut,key:"prod_getworkspaceclientsnotinprivateunitgroupsjson"})},async fetchWorkspaceClients(e,t,r,a){if(!e)return[];const n=S()&&!!a,s=n?await A(a.document,{workspaceId:e},h):await A(t,{input:{selectedworkspaceid:e}}),o=k(n?s[a.key]:s[r]);return Array.isArray(o)?o.filter(i=>!!m(i)).map(i=>Fe(i)).filter(i=>i.id).sort((i,c)=>i.firstName.toLowerCase().localeCompare(c.firstName.toLowerCase())):[]},async getGroupSelectInviteLinks(e,t){if(!e)return[];const r=await A(mt,{workspaceId:e,...Y(t)},G),a=k(r.prod_get_autoadesao_invite_links_summary_json);return Array.isArray(a)?a.filter(n=>!!m(n)).map(n=>Ue(n,Ae.officialInviteWebUrl)).filter(n=>n.id):[]},async getAutoadesaoInviteLinkRegistrants(e,t){if(!e)return{total:0,items:[]};const r=t?.limit??50,a=t?.offset??0,s=(t?.likeParam?.trim()??"")||null,o=t?.order==="alpha"?"alpha":"recent",i=t?.onlyManagerPending===!0,c=await A(gt,{inviteLinkId:e,...Y(t?.sessionWorkspaceId),limit:r,offset:a,likeParam:s,order:o,onlyManagerPending:i},G),l=k(c.prod_get_autoadesao_invite_link_registrants_json),p=m(l);return p?Ge(p):{total:0,items:[]}},async getWorkspaceClientFacePhotos(e,t,r){if(!e||t.length===0)return{};const a=[...new Set(t.filter(Boolean))].slice(0,100);if(a.length===0)return{};const n=await A(yt,{workspaceId:e,clientIds:a,...Y(r)},G),s=k(n.prod_get_workspace_client_face_photos_json);if(!Array.isArray(s))return{};const o={};for(const i of s){const c=m(i);if(!c)continue;const l=String(c.workspaceClientId??"").trim(),p=String(c.photoUrl??"").trim();l&&p&&(o[l]=p)}return o},async getPresenceByClients(e){const t=[...new Set(e.filter(Boolean))].slice(0,500);if(t.length===0)return{};const r=await A(ft,{input:{workspaceClientIds:t}},G),a=m(r.session_presenceByClients);if(!a||a.success!==!0)return{};const n=Array.isArray(a.items)?a.items:[],s={};for(const o of n){const i=_t(o);i&&(s[i.workspaceClientId]=i)}return s},async setSelfEnrollmentInviteLink(e){const t=e.workspaceId;return Ce.setWorkspaceInviteLink({workspaceLinkId:null,linkStatus:"ACCEPTED",responsibleWorkspaceId:t,senderWorkspaceId:t,permissionId:"0c8b41d5-2cc1-4674-b9ae-ed62ccf6e5bd",startDate:e.startDate,endDate:e.endDate,name:e.name,description:e.description,allowedWorkspaceTypes:["PERSON"],requireManagerApproval:!0,dependents:-1,allowedDomains:[],newContracts:[],groups:[],showOptionalCustomFields:!1,requireGroupSelectByUser:!0,addOnGroupAsAdmin:!0,reservations:[],cloneDetails:[],contractDependents:[]})},async getBridgesByWorkspace(e){if(!e)return[];const t=S(),r=t?await A(Gt,{workspaceId:e},h):await A(It,{workspaceId:e}),a=k(t?r.prod_getbridgesbyworkspacejson:r.getbridgesbyworkspacejson);return Array.isArray(a)?a.filter(n=>!!m(n)).map(n=>je(n)).filter(n=>n.id):[]},async createBridge(e,t){const r=t.trim();if(!e||!r)throw new Error("Nome e workspace sao obrigatorios");const a=S(),n=a?await I(jt,{name:r,workspaceId:e},h):await I(At,{name:r,workspaceId:e}),s=k(a?n.prod_create_bridge:n.create_bridge),o=m(s);if(o&&o.success===!1){const i=Array.isArray(o.errorMessages)?o.errorMessages.map(c=>String(c)).filter(Boolean):[];throw new Error(i[0]??"Falha ao criar bridge")}},async getWorkspaceAreasWithDevices(e){if(!e)return[];const t=50,r=[];let a=0,n=!0;for(;n;){const o=await A(Tt,{args:{p_workspace_id:e,p_offset:a,p_limit:t}},{timeoutMs:45e3}),i=k(o.get_workspace_areas_with_devices_json),c=typeof i=="string"?JSON.parse(i):i,l=m(c);if(!l)throw new Error("Resposta invalida ao carregar dispositivos");const p=Array.isArray(l.areas)?l.areas:[];r.push(...p.filter(d=>!!m(d)).map(d=>Ve(d)));const g=m(l.pagination);n=g?.hasMore===!0,a=typeof g?.nextOffset=="number"?g.nextOffset:a+t}const s=await P.getAreaHierarchyLabels(e);return Object.keys(s).length===0?r:r.map(o=>{const i=s[o.id];return i?{...o,hierarchyName:i}:o})},async getAreaHierarchyLabels(e){try{const t=await A(kt,{workspaceId:e}),r=Array.isArray(t.workspaceAreasWithDevices)?t.workspaceAreasWithDevices:[],a={};for(const n of r){const s=m(n),o=typeof s?.id=="string"?s.id:"";if(!o)continue;const i=m(s?.areaHierarchy),c=typeof i?.name=="string"?i.name.trim():"";c&&(a[o]=c)}return a}catch{return{}}},async getManufacturers(){const e=await A(Et,{});return(Array.isArray(e.manufacturers)?e.manufacturers:[]).filter(r=>!!m(r)).map(r=>Ye(r))},async getDevice(e,t){const a=(await A(Ct,{deviceId:e,userId:t})).getdevicebyidjson,n=k(a),s=m(n);if(!s||s.found===!1||!s.id)throw new Error("Dispositivo nao encontrado");return s},async setDevice(e){const t=!e.deviceId,r=!!e.passageId,a={id:t?null:e.deviceId,name:e.name,workspaceId:e.workspaceId,deviceTemplateId:e.deviceTemplateId,passageId:r?e.passageId:null,areaId:r?null:e.areaId??null,deviceStatus:{name:"NOT_SYNC"},bridgeId:e.bridgeId??null,deviceFeatures:(e.deviceFeatureIds??[]).filter(c=>c).map(c=>({id:c})),configs:e.deviceConfigs.map(c=>({...c.id?{id:c.id}:{},deviceTemplateConfigId:c.deviceTemplateConfigId,value:c.value}))};e.externalApiKey&&(a.externalApiKey=e.externalApiKey);const n=await I(vt,{input:a}),s=m(n.setDevice);U(s,"Falha ao salvar dispositivo");const o=m(s?.payload),i=typeof o?.id=="string"?o.id:e.deviceId??"";if(!i)throw new Error("Dispositivo salvo sem identificador");return i},async deleteDevice(e){const t=await I(bt,{deviceId:e});U(m(t.deleteDevice),"Falha ao remover dispositivo")},async createClientWorkspace(e){const t=await I(ht,{input:{workspaceId:e.workspaceId,legalName:e.legalName,brandingName:e.brandingName,email:e.email,flagType:e.flagType,address:e.address??"",complement:e.complement??"",city:e.city??"",country:e.country??"",state:e.state??"",zipCode:e.zipCode??""}}),r=m(t.createWorkspaceLegalPersonFromWorkspace);if(!r)throw new Error("Resposta invalida ao criar workspace");const a=m(r.payload);return{success:r.success===!0,errorMessages:Array.isArray(r.errorMessages)?r.errorMessages.map(n=>String(n)):[],createdWorkspaceId:typeof a?.id=="string"?a.id:null}},async deleteWorkspace(e){const t=await I(St,{id:e});U(m(t.deleteWorkspace),"Falha ao excluir condominio")},async getAreasWithoutFilters(e){if(!e)return[];const t=await A(Rt,{workspaceId:e}),r=k(t.getareasbyworkspaceidwithoutfiltersjson);return Array.isArray(r)?r.filter(a=>!!m(a)).map(a=>{const n=a,s=m(n.areaCategory);return{id:typeof n.id=="string"?n.id:"",name:typeof n.name=="string"?n.name:"",areaCategoryId:(typeof n.areaCategoryId=="string"?n.areaCategoryId:null)??(typeof s?.id=="string"?s.id:null),areaCategoryName:(typeof n.areaCategoryName=="string"?n.areaCategoryName:null)??(typeof s?.name=="string"?s.name:null)}}).filter(a=>a.id):[]},async generateSingleUnit(e){const t=e.prefix.trim()?e.prefix.trim().endsWith(" ")?e.prefix.trim():`${e.prefix.trim()} `:"",r={data:{area_forms:{mode:"VERTICAL_BATCH",area_parent_id:e.parentAreaId,prefix:t,final_floor:1,passage_type:e.passageTypeId||j,initial_floor:1,units_by_floor:1,passage_category:e.passageCategoryId,complement_by_floor:[e.complement.trim()]}},name:"private_areas",step:3,status:"DRAFT"},a=S(),n=a?await I(ie,{p_params:r,p_workspace_id:e.workspaceId},h):await I(Nt,{p_params:r,p_workspace_id:e.workspaceId}),s=k(a?n.prod_generate_building_units:n.generate_building_units),o=m(s);return o||{raw:s}},async generateSinglePrivateUnit(e){const t=e.prefix.trim(),r=e.complement.trim(),a=[t,r].filter(Boolean).join(" "),n=e.passageTypeId||j,s=()=>{const o={id:null,name:a,prefix:"",complement:r,passages:[{id:null,name:a,type:n,category:e.passageCategoryId,external_line:e.insertIntercomExtension?r:null}],areaParentId:e.parentAreaId,has_external_line:e.insertIntercomExtension};return{data:{area_forms:{mode:"SEQUENTIAL_BATCH",area_parent_id:e.parentAreaId,prefix:t,complement_prefix:"",final_floor:0,passage_type:n,initial_floor:0,units_by_floor:1,passage_category:e.passageCategoryId,complement_by_floor:[r],generated_units:{area:"",units:[o]}}},name:"private_areas",step:3,status:"DRAFT"}};return P.generateOnboardingPrivateUnits({workspaceId:e.workspaceId,creatorUserId:e.creatorUserId,onboardingJson:s(),defaultAreaCategoryId:e.defaultAreaCategoryId})},async generateOnboardingPrivateUnits(e){const t=S(),r={p_workspace_id:e.workspaceId,p_onboarding_json:e.onboardingJson,p_creator_user_id:e.creatorUserId,p_default_area_type_id:e.defaultAreaTypeId||"b73fa253-3126-45bb-b6cd-4b726092e579",p_default_area_category_id:e.defaultAreaCategoryId},a=t?await I(Mt,r,h):await I(wt,{input:r}),n=k(t?a.prod_generate_onboarding_private_units:a.generate_onboarding_private_units),s=m(n)??{},o=typeof s.processed=="number"?s.processed:Array.isArray(s.processed)?s.processed.length:0,i=typeof s.message=="string"&&s.message.trim()?s.message.trim():null,c=[];if(Array.isArray(s.errors))for(const l of s.errors){const p=m(l);if(!p)continue;const g=typeof p.error=="string"?p.error.trim():"";if(!g)continue;const d=p.index;c.push(typeof d=="number"?`Unidade ${d}: ${g}`:g)}return s.success!==!0&&!i&&c.length>0?{success:!1,processed:o,message:c[0],errors:c}:{success:s.success===!0,processed:o,message:i,errors:c}},async resolveAreaCategoryIdByName(e,t){if(!e)throw new Error("Workspace invalido");const r=t.trim();if(!r)throw new Error("Categoria de area nao informada");const a=r.toLowerCase(),s=(await L.getAreaOptions(e)).categories.find(c=>c.name.trim().toLowerCase()===a);if(s?.id)return s.id;const i=(await P.getAreasWithoutFilters(e)).find(c=>c.areaCategoryName?.trim().toLowerCase()===a&&c.areaCategoryId);if(i?.areaCategoryId)return i.areaCategoryId;try{return await L.createAreaCategory({workspaceId:e,name:r,description:r})}catch(c){if((c instanceof Error?c.message.toLowerCase():"").includes("already exists")){const g=(await L.getAreaOptions(e)).categories.find(d=>d.name.trim().toLowerCase()===a);if(g?.id)return g.id}throw c}},async resolveCondoAreaCategoryId(e){return P.resolveAreaCategoryIdByName(e,de)},async resolvePrivateUnitAreaCategoryId(e){return P.resolveAreaCategoryIdByName(e,ce)},async resolveOrCreatePassageCategoryId(e,t=le){const r=t.trim();if(!r)throw new Error("Categoria de acesso nao informada");const a=await L.getPassageAccess(e),n=r.toLowerCase(),s=a.passageCategories.find(o=>o.name.trim().toLowerCase()===n);return s?.id?s.id:L.createPassageCategory({workspaceId:e,name:r,description:r})},async removeOnboardingPrivateUnit(e){const t=await I(Pt,{input:{p_workspace_id:e.workspaceId,p_client_group_link_id:e.clientGroupLinkId,p_hard_delete:e.hardDelete,p_force:e.force,p_dry_run:e.dryRun}}),r=k(t.remove_onboarding_private_unit),a=m(r)??{};return{success:a.success===!0,action:typeof a.action=="string"?a.action:null,messages:Array.isArray(a.messages)?a.messages.map(n=>String(n)):[],raw:a}},async generateBuildingUnits(e){const t=e.prefix.trim(),r=t?t.endsWith(" ")?t:`${t} `:"",a=(e.excludedFloors??[]).map(l=>Math.trunc(l)).filter(l=>Number.isFinite(l)),n=S(),s={p_params:{data:{area_forms:{mode:"VERTICAL_BATCH",area_parent_id:e.parentAreaId,prefix:r,final_floor:e.finalFloor,passage_type:e.passageTypeId||j,initial_floor:e.initialFloor,units_by_floor:e.unitsByFloor,passage_category:e.passageCategoryId,complement_by_floor:e.complementByFloor,excluded_floors:a}},name:"private_areas",step:3,status:"DRAFT"},p_workspace_id:e.workspaceId},o=n?await I(ie,s,{...h,timeoutMs:12e4}):await I(Lt,s,{timeoutMs:12e4}),i=k(n?o.prod_generate_building_units:o.generate_building_units),c=m(i);if(!c)throw new Error("Resposta invalida ao gerar unidades");return c},async listOnboardingDrafts(e){if(!e)return[];const t=await A(xt,{input:{selectedworkspaceid:e,selectedslug:J}}),r=k(t.getonboardingdraftsbyworkspacejson);return Array.isArray(r)?r.filter(a=>!!m(a)).map(a=>it(a)).filter(a=>a.id).sort((a,n)=>{const s=a.updatedAt??a.createdAt??"",o=n.updatedAt??n.createdAt??"";return!s&&!o?0:s?o?o.localeCompare(s):-1:1}):[]},async saveOnboardingDraft(e){const t=e.savedAt??new Date,r=e.preferenceName?.trim()||ot(t);if(Ie==="java"){const o=await ke.setGeneralPreference({id:e.existingDraftId??null,slug:J,payload:e.payload,name:r,referenceOf:"workspace",idReferenceOf:e.recipientWorkspaceId,valueType:"json",sessionWorkspaceId:e.sessionWorkspaceId??e.recipientWorkspaceId});return{id:o.id,generalPreferenceId:o.generalPreferenceId,name:r}}const a=await I(Dt,{input:{p_id:e.existingDraftId??null,p_slug:J,p_payload:e.payload,p_recipient_workspace:e.recipientWorkspaceId,p_name:r,p_reference_of:"workspace",p_valuetype:"json"}}),n=k(a.set_general_preference_json_v2),s=m(n);if(!s||s.success!==!0){const o=Array.isArray(s?.errorMessages)?s?.errorMessages.map(i=>String(i)).filter(Boolean):[];throw new Error(o[0]??"Falha ao salvar rascunho")}return{id:typeof s.id=="string"?s.id:"",generalPreferenceId:typeof s.generalPreferenceId=="string"?s.generalPreferenceId:null,name:r}},async getWorkspaceLinkIdsByExternalApiKey(e){const t=e.trim();if(!t)return[];const r=S(),a=r?await I(Wt,{key:t},h):await A(Bt,{args:{p_external_api_key:t}}),n=k(r?a.prod_get_workspace_link_by_external_api_key:a.get_workspace_link_by_external_api_key);return(Array.isArray(n)?n:Array.isArray(n?.links)?n.links:[]).map(o=>m(o)).map(o=>typeof o?.id=="string"?o.id:"").filter(Boolean)},async resyncWorkspaceLinks(e){const t=e.map(a=>a.trim()).filter(Boolean);if(t.length===0)throw new Error("Nenhuma liberação encontrada para ressincronizar");S()?await I(Vt,{ids:t},h):await I(Ft,{args:{workspacelinkids:t}})},async getContractsByRecipient(e,t){if(!e)return{success:!1,payload:[]};const r=await re(Kt,{variables:{workspaceId:e,currencyName:t??null},timeoutMs:ct}),a=m(r.contractsByRecipient);if(!a)return{success:!1,payload:[]};const n=Array.isArray(a.payload)?a.payload:[];return{success:a.success===!0,payload:n.filter(s=>!!m(s)).map(s=>{const o=s,i=m(o.template);return{id:typeof o.id=="string"?o.id:"",status:typeof o.status=="string"?o.status:"",templateId:typeof i?.id=="string"?i.id:"",templateName:typeof i?.name=="string"?i.name:""}}).filter(s=>s.id)}},async getSubscriptionTemplates(){const[e,t]=await Promise.all([A(Ht,{}),Ee.getFeatureSkuMappings()]),r=m(e.hailaSubscriptionContractTemplates);if(!r)return{success:!1,errorMessages:["Resposta invalida do servidor"],payload:[]};const a=Array.isArray(r.payload)?r.payload:[];return{success:r.success===!0,errorMessages:Array.isArray(r.errorMessages)?r.errorMessages.map(n=>String(n)):[],payload:a.filter(n=>!!m(n)).map(n=>{const s=n,o=Array.isArray(s.workspaceLinkContractTemplateCredits)?s.workspaceLinkContractTemplateCredits:[],i=typeof s.id=="string"?s.id:"",c=t[i]?.trim()||null;return{id:i,name:typeof s.name=="string"?s.name:"",description:typeof s.description=="string"?s.description:null,creditIds:o.map(l=>{const p=m(l);return typeof p?.id=="string"?p.id:""}).filter(Boolean),skuSlug:c}}).filter(n=>n.id)}},async createClientContractsByTemplate(e){if(e.templateIds.length===0)return;const t=await re(qt,{variables:{input:{recipientWorkspaceId:e.recipientWorkspaceId,responsibleWorkspaceId:e.responsibleWorkspaceId,templateIds:e.templateIds}},timeoutMs:lt}),r=m(t.createHailaClientContractsByTemplate);if(!r)throw new Error("Resposta invalida ao criar funcionalidades");if(r.success!==!0){const a=Array.isArray(r.errorMessages)?r.errorMessages.map(n=>String(n)).filter(Boolean):[];throw new Error(a[0]??"Falha ao criar funcionalidades")}},async disableContract(e){const t=await I(Yt,{contractId:e});U(m(t.disableContract),"Falha ao desativar contrato")},buildTemplateContractIndex(e){const t=new Map,r=new Set;for(const a of e){const n=a.status.toUpperCase();if(!(n==="ACTIVE"||n==="ACCEPTED"||n==="PENDING")||!a.templateId||r.has(a.id))continue;r.add(a.id);const o=t.get(a.templateId)??[];o.push(a.id),t.set(a.templateId,o)}return t},constants:{PRIVATE_UNIT_AREA_CATEGORY_NAME:ce,PRIVATE_UNIT_PASSAGE_CATEGORY_NAME:le,CONDO_AREA_CATEGORY_NAME:de,INTEGRATOR_AREA_TYPE_ID:Jt,INTEGRATOR_OCCUPATION_FORMAT_ID:zt,INTEGRATOR_PASSAGE_TYPE_ID:j,DEFAULT_AREA_WEEK_DAYS_INPUT:Qt},findTemplate:Je,hailaJavaEndpoint:z.hailaJavaGraphqlEndpoint};export{Lr as $,Gr as A,jr as B,or as C,ue as D,fr as E,he as F,Se as G,be as H,Pe as I,gr as J,ir as K,cr as L,lr as M,dr as N,ur as O,pr as P,mr as Q,Q as R,Ar as S,Ir as T,xe as U,Ge as V,Nr as W,wr as X,xr as Y,et as Z,Dr as _,_r as a,tt as a0,sr as a1,nr as a2,P as b,X as c,Tr as d,Sr as e,Je as f,hr as g,vr as h,yr as i,$r as j,nt as k,st as l,Fr as m,ot as n,Rr as o,Cr as p,br as q,Ur as r,Or as s,at as t,kr as u,Br as v,Er as w,Qe as x,Z as y,Pr as z};
