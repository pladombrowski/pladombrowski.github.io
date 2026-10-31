import{G as l,a1 as p,f as N,E as y}from"./index-DCZQA7Os.js";function R(e){const n=e.toLowerCase().replace(/[^a-z0-9]/g,""),t=new Date,a=String(t.getDate()).padStart(2,"0"),o=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getFullYear()),m=String(t.getHours()).padStart(2,"0"),u=String(t.getMinutes()).padStart(2,"0");return`${n}${a}${o}${s}${m}${u}`}function B(e){return`Link expresso de adição a(o) ${e}!`}function L(e,n){if(!e)return e;try{const t=new URL(n),a=new URL(e),o=a.pathname||"/",s=a.hash;return`${t.origin}${o}${s}`}catch{return e}}const w="0c8b41d5-2cc1-4674-b9ae-ed62ccf6e5bd",k=`  query inviteLinksByWorkspaceId($workspaceId: UUID!) {
    __typename
    inviteLinksByWorkspaceId(workspaceId: $workspaceId) {
      __typename
      success
      payload {
        __typename
        id
        name: inviteLinkName
        startDate
        endDate
        dependents: maxDependents
        currentDependents
        status
        url
      }
      errorMessages
    }
  }
`,D=`
  query InviteLinkWithoutLogin($inviteLinkId: UUID!) {
    __typename
    inviteLinkWithoutLogin(workspaceLinkId: $inviteLinkId) {
      __typename
      success
      payload {
        __typename
        inviteLinkName
        senderName
      }
      errorMessages
    }
  }
`,f=`
  query GetInviteLink($inviteLinkId: UUID!) {
    __typename
    inviteLink(workspaceLinkId: $inviteLinkId) {
      __typename
      success
      payload {
        __typename
        name
        url
        allowedDomains
        allowedWorkspaceTypes
        startDate
        endDate
        initialStatus
        requireGroupSelectByUser
        description
        showOptionalCustomFields
        workspaceLink {
          __typename
          id
          dependents
          status
          senderWorkspace {
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
          workspace_client: workspaceClient {
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
          permissionWorkspaces {
            __typename
            permission {
              __typename
              id
              name
            }
          }
        }
        groups {
          __typename
          id
          name
          categoryName
          categoryId
          complement
          type {
            __typename
            id
            label
          }
        }
        reservations {
          __typename
          id
          startDate
          endDate
          status
          createdAt
          workspaceByCreatorworkspaceid: creatorWorkspace {
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
          permission_areas: permissionAreas {
            __typename
            area {
              __typename
              id
              name
              mainPhotoPath
            }
          }
        }
        contractDependents {
          __typename
          id
          status
          startDate
          endDate
          payDay
          renovationDay
          template {
            __typename
            id
            name
          }
          workspaceLinkContractCredits {
            __typename
            id
            value
            overLimitAllowed
            currencyUnit {
              __typename
              id
              type
              name
              symbol
              symbolBeforeValue
            }
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
          }
          workspaceLink {
            __typename
            creatorWorkspace {
              __typename
              id
              email
              firstName
              lastName
              brandingName
              legalName
              type
            }
            workspaceClient {
              __typename
              id
              email
              firstName
              lastName
              brandingName
              legalName
              type
            }
          }
        }
        newContracts {
          __typename
          expirationPeriod
          expireAfter
          startDate
          endDate
          template {
            __typename
            id
            name
            payDay
            cycleType {
              __typename
              id
              name
            }
            paymentType {
              __typename
              id
              name
            }
            workspace_link_contract_template_credits: workspaceLinkContractTemplateCredits {
              __typename
              id
              value
              overLimitAllowed
              priority
              flags {
                __typename
                id
                name
              }
              currency_unit: currencyUnit {
                __typename
                id
                name
                symbol
                symbolBeforeValue
                type
                workspaceId
              }
            }
          }
        }
        cloneDetails {
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
      errorMessages
    }
  }
`,I=`
  mutation SetInvite($input: SetInviteLinkInput!) {
    __typename
    setInviteLink(input: $input) {
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
  query GetInviteLinksByReservation($reservationId: UUID!) {
    inviteLinksByReservationId(reservationId: $reservationId) {
      __typename
      success
      payload {
        __typename
        id
        name: inviteLinkName
        startDate
        endDate
        dependents: maxDependents
        status
        url
      }
      errorMessages
    }
  }
`,h=`
  mutation SetInviteLinkStatus($inviteId: UUID!, $status: String!) {
    setInviteLinkStatus(input: { workspaceLinkId: $inviteId, status: $status }) {
      success
      errorMessages
    }
  }
`,E=`
  mutation AcceptInviteLink($input: AcceptInviteLinkInput!) {
    __typename
    acceptInviteLink(input: $input) {
      __typename
      success
      errorMessages
    }
  }
`,W=`
  query FetchInviteLinkDependents($workspaceLinkId: UUID!, $hierarchyType: String!) {
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
`;function _(e){return Array.isArray(e)?e.map(n=>String(n??"").trim()).filter(Boolean):[]}function i(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function c(e){return Array.isArray(e)?e.map(n=>i(n)).filter(n=>n!==null):[]}function g(e){const n=i(e);return n?{id:String(n.id??""),email:n.email??null,firstName:n.firstName??null,lastName:n.lastName??null,brandingName:n.brandingName??null,legalName:n.legalName??null,type:n.type??null,phone:n.phone??null}:null}function A(e,n="Workspace"){if(!e)return n;const t=e.brandingName?.trim();if(t)return t;const a=e.legalName?.trim();return a||[e.firstName,e.lastName].map(s=>s?.trim()??"").filter(Boolean).join(" ")||n}function T(e){const n=i(e.workspaceLink),t=g(n?.senderWorkspace),a=c(n?.permissionWorkspaces).map(r=>{const d=i(r.permission);return{permission:{id:String(d?.id??""),name:String(d?.name??"")}}}).filter(r=>r.permission.id!==""),o=c(e.groups).map(r=>{const d=i(r.type);return{id:String(r.id??""),name:String(r.name??""),categoryId:r.categoryId??null,categoryName:r.categoryName??null,complement:r.complement??null,type:d?{id:String(d.id??""),label:String(d.label??"")}:null}}).filter(r=>r.id!==""),s=c(e.newContracts).map(r=>{const d=i(r.template);return{templateId:String(d?.id??""),startDate:r.startDate??null,endDate:r.endDate??null,expirationPeriod:r.expirationPeriod??null,expireAfter:r.expireAfter??null,template:d}}),m=c(e.reservations).map(r=>({id:String(r.id??"")})),u=c(e.cloneDetails),v=c(e.contractDependents);return{id:String(n?.id??""),name:String(e.name??""),url:e.url??null,startDate:e.startDate??null,endDate:e.endDate??null,initialStatus:e.initialStatus??null,dependents:typeof n?.dependents=="number"?n.dependents:null,status:n?.status??null,description:e.description??null,allowedDomains:_(e.allowedDomains),allowedWorkspaceTypes:_(e.allowedWorkspaceTypes),requireGroupSelectByUser:e.requireGroupSelectByUser===!0,showOptionalCustomFields:e.showOptionalCustomFields===!0,senderWorkspace:t,permissionWorkspaces:a,groups:o,newContracts:s,reservations:m,cloneDetails:u,contractDependents:v}}function b(e,n){return Array.isArray(e)?e.map(t=>i(t)).filter(t=>t!==null).map(t=>({id:String(t.id??""),name:String(t.name??""),startDate:t.startDate??null,endDate:t.endDate??null,dependents:Number(t.dependents??0),status:String(t.status??"PENDING"),url:L(String(t.url??""),n)})):[]}function C(e){const n=i(e.recipientWorkspace),t=i(e.workspaceClient),a=n??t;if(!a)return null;const o=A(g(a),"")||String(a.email??"").trim();return{id:String(e.id??""),status:e.status??null,name:o,email:a.email??null,phone:a.phone??null}}const G={async getInviteLinksByWorkspace(e){const t=(await l(k,{workspaceId:e})).inviteLinksByWorkspaceId;if(!t.success)throw new Error(t.errorMessages?.join("; ")||"Falha ao carregar links de convite");return t.payload??[]},async getInviteLinksByWorkspacePublic(e){const t=(await y(k,{workspaceId:e})).inviteLinksByWorkspaceId;if(!t.success)throw new Error(t.errorMessages?.join("; ")||"Falha ao carregar links de convite");return t.payload??[]},async getInviteLinkWithoutLogin(e){const t=(await y(D,{inviteLinkId:e})).inviteLinkWithoutLogin;if(!t.success)throw new Error(t.errorMessages?.join(", ")||"Nao foi possivel carregar o convite");return{inviteLinkName:String(t.payload?.inviteLinkName??""),senderName:String(t.payload?.senderName??"")}},async getInviteLink(e){const t=(await l(f,{inviteLinkId:e})).inviteLink;if(!t.success)throw new Error(t.errorMessages?.join(", ")||"Nao foi possivel carregar o convite");return t.payload?T(t.payload):null},async getReservationInviteLinks(e){const t=(await l(S,{reservationId:e})).inviteLinksByReservationId;return t?.success?b(t.payload,N.officialInviteWebUrl):[]},async setReservationInviteLink(e){const n={linkInput:{id:null,status:"ACCEPTED",startDate:e.reservationStartDate,endDate:e.reservationEndDate,responsibleWorkspaceId:e.responsibleWorkspaceId,senderWorkspaceId:e.senderWorkspaceId,dependents:e.dependents,permissionWorkspace:[{permissionId:w}]},inviteLinkInput:{linkInviteItem:{startDate:e.reservationStartDate,endDate:e.inviteLinkEndDate,name:e.name,initialStatus:e.requireManagerApproval?"MANAGER_PENDING_APPROVAL":"ACCEPTED",reservations:[{workspaceLinkId:e.reservationId}],cloneDetails:[],newContracts:[],contractDependents:[],groups:[],allowedDomains:e.allowedDomains,showOptionalCustomFields:!1,allowedWorkspaceTypes:["PERSON"]}}},a=(await p(I,{input:n})).setInviteLink;if(!a)throw new Error("Resposta invalida do servidor");if(!a.success)throw new Error(a.errorMessages?.join(", ")||"Falha ao criar link de convite da reserva");return a.payload?.id??null},async setWorkspaceInviteLink(e){const n=!!(e.workspaceLinkId&&e.workspaceLinkId.trim()),t={id:n?e.workspaceLinkId:null,status:e.linkStatus,startDate:e.startDate,endDate:e.endDate,responsibleWorkspaceId:e.responsibleWorkspaceId,senderWorkspaceId:e.senderWorkspaceId,dependents:e.dependents,permissionWorkspace:[{permissionId:e.permissionId}]},a={startDate:e.startDate,endDate:e.endDate,name:e.name,description:e.description,initialStatus:e.requireManagerApproval?"MANAGER_PENDING_APPROVAL":"ACCEPTED",reservations:e.reservations,cloneDetails:e.cloneDetails,newContracts:e.newContracts,contractDependents:e.contractDependents,groups:e.groups,allowedDomains:e.allowedDomains,showOptionalCustomFields:e.showOptionalCustomFields,allowedWorkspaceTypes:e.allowedWorkspaceTypes,requireGroupSelectByUser:e.requireGroupSelectByUser,addOnGroupAsAdmin:e.addOnGroupAsAdmin},s=(await p(I,{input:{linkInput:t,inviteLinkInput:{linkInviteItem:a}}})).setInviteLink;if(!s)throw new Error("Resposta invalida do servidor");if(!s.success)throw new Error(s.errorMessages?.join(", ")||(n?"Falha ao atualizar link de convite":"Falha ao criar link de convite"));return s.payload?.id??null},async setInviteLinkStatus(e,n){const a=(await p(h,{inviteId:e,status:n})).setInviteLinkStatus;if(!a)throw new Error("Resposta invalida ao alterar o link");if(!a.success)throw new Error(a.errorMessages?.join(", ")||"Nao foi possivel alterar o status do link")},async acceptInviteLink(e){const n={inviteLinkId:e.inviteLinkId,customFields:"[]"};return e.workspaceId&&(n.workspaceId=e.workspaceId),e.userSelectedGroupId&&(n.userSelectedGroupId=e.userSelectedGroupId),(await p(E,{input:n})).acceptInviteLink??{success:!1,errorMessages:["Resposta invalida do servidor"]}},async getDependentsByInviteLink(e){const n=await l(W,{workspaceLinkId:e,hierarchyType:"dependent"});return Array.isArray(n.dependents)?n.dependents.map(t=>i(t)).filter(t=>t!==null).map(C).filter(t=>t!==null):[]}};export{R as a,B as b,G as i,L as r};
