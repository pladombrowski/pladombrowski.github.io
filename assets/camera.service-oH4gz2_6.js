import{S as g,T as b,ae as S,$ as L,ay as O,af as k,az as G}from"./index-9x0IsoWX.js";import{g as q}from"./general-preference.service-DQ8rZkCK.js";import{b as J}from"./webrtc.service-xGP-IyjB.js";const h={endpoint:b.hailaJavaGraphqlEndpoint,timeoutMs:3e4},V=`
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
`,H=`
  query DeviceGroupsQuery($senderWorkspaceId: String!, $recipientWorkspaceId: String!) {
    prod_devicegroupsbysenderandrecipient(
      senderworkspaceid: $senderWorkspaceId
      recipientworkspaceid: $recipientWorkspaceId
    ) {
      json
    }
  }
`,K=`
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
`,Y=`
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
`,Q=`
  mutation SetGeneralPreference($input: setgeneralpreference_args!) {
    __typename
    setgeneralpreference(args: $input) {
      __typename
      json
    }
  }
`,z=`
  mutation SetGeneralPreference(
    $selectedid: String
    $selectedslug: String!
    $selectedpayload: Any
    $selectedrecipientworkspace: String!
  ) {
    prod_setgeneralpreference(
      selectedid: $selectedid
      selectedslug: $selectedslug
      selectedpayload: $selectedpayload
      selectedrecipientworkspace: $selectedrecipientworkspace
    ) {
      json
    }
  }
`,X=`
  query GetCameraGroupFlags($cameraGroupId: uuid!) {
    get_camera_group_flags_json(args: { p_camera_group_id: $cameraGroupId }) {
      json
    }
  }
`,Z=`
  mutation SetCameraGroupFlags($input: jsonb!) {
    set_camera_group_flags_json(args: { p_input: $input }) {
      json
    }
  }
`,ee=`
  mutation DeleteCameraGroup($input: ProdDeleteCameraGroupJsonPInput) {
    prod_delete_camera_group_json(p_input: $input) {
      json
    }
  }
`,ae=`
  query GetWorkspaceAreasWithDevices($args: get_workspace_areas_with_devices_json_args!) {
    get_workspace_areas_with_devices_json(args: $args) {
      json
    }
  }
`,re=`
  query GetWorkspaceAreasWithDevices(
    $p_workspace_id: String!
    $p_offset: Int!
    $p_limit: Int!
  ) {
    prod_get_workspace_areas_with_devices_json(
      p_workspace_id: $p_workspace_id
      p_offset: $p_offset
      p_limit: $p_limit
    ) {
      json
    }
  }
`,se=`
  query GetWorkspaceAreaHierarchyLabels($workspaceId: UUID!) {
    workspaceAreasWithDevices(workspaceId: $workspaceId) {
      id
      areaHierarchy {
        name
      }
    }
  }
`,te=`
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
`,M="camera";function n(e){return typeof e=="string"?e:e==null?"":String(e)}function p(e){const r=n(e).trim();return r||null}function j(e){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)?r:0}function d(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function ne(e){if(e&&typeof e=="object")return e;if(typeof e=="string"&&e.trim())try{return JSON.parse(e)}catch{return null}return null}function A(e){if(Array.isArray(e))return e.length===0?null:A(e[0]);const r=d(e);return r?"json"in r?ne(r.json)??r.json:r:null}function oe(e){const r=Array.isArray(e.deviceFeatures)?e.deviceFeatures:[];return{order:Number(e.order??0),areaId:String(e.areaId??""),areaName:String(e.areaName??""),deviceId:String(e.deviceId??""),deviceName:String(e.deviceName??""),passageId:String(e.passageId??""),passageName:String(e.passageName??""),externalAPIKey:e.externalAPIKey??null,deviceFeatures:r.filter(a=>!!a&&typeof a=="object").map(a=>({id:String(a.id??""),name:String(a.name??""),deviceConnection:String(a.deviceConnection??"")}))}}function ie(e){if(!Array.isArray(e))return[];const r=[];for(const a of e){if(!a||typeof a!="object")continue;const t=a.json;if(Array.isArray(t))for(const s of t){if(!s||typeof s!="object")continue;const c=s,o=Array.isArray(c.devices)?c.devices:[];r.push({groupId:String(c.groupId??""),groupName:String(c.groupName??""),devices:o.filter(i=>!!i&&typeof i=="object").map(oe).sort((i,u)=>i.order-u.order)})}}return r}function P(e){const r=d(e);if(!r)return null;const a=n(r.id).trim();if(!a)return null;const t=n(r.brandingName).trim(),s=n(r.firstName).trim(),c=n(r.lastName).trim(),o=p(r.email),i=t||[s,c].filter(Boolean).join(" ")||o||a;return{id:a,displayName:i,email:o}}function W(e){const r=d(e);if(!r)return null;const a=n(r.id).trim();return a?{id:a,name:n(r.name),categoryName:p(r.categoryName)}:null}function ce(e){const r=n(e.id).trim();if(!r)return null;const a=e.deletedAt??e.deleted_at;if(a!=null&&String(a).trim()!=="")return null;const t=Array.isArray(e.devices)?e.devices:[];return{id:r,name:n(e.name),groups:(Array.isArray(e.groups)?e.groups:[]).map(W).filter(s=>s!==null),clients:(Array.isArray(e.clients)?e.clients:[]).map(P).filter(s=>s!==null),devices:t.filter(s=>!!s&&typeof s=="object").map(s=>({id:n(s.id),order:j(s.order)}))}}function de(e){const r=d(e);if(!r)return null;const a=d(r.deviceTemplateConfig)??{};return{id:n(r.id),value:n(r.value),fieldSlug:n(a.fieldSlug),fieldLabel:n(a.fieldLabel),fieldMask:n(a.fieldMask),fieldType:n(a.fieldType)}}function pe(e){const r=n(e.id).trim(),a=d(e.device);if(!a)return null;const t=n(a.id).trim();if(!t)return null;const s=d(a.passage),c=d(s?.area),o=d(a.area)??c,i=d(a.deviceTemplate);return{relationId:r,id:t,order:j(e.order),name:n(a.name),deviceTemplateId:p(a.deviceTemplateId),deviceTemplateName:p(i?.name),passageId:p(s?.id),passageName:p(s?.name),areaId:p(o?.id),areaName:p(o?.name),configs:(Array.isArray(a.deviceConfigs)?a.deviceConfigs:[]).map(de).filter(u=>u!==null)}}function ue(e){const r=d(A(e));if(!r)return null;const a=d(r.payload);if(!a)return null;const t=d(a.flags)??{};return{cameraGroupId:n(a.cameraGroupId),cameraGroupName:n(a.cameraGroupName),workspaceId:n(a.workspaceId),hasSettings:a.hasSettings===!0,flags:{replaysAllowed:t.replaysAllowed===!0,timeStampClipsExportAllowed:t.timeStampClipsExportAllowed===!0},updatedAt:p(a.updatedAt)}}function le(e){const r=A(e);return d(r)}function me(e){const r=Array.isArray(e.deviceManufacturers)?e.deviceManufacturers:[];for(const a of r){const t=d(a),s=p(t?.externalApiKeyId);if(s)return s}return null}function fe(e){const r=d(e.template)??d(e.deviceTemplate)??{},a=d(r.deviceType)??d(e.deviceType)??{};return n(a.slug).toLowerCase()}function T(e,r,a){if(fe(e)!==M)return null;const t=n(e.id).trim();if(!t)return null;const s=d(e.deviceTemplate)??d(e.template)??{},c=me(e);let o=null;if(c)try{o=J(c)}catch{o=null}return{id:t,name:n(e.name),areaId:r.id,areaName:r.name,passageId:a?.id??null,passageName:a?.name??null,deviceTemplateId:p(e.deviceTemplateId)??p(s.id),deviceTemplateName:p(e.deviceTemplateName)??p(s.name),rtspUrl:o}}const Ae={async getCameraGroups(e,r){const a=k(G)==="java",t=await g(a?H:V,{senderWorkspaceId:e,recipientWorkspaceId:r},a?h:void 0),s=a?t.prod_devicegroupsbysenderandrecipient:t.devicegroupsbysenderandrecipient;return ie(s)},async getDeviceGroupsBySender(e){const a=(await g(K,{workspaceId:e})).deviceGroupsBySender;if(!a)return[];if(!a.success){const c=a.errorMessages??[];if(c.some(o=>/could not find groups/i.test(o)))return[];throw new Error(c.join("; ")||"Falha ao carregar grupos de cameras")}const t=new Set,s=[];for(const c of a.payload??[]){const o=ce(c);!o||t.has(o.id)||(t.add(o.id),s.push(o))}return s},async getDeviceGroupById(e){const a=(await g(Y,{groupId:e})).deviceGroupById;if(!a?.success||!a.payload)return null;const t=a.payload,s=n(t.id).trim();if(!s)return null;const c=new Set,o=[];for(const i of Array.isArray(t.devices)?t.devices:[]){const u=d(i);if(!u)continue;const l=pe(u);if(!l)continue;const I=l.relationId||l.id;c.has(I)||(c.add(I),o.push(l))}return o.sort((i,u)=>i.order-u.order),{id:s,name:n(t.name),groups:(Array.isArray(t.groups)?t.groups:[]).map(W).filter(i=>i!==null),clients:(Array.isArray(t.clients)?t.clients:[]).map(P).filter(i=>i!==null),devices:o}},async setDeviceGroup(e){const r={name:e.name,workspaceId:e.workspaceId,devices:e.devices,clients:e.clientIds.map(i=>({id:i})),groups:e.groupIds.map(i=>({id:i}))};if(e.groupId&&(r.id=e.groupId),O==="java")return(await q.setGeneralPreference({id:e.groupId??null,slug:"device-group",payload:r,name:"device-group",referenceOf:"workspace",idReferenceOf:e.workspaceId,sessionWorkspaceId:e.sessionWorkspaceId??e.workspaceId})).id||e.groupId||"";const a=k(G)==="java",t=await S(a?z:Q,a?{selectedid:e.groupId??null,selectedslug:"device-group",selectedpayload:r,selectedrecipientworkspace:e.workspaceId}:{input:{selectedid:e.groupId??null,selectedrecipientworkspace:e.workspaceId,selectedslug:"device-group",selectedpayload:r}},a?h:void 0),s=d(A(a?t.prod_setgeneralpreference:t.setgeneralpreference));if(!s)throw new Error("Resposta invalida ao salvar grupo de cameras");if(s.success===!1){const i=Array.isArray(s.errorMessages)?s.errorMessages:[];throw new Error(n(s.message)||i.map(n).join("; ")||"Falha ao salvar grupo")}const c=i=>{if(!i)return"";for(const u of["cameraGroupId","groupId","id"]){const l=n(i[u]).trim();if(l)return l}return""};let o=c(s);if(!o){const i=d(s.payload);o=c(i),!o&&Array.isArray(s.payload)&&s.payload.length>0&&(o=c(d(s.payload[0])))}return o||e.groupId||""},async getCameraGroupFlags(e){const r=await g(X,{cameraGroupId:e});return ue(r.get_camera_group_flags_json)},async setCameraGroupFlags(e,r){const a=await S(Z,{input:{cameraGroupId:e,flags:{replaysAllowed:r.replaysAllowed,timeStampClipsExportAllowed:r.timeStampClipsExportAllowed}}}),t=d(A(a.set_camera_group_flags_json));if(!t)throw new Error("Resposta invalida ao salvar configuracoes do grupo");if(t.success!==!0){const s=Array.isArray(t.errorMessages)?t.errorMessages:[];throw new Error(n(t.message)||s.map(n).join("; ")||"Falha ao salvar configuracoes do grupo")}},async deleteCameraGroup(e){const r=e.cameraGroupId.trim();if(!r)throw new Error("cameraGroupId is required");const a={cameraGroupId:r},t=e.sessionWorkspaceId?.trim();t&&(a.sessionWorkspaceId=t);try{const s=await S(ee,{input:a},h),c=d(A(s.prod_delete_camera_group_json));if(!c||c.ok===!1)throw new Error("Resposta invalida ao excluir grupo de cameras");const o=n(c.id).trim()||r,i=n(c.deletedAt).trim();return{id:o,deletedAt:i}}catch(s){throw new Error(L(s,"Falha ao excluir grupo de cameras"))}},async getPickableCameras(e){const r=k(G)==="java",a=[],t=new Set;let s=0,c=!0,o=0;for(;c&&o<40;){o+=1;const i=await g(r?re:ae,r?{p_workspace_id:e,p_offset:s,p_limit:50}:{args:{p_workspace_id:e,p_offset:s,p_limit:50}},r?{endpoint:b.hailaJavaGraphqlEndpoint,timeoutMs:45e3}:{timeoutMs:45e3}),u=le(r?i.prod_get_workspace_areas_with_devices_json:i.get_workspace_areas_with_devices_json);if(!u)break;const l=Array.isArray(u.areas)?u.areas:[];for(const F of l){const m=d(F);if(!m)continue;const N=n(m.id).trim(),B=n(m.name);if(!N)continue;const $={id:N,name:B},U=Array.isArray(m.passages)?m.passages:[],R=new Map;for(const E of U){const f=d(E),y=n(f?.id).trim();if(!f||!y)continue;const v={id:y,name:n(f.name)};R.set(y,v);for(const _ of Array.isArray(f.devices)?f.devices:[]){const D=d(_);if(!D)continue;const w=T(D,$,v);!w||t.has(w.id)||(t.add(w.id),a.push(w))}}const x=[...Array.isArray(m.devices)?m.devices:[],...Array.isArray(m.areaDevices)?m.areaDevices:[]];for(const E of x){const f=d(E);if(!f)continue;const y=p(f.passageId),v=y?R.get(y)??null:null,_=T(f,$,v);!_||t.has(_.id)||(t.add(_.id),a.push(_))}}const I=d(u.pagination);c=I?.hasMore===!0;const C=j(I?.nextOffset);s=C>0?C:s+50}return a.sort((i,u)=>i.name.toLowerCase().localeCompare(u.name.toLowerCase())),a},async getDevicesByFeatures(e,r=["CAMERA"]){const t=(await g(te,{workspaceId:e,features:r})).devicesByFeatures;if(!t?.success)throw new Error(t?.errorMessages?.join("; ")||"Falha ao carregar cameras do workspace");return(t.payload??[]).filter(s=>!!s&&typeof s=="object").map(s=>{const c=d(s.passage),o=d(s.area);return{id:n(s.id),name:n(s.name),passageId:p(c?.id),passageName:p(c?.name),areaId:p(o?.id),areaName:p(o?.name)}}).filter(s=>!!s.id)},async getAreaHierarchyLabels(e){try{const r=await g(se,{workspaceId:e}),a={};for(const t of r.workspaceAreasWithDevices??[]){const s=t.areaHierarchy?.name?.trim();t.id&&s&&(a[t.id]=s)}return a}catch{return{}}},cameraDeviceTypeSlug:M};export{Ae as c};
