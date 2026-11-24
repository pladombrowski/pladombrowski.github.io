import{at as c,S as d}from"./index-BR6zFs2o.js";import{s as C}from"./smart-auth.service-De4EbWna.js";import{C as N}from"./client-group-OhgqCFvs.js";function m(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:null}function g(e){return Array.isArray(e)?e:[]}function l(e){return typeof e=="string"?e:""}function k(e){const n=m(e);return n?{id:l(n.id),name:l(n.name),permissionFlag:n.permissionFlag===!0}:null}function E(e){const n=m(e);return n?{id:l(n.id),name:l(n.name),permissions:g(n.permissions).map(k).filter(r=>r!==null)}:null}function _(e){const n=m(e);if(!n)return null;const r={id:l(n.id),name:l(n.name),passages:g(n.passages).map(E).filter(i=>i!==null),permissions:g(n.permissions).map(k).filter(i=>i!==null)};return r.id!==""||r.name!==""||r.passages.length>0?r:null}function h(e){if(e==null)return[];if(Array.isArray(e))return e.map(_).filter(r=>r!==null);const n=m(e);if(n){if(Array.isArray(n.areas))return n.areas.map(_).filter(r=>r!==null);if(n.area){const r=_(n.area);return r?[r]:[]}}return[]}const A=`
  query GetClassificationGroupData($workspaceId: UUID!) {
    __typename
    clientGroupCategories(workspaceId: $workspaceId) {
      __typename
      success
      payload {
        __typename
        categoryId: id
        categoryName: name
      }
      errorMessages
    }
    clientGroupTypes {
      __typename
      success
      payload {
        __typename
        id
        label
        slug
      }
      errorMessages
    }
  }
`,D=`
  mutation SetClientGroupCategory($input: SetClientGroupCategoryInput!) {
    __typename
    setClientGroupCategory(input: $input) {
      __typename
      success
      errorMessages
    }
  }
`,f=`
  mutation SetClientGroup($input: SetClientGroupInput!) {
    __typename
    setClientGroup(input: $input) {
      __typename
      success
      errorMessages
      payload {
        __typename
        id
      }
    }
  }
`,S=`
  query FetchDependents(
    $parentWorkspaceLinkId: UUID!
    $hierarchyType: String!
    $limit: Int!
    $offset: Int!
    $search: String!
  ) {
    __typename
    workspaceLinkDependentsByHierarchyType(
      input: {
        parentWorkspaceLinkId: $parentWorkspaceLinkId
        hierarchyType: $hierarchyType
        limit: $limit
        offset: $offset
        search: $search
      }
    ) {
      __typename
      success
      errorMessages
      payload {
        __typename
        id
        status
        clientPhotoUrl
        workspaceClient {
          __typename
          id
          type
          firstName
          lastName
          brandingName
          email
          legalName
          phone
        }
        permissionWorkspaces {
          __typename
          permissionFlag
          permission {
            __typename
            id
            name
          }
        }
      }
    }
  }
`,$=`
  query GetClientGroupDependentsCount($p_group_id: uuid!) {
    get_client_group_dependents_count_json(args: { p_group_id: $p_group_id }) {
      json
    }
  }
`,L=`
  mutation AddClientGroupDependents($groupId: UUID!, $dependents: [UUID!]!) {
    __typename
    addClientGroupDependents(
      input: { clientGroupId: $groupId, dependentWorkspaceClientIds: $dependents }
    ) {
      __typename
      success
      errorMessages
    }
  }
`,T=`
  mutation AddClientGroupDependentPermission(
    $clientGroupDependentLinkId: UUID!
    $groupId: UUID!
    $permissionName: String!
  ) {
    __typename
    addClientGroupDependentPermission(
      input: {
        clientGroupDependentLinkId: $clientGroupDependentLinkId
        groupId: $groupId
        permissionName: $permissionName
      }
    ) {
      __typename
      success
      errorMessages
    }
  }
`,P=`
  query GetExtensionLinesOfAGroup($p_group_id: uuid!) {
    getExtensionLinesOfAGroup(args: { p_group_id: $p_group_id }) {
      json
    }
  }
`,w=`
  query GetDeviceGroupsOfAGroup($p_group_id: uuid!) {
    getDeviceGroupsOfAGroup(args: { p_group_id: $p_group_id }) {
      json
    }
  }
`,j=`
  query GetWorkspaceLinkAreaPassagePermissions($p_user_id: uuid, $p_workspace_link_id: uuid!) {
    get_workspace_link_area_passage_permissions_json(
      args: { p_user_id: $p_user_id, p_workspace_link_id: $p_workspace_link_id }
    ) {
      json
    }
  }
`,R=`
  mutation CreateAreaShare($p_area_id: uuid!, $p_workspace_link_id: uuid!, $p_user_id: uuid!) {
    create_area_share(
      args: {
        p_area_id: $p_area_id
        p_workspace_link_id: $p_workspace_link_id
        p_user_id: $p_user_id
      }
    ) {
      json
    }
  }
`,O=`
  mutation CancelAreaSharing($userId: uuid!, $linkId: uuid!) {
    cancelareasharingjson(args: { selecteduserid: $userId, selectedworkspacelinkid: $linkId }) {
      json
    }
  }
`;function s(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function y(e){if(Array.isArray(e))return e;if(typeof e=="string"&&e.trim())try{const n=JSON.parse(e);return Array.isArray(n)?n:[]}catch{return[]}return[]}function U(e){if(e&&typeof e=="object")return e;if(typeof e=="string"&&e.trim())try{return JSON.parse(e)}catch{return null}return null}function u(e){if(Array.isArray(e))return e.length===0?null:u(e[0]);const n=s(e);return n?"json"in n?U(n.json)??n.json:n:null}function a(e){return typeof e=="string"?e:typeof e=="number"?String(e):null}function b(e){if(typeof e=="number"&&Number.isFinite(e))return e;const n=typeof e=="string"?Number(e):NaN;return Number.isFinite(n)?n:null}function M(e){const n=s(e);if(!n)return null;const r=String(n.id??"").trim();return r?{id:r,label:String(n.label??""),slug:String(n.slug??"")}:null}function I(e){const n=s(e);if(!n)return null;const r=String(n.id??"").trim();return r?{id:r,type:a(n.type),firstName:a(n.firstName),lastName:a(n.lastName),brandingName:a(n.brandingName),legalName:a(n.legalName),email:a(n.email),phone:a(n.phone)}:null}function F(e){const n=s(e);if(!n)return null;const r=s(n.permission),t=String(r?.name??"").trim();return{flag:n.permissionFlag===!0,name:t}}function W(e){const n=String(e.id??"").trim();return n?{id:n,status:String(e.status??"PENDING"),clientPhotoUrl:a(e.clientPhotoUrl),workspaceClient:I(e.workspaceClient),recipientWorkspace:I(e.recipientWorkspace),permissions:y(e.permissionWorkspaces).map(F).filter(r=>r!==null)}:null}function x(e){const n=s(e);if(!n)return null;const r=String(n.id??"").trim();return r?{id:r,name:a(n.name)}:null}function H(e){const n=String(e.id??e.extensionLineItemId??"").trim();return n?{id:n,unitType:String(e.unitType??""),name:String(e.extensionLineName??e.name??""),number:String(e.extensionLineNumber??e.number??""),status:String(e.status??""),webRTCDeviceId:a(e.webRTCDeviceId),deviceId:a(e.deviceId),domain:x(e.domain)}:null}function q(e){const n=String(e.deviceId??e.id??"").trim();return n?{id:n,name:String(e.name??e.deviceName??""),templateName:a(e.deviceTemplateName??e.templateName),extensionLineItemId:a(e.extensionLineItemId),extensionLineNumber:a(e.extensionLineNumber)}:null}const K={async getClassificationGroupData(e){const n=await d(A,{workspaceId:e}),r=[];for(const i of n.clientGroupCategories?.payload??[]){const p=String(i.categoryId??i.id??"").trim();p&&r.push({id:p,name:String(i.categoryName??i.name??"")})}const t=[];for(const i of n.clientGroupTypes?.payload??[]){const p=M(i);p&&t.push(p)}return{categories:r,types:t}},async setClientGroupCategory(e){const r=(await c(D,{input:{selectedWorkspaceId:e.workspaceId,clientGroupCategoryInput:{clientGroupCategoryItems:e.items.map(t=>({...t.id?{id:t.id}:{},name:t.name}))}}})).setClientGroupCategory;if(!r)throw new Error("Resposta invalida ao salvar categoria");if(!r.success)throw new Error(r.errorMessages?.join("; ")||"Falha ao salvar categoria de grupo")},async createClientGroup(e){const n={name:e.name,typeId:e.typeId,categoryId:e.categoryId},r=e.complement?.trim();r&&(n.complement=r);const i=(await c(f,{input:{linkInput:{senderWorkspaceId:e.workspaceId},clientGroupInput:{clientGroupDetailsItem:n}}})).setClientGroup;if(!i?.success)throw new Error(i?.errorMessages?.join("; ")||"Falha ao criar grupo");const p=i.payload?.id?.trim();if(!p)throw new Error("Grupo criado sem id");return p},async updateClientGroup(e){const r=(await c(f,{input:{linkInput:{id:e.linkId,senderWorkspaceId:e.workspaceId},clientGroupInput:{clientGroupDetailsItem:{name:e.name,typeId:e.typeId,categoryId:e.categoryId,complement:e.complement?.trim()??""}}}})).setClientGroup;if(!r?.success)throw new Error(r?.errorMessages?.join("; ")||"Falha ao atualizar grupo");return r.payload?.id?.trim()||e.linkId},async getDependentsByGroup(e){const r=(await d(S,{parentWorkspaceLinkId:e.groupId,hierarchyType:"client-group-dependent",limit:e.limit??500,offset:e.offset??0,search:e.search??""})).workspaceLinkDependentsByHierarchyType;if(!r)return[];if(!r.success&&r.errorMessages?.length)throw new Error(r.errorMessages.join("; "));return(r.payload??[]).map(W).filter(t=>t!==null)},async getDependentsCount(e){const n=await d($,{p_group_id:e}),r=u(n.get_client_group_dependents_count_json),t=s(r);return b(t?.total)??0},async addClientToGroup(e){const n=e.dependentWorkspaceClientIds.map(i=>i.trim()).filter(Boolean);if(n.length===0)return;const t=(await c(L,{groupId:e.groupId,dependents:n})).addClientGroupDependents;if(!t?.success)throw new Error(t?.errorMessages?.join("; ")||"Falha ao adicionar membro ao grupo")},async addDependentPermission(e){const r=(await c(T,{clientGroupDependentLinkId:e.clientGroupDependentLinkId,groupId:e.groupId,permissionName:e.permissionName})).addClientGroupDependentPermission;if(!r?.success)throw new Error(r?.errorMessages?.join("; ")||"Falha ao tornar administrador")},async removeDependent(e){await C.cancelLink(e.workspaceLinkId)},async getGroupRamais(e){const[n,r]=await Promise.all([d(P,{p_group_id:e}),d(w,{p_group_id:e})]),t=s(u(n.getExtensionLinesOfAGroup)),i=y(t?.extensionLines).map(o=>s(o)).filter(o=>o!==null).map(H).filter(o=>o!==null),p=s(u(r.getDeviceGroupsOfAGroup)),G=y(p?.devices).map(o=>s(o)).filter(o=>o!==null).map(q).filter(o=>o!==null);return{extensionLines:i,devices:G}},inheritanceHierarchyTypeId:N,async getAreaPassagePermissions(e){const n=await d(j,{p_workspace_link_id:e.workspaceLinkId,p_user_id:e.userId?.trim()?e.userId:null},{timeoutMs:3e4});return h(u(n.get_workspace_link_area_passage_permissions_json))},async createAreaShare(e){const n=await c(R,{p_area_id:e.areaId,p_workspace_link_id:e.workspaceLinkId,p_user_id:e.userId}),r=u(n.create_area_share);return s(r)??{}},async cancelAreaSharing(e){const n=await c(O,{userId:e.userId,linkId:e.linkId}),r=u(n.cancelareasharingjson),t=s(r);if(t)return t;if(Array.isArray(r)&&r.length>0){const i=s(r[0]);if(i)return i}return{}}};export{K as c};
