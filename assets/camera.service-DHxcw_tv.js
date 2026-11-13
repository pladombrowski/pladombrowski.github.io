import{G as g,a3 as S,N as $,K as B,aq as x}from"./index-DcyZ3_Ts.js";import{g as U}from"./general-preference.service-BQrE4jkk.js";import{b as W}from"./webrtc.service-sjK4mo96.js";const L={endpoint:$.hailaJavaGraphqlEndpoint,timeoutMs:3e4},O=`
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
`,q=`
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
`,H=`
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
`,K=`
  mutation SetGeneralPreference($input: setgeneralpreference_args!) {
    __typename
    setgeneralpreference(args: $input) {
      __typename
      json
    }
  }
`,V=`
  query GetCameraGroupFlags($cameraGroupId: uuid!) {
    get_camera_group_flags_json(args: { p_camera_group_id: $cameraGroupId }) {
      json
    }
  }
`,J=`
  mutation SetCameraGroupFlags($input: jsonb!) {
    set_camera_group_flags_json(args: { p_input: $input }) {
      json
    }
  }
`,Y=`
  mutation DeleteCameraGroup($input: ProdDeleteCameraGroupJsonPInput) {
    prod_delete_camera_group_json(p_input: $input) {
      json
    }
  }
`,Q=`
  query GetWorkspaceAreasWithDevices($args: get_workspace_areas_with_devices_json_args!) {
    get_workspace_areas_with_devices_json(args: $args) {
      json
    }
  }
`,z=`
  query GetWorkspaceAreaHierarchyLabels($workspaceId: UUID!) {
    workspaceAreasWithDevices(workspaceId: $workspaceId) {
      id
      areaHierarchy {
        name
      }
    }
  }
`,X=`
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
`,R="camera";function o(e){return typeof e=="string"?e:e==null?"":String(e)}function p(e){const r=o(e).trim();return r||null}function G(e){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)?r:0}function c(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function Z(e){if(e&&typeof e=="object")return e;if(typeof e=="string"&&e.trim())try{return JSON.parse(e)}catch{return null}return null}function A(e){if(Array.isArray(e))return e.length===0?null:A(e[0]);const r=c(e);return r?"json"in r?Z(r.json)??r.json:r:null}function ee(e){const r=Array.isArray(e.deviceFeatures)?e.deviceFeatures:[];return{order:Number(e.order??0),areaId:String(e.areaId??""),areaName:String(e.areaName??""),deviceId:String(e.deviceId??""),deviceName:String(e.deviceName??""),passageId:String(e.passageId??""),passageName:String(e.passageName??""),externalAPIKey:e.externalAPIKey??null,deviceFeatures:r.filter(a=>!!a&&typeof a=="object").map(a=>({id:String(a.id??""),name:String(a.name??""),deviceConnection:String(a.deviceConnection??"")}))}}function ae(e){if(!Array.isArray(e))return[];const r=[];for(const a of e){if(!a||typeof a!="object")continue;const s=a.json;if(Array.isArray(s))for(const t of s){if(!t||typeof t!="object")continue;const i=t,n=Array.isArray(i.devices)?i.devices:[];r.push({groupId:String(i.groupId??""),groupName:String(i.groupName??""),devices:n.filter(d=>!!d&&typeof d=="object").map(ee).sort((d,u)=>d.order-u.order)})}}return r}function D(e){const r=c(e);if(!r)return null;const a=o(r.id).trim();if(!a)return null;const s=o(r.brandingName).trim(),t=o(r.firstName).trim(),i=o(r.lastName).trim(),n=p(r.email),d=s||[t,i].filter(Boolean).join(" ")||n||a;return{id:a,displayName:d,email:n}}function T(e){const r=c(e);if(!r)return null;const a=o(r.id).trim();return a?{id:a,name:o(r.name),categoryName:p(r.categoryName)}:null}function re(e){const r=o(e.id).trim();if(!r)return null;const a=e.deletedAt??e.deleted_at;if(a!=null&&String(a).trim()!=="")return null;const s=Array.isArray(e.devices)?e.devices:[];return{id:r,name:o(e.name),groups:(Array.isArray(e.groups)?e.groups:[]).map(T).filter(t=>t!==null),clients:(Array.isArray(e.clients)?e.clients:[]).map(D).filter(t=>t!==null),devices:s.filter(t=>!!t&&typeof t=="object").map(t=>({id:o(t.id),order:G(t.order)}))}}function se(e){const r=c(e);if(!r)return null;const a=c(r.deviceTemplateConfig)??{};return{id:o(r.id),value:o(r.value),fieldSlug:o(a.fieldSlug),fieldLabel:o(a.fieldLabel),fieldMask:o(a.fieldMask),fieldType:o(a.fieldType)}}function te(e){const r=o(e.id).trim(),a=c(e.device);if(!a)return null;const s=o(a.id).trim();if(!s)return null;const t=c(a.passage),i=c(t?.area),n=c(a.area)??i,d=c(a.deviceTemplate);return{relationId:r,id:s,order:G(e.order),name:o(a.name),deviceTemplateId:p(a.deviceTemplateId),deviceTemplateName:p(d?.name),passageId:p(t?.id),passageName:p(t?.name),areaId:p(n?.id),areaName:p(n?.name),configs:(Array.isArray(a.deviceConfigs)?a.deviceConfigs:[]).map(se).filter(u=>u!==null)}}function ne(e){const r=c(A(e));if(!r)return null;const a=c(r.payload);if(!a)return null;const s=c(a.flags)??{};return{cameraGroupId:o(a.cameraGroupId),cameraGroupName:o(a.cameraGroupName),workspaceId:o(a.workspaceId),hasSettings:a.hasSettings===!0,flags:{replaysAllowed:s.replaysAllowed===!0,timeStampClipsExportAllowed:s.timeStampClipsExportAllowed===!0},updatedAt:p(a.updatedAt)}}function oe(e){const r=A(e);return c(r)}function ie(e){const r=Array.isArray(e.deviceManufacturers)?e.deviceManufacturers:[];for(const a of r){const s=c(a),t=p(s?.externalApiKeyId);if(t)return t}return null}function ce(e){const r=c(e.template)??c(e.deviceTemplate)??{},a=c(r.deviceType)??c(e.deviceType)??{};return o(a.slug).toLowerCase()}function j(e,r,a){if(ce(e)!==R)return null;const s=o(e.id).trim();if(!s)return null;const t=c(e.deviceTemplate)??c(e.template)??{},i=ie(e);let n=null;if(i)try{n=W(i)}catch{n=null}return{id:s,name:o(e.name),areaId:r.id,areaName:r.name,passageId:a?.id??null,passageName:a?.name??null,deviceTemplateId:p(e.deviceTemplateId)??p(t.id),deviceTemplateName:p(e.deviceTemplateName)??p(t.name),rtspUrl:n}}const le={async getCameraGroups(e,r){const a=await g(O,{senderWorkspaceId:e,recipientWorkspaceId:r});return ae(a.devicegroupsbysenderandrecipient)},async getDeviceGroupsBySender(e){const a=(await g(q,{workspaceId:e})).deviceGroupsBySender;if(!a)return[];if(!a.success){const i=a.errorMessages??[];if(i.some(n=>/could not find groups/i.test(n)))return[];throw new Error(i.join("; ")||"Falha ao carregar grupos de cameras")}const s=new Set,t=[];for(const i of a.payload??[]){const n=re(i);!n||s.has(n.id)||(s.add(n.id),t.push(n))}return t},async getDeviceGroupById(e){const a=(await g(H,{groupId:e})).deviceGroupById;if(!a?.success||!a.payload)return null;const s=a.payload,t=o(s.id).trim();if(!t)return null;const i=new Set,n=[];for(const d of Array.isArray(s.devices)?s.devices:[]){const u=c(d);if(!u)continue;const f=te(u);if(!f)continue;const I=f.relationId||f.id;i.has(I)||(i.add(I),n.push(f))}return n.sort((d,u)=>d.order-u.order),{id:t,name:o(s.name),groups:(Array.isArray(s.groups)?s.groups:[]).map(T).filter(d=>d!==null),clients:(Array.isArray(s.clients)?s.clients:[]).map(D).filter(d=>d!==null),devices:n}},async setDeviceGroup(e){const r={name:e.name,workspaceId:e.workspaceId,devices:e.devices,clients:e.clientIds.map(n=>({id:n})),groups:e.groupIds.map(n=>({id:n}))};if(e.groupId&&(r.id=e.groupId),x==="java")return(await U.setGeneralPreference({id:e.groupId??null,slug:"device-group",payload:r,name:"device-group",referenceOf:"workspace",idReferenceOf:e.workspaceId,sessionWorkspaceId:e.sessionWorkspaceId??e.workspaceId})).id||e.groupId||"";const a=await S(K,{input:{selectedid:e.groupId??null,selectedrecipientworkspace:e.workspaceId,selectedslug:"device-group",selectedpayload:r}}),s=c(A(a.setgeneralpreference));if(!s)throw new Error("Resposta invalida ao salvar grupo de cameras");if(s.success===!1){const n=Array.isArray(s.errorMessages)?s.errorMessages:[];throw new Error(o(s.message)||n.map(o).join("; ")||"Falha ao salvar grupo")}const t=n=>{if(!n)return"";for(const d of["cameraGroupId","groupId","id"]){const u=o(n[d]).trim();if(u)return u}return""};let i=t(s);if(!i){const n=c(s.payload);i=t(n),!i&&Array.isArray(s.payload)&&s.payload.length>0&&(i=t(c(s.payload[0])))}return i||e.groupId||""},async getCameraGroupFlags(e){const r=await g(V,{cameraGroupId:e});return ne(r.get_camera_group_flags_json)},async setCameraGroupFlags(e,r){const a=await S(J,{input:{cameraGroupId:e,flags:{replaysAllowed:r.replaysAllowed,timeStampClipsExportAllowed:r.timeStampClipsExportAllowed}}}),s=c(A(a.set_camera_group_flags_json));if(!s)throw new Error("Resposta invalida ao salvar configuracoes do grupo");if(s.success!==!0){const t=Array.isArray(s.errorMessages)?s.errorMessages:[];throw new Error(o(s.message)||t.map(o).join("; ")||"Falha ao salvar configuracoes do grupo")}},async deleteCameraGroup(e){const r=e.cameraGroupId.trim();if(!r)throw new Error("cameraGroupId is required");const a={cameraGroupId:r},s=e.sessionWorkspaceId?.trim();s&&(a.sessionWorkspaceId=s);try{const t=await S(Y,{input:a},L),i=c(A(t.prod_delete_camera_group_json));if(!i||i.ok===!1)throw new Error("Resposta invalida ao excluir grupo de cameras");const n=o(i.id).trim()||r,d=o(i.deletedAt).trim();return{id:n,deletedAt:d}}catch(t){throw new Error(B(t,"Falha ao excluir grupo de cameras"))}},async getPickableCameras(e){const r=[],a=new Set;let s=0,t=!0,i=0;for(;t&&i<40;){i+=1;const n=await g(Q,{args:{p_workspace_id:e,p_offset:s,p_limit:50}},{timeoutMs:45e3}),d=oe(n.get_workspace_areas_with_devices_json);if(!d)break;const u=Array.isArray(d.areas)?d.areas:[];for(const b of u){const l=c(b);if(!l)continue;const k=o(l.id).trim(),M=o(l.name);if(!k)continue;const h={id:k,name:M},F=Array.isArray(l.passages)?l.passages:[],N=new Map;for(const E of F){const m=c(E),y=o(m?.id).trim();if(!m||!y)continue;const v={id:y,name:o(m.name)};N.set(y,v);for(const _ of Array.isArray(m.devices)?m.devices:[]){const C=c(_);if(!C)continue;const w=j(C,h,v);!w||a.has(w.id)||(a.add(w.id),r.push(w))}}const P=[...Array.isArray(l.devices)?l.devices:[],...Array.isArray(l.areaDevices)?l.areaDevices:[]];for(const E of P){const m=c(E);if(!m)continue;const y=p(m.passageId),v=y?N.get(y)??null:null,_=j(m,h,v);!_||a.has(_.id)||(a.add(_.id),r.push(_))}}const f=c(d.pagination);t=f?.hasMore===!0;const I=G(f?.nextOffset);s=I>0?I:s+50}return r.sort((n,d)=>n.name.toLowerCase().localeCompare(d.name.toLowerCase())),r},async getDevicesByFeatures(e,r=["CAMERA"]){const s=(await g(X,{workspaceId:e,features:r})).devicesByFeatures;if(!s?.success)throw new Error(s?.errorMessages?.join("; ")||"Falha ao carregar cameras do workspace");return(s.payload??[]).filter(t=>!!t&&typeof t=="object").map(t=>{const i=c(t.passage),n=c(t.area);return{id:o(t.id),name:o(t.name),passageId:p(i?.id),passageName:p(i?.name),areaId:p(n?.id),areaName:p(n?.name)}}).filter(t=>!!t.id)},async getAreaHierarchyLabels(e){try{const r=await g(z,{workspaceId:e}),a={};for(const s of r.workspaceAreasWithDevices??[]){const t=s.areaHierarchy?.name?.trim();s.id&&t&&(a[s.id]=t)}return a}catch{return{}}},cameraDeviceTypeSlug:R};export{le as c};
