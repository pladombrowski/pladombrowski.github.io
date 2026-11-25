import{S as u,ae as y,T as S,af as _,aB as g,aC as N}from"./index-DbvkOw3y.js";const C=`
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
`,E=`
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
`,k={endpoint:S.hailaJavaGraphqlEndpoint,timeoutMs:3e4},T=`
  mutation GetClients(
    $ownerId: String!
    $offset: Int
    $limit: Int
    $likeParam: String!
    $status: Any!
    $type: String
    $hierarchyType: Any
    $selectAllClients: Boolean
    $selectedparentclient: String
  ) {
    __typename
    prod_getclientsjson_v2(
      selectedfilters: $likeParam
      selectedlimit: $limit
      selectedoffset: $offset
      selectedworkspaceid: $ownerId
      selectedworkspacelinkstatus: $status
      selectedworkspacetype: $type
      selectedclienthierarchy: $hierarchyType
      selectedallclients: $selectAllClients
      selectedparentclient: $selectedparentclient
    ) {
      __typename
      json
    }
  }
`,D=`
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
`,L=`
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
`,b=`
  query GetAreasByWorkspace(
    $workspaceId: String!
    $likeParam: String
    $limit: Int
    $permission: Any
    $relatedAreaType: String
    $deviceFeatures: Any
  ) {
    __typename
    prod_getareasbyworkspacejson(
      selectedworkspaceid: $workspaceId
      selectedpermissions: $permission
      selectedlike: $likeParam
      selectedlimit: $limit
      selectedtargetlinktype: $relatedAreaType
      selectedfeatures: $deviceFeatures
    ) {
      __typename
      json
    }
  }
`,w=`
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
`,R=`
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
`,v=`
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
`,P=`
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
`,G="{PENDING, ACCEPTED, DENIED, EXPIRED, CANCELLED, REVIEW, DRAFT, BLOCKED, CURRENT, UPCOMING}";function d(e){if(Array.isArray(e))return e;if(typeof e=="string"&&e.trim())try{const n=JSON.parse(e);return Array.isArray(n)?n:[]}catch{return[]}return[]}function l(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function U(e){if(Array.isArray(e)){for(const t of e){const a=l(t),i=a?l(a.json):null;if(i)return i}return null}const n=l(e);return n?l(n.json):null}function I(e){if(!Array.isArray(e))return[];const n=[];for(const t of e){const a=l(t),i=a?l(a.json):null;i&&n.push(i)}return n}function W(e){const n=String(e.id??"");if(!n)return null;const t=d(e.deviceFeatures??e.device_features).map(a=>{if(typeof a=="string")return{id:a,name:null};const i=l(a);if(!i)return null;const r=String(i.id??"");return r?{id:r,name:i.name??null}:null}).filter(a=>a!==null);return{id:n,name:String(e.name??""),deviceFeatures:t}}function A(e,n=""){const t=l(e.passageType??e.passage_type??e.type),a=d(e.devices).map(i=>l(i)).filter(i=>i!==null).map(W).filter(i=>i!==null);return{id:String(e.id??""),name:String(e.name??""),areaId:String(e.areaId??e.area_id??n),passageTypeName:t?.name??null,devices:a}}function h(e){const n=Array.isArray(e.passages)?e.passages.map(t=>l(t)).filter(t=>t!==null).map(t=>A(t,String(e.id??""))):[];return{id:String(e.id??""),name:String(e.name??""),passages:n}}function j(e){const n=l(e.area);if(!n)return null;const t=h(n),a=d(e.passageConfigs??e.passage_configs),i=[],r=[];for(const o of a){const p=l(o);if(!p)continue;const c=String(p.passageId??p.passage_id??"");if(!c)continue;i.push(c);const s=typeof p.name=="string"&&p.name.trim()?p.name:c;r.push({id:c,name:s,areaId:String(p.areaId??p.area_id??t.id),passageTypeName:null,devices:[]})}return{area:t,passageConfigIds:i,configPassages:r}}function F(e){const n=Array.isArray(e.passages)?e.passages.map(r=>l(r)).filter(r=>r!==null).map(r=>A(r,String(e.id??""))):[],t=Array.isArray(e.areas)?e.areas.map(r=>l(r)).filter(r=>r!==null).map(h):[],i=d(e.relatedAreaViews??e.related_area_views).map(r=>l(r)).filter(r=>r!==null).map(j).filter(r=>r!==null);return{id:String(e.id??""),name:String(e.name??""),workspaceId:e.workspaceId??null,passages:n,areas:t,relatedAreas:i,areaSharing:e.areaSharing??e.area_sharing??null}}function B(e){const n=l(e.workspace_client??e.workspaceClient)??e,t=String(n.id??"");if(!t)return null;const a=d(n.groups).map(s=>l(s)).filter(s=>s!==null).map(s=>({id:s.id??null,name:String(s.name??"").trim(),typeId:s.typeId??null,categoryId:s.categoryId??null,complement:s.complement??null})),i=d(n.contract).map(s=>l(s)).filter(s=>s!==null).map(s=>({id:s.id??null,status:s.status??null,templateName:s.templateName??null})),r=d(n.primaryLink).map(s=>l(s)).filter(s=>s!==null),o=r.flatMap(s=>d(s.permissions)).map(s=>String(l(s)?.id??"").trim()).filter(s=>s!==""),p=[...new Set(r.flatMap(s=>d(s.permissions)).map(s=>{const f=l(s);return String(f?.name??f?.label??f?.permissionRole??"").trim()}).filter(s=>s!==""))],c=r[0]?.status??null;return{id:t,name:n.name??null,type:n.type??"PERSON",email:n.email??null,phone:n.phone??null,status:n.status??null,firstName:n.firstName??null,lastName:n.lastName??null,legalName:n.legalName??null,brandingName:n.brandingName??null,logoPath:n.logoPath??null,clientRecognition:n.clientRecognition,facialRecognition:n.facialRecognition??null,groups:a,contract:i,primaryLinkPermissionIds:o,primaryLinkPermissionNames:p,primaryLinkStatus:c}}function m(e){if(!e||typeof e!="object")return null;const n=e;return{id:String(n.id??""),email:n.email??null,phone:n.phone??null,type:n.type??null,firstName:n.firstName??null,lastName:n.lastName??null,brandingName:n.brandingName??null}}function O(e){if(!e||typeof e!="object")return null;const n=e,t=n.area??n;if(!t.id)return null;const a=Array.isArray(t.passages)?t.passages:[],i=t.areaHierarchy&&typeof t.areaHierarchy=="object"?t.areaHierarchy:null;return{id:String(t.id),name:String(t.name??""),parentName:i?.name??null,passages:a.filter(r=>!!r&&typeof r=="object").map(r=>({id:String(r.id??""),name:String(r.name??"")}))}}function M(e){if(!e||typeof e!="object")return null;const n=e;return{id:String(n.id??""),startDate:n.startDate??null,endDate:n.endDate??null,copies:typeof n.copies=="number"?n.copies:null,areas:Array.isArray(n.areas)?n.areas.filter(t=>!!t&&typeof t=="object").map(t=>({id:String(t.id??""),name:String(t.name??"")})):[],passages:Array.isArray(n.passages)?n.passages.filter(t=>!!t&&typeof t=="object").map(t=>({id:String(t.id??""),name:String(t.name??""),areaId:t.areaId??null})):[]}}function J(e){const n=Array.isArray(e.groupsData)?e.groupsData:[],t=Array.isArray(e.areas)?e.areas:[],a=Array.isArray(e.workspace_client_keys)?e.workspace_client_keys:[],i=e.workspaceLinkType;return{id:String(e.id??""),startDate:e.startDate??null,endDate:e.endDate??null,createdAt:e.createdAt??null,status:e.status??null,clientPhotoUrl:e.clientPhotoUrl??null,workspaceLinkTypeName:i?.name??null,groupsData:n.filter(r=>!!r&&typeof r=="object").map(r=>({id:String(r.id??""),name:String(r.name??""),categoryId:r.categoryId??null,categoryName:r.categoryName??null,workspaceLinkParentId:r.workspaceLinkParentId??null})),areas:t.map(O).filter(r=>r!==null),keys:a.map(M).filter(r=>r!==null),workspaceClient:m(e.workspaceClient),recipientWorkspace:m(e.recipientWorkspace),senderWorkspace:m(e.senderWorkspace),creatorWorkspace:m(e.creatorWorkspace)}}function ye(e){return{slug:"status",conditionType:"is",value:e,valueType:"string"}}function ge(e){return{slug:"recipient_workspace",conditionType:"contains",value:e.trim(),valueType:"string"}}function H(e){const n=String(e.id??"");if(!n)return null;const t=l(e.workspaceLinkType),a=[];if(Array.isArray(e.permissionWorkspaces))for(const i of e.permissionWorkspaces){const r=l(i),p=(r?l(r.permission):null)?.name;typeof p=="string"&&p.trim()&&a.push(p)}return{id:n,startDate:e.startDate??null,endDate:e.endDate??null,expirationDate:e.expirationDate??null,createdAt:e.createdAt??null,updatedAt:e.updatedAt??null,status:e.status??null,statusNote:e.statusNote??null,workspaceClientId:String(e.workspaceClientId??""),workspaceLinkTypeId:e.workspaceLinkTypeId??null,workspaceLinkTypeName:t?.name??null,senderWorkspace:m(e.senderWorkspace),creatorWorkspace:m(e.creatorWorkspace),recipientWorkspace:m(e.recipientWorkspace),permissionNames:a}}const q=`
  query Getpermissionsbycategoryname($categoryName: String!) {
    __typename
    getpermissionsbycategoryname(args: { selectedcategoryname: $categoryName }) {
      __typename
      json
    }
  }
`,z=`
  mutation Getpermissionsbycategoryname($categoryName: String!) {
    __typename
    prod_getpermissionsbycategoryname(selectedcategoryname: $categoryName) {
      __typename
      json
    }
  }
`,V=`
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
`,Y=`
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
`,x=`
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
`,K=`
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
`,Z=`
  mutation CreateClientGroupHierarchy(
    $p_child_workspace_link_id: String!
    $p_parent_workspace_link_ids: Any!
    $p_hierarchy_type_id: String!
  ) {
    __typename
    prod_create_client_group_hierarchy(
      p_child_workspace_link_id: $p_child_workspace_link_id
      p_parent_workspace_link_ids: $p_parent_workspace_link_ids
      p_hierarchy_type_id: $p_hierarchy_type_id
    ) {
      __typename
      json
    }
  }
`,Q=`
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
`,X=`
  mutation GetClientGroupChildren(
    $p_parent_workspace_link_id: String!
    $p_user_id: String!
  ) {
    __typename
    prod_get_client_group_children_json(
      p_parent_workspace_link_id: $p_parent_workspace_link_id
      p_user_id: $p_user_id
    ) {
      __typename
      json
    }
  }
`,ee=`
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
`,te=`
  query GetPassagesByArea($areaId: UUID!) {
    __typename
    areaPassages(areaId: $areaId) {
      __typename
      id
      name
    }
  }
`,ne="0d0c48e9-42c8-4ce2-b72e-c7b056d907aa";function ae(e){return`{${e.join(",")}}`}function $(e){const n=String(e.fieldName??"").trim(),t=String(e.orderBy??"").trim().toUpperCase();return n?{fieldName:n,orderBy:t==="DESC"?"DESC":"ASC"}:null}function re(e){return Array.isArray(e)?e.map(n=>l(n)).filter(n=>n!==null).map($).filter(n=>n!==null):[]}function ie(e){return{label:String(e.label??"").trim(),value:String(e.value??"")}}function se(e){const n=String(e.slug??"").trim();return n?{slug:n,conditions:Array.isArray(e.conditions)?e.conditions.map(t=>String(t)).filter(Boolean):[],valueType:String(e.valueType??"string"),values:Array.isArray(e.values)?e.values.map(t=>l(t)).filter(t=>t!==null).map(ie):[]}:null}function le(e){return{slug:String(e.slug??""),id:String(e.id??""),filterItems:Array.isArray(e.filterItems)?e.filterItems.map(n=>l(n)).filter(n=>n!==null).map(se).filter(n=>n!==null):[],orderByOptions:re(e.orderByOptions)}}function oe(e){return{slug:String(e.slug??""),conditionType:String(e.conditionType??"is"),valueType:String(e.valueType??"string"),value:e.value==null?null:String(e.value)}}function pe(e){const n=String(e.id??"");if(!n)return null;const t=l(e.orderBy);return{id:n,userId:String(e.userId??""),label:String(e.label??""),workspaceId:String(e.workspaceId??""),isGlobal:!!e.isGlobal,filterSlug:String(e.filterSlug??""),orderBy:t?$(t):null,currentFilters:Array.isArray(e.currentFilters)?e.currentFilters.map(a=>l(a)).filter(a=>a!==null).map(oe).filter(a=>a.slug!==""):[]}}function ce(e){const n=String(e.id??"");return n?{id:n,path:String(e.path??""),label:String(e.label??""),pageSlug:String(e.pageSlug??""),workspaceId:String(e.workspaceId??""),userId:String(e.userId??""),isGlobal:!!e.isGlobal,filters:Array.isArray(e.filters)?e.filters.map(t=>l(t)).filter(t=>t!==null).map(pe).filter(t=>t!==null):[]}:null}function ue(e){const n=String(e.id??"");return!n||e.success===!1||e.error!=null||e.message!=null?null:{id:n,name:String(e.name??""),type:e.type??null,category:e.category??null,complement:e.complement??null}}function de(e){const n=String(e.id??"");if(!n||e.success===!1||e.error!=null||e.message!=null)return null;const t=e.depth,a=typeof t=="number"&&Number.isFinite(t)?t:Number.parseInt(String(t??"1"),10);return{id:n,name:String(e.name??"").trim()||n,type:e.type??null,category:e.category??null,complement:e.complement??null,depth:Number.isFinite(a)&&a>0?a:1}}function me(e){const n=String(e.id??"");if(!n)return null;const t=l(e.type);return{id:n,name:String(e.name??""),categoryId:e.categoryId??null,categoryName:e.categoryName??null,complement:e.complement??null,activeDependents:typeof e.activeDependents=="number"?e.activeDependents:null,inactiveDependents:typeof e.inactiveDependents=="number"?e.inactiveDependents:null,totalDependents:typeof e.totalDependents=="number"?e.totalDependents:null,type:t?{id:String(t.id??""),label:String(t.label??""),slug:String(t.slug??"")}:null}}const ke={async getPermissionsByCategoryName(e,n){const t=_(g,n)==="java",a=await u(t?z:q,{categoryName:e},t?k:{}),i=t?a.prod_getpermissionsbycategoryname:a.getpermissionsbycategoryname;if(!Array.isArray(i)||i.length===0)return[];const r=i[0]?.json;return Array.isArray(r)?r.map(o=>l(o)).filter(o=>o!==null).map(o=>({id:String(o.id??""),name:String(o.name??"")})).filter(o=>o.id!==""&&o.name!==""):[]},async getClientGroups(e){const t=(await u(V,{workspaceId:e.workspaceId,groupName:e.groupName??""})).clientGroups;if(!t)return[];if(!t.success&&t.errorMessages?.length)throw new Error(t.errorMessages.join("; "));return(t.payload??[]).map(me).filter(a=>a!==null)},async createClientGroupHierarchy(e){const n=e.parentWorkspaceLinkIds.map(c=>c.trim()).filter(Boolean);if(!e.childWorkspaceLinkId.trim()||n.length===0)throw new Error("Informe os grupos pai e filho");const t=_(g,e.mode)==="java",a=await y(t?Z:K,{p_child_workspace_link_id:e.childWorkspaceLinkId,p_parent_workspace_link_ids:ae(n),p_hierarchy_type_id:e.hierarchyTypeId??ne},t?k:{}),i=U(t?a.prod_create_client_group_hierarchy:a.create_client_group_hierarchy);if(!i)throw new Error("Resposta invalida ao criar hierarquia entre grupos");const r=i.response;if(typeof r=="string"&&r.trim()&&r.toUpperCase()!=="OK")throw new Error(r);const o=i.error??i.message;if(o!=null&&String(o).trim())throw new Error(String(o));if(i.success===!1){const c=i.errorMessages;throw Array.isArray(c)&&c.length>0?new Error(c.map(s=>String(s)).join("; ")):new Error("Falha ao criar hierarquia de grupos")}const p=i.created;return{success:!0,created:typeof p=="number"?p:null}},async getClientGroupChildren(e){const n=_(g,e.mode)==="java",t=await u(n?X:Q,{p_parent_workspace_link_id:e.parentWorkspaceLinkId,p_user_id:e.userId},n?k:{});return I(n?t.prod_get_client_group_children_json:t.get_client_group_children_json).map(ue).filter(a=>a!==null)},async getClientGroupParents(e){const n=await u(ee,{p_child_workspace_link_id:e.childWorkspaceLinkId,p_user_id:e.userId});return I(n.get_client_group_parents_json).map(de).filter(t=>t!==null).sort((t,a)=>a.depth-t.depth||t.name.localeCompare(a.name,"pt-BR"))},async getSystemFilterBySlug(e){const t=(await u(Y,{pageSlug:e})).availableFilters;return!t||typeof t!="object"?null:le(t)},async getFolderFilterConfigs(e){const t=(await u(x,{workspaceId:e.workspaceId,pageSlug:e.pageSlug})).folderFilterConfigsByPageSlugFull;return Array.isArray(t)?t.filter(a=>!!a&&typeof a=="object").map(ce).filter(a=>a!==null):[]},async getAuthorizationsWithFilter(e){const n={workspaceId:e.workspaceId,pagination:{offset:e.offset??0,limit:e.limit??30},currentFilters:e.currentFilters??[]};e.orderBy?.fieldName&&(n.orderBy={fieldName:e.orderBy.fieldName,orderBy:e.orderBy.orderBy==="DESC"?"DESC":"ASC"});const a=(await u(C,{input:n})).authorizationsWithFilter;if(!a.success)throw new Error(a.errorMessages?.join("; ")||"Falha ao carregar autorizacoes");return(a.payload??[]).map(J)},async getClients(e){const n=_(g,e.mode)==="java",t=await u(n?T:E,{ownerId:e.ownerId,offset:e.offset??0,limit:e.limit??25,likeParam:e.likeParam??"",status:e.status??G,type:e.type??null,hierarchyType:e.hierarchyType??"{}",selectAllClients:e.selectAllClients??!0,selectedparentclient:e.selectedParentClientId?.trim()?e.selectedParentClientId:null},n?k:{}),a=n?t.prod_getclientsjson_v2:t.getclientsjson_v2;return!Array.isArray(a)||a.length===0?[]:d(a[0]?.json).map(r=>l(r)).filter(r=>r!==null).map(B).filter(r=>r!==null)},async getClientRecognition(e){if(!e.trim())return null;const n=await u(D,{workspaceClientId:e}),t=l(n.recognitionSettingByWorkspaceClientId);return!t||t.success===!1?null:t.payload??null},async getAreasByWorkspace(e){const n=_(N)==="java",t=await u(n?b:L,{workspaceId:e.workspaceId,likeParam:e.likeParam??"",limit:e.limit??100,permission:e.permission??"{create}",relatedAreaType:e.relatedAreaType??"authorization",deviceFeatures:e.deviceFeatures??null},n?{endpoint:S.hailaJavaGraphqlEndpoint,timeoutMs:3e4}:{timeoutMs:3e4}),a=n?t.prod_getareasbyworkspacejson:t.getareasbyworkspacejson;return!Array.isArray(a)||a.length===0?[]:d(a[0]?.json).map(r=>l(r)).filter(r=>r!==null).map(F).filter(r=>r.id!=="")},async createAuthorization(e){const t=(await y(w,{linksjson:e.linksJson,selectedworkspaceid:e.selectedWorkspaceId,workspacelinkrecurrenceinput:e.workspaceLinkRecurrenceInput??null})).createlinkjson;if(!t)throw new Error("Resposta invalida ao criar autorizacao");return{success:t.success,ids:(t.payload??[]).map(a=>String(a.id??"")),errorMessages:t.errorMessages??[]}},async createMasterKey(e){const n={linkType:"master-key",status:"ACCEPTED",startDate:new Date().toISOString(),endDate:e.endDateIso??null,dependents:0,uses:-1,parentLinkId:null,permissionRoleId:null,statusNote:null,expirationDate:null,clients:[{id:e.recipientId}],values:null,masterArea:e.masterAreaId,areas:[],passages:e.passageIds.map(t=>({id:t,remote:!1})),childrenLinkIds:[],childrenLinkType:null,customFields:[]};return this.createAuthorization({linksJson:[n],selectedWorkspaceId:e.sessionWorkspaceId})},async createWorkspaceClient(e){const t=(await y(R,{input:e.input,workspaceLinkIds:e.workspaceLinkIds??[]})).createWorkspaceClient;if(!t)throw new Error("Resposta invalida ao criar contato");const a=t.payload;return{success:t.success,errorMessages:t.errorMessages??[],payload:a?{id:String(a.id??""),type:a.type??null,firstName:a.firstName??null,lastName:a.lastName??null,brandingName:a.brandingName??null,legalName:a.legalName??null,email:a.email??null}:null}},async cancelAuthorization(e){const t=(await y(P,{inputid:e,inputstartdate:null,inputenddate:null,inputexpirationdate:null,inputdeletedat:null,inputcreatorworkspaceid:null,inputpermissionroleid:null,inputrecipientworkspaceid:null,inputresponsibleworkspaceid:null,inputsenderworkspaceid:null,inputstatus:"CANCELLED",inputstatusnote:null,inputworkspaceclientid:null,inputworkspacelinktypeid:null,inputareaids:null,inputpassageids:null,inputdependents:null,inputCustomFields:null})).workspaceLinkUpdate;if(!t?.id)throw new Error("Nao foi possivel cancelar a autorizacao");return String(t.id)},async getWorkspaceLinksByUserId(e){const t=(await u(v,{userId:e})).workspaceLink;return Array.isArray(t)?t.filter(a=>!!a&&typeof a=="object").map(H).filter(a=>a!==null):[]},async getPassagesByArea(e){const n=e.trim();return n?((await u(te,{areaId:n})).areaPassages??[]).map(a=>({id:String(a?.id??"").trim(),name:String(a?.name??"").trim()})).filter(a=>a.id):[]},async getAuthorizationHistory(e){const n=await this.getWorkspaceLinksByUserId(e),t=new Set;for(const a of n)(a.workspaceLinkTypeName??"").toLowerCase()==="authorization"&&a.workspaceClientId&&t.add(a.workspaceClientId);return[...t]}};export{G as C,ke as a,ge as r,ye as s};
