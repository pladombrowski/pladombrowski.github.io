import{G as g,a1 as S,N as B,K as P}from"./index-BToaRPBw.js";import{b as x}from"./webrtc.service-CLDY5ZuX.js";const U={endpoint:B.hailaJavaGraphqlEndpoint,timeoutMs:3e4},L=`
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
`,W=`
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
        }
        clients {
          __typename
          id
        }
        devices {
          __typename
          id
          order
        }
      }
    }
  }
`,O=`
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
`,q=`
  mutation SetGeneralPreference($input: setgeneralpreference_args!) {
    __typename
    setgeneralpreference(args: $input) {
      __typename
      json
    }
  }
`,H=`
  query GetCameraGroupFlags($cameraGroupId: uuid!) {
    get_camera_group_flags_json(args: { p_camera_group_id: $cameraGroupId }) {
      json
    }
  }
`,K=`
  mutation SetCameraGroupFlags($input: jsonb!) {
    set_camera_group_flags_json(args: { p_input: $input }) {
      json
    }
  }
`,V=`
  mutation DeleteCameraGroup($input: ProdDeleteCameraGroupJsonPInput) {
    prod_delete_camera_group_json(p_input: $input) {
      json
    }
  }
`,J=`
  query GetWorkspaceAreasWithDevices($args: get_workspace_areas_with_devices_json_args!) {
    get_workspace_areas_with_devices_json(args: $args) {
      json
    }
  }
`,Y=`
  query GetWorkspaceAreaHierarchyLabels($workspaceId: UUID!) {
    workspaceAreasWithDevices(workspaceId: $workspaceId) {
      id
      areaHierarchy {
        name
      }
    }
  }
`,Q=`
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
`,R="camera";function n(e){return typeof e=="string"?e:e==null?"":String(e)}function p(e){const r=n(e).trim();return r||null}function G(e){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)?r:0}function c(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function z(e){if(e&&typeof e=="object")return e;if(typeof e=="string"&&e.trim())try{return JSON.parse(e)}catch{return null}return null}function A(e){if(Array.isArray(e))return e.length===0?null:A(e[0]);const r=c(e);return r?"json"in r?z(r.json)??r.json:r:null}function X(e){const r=Array.isArray(e.deviceFeatures)?e.deviceFeatures:[];return{order:Number(e.order??0),areaId:String(e.areaId??""),areaName:String(e.areaName??""),deviceId:String(e.deviceId??""),deviceName:String(e.deviceName??""),passageId:String(e.passageId??""),passageName:String(e.passageName??""),externalAPIKey:e.externalAPIKey??null,deviceFeatures:r.filter(a=>!!a&&typeof a=="object").map(a=>({id:String(a.id??""),name:String(a.name??""),deviceConnection:String(a.deviceConnection??"")}))}}function Z(e){if(!Array.isArray(e))return[];const r=[];for(const a of e){if(!a||typeof a!="object")continue;const s=a.json;if(Array.isArray(s))for(const t of s){if(!t||typeof t!="object")continue;const i=t,o=Array.isArray(i.devices)?i.devices:[];r.push({groupId:String(i.groupId??""),groupName:String(i.groupName??""),devices:o.filter(d=>!!d&&typeof d=="object").map(X).sort((d,u)=>d.order-u.order)})}}return r}function D(e){const r=c(e);if(!r)return null;const a=n(r.id).trim();if(!a)return null;const s=n(r.brandingName).trim(),t=n(r.firstName).trim(),i=n(r.lastName).trim(),o=p(r.email),d=s||[t,i].filter(Boolean).join(" ")||o||a;return{id:a,displayName:d,email:o}}function b(e){const r=c(e);if(!r)return null;const a=n(r.id).trim();return a?{id:a,name:n(r.name),categoryName:p(r.categoryName)}:null}function ee(e){const r=n(e.id).trim();if(!r)return null;const a=e.deletedAt??e.deleted_at;if(a!=null&&String(a).trim()!=="")return null;const s=Array.isArray(e.devices)?e.devices:[];return{id:r,name:n(e.name),groups:(Array.isArray(e.groups)?e.groups:[]).map(b).filter(t=>t!==null),clients:(Array.isArray(e.clients)?e.clients:[]).map(D).filter(t=>t!==null),devices:s.filter(t=>!!t&&typeof t=="object").map(t=>({id:n(t.id),order:G(t.order)}))}}function ae(e){const r=c(e);if(!r)return null;const a=c(r.deviceTemplateConfig)??{};return{id:n(r.id),value:n(r.value),fieldSlug:n(a.fieldSlug),fieldLabel:n(a.fieldLabel),fieldMask:n(a.fieldMask),fieldType:n(a.fieldType)}}function re(e){const r=n(e.id).trim(),a=c(e.device);if(!a)return null;const s=n(a.id).trim();if(!s)return null;const t=c(a.passage),i=c(t?.area),o=c(a.area)??i,d=c(a.deviceTemplate);return{relationId:r,id:s,order:G(e.order),name:n(a.name),deviceTemplateId:p(a.deviceTemplateId),deviceTemplateName:p(d?.name),passageId:p(t?.id),passageName:p(t?.name),areaId:p(o?.id),areaName:p(o?.name),configs:(Array.isArray(a.deviceConfigs)?a.deviceConfigs:[]).map(ae).filter(u=>u!==null)}}function se(e){const r=c(A(e));if(!r)return null;const a=c(r.payload);if(!a)return null;const s=c(a.flags)??{};return{cameraGroupId:n(a.cameraGroupId),cameraGroupName:n(a.cameraGroupName),workspaceId:n(a.workspaceId),hasSettings:a.hasSettings===!0,flags:{replaysAllowed:s.replaysAllowed===!0,timeStampClipsExportAllowed:s.timeStampClipsExportAllowed===!0},updatedAt:p(a.updatedAt)}}function te(e){const r=A(e);return c(r)}function ne(e){const r=Array.isArray(e.deviceManufacturers)?e.deviceManufacturers:[];for(const a of r){const s=c(a),t=p(s?.externalApiKeyId);if(t)return t}return null}function oe(e){const r=c(e.template)??c(e.deviceTemplate)??{},a=c(r.deviceType)??c(e.deviceType)??{};return n(a.slug).toLowerCase()}function j(e,r,a){if(oe(e)!==R)return null;const s=n(e.id).trim();if(!s)return null;const t=ne(e);let i=null;if(t)try{i=x(t)}catch{i=null}return{id:s,name:n(e.name),areaId:r.id,areaName:r.name,passageId:a?.id??null,passageName:a?.name??null,rtspUrl:i}}const de={async getCameraGroups(e,r){const a=await g(L,{senderWorkspaceId:e,recipientWorkspaceId:r});return Z(a.devicegroupsbysenderandrecipient)},async getDeviceGroupsBySender(e){const a=(await g(W,{workspaceId:e})).deviceGroupsBySender;if(!a)return[];if(!a.success){const i=a.errorMessages??[];if(i.some(o=>/could not find groups/i.test(o)))return[];throw new Error(i.join("; ")||"Falha ao carregar grupos de cameras")}const s=new Set,t=[];for(const i of a.payload??[]){const o=ee(i);!o||s.has(o.id)||(s.add(o.id),t.push(o))}return t},async getDeviceGroupById(e){const a=(await g(O,{groupId:e})).deviceGroupById;if(!a?.success||!a.payload)return null;const s=a.payload,t=n(s.id).trim();if(!t)return null;const i=new Set,o=[];for(const d of Array.isArray(s.devices)?s.devices:[]){const u=c(d);if(!u)continue;const f=re(u);if(!f)continue;const I=f.relationId||f.id;i.has(I)||(i.add(I),o.push(f))}return o.sort((d,u)=>d.order-u.order),{id:t,name:n(s.name),groups:(Array.isArray(s.groups)?s.groups:[]).map(b).filter(d=>d!==null),clients:(Array.isArray(s.clients)?s.clients:[]).map(D).filter(d=>d!==null),devices:o}},async setDeviceGroup(e){const r={name:e.name,workspaceId:e.workspaceId,devices:e.devices,clients:e.clientIds.map(o=>({id:o})),groups:e.groupIds.map(o=>({id:o}))};e.groupId&&(r.id=e.groupId);const a=await S(q,{input:{selectedid:e.groupId??null,selectedrecipientworkspace:e.workspaceId,selectedslug:"device-group",selectedpayload:r}}),s=c(A(a.setgeneralpreference));if(!s)throw new Error("Resposta invalida ao salvar grupo de cameras");if(s.success===!1){const o=Array.isArray(s.errorMessages)?s.errorMessages:[];throw new Error(n(s.message)||o.map(n).join("; ")||"Falha ao salvar grupo")}const t=o=>{if(!o)return"";for(const d of["cameraGroupId","groupId","id"]){const u=n(o[d]).trim();if(u)return u}return""};let i=t(s);if(!i){const o=c(s.payload);i=t(o),!i&&Array.isArray(s.payload)&&s.payload.length>0&&(i=t(c(s.payload[0])))}return i||e.groupId||""},async getCameraGroupFlags(e){const r=await g(H,{cameraGroupId:e});return se(r.get_camera_group_flags_json)},async setCameraGroupFlags(e,r){const a=await S(K,{input:{cameraGroupId:e,flags:{replaysAllowed:r.replaysAllowed,timeStampClipsExportAllowed:r.timeStampClipsExportAllowed}}}),s=c(A(a.set_camera_group_flags_json));if(!s)throw new Error("Resposta invalida ao salvar configuracoes do grupo");if(s.success!==!0){const t=Array.isArray(s.errorMessages)?s.errorMessages:[];throw new Error(n(s.message)||t.map(n).join("; ")||"Falha ao salvar configuracoes do grupo")}},async deleteCameraGroup(e){const r=e.cameraGroupId.trim();if(!r)throw new Error("cameraGroupId is required");const a={cameraGroupId:r},s=e.sessionWorkspaceId?.trim();s&&(a.sessionWorkspaceId=s);try{const t=await S(V,{input:a},U),i=c(A(t.prod_delete_camera_group_json));if(!i||i.ok===!1)throw new Error("Resposta invalida ao excluir grupo de cameras");const o=n(i.id).trim()||r,d=n(i.deletedAt).trim();return{id:o,deletedAt:d}}catch(t){throw new Error(P(t,"Falha ao excluir grupo de cameras"))}},async getPickableCameras(e){const r=[],a=new Set;let s=0,t=!0,i=0;for(;t&&i<40;){i+=1;const o=await g(J,{args:{p_workspace_id:e,p_offset:s,p_limit:50}},{timeoutMs:45e3}),d=te(o.get_workspace_areas_with_devices_json);if(!d)break;const u=Array.isArray(d.areas)?d.areas:[];for(const M of u){const l=c(M);if(!l)continue;const h=n(l.id).trim(),T=n(l.name);if(!h)continue;const k={id:h,name:T},F=Array.isArray(l.passages)?l.passages:[],C=new Map;for(const w of F){const m=c(w),y=n(m?.id).trim();if(!m||!y)continue;const v={id:y,name:n(m.name)};C.set(y,v);for(const _ of Array.isArray(m.devices)?m.devices:[]){const N=c(_);if(!N)continue;const E=j(N,k,v);!E||a.has(E.id)||(a.add(E.id),r.push(E))}}const $=[...Array.isArray(l.devices)?l.devices:[],...Array.isArray(l.areaDevices)?l.areaDevices:[]];for(const w of $){const m=c(w);if(!m)continue;const y=p(m.passageId),v=y?C.get(y)??null:null,_=j(m,k,v);!_||a.has(_.id)||(a.add(_.id),r.push(_))}}const f=c(d.pagination);t=f?.hasMore===!0;const I=G(f?.nextOffset);s=I>0?I:s+50}return r.sort((o,d)=>o.name.toLowerCase().localeCompare(d.name.toLowerCase())),r},async getDevicesByFeatures(e,r=["CAMERA"]){const s=(await g(Q,{workspaceId:e,features:r})).devicesByFeatures;if(!s?.success)throw new Error(s?.errorMessages?.join("; ")||"Falha ao carregar cameras do workspace");return(s.payload??[]).filter(t=>!!t&&typeof t=="object").map(t=>{const i=c(t.passage),o=c(t.area);return{id:n(t.id),name:n(t.name),passageId:p(i?.id),passageName:p(i?.name),areaId:p(o?.id),areaName:p(o?.name)}}).filter(t=>!!t.id)},async getAreaHierarchyLabels(e){try{const r=await g(Y,{workspaceId:e}),a={};for(const s of r.workspaceAreasWithDevices??[]){const t=s.areaHierarchy?.name?.trim();s.id&&t&&(a[s.id]=t)}return a}catch{return{}}},cameraDeviceTypeSlug:R};export{de as c};
