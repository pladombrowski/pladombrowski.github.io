import{aa as d,E as c}from"./index-Bw5log2n.js";import{C as G}from"./client-group-JCBJ3YOs.js";function g(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:null}function I(e){return Array.isArray(e)?e:[]}function _(e){return typeof e=="string"?e:""}function N(e){const n=g(e);return n?{id:_(n.id),name:_(n.name),permissionFlag:n.permissionFlag===!0}:null}function D(e){const n=g(e);return n?{id:_(n.id),name:_(n.name),permissions:I(n.permissions).map(N).filter(t=>t!==null)}:null}function y(e){const n=g(e);if(!n)return null;const t={id:_(n.id),name:_(n.name),passages:I(n.passages).map(D).filter(s=>s!==null),permissions:I(n.permissions).map(N).filter(s=>s!==null)};return t.id!==""||t.name!==""||t.passages.length>0?t:null}function h(e){if(e==null)return[];if(Array.isArray(e))return e.map(y).filter(t=>t!==null);const n=g(e);if(n){if(Array.isArray(n.areas))return n.areas.map(y).filter(t=>t!==null);if(n.area){const t=y(n.area);return t?[t]:[]}}return[]}const A=`
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
`,E=`
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
`,w=`
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
`,U=`
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
`,T=`
  mutation CancelReservationById($workspaceLinkId: uuid!, $userId: uuid!) {
    __typename
    cancelreservationjson(
      args: { selectedworkspacelinkid: $workspaceLinkId, selecteduserid: $userId }
    ) {
      __typename
      json
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
`,j=`
  query GetDeviceGroupsOfAGroup($p_group_id: uuid!) {
    getDeviceGroupsOfAGroup(args: { p_group_id: $p_group_id }) {
      json
    }
  }
`,O=`
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
`;function a(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function m(e){if(Array.isArray(e))return e;if(typeof e=="string"&&e.trim())try{const n=JSON.parse(e);return Array.isArray(n)?n:[]}catch{return[]}return[]}function M(e){if(e&&typeof e=="object")return e;if(typeof e=="string"&&e.trim())try{return JSON.parse(e)}catch{return null}return null}function l(e){if(Array.isArray(e))return e.length===0?null:l(e[0]);const n=a(e);return n?"json"in n?M(n.json)??n.json:n:null}function i(e){return typeof e=="string"?e:typeof e=="number"?String(e):null}function x(e){if(typeof e=="number"&&Number.isFinite(e))return e;const n=typeof e=="string"?Number(e):NaN;return Number.isFinite(n)?n:null}function z(e){const n=a(e);if(!n)return null;const t=String(n.id??"").trim();return t?{id:t,label:String(n.label??""),slug:String(n.slug??"")}:null}function $(e){const n=a(e);if(!n)return null;const t=String(n.id??"").trim();return t?{id:t,type:i(n.type),firstName:i(n.firstName),lastName:i(n.lastName),brandingName:i(n.brandingName),legalName:i(n.legalName),email:i(n.email),phone:i(n.phone)}:null}function H(e){const n=a(e);if(!n)return null;const t=a(n.permission),r=String(t?.name??"").trim();return{flag:n.permissionFlag===!0,name:r}}function q(e){const n=String(e.id??"").trim();return n?{id:n,status:String(e.status??"PENDING"),clientPhotoUrl:i(e.clientPhotoUrl),workspaceClient:$(e.workspaceClient),recipientWorkspace:$(e.recipientWorkspace),permissions:m(e.permissionWorkspaces).map(H).filter(t=>t!==null)}:null}function f(e){const n=a(e);if(!n)return null;const t=String(n.id??"").trim();return t?{id:t,email:i(n.email),phone:i(n.phone),type:i(n.type),firstName:i(n.firstName),lastName:i(n.lastName),brandingName:i(n.brandingName),legalName:i(n.legalName),clientRecognition:n.clientRecognition}:null}function C(e){const n=a(e);if(!n)return null;const t=String(n.id??"").trim();return t?{id:t,name:String(n.name??"")}:null}function B(e){const n=String(e.id??"").trim();if(!n)return null;const t=m(e.workspace_client_keys??e.workspaceClientKeys).map(o=>a(o)).filter(o=>o!==null),r=[],s=[];for(const o of t){for(const u of m(o.areas).map(C))u&&!r.some(p=>p.id===u.id)&&r.push(u);for(const u of m(o.passages).map(C))u&&!s.some(p=>p.id===u.id)&&s.push(u)}return{id:n,startDate:i(e.startDate),endDate:i(e.endDate),createdAt:i(e.createdAt),status:i(e.status),workspaceClient:f(e.workspaceClient),creatorWorkspace:f(e.creatorWorkspace),recipientWorkspace:f(e.recipientWorkspace),areas:r,passages:s}}function J(e){const n=a(e);if(!n)return null;const t=String(n.id??"").trim();return t?{id:t,name:i(n.name)}:null}function K(e){const n=String(e.id??e.extensionLineItemId??"").trim();return n?{id:n,unitType:String(e.unitType??""),name:String(e.extensionLineName??e.name??""),number:String(e.extensionLineNumber??e.number??""),status:String(e.status??""),webRTCDeviceId:i(e.webRTCDeviceId),deviceId:i(e.deviceId),domain:J(e.domain)}:null}function Y(e){const n=String(e.deviceId??e.id??"").trim();return n?{id:n,name:String(e.name??e.deviceName??""),templateName:i(e.deviceTemplateName??e.templateName),extensionLineItemId:i(e.extensionLineItemId),extensionLineNumber:i(e.extensionLineNumber)}:null}const X={async getClassificationGroupData(e){const n=await c(A,{workspaceId:e}),t=[];for(const s of n.clientGroupCategories?.payload??[]){const o=String(s.categoryId??s.id??"").trim();o&&t.push({id:o,name:String(s.categoryName??s.name??"")})}const r=[];for(const s of n.clientGroupTypes?.payload??[]){const o=z(s);o&&r.push(o)}return{categories:t,types:r}},async setClientGroupCategory(e){const t=(await d(E,{input:{selectedWorkspaceId:e.workspaceId,clientGroupCategoryInput:{clientGroupCategoryItems:e.items.map(r=>({...r.id?{id:r.id}:{},name:r.name}))}}})).setClientGroupCategory;if(!t)throw new Error("Resposta invalida ao salvar categoria");if(!t.success)throw new Error(t.errorMessages?.join("; ")||"Falha ao salvar categoria de grupo")},async createClientGroup(e){const n={name:e.name,typeId:e.typeId,categoryId:e.categoryId},t=e.complement?.trim();t&&(n.complement=t);const s=(await d(k,{input:{linkInput:{senderWorkspaceId:e.workspaceId},clientGroupInput:{clientGroupDetailsItem:n}}})).setClientGroup;if(!s?.success)throw new Error(s?.errorMessages?.join("; ")||"Falha ao criar grupo");const o=s.payload?.id?.trim();if(!o)throw new Error("Grupo criado sem id");return o},async updateClientGroup(e){const t=(await d(k,{input:{linkInput:{id:e.linkId,senderWorkspaceId:e.workspaceId},clientGroupInput:{clientGroupDetailsItem:{name:e.name,typeId:e.typeId,categoryId:e.categoryId,complement:e.complement?.trim()??""}}}})).setClientGroup;if(!t?.success)throw new Error(t?.errorMessages?.join("; ")||"Falha ao atualizar grupo");return t.payload?.id?.trim()||e.linkId},async getDependentsByGroup(e){const t=(await c(S,{parentWorkspaceLinkId:e.groupId,hierarchyType:"client-group-dependent",limit:e.limit??500,offset:e.offset??0,search:e.search??""})).workspaceLinkDependentsByHierarchyType;if(!t)return[];if(!t.success&&t.errorMessages?.length)throw new Error(t.errorMessages.join("; "));return(t.payload??[]).map(q).filter(r=>r!==null)},async getDependentsCount(e){const n=await c(w,{p_group_id:e}),t=l(n.get_client_group_dependents_count_json),r=a(t);return x(r?.total)??0},async addClientToGroup(e){const n=e.dependentWorkspaceClientIds.map(s=>s.trim()).filter(Boolean);if(n.length===0)return;const r=(await d(L,{groupId:e.groupId,dependents:n})).addClientGroupDependents;if(!r?.success)throw new Error(r?.errorMessages?.join("; ")||"Falha ao adicionar membro ao grupo")},async addDependentPermission(e){const t=(await d(U,{clientGroupDependentLinkId:e.clientGroupDependentLinkId,groupId:e.groupId,permissionName:e.permissionName})).addClientGroupDependentPermission;if(!t?.success)throw new Error(t?.errorMessages?.join("; ")||"Falha ao tornar administrador")},async removeDependent(e){const n=await d(T,{workspaceLinkId:e.workspaceLinkId,userId:e.userId}),t=m(n.cancelreservationjson),r=a(t[0]);if(!r)throw new Error("Resposta invalida ao remover membro");if(!("id"in r)&&!("error"in r&&r.error==null))throw new Error(i(r.error)??"Falha ao remover membro do grupo")},async getClientGroupAuthorizations(e){const t=(await c(P,{input:{groupId:e.groupId,workspaceOnGroupId:e.workspaceOnGroupId,limit:e.limit??30,offset:e.offset??0}})).clientGroupAuthorizations;if(!t)return[];if(!t.success&&t.errorMessages?.length)throw new Error(t.errorMessages.join("; "));return(t.payload??[]).map(B).filter(r=>r!==null)},async getGroupRamais(e){const[n,t]=await Promise.all([c(R,{p_group_id:e}),c(j,{p_group_id:e})]),r=a(l(n.getExtensionLinesOfAGroup)),s=m(r?.extensionLines).map(p=>a(p)).filter(p=>p!==null).map(K).filter(p=>p!==null),o=a(l(t.getDeviceGroupsOfAGroup)),u=m(o?.devices).map(p=>a(p)).filter(p=>p!==null).map(Y).filter(p=>p!==null);return{extensionLines:s,devices:u}},inheritanceHierarchyTypeId:G,async cancelAuthorization(e){if(!(await d(b,{inputid:e,inputstatus:"CANCELLED",inputexpirationdate:null,inputenddate:null,inputdeletedat:null,inputcreatorworkspaceid:null,inputpermissionroleid:null,inputrecipientworkspaceid:null,inputresponsibleworkspaceid:null,inputsenderworkspaceid:null,inputstartdate:null,inputstatusnote:null,inputworkspaceclientid:null,inputworkspacelinktypeid:null,inputareaids:null,inputpassageids:null,inputdependents:null,inputCustomFields:null})).workspaceLinkUpdate?.id)throw new Error("Falha ao cancelar autorizacao do grupo")},async getAreaPassagePermissions(e){const n=await c(O,{p_workspace_link_id:e.workspaceLinkId,p_user_id:e.userId?.trim()?e.userId:null},{timeoutMs:3e4});return h(l(n.get_workspace_link_area_passage_permissions_json))},async createAreaShare(e){const n=await d(W,{p_area_id:e.areaId,p_workspace_link_id:e.workspaceLinkId,p_user_id:e.userId}),t=l(n.create_area_share);return a(t)??{}},async cancelAreaSharing(e){const n=await d(F,{userId:e.userId,linkId:e.linkId}),t=l(n.cancelareasharingjson),r=a(t);if(r)return r;if(Array.isArray(t)&&t.length>0){const s=a(t[0]);if(s)return s}return{}}};export{X as c};
