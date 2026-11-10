import{a4 as E,G as g,aq as z,K as pe,_ as de}from"./index-DD36l1xy.js";import{g as V}from"./general-preference.service-Dy77C-aq.js";import{p as ue}from"./contract-DwGPrr_G.js";import{f as me,B as O,a as F,D as _e,R as ye}from"./registration-mdmEyEOo.js";import{M as ge,N as ke,d as S,j as h,k as w,t as v,P as N,f as D,y as L,e as H,x as K,B as fe,F as x,A as Q,a as b,D as G}from"./vue-DU9JAMBm.js";import{w as Ie,s as Z,q as Ce,v as Se,m as J}from"./primeui-DgEjmqBd.js";import{f as Ne,F as $e}from"./face-recognition.service-B7PYSpzs.js";import{C as he}from"./CameraCaptureDialog-tM3Q3R8q.js";function i(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)?e:null}function p(e){return Array.isArray(e)?e:[]}function t(e){if(e==null)return null;const a=String(e).trim();return a===""?null:a}function f(e){if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"&&e.trim()!==""){const a=Number(e);return Number.isFinite(a)?a:null}return null}function R(e){return e===!0||e==="true"}function k(e){if(typeof e!="string")return e;const a=e.trim();if(!a)return null;if(!a.startsWith("{")&&!a.startsWith("["))return e;try{return JSON.parse(a)}catch{return e}}function W(e){const a=k(e);return(Array.isArray(a)?a:a?[a]:[]).map(n=>i(n)).filter(n=>n!==null)}function Y(e,a){if(!e||e.success!==!0){const s=p(e?.errorMessages).map(n=>String(n));throw new Error(s.length?s.join("; "):a)}}function X(e,a){const s=Array.isArray(e)?e[0]:e,n=i(s),r=i(k(n?.json))??n;if(!r||r.success!==!1)return;const o=p(r.errorMessages).map(c=>String(c).trim()).filter(Boolean).join("; ");throw new Error(t(r.message)??(o||a))}function A(e){if(!e)return null;const a=t(e.id);return a?{id:a,type:t(e.type),firstName:t(e.firstName),lastName:t(e.lastName),brandingName:t(e.brandingName),legalName:t(e.legalName),email:t(e.email),phone:t(e.phone),logoPath:t(e.logoPath)}:null}function q(e){const a=i(e);if(!a)return null;const s=t(a.id);return s?{id:s,key:t(a.key),url:t(a.url),createdAt:t(a.createdAt),deletedAt:t(a.deletedAt)}:null}function se(e){switch((e??"").trim().toLowerCase()){case"empresa":case"legal_person":return"LEGAL_PERSON";case"pessoa":case"person":return"PERSON";default:return e?.trim()||"PERSON"}}const Ae=`
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
`,we=`
  query GetWorkspacePendingApprovalsJson($workspaceId: uuid!) {
    __typename
    get_workspace_pending_approvals_json(args: { p_workspace_id: $workspaceId }) {
      __typename
      json
    }
  }
`,ve=`
  mutation SetWorkspaceClientFacialRecognitionStatus($clientId: UUID!, $status: String!) {
    __typename
    setWorkspaceClientFacialRecognitionStatus(workspaceClientId: $clientId, status: $status) {
      __typename
      success
      errorMessages
    }
  }
`,Te=`
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
`,Ee=`
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
`,De=`
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
`,be=`
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
`,Re=`
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
`,Ue=`
  query CheckClientByPhone($phone: String!, $ownerWorkspaceId: uuid!, $type: String!) {
    __typename
    check_client_by_phone(
      args: { p_phone: $phone, p_owner_workspace_id: $ownerWorkspaceId, p_type: $type }
    ) {
      __typename
      json
    }
  }
`,Le=`
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
`,Pe=`
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
`,We=`
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
`,je=`
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
`,Be=`
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
`,Oe=`
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
`,Fe=`
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
`,Ge=`
  query GetClientTemplateCustomFields($args: getclienttemplatecustomfieldsjson_args!) {
    __typename
    getclienttemplatecustomfieldsjson(args: $args) {
      __typename
      json
    }
  }
`,qe=`
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
`,Me=`
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
`,ze=`
  query GetWorkspaceClientTags($p_workspace_client_id: uuid!, $p_workspace_id: uuid!) {
    __typename
    get_workspace_client_tags_json(
      args: { p_workspace_client_id: $p_workspace_client_id, p_workspace_id: $p_workspace_id }
    ) {
      __typename
      json
    }
  }
`,Ve=`
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
`,ee=`
  query ListRegistrationsBatchAddDrafts($selectedworkspaceid: uuid!, $selectedslug: String!) {
    __typename
    getonboardingdraftsbyworkspacejson(
      args: { selectedworkspaceid: $selectedworkspaceid, selectedslug: $selectedslug }
    ) {
      __typename
      json
    }
  }
`,te=`
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
`,He=`
  query EnqueueCreateClientBatch($input: enqueuecreateclientbatchjson_args!) {
    __typename
    enqueuecreateclientbatchjson(args: $input) {
      __typename
      json
    }
  }
`,Ke=`
  query EnqueueUpdateClientStatusBatch($input: enqueueupdateclientstatusbatchjson_args!) {
    __typename
    enqueueupdateclientstatusbatchjson(args: $input) {
      __typename
      json
    }
  }
`,xe=`
  query GetProcessingQueueActionStatus($sessionworkspaceid: uuid!) {
    __typename
    getprocessingqueueactionstatusjson(args: { sessionworkspaceid: $sessionworkspaceid }) {
      __typename
      json
    }
  }
`;function Qe(e){return e?p(e.payload).map(s=>i(s)).filter(s=>s!==null).map(s=>{const n=i(s.workspaceLink);if(!n)return null;const r=t(n.id);if(!r)return null;const o=p(n.permissionWorkspaces).map(c=>i(i(c)?.permission)).filter(c=>c!==null).map(c=>t(c.name)).filter(c=>c!==null);return{id:r,inviteLinkName:t(s.inviteLinkName),status:t(n.status),createdAt:t(n.createdAt),client:A(i(n.workspaceClient)),senderWorkspace:A(i(n.senderWorkspace)),recipientWorkspace:A(i(n.recipientWorkspace)),permissionNames:o}}).filter(s=>s!==null):[]}function Ze(e){return e?p(e.payload).map(a=>i(a)).filter(a=>a!==null).map(a=>{const s=i(a.workspaceClient),n=i(a.parentWorkspaceClient),r=i(a.fileUpload);return{parentWorkspaceClient:A(n),workspaceClient:A(s),fileUploadId:t(r?.id),fileUploadUrl:t(r?.url),permissionNames:p(a.permissions).map(o=>t(i(o)?.name)).filter(o=>o!==null)}}):[]}function Je(e){if(!e)return null;const a=t(e.id);if(!a)return null;const s=["citySync","emailSync","typeSync","phoneSync","addressSync","numberSync","complementSync","zipCodeSync","emailOptSync","lastNameSync","logoPathSync","firstNameSync","legalNameSync","descriptionSync","brandingNameSync","ownerWorkspaceSync"],n={};for(const l of s)n[l]=t(e[l]);const o=p(e.primaryLink).map(l=>i(l)).find(l=>l!==null),c=p(e.workspaceLinkPermissions).map(l=>i(l)).filter(l=>l!==null).map(l=>({id:t(l.id)??"",name:t(l.name)??""})).filter(l=>l.id!==""||l.name!==""),_=p(o?.permissions).map(l=>i(l)).filter(l=>l!==null).map(l=>({id:t(l.id)??"",name:t(l.name)??""})).filter(l=>l.id!==""||l.name!==""),C=_.length>0?_:c;return{id:a,type:t(e.type)??"PERSON",firstName:t(e.firstName),lastName:t(e.lastName),legalName:t(e.legalName),brandingName:t(e.brandingName),email:t(e.email),phone:t(e.phone),description:t(e.description),logoPath:t(e.logoPath),address:t(e.address),number:t(e.number),complement:t(e.complement),city:t(e.city),zipCode:t(e.zipCode),emailOpt:t(e.emailOpt),createdAt:t(e.createdAt),updatedAt:t(e.updatedAt),parentClient:t(e.parentClient),ownerWorkspaceId:t(e.ownerWorkspaceId),sync:n,primaryLinkStatus:t(o?.status),primaryLinkId:t(o?.id),permissions:C,customFields:Array.isArray(e.clientCustomFields)?e.clientCustomFields:[],raw:e}}function ae(e){const a=t(e.id);if(!a)return null;const s=i(e.type);return{id:a,name:t(e.name)??"",categoryName:t(e.categoryName),complement:t(e.complement),activeDependents:f(e.activeDependents),inactiveDependents:f(e.inactiveDependents),totalDependents:f(e.totalDependents),typeLabel:t(s?.label),typeSlug:t(s?.slug)}}function Ye(e){return e?{option:t(e.syncOption??e.recognitionOption),requestManagerApproval:R(e.requestManagerApproval),status:t(e.status),fileUpload:q(e.fileUpload),originalFileUpload:q(e.originalFileUpload)}:null}function Xe(e){return p(e).map(a=>i(a)).filter(a=>a!==null).map(a=>({changeType:t(a.changeType)??"",fileUpload:q(a.fileUpload),workspaceClient:A(i(a.workspaceClient)),responsibleWorkspace:A(i(a.responsibleWorkspace)),createdAt:t(a.createdAt)}))}function et(e){return{clientId:t(e.clientId)??t(e.workspaceClientId)??"",clientName:t(e.clientName)??t(e.displayName)??"",email:t(e.email)??"",phone:t(e.phone)??"",parentName:t(e.parentName)??"",permissionRole:t(e.permissionRole)??"",creatorName:t(e.creatorName)??"",creatorEmail:t(e.creatorEmail)??"",clientType:se(t(e.clientType))}}function tt(e){return{clientId:t(e.clientId)??t(e.workspaceClientId)??"",clientName:t(e.clientName)??t(e.email)??"Sem nome",email:t(e.email)??"",clientType:se(t(e.clientType)??t(e.type)),linkStatus:t(e.linkStatus)??t(e.status)??"",parentName:t(e.parentName)??"",permissionRole:t(e.permissionRole)??"",memberDescription:t(e.memberDescription)??""}}function ne(e){const a=t(e.id)??t(e.contract_id)??t(e.contractId);if(!a)return null;const s=i(e.workspace_link_contract_template)??i(e.template)??i(e.workspaceLinkContractTemplate),n=i(s?.workspace_link_contract_cycle_type)??i(s?.cycleType),r=i(e.workspace)??i(e.contractedWorkspace)??i(e.workspaceByContractedworkspaceid);return{id:a,status:t(e.status)??t(e.contract_status)??"ACTIVE",priority:f(e.priority),startDate:t(e.startDate)??t(e.contract_start_date),endDate:t(e.endDate)??t(e.contract_end_date),payDay:f(e.payDay),renovationDay:f(e.renovationDay),templateId:t(s?.id),templateName:t(s?.name)??t(e.contract_template_name),cycleTypeName:t(n?.name),senderName:t(r?.brandingName)??t(r?.legalName)??t(e.contract_sender_name),value:f(s?.value)??f(e.value),creditExtension:ue(e.contractDetails)}}function at(e,a){switch((e??"").trim()){case"reservation-direct":return a?"Titular de área privativa":"Titular de reserva";case"reservation-dependent":return a?"Dependente de área privativa":"Dependente de reserva";case"authorization-direct":return"Autorização pessoal direta";case"group-authorization-member":return"Autorização por ser membro de grupo";case"group-hierarchy-authorization":return"Autorização por ser membro de grupo filho";default:return(e??"").replaceAll("-"," ").replaceAll("_"," ")||"Acesso"}}function nt(e){const a=i(k(e));return a?p(a.accessGrants??a.authorizations).map(n=>i(n)).filter(n=>n!==null).map((n,r)=>{const o=p(n.areas).map(y=>i(y)).filter(y=>y!==null),c=o[0],_=i(c?.occupationFormat)??i(c?.occupation_format),C=(t(_?.name)??"").trim().toLowerCase()==="private",l=t(n.accessReason)??t(n.authPath),I=i(n.workspaceLink),T=i(n.authorizingLink),$=l==="group-authorization-member"||l==="group-hierarchy-authorization"?T??I:I,P=p(n.passages).map(y=>i(y)).filter(y=>y!==null).map(y=>({id:t(y.id)??"",name:t(y.name)??"",description:t(y.description)??t(y.deviceTypeName)??t(y.typeName)??null})).filter(y=>y.name!=="");return{id:t(n.id)??`grant-${r}`,rank:f(n.rank)??r,label:at(l,C),accessReason:l,status:t($?.status)??t(I?.status),hasKeys:R(n.hasKeys),startDate:t($?.startDate)??t(I?.startDate),endDate:t($?.endDate)??t(I?.endDate),groupName:t(n.groupName),parentGroupName:t(n.parentGroupName),childGroupName:t(n.childGroupName),areas:o.map(y=>{const j=i(y.parentArea)??i(y.areaHierarchy)??i(p(y.areaHierarchy)[0]),B=i(y.areaCategory)??i(y.area_category);return{id:t(y.id)??"",name:t(y.name)??"",categoryName:t(B?.name),parentName:t(j?.name)}}),passages:P.map(y=>y.name),passageItems:P,isPrivateArea:C,isRecurrent:!1}}):[]}function st(e){const a=i(k(e)),s=Array.isArray(a?.authorizations)?a.authorizations:Array.isArray(a?.items)?a.items:Array.isArray(k(e))?k(e):[];return p(s).map(n=>i(n)).filter(n=>n!==null).map((n,r)=>{const o=i(n.workspaceLink)??n;return{id:t(n.id)??t(o.id)??`recurrent-${r}`,title:t(n.title)??t(n.linkTypeName)??"Autorização recorrente",status:t(o.status),startDate:t(o.startDate),endDate:t(o.endDate),recurrenceType:t(n.recurrenceType)??t(n.type),weekDays:p(n.weekDays).map(c=>t(c)).filter(c=>c!==null),excludeHolidays:R(n.excludeHolidays),areas:p(n.areas).map(c=>t(i(c)?.name)??t(c)).filter(c=>c!==null)}})}function it(e){return e?p(e.payload).map(a=>i(a)).filter(a=>a!==null).map(a=>({id:t(a.id)??"",label:t(a.label)??"",templateId:t(a.templateId)??"",mandatory:R(a.mandatory),mask:t(a.mask),order:f(a.order)??0,personType:t(a.personType)})).filter(a=>a.id!=="").sort((a,s)=>a.order-s.order):[]}function rt(e){return e?p(e.payload).map(a=>i(a)).filter(a=>a!==null).map(a=>{const s=i(a.workspaceClientDocumentTemplate);return{id:t(a.id)??"",value:t(a.value)??"",templateId:t(a.workspaceClientDocumentTemplateId)??t(s?.id),label:t(s?.label),mandatory:R(s?.mandatory),personType:t(s?.personType),sync:t(a.isSync)??"REQUESTED"}}):[]}function ot(e){const a=i(k(e)),s=Array.isArray(a?.tags)?a.tags:Array.isArray(k(e))?k(e):[];return p(s).map(n=>i(n)).filter(n=>n!==null).map(n=>{const r=t(n.type)??"";return{id:t(n.id)??"",code:t(n.code)??"",type:r,status:t(n.status)??"ENABLED",displayName:t(n.displayName)??t(n.name)??r,imageUrl:t(n.imageUrl)??t(n.image_url),memberDescription:t(n.memberDescription)??t(n.workspaceClientMemberDescription),vehicleId:t(n.workspaceClientVehicleId)}}).filter(n=>n.id!==""||n.code!=="")}function ct(e){const a=i(k(e.payload))??e,s=t(e.id)??t(a.id);if(!s)return null;const n=p(a.items).map(r=>i(r)).filter(r=>r!==null).map((r,o)=>({id:t(r.id)??`item-${o}`,name:t(r.name)??"",email:t(r.email)??"",phone:t(r.phone)??"",type:t(r.type)??"PERSON"}));return{id:s,name:t(e.name)??t(a.name)??"Rascunho",updatedAt:t(e.updatedAt)??t(e.createdAt),companyWorkspaceClientId:t(a.companyWorkspaceClientId),companyDisplayName:t(a.companyDisplayName),items:n}}function lt(e){const a=i(k(e.payload))??e,s=t(e.id)??t(a.id);if(!s)return null;const n=p(a.items).map(c=>i(c)).filter(c=>c!==null).map(c=>({...tt(c),status:t(c.status)??"draft"})),r=t(a.createdByFirstName),o=t(a.createdByLastName);return{id:s,name:t(e.name)??t(a.name)??"Rascunho",updatedAt:t(e.updatedAt)??t(e.createdAt),createdAt:t(a.createdAt)??t(e.createdAt),createdByName:[r,o].filter(Boolean).join(" ")||null,isUsed:(t(e.status)??t(a.status))==="used"||R(e.isUsed),items:n}}const pt={create_client_batch:"Criação de cadastros","7e8f9a0b-1c2d-4e5f-8a9b-0c1d2e3f4a5b":"Criação de cadastros",update_client_status_batch:"Remoção de cadastros","5a5868d0-5fb3-4463-a917-59ab45c847ce":"Remoção de cadastros"};function dt(e){return p(e).map(a=>{const s=i(a),n=k(s?.json??a);return(Array.isArray(n)?n:n?[n]:[]).map(o=>i(o)).filter(o=>o!==null)}).flat().map(a=>{const s=t(a.actionKey)??t(a.actionId);return{id:t(a.id)??t(a.queueId)??"",batchId:t(a.batchId),actionId:t(a.actionId),actionLabel:(s?pt[s]:null)??t(a.actionLabel)??"Processamento",status:t(a.status)??"PENDING",message:t(a.message),total:f(a.total),completed:f(a.completed),failed:f(a.failed),pending:f(a.pending),percentComplete:f(a.percentComplete),createdAt:t(a.createdAt)}}).filter(a=>a.id!=="").sort((a,s)=>(s.createdAt??"").localeCompare(a.createdAt??""))}const jt={async getPendingApprovals(e){const a=await g(Ae,{workspaceId:e}),s=i(a.pendingApprovals),n=i(a.facialRecognitionPending);return{invites:Qe(s),facial:Ze(n),reportedInviteLinkTotal:null}},async getWorkspacePendingApprovalsJson(e){const a=await g(we,{workspaceId:e}),s=i(a.get_workspace_pending_approvals_json),n=i(k(s?.json)),r=p(n?.pendingApprovals),o=[];for(const c of r){const _=i(c);if(!_)continue;const C=i(_.workspace_client)??i(_.workspaceClient),I=p(C?.primaryLink).map($=>i($)).find($=>$!==null),T=t(I?.id)??t(C?.id);T&&o.push({id:T,inviteLinkName:t(I?.inviteLinkName),status:t(I?.status),createdAt:t(I?.createdAt),client:A(C),senderWorkspace:A(i(I?.senderWorkspace))??A(i(_.senderWorkspace)),recipientWorkspace:A(i(I?.recipientWorkspace)),permissionNames:p(_.permissions).map($=>t(i($)?.name)).filter($=>$!==null)})}return{invites:o,facial:[],reportedInviteLinkTotal:f(n?.total)}},async setFacialRecognitionStatus(e){const a=await E(ve,{clientId:e.clientId,status:e.status});Y(i(a.setWorkspaceClientFacialRecognitionStatus),"Falha ao atualizar reconhecimento facial")},async removeWorkspaceClients(e){const a=e.map(s=>s.trim()).filter(Boolean);a.length&&await E(Te,{idList:a})},async getClientsNoPagination(e){const a=await g(be,{ownerId:e.ownerId,likeParam:e.likeParam??"",status:e.status??ye,type:e.type??null,hierarchyType:e.hierarchyType??"{}",selectAllClients:e.selectAllClients??!0,selectedparentclient:e.selectedParentClientId?.trim()?e.selectedParentClientId:null},{timeoutMs:12e4}),s=p(a.getclients_v3_no_paginationjson),n=[];for(const r of s){const o=i(r);if(!o)continue;const c=i(o.json)??o,_=et(c);n.push(_)}return n},async searchBatchRemoveClients(e){return(await this.getClientsNoPagination({...e,status:e.status??"{ACCEPTED,PENDING}",hierarchyType:e.hierarchyType??"{}"})).map(s=>({clientId:s.clientId,clientName:s.clientName||s.email||"Sem nome",email:s.email,clientType:s.clientType,linkStatus:"",parentName:s.parentName,permissionRole:s.permissionRole,memberDescription:""})).filter(s=>s.clientId!=="")},async checkClientByEmail(e){const a=await g(Re,{email:e.email,ownerWorkspaceId:e.ownerWorkspaceId,type:e.type});return t(i(a.workspace_client)?.id)},async checkClientByPhone(e){const a=await g(Ue,{phone:e.phone,ownerWorkspaceId:e.ownerWorkspaceId,type:e.type}),s=i(a.check_client_by_phone),n=i(k(s?.json));return p(n?.clients).map(r=>A(i(r))).filter(r=>r!==null)},async getClientData(e){const a=await g(Le,{clientId:e.clientId,clientIdCore:e.clientId}),s=i(p(a.getclientbyidjson)[0]),n=Je(i(s?.json)??s),r=i(a.groupsByClient),o=p(r?.payload).map(l=>i(l)).filter(l=>l!==null).map(ae).filter(l=>l!==null),c=Ye(i(i(a.recognitionSettingByWorkspaceClientId)?.payload)),_=i(a.facialRecognitionHistory),C=Xe(_?.payload);return{client:n,groups:o,recognition:c,recognitionHistory:C}},async updateWorkspaceClient(e){const a=await E(Pe,{inputWorkspaceClient:e.clientId,inputCreatorUserId:e.creatorUserId,inputSenderWorkspace:e.senderWorkspaceId,inputEmail:e.email,inputType:e.type,inputFirstName:e.firstName,inputLastName:e.lastName,inputLogoPath:e.logoPath,inputLegalName:e.legalName,inputBrandingName:e.brandingName,inputAddress:e.address,inputNumber:e.number,inputCity:e.city,inputZipCode:e.zipCode,inputComplement:e.complement,inputPermission:e.permission||_e,inputEmailSync:e.emailSync,inputTypeSync:e.typeSync,inputFirstNameSync:e.firstNameSync,inputLastNameSync:e.lastNameSync,inputLogoPathSync:e.logoPathSync,inputEmailOptSync:e.emailOptSync,inputLegalNameSync:e.legalNameSync,inputBrandingNameSync:e.brandingNameSync,inputAddressSync:e.addressSync,inputNumberSync:e.numberSync,inputCitySync:e.citySync,inputZipCodeSync:e.zipCodeSync,inputComplementSync:e.complementSync,inputOwnerWorkspaceSync:e.ownerWorkspaceSync,inputPhone:e.phone,inputPhoneSync:e.phoneSync,inputParentWorkspaceClient:e.parentWorkspaceClient,inputPermissionRole:e.permissionRole,inputDescription:e.description,inputDescriptionSync:e.descriptionSync,inputCustomFields:e.customFields,inputDocuments:e.documents,inputGroupIds:e.groupIds,workspaceClientRecognitionSettings:e.recognitionSettings});Y(i(a.UpdateWorkspaceClient_CORE),"Falha ao atualizar cadastro")},async getContractsByClient(e){const a=new Map;try{const s=await g(We,{p_workspace_client_id:e.clientId,p_selected_workspace_id:e.workspaceId},{timeoutMs:6e4}),n=p(s.get_client_contracts_jsonb);for(const r of n){const o=i(r);if(o)for(const c of W(o.json??o)){const _=ne(c);_&&a.set(_.id,_)}}}catch{}try{const s=await g(je,{clientId:e.clientId});for(const n of p(s.workspace_link_contract)){const r=i(n);if(!r)continue;const o=ne(r);o&&!a.has(o.id)&&a.set(o.id,o)}}catch{}return[...a.values()]},async getClientAuthorizedAreasPassages(e){const s=(await g(Be,{p_workspace_client_id:e.clientId,p_user_id:e.userId,p_workspace_id:e.workspaceId},{timeoutMs:45e3})).get_workspace_client_authorized_areas_passages_json,n=Array.isArray(s)?i(s[0]):i(s);return nt(n?.json)},async getRecurrentAuthorizations(e){const a=await g(Oe,{p_workspace_client_id:e.clientId,p_limit:e.limit??10,p_offset:e.offset??0},{timeoutMs:45e3}),s=i(a.get_recurrent_authorizations_by_workspace_client_json);return st(s?.json)},async getGroupsByClient(e){const a=await g(Fe,{clientId:e}),s=i(a.groupsByClient);return p(s?.payload).map(n=>i(n)).filter(n=>n!==null).map(ae).filter(n=>n!==null)},async getClientTemplateCustomFields(e){const a=await g(Ge,{args:{selectedfilters:{personType:e.personType},selectedworkspaceid:e.workspaceId}}),s=p(a.getclienttemplatecustomfieldsjson),n=i(s[0]);return W(n?.json).map(r=>{const o=i(r.payload);return{name:t(r.name)??"",valueType:t(r.valueType)??"text",mandatory:R(o?.mandatory),personType:t(o?.personType),templateId:t(o?.templateId)??""}}).filter(r=>r.templateId!=="")},async getDocumentFields(e){const a=await g(qe,{workspaceId:e});return it(i(a.workspaceDocumentClientFields))},async getDocumentValues(e){const a=await g(Me,{workspaceId:e.workspaceId,clientId:e.clientId});return rt(i(a.workspaceDocumentClients))},async getClientTags(e){const a=await g(ze,{p_workspace_client_id:e.clientId,p_workspace_id:e.workspaceId});return ot(i(a.get_workspace_client_tags_json)?.json)},async setClientTag(e){const a=await E(Ve,{p_action:e.action,p_id:e.tagId??null,p_workspace_id:e.workspaceId,p_code:e.code,p_workspace_client_id:e.clientId,p_workspace_client_vehicle_id:e.vehicleId??null,p_status:e.status??"ENABLED",p_type:e.type}),s=i(a.set_workspace_client_tag),n=i(k(s?.json));if(n&&n.success===!1)throw new Error(p(n.errorMessages).join("; ")||"Falha ao atualizar TAG")},async listBatchAddDrafts(e){const a=await g(ee,{selectedworkspaceid:e,selectedslug:F}),s=i(a.getonboardingdraftsbyworkspacejson);return W(s?.json).map(ct).filter(n=>n!==null).sort((n,r)=>(r.updatedAt??"").localeCompare(n.updatedAt??""))},async listBatchRemoveDrafts(e){const a=await g(ee,{selectedworkspaceid:e,selectedslug:O}),s=i(a.getonboardingdraftsbyworkspacejson);return W(s?.json).map(lt).filter(n=>n!==null&&!n.isUsed).sort((n,r)=>(r.updatedAt??"").localeCompare(n.updatedAt??""))},async saveBatchAddDraft(e){const a={kind:"registrations-batch-add",companyWorkspaceClientId:e.companyWorkspaceClientId,companyDisplayName:e.companyDisplayName,items:e.items.map(o=>({type:o.type,email:o.email,...o.name?{name:o.name}:{},...o.phone?{phone:o.phone}:{}}))};if(z==="java")return(await V.setGeneralPreference({id:e.draftId??null,slug:F,payload:a,name:e.name,referenceOf:"workspace",idReferenceOf:e.workspaceId,valueType:"json",sessionWorkspaceId:e.sessionWorkspaceId??e.workspaceId})).id;const s=await E(te,{p_id:e.draftId??null,p_slug:F,p_payload:a,p_recipient_workspace:e.workspaceId,p_name:e.name,p_reference_of:"workspace",p_valuetype:"json"}),n=i(s.set_general_preference_json_v2),r=i(k(n?.json));return t(r?.id)},async saveBatchRemoveDraft(e){const a=e.status??"draft",s={kind:"registrations-batch-remove",status:a,createdAt:new Date().toISOString(),createdByFirstName:e.createdByFirstName??null,createdByLastName:e.createdByLastName??null,items:e.items.map(c=>({workspaceClientId:c.clientId,displayName:c.clientName,...c.email?{email:c.email}:{},type:c.clientType,status:c.status,...c.parentName?{parentName:c.parentName}:{},...c.permissionRole?{permissionRole:c.permissionRole}:{},...c.memberDescription?{memberDescription:c.memberDescription}:{}}))};if(a==="used"&&(s.usedAt=new Date().toISOString(),s.usedByFirstName=e.createdByFirstName??null,s.usedByLastName=e.createdByLastName??null),z==="java")return(await V.setGeneralPreference({id:e.draftId??null,slug:O,payload:s,name:e.name,referenceOf:"workspace",idReferenceOf:e.workspaceId,valueType:"json",sessionWorkspaceId:e.sessionWorkspaceId??e.workspaceId})).id;const n=await E(te,{p_id:e.draftId??null,p_slug:O,p_payload:s,p_recipient_workspace:e.workspaceId,p_name:e.name,p_reference_of:"workspace",p_valuetype:"json"}),r=i(n.set_general_preference_json_v2),o=i(k(r?.json));return t(o?.id)},async enqueueCreateClientBatch(e){const a=await g(He,{input:{sessionworkspaceid:e.sessionWorkspaceId,companyworkspaceclientid:e.companyWorkspaceClientId,items:e.items.map(o=>({type:o.type,email:o.email,...o.name?{name:o.name}:{},...o.phone?{phone:o.phone}:{}}))}}),s=i(a.enqueuecreateclientbatchjson),n=i(k(s?.json));return{success:n?.success!==!1,message:t(n?.message)??t(n?.error),enqueuedCount:f(n?.enqueuedCount)??f(n?.count)}},async enqueueUpdateClientStatusBatch(e){const a=e.clientIds.map(c=>c.trim()).filter(Boolean);if(!a.length)throw new Error("Selecione ao menos um cadastro");const s=await g(Ke,{input:{sessionworkspaceid:e.sessionWorkspaceId,status:e.status,workspace_clients_ids:me(a)}}),n=i(s.enqueueupdateclientstatusbatchjson),r=i(k(n?.json));return{success:r?.success!==!1,message:t(r?.message)??t(r?.error),enqueuedCount:f(r?.enqueuedCount)??a.length}},async getProcessingQueueActionStatus(e){const a=await g(xe,{sessionworkspaceid:e}),s=i(a.getprocessingqueueactionstatusjson);return dt(s?.json)},async listRunningProcessingQueues(e){return this.getProcessingQueueActionStatus(e)},async addWorkspaceClientPermissions(e){const a=e.permissionIds.map(n=>n.trim()).filter(Boolean);if(!e.workspaceId||!e.workspaceClientId||!e.userId||a.length===0)throw new Error("Dados insuficientes para adicionar permissão");const s=await E(Ee,{workspaceId:e.workspaceId,workspaceClientId:e.workspaceClientId,userId:e.userId,permissionIds:a});X(s.add_workspace_client_permissions_json,"Falha ao adicionar permissão")},async removeWorkspaceClientPermissions(e){const a=e.permissionIds.map(n=>n.trim()).filter(Boolean);if(!e.workspaceId||!e.workspaceClientId||!e.userId||a.length===0)throw new Error("Dados insuficientes para remover permissão");const s=await E(De,{userId:e.userId,workspaceId:e.workspaceId,workspaceClientId:e.workspaceClientId,permissionIds:a});X(s.remove_workspace_client_permissions_json,"Falha ao remover permissão")}},ut={class:"facial-card"},mt={class:"facial-card__header"},_t=["title"],yt={key:0,class:"facial-card__manual"},gt={class:"facial-card__thumb"},kt=["src"],ft={key:1,class:"pi pi-user"},It={class:"facial-card__manual-actions"},Ct={key:1,class:"facial-card__approval"},St={for:"facial-approval"},Nt={key:2,class:"facial-card__progress"},$t={class:"haila-muted"},ht={class:"facial-card__messages"},At={key:5,class:"facial-card__history"},wt={class:"facial-card__history-label"},vt={class:"facial-card__history-meta"},Tt=ge({__name:"RegistrationsFacialSettingsCard",props:{option:{},requestApproval:{type:Boolean},fileUploadId:{},fileUploadUrl:{},isLocalClient:{type:Boolean},disabled:{type:Boolean},history:{}},emits:["update:option","update:requestApproval","update:fileUpload","validationRunning"],setup(e,{emit:a}){const s=e,n=a,{t:r}=ke(),o=b(!1),c=b(null),_=b(!1),C=b(null),l=b([]),I=b(null),T=b(!1),$=G(()=>{const u=[{label:r("registrations.profile.recognition.manual"),value:"Manual"},{label:r("registrations.profile.recognition.userSync"),value:"UserSync"},{label:r("registrations.profile.recognition.noRecognition"),value:"NoRecognition"}];return s.isLocalClient?u.filter(d=>d.value!=="UserSync"):u}),P=G(()=>I.value??s.fileUploadUrl),y=G(()=>{const u=[...s.history??[]];return u.sort((d,m)=>(m.createdAt??"").localeCompare(d.createdAt??"")),T.value?u:u.slice(0,1)});function j(u){n("update:option",u),l.value=[],C.value=null,u!=="Manual"&&n("update:fileUpload",null),u!=="UserSync"&&n("update:requestApproval",!1)}function B(u){n("update:requestApproval",u)}async function M(u,d){_.value=!0,n("validationRunning",!0),C.value=null,l.value=[];try{const m=await Ne.uploadAndValidateManualPhoto(u,d,{contact:!0});I.value&&URL.revokeObjectURL(I.value),I.value=URL.createObjectURL(u),n("update:fileUpload",{fileUploadId:m.fileUploadId,originalFileUploadId:m.originalFileUploadId,fileUploadUrl:m.fileUploadUrl})}catch(m){if(m instanceof $e){l.value=m.messages;return}const U=pe(m);C.value=U.includes("Validation failed")?r("registrations.profile.recognition.validationError",{message:U}):r("registrations.profile.recognition.uploadError",{message:U})}finally{_.value=!1,n("validationRunning",!1)}}function ie(u){M(u,"selfie.jpg")}function re(u){const d=u.target,m=d.files?.[0];d.value="",m&&M(m,m.name||"selfie.jpg")}function oe(u){return u==="Requested"?r("registrations.profile.recognition.historyRequested"):u==="AcceptedByClient"?r("registrations.profile.recognition.historyAccepted"):u==="Manual"?r("registrations.profile.recognition.historyManual"):u||"—"}function ce(u){const d=u.responsibleWorkspace;return d?d.type==="LEGAL_PERSON"?d.brandingName??d.legalName??"":`${d.firstName??""} ${d.lastName??""}`.trim():""}function le(u){if(!u)return"";const d=new Date(u);return Number.isNaN(d.getTime())?"":d.toLocaleDateString("pt-BR",{day:"2-digit",month:"short",year:"numeric"})}return(u,d)=>(S(),h("section",ut,[w("header",mt,[w("h3",null,v(N(r)("registrations.profile.recognition.title")),1),e.option==="UserSync"?(S(),h("i",{key:0,class:"pi pi-question-circle facial-card__help",title:N(r)("registrations.profile.recognition.userSyncHelp")},null,8,_t)):D("",!0)]),L(N(Ie),{"model-value":e.option,options:$.value,"option-label":"label","option-value":"value",disabled:e.disabled||_.value,class:"facial-card__select","onUpdate:modelValue":d[0]||(d[0]=m=>j(String(m)))},null,8,["model-value","options","disabled"]),e.option==="Manual"?(S(),h("div",yt,[w("div",gt,[P.value?(S(),h("img",{key:0,src:P.value,alt:""},null,8,kt)):(S(),h("i",ft))]),w("div",It,[L(N(Z),{icon:"pi pi-camera",label:N(r)("registrations.profile.recognition.camera"),size:"small",disabled:e.disabled||_.value,onClick:d[1]||(d[1]=m=>o.value=!0)},null,8,["label","disabled"]),L(N(Z),{icon:"pi pi-image",label:N(r)("registrations.profile.recognition.gallery"),size:"small",severity:"secondary",outlined:"",disabled:e.disabled||_.value,onClick:d[2]||(d[2]=m=>c.value?.click())},null,8,["label","disabled"])]),w("input",{ref_key:"fileInput",ref:c,type:"file",accept:"image/*",class:"facial-card__file",onChange:re},null,544)])):D("",!0),e.option==="UserSync"?(S(),h("div",Ct,[L(N(Ce),{"model-value":e.requestApproval,binary:"","input-id":"facial-approval",disabled:e.disabled||_.value,"onUpdate:modelValue":d[3]||(d[3]=m=>B(!!m))},null,8,["model-value","disabled"]),w("label",St,v(N(r)("registrations.profile.recognition.requestApproval")),1)])):D("",!0),_.value?(S(),h("div",Nt,[L(N(Se),{mode:"indeterminate",style:{height:"6px"}}),w("small",$t,v(N(r)("registrations.profile.recognition.uploading")),1)])):D("",!0),C.value?(S(),H(N(J),{key:3,severity:"error",closable:!1},{default:K(()=>[fe(v(C.value),1)]),_:1})):D("",!0),l.value.length?(S(),H(N(J),{key:4,severity:"warn",closable:!1},{default:K(()=>[w("ul",ht,[(S(!0),h(x,null,Q(l.value,(m,U)=>(S(),h("li",{key:U},v(m),1))),128))])]),_:1})):D("",!0),e.history&&e.history.length?(S(),h("div",At,[w("h4",null,v(N(r)("registrations.profile.recognition.historyTitle")),1),(S(!0),h(x,null,Q(y.value,m=>(S(),h("button",{key:`${m.changeType}-${m.createdAt}`,type:"button",class:"facial-card__history-item",onClick:d[4]||(d[4]=U=>T.value=!T.value)},[w("span",wt,v(oe(m.changeType)),1),w("span",vt,v(ce(m))+" · "+v(le(m.createdAt)),1)]))),128))])):D("",!0),L(he,{visible:o.value,"onUpdate:visible":d[5]||(d[5]=m=>o.value=m),onCaptured:ie},null,8,["visible"])]))}}),Bt=de(Tt,[["__scopeId","data-v-d728193e"]]);export{Bt as R,jt as r};
