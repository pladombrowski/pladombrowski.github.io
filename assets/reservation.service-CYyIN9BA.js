import{z as m,V as I}from"./index-B3kC9Ijv.js";function N(a){return!a||typeof a!="object"||Array.isArray(a)?null:a}function f(a){return a==null?"":String(a)}function T(a){if(typeof a!="string")return null;const e=a.trim();if(!e)return null;const t=new Date(e);return Number.isNaN(t.getTime())?null:t.toISOString()}function O(a){const e=Array.isArray(a)?a[0]:a,t=N(e);return t?{id:f(t.id).trim()||null,firstName:f(t.firstName).trim(),lastName:f(t.lastName).trim(),email:f(t.email).trim()}:null}function H(a){if(!a)return"";const e=`${a.firstName} ${a.lastName}`.trim();return e||a.email.trim()}function L(a){const e=N(a);if(!e)return null;const t=[],r=Array.isArray(e.areas)?e.areas:[];for(const n of r){const i=N(n),c=i?f(i.name).trim():f(n).trim();c&&t.push(c)}return{startDate:T(e.startDate),endDate:T(e.endDate),status:f(e.status).trim(),areaNames:t,workspaceClient:O(e.workspaceClient)}}function b(a){if(!a)return"";const e=H(a.workspaceClient),t=a.workspaceClient?.email.trim()??"";return e&&t&&e!==t?`${e} (${t})`:e||t}function V(a){const e=a.oldWorkspaceLink??null,t=a.newWorkspaceLink??null;if(!e&&!t)return[];const r=[],n=(i,c,d)=>{const u=c.trim(),y=d.trim();u!==y&&r.push({field:i,oldValue:u||null,newValue:y||null})};return n("titular",b(e),b(t)),n("areas",e?.areaNames.join(", ")??"",t?.areaNames.join(", ")??""),n("startDate",e?.startDate??"",t?.startDate??""),n("endDate",e?.endDate??"",t?.endDate??""),n("status",e?.status??"",t?.status??""),r}function h(a){const e=N(a);if(!e)return null;const t=L(e.oldWorkspaceLink),r=L(e.newWorkspaceLink);return{appLogId:f(e.appLogId).trim(),createdAt:T(e.createdAt),userWorkspace:O(e.userWorkspace),oldWorkspaceLink:t,newWorkspaceLink:r,looksLikeCreation:t===null&&r!==null,changes:V({oldWorkspaceLink:t,newWorkspaceLink:r})}}function x(a){if(Array.isArray(a))return R(a.map(h).filter(c=>c!==null));const e=N(a);if(!e)return[];const t="appLogId"in e||"oldWorkspaceLink"in e||"newWorkspaceLink"in e,r="success"in e||"errorMessages"in e||"payload"in e;if(t&&!r){const c=h(e);return c?[c]:[]}const n=e.payload;if(n==null){const c=t?h(e):null;return c?[c]:[]}if(Array.isArray(n))return R(n.map(h).filter(c=>c!==null));const i=h(n);return i?[i]:[]}function R(a){return[...a].sort((e,t)=>{const r=e.createdAt?Date.parse(e.createdAt):null,n=t.createdAt?Date.parse(t.createdAt):null;return r===null&&n===null?0:r===null?1:n===null?-1:n-r})}function Le(a){switch((a??"").trim().toUpperCase()){case"ACCEPTED":return"Ativa";case"PENDING":return"Pendente";case"CANCELLED":return"Cancelada";case"DENIED":case"REJECTED":return"Recusada";default:return(a??"").trim()}}function be(a){switch(a){case"titular":return"Titular";case"areas":return"Área";case"startDate":return"Início";case"endDate":return"Término";case"status":return"Status"}}function Re(a){return H(a.userWorkspace)}const G=25,q=100,v=1e4,z=`
  query ReservationsInWorkspaceWithFilters($input: ReservationInWorkspaceWithFiltersInput!) {
    __typename
    workspace_link: reservationsInWorkspaceWithFilters(input: $input) {
      __typename
      id
      startDate
      endDate
      status
      createdAt
      senderWorkspaceId
      statusNote
      workspaceByCreatorworkspaceid: creatorWorkspace {
        __typename
        id
        type
        email
        legalName
        brandingName
        firstName
        lastName
      }
      workspaceByRecipientworkspaceid: recipientWorkspace {
        __typename
        id
        type
        email
        legalName
        brandingName
        firstName
        lastName
      }
      workspace_client: workspaceClient {
        __typename
        id
        type
        email
        legalName
        brandingName
        firstName
        lastName
      }
      workspaceLinkHierarchiesByParentworkspacelinkid: workspaceLinkHierarchyChildWorkspaceLinks {
        __typename
        id
      }
      permission_areas: permissionAreas {
        __typename
        area {
          __typename
          id
          name
          capacity
          area_category: areaCategory {
            __typename
            id
            name
          }
          area_type: areaType {
            __typename
            id
            name
          }
          workspaceId
        }
      }
    }
  }
`,K=`
  query FindAreasByWorkspaceIdAndCategoryWithFilters($input: FilterConfigInput!) {
    __typename
    areas: findAreaByWorkspaceIdWithFilters(input: $input) {
      __typename
      id
      name
      nameAbbreviation
      capacity
      address
      addressComplement
      addressNumber
      city
      state
      district
      zipcode
      description
      mainPhotoPath
      coverPhotoPath
      tourLink
      areaHierarchy {
        __typename
        id
        name
        abbreviation
      }
      area_photos: areaPhotos {
        __typename
        name
        file_upload: fileUpload {
          __typename
          id
          url
          key
        }
      }
      area_week_days: areaWeekDays {
        __typename
        id
        dayWeek
        startHour
        endHour
      }
      area_category: areaCategory {
        __typename
        id
        name
        description
      }
    }
  }
`,Y=`
  query GetReservationByPeriod(
    $selectedworkspaceid: uuid!
    $categoryId: uuid
    $selectedstartdate: date
    $selectedenddate: date
  ) {
    __typename
    getworkspacelinksbyperiodjson(
      args: {
        selectedworkspaceid: $selectedworkspaceid
        selectedareacategory: $categoryId
        selectedstartdate: $selectedstartdate
        selectedenddate: $selectedenddate
      }
    ) {
      __typename
      json
    }
  }
`,J=`
  query GetReservations($workspaceId: uuid!, $selectedareaoccupations: _varchar) {
    __typename
    getclientworkspacelinksjson(
      args: { selectedareaoccupations: $selectedareaoccupations, selectedworkspaceid: $workspaceId }
    ) {
      __typename
      json
    }
    getclientrecurrentworkspacelinksjson(
      args: { selectedareaoccupations: $selectedareaoccupations, selectedworkspaceid: $workspaceId }
    ) {
      __typename
      json
    }
  }
`,X=`
  query GetRecurrentReservations($workspaceId: uuid!, $selectedareaoccupations: _varchar) {
    __typename
    getclientrecurrentworkspacelinksjson(
      args: { selectedareaoccupations: $selectedareaoccupations, selectedworkspaceid: $workspaceId }
    ) {
      __typename
      json
    }
  }
`,Q=`
  query GetReservationById($reservationId: UUID!) {
    __typename
    workspace_link: reservationById(workspaceLinkId: $reservationId) {
      __typename
      id
      startDate
      endDate
      status
      createdAt
      updatedAt
      senderWorkspaceId
      workspaceLinkTypeId
      workspaceLinkType {
        __typename
        id
        name
      }
      dependents
      arrivalStatusId
      arrival_status: arrivalStatus {
        __typename
        beforeTolerance
        afterTolerance
        id
        title
        slug
      }
      financialEntries {
        __typename
        id
        value
        payDay
        paidDay
        unit {
          __typename
          id
          name
          symbol
          symbolBeforeValue
          type
        }
      }
      linkCustomFields {
        __typename
        id
        name
        valueType
        payload {
          __typename
          mask
          value
          templateId
        }
      }
      workspaceByCreatorworkspaceid: creatorWorkspace {
        __typename
        id
        email
        legalName
        brandingName
        firstName
        lastName
      }
      workspaceByRecipientworkspaceid: recipientWorkspace {
        __typename
        id
        type
        email
        legalName
        brandingName
        firstName
        lastName
      }
      workspace_client: workspaceClient {
        __typename
        id
        type
        email
        legalName
        brandingName
        firstName
        lastName
      }
      workspaceLinkHierarchiesByParentworkspacelinkid: workspaceLinkHierarchyParentWorkspaceLinks {
        __typename
        id
      }
      permission_areas: permissionAreas {
        __typename
        area {
          __typename
          id
          name
          capacity
          mainPhotoPath
          area_photos: areaPhotos {
            __typename
            name
            file_upload: fileUpload {
              __typename
              id
              url
              key
            }
          }
          areaHierarchy {
            __typename
            name
          }
          area_category: areaCategory {
            __typename
            id
            name
          }
          area_type: areaType {
            __typename
            id
            name
          }
          workspaceId
        }
      }
    }
  }
`,Z=`
  query GetAvailableAreasCore($input: GetAvailableAreasInput!) {
    __typename
    getavailableareasjson_CORE(args: $input) {
      __typename
      json
    }
  }
`,ee=`
  query CalculateValuesByWorkspace(
    $selectedareaid: uuid!
    $selectedstartdate: timestamptz
    $selectedenddate: timestamptz
    $selecteduser: uuid!
  ) {
    __typename
    calculatelinkvaluesjsonbyworkspace(
      args: {
        selectedareaid: $selectedareaid
        selectedenddate: $selectedenddate
        selectedstartdate: $selectedstartdate
        selectedworkspace: $selecteduser
        usercontracts: null
      }
    ) {
      __typename
      json
    }
  }
`,ae=`
  query AreaTerms($areaId: UUID!) {
    __typename
    areaTerms(areaId: $areaId) {
      __typename
      areaId
      workspaceId
      agreementType
      htmlTemplate
      title
      titleBackgroundColor
      titleTextColor
      agreementMessage
    }
  }
`,te=`
  query GetClientTemplateCustomFields($args: getlinktemplatecustomfieldsjson_args!) {
    __typename
    getlinktemplatecustomfieldsjson(args: $args) {
      __typename
      json
    }
  }
`,re=`
  query GetClientFilters($id: uuid!) {
    __typename
    getclientsearchfiltersjson(args: { inputworkspaceid: $id }) {
      __typename
      json
    }
  }
`,ne=`
  query FindAreasByWorkspaceIdAndCategory($workspaceId: UUID!, $categoryId: UUID!) {
    __typename
    area: findFilteredAreasByWorkspaceIdAndCategoryId(
      workspaceId: $workspaceId
      categoryId: $categoryId
    ) {
      __typename
      id
      name
      nameAbbreviation
      capacity
      address
      addressComplement
      addressNumber
      city
      state
      district
      zipcode
      lat
      lng
      description
      mainPhotoPath
      coverPhotoPath
      tourLink
      areaHierarchy {
        __typename
        id
        name
        abbreviation
      }
      area_photos: areaPhotos {
        __typename
        name
        file_upload: fileUpload {
          __typename
          id
          url
          key
        }
      }
      area_week_days: areaWeekDays {
        __typename
        id
        dayWeek
        startHour
        endHour
      }
      area_category: areaCategory {
        __typename
        id
        name
        description
      }
    }
  }
`,S=`
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
      contracts {
        __typename
        id
        name
        credits {
          __typename
          id
          flags {
            __typename
            id
            name
          }
          value
          currency {
            __typename
            id
            name
          }
        }
        recipientWorkspace {
          __typename
          id
          type
          email
          lastName
          firstName
          isPrimary
          legalName
          brandingName
        }
      }
    }
  }
`,se=`
  mutation CancelReservationById($workspaceLinkId: uuid!, $userId: uuid!) {
    __typename
    cancelreservationjson(
      args: { selectedworkspacelinkid: $workspaceLinkId, selecteduserid: $userId }
    ) {
      __typename
      json
    }
  }
`,ie=`
  query FetchDependents($workspaceLinkId: UUID!, $hierarchyType: String!) {
    __typename
    dependents: dependentsByHierarchyType(
      workspaceLinkId: $workspaceLinkId
      hierarchyType: $hierarchyType
    ) {
      __typename
      id
      status
      workspaceClient {
        __typename
        id
        type
        firstName
        lastName
        brandingName
        email
        legalName
      }
      recipientWorkspace {
        __typename
        id
        type
        lastName
        firstName
        brandingName
        email
        legalName
        phone
      }
    }
  }
`,oe=`
  mutation CheckingConfirmation($userId: UUID!, $workspaceId: UUID!, $workspaceLinkId: UUID!) {
    __typename
    setCheckinConfirmation(
      userId: $userId
      workspaceId: $workspaceId
      workspaceLinkId: $workspaceLinkId
    ) {
      __typename
      success
      payload {
        __typename
        id
        workspaceLinkId
        confirmationType
        confirmedAt
      }
    }
  }
`,ce=`
  query FetchParentWorkspaceLink($childWorkspaceLinkId: uuid!) {
    __typename
    fetchparentworkspacelinkbychildid(args: { childworkspacelinkid: $childWorkspaceLinkId }) {
      __typename
      json
    }
  }
`,le=`
  query AreaReservationByPeriod($areaId: UUID!, $startDate: DateTime!, $endDate: DateTime!) {
    __typename
    areaReservationByPeriod(areaId: $areaId, startDate: $startDate, endDate: $endDate) {
      __typename
      id
    }
  }
`,de=`
  query logUpdatesFromLinkId($workspaceLinkId: UUID!) {
    __typename
    logUpdatesFromLinkId(workspaceLinkId: $workspaceLinkId) {
      __typename
      success
      errorMessages
      payload {
        __typename
        appLogId
        createdAt
        userWorkspace {
          __typename
          id
          firstName
          lastName
          email
        }
        newWorkspaceLink {
          __typename
          startDate
          endDate
          status
          areas {
            __typename
            name
          }
          workspaceClient {
            __typename
            id
            firstName
            lastName
            email
          }
        }
        oldWorkspaceLink {
          __typename
          startDate
          endDate
          status
          areas {
            __typename
            name
          }
          workspaceClient {
            __typename
            id
            firstName
            lastName
            email
          }
        }
      }
    }
  }
`,ue=`
  query GetReservationCanceller($workspaceLinkId: UUID!) {
    __typename
    reservationCanceller(workspaceLinkId: $workspaceLinkId) {
      __typename
      success
      errorMessages
      payload {
        __typename
        id
        type
        ownerUserId
        firstName
        lastName
        legalName
        brandingName
        email
      }
    }
  }
`,pe=`
  query GetFinancialEntriesByReservation($reservationId: String!) {
    __typename
    financialEntriesByLinkId(workspaceLinkId: $reservationId) {
      __typename
      id
      value
      description
      payDay
      paidDay
      unit {
        __typename
        id
        name
        symbol
        symbolBeforeValue
        type
        workspaceId
      }
      cycle {
        __typename
        contract {
          __typename
          id
          status
          template {
            __typename
            name
            id
            workspaceLinkContractTemplateCredits {
              __typename
              currencyUnit {
                __typename
                id
                type
                name
                symbol
                symbolBeforeValue
              }
            }
          }
        }
      }
      financial_entry_documents: financialEntryDocuments {
        __typename
        file_upload: uploadedFile {
          __typename
          id
          url
          key
        }
      }
    }
  }
`,me=`
  mutation updatefinancialentry($action: String!, $entry: jsonb, $linkId: uuid!) {
    __typename
    updatefinancialentry(
      args: {
        selectedaction: $action
        selectedfinancialentryjson: $entry
        selectedworkspacelinkid: $linkId
      }
    ) {
      __typename
      json
    }
  }
`,ye=`
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
`,ke=`
  query CalculateValues(
    $selectedareaid: uuid!
    $selectedstartdate: timestamptz
    $selectedenddate: timestamptz
    $selecteduser: uuid!
  ) {
    __typename
    calculatelinkvaluesjson(
      args: {
        selectedareaid: $selectedareaid
        selectedenddate: $selectedenddate
        selectedstartdate: $selectedstartdate
        selecteduser: $selecteduser
        usercontracts: null
      }
    ) {
      __typename
      json
    }
  }
`;function o(a){return a&&typeof a=="object"&&!Array.isArray(a)?a:null}function p(a){return Array.isArray(a)?a:[]}function l(a,e=""){return typeof a=="string"?a:a==null?e:String(a)}function s(a){const e=l(a).trim();return e===""?null:e}function _(a,e=0){if(typeof a=="number"&&Number.isFinite(a))return a;const t=Number.parseFloat(l(a));return Number.isFinite(t)?t:e}function E(a){if(a==null||a==="")return null;const e=Number(a);return Number.isFinite(e)?e:null}function g(a){if(typeof a!="string")return a;const e=a.trim();if(!e)return null;try{return JSON.parse(e)}catch{return null}}function w(a){const e=[];for(const t of p(a)){const r=g(o(t)?.json);Array.isArray(r)?e.push(...r):r!=null&&e.push(r)}return e}function U(a){const e=p(a)[0];return g(o(e)?.json)}function A(a){const e=o(a);if(!e)return null;const t=l(e.id);if(!t)return null;const r=o(e.user);return{id:t,type:s(e.type),email:s(e.email),phone:s(e.phone??e.phoneNumber??r?.phoneNumber),legalName:s(e.legalName),brandingName:s(e.brandingName),firstName:s(e.firstName),lastName:s(e.lastName),isPrimary:typeof e.isPrimary=="boolean"?e.isPrimary:null,logoPath:s(e.logoPath)}}function _e(a){const e=o(a);if(!e)return null;const t=o(e.area)??e,r=l(t.id);if(!r)return null;const n=o(t.area_hierarchy??t.areaHierarchy),i=o(t.area_category??t.areaCategory),c=o(t.area_type??t.areaType),d=p(t.area_photos??t.areaPhotos);let u=s(t.mainPhotoPath);if(!u)for(const y of d){const k=o(o(y)?.file_upload??o(y)?.fileUpload);if(u=s(k?.url),u)break}return{id:r,name:l(t.name),capacity:E(t.capacity),mainPhotoPath:s(t.mainPhotoPath),photoUrl:u,areaHierarchyName:s(n?.name),areaCategory:i?.id?{id:l(i.id),name:l(i.name)}:null,areaType:c?.id?{id:l(c.id),name:l(c.name)}:null,workspaceId:s(t.workspaceId)}}function fe(a){const e=o(a);if(!e)return null;const t=r=>{if(typeof r=="number"&&Number.isFinite(r))return r;if(typeof r=="string"){const n=r.trim();if(!n)return null;if(/^\d+$/.test(n))return Number.parseInt(n,10);const i=/(\d+(?:\.\d+)?)\s*([HMS])/gi;let c=0,d;for(;(d=i.exec(n))!=null;){const u=Number.parseFloat(d[1]??"0")||0,y=(d[2]??"").toUpperCase();c+=y==="H"?u*3600:y==="M"?u*60:u}return c>0?Math.round(c):null}return null};return{id:l(e.id),title:s(e.title),slug:s(e.slug),beforeTolerance:t(e.beforeTolerance),afterTolerance:t(e.afterTolerance)}}function $(a){const e=o(a)??{},t=o(e.contract),r=o(e.currency),n=_(e.calculatedValue??e.value),i=l(r?.type??e.currencyUnitType??e.currencyUnitType,"CURRENCY").toUpperCase();return{id:s(e.id),name:l(e.name),type:l(e.type,i).toUpperCase(),value:E(e.value),calculatedValue:n,contractBalance:_(e.contractBalance),currencyUnitSymbol:l(r?.symbol??e.currencyUnitSymbol),currencyUnitType:i,currencyUnitName:s(r?.name??e.currencyUnitName),symbolBeforeValue:!!(r?.symbolBeforeValue??e.symbolBeforeValue),contractId:s(t?.id??e.contractId??e.contract_id),contractName:s(t?.name??e.contractName??e.templateName),templateName:s(e.templateName),currencyId:s(r?.id??e.currencyUnitId??e.currencyId),currencyName:s(r?.name??e.currencyUnitName??e.currencyName),payDay:s(e.payDay),paidDay:s(e.paidDay),dueDate:s(e.dueDate)}}function Ie(a,e){const t=new Set;for(const r of p(a)){const n=o(r);if(!n)continue;const i=o(n.workspace_link),c=s(n.id??i?.id);!c||c===e||t.has(c)||t.add(c)}return t.size}function C(a){const e=o(a);if(!e)return null;const t=l(e.id);if(!t)return null;const r=fe(e.arrival_status??e.arrivalStatus),n=s(e.arrivalStatusId??e.arrival_status_id)??r?.id??null;return{id:t,status:l(e.status),startDate:s(e.startDate),endDate:s(e.endDate),createdAt:s(e.createdAt),statusNote:s(e.statusNote),senderWorkspaceId:s(e.senderWorkspaceId),recipientWorkspaceId:s(e.recipientWorkspaceId),dependents:E(e.dependents)??void 0,dependentsCount:Ie(e.workspaceLinkHierarchiesByParentworkspacelinkid??e.workspaceLinkHierarchyParentWorkspaceLinks,t),arrivalStatusId:n,arrivalStatus:r,calculatedValues:p(e.calculatedValues).map(i=>o(i)).filter(i=>i!==null).filter(i=>s(i.error)==null).map($),areas:p(e.permission_areas??e.permissionAreas).map(_e).filter(i=>i!==null),client:A(e.workspace_client??e.workspaceClient),creator:A(e.workspaceByCreatorworkspaceid??e.creatorWorkspace??e.creator),recipient:A(e.workspaceByRecipientworkspaceid??e.recipientWorkspace??e.recipient),recurrence:we(e.recurrenceData)}}function we(a){const e=o(a);return e?{id:l(e.id),startDate:s(e.startDate),endDate:s(e.endDate),recurrence:l(e.recurrence),excludeHolidays:!!e.excludeHolidays,excludedWeekDays:p(e.excludedWeekDays).map(t=>typeof t=="number"?t:Number(t)).filter(t=>Number.isFinite(t)),exceptions:p(e.exceptions)}:null}function ge(a){const e=o(a);if(!e)return null;const t=C(e);if(!t)return null;const r=o(e.workspaceLinkType??e.workspace_link_type);return{...t,updatedAt:s(e.updatedAt),dependents:_(e.dependents),workspaceLinkTypeId:s(e.workspaceLinkTypeId??e.workspace_link_type_id),workspaceLinkType:r?.id?{id:l(r.id),name:l(r.name)}:null,financialEntries:p(e.financialEntries).map(n=>M(n)).filter(n=>n!==null),linkCustomFields:p(e.linkCustomFields).map(n=>{const i=o(n);if(!i)return null;const c=o(i.payload)??{};return{id:s(i.id),name:l(i.name),valueType:l(i.valueType,"text"),payload:{mask:s(c.mask),value:s(c.value),templateId:s(c.templateId)}}}).filter(n=>n!==null)}}function M(a){const e=o(a);if(!e)return null;const t=l(e.id);if(!t)return null;const r=o(e.unit),n=o(e.cycle),i=o(n?.contract),c=o(i?.template);return{id:t,value:_(e.value),description:s(e.description),payDay:s(e.payDay),paidDay:s(e.paidDay),unit:r?.id?{id:l(r.id),name:l(r.name),symbol:l(r.symbol),type:l(r.type),symbolBeforeValue:!!r.symbolBeforeValue,workspaceId:s(r.workspaceId)}:null,contractId:s(i?.id),contractName:s(c?.name),documents:p(e.financial_entry_documents??e.financialEntryDocuments).map(d=>o(d)?.file_upload??o(d)?.fileUpload).map(d=>o(d)).filter(d=>d!==null).map(d=>({id:l(d.id),url:l(d.url),key:l(d.key)}))}}function he(a){const e=o(a);if(!e)return null;const t=o(e.area)??e,r=l(t.id);if(!r)return null;const n=p(t.area_photos??t.areaPhotos);let i=s(t.mainPhotoPath);if(!i)for(const k of n){const D=o(o(k)?.file_upload??o(k)?.fileUpload);if(i=s(D?.url),i)break}const c=o(t.areaHierarchy??t.area_hierarchy),d=o(t.area_type??t.areaType),u=o(t.occupationSettings??t.occupation_settings),y=k=>typeof k=="string"?s(k):null;return{id:r,name:l(t.name),abbreviation:s(t.nameAbbreviation),capacity:_(t.capacity),areaCategoryId:s(t.areaCategoryId??t.area_category_id),city:s(t.city),state:s(t.state),district:s(t.district),address:s(t.address),description:s(t.description),areaType:s(d?.name),areaHierarchyName:s(c?.name),photoUrl:i,startHour:s(u?.startHour??u?.areaStartHour),endHour:s(u?.endHour??u?.areaEndHour),minOccupation:y(u?.minOccupation??u?.min),maxOccupation:y(u?.maxOccupation??u?.max),increment:y(u?.increaseOccupationValue??u?.increment),error:s(t.error),calculatedValues:p(t.calculatedValues).map(k=>o(k)).filter(k=>k!==null).map($)}}function P(a){const e=o(a);if(!e)return null;const t=l(e.id);if(!t)return null;const r=o(e.area_category??e.areaCategory),n=p(e.area_photos??e.areaPhotos);let i=s(e.mainPhotoPath??e.coverPhotoPath);if(!i)for(const d of n){const u=o(o(d)?.file_upload??o(d)?.fileUpload);if(i=s(u?.url),i)break}const c=p(e.area_week_days??e.areaWeekDays).map(d=>{const u=o(d);return u?{dayWeek:_(u.dayWeek),startHour:l(u.startHour,"00:00"),endHour:l(u.endHour,"23:59")}:null}).filter(d=>d!==null);return{id:t,name:l(e.name),abbreviation:s(e.nameAbbreviation),capacity:_(e.capacity),areaCategoryId:s(r?.id),areaCategoryName:s(r?.name),startHour:c[0]?.startHour??"00:00",endHour:c[0]?.endHour??"23:59",photoUrl:i,weekDays:c}}function Ne(a){const e=o(a);if(!e)return null;const t=l(e.id),r=l(e.areaId??e.area_id);if(!t||!r)return null;const n=o(e.arrival_status??e.arrivalStatus);return{id:t,areaId:r,startDate:s(e.startDate??e.start_date),endDate:s(e.endDate??e.end_date),status:l(e.status,"ACCEPTED"),holder:s(e.holder),arrivalStatusId:s(e.arrivalStatusId??e.arrival_status_id??n?.id??e.arrivalStatusSlug??e.arrival_status_slug??n?.slug)}}function W(a){const e=o(a)??{};return{startHour:l(e.areaStartHour??e.startHour,"00:00"),endHour:l(e.areaEndHour??e.endHour,"23:59"),min:l(e.minOccupation??e.min,"PT0S"),max:l(e.maxOccupation??e.max,"PT24H"),increment:l(e.increaseOccupationValue??e.increment,"PT15M"),isLessThanMinOccupation:!!e.isLessThanMinOccupation,isDifferentFromIncrement:!!e.isDifferentFromIncrement,isGreaterThanMaxOccupation:!!e.isGreaterThanMaxOccupation}}function B(a){const e=o(a)??{},t=s(e.error);if(t)return{calculatedValues:[],occupationSettings:W(null),error:t,embeddedCalculateError:null,offersCreateReservationWithoutBilling:!1};let r=null;const n=[];for(const c of p(e.calculatedValues)){const d=o(c);if(!d)continue;const u=s(d.error);if(u){r=r??u;continue}n.push($(d))}const i=W(e.occupationSettings);return{calculatedValues:n,occupationSettings:i,error:null,embeddedCalculateError:r,offersCreateReservationWithoutBilling:r!=null||i.isGreaterThanMaxOccupation}}function De(a){const e=[];for(const t of p(a)){let r=t;const n=o(t);n&&(r=n.minute??n.value);const i=typeof r=="string"?Number.parseInt(r,10):Number(r);if(!Number.isFinite(i))continue;const c=Math.trunc(i);c<0||c>59||e.includes(c)||e.push(c)}return e.sort((t,r)=>t-r)}function Ce(a){return p(a).map(e=>{const t=o(e);if(!t)return null;const r=l(t.id);return r?{id:r,workspaceId:s(t.workspaceId??t.workspace_id),name:l(t.name),description:s(t.description)}:null}).filter(e=>e!==null)}function Ae(a){const e=p(a),t=e.length>0?o(e[0]):o(a),r=t?g(t.json):null,n=o(r)??{},i=(c,d)=>typeof c=="string"&&c.trim()?c.trim():typeof c=="number"&&Number.isFinite(c)?`PT${Math.trunc(c)}S`:d;return{areaCategories:Ce(n.areaCategories??n.area_categories),minAreaOccupants:_(n.minAreaOccupants,0),maxAreaOccupants:_(n.maxAreaOccupants,100),incrementTime:i(n.incrementTime,"PT60S"),minOccupation:i(n.minOccupation,"PT0S"),maxOccupation:i(n.maxOccupation,"PT0S"),afterBlockValue:i(n.afterBlockValue,"PT0S"),beforeBlockValue:i(n.beforeBlockValue,"PT0S"),minAdvanceValue:i(n.minAdvanceValue,"PT0S"),startMinutes:De(n.startMinutes),nextAvailableTime:s(n.nextAvailableTime),earliestStartHour:s(n.earliestStartHour),latestEndHour:s(n.latestEndHour)}}function F(a){const e=o(a)??{},t=e.success===!0,r=p(e.errorMessages).map(d=>l(d)),n=[],i=[],c=[];for(const d of p(e.payload)){const u=s(o(d)?.id);u&&n.push(u)}for(const d of p(e.contracts)){const u=o(d),y=s(u?.id);y&&i.push(y);for(const k of p(u?.credits)){const D=s(o(k)?.id);D&&c.push(D)}}return{success:t,ids:n,errorMessages:r,contractIds:i,creditIds:c}}async function j(a,e){const t=await I(me,{action:a,entry:e.entry,linkId:e.workspaceLinkId}),r=w(t.updatefinancialentry)[0],n=o(r);if(!n)return;const i=s(n.error??n.message);if(i)throw new Error(i);if(n.success===!1)throw new Error("Falha ao atualizar lancamento")}function Te(a){const e=o(a);if(!e)return null;const t=l(e.id);if(!t)return null;const r=o(e.workspaceClient??e.workspace_client),n=o(e.recipientWorkspace??e.recipient_workspace),i=c=>c?[l(c.firstName),l(c.lastName)].filter(Boolean).join(" ").trim()||l(c.brandingName)||l(c.legalName)||l(c.email):"";return{id:t,status:l(e.status,"PENDING"),name:i(r)||i(n)||"Sem nome",email:s(r?.email??n?.email),phone:s(r?.phone??n?.phone),photoUrl:s(e.clientPhotoUrl),workspaceClientId:s(r?.id),recipientWorkspaceId:s(n?.id)}}const Ee={async listReservations(a){const e={currentFilters:(a.filters??[]).map(c=>({slug:c.slug,value:c.value??null,conditionType:c.conditionType,valueType:c.valueType}))};a.orderBy&&a.orderBy.fieldName&&(e.orderBy={fieldName:a.orderBy.fieldName,orderBy:a.orderBy.orderBy});const t=a.limit??G,r={senderWorkspaceId:a.senderWorkspaceId,limit:t,offset:a.offset??0,filter:e},n=await m(z,{input:r},{timeoutMs:3e4}),i=p(n.workspace_link).map(C).filter(c=>c!==null);return{items:i,hasMore:i.length===t}},async fetchAllReservationsForExport(a){const e=[];let t=0;for(;e.length<v;){const r=v-e.length,n=Math.min(q,r),i=await Ee.listReservations({...a,offset:t,limit:n});if(i.items.length===0||(e.push(...i.items),i.items.length<n))break;t+=i.items.length}return e},async getClientReservations(a){const e=await m(J,{workspaceId:a.workspaceId,selectedareaoccupations:a.occupations??"{rotary, shared, bookable, access, condominium, client_bookable, authorizations_allowed}"},{timeoutMs:3e4});return w(e.getclientworkspacelinksjson).map(C).filter(t=>t!==null)},async getRecurrentReservations(a){const e=await m(X,{workspaceId:a.workspaceId,selectedareaoccupations:a.occupations??"{rotary, shared, bookable, access, condominium, client_bookable, authorizations_allowed}"},{timeoutMs:3e4});return w(e.getclientrecurrentworkspacelinksjson).map(C).filter(t=>t!==null)},async getCalendarAreas(a,e={}){const t={workspaceId:a,currentFilters:e.filters??[]};e.orderBy&&(t.orderBy=e.orderBy);const r=await m(K,{input:t},{timeoutMs:3e4});return p(r.areas).map(P).filter(n=>n!==null)},async getCalendarBookings(a){const e=await m(Y,{selectedworkspaceid:a.workspaceId,categoryId:a.categoryId??null,selectedstartdate:a.startDate,selectedenddate:a.endDate},{timeoutMs:3e4});return w(e.getworkspacelinksbyperiodjson).map(Ne).filter(t=>t!==null)},async getReservationById(a){const e=await m(Q,{reservationId:a},{timeoutMs:3e4});return ge(e.workspace_link)},async cancelReservation(a){const e=await I(se,{workspaceLinkId:a.workspaceLinkId,userId:a.userId}),t=w(e.cancelreservationjson),r=o(t[0]);if(!r)throw new Error("Resposta invalida ao cancelar reserva");if("id"in r||"error"in r&&r.error==null)return;const n=s(r.error)??"Falha ao cancelar reserva";throw new Error(n)},async getDependents(a){for(let t=1;t<=3;t+=1){const r=await m(ie,{workspaceLinkId:a,hierarchyType:"dependent"});if(r.dependents!=null)return p(r.dependents).map(Te).filter(n=>n!==null);t<3&&await new Promise(n=>setTimeout(n,1500))}return[]},async addDependentsToReservation(a){if(a.workspaceClientIds.length===0)return[];const e=a.workspaceClientIds.map(r=>({linkType:"reservation",status:"ACCEPTED",startDate:a.startDate,endDate:a.endDate,dependents:0,uses:-1,parentLinkId:a.parentLinkId,permissionRoleId:null,statusNote:null,expirationDate:null,clients:[{id:r}],values:null,masterArea:a.masterAreaId,areas:null,passages:null,customFields:null})),t=await I(S,{linksjson:e,selectedworkspaceid:a.sessionWorkspaceId,workspacelinkrecurrenceinput:null});return F(t.createlinkjson).ids},async createReservation(a){const e=await I(S,{linksjson:[a.linkInput],selectedworkspaceid:a.selectedWorkspaceId,workspacelinkrecurrenceinput:a.workspaceLinkRecurrenceInput??null}),t=F(e.createlinkjson);if(t.ids.length===0)throw new Error(t.errorMessages[0]??"Falha ao criar reserva");return{id:t.ids[0],contractIds:t.contractIds,creditIds:t.creditIds}},async getAvailableAreas(a){const e=a.limit??10,t={selectedworkspaceid:a.workspaceId,selectedstartdate:a.startDate,selectedenddate:a.endDate,selecteduserid:a.userId,limit:e,index:a.index??0};a.capacity!=null&&(t.selectedcapacity=a.capacity),a.categoryId&&(t.selectedareacategoryid=a.categoryId);const r=await m(Z,{input:t},{timeoutMs:3e4}),n=o(r.getavailableareasjson_CORE),i=n?g(n.json):U(r.getavailableareasjson_CORE),c=o(i)??{},d=p(c.areas).map(he).filter(u=>u!==null);return{areas:d,hasMore:d.length>=e}},async calculateValuesByWorkspace(a){const e=await m(ee,{selectedareaid:a.selectedAreaId,selectedstartdate:a.startDate,selectedenddate:a.endDate,selecteduser:a.selectedUser},{timeoutMs:3e4}),t=p(e.calculatelinkvaluesjsonbyworkspace),r=g(o(t[0])?.json);return B(r)},async getAreaTerms(a){const e=await m(ae,{areaId:a}),t=o(e.areaTerms);if(!t)return null;const r=l(t.agreementType),n=s(t.htmlTemplate);return{areaId:l(t.areaId),workspaceId:l(t.workspaceId),agreementType:r,htmlTemplate:n,title:s(t.title),titleBackgroundColor:s(t.titleBackgroundColor),titleTextColor:s(t.titleTextColor),agreementMessage:s(t.agreementMessage),hasTerms:r==="REQUIRED"&&n!=null}},async getCustomFields(a){const e=await m(te,{args:{selectedfilters:{areaCategory:a.areaCategoryId},selectedworkspaceid:a.workspaceId}}),t=U(e.getlinktemplatecustomfieldsjson);return p(t).map(r=>{const n=o(r);if(!n)return null;const i=o(n.payload)??{};return{name:l(n.name),valueType:l(n.valueType,"text"),linkType:l(i.linkType,"reservation"),mandatory:!!i.mandatory,templateId:l(i.templateId),areaCategory:s(i.areaCategory),personType:s(i.personType),permissionType:s(i.permissionType)}}).filter(r=>r!==null)},async getClientFilters(a){if(!a.trim())return null;try{const e=await m(re,{id:a},{timeoutMs:3e4});return Ae(e.getclientsearchfiltersjson)}catch{return null}},async getClientCalendarAreas(a){const e=await m(ne,{workspaceId:a.workspaceId,categoryId:a.categoryId},{timeoutMs:3e4});return p(e.area).map(P).filter(t=>t!==null)},async getWorkspaceLinkIdsOverlappingPeriod(a){const e=await m(le,{areaId:a.areaId,startDate:a.startDate,endDate:a.endDate});return p(e.areaReservationByPeriod).map(t=>s(o(t)?.id)).filter(t=>t!=null)},async setCheckinConfirmation(a){const e=await I(oe,{userId:a.userId,workspaceId:a.workspaceId,workspaceLinkId:a.workspaceLinkId});return o(e.setCheckinConfirmation)?.success===!0},async getParentWorkspaceLinkId(a){const e=await m(ce,{childWorkspaceLinkId:a},{timeoutMs:15e3}),t=w(e.fetchparentworkspacelinkbychildid)[0];return s(o(t)?.id)},async getReservationCanceller(a){try{const e=await m(ue,{workspaceLinkId:a}),t=o(e.reservationCanceller);if(!t||t.success!==!0)return null;const r=o(t.payload);return r?{id:l(r.id),type:s(r.type),firstName:s(r.firstName),lastName:s(r.lastName),legalName:s(r.legalName),brandingName:s(r.brandingName),email:s(r.email)}:null}catch{return null}},async getFinancialEntries(a){const e=await m(pe,{reservationId:a});return p(e.financialEntriesByLinkId).map(M).filter(t=>t!==null)},async insertFinancialEntry(a){await j("INSERT",a)},async deleteFinancialEntry(a){await j("DELETE",a)},async calculateValuesByWorkspaceClient(a){const e=await m(ke,{selectedareaid:a.selectedAreaId,selectedstartdate:a.startDate,selectedenddate:a.endDate,selecteduser:a.selectedWorkspaceClientId},{timeoutMs:3e4}),t=p(e.calculatelinkvaluesjson),r=g(o(t[0])?.json);return B(r)},async updateReservationPeriodAreas(a){const e=await I(ye,{inputid:a.workspaceLinkId,inputstartdate:a.startDate,inputenddate:a.endDate,inputareaids:a.areaIds,inputdependents:a.dependents??null,inputCustomFields:a.customFieldsJson??null,inputexpirationdate:null,inputdeletedat:null,inputcreatorworkspaceid:null,inputpermissionroleid:null,inputrecipientworkspaceid:null,inputresponsibleworkspaceid:null,inputsenderworkspaceid:null,inputstatus:null,inputstatusnote:null,inputworkspaceclientid:null,inputworkspacelinktypeid:null,inputpassageids:null}),t=o(e.workspaceLinkUpdate),r=t?s(t.id):null;if(!r)throw new Error("Resposta invalida ao atualizar reserva");return r},async getLogUpdates(a){if(!a.trim())return[];const t=(await m(de,{workspaceLinkId:a})).logUpdatesFromLinkId,r=Array.isArray(t)?t[0]:t,n=r&&typeof r=="object"?r:null;if(n&&n.success===!1){const i=Array.isArray(n.errorMessages)?n.errorMessages.map(String).filter(Boolean):[];throw new Error(i[0]??"Falha ao carregar o historico da reserva")}return x(n??t)}};export{Re as a,be as b,Le as c,Ee as r};
