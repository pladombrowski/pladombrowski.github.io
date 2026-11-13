import{a3 as c,h as d}from"./index-D4sahLKN.js";import{s as $}from"./smart-auth.service-DS2WAV29.js";import{C as D}from"./client-group-d-t61-p9.js";function g(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:null}function I(e){return Array.isArray(e)?e:[]}function _(e){return typeof e=="string"?e:""}function C(e){const n=g(e);return n?{id:_(n.id),name:_(n.name),permissionFlag:n.permissionFlag===!0}:null}function h(e){const n=g(e);return n?{id:_(n.id),name:_(n.name),permissions:I(n.permissions).map(C).filter(t=>t!==null)}:null}function f(e){const n=g(e);if(!n)return null;const t={id:_(n.id),name:_(n.name),passages:I(n.passages).map(h).filter(i=>i!==null),permissions:I(n.permissions).map(C).filter(i=>i!==null)};return t.id!==""||t.name!==""||t.passages.length>0?t:null}function A(e){if(e==null)return[];if(Array.isArray(e))return e.map(f).filter(t=>t!==null);const n=g(e);if(n){if(Array.isArray(n.areas))return n.areas.map(f).filter(t=>t!==null);if(n.area){const t=f(n.area);return t?[t]:[]}}return[]}const E=`
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
`,S=`
  mutation SetClientGroupCategory($input: SetClientGroupCategoryInput!) {
    __typename
    setClientGroupCategory(input: $input) {
      __typename
      success
      errorMessages
    }
  }
`,k=`
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
`,w=`
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
`,L=`
  query GetClientGroupDependentsCount($p_group_id: uuid!) {
    get_client_group_dependents_count_json(args: { p_group_id: $p_group_id }) {
      json
    }
  }
`,U=`
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
  query GetAuthorizations($input: GetClientGroupAuthorizationsInput!) {
    clientGroupAuthorizations(input: $input) {
      success
      errorMessages
      payload {
        id
        startDate
        endDate
        createdAt
        status
        workspaceClient {
          id
          email
          phone
          type
          firstName
          lastName
          brandingName
          clientRecognition
        }
        creatorWorkspace {
          id
          type
          email
          firstName
          lastName
          brandingName
        }
        recipientWorkspace {
          id
          email
          phone
          type
          firstName
          lastName
          brandingName
        }
        workspace_client_keys: workspaceClientKeys {
          id
          areas {
            id
            name
          }
          passages {
            id
            name
          }
        }
      }
    }
  }
`,R=`
  query GetExtensionLinesOfAGroup($p_group_id: uuid!) {
    getExtensionLinesOfAGroup(args: { p_group_id: $p_group_id }) {
      json
    }
  }
`,b=`
  mutation UpdateWorkspaceLink(
    $inputid: UUID
    $inputexpirationdate: String
    $inputenddate: String
    $inputdeletedat: String
    $inputcreatorworkspaceid: UUID
    $inputpermissionroleid: UUID
    $inputrecipientworkspaceid: UUID
    $inputresponsibleworkspaceid: UUID
    $inputsenderworkspaceid: UUID
    $inputstartdate: String
    $inputstatus: String
    $inputstatusnote: String
    $inputworkspaceclientid: UUID
    $inputworkspacelinktypeid: UUID
    $inputareaids: [UUID!]
    $inputpassageids: [UUID!]
    $inputdependents: Int
    $inputCustomFields: String
  ) {
    __typename
    workspaceLinkUpdate(
      inputId: $inputid
      inputStartDate: $inputstartdate
      inputEndDate: $inputenddate
      inputStatus: $inputstatus
      inputStatusNote: $inputstatusnote
      inputExpirationDate: $inputexpirationdate
      inputWorkspaceClientid: $inputworkspaceclientid
      inputWorkspaceLinktypeid: $inputworkspacelinktypeid
      inputSenderWorkspaceId: $inputsenderworkspaceid
      inputRecipientWorkspaceId: $inputrecipientworkspaceid
      inputResponsibleWorkspaceId: $inputresponsibleworkspaceid
      inputCreatorWorkspaceId: $inputcreatorworkspaceid
      inputPermissionroleid: $inputpermissionroleid
      inputDeletedat: $inputdeletedat
      inputAreaids: $inputareaids
      inputPassageids: $inputpassageids
      inputDependents: $inputdependents
      inputCustomFields: $inputCustomFields
    ) {
      __typename
      id
    }
  }
`,O=`
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
`,W=`
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
`,F=`
  mutation CancelAreaSharing($userId: uuid!, $linkId: uuid!) {
    cancelareasharingjson(args: { selecteduserid: $userId, selectedworkspacelinkid: $linkId }) {
      json
    }
  }
`;function o(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function m(e){if(Array.isArray(e))return e;if(typeof e=="string"&&e.trim())try{const n=JSON.parse(e);return Array.isArray(n)?n:[]}catch{return[]}return[]}function M(e){if(e&&typeof e=="object")return e;if(typeof e=="string"&&e.trim())try{return JSON.parse(e)}catch{return null}return null}function l(e){if(Array.isArray(e))return e.length===0?null:l(e[0]);const n=o(e);return n?"json"in n?M(n.json)??n.json:n:null}function s(e){return typeof e=="string"?e:typeof e=="number"?String(e):null}function x(e){if(typeof e=="number"&&Number.isFinite(e))return e;const n=typeof e=="string"?Number(e):NaN;return Number.isFinite(n)?n:null}function z(e){const n=o(e);if(!n)return null;const t=String(n.id??"").trim();return t?{id:t,label:String(n.label??""),slug:String(n.slug??"")}:null}function G(e){const n=o(e);if(!n)return null;const t=String(n.id??"").trim();return t?{id:t,type:s(n.type),firstName:s(n.firstName),lastName:s(n.lastName),brandingName:s(n.brandingName),legalName:s(n.legalName),email:s(n.email),phone:s(n.phone)}:null}function H(e){const n=o(e);if(!n)return null;const t=o(n.permission),r=String(t?.name??"").trim();return{flag:n.permissionFlag===!0,name:r}}function q(e){const n=String(e.id??"").trim();return n?{id:n,status:String(e.status??"PENDING"),clientPhotoUrl:s(e.clientPhotoUrl),workspaceClient:G(e.workspaceClient),recipientWorkspace:G(e.recipientWorkspace),permissions:m(e.permissionWorkspaces).map(H).filter(t=>t!==null)}:null}function y(e){const n=o(e);if(!n)return null;const t=String(n.id??"").trim();return t?{id:t,email:s(n.email),phone:s(n.phone),type:s(n.type),firstName:s(n.firstName),lastName:s(n.lastName),brandingName:s(n.brandingName),legalName:s(n.legalName),clientRecognition:n.clientRecognition}:null}function N(e){const n=o(e);if(!n)return null;const t=String(n.id??"").trim();return t?{id:t,name:String(n.name??"")}:null}function J(e){const n=String(e.id??"").trim();if(!n)return null;const t=m(e.workspace_client_keys??e.workspaceClientKeys).map(a=>o(a)).filter(a=>a!==null),r=[],i=[];for(const a of t){for(const u of m(a.areas).map(N))u&&!r.some(p=>p.id===u.id)&&r.push(u);for(const u of m(a.passages).map(N))u&&!i.some(p=>p.id===u.id)&&i.push(u)}return{id:n,startDate:s(e.startDate),endDate:s(e.endDate),createdAt:s(e.createdAt),status:s(e.status),workspaceClient:y(e.workspaceClient),creatorWorkspace:y(e.creatorWorkspace),recipientWorkspace:y(e.recipientWorkspace),areas:r,passages:i}}function K(e){const n=o(e);if(!n)return null;const t=String(n.id??"").trim();return t?{id:t,name:s(n.name)}:null}function B(e){const n=String(e.id??e.extensionLineItemId??"").trim();return n?{id:n,unitType:String(e.unitType??""),name:String(e.extensionLineName??e.name??""),number:String(e.extensionLineNumber??e.number??""),status:String(e.status??""),webRTCDeviceId:s(e.webRTCDeviceId),deviceId:s(e.deviceId),domain:K(e.domain)}:null}function Y(e){const n=String(e.deviceId??e.id??"").trim();return n?{id:n,name:String(e.name??e.deviceName??""),templateName:s(e.deviceTemplateName??e.templateName),extensionLineItemId:s(e.extensionLineItemId),extensionLineNumber:s(e.extensionLineNumber)}:null}const Z={async getClassificationGroupData(e){const n=await d(E,{workspaceId:e}),t=[];for(const i of n.clientGroupCategories?.payload??[]){const a=String(i.categoryId??i.id??"").trim();a&&t.push({id:a,name:String(i.categoryName??i.name??"")})}const r=[];for(const i of n.clientGroupTypes?.payload??[]){const a=z(i);a&&r.push(a)}return{categories:t,types:r}},async setClientGroupCategory(e){const t=(await c(S,{input:{selectedWorkspaceId:e.workspaceId,clientGroupCategoryInput:{clientGroupCategoryItems:e.items.map(r=>({...r.id?{id:r.id}:{},name:r.name}))}}})).setClientGroupCategory;if(!t)throw new Error("Resposta invalida ao salvar categoria");if(!t.success)throw new Error(t.errorMessages?.join("; ")||"Falha ao salvar categoria de grupo")},async createClientGroup(e){const n={name:e.name,typeId:e.typeId,categoryId:e.categoryId},t=e.complement?.trim();t&&(n.complement=t);const i=(await c(k,{input:{linkInput:{senderWorkspaceId:e.workspaceId},clientGroupInput:{clientGroupDetailsItem:n}}})).setClientGroup;if(!i?.success)throw new Error(i?.errorMessages?.join("; ")||"Falha ao criar grupo");const a=i.payload?.id?.trim();if(!a)throw new Error("Grupo criado sem id");return a},async updateClientGroup(e){const t=(await c(k,{input:{linkInput:{id:e.linkId,senderWorkspaceId:e.workspaceId},clientGroupInput:{clientGroupDetailsItem:{name:e.name,typeId:e.typeId,categoryId:e.categoryId,complement:e.complement?.trim()??""}}}})).setClientGroup;if(!t?.success)throw new Error(t?.errorMessages?.join("; ")||"Falha ao atualizar grupo");return t.payload?.id?.trim()||e.linkId},async getDependentsByGroup(e){const t=(await d(w,{parentWorkspaceLinkId:e.groupId,hierarchyType:"client-group-dependent",limit:e.limit??500,offset:e.offset??0,search:e.search??""})).workspaceLinkDependentsByHierarchyType;if(!t)return[];if(!t.success&&t.errorMessages?.length)throw new Error(t.errorMessages.join("; "));return(t.payload??[]).map(q).filter(r=>r!==null)},async getDependentsCount(e){const n=await d(L,{p_group_id:e}),t=l(n.get_client_group_dependents_count_json),r=o(t);return x(r?.total)??0},async addClientToGroup(e){const n=e.dependentWorkspaceClientIds.map(i=>i.trim()).filter(Boolean);if(n.length===0)return;const r=(await c(U,{groupId:e.groupId,dependents:n})).addClientGroupDependents;if(!r?.success)throw new Error(r?.errorMessages?.join("; ")||"Falha ao adicionar membro ao grupo")},async addDependentPermission(e){const t=(await c(T,{clientGroupDependentLinkId:e.clientGroupDependentLinkId,groupId:e.groupId,permissionName:e.permissionName})).addClientGroupDependentPermission;if(!t?.success)throw new Error(t?.errorMessages?.join("; ")||"Falha ao tornar administrador")},async removeDependent(e){await $.cancelLink(e.workspaceLinkId)},async getClientGroupAuthorizations(e){const t=(await d(P,{input:{groupId:e.groupId,workspaceOnGroupId:e.workspaceOnGroupId,limit:e.limit??30,offset:e.offset??0}})).clientGroupAuthorizations;if(!t)return[];if(!t.success&&t.errorMessages?.length)throw new Error(t.errorMessages.join("; "));return(t.payload??[]).map(J).filter(r=>r!==null)},async getGroupRamais(e){const[n,t]=await Promise.all([d(R,{p_group_id:e}),d(O,{p_group_id:e})]),r=o(l(n.getExtensionLinesOfAGroup)),i=m(r?.extensionLines).map(p=>o(p)).filter(p=>p!==null).map(B).filter(p=>p!==null),a=o(l(t.getDeviceGroupsOfAGroup)),u=m(a?.devices).map(p=>o(p)).filter(p=>p!==null).map(Y).filter(p=>p!==null);return{extensionLines:i,devices:u}},inheritanceHierarchyTypeId:D,async cancelAuthorization(e){if(!(await c(b,{inputid:e,inputstatus:"CANCELLED",inputexpirationdate:null,inputenddate:null,inputdeletedat:null,inputcreatorworkspaceid:null,inputpermissionroleid:null,inputrecipientworkspaceid:null,inputresponsibleworkspaceid:null,inputsenderworkspaceid:null,inputstartdate:null,inputstatusnote:null,inputworkspaceclientid:null,inputworkspacelinktypeid:null,inputareaids:null,inputpassageids:null,inputdependents:null,inputCustomFields:null})).workspaceLinkUpdate?.id)throw new Error("Falha ao cancelar autorizacao do grupo")},async getAreaPassagePermissions(e){const n=await d(j,{p_workspace_link_id:e.workspaceLinkId,p_user_id:e.userId?.trim()?e.userId:null},{timeoutMs:3e4});return A(l(n.get_workspace_link_area_passage_permissions_json))},async createAreaShare(e){const n=await c(W,{p_area_id:e.areaId,p_workspace_link_id:e.workspaceLinkId,p_user_id:e.userId}),t=l(n.create_area_share);return o(t)??{}},async cancelAreaSharing(e){const n=await c(F,{userId:e.userId,linkId:e.linkId}),t=l(n.cancelareasharingjson),r=o(t);if(r)return r;if(Array.isArray(t)&&t.length>0){const i=o(t[0]);if(i)return i}return{}}};export{Z as c};
