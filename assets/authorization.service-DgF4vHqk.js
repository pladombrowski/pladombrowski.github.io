import{G as p,Z as m}from"./index-SV44U77X.js";const I=`
  query AuthorizationsWithFilter($input: GetAuthorizationsWithFilterInput!) {
    authorizationsWithFilter(input: $input) {
      __typename
      success
      payload {
        __typename
        id
        startDate
        endDate
        createdAt
        status
        clientPhotoUrl
        workspaceLinkType {
          __typename
          name
        }
        groupsData {
          __typename
          id
          name: clientGroupName
          categoryId: clientGroupCategoryId
          categoryName: clientGroupCategoryName
          workspaceLinkParentId
        }
        areas: permissionAreas {
          __typename
          area {
            __typename
            id
            name
            passages {
              __typename
              id
              name
            }
            areaHierarchy {
              __typename
              name
            }
            areaCategoryId
          }
        }
        workspace_client_keys: workspaceClientKeys {
          __typename
          id
          startDate
          endDate
          copies
          passages {
            __typename
            id
            name
            areaId
            area {
              __typename
              id
              name
              areaHierarchy {
                __typename
                name
              }
            }
          }
          areas {
            __typename
            id
            name
            passages {
              __typename
              id
              name
              areaId
            }
          }
        }
        creatorWorkspace {
          __typename
          id
          email
          type
          firstName
          lastName
          brandingName
        }
        workspaceClient {
          __typename
          id
          email
          phone
          type
          firstName
          lastName
          brandingName
        }
        recipientWorkspace {
          __typename
          id
          email
          phone
          type
          firstName
          lastName
          brandingName
        }
        senderWorkspace {
          __typename
          id
          email
          type
          firstName
          lastName
          brandingName
        }
      }
      errorMessages
    }
  }
`,S=`
  query GetClients(
    $ownerId: uuid
    $offset: Int
    $limit: Int
    $likeParam: String!
    $status: _varchar!
    $type: String
    $hierarchyType: _varchar
    $selectAllClients: Boolean
    $selectedparentclient: uuid
  ) {
    __typename
    getclientsjson_v2(
      args: {
        selectedfilters: $likeParam
        selectedlimit: $limit
        selectedoffset: $offset
        selectedworkspaceid: $ownerId
        selectedworkspacelinkstatus: $status
        selectedworkspacetype: $type
        selectedclienthierarchy: $hierarchyType
        selectedallclients: $selectAllClients
        selectedparentclient: $selectedparentclient
      }
    ) {
      __typename
      json
    }
  }
`,h=`
  query ClientRecognitionForAvatar($workspaceClientId: UUID!) {
    __typename
    recognitionSettingByWorkspaceClientId(workspaceClientId: $workspaceClientId) {
      __typename
      success
      payload {
        __typename
        recognitionOption
        fileUpload {
          __typename
          id
          url
        }
        originalFileUpload {
          __typename
          id
          url
        }
      }
    }
  }
`,A=`
  query GetAreasByWorkspace(
    $workspaceId: uuid
    $likeParam: String
    $limit: Int
    $permission: _varchar
    $relatedAreaType: String
    $deviceFeatures: _varchar
  ) {
    __typename
    getareasbyworkspacejson(
      args: {
        selectedpermissions: $permission
        selectedworkspaceid: $workspaceId
        selectedlike: $likeParam
        selectedlimit: $limit
        selectedtargetlinktype: $relatedAreaType
        selectedfeatures: $deviceFeatures
      }
    ) {
      __typename
      json
    }
  }
`,N=`
  mutation CreateLinkJson(
    $linksjson: [LinkInput!]!
    $selectedworkspaceid: UUID!
    $workspacelinkrecurrenceinput: WorkspaceLinkRecurrenceInput
  ) {
    __typename
    createlinkjson: createLink(
      inputArgs: {
        linksJson: $linksjson
        selectWorkspaceId: $selectedworkspaceid
        workspaceLinkRecurrenceInput: $workspacelinkrecurrenceinput
      }
    ) {
      __typename
      success
      payload {
        __typename
        id
      }
      errorMessages
    }
  }
`,$=`
  mutation CreateClient(
    $input: CreateUserLinkInput_COREInput!
    $workspaceLinkIds: [String!]!
  ) {
    __typename
    createWorkspaceClient(createUserLinkInput: $input, workspaceLinkIds: $workspaceLinkIds) {
      __typename
      success
      errorMessages
      payload {
        __typename
        id
        type
        firstName
        lastName
        brandingName
        legalName
        email
      }
    }
  }
`,C=`
  query WorkspaceLinkByUserId($userId: UUID!) {
    __typename
    workspaceLink: workspaceLinkByUserId(userId: $userId) {
      __typename
      id
      startDate
      status
      workspaceClientId
      workspaceLinkTypeId
      createdAt
      updatedAt
      expirationDate
      endDate
      statusNote
      workspaceLinkType {
        __typename
        id
        name
      }
      senderWorkspace {
        __typename
        id
        type
        email
        phone
        lastName
        firstName
        legalName
        brandingName
        logoPath
      }
      creatorWorkspace {
        __typename
        id
        type
        email
        phone
        lastName
        firstName
        legalName
        brandingName
        logoPath
      }
      recipientWorkspace {
        __typename
        id
        type
        email
        phone
        lastName
        firstName
        legalName
        brandingName
        logoPath
      }
      permissionWorkspaces {
        __typename
        permission {
          __typename
          id
          name
        }
      }
    }
  }
`,E=`
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
`,D="{PENDING, ACCEPTED, DENIED, EXPIRED, CANCELLED, REVIEW, DRAFT, BLOCKED, CURRENT, UPCOMING}";function c(e){if(Array.isArray(e))return e;if(typeof e=="string"&&e.trim())try{const n=JSON.parse(e);return Array.isArray(n)?n:[]}catch{return[]}return[]}function l(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function T(e){if(Array.isArray(e)){for(const t of e){const a=l(t),r=a?l(a.json):null;if(r)return r}return null}const n=l(e);return n?l(n.json):null}function y(e){if(!Array.isArray(e))return[];const n=[];for(const t of e){const a=l(t),r=a?l(a.json):null;r&&n.push(r)}return n}function L(e){const n=String(e.id??"");if(!n)return null;const t=c(e.deviceFeatures??e.device_features).map(a=>{if(typeof a=="string")return{id:a,name:null};const r=l(a);if(!r)return null;const i=String(r.id??"");return i?{id:i,name:r.name??null}:null}).filter(a=>a!==null);return{id:n,name:String(e.name??""),deviceFeatures:t}}function g(e,n=""){const t=l(e.passageType??e.passage_type??e.type),a=c(e.devices).map(r=>l(r)).filter(r=>r!==null).map(L).filter(r=>r!==null);return{id:String(e.id??""),name:String(e.name??""),areaId:String(e.areaId??e.area_id??n),passageTypeName:t?.name??null,devices:a}}function _(e){const n=Array.isArray(e.passages)?e.passages.map(t=>l(t)).filter(t=>t!==null).map(t=>g(t,String(e.id??""))):[];return{id:String(e.id??""),name:String(e.name??""),passages:n}}function b(e){const n=l(e.area);if(!n)return null;const t=_(n),a=c(e.passageConfigs??e.passage_configs),r=[],i=[];for(const u of a){const o=l(u);if(!o)continue;const s=String(o.passageId??o.passage_id??"");if(!s)continue;r.push(s);const f=typeof o.name=="string"&&o.name.trim()?o.name:s;i.push({id:s,name:f,areaId:String(o.areaId??o.area_id??t.id),passageTypeName:null,devices:[]})}return{area:t,passageConfigIds:r,configPassages:i}}function U(e){const n=Array.isArray(e.passages)?e.passages.map(i=>l(i)).filter(i=>i!==null).map(i=>g(i,String(e.id??""))):[],t=Array.isArray(e.areas)?e.areas.map(i=>l(i)).filter(i=>i!==null).map(_):[],r=c(e.relatedAreaViews??e.related_area_views).map(i=>l(i)).filter(i=>i!==null).map(b).filter(i=>i!==null);return{id:String(e.id??""),name:String(e.name??""),workspaceId:e.workspaceId??null,passages:n,areas:t,relatedAreas:r,areaSharing:e.areaSharing??e.area_sharing??null}}function R(e){const n=l(e.workspace_client??e.workspaceClient)??e,t=String(n.id??"");if(!t)return null;const a=c(n.groups).map(s=>l(s)).filter(s=>s!==null).map(s=>({id:s.id??null,name:String(s.name??"").trim(),typeId:s.typeId??null,categoryId:s.categoryId??null,complement:s.complement??null})),r=c(n.contract).map(s=>l(s)).filter(s=>s!==null).map(s=>({id:s.id??null,status:s.status??null,templateName:s.templateName??null})),i=c(n.primaryLink).map(s=>l(s)).filter(s=>s!==null),u=i.flatMap(s=>c(s.permissions)).map(s=>String(l(s)?.id??"").trim()).filter(s=>s!==""),o=i[0]?.status??null;return{id:t,name:n.name??null,type:n.type??"PERSON",email:n.email??null,phone:n.phone??null,status:n.status??null,firstName:n.firstName??null,lastName:n.lastName??null,legalName:n.legalName??null,brandingName:n.brandingName??null,logoPath:n.logoPath??null,clientRecognition:n.clientRecognition,facialRecognition:n.facialRecognition??null,groups:a,contract:r,primaryLinkPermissionIds:u,primaryLinkStatus:o}}function d(e){if(!e||typeof e!="object")return null;const n=e;return{id:String(n.id??""),email:n.email??null,phone:n.phone??null,type:n.type??null,firstName:n.firstName??null,lastName:n.lastName??null,brandingName:n.brandingName??null}}function W(e){if(!e||typeof e!="object")return null;const n=e,t=n.area??n;if(!t.id)return null;const a=Array.isArray(t.passages)?t.passages:[],r=t.areaHierarchy&&typeof t.areaHierarchy=="object"?t.areaHierarchy:null;return{id:String(t.id),name:String(t.name??""),parentName:r?.name??null,passages:a.filter(i=>!!i&&typeof i=="object").map(i=>({id:String(i.id??""),name:String(i.name??"")}))}}function P(e){if(!e||typeof e!="object")return null;const n=e;return{id:String(n.id??""),startDate:n.startDate??null,endDate:n.endDate??null,copies:typeof n.copies=="number"?n.copies:null,areas:Array.isArray(n.areas)?n.areas.filter(t=>!!t&&typeof t=="object").map(t=>({id:String(t.id??""),name:String(t.name??"")})):[],passages:Array.isArray(n.passages)?n.passages.filter(t=>!!t&&typeof t=="object").map(t=>({id:String(t.id??""),name:String(t.name??""),areaId:t.areaId??null})):[]}}function F(e){const n=Array.isArray(e.groupsData)?e.groupsData:[],t=Array.isArray(e.areas)?e.areas:[],a=Array.isArray(e.workspace_client_keys)?e.workspace_client_keys:[],r=e.workspaceLinkType;return{id:String(e.id??""),startDate:e.startDate??null,endDate:e.endDate??null,createdAt:e.createdAt??null,status:e.status??null,clientPhotoUrl:e.clientPhotoUrl??null,workspaceLinkTypeName:r?.name??null,groupsData:n.filter(i=>!!i&&typeof i=="object").map(i=>({id:String(i.id??""),name:String(i.name??""),categoryId:i.categoryId??null,categoryName:i.categoryName??null,workspaceLinkParentId:i.workspaceLinkParentId??null})),areas:t.map(W).filter(i=>i!==null),keys:a.map(P).filter(i=>i!==null),workspaceClient:d(e.workspaceClient),recipientWorkspace:d(e.recipientWorkspace),senderWorkspace:d(e.senderWorkspace),creatorWorkspace:d(e.creatorWorkspace)}}function re(e){return{slug:"status",conditionType:"is",value:e,valueType:"string"}}function ie(e){return{slug:"recipient_workspace",conditionType:"contains",value:e.trim(),valueType:"string"}}function w(e){const n=String(e.id??"");if(!n)return null;const t=l(e.workspaceLinkType),a=[];if(Array.isArray(e.permissionWorkspaces))for(const r of e.permissionWorkspaces){const i=l(r),o=(i?l(i.permission):null)?.name;typeof o=="string"&&o.trim()&&a.push(o)}return{id:n,startDate:e.startDate??null,endDate:e.endDate??null,expirationDate:e.expirationDate??null,createdAt:e.createdAt??null,updatedAt:e.updatedAt??null,status:e.status??null,statusNote:e.statusNote??null,workspaceClientId:String(e.workspaceClientId??""),workspaceLinkTypeId:e.workspaceLinkTypeId??null,workspaceLinkTypeName:t?.name??null,senderWorkspace:d(e.senderWorkspace),creatorWorkspace:d(e.creatorWorkspace),recipientWorkspace:d(e.recipientWorkspace),permissionNames:a}}const G=`
  query Getpermissionsbycategoryname($categoryName: String!) {
    __typename
    getpermissionsbycategoryname(args: { selectedcategoryname: $categoryName }) {
      __typename
      json
    }
  }
`,v=`
  query GetClientGroups($workspaceId: UUID!, $groupName: String!) {
    __typename
    clientGroups(input: { selectedWorkspaceId: $workspaceId, groupName: $groupName }) {
      __typename
      success
      payload {
        __typename
        id
        name
        categoryId
        categoryName
        activeDependents
        inactiveDependents
        totalDependents
        complement
        type {
          __typename
          id
          label
          slug
        }
      }
      errorMessages
    }
  }
`,B=`
  query AvailableFilters($pageSlug: String!) {
    availableFilters: systemFilterBySlug(slug: $pageSlug) {
      __typename
      slug
      id
      filterItems {
        __typename
        slug
        conditions
        valueType
        values {
          __typename
          label
          value
        }
      }
      orderByOptions {
        __typename
        fieldName
        orderBy
      }
    }
  }
`,j=`
  query FolderConfigs($workspaceId: UUID!, $pageSlug: String!) {
    __typename
    folderFilterConfigsByPageSlugFull(workspaceId: $workspaceId, pageSlug: $pageSlug) {
      __typename
      id
      path
      label
      pageSlug
      workspaceId
      userId
      isGlobal
      filters {
        __typename
        id
        userId
        label
        workspaceId
        isGlobal
        filterSlug
        orderBy {
          __typename
          fieldName
          orderBy
        }
        currentFilters {
          __typename
          slug
          value
          conditionType
          valueType
        }
      }
    }
  }
`,O=`
  mutation CreateClientGroupHierarchy(
    $p_child_workspace_link_id: uuid!
    $p_parent_workspace_link_ids: _uuid!
    $p_hierarchy_type_id: uuid!
  ) {
    create_client_group_hierarchy(
      args: {
        p_child_workspace_link_id: $p_child_workspace_link_id
        p_parent_workspace_link_ids: $p_parent_workspace_link_ids
        p_hierarchy_type_id: $p_hierarchy_type_id
      }
    ) {
      __typename
      json
    }
  }
`,M=`
  query GetClientGroupChildren($p_parent_workspace_link_id: uuid!, $p_user_id: uuid!) {
    get_client_group_children_json(
      args: {
        p_parent_workspace_link_id: $p_parent_workspace_link_id
        p_user_id: $p_user_id
      }
    ) {
      __typename
      json
    }
  }
`,H=`
  query GetClientGroupParents($p_child_workspace_link_id: uuid!, $p_user_id: uuid!) {
    get_client_group_parents_json(
      args: {
        p_child_workspace_link_id: $p_child_workspace_link_id
        p_user_id: $p_user_id
      }
    ) {
      __typename
      json
    }
  }
`,q=`
  query GetPassagesByArea($areaId: UUID!) {
    __typename
    areaPassages(areaId: $areaId) {
      __typename
      id
      name
    }
  }
`,z="0d0c48e9-42c8-4ce2-b72e-c7b056d907aa";function x(e){return`{${e.join(",")}}`}function k(e){const n=String(e.fieldName??"").trim(),t=String(e.orderBy??"").trim().toUpperCase();return n?{fieldName:n,orderBy:t==="DESC"?"DESC":"ASC"}:null}function J(e){return Array.isArray(e)?e.map(n=>l(n)).filter(n=>n!==null).map(k).filter(n=>n!==null):[]}function K(e){return{label:String(e.label??"").trim(),value:String(e.value??"")}}function V(e){const n=String(e.slug??"").trim();return n?{slug:n,conditions:Array.isArray(e.conditions)?e.conditions.map(t=>String(t)).filter(Boolean):[],valueType:String(e.valueType??"string"),values:Array.isArray(e.values)?e.values.map(t=>l(t)).filter(t=>t!==null).map(K):[]}:null}function Y(e){return{slug:String(e.slug??""),id:String(e.id??""),filterItems:Array.isArray(e.filterItems)?e.filterItems.map(n=>l(n)).filter(n=>n!==null).map(V).filter(n=>n!==null):[],orderByOptions:J(e.orderByOptions)}}function Z(e){return{slug:String(e.slug??""),conditionType:String(e.conditionType??"is"),valueType:String(e.valueType??"string"),value:e.value==null?null:String(e.value)}}function Q(e){const n=String(e.id??"");if(!n)return null;const t=l(e.orderBy);return{id:n,userId:String(e.userId??""),label:String(e.label??""),workspaceId:String(e.workspaceId??""),isGlobal:!!e.isGlobal,filterSlug:String(e.filterSlug??""),orderBy:t?k(t):null,currentFilters:Array.isArray(e.currentFilters)?e.currentFilters.map(a=>l(a)).filter(a=>a!==null).map(Z).filter(a=>a.slug!==""):[]}}function X(e){const n=String(e.id??"");return n?{id:n,path:String(e.path??""),label:String(e.label??""),pageSlug:String(e.pageSlug??""),workspaceId:String(e.workspaceId??""),userId:String(e.userId??""),isGlobal:!!e.isGlobal,filters:Array.isArray(e.filters)?e.filters.map(t=>l(t)).filter(t=>t!==null).map(Q).filter(t=>t!==null):[]}:null}function ee(e){const n=String(e.id??"");return!n||e.success===!1||e.error!=null||e.message!=null?null:{id:n,name:String(e.name??""),type:e.type??null,category:e.category??null,complement:e.complement??null}}function te(e){const n=String(e.id??"");if(!n||e.success===!1||e.error!=null||e.message!=null)return null;const t=e.depth,a=typeof t=="number"&&Number.isFinite(t)?t:Number.parseInt(String(t??"1"),10);return{id:n,name:String(e.name??"").trim()||n,type:e.type??null,category:e.category??null,complement:e.complement??null,depth:Number.isFinite(a)&&a>0?a:1}}function ne(e){const n=String(e.id??"");if(!n)return null;const t=l(e.type);return{id:n,name:String(e.name??""),categoryId:e.categoryId??null,categoryName:e.categoryName??null,complement:e.complement??null,activeDependents:typeof e.activeDependents=="number"?e.activeDependents:null,inactiveDependents:typeof e.inactiveDependents=="number"?e.inactiveDependents:null,totalDependents:typeof e.totalDependents=="number"?e.totalDependents:null,type:t?{id:String(t.id??""),label:String(t.label??""),slug:String(t.slug??"")}:null}}const se={async getPermissionsByCategoryName(e){const t=(await p(G,{categoryName:e})).getpermissionsbycategoryname;if(!Array.isArray(t)||t.length===0)return[];const a=t[0]?.json;return Array.isArray(a)?a.map(r=>l(r)).filter(r=>r!==null).map(r=>({id:String(r.id??""),name:String(r.name??"")})).filter(r=>r.id!==""&&r.name!==""):[]},async getClientGroups(e){const t=(await p(v,{workspaceId:e.workspaceId,groupName:e.groupName??""})).clientGroups;if(!t)return[];if(!t.success&&t.errorMessages?.length)throw new Error(t.errorMessages.join("; "));return(t.payload??[]).map(ne).filter(a=>a!==null)},async createClientGroupHierarchy(e){const n=e.parentWorkspaceLinkIds.map(o=>o.trim()).filter(Boolean);if(!e.childWorkspaceLinkId.trim()||n.length===0)throw new Error("Informe os grupos pai e filho");const t=await m(O,{p_child_workspace_link_id:e.childWorkspaceLinkId,p_parent_workspace_link_ids:x(n),p_hierarchy_type_id:e.hierarchyTypeId??z}),a=T(t.create_client_group_hierarchy);if(!a)throw new Error("Resposta invalida ao criar hierarquia entre grupos");const r=a.response;if(typeof r=="string"&&r.trim()&&r.toUpperCase()!=="OK")throw new Error(r);const i=a.error??a.message;if(i!=null&&String(i).trim())throw new Error(String(i));if(a.success===!1){const o=a.errorMessages;throw Array.isArray(o)&&o.length>0?new Error(o.map(s=>String(s)).join("; ")):new Error("Falha ao criar hierarquia de grupos")}const u=a.created;return{success:!0,created:typeof u=="number"?u:null}},async getClientGroupChildren(e){const n=await p(M,{p_parent_workspace_link_id:e.parentWorkspaceLinkId,p_user_id:e.userId});return y(n.get_client_group_children_json).map(ee).filter(t=>t!==null)},async getClientGroupParents(e){const n=await p(H,{p_child_workspace_link_id:e.childWorkspaceLinkId,p_user_id:e.userId});return y(n.get_client_group_parents_json).map(te).filter(t=>t!==null).sort((t,a)=>a.depth-t.depth||t.name.localeCompare(a.name,"pt-BR"))},async getSystemFilterBySlug(e){const t=(await p(B,{pageSlug:e})).availableFilters;return!t||typeof t!="object"?null:Y(t)},async getFolderFilterConfigs(e){const t=(await p(j,{workspaceId:e.workspaceId,pageSlug:e.pageSlug})).folderFilterConfigsByPageSlugFull;return Array.isArray(t)?t.filter(a=>!!a&&typeof a=="object").map(X).filter(a=>a!==null):[]},async getAuthorizationsWithFilter(e){const n={workspaceId:e.workspaceId,pagination:{offset:e.offset??0,limit:e.limit??30},currentFilters:e.currentFilters??[]};e.orderBy?.fieldName&&(n.orderBy={fieldName:e.orderBy.fieldName,orderBy:e.orderBy.orderBy==="DESC"?"DESC":"ASC"});const a=(await p(I,{input:n})).authorizationsWithFilter;if(!a.success)throw new Error(a.errorMessages?.join("; ")||"Falha ao carregar autorizacoes");return(a.payload??[]).map(F)},async getClients(e){const t=(await p(S,{ownerId:e.ownerId,offset:e.offset??0,limit:e.limit??25,likeParam:e.likeParam??"",status:e.status??D,type:e.type??null,hierarchyType:e.hierarchyType??"{}",selectAllClients:e.selectAllClients??!0,selectedparentclient:e.selectedParentClientId?.trim()?e.selectedParentClientId:null})).getclientsjson_v2;return!Array.isArray(t)||t.length===0?[]:c(t[0]?.json).map(r=>l(r)).filter(r=>r!==null).map(R).filter(r=>r!==null)},async getClientRecognition(e){if(!e.trim())return null;const n=await p(h,{workspaceClientId:e}),t=l(n.recognitionSettingByWorkspaceClientId);return!t||t.success===!1?null:t.payload??null},async getAreasByWorkspace(e){const t=(await p(A,{workspaceId:e.workspaceId,likeParam:e.likeParam??"",limit:e.limit??100,permission:e.permission??"{create}",relatedAreaType:e.relatedAreaType??"authorization",deviceFeatures:e.deviceFeatures??null},{timeoutMs:3e4})).getareasbyworkspacejson;return!Array.isArray(t)||t.length===0?[]:c(t[0]?.json).map(r=>l(r)).filter(r=>r!==null).map(U).filter(r=>r.id!=="")},async createAuthorization(e){const t=(await m(N,{linksjson:e.linksJson,selectedworkspaceid:e.selectedWorkspaceId,workspacelinkrecurrenceinput:e.workspaceLinkRecurrenceInput??null})).createlinkjson;if(!t)throw new Error("Resposta invalida ao criar autorizacao");return{success:t.success,ids:(t.payload??[]).map(a=>String(a.id??"")),errorMessages:t.errorMessages??[]}},async createMasterKey(e){const n={linkType:"master-key",status:"ACCEPTED",startDate:new Date().toISOString(),endDate:e.endDateIso??null,dependents:0,uses:-1,parentLinkId:null,permissionRoleId:null,statusNote:null,expirationDate:null,clients:[{id:e.recipientId}],values:null,masterArea:e.masterAreaId,areas:[],passages:e.passageIds.map(t=>({id:t,remote:!1})),childrenLinkIds:[],childrenLinkType:null,customFields:[]};return this.createAuthorization({linksJson:[n],selectedWorkspaceId:e.sessionWorkspaceId})},async createWorkspaceClient(e){const t=(await m($,{input:e.input,workspaceLinkIds:e.workspaceLinkIds??[]})).createWorkspaceClient;if(!t)throw new Error("Resposta invalida ao criar contato");const a=t.payload;return{success:t.success,errorMessages:t.errorMessages??[],payload:a?{id:String(a.id??""),type:a.type??null,firstName:a.firstName??null,lastName:a.lastName??null,brandingName:a.brandingName??null,legalName:a.legalName??null,email:a.email??null}:null}},async cancelAuthorization(e){const t=(await m(E,{inputid:e,inputstartdate:null,inputenddate:null,inputexpirationdate:null,inputdeletedat:null,inputcreatorworkspaceid:null,inputpermissionroleid:null,inputrecipientworkspaceid:null,inputresponsibleworkspaceid:null,inputsenderworkspaceid:null,inputstatus:"CANCELLED",inputstatusnote:null,inputworkspaceclientid:null,inputworkspacelinktypeid:null,inputareaids:null,inputpassageids:null,inputdependents:null,inputCustomFields:null})).workspaceLinkUpdate;if(!t?.id)throw new Error("Nao foi possivel cancelar a autorizacao");return String(t.id)},async getWorkspaceLinksByUserId(e){const t=(await p(C,{userId:e})).workspaceLink;return Array.isArray(t)?t.filter(a=>!!a&&typeof a=="object").map(w).filter(a=>a!==null):[]},async getPassagesByArea(e){const n=e.trim();return n?((await p(q,{areaId:n})).areaPassages??[]).map(a=>({id:String(a?.id??"").trim(),name:String(a?.name??"").trim()})).filter(a=>a.id):[]},async getAuthorizationHistory(e){const n=await this.getWorkspaceLinksByUserId(e),t=new Set;for(const a of n)(a.workspaceLinkTypeName??"").toLowerCase()==="authorization"&&a.workspaceClientId&&t.add(a.workspaceClientId);return[...t]}};export{D as C,se as a,ie as r,re as s};
