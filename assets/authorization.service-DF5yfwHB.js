import{E as p,aa as m}from"./index-CDFvGxZI.js";const f=`
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
`,I=`
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
`,S=`
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
`,h=`
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
`,N=`
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
`,$=`
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
`,C=`
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
`,D="{PENDING, ACCEPTED, DENIED, EXPIRED, CANCELLED, REVIEW, DRAFT, BLOCKED, CURRENT, UPCOMING}";function c(e){if(Array.isArray(e))return e;if(typeof e=="string"&&e.trim())try{const a=JSON.parse(e);return Array.isArray(a)?a:[]}catch{return[]}return[]}function l(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function E(e){if(Array.isArray(e)){for(const t of e){const n=l(t),r=n?l(n.json):null;if(r)return r}return null}const a=l(e);return a?l(a.json):null}function T(e){if(!Array.isArray(e))return[];const a=[];for(const t of e){const n=l(t),r=n?l(n.json):null;r&&a.push(r)}return a}function L(e){const a=String(e.id??"");if(!a)return null;const t=c(e.deviceFeatures??e.device_features).map(n=>{if(typeof n=="string")return{id:n,name:null};const r=l(n);if(!r)return null;const i=String(r.id??"");return i?{id:i,name:r.name??null}:null}).filter(n=>n!==null);return{id:a,name:String(e.name??""),deviceFeatures:t}}function y(e,a=""){const t=l(e.passageType??e.passage_type??e.type),n=c(e.devices).map(r=>l(r)).filter(r=>r!==null).map(L).filter(r=>r!==null);return{id:String(e.id??""),name:String(e.name??""),areaId:String(e.areaId??e.area_id??a),passageTypeName:t?.name??null,devices:n}}function g(e){const a=Array.isArray(e.passages)?e.passages.map(t=>l(t)).filter(t=>t!==null).map(t=>y(t,String(e.id??""))):[];return{id:String(e.id??""),name:String(e.name??""),passages:a}}function b(e){const a=l(e.area);if(!a)return null;const t=g(a),n=c(e.passageConfigs??e.passage_configs),r=[],i=[];for(const u of n){const o=l(u);if(!o)continue;const s=String(o.passageId??o.passage_id??"");if(!s)continue;r.push(s);const k=typeof o.name=="string"&&o.name.trim()?o.name:s;i.push({id:s,name:k,areaId:String(o.areaId??o.area_id??t.id),passageTypeName:null,devices:[]})}return{area:t,passageConfigIds:r,configPassages:i}}function U(e){const a=Array.isArray(e.passages)?e.passages.map(i=>l(i)).filter(i=>i!==null).map(i=>y(i,String(e.id??""))):[],t=Array.isArray(e.areas)?e.areas.map(i=>l(i)).filter(i=>i!==null).map(g):[],r=c(e.relatedAreaViews??e.related_area_views).map(i=>l(i)).filter(i=>i!==null).map(b).filter(i=>i!==null);return{id:String(e.id??""),name:String(e.name??""),workspaceId:e.workspaceId??null,passages:a,areas:t,relatedAreas:r,areaSharing:e.areaSharing??e.area_sharing??null}}function W(e){const a=l(e.workspace_client??e.workspaceClient)??e,t=String(a.id??"");if(!t)return null;const n=c(a.groups).map(s=>l(s)).filter(s=>s!==null).map(s=>({id:s.id??null,name:String(s.name??"").trim(),typeId:s.typeId??null,categoryId:s.categoryId??null,complement:s.complement??null})),r=c(a.contract).map(s=>l(s)).filter(s=>s!==null).map(s=>({id:s.id??null,status:s.status??null,templateName:s.templateName??null})),i=c(a.primaryLink).map(s=>l(s)).filter(s=>s!==null),u=i.flatMap(s=>c(s.permissions)).map(s=>String(l(s)?.id??"").trim()).filter(s=>s!==""),o=i[0]?.status??null;return{id:t,name:a.name??null,type:a.type??"PERSON",email:a.email??null,phone:a.phone??null,status:a.status??null,firstName:a.firstName??null,lastName:a.lastName??null,legalName:a.legalName??null,brandingName:a.brandingName??null,logoPath:a.logoPath??null,clientRecognition:a.clientRecognition,facialRecognition:a.facialRecognition??null,groups:n,contract:r,primaryLinkPermissionIds:u,primaryLinkStatus:o}}function d(e){if(!e||typeof e!="object")return null;const a=e;return{id:String(a.id??""),email:a.email??null,phone:a.phone??null,type:a.type??null,firstName:a.firstName??null,lastName:a.lastName??null,brandingName:a.brandingName??null}}function w(e){if(!e||typeof e!="object")return null;const a=e,t=a.area??a;if(!t.id)return null;const n=Array.isArray(t.passages)?t.passages:[],r=t.areaHierarchy&&typeof t.areaHierarchy=="object"?t.areaHierarchy:null;return{id:String(t.id),name:String(t.name??""),parentName:r?.name??null,passages:n.filter(i=>!!i&&typeof i=="object").map(i=>({id:String(i.id??""),name:String(i.name??"")}))}}function R(e){if(!e||typeof e!="object")return null;const a=e;return{id:String(a.id??""),startDate:a.startDate??null,endDate:a.endDate??null,copies:typeof a.copies=="number"?a.copies:null,areas:Array.isArray(a.areas)?a.areas.filter(t=>!!t&&typeof t=="object").map(t=>({id:String(t.id??""),name:String(t.name??"")})):[],passages:Array.isArray(a.passages)?a.passages.filter(t=>!!t&&typeof t=="object").map(t=>({id:String(t.id??""),name:String(t.name??""),areaId:t.areaId??null})):[]}}function F(e){const a=Array.isArray(e.groupsData)?e.groupsData:[],t=Array.isArray(e.areas)?e.areas:[],n=Array.isArray(e.workspace_client_keys)?e.workspace_client_keys:[],r=e.workspaceLinkType;return{id:String(e.id??""),startDate:e.startDate??null,endDate:e.endDate??null,createdAt:e.createdAt??null,status:e.status??null,clientPhotoUrl:e.clientPhotoUrl??null,workspaceLinkTypeName:r?.name??null,groupsData:a.filter(i=>!!i&&typeof i=="object").map(i=>({id:String(i.id??""),name:String(i.name??""),categoryId:i.categoryId??null,categoryName:i.categoryName??null,workspaceLinkParentId:i.workspaceLinkParentId??null})),areas:t.map(w).filter(i=>i!==null),keys:n.map(R).filter(i=>i!==null),workspaceClient:d(e.workspaceClient),recipientWorkspace:d(e.recipientWorkspace),senderWorkspace:d(e.senderWorkspace),creatorWorkspace:d(e.creatorWorkspace)}}function ae(e){return{slug:"status",conditionType:"is",value:e,valueType:"string"}}function ne(e){return{slug:"recipient_workspace",conditionType:"contains",value:e.trim(),valueType:"string"}}function v(e){const a=String(e.id??"");if(!a)return null;const t=l(e.workspaceLinkType),n=[];if(Array.isArray(e.permissionWorkspaces))for(const r of e.permissionWorkspaces){const i=l(r),o=(i?l(i.permission):null)?.name;typeof o=="string"&&o.trim()&&n.push(o)}return{id:a,startDate:e.startDate??null,endDate:e.endDate??null,expirationDate:e.expirationDate??null,createdAt:e.createdAt??null,updatedAt:e.updatedAt??null,status:e.status??null,statusNote:e.statusNote??null,workspaceClientId:String(e.workspaceClientId??""),workspaceLinkTypeId:e.workspaceLinkTypeId??null,workspaceLinkTypeName:t?.name??null,senderWorkspace:d(e.senderWorkspace),creatorWorkspace:d(e.creatorWorkspace),recipientWorkspace:d(e.recipientWorkspace),permissionNames:n}}const P=`
  query Getpermissionsbycategoryname($categoryName: String!) {
    __typename
    getpermissionsbycategoryname(args: { selectedcategoryname: $categoryName }) {
      __typename
      json
    }
  }
`,B=`
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
`,G=`
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
  query GetPassagesByArea($areaId: UUID!) {
    __typename
    areaPassages(areaId: $areaId) {
      __typename
      id
      name
    }
  }
`,z="0d0c48e9-42c8-4ce2-b72e-c7b056d907aa";function q(e){return`{${e.join(",")}}`}function _(e){const a=String(e.fieldName??"").trim(),t=String(e.orderBy??"").trim().toUpperCase();return a?{fieldName:a,orderBy:t==="DESC"?"DESC":"ASC"}:null}function x(e){return Array.isArray(e)?e.map(a=>l(a)).filter(a=>a!==null).map(_).filter(a=>a!==null):[]}function J(e){return{label:String(e.label??"").trim(),value:String(e.value??"")}}function K(e){const a=String(e.slug??"").trim();return a?{slug:a,conditions:Array.isArray(e.conditions)?e.conditions.map(t=>String(t)).filter(Boolean):[],valueType:String(e.valueType??"string"),values:Array.isArray(e.values)?e.values.map(t=>l(t)).filter(t=>t!==null).map(J):[]}:null}function V(e){return{slug:String(e.slug??""),id:String(e.id??""),filterItems:Array.isArray(e.filterItems)?e.filterItems.map(a=>l(a)).filter(a=>a!==null).map(K).filter(a=>a!==null):[],orderByOptions:x(e.orderByOptions)}}function Y(e){return{slug:String(e.slug??""),conditionType:String(e.conditionType??"is"),valueType:String(e.valueType??"string"),value:e.value==null?null:String(e.value)}}function Z(e){const a=String(e.id??"");if(!a)return null;const t=l(e.orderBy);return{id:a,userId:String(e.userId??""),label:String(e.label??""),workspaceId:String(e.workspaceId??""),isGlobal:!!e.isGlobal,filterSlug:String(e.filterSlug??""),orderBy:t?_(t):null,currentFilters:Array.isArray(e.currentFilters)?e.currentFilters.map(n=>l(n)).filter(n=>n!==null).map(Y).filter(n=>n.slug!==""):[]}}function Q(e){const a=String(e.id??"");return a?{id:a,path:String(e.path??""),label:String(e.label??""),pageSlug:String(e.pageSlug??""),workspaceId:String(e.workspaceId??""),userId:String(e.userId??""),isGlobal:!!e.isGlobal,filters:Array.isArray(e.filters)?e.filters.map(t=>l(t)).filter(t=>t!==null).map(Z).filter(t=>t!==null):[]}:null}function X(e){const a=String(e.id??"");return a?{id:a,name:String(e.name??""),type:e.type??null,category:e.category??null,complement:e.complement??null}:null}function ee(e){const a=String(e.id??"");if(!a)return null;const t=l(e.type);return{id:a,name:String(e.name??""),categoryId:e.categoryId??null,categoryName:e.categoryName??null,complement:e.complement??null,activeDependents:typeof e.activeDependents=="number"?e.activeDependents:null,inactiveDependents:typeof e.inactiveDependents=="number"?e.inactiveDependents:null,totalDependents:typeof e.totalDependents=="number"?e.totalDependents:null,type:t?{id:String(t.id??""),label:String(t.label??""),slug:String(t.slug??"")}:null}}const re={async getPermissionsByCategoryName(e){const t=(await p(P,{categoryName:e})).getpermissionsbycategoryname;if(!Array.isArray(t)||t.length===0)return[];const n=t[0]?.json;return Array.isArray(n)?n.map(r=>l(r)).filter(r=>r!==null).map(r=>({id:String(r.id??""),name:String(r.name??"")})).filter(r=>r.id!==""&&r.name!==""):[]},async getClientGroups(e){const t=(await p(B,{workspaceId:e.workspaceId,groupName:e.groupName??""})).clientGroups;if(!t)return[];if(!t.success&&t.errorMessages?.length)throw new Error(t.errorMessages.join("; "));return(t.payload??[]).map(ee).filter(n=>n!==null)},async createClientGroupHierarchy(e){const a=e.parentWorkspaceLinkIds.map(o=>o.trim()).filter(Boolean);if(!e.childWorkspaceLinkId.trim()||a.length===0)throw new Error("Informe os grupos pai e filho");const t=await m(O,{p_child_workspace_link_id:e.childWorkspaceLinkId,p_parent_workspace_link_ids:q(a),p_hierarchy_type_id:e.hierarchyTypeId??z}),n=E(t.create_client_group_hierarchy);if(!n)throw new Error("Resposta invalida ao criar hierarquia entre grupos");const r=n.response;if(typeof r=="string"&&r.trim()&&r.toUpperCase()!=="OK")throw new Error(r);const i=n.error??n.message;if(i!=null&&String(i).trim())throw new Error(String(i));if(n.success===!1){const o=n.errorMessages;throw Array.isArray(o)&&o.length>0?new Error(o.map(s=>String(s)).join("; ")):new Error("Falha ao criar hierarquia de grupos")}const u=n.created;return{success:!0,created:typeof u=="number"?u:null}},async getClientGroupChildren(e){const a=await p(M,{p_parent_workspace_link_id:e.parentWorkspaceLinkId,p_user_id:e.userId});return T(a.get_client_group_children_json).map(X).filter(t=>t!==null)},async getSystemFilterBySlug(e){const t=(await p(G,{pageSlug:e})).availableFilters;return!t||typeof t!="object"?null:V(t)},async getFolderFilterConfigs(e){const t=(await p(j,{workspaceId:e.workspaceId,pageSlug:e.pageSlug})).folderFilterConfigsByPageSlugFull;return Array.isArray(t)?t.filter(n=>!!n&&typeof n=="object").map(Q).filter(n=>n!==null):[]},async getAuthorizationsWithFilter(e){const a={workspaceId:e.workspaceId,pagination:{offset:e.offset??0,limit:e.limit??30},currentFilters:e.currentFilters??[]};e.orderBy?.fieldName&&(a.orderBy={fieldName:e.orderBy.fieldName,orderBy:e.orderBy.orderBy==="DESC"?"DESC":"ASC"});const n=(await p(f,{input:a})).authorizationsWithFilter;if(!n.success)throw new Error(n.errorMessages?.join("; ")||"Falha ao carregar autorizacoes");return(n.payload??[]).map(F)},async getClients(e){const t=(await p(I,{ownerId:e.ownerId,offset:e.offset??0,limit:e.limit??25,likeParam:e.likeParam??"",status:e.status??D,type:e.type??null,hierarchyType:e.hierarchyType??"{}",selectAllClients:e.selectAllClients??!0,selectedparentclient:e.selectedParentClientId?.trim()?e.selectedParentClientId:null})).getclientsjson_v2;return!Array.isArray(t)||t.length===0?[]:c(t[0]?.json).map(r=>l(r)).filter(r=>r!==null).map(W).filter(r=>r!==null)},async getClientRecognition(e){if(!e.trim())return null;const a=await p(S,{workspaceClientId:e}),t=l(a.recognitionSettingByWorkspaceClientId);return!t||t.success===!1?null:t.payload??null},async getAreasByWorkspace(e){const t=(await p(A,{workspaceId:e.workspaceId,likeParam:e.likeParam??"",limit:e.limit??100,permission:e.permission??"{create}",relatedAreaType:e.relatedAreaType??"authorization",deviceFeatures:e.deviceFeatures??null},{timeoutMs:3e4})).getareasbyworkspacejson;return!Array.isArray(t)||t.length===0?[]:c(t[0]?.json).map(r=>l(r)).filter(r=>r!==null).map(U).filter(r=>r.id!=="")},async createAuthorization(e){const t=(await m(h,{linksjson:e.linksJson,selectedworkspaceid:e.selectedWorkspaceId,workspacelinkrecurrenceinput:e.workspaceLinkRecurrenceInput??null})).createlinkjson;if(!t)throw new Error("Resposta invalida ao criar autorizacao");return{success:t.success,ids:(t.payload??[]).map(n=>String(n.id??"")),errorMessages:t.errorMessages??[]}},async createMasterKey(e){const a={linkType:"master-key",status:"ACCEPTED",startDate:new Date().toISOString(),endDate:e.endDateIso??null,dependents:0,uses:-1,parentLinkId:null,permissionRoleId:null,statusNote:null,expirationDate:null,clients:[{id:e.recipientId}],values:null,masterArea:e.masterAreaId,areas:[],passages:e.passageIds.map(t=>({id:t,remote:!1})),childrenLinkIds:[],childrenLinkType:null,customFields:[]};return this.createAuthorization({linksJson:[a],selectedWorkspaceId:e.sessionWorkspaceId})},async createWorkspaceClient(e){const t=(await m(N,{input:e.input,workspaceLinkIds:e.workspaceLinkIds??[]})).createWorkspaceClient;if(!t)throw new Error("Resposta invalida ao criar contato");const n=t.payload;return{success:t.success,errorMessages:t.errorMessages??[],payload:n?{id:String(n.id??""),type:n.type??null,firstName:n.firstName??null,lastName:n.lastName??null,brandingName:n.brandingName??null,legalName:n.legalName??null,email:n.email??null}:null}},async cancelAuthorization(e){const t=(await m(C,{inputid:e,inputstartdate:null,inputenddate:null,inputexpirationdate:null,inputdeletedat:null,inputcreatorworkspaceid:null,inputpermissionroleid:null,inputrecipientworkspaceid:null,inputresponsibleworkspaceid:null,inputsenderworkspaceid:null,inputstatus:"CANCELLED",inputstatusnote:null,inputworkspaceclientid:null,inputworkspacelinktypeid:null,inputareaids:null,inputpassageids:null,inputdependents:null,inputCustomFields:null})).workspaceLinkUpdate;if(!t?.id)throw new Error("Nao foi possivel cancelar a autorizacao");return String(t.id)},async getWorkspaceLinksByUserId(e){const t=(await p($,{userId:e})).workspaceLink;return Array.isArray(t)?t.filter(n=>!!n&&typeof n=="object").map(v).filter(n=>n!==null):[]},async getPassagesByArea(e){const a=e.trim();return a?((await p(H,{areaId:a})).areaPassages??[]).map(n=>({id:String(n?.id??"").trim(),name:String(n?.name??"").trim()})).filter(n=>n.id):[]},async getAuthorizationHistory(e){const a=await this.getWorkspaceLinksByUserId(e),t=new Set;for(const n of a)(n.workspaceLinkTypeName??"").toLowerCase()==="authorization"&&n.workspaceClientId&&t.add(n.workspaceClientId);return[...t]}};export{D as C,re as a,ne as r,ae as s};
