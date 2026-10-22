import{aa as E,E as _,I as ce,_ as le}from"./index-BQXz8eye.js";import{p as pe}from"./contract-DwGPrr_G.js";import{f as de,B as F,a as O,D as ue,R as me}from"./registration-mdmEyEOo.js";import{M as _e,N as ye,d as S,j as $,k as A,t as v,P as N,f as T,y as U,e as G,x as q,B as ge,F as M,A as z,a as D,D as P}from"./vue-CO70LCKn.js";import{w as ke,s as V,q as fe,v as Ie,m as H}from"./primeui-B23mD0w0.js";import{f as Ce,F as Se}from"./face-recognition.service-BfwfM2XA.js";import{C as Ne}from"./CameraCaptureDialog-CfLDTnpP.js";function i(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)?e:null}function p(e){return Array.isArray(e)?e:[]}function a(e){if(e==null)return null;const t=String(e).trim();return t===""?null:t}function g(e){if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"&&e.trim()!==""){const t=Number(e);return Number.isFinite(t)?t:null}return null}function b(e){return e===!0||e==="true"}function y(e){if(typeof e!="string")return e;const t=e.trim();if(!t)return null;if(!t.startsWith("{")&&!t.startsWith("["))return e;try{return JSON.parse(t)}catch{return e}}function L(e){const t=y(e);return(Array.isArray(t)?t:t?[t]:[]).map(n=>i(n)).filter(n=>n!==null)}function K(e,t){if(!e||e.success!==!0){const s=p(e?.errorMessages).map(n=>String(n));throw new Error(s.length?s.join("; "):t)}}function x(e,t){const s=Array.isArray(e)?e[0]:e,n=i(s),r=i(y(n?.json))??n;if(!r||r.success!==!1)return;const o=p(r.errorMessages).map(c=>String(c).trim()).filter(Boolean).join("; ");throw new Error(a(r.message)??(o||t))}function h(e){if(!e)return null;const t=a(e.id);return t?{id:t,type:a(e.type),firstName:a(e.firstName),lastName:a(e.lastName),brandingName:a(e.brandingName),legalName:a(e.legalName),email:a(e.email),phone:a(e.phone),logoPath:a(e.logoPath)}:null}function W(e){const t=i(e);if(!t)return null;const s=a(t.id);return s?{id:s,key:a(t.key),url:a(t.url),createdAt:a(t.createdAt),deletedAt:a(t.deletedAt)}:null}function X(e){switch((e??"").trim().toLowerCase()){case"empresa":case"legal_person":return"LEGAL_PERSON";case"pessoa":case"person":return"PERSON";default:return e?.trim()||"PERSON"}}const $e=`
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
`,he=`
  query GetWorkspacePendingApprovalsJson($workspaceId: uuid!) {
    __typename
    get_workspace_pending_approvals_json(args: { p_workspace_id: $workspaceId }) {
      __typename
      json
    }
  }
`,Ae=`
  mutation SetWorkspaceClientFacialRecognitionStatus($clientId: UUID!, $status: String!) {
    __typename
    setWorkspaceClientFacialRecognitionStatus(workspaceClientId: $clientId, status: $status) {
      __typename
      success
      errorMessages
    }
  }
`,we=`
  mutation RemoveWorkspaceClient($idList: [UUID!]!) {
    __typename
    removeWorkspaceClient(idList: $idList) {
      __typename
      id
      firstName
      lastName
      brandingName
    }
  }
`,ve=`
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
`,Ee=`
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
`,Te=`
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
`,De=`
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
`,be=`
  query CheckClientByPhone($phone: String!, $ownerWorkspaceId: uuid!, $type: String!) {
    __typename
    check_client_by_phone(
      args: { p_phone: $phone, p_owner_workspace_id: $ownerWorkspaceId, p_type: $type }
    ) {
      __typename
      json
    }
  }
`,Re=`
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
`,Ue=`
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
`,Le=`
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
`,Pe=`
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
`,We=`
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
`,je=`
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
`,Be=`
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
`,Fe=`
  query GetClientTemplateCustomFields($args: getclienttemplatecustomfieldsjson_args!) {
    __typename
    getclienttemplatecustomfieldsjson(args: $args) {
      __typename
      json
    }
  }
`,Oe=`
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
`,Ge=`
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
`,qe=`
  query GetWorkspaceClientTags($p_workspace_client_id: uuid!, $p_workspace_id: uuid!) {
    __typename
    get_workspace_client_tags_json(
      args: { p_workspace_client_id: $p_workspace_client_id, p_workspace_id: $p_workspace_id }
    ) {
      __typename
      json
    }
  }
`,Me=`
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
`,Q=`
  query ListRegistrationsBatchAddDrafts($selectedworkspaceid: uuid!, $selectedslug: String!) {
    __typename
    getonboardingdraftsbyworkspacejson(
      args: { selectedworkspaceid: $selectedworkspaceid, selectedslug: $selectedslug }
    ) {
      __typename
      json
    }
  }
`,Z=`
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
`,ze=`
  query EnqueueCreateClientBatch($input: enqueuecreateclientbatchjson_args!) {
    __typename
    enqueuecreateclientbatchjson(args: $input) {
      __typename
      json
    }
  }
`,Ve=`
  query EnqueueUpdateClientStatusBatch($input: enqueueupdateclientstatusbatchjson_args!) {
    __typename
    enqueueupdateclientstatusbatchjson(args: $input) {
      __typename
      json
    }
  }
`,He=`
  query GetProcessingQueueActionStatus($sessionworkspaceid: uuid!) {
    __typename
    getprocessingqueueactionstatusjson(args: { sessionworkspaceid: $sessionworkspaceid }) {
      __typename
      json
    }
  }
`;function Ke(e){return e?p(e.payload).map(s=>i(s)).filter(s=>s!==null).map(s=>{const n=i(s.workspaceLink);if(!n)return null;const r=a(n.id);if(!r)return null;const o=p(n.permissionWorkspaces).map(c=>i(i(c)?.permission)).filter(c=>c!==null).map(c=>a(c.name)).filter(c=>c!==null);return{id:r,inviteLinkName:a(s.inviteLinkName),status:a(n.status),createdAt:a(n.createdAt),client:h(i(n.workspaceClient)),senderWorkspace:h(i(n.senderWorkspace)),recipientWorkspace:h(i(n.recipientWorkspace)),permissionNames:o}}).filter(s=>s!==null):[]}function xe(e){return e?p(e.payload).map(t=>i(t)).filter(t=>t!==null).map(t=>{const s=i(t.workspaceClient),n=i(t.parentWorkspaceClient),r=i(t.fileUpload);return{parentWorkspaceClient:h(n),workspaceClient:h(s),fileUploadId:a(r?.id),fileUploadUrl:a(r?.url),permissionNames:p(t.permissions).map(o=>a(i(o)?.name)).filter(o=>o!==null)}}):[]}function Qe(e){if(!e)return null;const t=a(e.id);if(!t)return null;const s=["citySync","emailSync","typeSync","phoneSync","addressSync","numberSync","complementSync","zipCodeSync","emailOptSync","lastNameSync","logoPathSync","firstNameSync","legalNameSync","descriptionSync","brandingNameSync","ownerWorkspaceSync"],n={};for(const l of s)n[l]=a(e[l]);const o=p(e.primaryLink).map(l=>i(l)).find(l=>l!==null),c=p(e.workspaceLinkPermissions).map(l=>i(l)).filter(l=>l!==null).map(l=>({id:a(l.id)??"",name:a(l.name)??""})).filter(l=>l.id!==""||l.name!=="");return{id:t,type:a(e.type)??"PERSON",firstName:a(e.firstName),lastName:a(e.lastName),legalName:a(e.legalName),brandingName:a(e.brandingName),email:a(e.email),phone:a(e.phone),description:a(e.description),logoPath:a(e.logoPath),address:a(e.address),number:a(e.number),complement:a(e.complement),city:a(e.city),zipCode:a(e.zipCode),emailOpt:a(e.emailOpt),createdAt:a(e.createdAt),updatedAt:a(e.updatedAt),parentClient:a(e.parentClient),ownerWorkspaceId:a(e.ownerWorkspaceId),sync:n,primaryLinkStatus:a(o?.status),primaryLinkId:a(o?.id),permissions:c,customFields:Array.isArray(e.clientCustomFields)?e.clientCustomFields:[],raw:e}}function J(e){const t=a(e.id);if(!t)return null;const s=i(e.type);return{id:t,name:a(e.name)??"",categoryName:a(e.categoryName),complement:a(e.complement),activeDependents:g(e.activeDependents),inactiveDependents:g(e.inactiveDependents),totalDependents:g(e.totalDependents),typeLabel:a(s?.label),typeSlug:a(s?.slug)}}function Ze(e){return e?{option:a(e.syncOption??e.recognitionOption),requestManagerApproval:b(e.requestManagerApproval),status:a(e.status),fileUpload:W(e.fileUpload),originalFileUpload:W(e.originalFileUpload)}:null}function Je(e){return p(e).map(t=>i(t)).filter(t=>t!==null).map(t=>({changeType:a(t.changeType)??"",fileUpload:W(t.fileUpload),workspaceClient:h(i(t.workspaceClient)),responsibleWorkspace:h(i(t.responsibleWorkspace)),createdAt:a(t.createdAt)}))}function Ye(e){return{clientId:a(e.clientId)??a(e.workspaceClientId)??"",clientName:a(e.clientName)??a(e.displayName)??"",email:a(e.email)??"",phone:a(e.phone)??"",parentName:a(e.parentName)??"",permissionRole:a(e.permissionRole)??"",creatorName:a(e.creatorName)??"",creatorEmail:a(e.creatorEmail)??"",clientType:X(a(e.clientType))}}function Xe(e){return{clientId:a(e.clientId)??a(e.workspaceClientId)??"",clientName:a(e.clientName)??a(e.email)??"Sem nome",email:a(e.email)??"",clientType:X(a(e.clientType)??a(e.type)),linkStatus:a(e.linkStatus)??a(e.status)??"",parentName:a(e.parentName)??"",permissionRole:a(e.permissionRole)??"",memberDescription:a(e.memberDescription)??""}}function Y(e){const t=a(e.id)??a(e.contract_id)??a(e.contractId);if(!t)return null;const s=i(e.workspace_link_contract_template)??i(e.template)??i(e.workspaceLinkContractTemplate),n=i(s?.workspace_link_contract_cycle_type)??i(s?.cycleType),r=i(e.workspace)??i(e.contractedWorkspace)??i(e.workspaceByContractedworkspaceid);return{id:t,status:a(e.status)??a(e.contract_status)??"ACTIVE",priority:g(e.priority),startDate:a(e.startDate)??a(e.contract_start_date),endDate:a(e.endDate)??a(e.contract_end_date),payDay:g(e.payDay),renovationDay:g(e.renovationDay),templateId:a(s?.id),templateName:a(s?.name)??a(e.contract_template_name),cycleTypeName:a(n?.name),senderName:a(r?.brandingName)??a(r?.legalName)??a(e.contract_sender_name),value:g(s?.value)??g(e.value),creditExtension:pe(e.contractDetails)}}function et(e,t){switch((e??"").trim()){case"reservation-direct":return t?"Titular de área privativa":"Titular de reserva";case"reservation-dependent":return t?"Dependente de área privativa":"Dependente de reserva";case"authorization-direct":return"Autorização pessoal direta";case"group-authorization-member":return"Autorização por ser membro de grupo";case"group-hierarchy-authorization":return"Autorização por ser membro de grupo filho";default:return(e??"").replaceAll("-"," ").replaceAll("_"," ")||"Acesso"}}function tt(e){const t=i(y(e));return t?p(t.accessGrants??t.authorizations).map(n=>i(n)).filter(n=>n!==null).map((n,r)=>{const o=p(n.areas).map(k=>i(k)).filter(k=>k!==null),c=o[0],l=i(c?.occupationFormat)??i(c?.occupation_format),I=(a(l?.name)??"").trim().toLowerCase()==="private",C=a(n.accessReason)??a(n.authPath),f=i(n.workspaceLink);return{id:a(n.id)??`grant-${r}`,rank:g(n.rank)??r,label:et(C,I),status:a(f?.status),hasKeys:b(n.hasKeys),startDate:a(f?.startDate),endDate:a(f?.endDate),groupName:a(n.groupName),parentGroupName:a(n.parentGroupName),childGroupName:a(n.childGroupName),areas:o.map(k=>({id:a(k.id)??"",name:a(k.name)??""})),passages:p(n.passages).map(k=>a(i(k)?.name)).filter(k=>k!==null),isPrivateArea:I,isRecurrent:!1}}):[]}function at(e){const t=i(y(e)),s=Array.isArray(t?.authorizations)?t.authorizations:Array.isArray(t?.items)?t.items:Array.isArray(y(e))?y(e):[];return p(s).map(n=>i(n)).filter(n=>n!==null).map((n,r)=>{const o=i(n.workspaceLink)??n;return{id:a(n.id)??a(o.id)??`recurrent-${r}`,title:a(n.title)??a(n.linkTypeName)??"Autorização recorrente",status:a(o.status),startDate:a(o.startDate),endDate:a(o.endDate),recurrenceType:a(n.recurrenceType)??a(n.type),weekDays:p(n.weekDays).map(c=>a(c)).filter(c=>c!==null),excludeHolidays:b(n.excludeHolidays),areas:p(n.areas).map(c=>a(i(c)?.name)??a(c)).filter(c=>c!==null)}})}function nt(e){return e?p(e.payload).map(t=>i(t)).filter(t=>t!==null).map(t=>({id:a(t.id)??"",label:a(t.label)??"",templateId:a(t.templateId)??"",mandatory:b(t.mandatory),mask:a(t.mask),order:g(t.order)??0,personType:a(t.personType)})).filter(t=>t.id!=="").sort((t,s)=>t.order-s.order):[]}function st(e){return e?p(e.payload).map(t=>i(t)).filter(t=>t!==null).map(t=>{const s=i(t.workspaceClientDocumentTemplate);return{id:a(t.id)??"",value:a(t.value)??"",templateId:a(t.workspaceClientDocumentTemplateId)??a(s?.id),label:a(s?.label),mandatory:b(s?.mandatory),personType:a(s?.personType),sync:a(t.isSync)??"REQUESTED"}}):[]}function it(e){const t=i(y(e)),s=Array.isArray(t?.tags)?t.tags:Array.isArray(y(e))?y(e):[];return p(s).map(n=>i(n)).filter(n=>n!==null).map(n=>{const r=a(n.type)??"";return{id:a(n.id)??"",code:a(n.code)??"",type:r,status:a(n.status)??"ENABLED",displayName:a(n.displayName)??a(n.name)??r,imageUrl:a(n.imageUrl)??a(n.image_url),memberDescription:a(n.memberDescription)??a(n.workspaceClientMemberDescription),vehicleId:a(n.workspaceClientVehicleId)}}).filter(n=>n.id!==""||n.code!=="")}function rt(e){const t=i(y(e.payload))??e,s=a(e.id)??a(t.id);if(!s)return null;const n=p(t.items).map(r=>i(r)).filter(r=>r!==null).map((r,o)=>({id:a(r.id)??`item-${o}`,name:a(r.name)??"",email:a(r.email)??"",phone:a(r.phone)??"",type:a(r.type)??"PERSON"}));return{id:s,name:a(e.name)??a(t.name)??"Rascunho",updatedAt:a(e.updatedAt)??a(e.createdAt),companyWorkspaceClientId:a(t.companyWorkspaceClientId),companyDisplayName:a(t.companyDisplayName),items:n}}function ot(e){const t=i(y(e.payload))??e,s=a(e.id)??a(t.id);if(!s)return null;const n=p(t.items).map(c=>i(c)).filter(c=>c!==null).map(c=>({...Xe(c),status:a(c.status)??"draft"})),r=a(t.createdByFirstName),o=a(t.createdByLastName);return{id:s,name:a(e.name)??a(t.name)??"Rascunho",updatedAt:a(e.updatedAt)??a(e.createdAt),createdAt:a(t.createdAt)??a(e.createdAt),createdByName:[r,o].filter(Boolean).join(" ")||null,isUsed:(a(e.status)??a(t.status))==="used"||b(e.isUsed),items:n}}const ct={create_client_batch:"Criação de cadastros","7e8f9a0b-1c2d-4e5f-8a9b-0c1d2e3f4a5b":"Criação de cadastros",update_client_status_batch:"Remoção de cadastros","5a5868d0-5fb3-4463-a917-59ab45c847ce":"Remoção de cadastros"};function lt(e){return p(e).map(t=>{const s=i(t),n=y(s?.json??t);return(Array.isArray(n)?n:n?[n]:[]).map(o=>i(o)).filter(o=>o!==null)}).flat().map(t=>{const s=a(t.actionKey)??a(t.actionId);return{id:a(t.id)??a(t.queueId)??"",batchId:a(t.batchId),actionId:a(t.actionId),actionLabel:(s?ct[s]:null)??a(t.actionLabel)??"Processamento",status:a(t.status)??"PENDING",message:a(t.message),total:g(t.total),completed:g(t.completed),failed:g(t.failed),pending:g(t.pending),percentComplete:g(t.percentComplete),createdAt:a(t.createdAt)}}).filter(t=>t.id!=="").sort((t,s)=>(s.createdAt??"").localeCompare(t.createdAt??""))}const Lt={async getPendingApprovals(e){const t=await _($e,{workspaceId:e}),s=i(t.pendingApprovals),n=i(t.facialRecognitionPending);return{invites:Ke(s),facial:xe(n),reportedInviteLinkTotal:null}},async getWorkspacePendingApprovalsJson(e){const t=await _(he,{workspaceId:e}),s=i(t.get_workspace_pending_approvals_json),n=i(y(s?.json)),r=p(n?.pendingApprovals),o=[];for(const c of r){const l=i(c);if(!l)continue;const I=i(l.workspace_client)??i(l.workspaceClient),f=p(I?.primaryLink).map(w=>i(w)).find(w=>w!==null),k=a(f?.id)??a(I?.id);k&&o.push({id:k,inviteLinkName:a(f?.inviteLinkName),status:a(f?.status),createdAt:a(f?.createdAt),client:h(I),senderWorkspace:h(i(f?.senderWorkspace))??h(i(l.senderWorkspace)),recipientWorkspace:h(i(f?.recipientWorkspace)),permissionNames:p(l.permissions).map(w=>a(i(w)?.name)).filter(w=>w!==null)})}return{invites:o,facial:[],reportedInviteLinkTotal:g(n?.total)}},async setFacialRecognitionStatus(e){const t=await E(Ae,{clientId:e.clientId,status:e.status});K(i(t.setWorkspaceClientFacialRecognitionStatus),"Falha ao atualizar reconhecimento facial")},async removeWorkspaceClients(e){const t=e.map(s=>s.trim()).filter(Boolean);t.length&&await E(we,{idList:t})},async getClientsNoPagination(e){const t=await _(Te,{ownerId:e.ownerId,likeParam:e.likeParam??"",status:e.status??me,type:e.type??null,hierarchyType:e.hierarchyType??"{}",selectAllClients:e.selectAllClients??!0,selectedparentclient:e.selectedParentClientId?.trim()?e.selectedParentClientId:null},{timeoutMs:12e4}),s=p(t.getclients_v3_no_paginationjson),n=[];for(const r of s){const o=i(r);if(!o)continue;const c=i(o.json)??o,l=Ye(c);n.push(l)}return n},async searchBatchRemoveClients(e){return(await this.getClientsNoPagination({...e,status:e.status??"{ACCEPTED,PENDING}",hierarchyType:e.hierarchyType??"{}"})).map(s=>({clientId:s.clientId,clientName:s.clientName||s.email||"Sem nome",email:s.email,clientType:s.clientType,linkStatus:"",parentName:s.parentName,permissionRole:s.permissionRole,memberDescription:""})).filter(s=>s.clientId!=="")},async checkClientByEmail(e){const t=await _(De,{email:e.email,ownerWorkspaceId:e.ownerWorkspaceId,type:e.type});return a(i(t.workspace_client)?.id)},async checkClientByPhone(e){const t=await _(be,{phone:e.phone,ownerWorkspaceId:e.ownerWorkspaceId,type:e.type}),s=i(t.check_client_by_phone),n=i(y(s?.json));return p(n?.clients).map(r=>h(i(r))).filter(r=>r!==null)},async getClientData(e){const t=await _(Re,{clientId:e.clientId,clientIdCore:e.clientId}),s=i(p(t.getclientbyidjson)[0]),n=Qe(i(s?.json)??s),r=i(t.groupsByClient),o=p(r?.payload).map(C=>i(C)).filter(C=>C!==null).map(J).filter(C=>C!==null),c=Ze(i(i(t.recognitionSettingByWorkspaceClientId)?.payload)),l=i(t.facialRecognitionHistory),I=Je(l?.payload);return{client:n,groups:o,recognition:c,recognitionHistory:I}},async updateWorkspaceClient(e){const t=await E(Ue,{inputWorkspaceClient:e.clientId,inputCreatorUserId:e.creatorUserId,inputSenderWorkspace:e.senderWorkspaceId,inputEmail:e.email,inputType:e.type,inputFirstName:e.firstName,inputLastName:e.lastName,inputLogoPath:e.logoPath,inputLegalName:e.legalName,inputBrandingName:e.brandingName,inputAddress:e.address,inputNumber:e.number,inputCity:e.city,inputZipCode:e.zipCode,inputComplement:e.complement,inputPermission:e.permission||ue,inputEmailSync:e.emailSync,inputTypeSync:e.typeSync,inputFirstNameSync:e.firstNameSync,inputLastNameSync:e.lastNameSync,inputLogoPathSync:e.logoPathSync,inputEmailOptSync:e.emailOptSync,inputLegalNameSync:e.legalNameSync,inputBrandingNameSync:e.brandingNameSync,inputAddressSync:e.addressSync,inputNumberSync:e.numberSync,inputCitySync:e.citySync,inputZipCodeSync:e.zipCodeSync,inputComplementSync:e.complementSync,inputOwnerWorkspaceSync:e.ownerWorkspaceSync,inputPhone:e.phone,inputPhoneSync:e.phoneSync,inputParentWorkspaceClient:e.parentWorkspaceClient,inputPermissionRole:e.permissionRole,inputDescription:e.description,inputDescriptionSync:e.descriptionSync,inputCustomFields:e.customFields,inputDocuments:e.documents,inputGroupIds:e.groupIds,workspaceClientRecognitionSettings:e.recognitionSettings});K(i(t.UpdateWorkspaceClient_CORE),"Falha ao atualizar cadastro")},async getContractsByClient(e){const t=new Map;try{const s=await _(Le,{p_workspace_client_id:e.clientId,p_selected_workspace_id:e.workspaceId},{timeoutMs:6e4}),n=p(s.get_client_contracts_jsonb);for(const r of n){const o=i(r);if(o)for(const c of L(o.json??o)){const l=Y(c);l&&t.set(l.id,l)}}}catch{}try{const s=await _(Pe,{clientId:e.clientId});for(const n of p(s.workspace_link_contract)){const r=i(n);if(!r)continue;const o=Y(r);o&&!t.has(o.id)&&t.set(o.id,o)}}catch{}return[...t.values()]},async getClientAuthorizedAreasPassages(e){const t=await _(We,{p_workspace_client_id:e.clientId,p_user_id:e.userId,p_workspace_id:e.workspaceId},{timeoutMs:45e3}),s=i(t.get_workspace_client_authorized_areas_passages_json);return tt(s?.json)},async getRecurrentAuthorizations(e){const t=await _(je,{p_workspace_client_id:e.clientId,p_limit:e.limit??10,p_offset:e.offset??0},{timeoutMs:45e3}),s=i(t.get_recurrent_authorizations_by_workspace_client_json);return at(s?.json)},async getGroupsByClient(e){const t=await _(Be,{clientId:e}),s=i(t.groupsByClient);return p(s?.payload).map(n=>i(n)).filter(n=>n!==null).map(J).filter(n=>n!==null)},async getClientTemplateCustomFields(e){const t=await _(Fe,{args:{selectedfilters:{personType:e.personType},selectedworkspaceid:e.workspaceId}}),s=p(t.getclienttemplatecustomfieldsjson),n=i(s[0]);return L(n?.json).map(r=>{const o=i(r.payload);return{name:a(r.name)??"",valueType:a(r.valueType)??"text",mandatory:b(o?.mandatory),personType:a(o?.personType),templateId:a(o?.templateId)??""}}).filter(r=>r.templateId!=="")},async getDocumentFields(e){const t=await _(Oe,{workspaceId:e});return nt(i(t.workspaceDocumentClientFields))},async getDocumentValues(e){const t=await _(Ge,{workspaceId:e.workspaceId,clientId:e.clientId});return st(i(t.workspaceDocumentClients))},async getClientTags(e){const t=await _(qe,{p_workspace_client_id:e.clientId,p_workspace_id:e.workspaceId});return it(i(t.get_workspace_client_tags_json)?.json)},async setClientTag(e){const t=await E(Me,{p_action:e.action,p_id:e.tagId??null,p_workspace_id:e.workspaceId,p_code:e.code,p_workspace_client_id:e.clientId,p_workspace_client_vehicle_id:e.vehicleId??null,p_status:e.status??"ENABLED",p_type:e.type}),s=i(t.set_workspace_client_tag),n=i(y(s?.json));if(n&&n.success===!1)throw new Error(p(n.errorMessages).join("; ")||"Falha ao atualizar TAG")},async listBatchAddDrafts(e){const t=await _(Q,{selectedworkspaceid:e,selectedslug:O}),s=i(t.getonboardingdraftsbyworkspacejson);return L(s?.json).map(rt).filter(n=>n!==null).sort((n,r)=>(r.updatedAt??"").localeCompare(n.updatedAt??""))},async listBatchRemoveDrafts(e){const t=await _(Q,{selectedworkspaceid:e,selectedslug:F}),s=i(t.getonboardingdraftsbyworkspacejson);return L(s?.json).map(ot).filter(n=>n!==null&&!n.isUsed).sort((n,r)=>(r.updatedAt??"").localeCompare(n.updatedAt??""))},async saveBatchAddDraft(e){const t={kind:"registrations-batch-add",companyWorkspaceClientId:e.companyWorkspaceClientId,companyDisplayName:e.companyDisplayName,items:e.items.map(o=>({type:o.type,email:o.email,...o.name?{name:o.name}:{},...o.phone?{phone:o.phone}:{}}))},s=await E(Z,{p_id:e.draftId??null,p_slug:O,p_payload:t,p_recipient_workspace:e.workspaceId,p_name:e.name,p_reference_of:"workspace",p_valuetype:"json"}),n=i(s.set_general_preference_json_v2),r=i(y(n?.json));return a(r?.id)},async saveBatchRemoveDraft(e){const t=e.status??"draft",s={kind:"registrations-batch-remove",status:t,createdAt:new Date().toISOString(),createdByFirstName:e.createdByFirstName??null,createdByLastName:e.createdByLastName??null,items:e.items.map(c=>({workspaceClientId:c.clientId,displayName:c.clientName,...c.email?{email:c.email}:{},type:c.clientType,status:c.status,...c.parentName?{parentName:c.parentName}:{},...c.permissionRole?{permissionRole:c.permissionRole}:{},...c.memberDescription?{memberDescription:c.memberDescription}:{}}))};t==="used"&&(s.usedAt=new Date().toISOString(),s.usedByFirstName=e.createdByFirstName??null,s.usedByLastName=e.createdByLastName??null);const n=await E(Z,{p_id:e.draftId??null,p_slug:F,p_payload:s,p_recipient_workspace:e.workspaceId,p_name:e.name,p_reference_of:"workspace",p_valuetype:"json"}),r=i(n.set_general_preference_json_v2),o=i(y(r?.json));return a(o?.id)},async enqueueCreateClientBatch(e){const t=await _(ze,{input:{sessionworkspaceid:e.sessionWorkspaceId,companyworkspaceclientid:e.companyWorkspaceClientId,items:e.items.map(o=>({type:o.type,email:o.email,...o.name?{name:o.name}:{},...o.phone?{phone:o.phone}:{}}))}}),s=i(t.enqueuecreateclientbatchjson),n=i(y(s?.json));return{success:n?.success!==!1,message:a(n?.message)??a(n?.error),enqueuedCount:g(n?.enqueuedCount)??g(n?.count)}},async enqueueUpdateClientStatusBatch(e){const t=e.clientIds.map(c=>c.trim()).filter(Boolean);if(!t.length)throw new Error("Selecione ao menos um cadastro");const s=await _(Ve,{input:{sessionworkspaceid:e.sessionWorkspaceId,status:e.status,workspace_clients_ids:de(t)}}),n=i(s.enqueueupdateclientstatusbatchjson),r=i(y(n?.json));return{success:r?.success!==!1,message:a(r?.message)??a(r?.error),enqueuedCount:g(r?.enqueuedCount)??t.length}},async getProcessingQueueActionStatus(e){const t=await _(He,{sessionworkspaceid:e}),s=i(t.getprocessingqueueactionstatusjson);return lt(s?.json)},async listRunningProcessingQueues(e){return this.getProcessingQueueActionStatus(e)},async addWorkspaceClientPermissions(e){const t=e.permissionIds.map(n=>n.trim()).filter(Boolean);if(!e.workspaceId||!e.workspaceClientId||!e.userId||t.length===0)throw new Error("Dados insuficientes para adicionar permissão");const s=await E(ve,{workspaceId:e.workspaceId,workspaceClientId:e.workspaceClientId,userId:e.userId,permissionIds:t});x(s.add_workspace_client_permissions_json,"Falha ao adicionar permissão")},async removeWorkspaceClientPermissions(e){const t=e.permissionIds.map(n=>n.trim()).filter(Boolean);if(!e.workspaceId||!e.workspaceClientId||!e.userId||t.length===0)throw new Error("Dados insuficientes para remover permissão");const s=await E(Ee,{userId:e.userId,workspaceId:e.workspaceId,workspaceClientId:e.workspaceClientId,permissionIds:t});x(s.remove_workspace_client_permissions_json,"Falha ao remover permissão")}},pt={class:"facial-card"},dt={class:"facial-card__header"},ut=["title"],mt={key:0,class:"facial-card__manual"},_t={class:"facial-card__thumb"},yt=["src"],gt={key:1,class:"pi pi-user"},kt={class:"facial-card__manual-actions"},ft={key:1,class:"facial-card__approval"},It={for:"facial-approval"},Ct={key:2,class:"facial-card__progress"},St={class:"haila-muted"},Nt={class:"facial-card__messages"},$t={key:5,class:"facial-card__history"},ht={class:"facial-card__history-label"},At={class:"facial-card__history-meta"},wt=_e({__name:"RegistrationsFacialSettingsCard",props:{option:{},requestApproval:{type:Boolean},fileUploadId:{},fileUploadUrl:{},isLocalClient:{type:Boolean},disabled:{type:Boolean},history:{}},emits:["update:option","update:requestApproval","update:fileUpload","validationRunning"],setup(e,{emit:t}){const s=e,n=t,{t:r}=ye(),o=D(!1),c=D(null),l=D(!1),I=D(null),C=D([]),f=D(null),k=D(!1),w=P(()=>{const u=[{label:r("registrations.profile.recognition.manual"),value:"Manual"},{label:r("registrations.profile.recognition.userSync"),value:"UserSync"},{label:r("registrations.profile.recognition.noRecognition"),value:"NoRecognition"}];return s.isLocalClient?u.filter(d=>d.value!=="UserSync"):u}),j=P(()=>f.value??s.fileUploadUrl),ee=P(()=>{const u=[...s.history??[]];return u.sort((d,m)=>(m.createdAt??"").localeCompare(d.createdAt??"")),k.value?u:u.slice(0,1)});function te(u){n("update:option",u),C.value=[],I.value=null,u!=="Manual"&&n("update:fileUpload",null),u!=="UserSync"&&n("update:requestApproval",!1)}function ae(u){n("update:requestApproval",u)}async function B(u,d){l.value=!0,n("validationRunning",!0),I.value=null,C.value=[];try{const m=await Ce.uploadAndValidateManualPhoto(u,d,{contact:!0});f.value&&URL.revokeObjectURL(f.value),f.value=URL.createObjectURL(u),n("update:fileUpload",{fileUploadId:m.fileUploadId,originalFileUploadId:m.originalFileUploadId,fileUploadUrl:m.fileUploadUrl})}catch(m){if(m instanceof Se){C.value=m.messages;return}const R=ce(m);I.value=R.includes("Validation failed")?r("registrations.profile.recognition.validationError",{message:R}):r("registrations.profile.recognition.uploadError",{message:R})}finally{l.value=!1,n("validationRunning",!1)}}function ne(u){B(u,"selfie.jpg")}function se(u){const d=u.target,m=d.files?.[0];d.value="",m&&B(m,m.name||"selfie.jpg")}function ie(u){return u==="Requested"?r("registrations.profile.recognition.historyRequested"):u==="AcceptedByClient"?r("registrations.profile.recognition.historyAccepted"):u==="Manual"?r("registrations.profile.recognition.historyManual"):u||"—"}function re(u){const d=u.responsibleWorkspace;return d?d.type==="LEGAL_PERSON"?d.brandingName??d.legalName??"":`${d.firstName??""} ${d.lastName??""}`.trim():""}function oe(u){if(!u)return"";const d=new Date(u);return Number.isNaN(d.getTime())?"":d.toLocaleDateString("pt-BR",{day:"2-digit",month:"short",year:"numeric"})}return(u,d)=>(S(),$("section",pt,[A("header",dt,[A("h3",null,v(N(r)("registrations.profile.recognition.title")),1),e.option==="UserSync"?(S(),$("i",{key:0,class:"pi pi-question-circle facial-card__help",title:N(r)("registrations.profile.recognition.userSyncHelp")},null,8,ut)):T("",!0)]),U(N(ke),{"model-value":e.option,options:w.value,"option-label":"label","option-value":"value",disabled:e.disabled||l.value,class:"facial-card__select","onUpdate:modelValue":d[0]||(d[0]=m=>te(String(m)))},null,8,["model-value","options","disabled"]),e.option==="Manual"?(S(),$("div",mt,[A("div",_t,[j.value?(S(),$("img",{key:0,src:j.value,alt:""},null,8,yt)):(S(),$("i",gt))]),A("div",kt,[U(N(V),{icon:"pi pi-camera",label:N(r)("registrations.profile.recognition.camera"),size:"small",disabled:e.disabled||l.value,onClick:d[1]||(d[1]=m=>o.value=!0)},null,8,["label","disabled"]),U(N(V),{icon:"pi pi-image",label:N(r)("registrations.profile.recognition.gallery"),size:"small",severity:"secondary",outlined:"",disabled:e.disabled||l.value,onClick:d[2]||(d[2]=m=>c.value?.click())},null,8,["label","disabled"])]),A("input",{ref_key:"fileInput",ref:c,type:"file",accept:"image/*",class:"facial-card__file",onChange:se},null,544)])):T("",!0),e.option==="UserSync"?(S(),$("div",ft,[U(N(fe),{"model-value":e.requestApproval,binary:"","input-id":"facial-approval",disabled:e.disabled||l.value,"onUpdate:modelValue":d[3]||(d[3]=m=>ae(!!m))},null,8,["model-value","disabled"]),A("label",It,v(N(r)("registrations.profile.recognition.requestApproval")),1)])):T("",!0),l.value?(S(),$("div",Ct,[U(N(Ie),{mode:"indeterminate",style:{height:"6px"}}),A("small",St,v(N(r)("registrations.profile.recognition.uploading")),1)])):T("",!0),I.value?(S(),G(N(H),{key:3,severity:"error",closable:!1},{default:q(()=>[ge(v(I.value),1)]),_:1})):T("",!0),C.value.length?(S(),G(N(H),{key:4,severity:"warn",closable:!1},{default:q(()=>[A("ul",Nt,[(S(!0),$(M,null,z(C.value,(m,R)=>(S(),$("li",{key:R},v(m),1))),128))])]),_:1})):T("",!0),e.history&&e.history.length?(S(),$("div",$t,[A("h4",null,v(N(r)("registrations.profile.recognition.historyTitle")),1),(S(!0),$(M,null,z(ee.value,m=>(S(),$("button",{key:`${m.changeType}-${m.createdAt}`,type:"button",class:"facial-card__history-item",onClick:d[4]||(d[4]=R=>k.value=!k.value)},[A("span",ht,v(ie(m.changeType)),1),A("span",At,v(re(m))+" · "+v(oe(m.createdAt)),1)]))),128))])):T("",!0),U(Ne,{visible:o.value,"onUpdate:visible":d[5]||(d[5]=m=>o.value=m),onCaptured:ne},null,8,["visible"])]))}}),Pt=le(wt,[["__scopeId","data-v-d728193e"]]);export{Pt as R,Lt as r};
