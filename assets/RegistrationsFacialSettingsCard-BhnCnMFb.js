import{ae as j,T as pe,S as f,ay as K,af as C,cq as w,cr as ge,$ as ke}from"./index-BnjPmAJg.js";import{g as Q}from"./general-preference.service-CWlfKYar.js";import{s as fe}from"./smart-auth.service-CKdUUXy6.js";import{p as Ie}from"./contract-DwGPrr_G.js";import{f as Se,B as q,a as M,D as Ce,R as $e}from"./registration-BF0haBO6.js";import{M as we,W as Ae,d as A,j as v,k as T,t as b,N,f as U,y as O,e as x,x as Y,B as Ne,F as Z,A as X,a as L,D as z}from"./vue-Uf6PQK4d.js";import{n as he,f as ee,q as ve,v as Ee,l as te}from"./primeui-C_SbtksU.js";import{f as Te,F as be}from"./face-recognition.service-CKL3z120.js";import{C as De}from"./CameraCaptureDialog-D4Gejf-Y.js";import{_ as Re}from"./_plugin-vue_export-helper-DlAUqK2U.js";function i(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)?e:null}function d(e){return Array.isArray(e)?e:[]}function a(e){if(e==null)return null;const t=String(e).trim();return t===""?null:t}function I(e){if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"&&e.trim()!==""){const t=Number(e);return Number.isFinite(t)?t:null}return null}function D(e){return e===!0||e==="true"}function k(e){if(typeof e!="string")return e;const t=e.trim();if(!t)return null;if(!t.startsWith("{")&&!t.startsWith("["))return e;try{return JSON.parse(t)}catch{return e}}function P(e){const t=k(e);return(Array.isArray(t)?t:t?[t]:[]).map(n=>i(n)).filter(n=>n!==null)}function ae(e,t){if(!e||e.success!==!0){const s=d(e?.errorMessages).map(n=>String(n));throw new Error(s.length?s.join("; "):t)}}function ne(e,t){const s=Array.isArray(e)?e[0]:e,n=i(s),r=i(k(n?.json))??n;if(!r||r.success!==!1)return;const c=d(r.errorMessages).map(o=>String(o).trim()).filter(Boolean).join("; ");throw new Error(a(r.message)??(c||t))}function E(e){if(!e)return null;const t=a(e.id);return t?{id:t,type:a(e.type),firstName:a(e.firstName),lastName:a(e.lastName),brandingName:a(e.brandingName),legalName:a(e.legalName),email:a(e.email),phone:a(e.phone),logoPath:a(e.logoPath)}:null}function V(e){const t=i(e);if(!t)return null;const s=a(t.id);return s?{id:s,key:a(t.key),url:a(t.url),createdAt:a(t.createdAt),deletedAt:a(t.deletedAt)}:null}function le(e){switch((e??"").trim().toLowerCase()){case"empresa":case"legal_person":return"LEGAL_PERSON";case"pessoa":case"person":return"PERSON";default:return e?.trim()||"PERSON"}}const je=`
  query GetPendingApproval($workspaceId: UUID!) {
    __typename
    pendingApprovals(workspaceId: $workspaceId) {
      __typename
      success
      errorMessages
      payload {
        __typename
        inviteLinkName
        workspaceLink {
          __typename
          id
          status
          createdAt
          workspaceClient {
            __typename
            id
            type
            firstName
            lastName
            brandingName
            legalName
            email
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
    }
    facialRecognitionPending(selectedWorkspaceId: $workspaceId) {
      __typename
      success
      payload {
        __typename
        parentWorkspaceClient {
          __typename
          id
          type
          firstName
          lastName
          brandingName
          legalName
          email
        }
        workspaceClient {
          __typename
          id
          type
          firstName
          lastName
          brandingName
          legalName
          email
        }
        fileUpload {
          __typename
          id
          url
        }
        permissions {
          __typename
          id
          name
        }
      }
      errorMessages
    }
  }
`,Pe=`
  query GetWorkspacePendingApprovalsJson($workspaceId: uuid!) {
    __typename
    get_workspace_pending_approvals_json(args: { p_workspace_id: $workspaceId }) {
      __typename
      json
    }
  }
`,Ue=`
  mutation SetWorkspaceClientFacialRecognitionStatus($clientId: UUID!, $status: String!) {
    __typename
    setWorkspaceClientFacialRecognitionStatus(workspaceClientId: $clientId, status: $status) {
      __typename
      success
      errorMessages
    }
  }
`,Le=`
  mutation AddWorkspaceClientPermissions(
    $workspaceId: uuid!
    $workspaceClientId: uuid!
    $userId: uuid!
    $permissionIds: jsonb!
  ) {
    __typename
    add_workspace_client_permissions_json(
      args: {
        p_workspace_id: $workspaceId
        p_workspace_client_id: $workspaceClientId
        p_user_id: $userId
        p_permission_ids: $permissionIds
      }
    ) {
      __typename
      json
    }
  }
`,We=`
  mutation AddWorkspaceClientPermissions(
    $workspaceId: String!
    $workspaceClientId: String!
    $userId: String!
    $permissionIds: Any!
  ) {
    __typename
    prod_add_workspace_client_permissions_json(
      p_workspace_id: $workspaceId
      p_workspace_client_id: $workspaceClientId
      p_user_id: $userId
      p_permission_ids: $permissionIds
    ) {
      __typename
      json
    }
  }
`,Oe=`
  mutation RemoveWorkspaceClientPermissions(
    $userId: uuid!
    $workspaceId: uuid!
    $workspaceClientId: uuid!
    $permissionIds: jsonb!
  ) {
    __typename
    remove_workspace_client_permissions_json(
      args: {
        p_user_id: $userId
        p_workspace_id: $workspaceId
        p_workspace_client_id: $workspaceClientId
        p_permission_ids: $permissionIds
      }
    ) {
      __typename
      json
    }
  }
`,Be=`
  query GetClientsNoPagination(
    $ownerId: uuid
    $likeParam: String!
    $status: _varchar!
    $type: String
    $hierarchyType: _varchar
    $selectAllClients: Boolean
    $selectedparentclient: uuid
  ) {
    __typename
    getclients_v3_no_paginationjson(
      args: {
        selectedfilters: $likeParam
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
`,Ge=`
  mutation GetClientsNoPagination(
    $ownerId: String!
    $likeParam: String!
    $status: Any!
    $type: String
    $hierarchyType: Any
    $selectAllClients: Boolean
    $selectedparentclient: String
  ) {
    __typename
    prod_getclients_v3_no_paginationjson(
      selectedfilters: $likeParam
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
`,Fe=`
  query CheckClientByEmail($email: String!, $ownerWorkspaceId: UUID!, $type: String!) {
    __typename
    workspace_client: checkClientByEmail(
      ownerWorkspaceId: $ownerWorkspaceId
      email: $email
      type: $type
    ) {
      __typename
      id
      ownerWorkspaceId
    }
  }
`,qe=`
  query CheckClientByPhone($phone: String!, $ownerWorkspaceId: uuid!, $type: String!) {
    __typename
    check_client_by_phone(
      args: { p_phone: $phone, p_owner_workspace_id: $ownerWorkspaceId, p_type: $type }
    ) {
      __typename
      json
    }
  }
`,Me=`
  query GetClientData($clientId: uuid!, $clientIdCore: UUID!) {
    __typename
    getclientbyidjson(args: { selectedclientid: $clientId }) {
      __typename
      json
    }
    groupsByClient(clientId: $clientIdCore) {
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
        total
        type {
          __typename
          id
          label
          slug
        }
        complement
      }
      errorMessages
    }
    recognitionSettingByWorkspaceClientId(workspaceClientId: $clientIdCore) {
      __typename
      success
      payload {
        __typename
        syncOption: recognitionOption
        requestManagerApproval
        status
        fileUpload {
          __typename
          id
          key
          url
          createdAt
          deletedAt
        }
        originalFileUpload {
          __typename
          id
          key
          url
          createdAt
          deletedAt
        }
      }
      errorMessages
    }
    facialRecognitionHistory(workspaceClientId: $clientIdCore) {
      __typename
      success
      payload {
        __typename
        changeType
        fileUploadId
        fileUpload {
          __typename
          id
          key
          url
        }
        workspaceClient {
          __typename
          id
          type
          firstName
          lastName
          brandingName
          legalName
        }
        responsibleWorkspace {
          __typename
          id
          type
          firstName
          lastName
          brandingName
          legalName
        }
        createdAt
      }
      errorMessages
    }
  }
`,ze=`
  mutation UpdateUserLink(
    $inputWorkspaceClient: UUID!
    $inputCreatorUserId: UUID!
    $inputSenderWorkspace: UUID!
    $inputEmail: String!
    $inputType: String!
    $inputFirstName: String!
    $inputLastName: String!
    $inputLogoPath: String!
    $inputLegalName: String!
    $inputBrandingName: String!
    $inputAddress: String!
    $inputNumber: String!
    $inputCity: String!
    $inputZipCode: String!
    $inputComplement: String!
    $inputPermission: UUID!
    $inputEmailSync: String!
    $inputTypeSync: String!
    $inputFirstNameSync: String!
    $inputLastNameSync: String!
    $inputLogoPathSync: String!
    $inputEmailOptSync: String!
    $inputLegalNameSync: String!
    $inputBrandingNameSync: String!
    $inputAddressSync: String!
    $inputNumberSync: String!
    $inputCitySync: String!
    $inputZipCodeSync: String!
    $inputComplementSync: String!
    $inputOwnerWorkspaceSync: String!
    $inputPhone: String!
    $inputPhoneSync: String!
    $inputParentWorkspaceClient: UUID
    $inputPermissionRole: String!
    $inputDescription: String!
    $inputDescriptionSync: String!
    $inputCustomFields: String
    $inputDocuments: [WorkspaceClientUpdateInputDocumentInput!]
    $inputGroupIds: [UUID!]
    $workspaceClientRecognitionSettings: WorkspaceClientRecognitionSettingsInput
  ) {
    __typename
    UpdateWorkspaceClient_CORE(
      input: {
        id: $inputWorkspaceClient
        creatorUserId: $inputCreatorUserId
        senderWorkspaceId: $inputSenderWorkspace
        email: $inputEmail
        type: $inputType
        firstName: $inputFirstName
        lastName: $inputLastName
        logoPath: $inputLogoPath
        legalName: $inputLegalName
        brandingName: $inputBrandingName
        address: $inputAddress
        number: $inputNumber
        city: $inputCity
        zipCode: $inputZipCode
        complement: $inputComplement
        permission: $inputPermission
        emailSync: $inputEmailSync
        typeSync: $inputTypeSync
        firstNameSync: $inputFirstNameSync
        lastNameSync: $inputLastNameSync
        logoPathSync: $inputLogoPathSync
        emailOptSync: $inputEmailOptSync
        legalNameSync: $inputLegalNameSync
        brandingNameSync: $inputBrandingNameSync
        addressSync: $inputAddressSync
        numberSync: $inputNumberSync
        citySync: $inputCitySync
        zipCodeSync: $inputZipCodeSync
        complementSync: $inputComplementSync
        ownerWorkspaceSync: $inputOwnerWorkspaceSync
        phone: $inputPhone
        phoneSync: $inputPhoneSync
        parentWorkspaceClient: $inputParentWorkspaceClient
        permissionRole: $inputPermissionRole
        description: $inputDescription
        descriptionSync: $inputDescriptionSync
        customFields: $inputCustomFields
        groupIds: $inputGroupIds
        workspaceClientRecognitionSettings: $workspaceClientRecognitionSettings
      }
      inputDocuments: $inputDocuments
    ) {
      __typename
      success
      errorMessages
    }
  }
`,Je=`
  query GetClientContractsJsonb($p_workspace_client_id: uuid!, $p_selected_workspace_id: uuid!) {
    __typename
    get_client_contracts_jsonb(
      args: {
        p_workspace_client_id: $p_workspace_client_id
        p_selected_workspace_id: $p_selected_workspace_id
      }
    ) {
      __typename
      json
    }
  }
`,Ve=`
  query GetContractsByClient($clientId: UUID!) {
    __typename
    workspace_link_contract: contractsByClient(workspaceClientId: $clientId) {
      __typename
      id
      status
      priority
      startDate
      endDate
      payDay
      renovationDay
      workspace_link_contract_template: template {
        __typename
        id
        name
        workspace_link_contract_cycle_type: cycleType {
          __typename
          id
          name
        }
        value
        autoRenew
      }
      workspace {
        __typename
        id
        email
        firstName
        lastName
        brandingName
        legalName
        type
        phone
      }
    }
  }
`,He=`
  query GetClientAuthorizedAreasPassages(
    $p_workspace_client_id: uuid!
    $p_user_id: uuid!
    $p_workspace_id: uuid!
  ) {
    __typename
    get_workspace_client_authorized_areas_passages_json(
      args: {
        p_workspace_client_id: $p_workspace_client_id
        p_user_id: $p_user_id
        p_workspace_id: $p_workspace_id
      }
    ) {
      __typename
      json
    }
  }
`,Ke=`
  query GetRecurrentAuthorizationsByWorkspaceClient(
    $p_workspace_client_id: uuid!
    $p_limit: Int!
    $p_offset: Int!
  ) {
    __typename
    get_recurrent_authorizations_by_workspace_client_json(
      args: {
        p_workspace_client_id: $p_workspace_client_id
        p_limit: $p_limit
        p_offset: $p_offset
      }
    ) {
      __typename
      json
    }
  }
`,Qe=`
  query GetGroupsByClient($clientId: UUID!) {
    __typename
    groupsByClient(clientId: $clientId) {
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
        total
        type {
          __typename
          id
          label
          slug
        }
        complement
      }
      errorMessages
    }
  }
`,xe=`
  query GetClientTemplateCustomFields($args: getclienttemplatecustomfieldsjson_args!) {
    __typename
    getclienttemplatecustomfieldsjson(args: $args) {
      __typename
      json
    }
  }
`,Ye=`
  query ClientCustomFieldList($workspaceId: String!, $personType: String) {
    __typename
    prod_client_custom_field_list(p_workspace_id: $workspaceId, p_person_type: $personType) {
      __typename
      json
    }
  }
`,Ze=`
  query GetWorkspaceDocumentClientFields($workspaceId: UUID!) {
    __typename
    workspaceDocumentClientFields(workspaceId: $workspaceId) {
      __typename
      success
      payload {
        __typename
        id
        label
        templateId: clientDocumentTemplateId
        mandatory
        mandatoryFile
        mask
        order
        personType
      }
      errorMessages
    }
  }
`,Xe=`
  query GetWorkspaceDocumentClients($workspaceId: UUID!, $clientId: UUID!) {
    __typename
    workspaceDocumentClients(selectedWorkspaceId: $workspaceId, workspaceClientId: $clientId) {
      __typename
      success
      payload {
        __typename
        id
        isSync: workspaceClientSync
        type
        value
        workspaceClientDocumentTemplateId
        workspaceClientDocumentTemplate {
          __typename
          label
          mandatory
          personType
        }
        workspaceClientDocumentFiles {
          __typename
          id
          createdAt
          updatedAt
          fileUploadId
          workspaceDocumentFileId
          workspaceClientDocumentId
        }
      }
      errorMessages
    }
  }
`,et=`
  query GetWorkspaceClientTags($p_workspace_client_id: uuid!, $p_workspace_id: uuid!) {
    __typename
    get_workspace_client_tags_json(
      args: { p_workspace_client_id: $p_workspace_client_id, p_workspace_id: $p_workspace_id }
    ) {
      __typename
      json
    }
  }
`,$={endpoint:pe.hailaJavaGraphqlEndpoint},tt=`
  query CheckClientByPhone($phone: String!, $ownerWorkspaceId: String!, $type: String!) {
    __typename
    prod_check_client_by_phone(
      p_phone: $phone
      p_owner_workspace_id: $ownerWorkspaceId
      p_type: $type
    ) {
      __typename
      json
    }
  }
`,at=`
  query GetClientContractsJsonb($p_workspace_client_id: String!, $p_selected_workspace_id: String!) {
    __typename
    prod_get_client_contracts_jsonb(
      p_workspace_client_id: $p_workspace_client_id
      p_selected_workspace_id: $p_selected_workspace_id
    ) {
      __typename
      json
    }
  }
`,nt=`
  query GetClientAuthorizedAreasPassages(
    $p_workspace_client_id: String!
    $p_user_id: String!
    $p_workspace_id: String!
  ) {
    __typename
    prod_get_workspace_client_authorized_areas_passages_json(
      p_workspace_client_id: $p_workspace_client_id
      p_user_id: $p_user_id
      p_workspace_id: $p_workspace_id
    ) {
      __typename
      json
    }
  }
`,st=`
  query GetRecurrentAuthorizationsByWorkspaceClient(
    $p_workspace_client_id: String!
    $p_limit: Int!
    $p_offset: Int!
  ) {
    __typename
    prod_get_recurrent_authorizations_by_workspace_client_json(
      p_workspace_client_id: $p_workspace_client_id
      p_limit: $p_limit
      p_offset: $p_offset
    ) {
      __typename
      json
    }
  }
`,it=`
  query GetWorkspaceClientTags($p_workspace_client_id: String!, $p_workspace_id: String!) {
    __typename
    prod_get_workspace_client_tags_json(
      p_workspace_client_id: $p_workspace_client_id
      p_workspace_id: $p_workspace_id
    ) {
      __typename
      json
    }
  }
`,rt=`
  mutation SetWorkspaceClientTag(
    $p_action: String!
    $p_id: uuid
    $p_workspace_id: uuid!
    $p_code: String!
    $p_workspace_client_id: uuid!
    $p_workspace_client_vehicle_id: uuid
    $p_status: String!
    $p_type: String!
  ) {
    __typename
    set_workspace_client_tag(
      args: {
        p_action: $p_action
        p_id: $p_id
        p_workspace_id: $p_workspace_id
        p_code: $p_code
        p_workspace_client_id: $p_workspace_client_id
        p_workspace_client_vehicle_id: $p_workspace_client_vehicle_id
        p_status: $p_status
        p_type: $p_type
      }
    ) {
      __typename
      json
    }
  }
`,ot=`
  mutation SetWorkspaceClientTag(
    $p_action: String!
    $p_id: String
    $p_workspace_id: String!
    $p_code: String!
    $p_workspace_client_id: String!
    $p_workspace_client_vehicle_id: String
    $p_status: String!
    $p_type: String!
  ) {
    __typename
    prod_set_workspace_client_tag(
      p_action: $p_action
      p_id: $p_id
      p_workspace_id: $p_workspace_id
      p_code: $p_code
      p_workspace_client_id: $p_workspace_client_id
      p_workspace_client_vehicle_id: $p_workspace_client_vehicle_id
      p_status: $p_status
      p_type: $p_type
    ) {
      __typename
      json
    }
  }
`,se=`
  query ListRegistrationsBatchAddDrafts($selectedworkspaceid: uuid!, $selectedslug: String!) {
    __typename
    getonboardingdraftsbyworkspacejson(
      args: { selectedworkspaceid: $selectedworkspaceid, selectedslug: $selectedslug }
    ) {
      __typename
      json
    }
  }
`,ie=`
  query ListRegistrationsBatchAddDrafts(
    $selectedworkspaceid: String!
    $selectedslug: String!
  ) {
    __typename
    prod_getonboardingdraftsbyworkspacejson(
      selectedworkspaceid: $selectedworkspaceid
      selectedslug: $selectedslug
    ) {
      __typename
      json
    }
  }
`,re=`
  mutation SaveRegistrationsBatchAddDraft(
    $p_id: uuid
    $p_slug: String!
    $p_payload: jsonb!
    $p_recipient_workspace: uuid
    $p_name: String!
    $p_reference_of: String!
    $p_valuetype: String!
  ) {
    __typename
    set_general_preference_json_v2(
      args: {
        p_id: $p_id
        p_slug: $p_slug
        p_payload: $p_payload
        p_recipient_workspace: $p_recipient_workspace
        p_name: $p_name
        p_reference_of: $p_reference_of
        p_valuetype: $p_valuetype
      }
    ) {
      __typename
      json
    }
  }
`,ct=`
  query EnqueueCreateClientBatch($input: enqueuecreateclientbatchjson_args!) {
    __typename
    enqueuecreateclientbatchjson(args: $input) {
      __typename
      json
    }
  }
`,pt=`
  query EnqueueUpdateClientStatusBatch($input: enqueueupdateclientstatusbatchjson_args!) {
    __typename
    enqueueupdateclientstatusbatchjson(args: $input) {
      __typename
      json
    }
  }
`,lt=`
  query EnqueueCreateClientBatch(
    $sessionworkspaceid: String
    $companyworkspaceclientid: String
    $items: Any
  ) {
    __typename
    prod_enqueuecreateclientbatchjson(
      sessionworkspaceid: $sessionworkspaceid
      companyworkspaceclientid: $companyworkspaceclientid
      items: $items
    ) {
      __typename
      json
    }
  }
`,dt=`
  query EnqueueUpdateClientStatusBatch(
    $sessionworkspaceid: String
    $status: String
    $workspace_clients_ids: Any
  ) {
    __typename
    prod_enqueueupdateclientstatusbatchjson(
      sessionworkspaceid: $sessionworkspaceid
      status: $status
      workspace_clients_ids: $workspace_clients_ids
    ) {
      __typename
      json
    }
  }
`,_t=`
  query GetProcessingQueueActionStatus($sessionworkspaceid: String!) {
    __typename
    prod_getprocessingqueueactionstatusjson(sessionworkspaceid: $sessionworkspaceid) {
      __typename
      json
    }
  }
`,ut=`
  query GetProcessingQueueActionStatus($sessionworkspaceid: uuid!) {
    __typename
    getprocessingqueueactionstatusjson(args: { sessionworkspaceid: $sessionworkspaceid }) {
      __typename
      json
    }
  }
`;function mt(e){return e?d(e.payload).map(s=>i(s)).filter(s=>s!==null).map(s=>{const n=i(s.workspaceLink);if(!n)return null;const r=a(n.id);if(!r)return null;const c=d(n.permissionWorkspaces).map(o=>i(i(o)?.permission)).filter(o=>o!==null).map(o=>a(o.name)).filter(o=>o!==null);return{id:r,inviteLinkName:a(s.inviteLinkName),status:a(n.status),createdAt:a(n.createdAt),client:E(i(n.workspaceClient)),senderWorkspace:E(i(n.senderWorkspace)),recipientWorkspace:E(i(n.recipientWorkspace)),permissionNames:c}}).filter(s=>s!==null):[]}function yt(e){return e?d(e.payload).map(t=>i(t)).filter(t=>t!==null).map(t=>{const s=i(t.workspaceClient),n=i(t.parentWorkspaceClient),r=i(t.fileUpload);return{parentWorkspaceClient:E(n),workspaceClient:E(s),fileUploadId:a(r?.id),fileUploadUrl:a(r?.url),permissionNames:d(t.permissions).map(c=>a(i(c)?.name)).filter(c=>c!==null)}}):[]}function gt(e){if(!e)return null;const t=a(e.id);if(!t)return null;const s=["citySync","emailSync","typeSync","phoneSync","addressSync","numberSync","complementSync","zipCodeSync","emailOptSync","lastNameSync","logoPathSync","firstNameSync","legalNameSync","descriptionSync","brandingNameSync","ownerWorkspaceSync"],n={};for(const p of s)n[p]=a(e[p]);const c=d(e.primaryLink).map(p=>i(p)).find(p=>p!==null),o=d(e.workspaceLinkPermissions).map(p=>i(p)).filter(p=>p!==null).map(p=>({id:a(p.id)??"",name:a(p.name)??""})).filter(p=>p.id!==""||p.name!==""),l=d(c?.permissions).map(p=>i(p)).filter(p=>p!==null).map(p=>({id:a(p.id)??"",name:a(p.name)??""})).filter(p=>p.id!==""||p.name!==""),u=l.length>0?l:o;return{id:t,type:a(e.type)??"PERSON",firstName:a(e.firstName),lastName:a(e.lastName),legalName:a(e.legalName),brandingName:a(e.brandingName),email:a(e.email),phone:a(e.phone),description:a(e.description),logoPath:a(e.logoPath),address:a(e.address),number:a(e.number),complement:a(e.complement),city:a(e.city),zipCode:a(e.zipCode),emailOpt:a(e.emailOpt),createdAt:a(e.createdAt),updatedAt:a(e.updatedAt),parentClient:a(e.parentClient),ownerWorkspaceId:a(e.ownerWorkspaceId),sync:n,primaryLinkStatus:a(c?.status),primaryLinkId:a(c?.id),permissions:u,customFields:Array.isArray(e.clientCustomFields)?e.clientCustomFields:[],raw:e}}function oe(e){const t=a(e.id);if(!t)return null;const s=i(e.type);return{id:t,name:a(e.name)??"",categoryName:a(e.categoryName),complement:a(e.complement),activeDependents:I(e.activeDependents),inactiveDependents:I(e.inactiveDependents),totalDependents:I(e.totalDependents),typeLabel:a(s?.label),typeSlug:a(s?.slug)}}function kt(e){return e?{option:a(e.syncOption??e.recognitionOption),requestManagerApproval:D(e.requestManagerApproval),status:a(e.status),fileUpload:V(e.fileUpload),originalFileUpload:V(e.originalFileUpload)}:null}function ft(e){return d(e).map(t=>i(t)).filter(t=>t!==null).map(t=>({changeType:a(t.changeType)??"",fileUpload:V(t.fileUpload),workspaceClient:E(i(t.workspaceClient)),responsibleWorkspace:E(i(t.responsibleWorkspace)),createdAt:a(t.createdAt)}))}function It(e){return{clientId:a(e.clientId)??a(e.workspaceClientId)??"",clientName:a(e.clientName)??a(e.displayName)??"",email:a(e.email)??"",phone:a(e.phone)??"",parentName:a(e.parentName)??"",permissionRole:a(e.permissionRole)??"",creatorName:a(e.creatorName)??"",creatorEmail:a(e.creatorEmail)??"",clientType:le(a(e.clientType)),logoPath:a(e.logoPath)??a(e.logo_path)}}function St(e){return{clientId:a(e.clientId)??a(e.workspaceClientId)??"",clientName:a(e.clientName)??a(e.email)??"Sem nome",email:a(e.email)??"",clientType:le(a(e.clientType)??a(e.type)),linkStatus:a(e.linkStatus)??a(e.status)??"",parentName:a(e.parentName)??"",permissionRole:a(e.permissionRole)??"",memberDescription:a(e.memberDescription)??""}}function ce(e){const t=a(e.id)??a(e.contract_id)??a(e.contractId);if(!t)return null;const s=i(e.workspace_link_contract_template)??i(e.template)??i(e.workspaceLinkContractTemplate),n=i(s?.workspace_link_contract_cycle_type)??i(s?.cycleType),r=i(e.workspace)??i(e.contractedWorkspace)??i(e.workspaceByContractedworkspaceid);return{id:t,status:a(e.status)??a(e.contract_status)??"ACTIVE",priority:I(e.priority),startDate:a(e.startDate)??a(e.contract_start_date),endDate:a(e.endDate)??a(e.contract_end_date),payDay:I(e.payDay),renovationDay:I(e.renovationDay),templateId:a(s?.id),templateName:a(s?.name)??a(e.contract_template_name),cycleTypeName:a(n?.name),senderName:a(r?.brandingName)??a(r?.legalName)??a(e.contract_sender_name),value:I(s?.value)??I(e.value),creditExtension:Ie(e.contractDetails)}}function Ct(e,t){switch((e??"").trim()){case"reservation-direct":return t?"Titular de área privativa":"Titular de reserva";case"reservation-dependent":return t?"Dependente de área privativa":"Dependente de reserva";case"authorization-direct":return"Autorização pessoal direta";case"group-authorization-member":return"Autorização por ser membro de grupo";case"group-hierarchy-authorization":return"Autorização por ser membro de grupo filho";default:return(e??"").replaceAll("-"," ").replaceAll("_"," ")||"Acesso"}}function $t(e){const t=i(k(e));return t?d(t.accessGrants??t.authorizations).map(n=>i(n)).filter(n=>n!==null).map((n,r)=>{const c=d(n.areas).map(g=>i(g)).filter(g=>g!==null),o=c[0],l=i(o?.occupationFormat)??i(o?.occupation_format),u=(a(l?.name)??"").trim().toLowerCase()==="private",p=a(n.accessReason)??a(n.authPath),S=i(n.workspaceLink),R=i(n.authorizingLink),h=p==="group-authorization-member"||p==="group-hierarchy-authorization"?R??S:S,B=d(n.passages).map(g=>i(g)).filter(g=>g!==null).map(g=>({id:a(g.id)??"",name:a(g.name)??"",description:a(g.description)??a(g.deviceTypeName)??a(g.typeName)??null})).filter(g=>g.name!=="");return{id:a(n.id)??`grant-${r}`,rank:I(n.rank)??r,label:Ct(p,u),accessReason:p,status:a(h?.status)??a(S?.status),hasKeys:D(n.hasKeys),startDate:a(h?.startDate)??a(S?.startDate),endDate:a(h?.endDate)??a(S?.endDate),groupName:a(n.groupName),parentGroupName:a(n.parentGroupName),childGroupName:a(n.childGroupName),areas:c.map(g=>{const G=i(g.parentArea)??i(g.areaHierarchy)??i(d(g.areaHierarchy)[0]),F=i(g.areaCategory)??i(g.area_category);return{id:a(g.id)??"",name:a(g.name)??"",categoryName:a(F?.name),parentName:a(G?.name)}}),passages:B.map(g=>g.name),passageItems:B,isPrivateArea:u,isRecurrent:!1}}):[]}function wt(e){const t=i(k(e)),s=Array.isArray(t?.authorizations)?t.authorizations:Array.isArray(t?.items)?t.items:Array.isArray(k(e))?k(e):[];return d(s).map(n=>i(n)).filter(n=>n!==null).map((n,r)=>{const c=i(n.workspaceLink)??n;return{id:a(n.id)??a(c.id)??`recurrent-${r}`,title:a(n.title)??a(n.linkTypeName)??"Autorização recorrente",status:a(c.status),startDate:a(c.startDate),endDate:a(c.endDate),recurrenceType:a(n.recurrenceType)??a(n.type),weekDays:d(n.weekDays).map(o=>a(o)).filter(o=>o!==null),excludeHolidays:D(n.excludeHolidays),areas:d(n.areas).map(o=>a(i(o)?.name)??a(o)).filter(o=>o!==null)}})}function At(e){return e?d(e.payload).map(t=>i(t)).filter(t=>t!==null).map(t=>({id:a(t.id)??"",label:a(t.label)??"",templateId:a(t.templateId)??"",mandatory:D(t.mandatory),mask:a(t.mask),order:I(t.order)??0,personType:a(t.personType)})).filter(t=>t.id!=="").sort((t,s)=>t.order-s.order):[]}function Nt(e){return e?d(e.payload).map(t=>i(t)).filter(t=>t!==null).map(t=>{const s=i(t.workspaceClientDocumentTemplate);return{id:a(t.id)??"",value:a(t.value)??"",templateId:a(t.workspaceClientDocumentTemplateId)??a(s?.id),label:a(s?.label),mandatory:D(s?.mandatory),personType:a(s?.personType),sync:a(t.isSync)??"REQUESTED"}}):[]}function ht(e){const t=i(k(e)),s=Array.isArray(t?.tags)?t.tags:Array.isArray(k(e))?k(e):[];return d(s).map(n=>i(n)).filter(n=>n!==null).map(n=>{const r=a(n.type)??"";return{id:a(n.id)??"",code:a(n.code)??"",type:r,status:a(n.status)??"ENABLED",displayName:a(n.displayName)??a(n.name)??r,imageUrl:a(n.imageUrl)??a(n.image_url),memberDescription:a(n.memberDescription)??a(n.workspaceClientMemberDescription),vehicleId:a(n.workspaceClientVehicleId)}}).filter(n=>n.id!==""||n.code!=="")}function vt(e){const t=i(k(e.payload))??e,s=a(e.id)??a(t.id);if(!s)return null;const n=d(t.items).map(r=>i(r)).filter(r=>r!==null).map((r,c)=>({id:a(r.id)??`item-${c}`,name:a(r.name)??"",email:a(r.email)??"",phone:a(r.phone)??"",type:a(r.type)??"PERSON"}));return{id:s,name:a(e.name)??a(t.name)??"Rascunho",updatedAt:a(e.updatedAt)??a(e.createdAt),companyWorkspaceClientId:a(t.companyWorkspaceClientId),companyDisplayName:a(t.companyDisplayName),items:n}}function Et(e){const t=i(k(e.payload))??e,s=a(e.id)??a(t.id);if(!s)return null;const n=d(t.items).map(o=>i(o)).filter(o=>o!==null).map(o=>({...St(o),status:a(o.status)??"draft"})),r=a(t.createdByFirstName),c=a(t.createdByLastName);return{id:s,name:a(e.name)??a(t.name)??"Rascunho",updatedAt:a(e.updatedAt)??a(e.createdAt),createdAt:a(t.createdAt)??a(e.createdAt),createdByName:[r,c].filter(Boolean).join(" ")||null,isUsed:(a(e.status)??a(t.status))==="used"||D(e.isUsed),items:n}}const Tt=`
  query ClientDeviceDelivery($input: ProdGetWorkspaceClientProcessedDeviceLinkStatusJsonPInput) {
    prod_get_workspace_client_processed_device_link_status_json(p_input: $input) {
      json
    }
  }
`,bt=`
  mutation TransferWorkspaceByClient(
    $userId: uuid!
    $workspaceId: uuid!
    $targetClientId: uuid!
    $newOwnerClientId: uuid!
  ) {
    transferworkspacebyclient(
      args: {
        selecteduserid: $userId
        selectedworkspaceid: $workspaceId
        selectedtargetclientid: $targetClientId
        selectednewownerclientid: $newOwnerClientId
      }
    ) {
      json
    }
  }
`,Dt=`
  mutation TransferWorkspaceByClient(
    $userId: String!
    $workspaceId: String!
    $targetClientId: String!
    $newOwnerClientId: String!
  ) {
    __typename
    prod_transferworkspacebyclient(
      selecteduserid: $userId
      selectedworkspaceid: $workspaceId
      selectedtargetclientid: $targetClientId
      selectednewownerclientid: $newOwnerClientId
    ) {
      __typename
      json
    }
  }
`,Rt=`
  query GetClientOwnerHistory($type: String!, $customfields: jsonb) {
    getapplogbytypeandcustomfields(
      args: { selectedtype: $type, selectedcustomfields: $customfields }
    ) {
      json
    }
  }
`,jt=`
  query FnClientAppLog($type: String, $customFields: Any) {
    __typename
    fn_getapplogbytypeandcustomfields(type: $type, customFields: $customFields) {
      __typename
      json
    }
  }
`;function Pt(e){return{id:a(e.id)??"",workspaceClientId:a(e.workspace_client_id),workspaceId:a(e.workspace_id),bridgeId:a(e.bridge_id),deviceId:a(e.device_id),deviceName:a(e.device_name),externalApiKeyId:a(e.external_api_key_id),recipientName:a(e.recipient_name),faceRecognition:a(e.face_recognition),linkStatus:a(e.link_status),startDate:a(e.start_date),endDate:a(e.end_date),sentToDevice:D(e.sent_to_device),isPhotoProcessed:D(e.is_photo_processed),sendFailureCount:I(e.send_failure_count)??0,lastSendFailureAt:a(e.last_send_failure_at),syncedAt:a(e.synced_at)}}function Ut(e){const s=P(k(e))[0]??{},r=i(k(s.json))??i(s.payload)??s;return{items:d(r.items).map(o=>i(o)).filter(o=>o!==null).map(Pt).filter(o=>o.id!=="")}}function J(e){const t=i(e)??{};return{name:a(t.name)??"",email:a(t.email)??""}}function Lt(e){const t=i(e);if(!t)return null;const s=a(t.id);if(!s)return null;const n=i(k(t.data))??i(t.data)??{};return{id:s,occurredAt:a(t.occuredAt)??a(t.occurredAt)??a(t.created_at)??"",clientId:a(n.clientId)??"",oldOwner:J(n.oldOwner),newOwner:J(n.newOwner),responsible:J(n.responsible)}}function Wt(e){return P(k(e)).flatMap(n=>{const r=k(n.json);return(Array.isArray(r)?r:r?[r]:[n]).map(Lt)}).filter(n=>n!==null)}const Ot={create_client_batch:"Criação de cadastros","7e8f9a0b-1c2d-4e5f-8a9b-0c1d2e3f4a5b":"Criação de cadastros",update_client_status_batch:"Remoção de cadastros","5a5868d0-5fb3-4463-a917-59ab45c847ce":"Remoção de cadastros"};function Bt(e){return d(e).map(t=>{const s=i(t),n=k(s?.json??t);return(Array.isArray(n)?n:n?[n]:[]).map(c=>i(c)).filter(c=>c!==null)}).flat().map(t=>{const s=a(t.actionKey)??a(t.actionId);return{id:a(t.id)??a(t.queueId)??"",batchId:a(t.batchId),actionId:a(t.actionId),actionLabel:(s?Ot[s]:null)??a(t.actionLabel)??"Processamento",status:a(t.status)??"PENDING",message:a(t.message),total:I(t.total),completed:I(t.completed),failed:I(t.failed),pending:I(t.pending),percentComplete:I(t.percentComplete),createdAt:a(t.createdAt)}}).filter(t=>t.id!=="").sort((t,s)=>(s.createdAt??"").localeCompare(t.createdAt??""))}const ua={async getPendingApprovals(e){const t=await f(je,{workspaceId:e}),s=i(t.pendingApprovals),n=i(t.facialRecognitionPending);return{invites:mt(s),facial:yt(n),reportedInviteLinkTotal:null}},async getWorkspacePendingApprovalsJson(e){const t=await f(Pe,{workspaceId:e}),s=i(t.get_workspace_pending_approvals_json),n=i(k(s?.json)),r=d(n?.pendingApprovals),c=[];for(const o of r){const l=i(o);if(!l)continue;const u=i(l.workspace_client)??i(l.workspaceClient),S=d(u?.primaryLink).map(h=>i(h)).find(h=>h!==null),R=a(S?.id)??a(u?.id);R&&c.push({id:R,inviteLinkName:a(S?.inviteLinkName),status:a(S?.status),createdAt:a(S?.createdAt),client:E(u),senderWorkspace:E(i(S?.senderWorkspace))??E(i(l.senderWorkspace)),recipientWorkspace:E(i(S?.recipientWorkspace)),permissionNames:d(l.permissions).map(h=>a(i(h)?.name)).filter(h=>h!==null)})}return{invites:c,facial:[],reportedInviteLinkTotal:I(n?.total)}},async setFacialRecognitionStatus(e){const t=await j(Ue,{clientId:e.clientId,status:e.status});ae(i(t.setWorkspaceClientFacialRecognitionStatus),"Falha ao atualizar reconhecimento facial")},async removeWorkspaceClients(e){const t=e.map(s=>s.trim()).filter(Boolean);t.length&&await fe.removeClient(t)},async getClientsNoPagination(e){const t=C(w)==="java",s=await f(t?Ge:Be,{ownerId:e.ownerId,likeParam:e.likeParam??"",status:e.status??$e,type:e.type??null,hierarchyType:e.hierarchyType??"{}",selectAllClients:e.selectAllClients??!0,selectedparentclient:e.selectedParentClientId?.trim()?e.selectedParentClientId:null},t?{...$,timeoutMs:12e4}:{timeoutMs:12e4}),n=t?s.prod_getclients_v3_no_paginationjson:s.getclients_v3_no_paginationjson,r=d(n),c=[];for(const o of r){const l=i(o);if(!l)continue;const u=i(l.json)??l,p=It(u);c.push(p)}return c},async searchBatchRemoveClients(e){return(await this.getClientsNoPagination({...e,status:e.status??"{ACCEPTED,PENDING}",hierarchyType:e.hierarchyType??"{}"})).map(s=>({clientId:s.clientId,clientName:s.clientName||s.email||"Sem nome",email:s.email,clientType:s.clientType,linkStatus:"",parentName:s.parentName,permissionRole:s.permissionRole,memberDescription:""})).filter(s=>s.clientId!=="")},async checkClientByEmail(e){const t=await f(Fe,{email:e.email,ownerWorkspaceId:e.ownerWorkspaceId,type:e.type});return a(i(t.workspace_client)?.id)},async checkClientByPhone(e){const t={phone:e.phone,ownerWorkspaceId:e.ownerWorkspaceId,type:e.type},s=C(w)==="java",n=await f(s?tt:qe,t,s?$:{}),r=s?n.prod_check_client_by_phone:n.check_client_by_phone,c=Array.isArray(r)?i(r[0]):i(r),o=i(k(c?.json));return d(o?.clients).map(l=>E(i(l))).filter(l=>l!==null)},async getClientData(e){const t=await f(Me,{clientId:e.clientId,clientIdCore:e.clientId}),s=i(d(t.getclientbyidjson)[0]),n=gt(i(s?.json)??s),r=i(t.groupsByClient),c=d(r?.payload).map(p=>i(p)).filter(p=>p!==null).map(oe).filter(p=>p!==null),o=kt(i(i(t.recognitionSettingByWorkspaceClientId)?.payload)),l=i(t.facialRecognitionHistory),u=ft(l?.payload);return{client:n,groups:c,recognition:o,recognitionHistory:u}},async updateWorkspaceClient(e){const t=await j(ze,{inputWorkspaceClient:e.clientId,inputCreatorUserId:e.creatorUserId,inputSenderWorkspace:e.senderWorkspaceId,inputEmail:e.email,inputType:e.type,inputFirstName:e.firstName,inputLastName:e.lastName,inputLogoPath:e.logoPath,inputLegalName:e.legalName,inputBrandingName:e.brandingName,inputAddress:e.address,inputNumber:e.number,inputCity:e.city,inputZipCode:e.zipCode,inputComplement:e.complement,inputPermission:e.permission||Ce,inputEmailSync:e.emailSync,inputTypeSync:e.typeSync,inputFirstNameSync:e.firstNameSync,inputLastNameSync:e.lastNameSync,inputLogoPathSync:e.logoPathSync,inputEmailOptSync:e.emailOptSync,inputLegalNameSync:e.legalNameSync,inputBrandingNameSync:e.brandingNameSync,inputAddressSync:e.addressSync,inputNumberSync:e.numberSync,inputCitySync:e.citySync,inputZipCodeSync:e.zipCodeSync,inputComplementSync:e.complementSync,inputOwnerWorkspaceSync:e.ownerWorkspaceSync,inputPhone:e.phone,inputPhoneSync:e.phoneSync,inputParentWorkspaceClient:e.parentWorkspaceClient,inputPermissionRole:e.permissionRole,inputDescription:e.description,inputDescriptionSync:e.descriptionSync,inputCustomFields:e.customFields,inputDocuments:e.documents,inputGroupIds:e.groupIds,workspaceClientRecognitionSettings:e.recognitionSettings});ae(i(t.UpdateWorkspaceClient_CORE),"Falha ao atualizar cadastro")},async transferWorkspaceByClient(e){const t=C(w)==="java",s=await j(t?Dt:bt,{userId:e.userId,workspaceId:e.workspaceId,targetClientId:e.targetClientId,newOwnerClientId:e.newOwnerClientId},t?$:{}),n=t?s.prod_transferworkspacebyclient:s.transferworkspacebyclient,r=Array.isArray(n)?i(n[0]):i(n),o=P(k(t?r?.json:n))[0]??null;if(!o)throw new Error("Falha ao alterar focal");const l=a(o.error);if(l)throw new Error(l)},async getClientOwnerChangeHistory(e){const t=C(ge)==="java",s=await f(t?jt:Rt,t?{type:"WORKSPACE_OWNER_CHANGE",customFields:{clientId:e}}:{type:"WORKSPACE_OWNER_CHANGE",customfields:{clientId:e}},t?$:{});return Wt(t?s.fn_getapplogbytypeandcustomfields:s.getapplogbytypeandcustomfields)},async getClientDeviceDeliveryStatus(e){const t=await f(Tt,{input:{workspaceId:e.workspaceId,workspaceClientId:e.workspaceClientId,limit:e.limit??500}},{endpoint:pe.hailaJavaGraphqlEndpoint,timeoutMs:45e3}),s=P(k(t.prod_get_workspace_client_processed_device_link_status_json))[0];return Ut(s??null)},async getContractsByClient(e){const t=new Map,s=C(w,e.mode)==="java";try{const n=await f(s?at:Je,{p_workspace_client_id:e.clientId,p_selected_workspace_id:e.workspaceId},s?{...$,timeoutMs:6e4}:{timeoutMs:6e4}),r=d(s?n.prod_get_client_contracts_jsonb:n.get_client_contracts_jsonb);for(const c of r){const o=i(c);if(o)for(const l of P(o.json??o)){const u=ce(l);u&&t.set(u.id,u)}}}catch(n){s&&console.warn("registration.getContractsByClient: prod_get_client_contracts_jsonb falhou",n)}try{const n=await f(Ve,{clientId:e.clientId});for(const r of d(n.workspace_link_contract)){const c=i(r);if(!c)continue;const o=ce(c);o&&!t.has(o.id)&&t.set(o.id,o)}}catch{}return[...t.values()]},async getClientAuthorizedAreasPassages(e){const t=C(w,e.mode)==="java",s=await f(t?nt:He,{p_workspace_client_id:e.clientId,p_user_id:e.userId,p_workspace_id:e.workspaceId},t?{...$,timeoutMs:45e3}:{timeoutMs:45e3}),n=t?s.prod_get_workspace_client_authorized_areas_passages_json:s.get_workspace_client_authorized_areas_passages_json,r=Array.isArray(n)?i(n[0]):i(n);return $t(r?.json)},async getRecurrentAuthorizations(e){const t=C(w)==="java",s=await f(t?st:Ke,{p_workspace_client_id:e.clientId,p_limit:e.limit??10,p_offset:e.offset??0},t?{...$,timeoutMs:45e3}:{timeoutMs:45e3}),n=t?s.prod_get_recurrent_authorizations_by_workspace_client_json:s.get_recurrent_authorizations_by_workspace_client_json,r=Array.isArray(n)?i(n[0]):i(n);return wt(r?.json)},async getGroupsByClient(e){const t=await f(Qe,{clientId:e}),s=i(t.groupsByClient);return d(s?.payload).map(n=>i(n)).filter(n=>n!==null).map(oe).filter(n=>n!==null)},async getClientTemplateCustomFields(e){const t=C(w)==="java",s=await f(t?Ye:xe,t?{workspaceId:e.workspaceId,personType:e.personType}:{args:{selectedfilters:{personType:e.personType},selectedworkspaceid:e.workspaceId}},t?$:{}),n=d(t?s.prod_client_custom_field_list:s.getclienttemplatecustomfieldsjson),r=i(n[0]);return P(r?.json).map(c=>{const o=i(c.payload);return{name:a(c.name)??"",valueType:a(c.valueType)??"text",mandatory:D(c.mandatory??o?.mandatory),personType:a(c.personType)??a(o?.personType),templateId:a(c.id)??a(o?.templateId)??""}}).filter(c=>c.templateId!=="")},async getDocumentFields(e){const t=await f(Ze,{workspaceId:e});return At(i(t.workspaceDocumentClientFields))},async getDocumentValues(e){const t=await f(Xe,{workspaceId:e.workspaceId,clientId:e.clientId});return Nt(i(t.workspaceDocumentClients))},async getClientTags(e){const t=C(w)==="java",s=await f(t?it:et,{p_workspace_client_id:e.clientId,p_workspace_id:e.workspaceId},t?$:{}),n=t?s.prod_get_workspace_client_tags_json:s.get_workspace_client_tags_json,r=Array.isArray(n)?i(n[0]):i(n);return ht(r?.json)},async setClientTag(e){const t=C(w)==="java",s=await j(t?ot:rt,{p_action:e.action,p_id:e.tagId??null,p_workspace_id:e.workspaceId,p_code:e.code,p_workspace_client_id:e.clientId,p_workspace_client_vehicle_id:e.vehicleId??null,p_status:e.status??"ENABLED",p_type:e.type},t?$:{}),n=t?s.prod_set_workspace_client_tag:s.set_workspace_client_tag,r=Array.isArray(n)?i(n[0]):i(n),c=i(k(r?.json));if(c&&c.success===!1)throw new Error(d(c.errorMessages).join("; ")||"Falha ao atualizar TAG")},async listBatchAddDrafts(e){const t=C(w)==="java",s=await f(t?ie:se,{selectedworkspaceid:e,selectedslug:M},t?$:{}),n=t?s.prod_getonboardingdraftsbyworkspacejson:s.getonboardingdraftsbyworkspacejson,r=Array.isArray(n)?i(n[0]):i(n);return P(r?.json).map(vt).filter(c=>c!==null).sort((c,o)=>(o.updatedAt??"").localeCompare(c.updatedAt??""))},async listBatchRemoveDrafts(e){const t=C(w)==="java",s=await f(t?ie:se,{selectedworkspaceid:e,selectedslug:q},t?$:{}),n=t?s.prod_getonboardingdraftsbyworkspacejson:s.getonboardingdraftsbyworkspacejson,r=Array.isArray(n)?i(n[0]):i(n);return P(r?.json).map(Et).filter(c=>c!==null&&!c.isUsed).sort((c,o)=>(o.updatedAt??"").localeCompare(c.updatedAt??""))},async saveBatchAddDraft(e){const t={kind:"registrations-batch-add",companyWorkspaceClientId:e.companyWorkspaceClientId,companyDisplayName:e.companyDisplayName,items:e.items.map(c=>({type:c.type,email:c.email,...c.name?{name:c.name}:{},...c.phone?{phone:c.phone}:{}}))};if(K==="java")return(await Q.setGeneralPreference({id:e.draftId??null,slug:M,payload:t,name:e.name,referenceOf:"workspace",idReferenceOf:e.workspaceId,valueType:"json",sessionWorkspaceId:e.sessionWorkspaceId??e.workspaceId})).id;const s=await j(re,{p_id:e.draftId??null,p_slug:M,p_payload:t,p_recipient_workspace:e.workspaceId,p_name:e.name,p_reference_of:"workspace",p_valuetype:"json"}),n=i(s.set_general_preference_json_v2),r=i(k(n?.json));return a(r?.id)},async saveBatchRemoveDraft(e){const t=e.status??"draft",s={kind:"registrations-batch-remove",status:t,createdAt:new Date().toISOString(),createdByFirstName:e.createdByFirstName??null,createdByLastName:e.createdByLastName??null,items:e.items.map(o=>({workspaceClientId:o.clientId,displayName:o.clientName,...o.email?{email:o.email}:{},type:o.clientType,status:o.status,...o.parentName?{parentName:o.parentName}:{},...o.permissionRole?{permissionRole:o.permissionRole}:{},...o.memberDescription?{memberDescription:o.memberDescription}:{}}))};if(t==="used"&&(s.usedAt=new Date().toISOString(),s.usedByFirstName=e.createdByFirstName??null,s.usedByLastName=e.createdByLastName??null),K==="java")return(await Q.setGeneralPreference({id:e.draftId??null,slug:q,payload:s,name:e.name,referenceOf:"workspace",idReferenceOf:e.workspaceId,valueType:"json",sessionWorkspaceId:e.sessionWorkspaceId??e.workspaceId})).id;const n=await j(re,{p_id:e.draftId??null,p_slug:q,p_payload:s,p_recipient_workspace:e.workspaceId,p_name:e.name,p_reference_of:"workspace",p_valuetype:"json"}),r=i(n.set_general_preference_json_v2),c=i(k(r?.json));return a(c?.id)},async enqueueCreateClientBatch(e){const t=C(w)==="java",s={sessionworkspaceid:e.sessionWorkspaceId,companyworkspaceclientid:e.companyWorkspaceClientId,items:e.items.map(u=>({type:u.type,email:u.email,...u.name?{name:u.name}:{},...u.phone?{phone:u.phone}:{}}))},n=await f(t?lt:ct,t?s:{input:s},t?$:{}),r=t?n.prod_enqueuecreateclientbatchjson:n.enqueuecreateclientbatchjson,c=Array.isArray(r)?i(r[0]):i(r),o=i(k(c?.json));return{success:o?.success!==!1,message:a(o?.message)??a(o?.error),enqueuedCount:I(o?.enqueuedCount)??I(o?.count)}},async enqueueUpdateClientStatusBatch(e){const t=e.clientIds.map(p=>p.trim()).filter(Boolean);if(!t.length)throw new Error("Selecione ao menos um cadastro");const s=C(w)==="java",n={sessionworkspaceid:e.sessionWorkspaceId,status:e.status,workspace_clients_ids:Se(t)},r=await f(s?dt:pt,s?n:{input:n},s?$:{}),c=s?r.prod_enqueueupdateclientstatusbatchjson:r.enqueueupdateclientstatusbatchjson,o=Array.isArray(c)?i(c[0]):i(c),l=i(k(o?.json));return{success:l?.success!==!1,message:a(l?.message)??a(l?.error),enqueuedCount:I(l?.enqueuedCount)??t.length}},async getProcessingQueueActionStatus(e){const t=C(w)==="java",s=await f(t?_t:ut,{sessionworkspaceid:e},t?$:{}),n=t?s.prod_getprocessingqueueactionstatusjson:s.getprocessingqueueactionstatusjson,r=Array.isArray(n)?i(n[0]):i(n);return Bt(r?.json)},async listRunningProcessingQueues(e){return this.getProcessingQueueActionStatus(e)},async addWorkspaceClientPermissions(e){const t=e.permissionIds.map(r=>r.trim()).filter(Boolean);if(!e.workspaceId||!e.workspaceClientId||!e.userId||t.length===0)throw new Error("Dados insuficientes para adicionar permissão");const s=C(w)==="java",n=await j(s?We:Le,{workspaceId:e.workspaceId,workspaceClientId:e.workspaceClientId,userId:e.userId,permissionIds:t},s?$:{});ne(s?n.prod_add_workspace_client_permissions_json:n.add_workspace_client_permissions_json,"Falha ao adicionar permissão")},async removeWorkspaceClientPermissions(e){const t=e.permissionIds.map(n=>n.trim()).filter(Boolean);if(!e.workspaceId||!e.workspaceClientId||!e.userId||t.length===0)throw new Error("Dados insuficientes para remover permissão");const s=await j(Oe,{userId:e.userId,workspaceId:e.workspaceId,workspaceClientId:e.workspaceClientId,permissionIds:t});ne(s.remove_workspace_client_permissions_json,"Falha ao remover permissão")}},Gt={class:"facial-card"},Ft={class:"facial-card__header"},qt=["title"],Mt={key:0,class:"facial-card__manual"},zt={class:"facial-card__thumb"},Jt=["src"],Vt={key:1,class:"pi pi-user"},Ht={class:"facial-card__manual-actions"},Kt={key:1,class:"facial-card__approval"},Qt={for:"facial-approval"},xt={key:2,class:"facial-card__progress"},Yt={class:"haila-muted"},Zt={class:"facial-card__messages"},Xt={key:5,class:"facial-card__history"},ea={class:"facial-card__history-label"},ta={class:"facial-card__history-meta"},aa=we({__name:"RegistrationsFacialSettingsCard",props:{option:{},requestApproval:{type:Boolean},fileUploadId:{},fileUploadUrl:{},isLocalClient:{type:Boolean},disabled:{type:Boolean},history:{}},emits:["update:option","update:requestApproval","update:fileUpload","validationRunning"],setup(e,{emit:t}){const s=e,n=t,{t:r}=Ae(),c=L(!1),o=L(null),l=L(!1),u=L(null),p=L([]),S=L(null),R=L(!1),h=z(()=>{const m=[{label:r("registrations.profile.recognition.manual"),value:"Manual"},{label:r("registrations.profile.recognition.userSync"),value:"UserSync"},{label:r("registrations.profile.recognition.noRecognition"),value:"NoRecognition"}];return s.isLocalClient?m.filter(_=>_.value!=="UserSync"):m}),B=z(()=>S.value??s.fileUploadUrl),g=z(()=>{const m=[...s.history??[]];return m.sort((_,y)=>(y.createdAt??"").localeCompare(_.createdAt??"")),R.value?m:m.slice(0,1)});function G(m){n("update:option",m),p.value=[],u.value=null,m!=="Manual"&&n("update:fileUpload",null),m!=="UserSync"&&n("update:requestApproval",!1)}function F(m){n("update:requestApproval",m)}async function H(m,_){l.value=!0,n("validationRunning",!0),u.value=null,p.value=[];try{const y=await Te.uploadAndValidateManualPhoto(m,_,{contact:!0});S.value&&URL.revokeObjectURL(S.value),S.value=URL.createObjectURL(m),n("update:fileUpload",{fileUploadId:y.fileUploadId,originalFileUploadId:y.originalFileUploadId,fileUploadUrl:y.fileUploadUrl})}catch(y){if(y instanceof be){p.value=y.messages;return}const W=ke(y);u.value=W.includes("Validation failed")?r("registrations.profile.recognition.validationError",{message:W}):r("registrations.profile.recognition.uploadError",{message:W})}finally{l.value=!1,n("validationRunning",!1)}}function de(m){H(m,"selfie.jpg")}function _e(m){const _=m.target,y=_.files?.[0];_.value="",y&&H(y,y.name||"selfie.jpg")}function ue(m){return m==="Requested"?r("registrations.profile.recognition.historyRequested"):m==="AcceptedByClient"?r("registrations.profile.recognition.historyAccepted"):m==="Manual"?r("registrations.profile.recognition.historyManual"):m||"—"}function me(m){const _=m.responsibleWorkspace;return _?_.type==="LEGAL_PERSON"?_.brandingName??_.legalName??"":`${_.firstName??""} ${_.lastName??""}`.trim():""}function ye(m){if(!m)return"";const _=new Date(m);return Number.isNaN(_.getTime())?"":_.toLocaleDateString("pt-BR",{day:"2-digit",month:"short",year:"numeric"})}return(m,_)=>(A(),v("section",Gt,[T("header",Ft,[T("h3",null,b(N(r)("registrations.profile.recognition.title")),1),e.option==="UserSync"?(A(),v("i",{key:0,class:"pi pi-question-circle facial-card__help",title:N(r)("registrations.profile.recognition.userSyncHelp")},null,8,qt)):U("",!0)]),O(N(he),{"model-value":e.option,options:h.value,"option-label":"label","option-value":"value",disabled:e.disabled||l.value,class:"facial-card__select","onUpdate:modelValue":_[0]||(_[0]=y=>G(String(y)))},null,8,["model-value","options","disabled"]),e.option==="Manual"?(A(),v("div",Mt,[T("div",zt,[B.value?(A(),v("img",{key:0,src:B.value,alt:""},null,8,Jt)):(A(),v("i",Vt))]),T("div",Ht,[O(N(ee),{icon:"pi pi-camera",label:N(r)("registrations.profile.recognition.camera"),size:"small",disabled:e.disabled||l.value,onClick:_[1]||(_[1]=y=>c.value=!0)},null,8,["label","disabled"]),O(N(ee),{icon:"pi pi-image",label:N(r)("registrations.profile.recognition.gallery"),size:"small",severity:"secondary",outlined:"",disabled:e.disabled||l.value,onClick:_[2]||(_[2]=y=>o.value?.click())},null,8,["label","disabled"])]),T("input",{ref_key:"fileInput",ref:o,type:"file",accept:"image/*",class:"facial-card__file",onChange:_e},null,544)])):U("",!0),e.option==="UserSync"?(A(),v("div",Kt,[O(N(ve),{"model-value":e.requestApproval,binary:"","input-id":"facial-approval",disabled:e.disabled||l.value,"onUpdate:modelValue":_[3]||(_[3]=y=>F(!!y))},null,8,["model-value","disabled"]),T("label",Qt,b(N(r)("registrations.profile.recognition.requestApproval")),1)])):U("",!0),l.value?(A(),v("div",xt,[O(N(Ee),{mode:"indeterminate",style:{height:"6px"}}),T("small",Yt,b(N(r)("registrations.profile.recognition.uploading")),1)])):U("",!0),u.value?(A(),x(N(te),{key:3,severity:"error",closable:!1},{default:Y(()=>[Ne(b(u.value),1)]),_:1})):U("",!0),p.value.length?(A(),x(N(te),{key:4,severity:"warn",closable:!1},{default:Y(()=>[T("ul",Zt,[(A(!0),v(Z,null,X(p.value,(y,W)=>(A(),v("li",{key:W},b(y),1))),128))])]),_:1})):U("",!0),e.history&&e.history.length?(A(),v("div",Xt,[T("h4",null,b(N(r)("registrations.profile.recognition.historyTitle")),1),(A(!0),v(Z,null,X(g.value,y=>(A(),v("button",{key:`${y.changeType}-${y.createdAt}`,type:"button",class:"facial-card__history-item",onClick:_[4]||(_[4]=W=>R.value=!R.value)},[T("span",ea,b(ue(y.changeType)),1),T("span",ta,b(me(y))+" · "+b(ye(y.createdAt)),1)]))),128))])):U("",!0),O(De,{visible:c.value,"onUpdate:visible":_[5]||(_[5]=y=>c.value=y),onCaptured:de},null,8,["visible"])]))}}),ma=Re(aa,[["__scopeId","data-v-d728193e"]]);export{ma as R,ua as r};
