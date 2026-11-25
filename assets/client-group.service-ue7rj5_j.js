import{ae as u,T as N,S as d,af as m,aF as g}from"./index-DwA1oRma.js";import{s as h}from"./smart-auth.service-CsqdATUv.js";import{C as $}from"./client-group-OhgqCFvs.js";function y(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:null}function I(e){return Array.isArray(e)?e:[]}function _(e){return typeof e=="string"?e:""}function E(e){const n=y(e);return n?{id:_(n.id),name:_(n.name),permissionFlag:n.permissionFlag===!0}:null}function D(e){const n=y(e);return n?{id:_(n.id),name:_(n.name),permissions:I(n.permissions).map(E).filter(r=>r!==null)}:null}function f(e){const n=y(e);if(!n)return null;const r={id:_(n.id),name:_(n.name),passages:I(n.passages).map(D).filter(i=>i!==null),permissions:I(n.permissions).map(E).filter(i=>i!==null)};return r.id!==""||r.name!==""||r.passages.length>0?r:null}function L(e){if(e==null)return[];if(Array.isArray(e))return e.map(f).filter(r=>r!==null);const n=y(e);if(n){if(Array.isArray(n.areas))return n.areas.map(f).filter(r=>r!==null);if(n.area){const r=f(n.area);return r?[r]:[]}}return[]}const T=`
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
`,P=`
  mutation SetClientGroupCategory($input: SetClientGroupCategoryInput!) {
    __typename
    setClientGroupCategory(input: $input) {
      __typename
      success
      errorMessages
    }
  }
`,G=`
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
`,j=`
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
`,O=`
  query GetClientGroupDependentsCount($p_group_id: uuid!) {
    get_client_group_dependents_count_json(args: { p_group_id: $p_group_id }) {
      json
    }
  }
`,w=`
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
`,R=`
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
`,U=`
  query GetExtensionLinesOfAGroup($p_group_id: uuid!) {
    getExtensionLinesOfAGroup(args: { p_group_id: $p_group_id }) {
      json
    }
  }
`,b=`
  query GetExtensionLinesOfAGroup($p_group_id: String!) {
    prod_getExtensionLinesOfAGroup(p_group_id: $p_group_id) {
      json
    }
  }
`,M=`
  query GetDeviceGroupsOfAGroup($p_group_id: uuid!) {
    getDeviceGroupsOfAGroup(args: { p_group_id: $p_group_id }) {
      json
    }
  }
`,F=`
  query GetDeviceGroupsOfAGroup($p_group_id: String!) {
    prod_getDeviceGroupsOfAGroup(p_group_id: $p_group_id) {
      json
    }
  }
`,W=`
  query GetWorkspaceLinkAreaPassagePermissions($p_user_id: uuid, $p_workspace_link_id: uuid!) {
    get_workspace_link_area_passage_permissions_json(
      args: { p_user_id: $p_user_id, p_workspace_link_id: $p_workspace_link_id }
    ) {
      json
    }
  }
`,x=`
  mutation GetWorkspaceLinkAreaPassagePermissions(
    $p_user_id: String
    $p_workspace_link_id: String!
  ) {
    prod_get_workspace_link_area_passage_permissions_json(
      p_user_id: $p_user_id
      p_workspace_link_id: $p_workspace_link_id
    ) {
      json
    }
  }
`,J=`
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
`,q=`
  mutation CreateAreaShare(
    $p_area_id: String!
    $p_workspace_link_id: String!
    $p_user_id: String!
  ) {
    prod_create_area_share(
      p_area_id: $p_area_id
      p_workspace_link_id: $p_workspace_link_id
      p_user_id: $p_user_id
    ) {
      json
    }
  }
`,H=`
  mutation CancelAreaSharing($userId: uuid!, $linkId: uuid!) {
    cancelareasharingjson(args: { selecteduserid: $userId, selectedworkspacelinkid: $linkId }) {
      json
    }
  }
`,V=`
  mutation CancelAreaSharing($userId: String!, $linkId: String!) {
    prod_cancelareasharingjson(selecteduserid: $userId, selectedworkspacelinkid: $linkId) {
      json
    }
  }
`,l={endpoint:N.hailaJavaGraphqlEndpoint,timeoutMs:3e4};function s(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function k(e){if(Array.isArray(e))return e;if(typeof e=="string"&&e.trim())try{const n=JSON.parse(e);return Array.isArray(n)?n:[]}catch{return[]}return[]}function v(e){if(e&&typeof e=="object")return e;if(typeof e=="string"&&e.trim())try{return JSON.parse(e)}catch{return null}return null}function c(e){if(Array.isArray(e))return e.length===0?null:c(e[0]);const n=s(e);return n?"json"in n?v(n.json)??n.json:n:null}function a(e){return typeof e=="string"?e:typeof e=="number"?String(e):null}function B(e){if(typeof e=="number"&&Number.isFinite(e))return e;const n=typeof e=="string"?Number(e):NaN;return Number.isFinite(n)?n:null}function K(e){const n=s(e);if(!n)return null;const r=String(n.id??"").trim();return r?{id:r,label:String(n.label??""),slug:String(n.slug??"")}:null}function A(e){const n=s(e);if(!n)return null;const r=String(n.id??"").trim();return r?{id:r,type:a(n.type),firstName:a(n.firstName),lastName:a(n.lastName),brandingName:a(n.brandingName),legalName:a(n.legalName),email:a(n.email),phone:a(n.phone)}:null}function Y(e){const n=s(e);if(!n)return null;const r=s(n.permission),t=String(r?.name??"").trim();return{flag:n.permissionFlag===!0,name:t}}function X(e){const n=String(e.id??"").trim();return n?{id:n,status:String(e.status??"PENDING"),clientPhotoUrl:a(e.clientPhotoUrl),workspaceClient:A(e.workspaceClient),recipientWorkspace:A(e.recipientWorkspace),permissions:k(e.permissionWorkspaces).map(Y).filter(r=>r!==null)}:null}function z(e){const n=s(e);if(!n)return null;const r=String(n.id??"").trim();return r?{id:r,name:a(n.name)}:null}function Q(e){const n=String(e.id??e.extensionLineItemId??"").trim();return n?{id:n,unitType:String(e.unitType??""),name:String(e.extensionLineName??e.name??""),number:String(e.extensionLineNumber??e.number??""),status:String(e.status??""),webRTCDeviceId:a(e.webRTCDeviceId),deviceId:a(e.deviceId),domain:z(e.domain)}:null}function Z(e){const n=String(e.deviceId??e.id??"").trim();return n?{id:n,name:String(e.name??e.deviceName??""),templateName:a(e.deviceTemplateName??e.templateName),extensionLineItemId:a(e.extensionLineItemId),extensionLineNumber:a(e.extensionLineNumber)}:null}const te={async getClassificationGroupData(e){const n=await d(T,{workspaceId:e}),r=[];for(const i of n.clientGroupCategories?.payload??[]){const o=String(i.categoryId??i.id??"").trim();o&&r.push({id:o,name:String(i.categoryName??i.name??"")})}const t=[];for(const i of n.clientGroupTypes?.payload??[]){const o=K(i);o&&t.push(o)}return{categories:r,types:t}},async setClientGroupCategory(e){const r=(await u(P,{input:{selectedWorkspaceId:e.workspaceId,clientGroupCategoryInput:{clientGroupCategoryItems:e.items.map(t=>({...t.id?{id:t.id}:{},name:t.name}))}}})).setClientGroupCategory;if(!r)throw new Error("Resposta invalida ao salvar categoria");if(!r.success)throw new Error(r.errorMessages?.join("; ")||"Falha ao salvar categoria de grupo")},async createClientGroup(e){const n={name:e.name,typeId:e.typeId,categoryId:e.categoryId},r=e.complement?.trim();r&&(n.complement=r);const i=(await u(G,{input:{linkInput:{senderWorkspaceId:e.workspaceId},clientGroupInput:{clientGroupDetailsItem:n}}})).setClientGroup;if(!i?.success)throw new Error(i?.errorMessages?.join("; ")||"Falha ao criar grupo");const o=i.payload?.id?.trim();if(!o)throw new Error("Grupo criado sem id");return o},async updateClientGroup(e){const r=(await u(G,{input:{linkInput:{id:e.linkId,senderWorkspaceId:e.workspaceId},clientGroupInput:{clientGroupDetailsItem:{name:e.name,typeId:e.typeId,categoryId:e.categoryId,complement:e.complement?.trim()??""}}}})).setClientGroup;if(!r?.success)throw new Error(r?.errorMessages?.join("; ")||"Falha ao atualizar grupo");return r.payload?.id?.trim()||e.linkId},async getDependentsByGroup(e){const r=(await d(j,{parentWorkspaceLinkId:e.groupId,hierarchyType:"client-group-dependent",limit:e.limit??500,offset:e.offset??0,search:e.search??""})).workspaceLinkDependentsByHierarchyType;if(!r)return[];if(!r.success&&r.errorMessages?.length)throw new Error(r.errorMessages.join("; "));return(r.payload??[]).map(X).filter(t=>t!==null)},async getDependentsCount(e){const n=await d(O,{p_group_id:e}),r=c(n.get_client_group_dependents_count_json),t=s(r);return B(t?.total)??0},async addClientToGroup(e){const n=e.dependentWorkspaceClientIds.map(i=>i.trim()).filter(Boolean);if(n.length===0)return;const t=(await u(w,{groupId:e.groupId,dependents:n})).addClientGroupDependents;if(!t?.success)throw new Error(t?.errorMessages?.join("; ")||"Falha ao adicionar membro ao grupo")},async addDependentPermission(e){const r=(await u(R,{clientGroupDependentLinkId:e.clientGroupDependentLinkId,groupId:e.groupId,permissionName:e.permissionName})).addClientGroupDependentPermission;if(!r?.success)throw new Error(r?.errorMessages?.join("; ")||"Falha ao tornar administrador")},async removeDependent(e){await h.cancelLink(e.workspaceLinkId)},async getGroupRamais(e){const n=m(g)==="java",[r,t]=await Promise.all([d(n?b:U,{p_group_id:e},n?l:{}),d(n?F:M,{p_group_id:e},n?l:{})]),i=s(c(n?r.prod_getExtensionLinesOfAGroup:r.getExtensionLinesOfAGroup)),o=k(i?.extensionLines).map(p=>s(p)).filter(p=>p!==null).map(Q).filter(p=>p!==null),S=s(c(n?t.prod_getDeviceGroupsOfAGroup:t.getDeviceGroupsOfAGroup)),C=k(S?.devices).map(p=>s(p)).filter(p=>p!==null).map(Z).filter(p=>p!==null);return{extensionLines:o,devices:C}},inheritanceHierarchyTypeId:$,async getAreaPassagePermissions(e){const n=m(g)==="java",r=await d(n?x:W,{p_workspace_link_id:e.workspaceLinkId,p_user_id:e.userId?.trim()?e.userId:null},n?l:{timeoutMs:3e4});return L(c(n?r.prod_get_workspace_link_area_passage_permissions_json:r.get_workspace_link_area_passage_permissions_json))},async createAreaShare(e){const n=m(g)==="java",r=await u(n?q:J,{p_area_id:e.areaId,p_workspace_link_id:e.workspaceLinkId,p_user_id:e.userId},n?l:{}),t=c(n?r.prod_create_area_share:r.create_area_share);return s(t)??{}},async cancelAreaSharing(e){const n=m(g)==="java",r=await u(n?V:H,{userId:e.userId,linkId:e.linkId},n?l:{}),t=c(n?r.prod_cancelareasharingjson:r.cancelareasharingjson),i=s(t);if(i)return i;if(Array.isArray(t)&&t.length>0){const o=s(t[0]);if(o)return o}return{}}};export{te as c};
