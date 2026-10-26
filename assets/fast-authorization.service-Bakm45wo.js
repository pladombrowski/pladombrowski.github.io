import{ad as p,G as u,E as y}from"./index-l1Wp4LV5.js";const l=`
  query FastAuthorization($workspaceLinkId: UUID!) {
    __typename
    fastAuthorization(workspaceLinkId: $workspaceLinkId) {
      __typename
      success
      errorMessages
      payload {
        __typename
        settings {
          __typename
          useQrCode
          hasRemoteOpen
          requireUserLocationRemoteOpen
        }
        workspaceLink {
          __typename
          id
          status
          startDate
          endDate
          workspaceClientId
          senderWorkspaceId
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
          workspaceClient {
            __typename
            id
            firstName
            lastName
            email
          }
          permissionAreas {
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
            }
          }
          workspaceClientKeys {
            __typename
            id
            startDate
            endDate
            uses
            totalUses
            passages {
              __typename
              id
              name
              devices {
                __typename
                id
                name
                deviceFeatures {
                  __typename
                  id
                  name
                  deviceConnection
                }
              }
            }
            areas {
              __typename
              id
              name
            }
          }
        }
      }
    }
  }
`,g=`
  mutation OpenFastAuthorizationPassage($input: FastAuthorizationPassageInput!) {
    __typename
    openFastAuthorizationPassage(input: $input) {
      __typename
      success
      errorMessages
    }
  }
`,f=`
  mutation SetLocalClientByFastAuthorization($input: SetLocalClientByFastAuthorizationInput!) {
    __typename
    setLocalClientByFastAuthorization(input: $input) {
      __typename
      success
      errorMessages
    }
  }
`,A=`
  query FastAuthorizationsByWorkspace($creatorWorkspaceId: UUID!) {
    __typename
    validFastAuthorizationsByCreatorWorkspaceId(
      creatorWorkspaceId: $creatorWorkspaceId
    ) {
      __typename
      success
      errorMessages
      payload {
        __typename
        workspaceLink {
          __typename
          id
          endDate
          createdAt
          startDate
          status
          senderWorkspaceId
          workspaceClient {
            __typename
            firstName
            lastName
            id
          }
        }
        clientPhotoUrl
      }
    }
  }
`,_=`
  mutation CreateFastAuthorization($input: CreateFastAuthorizationInput!) {
    __typename
    createFastAuthorization(input: $input) {
      __typename
      success
      errorMessages
      payload {
        __typename
        id
      }
    }
  }
`;function r(e){return e==null?null:String(e).trim()||null}function k(e){return{id:String(e.id??""),name:String(e.name??""),deviceConnection:String(e.deviceConnection??"")}}function h(e){const t=Array.isArray(e.deviceFeatures)?e.deviceFeatures:[];return{id:String(e.id??""),name:String(e.name??""),deviceFeatures:t.filter(s=>!!s&&typeof s=="object").map(k)}}function N(e){const t=Array.isArray(e.devices)?e.devices:[];return{id:String(e.id??""),name:String(e.name??""),devices:t.filter(s=>!!s&&typeof s=="object").map(h)}}function S(e){const t=Array.isArray(e.passages)?e.passages:[],s=Array.isArray(e.areas)?e.areas:[];return{id:String(e.id??""),startDate:r(e.startDate),endDate:r(e.endDate),uses:Number(e.uses??0),totalUses:Number(e.totalUses??0),passages:t.filter(a=>!!a&&typeof a=="object").map(N),areas:s.filter(a=>!!a&&typeof a=="object").map(a=>({id:String(a.id??""),name:String(a.name??"")}))}}function I(e){const t=Array.isArray(e.permissionAreas)?e.permissionAreas:[],s=Array.isArray(e.workspaceClientKeys)?e.workspaceClientKeys:[],a=e.senderWorkspace,n=e.workspaceClient;return{id:String(e.id??""),status:String(e.status??""),startDate:r(e.startDate),endDate:r(e.endDate),workspaceClientId:r(e.workspaceClientId),senderWorkspaceId:r(e.senderWorkspaceId),senderWorkspace:a?{id:String(a.id??""),brandingName:r(a.brandingName),legalName:r(a.legalName),firstName:r(a.firstName),lastName:r(a.lastName)}:null,workspaceClient:n?{id:String(n.id??""),firstName:r(n.firstName),lastName:r(n.lastName),email:r(n.email)}:null,permissionAreas:t.filter(i=>!!i&&typeof i=="object").map(i=>{const o=i.area;if(!o)return{area:null};const m=Array.isArray(o.passages)?o.passages:[];return{area:{id:String(o.id??""),name:String(o.name??""),passages:m.filter(c=>!!c&&typeof c=="object").map(c=>({id:String(c.id??""),name:String(c.name??"")}))}}}),workspaceClientKeys:s.filter(i=>!!i&&typeof i=="object").map(S)}}function C(e){return{useQrCode:!!e?.useQrCode,hasRemoteOpen:!!e?.hasRemoteOpen,requireUserLocationRemoteOpen:!!e?.requireUserLocationRemoteOpen}}function F(e){const t=e.workspaceLink;if(!t)return null;const s=t.workspaceClient,a=String(t.id??"");return a?{workspaceLinkId:a,startDate:r(t.startDate),endDate:r(t.endDate),createdAt:r(t.createdAt),status:r(t.status),senderWorkspaceId:r(t.senderWorkspaceId),workspaceClient:s?{id:String(s.id??""),firstName:r(s.firstName),lastName:r(s.lastName)}:null,clientPhotoUrl:r(e.clientPhotoUrl)}:null}async function d(e,t){const a=(t?await u(l,{workspaceLinkId:e}):await y(l,{workspaceLinkId:e})).fastAuthorization;if(!a)return{success:!1,errorMessages:["Convite indisponivel ou expirado."],payload:null};const n=a.payload;let i=null;if(n){const o=n.workspaceLink;i={settings:C(n.settings??null),workspaceLink:o?I(o):null}}return{success:a.success,errorMessages:(a.errorMessages??[]).map(o=>String(o)),payload:i}}const v={getFastAuthorizationPublic(e){return d(e,!1)},getFastAuthorization(e){return d(e,!0)},async getValidFastAuthorizations(e){if(!e)return{success:!1,errorMessages:[],items:[]};const s=(await u(A,{creatorWorkspaceId:e})).validFastAuthorizationsByCreatorWorkspaceId;return s?{success:!!s.success,errorMessages:(s.errorMessages??[]).map(a=>String(a)),items:(s.payload??[]).filter(a=>!!a&&typeof a=="object").map(F).filter(a=>a!==null)}:{success:!1,errorMessages:["Convites rapidos indisponiveis."],items:[]}},async createFastAuthorization(e){const s=(await p(_,{input:e})).createFastAuthorization;if(!s)throw new Error("Resposta invalida ao criar convite rapido");const a=s.payload,n=[];if(Array.isArray(a))for(const i of a)i?.id&&n.push(String(i.id));else a?.id&&n.push(String(a.id));return{success:!!s.success,errorMessages:(s.errorMessages??[]).map(i=>String(i)),ids:n}},async openFastAuthorizationPassage(e,t){const a=(await p(g,{input:{fastAuthorizationId:e,passageId:t}},{auth:!1})).openFastAuthorizationPassage;if(!a)throw new Error("Nao foi possivel abrir a passagem.");return{success:a.success,errorMessages:(a.errorMessages??[]).map(n=>String(n))}},async setLocalClientByFastAuthorization(e){const t={fastAuthorizationId:e.fastAuthorizationId};e.fileUploadId?.trim()&&(t.fileUploadId=e.fileUploadId.trim()),e.firstName?.trim()&&(t.firstName=e.firstName.trim()),e.lastName?.trim()&&(t.lastName=e.lastName.trim());const a=(await p(f,{input:t},{auth:!1})).setLocalClientByFastAuthorization;if(!a)throw new Error("Resposta invalida do servidor.");return{success:a.success,errorMessages:(a.errorMessages??[]).map(n=>String(n))}}};export{v as f};
