import{G as g,a4 as S,N as B,K as P}from"./index-C1IOeaFa.js";import{b as x}from"./webrtc.service-BDDfrECD.js";const U={endpoint:B.hailaJavaGraphqlEndpoint,timeoutMs:3e4},L=`
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
`,R="camera";function o(e){return typeof e=="string"?e:e==null?"":String(e)}function p(e){const r=o(e).trim();return r||null}function G(e){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)?r:0}function c(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function z(e){if(e&&typeof e=="object")return e;if(typeof e=="string"&&e.trim())try{return JSON.parse(e)}catch{return null}return null}function A(e){if(Array.isArray(e))return e.length===0?null:A(e[0]);const r=c(e);return r?"json"in r?z(r.json)??r.json:r:null}function X(e){const r=Array.isArray(e.deviceFeatures)?e.deviceFeatures:[];return{order:Number(e.order??0),areaId:String(e.areaId??""),areaName:String(e.areaName??""),deviceId:String(e.deviceId??""),deviceName:String(e.deviceName??""),passageId:String(e.passageId??""),passageName:String(e.passageName??""),externalAPIKey:e.externalAPIKey??null,deviceFeatures:r.filter(a=>!!a&&typeof a=="object").map(a=>({id:String(a.id??""),name:String(a.name??""),deviceConnection:String(a.deviceConnection??"")}))}}function Z(e){if(!Array.isArray(e))return[];const r=[];for(const a of e){if(!a||typeof a!="object")continue;const t=a.json;if(Array.isArray(t))for(const s of t){if(!s||typeof s!="object")continue;const i=s,n=Array.isArray(i.devices)?i.devices:[];r.push({groupId:String(i.groupId??""),groupName:String(i.groupName??""),devices:n.filter(d=>!!d&&typeof d=="object").map(X).sort((d,u)=>d.order-u.order)})}}return r}function D(e){const r=c(e);if(!r)return null;const a=o(r.id).trim();if(!a)return null;const t=o(r.brandingName).trim(),s=o(r.firstName).trim(),i=o(r.lastName).trim(),n=p(r.email),d=t||[s,i].filter(Boolean).join(" ")||n||a;return{id:a,displayName:d,email:n}}function T(e){const r=c(e);if(!r)return null;const a=o(r.id).trim();return a?{id:a,name:o(r.name),categoryName:p(r.categoryName)}:null}function ee(e){const r=o(e.id).trim();if(!r)return null;const a=e.deletedAt??e.deleted_at;if(a!=null&&String(a).trim()!=="")return null;const t=Array.isArray(e.devices)?e.devices:[];return{id:r,name:o(e.name),groups:(Array.isArray(e.groups)?e.groups:[]).map(T).filter(s=>s!==null),clients:(Array.isArray(e.clients)?e.clients:[]).map(D).filter(s=>s!==null),devices:t.filter(s=>!!s&&typeof s=="object").map(s=>({id:o(s.id),order:G(s.order)}))}}function ae(e){const r=c(e);if(!r)return null;const a=c(r.deviceTemplateConfig)??{};return{id:o(r.id),value:o(r.value),fieldSlug:o(a.fieldSlug),fieldLabel:o(a.fieldLabel),fieldMask:o(a.fieldMask),fieldType:o(a.fieldType)}}function re(e){const r=o(e.id).trim(),a=c(e.device);if(!a)return null;const t=o(a.id).trim();if(!t)return null;const s=c(a.passage),i=c(s?.area),n=c(a.area)??i,d=c(a.deviceTemplate);return{relationId:r,id:t,order:G(e.order),name:o(a.name),deviceTemplateId:p(a.deviceTemplateId),deviceTemplateName:p(d?.name),passageId:p(s?.id),passageName:p(s?.name),areaId:p(n?.id),areaName:p(n?.name),configs:(Array.isArray(a.deviceConfigs)?a.deviceConfigs:[]).map(ae).filter(u=>u!==null)}}function te(e){const r=c(A(e));if(!r)return null;const a=c(r.payload);if(!a)return null;const t=c(a.flags)??{};return{cameraGroupId:o(a.cameraGroupId),cameraGroupName:o(a.cameraGroupName),workspaceId:o(a.workspaceId),hasSettings:a.hasSettings===!0,flags:{replaysAllowed:t.replaysAllowed===!0,timeStampClipsExportAllowed:t.timeStampClipsExportAllowed===!0},updatedAt:p(a.updatedAt)}}function se(e){const r=A(e);return c(r)}function ne(e){const r=Array.isArray(e.deviceManufacturers)?e.deviceManufacturers:[];for(const a of r){const t=c(a),s=p(t?.externalApiKeyId);if(s)return s}return null}function oe(e){const r=c(e.template)??c(e.deviceTemplate)??{},a=c(r.deviceType)??c(e.deviceType)??{};return o(a.slug).toLowerCase()}function j(e,r,a){if(oe(e)!==R)return null;const t=o(e.id).trim();if(!t)return null;const s=c(e.deviceTemplate)??c(e.template)??{},i=ne(e);let n=null;if(i)try{n=x(i)}catch{n=null}return{id:t,name:o(e.name),areaId:r.id,areaName:r.name,passageId:a?.id??null,passageName:a?.name??null,deviceTemplateId:p(e.deviceTemplateId)??p(s.id),deviceTemplateName:p(e.deviceTemplateName)??p(s.name),rtspUrl:n}}const de={async getCameraGroups(e,r){const a=await g(L,{senderWorkspaceId:e,recipientWorkspaceId:r});return Z(a.devicegroupsbysenderandrecipient)},async getDeviceGroupsBySender(e){const a=(await g(W,{workspaceId:e})).deviceGroupsBySender;if(!a)return[];if(!a.success){const i=a.errorMessages??[];if(i.some(n=>/could not find groups/i.test(n)))return[];throw new Error(i.join("; ")||"Falha ao carregar grupos de cameras")}const t=new Set,s=[];for(const i of a.payload??[]){const n=ee(i);!n||t.has(n.id)||(t.add(n.id),s.push(n))}return s},async getDeviceGroupById(e){const a=(await g(O,{groupId:e})).deviceGroupById;if(!a?.success||!a.payload)return null;const t=a.payload,s=o(t.id).trim();if(!s)return null;const i=new Set,n=[];for(const d of Array.isArray(t.devices)?t.devices:[]){const u=c(d);if(!u)continue;const f=re(u);if(!f)continue;const I=f.relationId||f.id;i.has(I)||(i.add(I),n.push(f))}return n.sort((d,u)=>d.order-u.order),{id:s,name:o(t.name),groups:(Array.isArray(t.groups)?t.groups:[]).map(T).filter(d=>d!==null),clients:(Array.isArray(t.clients)?t.clients:[]).map(D).filter(d=>d!==null),devices:n}},async setDeviceGroup(e){const r={name:e.name,workspaceId:e.workspaceId,devices:e.devices,clients:e.clientIds.map(n=>({id:n})),groups:e.groupIds.map(n=>({id:n}))};e.groupId&&(r.id=e.groupId);const a=await S(q,{input:{selectedid:e.groupId??null,selectedrecipientworkspace:e.workspaceId,selectedslug:"device-group",selectedpayload:r}}),t=c(A(a.setgeneralpreference));if(!t)throw new Error("Resposta invalida ao salvar grupo de cameras");if(t.success===!1){const n=Array.isArray(t.errorMessages)?t.errorMessages:[];throw new Error(o(t.message)||n.map(o).join("; ")||"Falha ao salvar grupo")}const s=n=>{if(!n)return"";for(const d of["cameraGroupId","groupId","id"]){const u=o(n[d]).trim();if(u)return u}return""};let i=s(t);if(!i){const n=c(t.payload);i=s(n),!i&&Array.isArray(t.payload)&&t.payload.length>0&&(i=s(c(t.payload[0])))}return i||e.groupId||""},async getCameraGroupFlags(e){const r=await g(H,{cameraGroupId:e});return te(r.get_camera_group_flags_json)},async setCameraGroupFlags(e,r){const a=await S(K,{input:{cameraGroupId:e,flags:{replaysAllowed:r.replaysAllowed,timeStampClipsExportAllowed:r.timeStampClipsExportAllowed}}}),t=c(A(a.set_camera_group_flags_json));if(!t)throw new Error("Resposta invalida ao salvar configuracoes do grupo");if(t.success!==!0){const s=Array.isArray(t.errorMessages)?t.errorMessages:[];throw new Error(o(t.message)||s.map(o).join("; ")||"Falha ao salvar configuracoes do grupo")}},async deleteCameraGroup(e){const r=e.cameraGroupId.trim();if(!r)throw new Error("cameraGroupId is required");const a={cameraGroupId:r},t=e.sessionWorkspaceId?.trim();t&&(a.sessionWorkspaceId=t);try{const s=await S(V,{input:a},U),i=c(A(s.prod_delete_camera_group_json));if(!i||i.ok===!1)throw new Error("Resposta invalida ao excluir grupo de cameras");const n=o(i.id).trim()||r,d=o(i.deletedAt).trim();return{id:n,deletedAt:d}}catch(s){throw new Error(P(s,"Falha ao excluir grupo de cameras"))}},async getPickableCameras(e){const r=[],a=new Set;let t=0,s=!0,i=0;for(;s&&i<40;){i+=1;const n=await g(J,{args:{p_workspace_id:e,p_offset:t,p_limit:50}},{timeoutMs:45e3}),d=se(n.get_workspace_areas_with_devices_json);if(!d)break;const u=Array.isArray(d.areas)?d.areas:[];for(const b of u){const l=c(b);if(!l)continue;const h=o(l.id).trim(),M=o(l.name);if(!h)continue;const k={id:h,name:M},F=Array.isArray(l.passages)?l.passages:[],N=new Map;for(const w of F){const m=c(w),y=o(m?.id).trim();if(!m||!y)continue;const v={id:y,name:o(m.name)};N.set(y,v);for(const _ of Array.isArray(m.devices)?m.devices:[]){const C=c(_);if(!C)continue;const E=j(C,k,v);!E||a.has(E.id)||(a.add(E.id),r.push(E))}}const $=[...Array.isArray(l.devices)?l.devices:[],...Array.isArray(l.areaDevices)?l.areaDevices:[]];for(const w of $){const m=c(w);if(!m)continue;const y=p(m.passageId),v=y?N.get(y)??null:null,_=j(m,k,v);!_||a.has(_.id)||(a.add(_.id),r.push(_))}}const f=c(d.pagination);s=f?.hasMore===!0;const I=G(f?.nextOffset);t=I>0?I:t+50}return r.sort((n,d)=>n.name.toLowerCase().localeCompare(d.name.toLowerCase())),r},async getDevicesByFeatures(e,r=["CAMERA"]){const t=(await g(Q,{workspaceId:e,features:r})).devicesByFeatures;if(!t?.success)throw new Error(t?.errorMessages?.join("; ")||"Falha ao carregar cameras do workspace");return(t.payload??[]).filter(s=>!!s&&typeof s=="object").map(s=>{const i=c(s.passage),n=c(s.area);return{id:o(s.id),name:o(s.name),passageId:p(i?.id),passageName:p(i?.name),areaId:p(n?.id),areaName:p(n?.name)}}).filter(s=>!!s.id)},async getAreaHierarchyLabels(e){try{const r=await g(Y,{workspaceId:e}),a={};for(const t of r.workspaceAreasWithDevices??[]){const s=t.areaHierarchy?.name?.trim();t.id&&s&&(a[t.id]=s)}return a}catch{return{}}},cameraDeviceTypeSlug:R};export{de as c};
