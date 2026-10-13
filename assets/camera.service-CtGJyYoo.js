import{E as g,aa as C}from"./index-BVDM-tiy.js";import{b as $}from"./webrtc.service-D_nkgyWj.js";const U=`
  query DeviceGroupsQuery($senderWorkspaceId: uuid!, $recipientWorkspaceId: uuid!) {
    devicegroupsbysenderandrecipient(
      args: {
        senderworkspaceid: $senderWorkspaceId
        recipientworkspaceid: $recipientWorkspaceId
      }
    ) {
      json
    }
  }
`,P=`
  query deviceGroupsBySender($workspaceId: UUID!) {
    __typename
    deviceGroupsBySender(senderWorkspaceId: $workspaceId) {
      __typename
      success
      errorMessages
      payload {
        __typename
        id
        name
        groups {
          __typename
          id
          name
          categoryName
        }
        clients {
          __typename
          id
          type
          firstName
          lastName
          brandingName
          email
        }
        devices {
          __typename
          id
          order
        }
      }
    }
  }
`,x=`
  query deviceGroup($groupId: UUID!) {
    __typename
    deviceGroupById(groupId: $groupId) {
      __typename
      success
      errorMessages
      payload {
        __typename
        id
        name
        groups {
          __typename
          id
          name
          categoryName
        }
        clients {
          __typename
          id
          type
          firstName
          lastName
          brandingName
          email
        }
        devices {
          __typename
          id
          order
          device {
            __typename
            id
            name
            deviceTemplateId
            deviceTemplate {
              __typename
              id
              name
            }
            deviceConfigs {
              __typename
              id
              value
              deviceTemplateConfig {
                __typename
                id
                fieldLabel
                fieldMask
                fieldSlug
                fieldType
              }
            }
            passage {
              __typename
              id
              name
              area {
                __typename
                id
                name
              }
            }
            area {
              __typename
              id
              name
            }
          }
        }
      }
    }
  }
`,L=`
  mutation SetGeneralPreference($input: setgeneralpreference_args!) {
    __typename
    setgeneralpreference(args: $input) {
      __typename
      json
    }
  }
`,W=`
  query GetCameraGroupFlags($cameraGroupId: uuid!) {
    get_camera_group_flags_json(args: { p_camera_group_id: $cameraGroupId }) {
      json
    }
  }
`,O=`
  mutation SetCameraGroupFlags($input: jsonb!) {
    set_camera_group_flags_json(args: { p_input: $input }) {
      json
    }
  }
`,q=`
  query GetWorkspaceAreasWithDevices($args: get_workspace_areas_with_devices_json_args!) {
    get_workspace_areas_with_devices_json(args: $args) {
      json
    }
  }
`,H=`
  query GetWorkspaceAreaHierarchyLabels($workspaceId: UUID!) {
    workspaceAreasWithDevices(workspaceId: $workspaceId) {
      id
      areaHierarchy {
        name
      }
    }
  }
`,K=`
  query devicesByFeatures($workspaceId: UUID!, $features: [String!]!) {
    __typename
    devicesByFeatures(workspaceId: $workspaceId, features: $features) {
      __typename
      success
      errorMessages
      payload {
        __typename
        id
        name
        passage {
          __typename
          id
          name
        }
        area {
          __typename
          id
          name
        }
      }
    }
  }
`,b="camera";function n(e){return typeof e=="string"?e:e==null?"":String(e)}function p(e){const r=n(e).trim();return r||null}function E(e){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)?r:0}function c(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function V(e){if(e&&typeof e=="object")return e;if(typeof e=="string"&&e.trim())try{return JSON.parse(e)}catch{return null}return null}function I(e){if(Array.isArray(e))return e.length===0?null:I(e[0]);const r=c(e);return r?"json"in r?V(r.json)??r.json:r:null}function Y(e){const r=Array.isArray(e.deviceFeatures)?e.deviceFeatures:[];return{order:Number(e.order??0),areaId:String(e.areaId??""),areaName:String(e.areaName??""),deviceId:String(e.deviceId??""),deviceName:String(e.deviceName??""),passageId:String(e.passageId??""),passageName:String(e.passageName??""),externalAPIKey:e.externalAPIKey??null,deviceFeatures:r.filter(a=>!!a&&typeof a=="object").map(a=>({id:String(a.id??""),name:String(a.name??""),deviceConnection:String(a.deviceConnection??"")}))}}function J(e){if(!Array.isArray(e))return[];const r=[];for(const a of e){if(!a||typeof a!="object")continue;const s=a.json;if(Array.isArray(s))for(const t of s){if(!t||typeof t!="object")continue;const i=t,o=Array.isArray(i.devices)?i.devices:[];r.push({groupId:String(i.groupId??""),groupName:String(i.groupName??""),devices:o.filter(d=>!!d&&typeof d=="object").map(Y).sort((d,u)=>d.order-u.order)})}}return r}function R(e){const r=c(e);if(!r)return null;const a=n(r.id).trim();if(!a)return null;const s=n(r.brandingName).trim(),t=n(r.firstName).trim(),i=n(r.lastName).trim(),o=p(r.email),d=s||[t,i].filter(Boolean).join(" ")||o||a;return{id:a,displayName:d,email:o}}function D(e){const r=c(e);if(!r)return null;const a=n(r.id).trim();return a?{id:a,name:n(r.name),categoryName:p(r.categoryName)}:null}function Q(e){const r=n(e.id).trim();if(!r)return null;const a=Array.isArray(e.devices)?e.devices:[];return{id:r,name:n(e.name),groups:(Array.isArray(e.groups)?e.groups:[]).map(D).filter(s=>s!==null),clients:(Array.isArray(e.clients)?e.clients:[]).map(R).filter(s=>s!==null),devices:a.filter(s=>!!s&&typeof s=="object").map(s=>({id:n(s.id),order:E(s.order)}))}}function z(e){const r=c(e);if(!r)return null;const a=c(r.deviceTemplateConfig)??{};return{id:n(r.id),value:n(r.value),fieldSlug:n(a.fieldSlug),fieldLabel:n(a.fieldLabel),fieldMask:n(a.fieldMask),fieldType:n(a.fieldType)}}function X(e){const r=n(e.id).trim(),a=c(e.device);if(!a)return null;const s=n(a.id).trim();if(!s)return null;const t=c(a.passage),i=c(t?.area),o=c(a.area)??i,d=c(a.deviceTemplate);return{relationId:r,id:s,order:E(e.order),name:n(a.name),deviceTemplateId:p(a.deviceTemplateId),deviceTemplateName:p(d?.name),passageId:p(t?.id),passageName:p(t?.name),areaId:p(o?.id),areaName:p(o?.name),configs:(Array.isArray(a.deviceConfigs)?a.deviceConfigs:[]).map(z).filter(u=>u!==null)}}function Z(e){const r=c(I(e));if(!r)return null;const a=c(r.payload);if(!a)return null;const s=c(a.flags)??{};return{cameraGroupId:n(a.cameraGroupId),cameraGroupName:n(a.cameraGroupName),workspaceId:n(a.workspaceId),hasSettings:a.hasSettings===!0,flags:{replaysAllowed:s.replaysAllowed===!0,timeStampClipsExportAllowed:s.timeStampClipsExportAllowed===!0},updatedAt:p(a.updatedAt)}}function ee(e){const r=I(e);return c(r)}function ae(e){const r=Array.isArray(e.deviceManufacturers)?e.deviceManufacturers:[];for(const a of r){const s=c(a),t=p(s?.externalApiKeyId);if(t)return t}return null}function re(e){const r=c(e.template)??c(e.deviceTemplate)??{},a=c(r.deviceType)??c(e.deviceType)??{};return n(a.slug).toLowerCase()}function j(e,r,a){if(re(e)!==b)return null;const s=n(e.id).trim();if(!s)return null;const t=ae(e);let i=null;if(t)try{i=$(t)}catch{i=null}return{id:s,name:n(e.name),areaId:r.id,areaName:r.name,passageId:a?.id??null,passageName:a?.name??null,rtspUrl:i}}const ne={async getCameraGroups(e,r){const a=await g(U,{senderWorkspaceId:e,recipientWorkspaceId:r});return J(a.devicegroupsbysenderandrecipient)},async getDeviceGroupsBySender(e){const a=(await g(P,{workspaceId:e})).deviceGroupsBySender;if(!a)return[];if(!a.success){const i=a.errorMessages??[];if(i.some(o=>/could not find groups/i.test(o)))return[];throw new Error(i.join("; ")||"Falha ao carregar grupos de cameras")}const s=new Set,t=[];for(const i of a.payload??[]){const o=Q(i);!o||s.has(o.id)||(s.add(o.id),t.push(o))}return t},async getDeviceGroupById(e){const a=(await g(x,{groupId:e})).deviceGroupById;if(!a?.success||!a.payload)return null;const s=a.payload,t=n(s.id).trim();if(!t)return null;const i=new Set,o=[];for(const d of Array.isArray(s.devices)?s.devices:[]){const u=c(d);if(!u)continue;const f=X(u);if(!f)continue;const A=f.relationId||f.id;i.has(A)||(i.add(A),o.push(f))}return o.sort((d,u)=>d.order-u.order),{id:t,name:n(s.name),groups:(Array.isArray(s.groups)?s.groups:[]).map(D).filter(d=>d!==null),clients:(Array.isArray(s.clients)?s.clients:[]).map(R).filter(d=>d!==null),devices:o}},async setDeviceGroup(e){const r={name:e.name,workspaceId:e.workspaceId,devices:e.devices,clients:e.clientIds.map(o=>({id:o})),groups:e.groupIds.map(o=>({id:o}))};e.groupId&&(r.id=e.groupId);const a=await C(L,{input:{selectedid:e.groupId??null,selectedrecipientworkspace:e.workspaceId,selectedslug:"device-group",selectedpayload:r}}),s=c(I(a.setgeneralpreference));if(!s)throw new Error("Resposta invalida ao salvar grupo de cameras");if(s.success===!1){const o=Array.isArray(s.errorMessages)?s.errorMessages:[];throw new Error(n(s.message)||o.map(n).join("; ")||"Falha ao salvar grupo")}const t=o=>{if(!o)return"";for(const d of["cameraGroupId","groupId","id"]){const u=n(o[d]).trim();if(u)return u}return""};let i=t(s);if(!i){const o=c(s.payload);i=t(o),!i&&Array.isArray(s.payload)&&s.payload.length>0&&(i=t(c(s.payload[0])))}return i||e.groupId||""},async getCameraGroupFlags(e){const r=await g(W,{cameraGroupId:e});return Z(r.get_camera_group_flags_json)},async setCameraGroupFlags(e,r){const a=await C(O,{input:{cameraGroupId:e,flags:{replaysAllowed:r.replaysAllowed,timeStampClipsExportAllowed:r.timeStampClipsExportAllowed}}}),s=c(I(a.set_camera_group_flags_json));if(!s)throw new Error("Resposta invalida ao salvar configuracoes do grupo");if(s.success!==!0){const t=Array.isArray(s.errorMessages)?s.errorMessages:[];throw new Error(n(s.message)||t.map(n).join("; ")||"Falha ao salvar configuracoes do grupo")}},async getPickableCameras(e){const r=[],a=new Set;let s=0,t=!0,i=0;for(;t&&i<40;){i+=1;const o=await g(q,{args:{p_workspace_id:e,p_offset:s,p_limit:50}},{timeoutMs:45e3}),d=ee(o.get_workspace_areas_with_devices_json);if(!d)break;const u=Array.isArray(d.areas)?d.areas:[];for(const T of u){const l=c(T);if(!l)continue;const N=n(l.id).trim(),M=n(l.name);if(!N)continue;const h={id:N,name:M},F=Array.isArray(l.passages)?l.passages:[],k=new Map;for(const w of F){const m=c(w),y=n(m?.id).trim();if(!m||!y)continue;const v={id:y,name:n(m.name)};k.set(y,v);for(const _ of Array.isArray(m.devices)?m.devices:[]){const G=c(_);if(!G)continue;const S=j(G,h,v);!S||a.has(S.id)||(a.add(S.id),r.push(S))}}const B=[...Array.isArray(l.devices)?l.devices:[],...Array.isArray(l.areaDevices)?l.areaDevices:[]];for(const w of B){const m=c(w);if(!m)continue;const y=p(m.passageId),v=y?k.get(y)??null:null,_=j(m,h,v);!_||a.has(_.id)||(a.add(_.id),r.push(_))}}const f=c(d.pagination);t=f?.hasMore===!0;const A=E(f?.nextOffset);s=A>0?A:s+50}return r.sort((o,d)=>o.name.toLowerCase().localeCompare(d.name.toLowerCase())),r},async getDevicesByFeatures(e,r=["CAMERA"]){const s=(await g(K,{workspaceId:e,features:r})).devicesByFeatures;if(!s?.success)throw new Error(s?.errorMessages?.join("; ")||"Falha ao carregar cameras do workspace");return(s.payload??[]).filter(t=>!!t&&typeof t=="object").map(t=>{const i=c(t.passage),o=c(t.area);return{id:n(t.id),name:n(t.name),passageId:p(i?.id),passageName:p(i?.name),areaId:p(o?.id),areaName:p(o?.name)}}).filter(t=>!!t.id)},async getAreaHierarchyLabels(e){try{const r=await g(H,{workspaceId:e}),a={};for(const s of r.workspaceAreasWithDevices??[]){const t=s.areaHierarchy?.name?.trim();s.id&&t&&(a[s.id]=t)}return a}catch{return{}}},cameraDeviceTypeSlug:b};export{ne as c};
