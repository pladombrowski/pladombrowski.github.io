import{B as X,K as Z,aa as T,V as j,E,f as ee}from"./index-t10Krp4d.js";import{a as R}from"./area.service-C37UW0vT.js";import{r as te,i as re}from"./invite-link.service-CSZKa8aP.js";import{p as ae}from"./datetime-DeBZFhP4.js";const mt=[{value:"geral",labelKey:"options.integratorTabs.general",icon:"pi-bolt"},{value:"unidades",labelKey:"options.integratorTabs.units",icon:"pi-building"},{value:"dispositivos",labelKey:"options.integratorTabs.devices",icon:"pi-microchip"},{value:"funcionalidades",labelKey:"options.integratorTabs.features",icon:"pi-sliders-h"},{value:"cameras",labelKey:"options.integratorTabs.cameras",icon:"pi-video"},{value:"interfonia",labelKey:"options.integratorTabs.intercom",icon:"pi-phone"}];function gt(e){const t=e.firstName?.trim()??"",r=e.lastName?.trim()??"",a=`${t} ${r}`.trim();return a||(e.brandingName?.trim()?e.brandingName.trim():e.legalName?.trim()?e.legalName.trim():e.email?.trim()?e.email.trim():"Cliente")}function ft(e){return e.status.toUpperCase()==="ENABLED"}function ne(e){const t=e.configs.deployment;if(!t||typeof t!="object")return null;const r=t;return{slug:r.slug??null,status:r.status??null,error:r.error??null,attempts:typeof r.attempts=="number"?r.attempts:null,queuedAt:r.queued_at??r.queuedAt??null,startedAt:r.started_at??r.startedAt??null,completedAt:r.completed_at??r.completedAt??null,provisionedAt:r.provisioned_at??r.provisionedAt??null,coolifyServiceUuid:r.coolify_service_uuid??r.coolifyServiceUuid??null}}function yt(e){return ne(e)?.status??null}const se=new Set(["thumbnail","rtspLink","webRTCLink","go2rtc_rtsp","go2rtc_tapo","go2rtc_isapi","isapiLink","isapiUrl","isapi_url"]);function _t(e){return se.has(e.fieldSlug)}const ie=["brava_access_name","brava_module_serial","brava_sector"];function At(e){if(!e)return!1;const t=new Set(e.deviceTemplateConfigs.map(r=>r.fieldSlug));return ie.every(r=>t.has(r))}function oe(e){return e.template?.deviceType.slug??""}function It(e){return e.template?.deviceType.label??""}const Tt="camera",ce="extension_line",Et="access_authenticator";function Ct(e){return oe(e)===ce}function vt(e,t){const r=e.hierarchyName.trim().length>0,a=t.hierarchyName.trim().length>0;return r!==a?r?1:-1:e.name.toLowerCase().localeCompare(t.name.toLowerCase())}function kt(e){const t=new Map;for(const r of e)for(const a of r.deviceTemplates){const n=a.deviceType;n.slug&&(t.has(n.slug)||t.set(n.slug,n))}return[...t.values()].sort((r,a)=>r.label.localeCompare(a.label))}function p(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function c(e){return typeof e=="string"?e:""}function u(e){return typeof e!="string"?null:e.trim()||null}function le(e){return{id:c(e.id),type:c(e.type),firstName:c(e.firstName),lastName:c(e.lastName),brandingName:c(e.brandingName),email:c(e.email),legalName:c(e.legalName),phone:u(e.phone)}}function de(e){const t=u(e.complement),r=c(e.name).trim();let a=t;return!a&&r&&r.toLowerCase()!=="moradores"&&(a=r),{id:c(e.id),name:r,complement:t,categoryName:u(e.categoryName),unitLabel:a}}function pe(e){const r=p(e.groupsByClient)?.payload,a=Array.isArray(r)?r.filter(o=>!!p(o)).map(o=>de(o)):[],n=p(e.recognitionSettingByWorkspaceClientId),s=u(n?.processedUrl),i=u(n?.originalURL);return{id:c(e.id),type:c(e.type),email:u(e.email),phone:u(e.phone),firstName:u(e.firstName),lastName:u(e.lastName),legalName:u(e.legalName),brandingName:u(e.brandingName),groups:a,photoUrl:s??i}}function ue(e,t){const a=(Array.isArray(e.dependents)?e.dependents:[]).filter(s=>!!p(s)).map(s=>{const i=p(s.workspaceClient);return{id:c(s.id),status:c(s.status),createdAt:u(s.createdAt),workspaceClient:i?pe(i):null}}).sort((s,i)=>!s.createdAt&&!i.createdAt?0:s.createdAt?i.createdAt?i.createdAt.localeCompare(s.createdAt):-1:1),n=c(e.url);return{id:c(e.id),url:n&&te(n,t),name:c(e.name),startDate:u(e.startDate),endDate:u(e.endDate),dependents:a}}function me(e){const t=p(e.configs)??{};return{id:c(e.id),name:c(e.name),status:c(e.status),localIp:u(e.local_ip)??u(e.localIp),vpnIp:u(e.vpn_ip)??u(e.vpnIp),workspaceId:c(e.workspace_id)||c(e.workspaceId),configs:t}}function ge(e){if(!e)return null;const t=p(e.deviceType);return{id:c(e.id),name:c(e.name),deviceType:{id:c(t?.id),label:c(t?.label),slug:c(t?.slug)}}}function W(e){const t=Array.isArray(e.deviceManufacturers)?e.deviceManufacturers:[];let r=null;for(const s of t){const i=p(s),o=u(i?.externalApiKeyId);if(o){r=o;break}}const a=p(e.status)??p(e.deviceStatus),n=p(e.template)??p(e.deviceTemplate);return{id:c(e.id),name:c(e.name),passageId:u(e.passageId),areaId:u(e.areaId),workspaceId:c(e.workspaceId),statusName:u(a?.name),externalApiKeyId:r,template:ge(n)}}function fe(e){const t=p(e.areaHierarchy),r=p(e.parentArea),a=Array.isArray(e.passages)?e.passages:[],n=Array.isArray(e.devices)?e.devices:[],s=p(e.areaType),i=p(e.areaCategory);return{id:c(e.id),name:c(e.name),hierarchyName:c(t?.name)||c(r?.name),areaTypeId:c(s?.id),areaTypeName:c(s?.name),areaCategoryId:c(i?.id),areaCategoryName:c(i?.name),passages:a.filter(o=>!!p(o)).map(o=>({id:c(o.id),name:c(o.name),devices:(Array.isArray(o.devices)?o.devices:[]).filter(l=>!!p(l)).map(l=>W(l))})),areaDevices:n.filter(o=>!!p(o)).map(o=>W(o))}}function ye(e){return{id:c(e?.id),label:c(e?.label),slug:c(e?.slug)}}function _e(e){return{id:c(e.id),fieldLabel:c(e.fieldLabel),fieldHelper:u(e.fieldHelper)??u(e.field_helper),fieldMask:u(e.fieldMask),fieldSlug:c(e.fieldSlug),fieldType:c(e.fieldType)||"string",fieldDefaultValue:u(e.fieldDefaultValue)}}function Ae(e){const t=Array.isArray(e.deviceFeatures)?e.deviceFeatures:[],r=Array.isArray(e.deviceTemplateConfigs)?e.deviceTemplateConfigs:[];return{id:c(e.id),name:c(e.name),externalApiKeyIdLabel:c(e.externalApiKeyIdLabel)||"Código de integração",deviceType:ye(p(e.deviceType)),deviceFeatures:t.filter(a=>!!p(a)).map(a=>({id:c(a.id),name:c(a.name)})),deviceTemplateConfigs:r.filter(a=>!!p(a)).map(a=>_e(a))}}function Ie(e){const t=Array.isArray(e.deviceTemplates)?e.deviceTemplates:[];return{id:c(e.id),name:c(e.name),deviceTemplates:t.filter(r=>!!p(r)).map(r=>Ae(r))}}function Te(e,t){for(const r of e){const a=r.deviceTemplates.find(n=>n.id===t);if(a)return a}return null}function bt(e){const t=[["devices","dispositivo","dispositivos"],["passages","acesso","acessos"],["members","morador","moradores"],["extensionLines","ramal","ramais"],["generalPreferences","preferência","preferências"]],r=[];for(const[a,n,s]of t){const i=e.impact[a]??0;i<=0||r.push(`${i} ${i===1?n:s}`)}return r.join(" · ")}function Ee(e){let t=e;for(const r of["json","payload","data","result"]){const a=p(t[r]);a&&(t=a)}return t}function Nt(e){let t=e;if(typeof t=="string"){const y=t;try{t=JSON.parse(y)}catch{return{canHardDelete:!1,message:y,dependencies:[],impact:{},raw:{}}}}Array.isArray(t)&&(t=t[0]);const r=p(t);if(!r)return{canHardDelete:!1,message:"Resposta de verificação não reconhecida",dependencies:[],impact:{},raw:{}};const a=Ee(r),n=["can_hard_delete","canHardDelete","can_delete","canDelete","allowed","success","ok","removed","deleted"];let s=null;for(const y of n){const g=a[y];if(typeof g=="boolean"){s=g;break}if(typeof g=="number"){s=g!==0;break}if(typeof g=="string"&&(g==="true"||g==="false")){s=g==="true";break}}const i=(()=>{for(const y of["status","result","code"]){const g=a[y];if(typeof g=="string"&&g.trim())return g.trim()}return null})(),l=(y=>{for(const g of y){const O=a[g];if(typeof O=="string"&&O.trim())return O.trim()}return null})(["message","error","reason","detail"]),m=a.dependencies??a.blocking_dependencies??a.blockers??a.blocking??a.blocking_records,C=Array.isArray(m)?m.map(y=>String(y)).filter(y=>y.trim()):[],v=p(a.wouldRemove)??p(a.would_remove)??p(a.removed),_={};if(v)for(const[y,g]of Object.entries(v))typeof g=="number"&&(_[y]=g);const k=(i??"").toLowerCase(),J=k.includes("error")||k.includes("block")||k.includes("fail")||k.includes("denied"),Q=k.includes("success")||k==="ok"||k.includes("allowed"),$=s??(J?!1:!!Q);return{canHardDelete:$,message:l??(!$&&s===null&&i===null?"Resposta de verificação não reconhecida":null),dependencies:C,impact:_,raw:a}}const L="2313d889-801a-44f1-90dc-1257651ccf4b",V="SEQUENTIAL_BATCH",K=3,q="private_areas",Y="DRAFT",Rt="Porta unidade privativa",F="onboarding-draft";function b(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function I(e,t=""){return typeof e=="string"?e:t}function A(e){return typeof e!="string"?null:e.trim()||null}function S(e,t=0){if(typeof e=="number"&&Number.isFinite(e))return Math.trunc(e);if(typeof e=="string"&&e.trim()){const r=Number.parseInt(e,10);if(Number.isFinite(r))return r}return t}const Ce=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function N(e){return!!(e&&Ce.test(e.trim()))}function P(e){const t=e.trim().match(/(\d+)\s*$/);if(!t)return null;const r=Number.parseInt(t[1],10);return Number.isFinite(r)?r:null}function B(e){if(!e)return null;const t=e.replace(/\D/g,"");if(!t)return null;const r=Number.parseInt(t,10);return Number.isFinite(r)?r:null}function G(e,t){const r=(t??"").trim();if(!r)return t;const a=e.trim();return a?`${a}${r}`:r}function D(e){return P(e.name)??B(e.complement)}function ve(e){const t=D(e);return t==null?-1:Math.trunc(t/100)}function ht(e){const t=e.units.map((n,s)=>({index:s,unit:n}));if(e.mode===V){const n=[...t].sort((s,i)=>{const o=D(s.unit),l=D(i.unit);return o!=null&&l!=null&&o!==l?o-l:o==null&&l!=null?1:o!=null&&l==null?-1:s.unit.name.toLowerCase().localeCompare(i.unit.name.toLowerCase())});return n.length?[{floorKey:0,entries:n}]:[]}const r=new Map;for(const n of t){const s=ve(n.unit),i=r.get(s)??[];i.push(n),r.set(s,i)}return[...r.keys()].sort((n,s)=>n===-1?1:s===-1?-1:n-s).map(n=>({floorKey:n,entries:(r.get(n)??[]).sort((s,i)=>{const o=D(s.unit),l=D(i.unit);return o!=null&&l!=null&&o!==l?o-l:s.unit.name.toLowerCase().localeCompare(i.unit.name.toLowerCase())})}))}function ke(e){if(!Number.isFinite(e.initialUnit)||!Number.isFinite(e.finalUnit))return[];if(e.initialUnit>e.finalUnit)return[];const t=e.prefix.trim(),r=[];for(let a=e.initialUnit;a<=e.finalUnit;a+=1)r.push(t?`${t} ${a}`:String(a));return r}function z(e){return{id:null,name:e.name,type:e.type??L,category:e.category??null,externalLine:e.externalLine}}function be(e){const t=I(e.name),a=(Array.isArray(e.passages)?e.passages:[]).filter(o=>!!b(o)).map(o=>({id:A(o.id),name:I(o.name),type:A(o.type),category:A(o.category),externalLine:A(o.external_line)??A(o.externalLine)})),n=A(e.complement),s=P(t)??B(t),i=n??(s!=null?String(s):null);return{id:A(e.id),name:t,complement:i,areaParentId:A(e.areaParentId)??A(e.area_parent_id),hasExternalLine:e.has_external_line===!0||e.hasExternalLine===!0,passages:a}}function Ne(e,t=new Date().toISOString()){const r=b(e)??{},a=b(r.data)??{},n=b(a.area_forms)??{},s=b(n.generated_units)??{},i=Array.isArray(s.units)?s.units:[],o=Array.isArray(n.complement_by_floor)?n.complement_by_floor.map(l=>String(l??"")):[];return{status:I(r.status),step:S(r.step),name:I(r.name),mode:I(n.mode),prefix:I(n.prefix),complementPrefix:I(n.complement_prefix).trim(),initialFloor:S(n.initial_floor),finalFloor:S(n.final_floor),areaParentId:A(n.area_parent_id),unitsByFloor:S(n.units_by_floor),passageCategory:I(n.passage_category),passageType:I(n.passage_type)||L,complementByFloor:o,units:i.filter(l=>!!b(l)).map(l=>be(l)),generatedAt:t,savedItemId:null,generalPreferenceId:null,preferenceName:null}}function St(e){const r=ke({prefix:e.prefix,initialUnit:e.initialUnit,finalUnit:e.finalUnit}).map(a=>{const n=G(e.complementPrefix??"",String(P(a)??""));return{id:null,name:a,complement:n,areaParentId:e.areaParentId,hasExternalLine:e.insertIntercomExtension,passages:[z({name:a,category:e.passageCategory||null,externalLine:e.insertIntercomExtension?n:null})]}});return{status:Y,step:K,name:q,mode:V,prefix:e.prefix.trim(),complementPrefix:(e.complementPrefix??"").trim(),initialFloor:e.initialUnit,finalFloor:e.finalUnit,areaParentId:e.areaParentId,unitsByFloor:0,passageCategory:e.passageCategory,passageType:L,complementByFloor:[],units:r,generatedAt:new Date().toISOString(),savedItemId:null,generalPreferenceId:null,preferenceName:null}}function Dt(e){const t=e.name.trim(),r=e.template?.passages[0]??null,a=P(t)??B(t),n=G(e.complementPrefix,a!=null?String(a):null);return{id:null,name:t,complement:n,areaParentId:e.areaParentId??e.template?.areaParentId??null,hasExternalLine:e.hasExternalLine,passages:[{id:null,name:t,type:r?.type??L,category:r?.category??null,externalLine:e.hasExternalLine?n:null}]}}function Re(e,t,r={}){const a=r.name?.trim()||e.name,n=P(a)??B(a),s=G(t,n!=null?String(n):e.complement),i=r.hasExternalLine??e.hasExternalLine,o=e.passages.length?e.passages.map(l=>({...l,name:a,externalLine:i?s:null})):i?[z({name:a,externalLine:s})]:[];return{...e,name:a,complement:s,hasExternalLine:i,passages:o}}function Lt(e,t){return{...e,complementPrefix:t.trim(),units:e.units.map(r=>Re(r,t))}}function he(e){return{data:{area_forms:{mode:e.mode,area_parent_id:e.areaParentId,prefix:e.prefix,complement_prefix:e.complementPrefix,final_floor:e.finalFloor,passage_type:e.passageType,initial_floor:e.initialFloor,units_by_floor:e.unitsByFloor,passage_category:e.passageCategory,complement_by_floor:e.complementByFloor,generated_units:{area:"",units:e.units.map(t=>({id:t.id,name:t.name,prefix:"",complement:t.complement,passages:t.passages.map(r=>({id:r.id,name:r.name,type:r.type,category:r.category,external_line:r.externalLine})),areaParentId:t.areaParentId,has_external_line:t.hasExternalLine}))}}},name:q,step:K,status:Y}}function Pt(e,t){const r=he(e),n=r.data.area_forms,s=N(t.passageTypeId)?t.passageTypeId:N(e.passageType)?e.passageType:L;n.passage_type=s,n.passage_category=t.passageCategoryId;const i=n.generated_units,o=Array.isArray(i.units)?i.units:[],l=N(e.areaParentId)?e.areaParentId:null;for(const m of o){const C=N(m.areaParentId)?m.areaParentId:l;C?m.areaParentId=C:delete m.areaParentId;const v=Array.isArray(m.passages)?m.passages:[];for(const _ of v)_.category=N(_.category)?_.category:t.passageCategoryId,_.type=N(_.type)?_.type:s}return r}function Se(e=new Date){const t=r=>String(r).padStart(2,"0");return`Rascunho${t(e.getDate())}${t(e.getMonth()+1)}${e.getFullYear()}${t(e.getHours())}${t(e.getMinutes())}`}function wt(e,t={}){if(!e)return"Sem data de atualização";const r=ae(e);if(!r)return"Sem data de atualização";const a=X(r,{timeZone:"America/Sao_Paulo",weekday:"short",day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),n=a.charAt(0).toUpperCase()+a.slice(1);return t.includeRascunhoPrefix?`Rascunho ${n}`:n}function De(e){const t=b(e.payload)??{};return{id:I(e.id),generalPreferenceId:A(e.generalPreferenceId),name:I(e.name),slug:I(e.slug),step:S(e.step),status:I(e.status),payload:t,createdAt:A(e.createdAt),updatedAt:A(e.updatedAt)}}function xt(e){const t=e.updatedAt??e.createdAt??new Date().toISOString();return{...Ne(e.payload,t),savedItemId:e.id||null,generalPreferenceId:e.generalPreferenceId,preferenceName:e.name||null}}const Le=6e4,Pe=12e4;function d(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function f(e){if(Array.isArray(e)){if(e.length===0)return null;const r=d(e[0]);return r?r.json??null:null}const t=d(e);return t?t.json??t:null}function w(e,t){if(!e)throw new Error(t);if(e.success===!0)return;const r=Array.isArray(e.errorMessages)?e.errorMessages.map(a=>String(a)).filter(Boolean):[];throw new Error(r[0]??t)}const we=`
  query GetActiveClientCount($input: getactiveworkspaceclientscountjson_args!) {
    getactiveworkspaceclientscountjson(args: $input) {
      json
    }
  }
`,xe=`
  query FetchWorkspaceClients($input: getworkspaceclientsinprivateunitgroupsjson_args!) {
    getworkspaceclientsinprivateunitgroupsjson(args: $input) {
      json
    }
  }
`,Ue=`
  query FetchWorkspaceClients($input: getworkspaceclientsnotinprivateunitgroupsjson_args!) {
    getworkspaceclientsnotinprivateunitgroupsjson(args: $input) {
      json
    }
  }
`,Be=`
  query GetGroupSelectInviteLinks($input: getgroupselectinvitelinksbyworkspacejson_args!) {
    getgroupselectinvitelinksbyworkspacejson(args: $input) {
      json
    }
  }
`,Oe=`
  query GetBridgesByWorkspace($workspaceId: uuid!) {
    getbridgesbyworkspacejson(args: { selectedworkspaceid: $workspaceId }) {
      json
    }
  }
`,Ge=`
  mutation CreateBridge($name: String!, $workspaceId: uuid!) {
    create_bridge(args: { p_name: $name, p_workspace: $workspaceId }) {
      json
    }
  }
`,$e=`
  query GetWorkspaceAreasWithDevices($args: get_workspace_areas_with_devices_json_args!) {
    get_workspace_areas_with_devices_json(args: $args) {
      json
    }
  }
`,je=`
  query GetWorkspaceAreaHierarchyLabels($workspaceId: UUID!) {
    workspaceAreasWithDevices(workspaceId: $workspaceId) {
      id
      areaHierarchy {
        name
      }
    }
  }
`,We=`
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
          fieldHelper
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
`,Fe=`
  query GetDeviceById($deviceId: uuid!, $userId: uuid!) {
    getdevicebyidjson(args: { device_id: $deviceId, user_id: $userId }) {
      json
    }
  }
`,Me=`
  mutation SetDevice($input: DeviceInputDtoInput!) {
    setDevice(input: $input) {
      success
      errorMessages
      payload {
        id
      }
    }
  }
`,He=`
  mutation DeleteDevice($deviceId: UUID!) {
    deleteDevice(id: $deviceId) {
      success
      errorMessages
    }
  }
`,Ve=`
  mutation CreateWorkspaceLegalPersonFromWorkspace($input: WorkspaceLegalPersonCloneInput!) {
    createWorkspaceLegalPersonFromWorkspace(input: $input) {
      success
      errorMessages
      payload {
        id
      }
    }
  }
`,Ke=`
  mutation DeleteWorkspace($id: UUID!) {
    deleteWorkspace(id: $id) {
      success
      errorMessages
    }
  }
`,qe=`
  query Getareasbyworkspaceidwithoutfiltersjson($workspaceId: uuid!) {
    getareasbyworkspaceidwithoutfiltersjson(args: { selectedworkspaceid: $workspaceId }) {
      json
    }
  }
`,Ye=`
  mutation GenerateBuildingUnits($p_params: jsonb!, $p_workspace_id: uuid!) {
    generate_building_units(args: { p_params: $p_params, p_workspace_id: $p_workspace_id }) {
      json
    }
  }
`,ze=`
  mutation RemoveOnboardingPrivateUnit($input: remove_onboarding_private_unit_args!) {
    remove_onboarding_private_unit(args: $input) {
      json
    }
  }
`,Je=`
  mutation GenerateOnboardingPrivateUnits($input: generate_onboarding_private_units_args!) {
    generate_onboarding_private_units(args: $input) {
      json
    }
  }
`,Qe=`
  query ListOnboardingDrafts($input: getonboardingdraftsbyworkspacejson_args!) {
    getonboardingdraftsbyworkspacejson(args: $input) {
      json
    }
  }
`,Xe=`
  mutation SaveOnboardingDraft($input: set_general_preference_json_v2_args!) {
    set_general_preference_json_v2(args: $input) {
      json
    }
  }
`,Ze=`
  mutation GenerateBuildingUnits($p_params: jsonb!, $p_workspace_id: uuid!) {
    generate_building_units(args: { p_params: $p_params, p_workspace_id: $p_workspace_id }) {
      json
    }
  }
`,et=`
  query GetWorkspaceLinkByExternalApiKey($args: get_workspace_link_by_external_api_key_args!) {
    get_workspace_link_by_external_api_key(args: $args) {
      json
    }
  }
`,tt=`
  mutation UpdateWorkspaceLinksUpdatedAtTrigger($args: updateworkspacelinksupdatedattriggerjson_args!) {
    updateworkspacelinksupdatedattriggerjson(args: $args) {
      json
    }
  }
`,rt=`
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
`,at=`
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
`,nt=`
  mutation createHailaClientContractsByTemplate($input: CreateHailaClientContractsInput!) {
    createHailaClientContractsByTemplate(input: $input) {
      success
      errorMessages
    }
  }
`,st=`
  mutation DisableContract($contractId: UUID!) {
    disableContract(workspaceLinkContractId: $contractId) {
      success
      errorMessages
    }
  }
`,x="Unidades privativas",M="Porta unidade privativa",it="Condomínio",H="7f8cd27d-5dd4-4d1c-b648-348b5c16c513",ot="ef5169ae-da3c-41b3-bb1f-70965ce4f1e0",U="2313d889-801a-44f1-90dc-1257651ccf4b",ct=Array.from({length:7},(e,t)=>({areaId:null,dayWeek:String(t+1),startHour:"00:00",endHour:"23:59"})),h={filterIntegratorClients(e,t){return e.filter(r=>r.type==="LEGAL_PERSON").filter(r=>r.id!==t).map(r=>r.id)},async getActiveClientCount(e){if(!e)return 0;const t=await E(we,{input:{selectedworkspaceid:e}}),r=f(t.getactiveworkspaceclientscountjson);if(d(r)){const a=r.count;if(typeof a=="number")return a;if(typeof a=="string"&&a.trim())return Number(a)||0}return 0},async getWorkspaceClientsInPrivateUnitGroups(e){return h.fetchWorkspaceClients(e,xe,"getworkspaceclientsinprivateunitgroupsjson")},async getWorkspaceClientsNotInPrivateUnitGroups(e){return h.fetchWorkspaceClients(e,Ue,"getworkspaceclientsnotinprivateunitgroupsjson")},async fetchWorkspaceClients(e,t,r){if(!e)return[];const a=await E(t,{input:{selectedworkspaceid:e}}),n=f(a[r]);return Array.isArray(n)?n.filter(s=>!!d(s)).map(s=>le(s)).filter(s=>s.id).sort((s,i)=>s.firstName.toLowerCase().localeCompare(i.firstName.toLowerCase())):[]},async getGroupSelectInviteLinks(e){if(!e)return[];const t=await E(Be,{input:{selectedworkspaceid:e}}),r=f(t.getgroupselectinvitelinksbyworkspacejson);return Array.isArray(r)?r.filter(a=>!!d(a)).map(a=>ue(a,ee.officialInviteWebUrl)).filter(a=>a.id):[]},async setSelfEnrollmentInviteLink(e){const t=e.workspaceId;return re.setWorkspaceInviteLink({workspaceLinkId:null,linkStatus:"ACCEPTED",responsibleWorkspaceId:t,senderWorkspaceId:t,permissionId:"0c8b41d5-2cc1-4674-b9ae-ed62ccf6e5bd",startDate:e.startDate,endDate:e.endDate,name:e.name,description:e.description,allowedWorkspaceTypes:["PERSON"],requireManagerApproval:!0,dependents:-1,allowedDomains:[],newContracts:[],groups:[],showOptionalCustomFields:!1,requireGroupSelectByUser:!0,addOnGroupAsAdmin:!0,reservations:[],cloneDetails:[],contractDependents:[]})},async getBridgesByWorkspace(e){if(!e)return[];const t=await E(Oe,{workspaceId:e}),r=f(t.getbridgesbyworkspacejson);return Array.isArray(r)?r.filter(a=>!!d(a)).map(a=>me(a)).filter(a=>a.id):[]},async createBridge(e,t){const r=t.trim();if(!e||!r)throw new Error("Nome e workspace sao obrigatorios");const a=await T(Ge,{name:r,workspaceId:e}),n=f(a.create_bridge),s=d(n);if(s&&s.success===!1){const i=Array.isArray(s.errorMessages)?s.errorMessages.map(o=>String(o)).filter(Boolean):[];throw new Error(i[0]??"Falha ao criar bridge")}},async getWorkspaceAreasWithDevices(e){if(!e)return[];const t=50,r=[];let a=0,n=!0;for(;n;){const i=await E($e,{args:{p_workspace_id:e,p_offset:a,p_limit:t}}),o=f(i.get_workspace_areas_with_devices_json),l=typeof o=="string"?JSON.parse(o):o,m=d(l);if(!m)throw new Error("Resposta invalida ao carregar dispositivos");const C=Array.isArray(m.areas)?m.areas:[];r.push(...C.filter(_=>!!d(_)).map(_=>fe(_)));const v=d(m.pagination);n=v?.hasMore===!0,a=typeof v?.nextOffset=="number"?v.nextOffset:a+t}const s=await h.getAreaHierarchyLabels(e);return Object.keys(s).length===0?r:r.map(i=>{const o=s[i.id];return o?{...i,hierarchyName:o}:i})},async getAreaHierarchyLabels(e){try{const t=await E(je,{workspaceId:e}),r=Array.isArray(t.workspaceAreasWithDevices)?t.workspaceAreasWithDevices:[],a={};for(const n of r){const s=d(n),i=typeof s?.id=="string"?s.id:"";if(!i)continue;const o=d(s?.areaHierarchy),l=typeof o?.name=="string"?o.name.trim():"";l&&(a[i]=l)}return a}catch{return{}}},async getManufacturers(){const e=await E(We,{});return(Array.isArray(e.manufacturers)?e.manufacturers:[]).filter(r=>!!d(r)).map(r=>Ie(r))},async getDevice(e,t){const a=(await E(Fe,{deviceId:e,userId:t})).getdevicebyidjson,n=f(a),s=d(n);if(!s||s.found===!1||!s.id)throw new Error("Dispositivo nao encontrado");return s},async setDevice(e){const t=!e.deviceId,r=!!e.passageId,a={id:t?null:e.deviceId,name:e.name,workspaceId:e.workspaceId,deviceTemplateId:e.deviceTemplateId,passageId:r?e.passageId:null,areaId:r?null:e.areaId??null,deviceStatus:{name:"NOT_SYNC"},bridgeId:e.bridgeId??null,deviceFeatures:(e.deviceFeatureIds??[]).filter(l=>l).map(l=>({id:l})),configs:e.deviceConfigs.map(l=>({...l.id?{id:l.id}:{},deviceTemplateConfigId:l.deviceTemplateConfigId,value:l.value}))};e.externalApiKey&&(a.externalApiKey=e.externalApiKey);const n=await T(Me,{input:a}),s=d(n.setDevice);w(s,"Falha ao salvar dispositivo");const i=d(s?.payload),o=typeof i?.id=="string"?i.id:e.deviceId??"";if(!o)throw new Error("Dispositivo salvo sem identificador");return o},async deleteDevice(e){const t=await T(He,{deviceId:e});w(d(t.deleteDevice),"Falha ao remover dispositivo")},async createClientWorkspace(e){const t=await T(Ve,{input:{workspaceId:e.workspaceId,legalName:e.legalName,brandingName:e.brandingName,email:e.email,flagType:e.flagType,address:e.address??"",complement:e.complement??"",city:e.city??"",country:e.country??"",state:e.state??"",zipCode:e.zipCode??""}}),r=d(t.createWorkspaceLegalPersonFromWorkspace);if(!r)throw new Error("Resposta invalida ao criar workspace");const a=d(r.payload);return{success:r.success===!0,errorMessages:Array.isArray(r.errorMessages)?r.errorMessages.map(n=>String(n)):[],createdWorkspaceId:typeof a?.id=="string"?a.id:null}},async deleteWorkspace(e){const t=await T(Ke,{id:e});w(d(t.deleteWorkspace),"Falha ao excluir condominio")},async getAreasWithoutFilters(e){if(!e)return[];const t=await E(qe,{workspaceId:e}),r=f(t.getareasbyworkspaceidwithoutfiltersjson);return Array.isArray(r)?r.filter(a=>!!d(a)).map(a=>{const n=a,s=d(n.areaCategory);return{id:typeof n.id=="string"?n.id:"",name:typeof n.name=="string"?n.name:"",areaCategoryId:(typeof n.areaCategoryId=="string"?n.areaCategoryId:null)??(typeof s?.id=="string"?s.id:null),areaCategoryName:(typeof n.areaCategoryName=="string"?n.areaCategoryName:null)??(typeof s?.name=="string"?s.name:null)}}).filter(a=>a.id):[]},async generateSingleUnit(e){const t=e.prefix.trim()?e.prefix.trim().endsWith(" ")?e.prefix.trim():`${e.prefix.trim()} `:"",r={data:{area_forms:{mode:"VERTICAL_BATCH",area_parent_id:e.parentAreaId,prefix:t,final_floor:1,passage_type:e.passageTypeId||U,initial_floor:1,units_by_floor:1,passage_category:e.passageCategoryId,complement_by_floor:[e.complement.trim()]}},name:"private_areas",step:3,status:"DRAFT"},a=await T(Ye,{p_params:r,p_workspace_id:e.workspaceId}),n=f(a.generate_building_units),s=d(n);return s||{raw:n}},async generateSinglePrivateUnit(e){const t=e.prefix.trim(),r=e.complement.trim(),a=[t,r].filter(Boolean).join(" "),n=e.passageTypeId||U,s=()=>{const i={id:null,name:a,prefix:"",complement:r,passages:[{id:null,name:a,type:n,category:e.passageCategoryId,external_line:e.insertIntercomExtension?r:null}],areaParentId:e.parentAreaId,has_external_line:e.insertIntercomExtension};return{data:{area_forms:{mode:"SEQUENTIAL_BATCH",area_parent_id:e.parentAreaId,prefix:t,complement_prefix:"",final_floor:0,passage_type:n,initial_floor:0,units_by_floor:1,passage_category:e.passageCategoryId,complement_by_floor:[r],generated_units:{area:"",units:[i]}}},name:"private_areas",step:3,status:"DRAFT"}};return h.generateOnboardingPrivateUnits({workspaceId:e.workspaceId,creatorUserId:e.creatorUserId,onboardingJson:s(),defaultAreaCategoryId:e.defaultAreaCategoryId})},async generateOnboardingPrivateUnits(e){const t=await T(Je,{input:{p_workspace_id:e.workspaceId,p_onboarding_json:e.onboardingJson,p_creator_user_id:e.creatorUserId,p_default_area_type_id:e.defaultAreaTypeId||H,p_default_area_category_id:e.defaultAreaCategoryId}}),r=f(t.generate_onboarding_private_units),a=d(r)??{},n=typeof a.processed=="number"?a.processed:Array.isArray(a.processed)?a.processed.length:0,s=typeof a.message=="string"&&a.message.trim()?a.message.trim():null,i=[];if(Array.isArray(a.errors))for(const o of a.errors){const l=d(o);if(!l)continue;const m=typeof l.error=="string"?l.error.trim():"";if(!m)continue;const C=l.index;i.push(typeof C=="number"?`Unidade ${C}: ${m}`:m)}return a.success!==!0&&!s&&i.length>0?{success:!1,processed:n,message:i[0],errors:i}:{success:a.success===!0,processed:n,message:s,errors:i}},async resolvePrivateUnitAreaCategoryId(e){if(!e)throw new Error("Workspace invalido");const t=await R.getAreaOptions(e),r=x.toLowerCase(),a=t.categories.find(i=>i.name.trim().toLowerCase()===r);if(a?.id)return a.id;const s=(await h.getAreasWithoutFilters(e)).find(i=>i.areaCategoryName?.trim().toLowerCase()===r&&i.areaCategoryId);if(s?.areaCategoryId)return s.areaCategoryId;try{return await R.createAreaCategory({workspaceId:e,name:x,description:x})}catch(i){if((i instanceof Error?i.message.toLowerCase():"").includes("already exists")){const m=(await R.getAreaOptions(e)).categories.find(C=>C.name.trim().toLowerCase()===r);if(m?.id)return m.id}throw i}},async resolveOrCreatePassageCategoryId(e,t=M){const r=t.trim();if(!r)throw new Error("Categoria de acesso nao informada");const a=await R.getPassageAccess(e),n=r.toLowerCase(),s=a.passageCategories.find(i=>i.name.trim().toLowerCase()===n);return s?.id?s.id:R.createPassageCategory({workspaceId:e,name:r,description:r})},async removeOnboardingPrivateUnit(e){const t=await T(ze,{input:{p_workspace_id:e.workspaceId,p_client_group_link_id:e.clientGroupLinkId,p_hard_delete:e.hardDelete,p_force:e.force,p_dry_run:e.dryRun}}),r=f(t.remove_onboarding_private_unit),a=d(r)??{};return{success:a.success===!0,action:typeof a.action=="string"?a.action:null,messages:Array.isArray(a.messages)?a.messages.map(n=>String(n)):[],raw:a}},async generateBuildingUnits(e){const t=e.prefix.trim(),r=t?t.endsWith(" ")?t:`${t} `:"",a=await T(Ze,{p_params:{data:{area_forms:{mode:"VERTICAL_BATCH",area_parent_id:e.parentAreaId,prefix:r,final_floor:e.finalFloor,passage_type:e.passageTypeId||U,initial_floor:e.initialFloor,units_by_floor:e.unitsByFloor,passage_category:e.passageCategoryId,complement_by_floor:e.complementByFloor}},name:"private_areas",step:3,status:"DRAFT"},p_workspace_id:e.workspaceId},{timeoutMs:12e4}),n=f(a.generate_building_units),s=d(n);if(!s)throw new Error("Resposta invalida ao gerar unidades");return s},async listOnboardingDrafts(e){if(!e)return[];const t=await E(Qe,{input:{selectedworkspaceid:e,selectedslug:F}}),r=f(t.getonboardingdraftsbyworkspacejson);return Array.isArray(r)?r.filter(a=>!!d(a)).map(a=>De(a)).filter(a=>a.id).sort((a,n)=>{const s=a.updatedAt??a.createdAt??"",i=n.updatedAt??n.createdAt??"";return!s&&!i?0:s?i?i.localeCompare(s):-1:1}):[]},async saveOnboardingDraft(e){const t=e.savedAt??new Date,r=e.preferenceName?.trim()||Se(t),a=await T(Xe,{input:{p_id:e.existingDraftId??null,p_slug:F,p_payload:e.payload,p_recipient_workspace:e.recipientWorkspaceId,p_name:r,p_reference_of:"workspace",p_valuetype:"json"}}),n=f(a.set_general_preference_json_v2),s=d(n);if(!s||s.success!==!0){const i=Array.isArray(s?.errorMessages)?s?.errorMessages.map(o=>String(o)).filter(Boolean):[];throw new Error(i[0]??"Falha ao salvar rascunho")}return{id:typeof s.id=="string"?s.id:"",generalPreferenceId:typeof s.generalPreferenceId=="string"?s.generalPreferenceId:null,name:r}},async getWorkspaceLinkIdsByExternalApiKey(e){const t=e.trim();if(!t)return[];const r=await E(et,{args:{p_external_api_key:t}}),a=f(r.get_workspace_link_by_external_api_key);return(Array.isArray(a)?a:Array.isArray(a?.links)?a.links:[]).map(s=>d(s)).map(s=>typeof s?.id=="string"?s.id:"").filter(Boolean)},async resyncWorkspaceLinks(e){const t=e.map(r=>r.trim()).filter(Boolean);if(t.length===0)throw new Error("Nenhuma liberação encontrada para ressincronizar");await T(tt,{args:{workspacelinkids:t}})},async getContractsByRecipient(e,t){if(!e)return{success:!1,payload:[]};const r=await j(rt,{variables:{workspaceId:e,currencyName:t??null},timeoutMs:Le}),a=d(r.contractsByRecipient);if(!a)return{success:!1,payload:[]};const n=Array.isArray(a.payload)?a.payload:[];return{success:a.success===!0,payload:n.filter(s=>!!d(s)).map(s=>{const i=s,o=d(i.template);return{id:typeof i.id=="string"?i.id:"",status:typeof i.status=="string"?i.status:"",templateId:typeof o?.id=="string"?o.id:"",templateName:typeof o?.name=="string"?o.name:""}}).filter(s=>s.id)}},async getSubscriptionTemplates(){const e=await E(at,{}),t=d(e.hailaSubscriptionContractTemplates);if(!t)return{success:!1,errorMessages:["Resposta invalida do servidor"],payload:[]};const r=Array.isArray(t.payload)?t.payload:[];return{success:t.success===!0,errorMessages:Array.isArray(t.errorMessages)?t.errorMessages.map(a=>String(a)):[],payload:r.filter(a=>!!d(a)).map(a=>{const n=a,s=Array.isArray(n.workspaceLinkContractTemplateCredits)?n.workspaceLinkContractTemplateCredits:[];return{id:typeof n.id=="string"?n.id:"",name:typeof n.name=="string"?n.name:"",description:typeof n.description=="string"?n.description:null,creditIds:s.map(i=>{const o=d(i);return typeof o?.id=="string"?o.id:""}).filter(Boolean)}}).filter(a=>a.id)}},async createClientContractsByTemplate(e){if(e.templateIds.length===0)return;const t=await j(nt,{variables:{input:{recipientWorkspaceId:e.recipientWorkspaceId,responsibleWorkspaceId:e.responsibleWorkspaceId,templateIds:e.templateIds}},timeoutMs:Pe}),r=d(t.createHailaClientContractsByTemplate);if(!r)throw new Error("Resposta invalida ao criar funcionalidades");if(r.success!==!0){const a=Array.isArray(r.errorMessages)?r.errorMessages.map(n=>String(n)).filter(Boolean):[];throw new Error(a[0]??"Falha ao criar funcionalidades")}},async disableContract(e){const t=await T(st,{contractId:e});w(d(t.disableContract),"Falha ao desativar contrato")},buildTemplateContractIndex(e){const t=new Map,r=new Set;for(const a of e){const n=a.status.toUpperCase();if(!(n==="ACTIVE"||n==="ACCEPTED"||n==="PENDING")||!a.templateId||r.has(a.id))continue;r.add(a.id);const i=t.get(a.templateId)??[];i.push(a.id),t.set(a.templateId,i)}return t},constants:{PRIVATE_UNIT_AREA_CATEGORY_NAME:x,PRIVATE_UNIT_PASSAGE_CATEGORY_NAME:M,CONDO_AREA_CATEGORY_NAME:it,INTEGRATOR_AREA_TYPE_ID:H,INTEGRATOR_OCCUPATION_FORMAT_ID:ot,INTEGRATOR_PASSAGE_TYPE_ID:U,DEFAULT_AREA_WEEK_DAYS_INPUT:ct},findTemplate:Te,hailaJavaEndpoint:Z.hailaJavaGraphqlEndpoint};export{bt as A,xt as B,mt as C,Et as I,vt as a,_t as b,At as c,It as d,ft as e,Te as f,yt as g,ne as h,h as i,oe as j,Tt as k,Ct as l,gt as m,Rt as n,Ne as o,Nt as p,Lt as q,St as r,Dt as s,Re as t,kt as u,he as v,Se as w,Pt as x,ht as y,wt as z};
