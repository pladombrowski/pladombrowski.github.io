import{a0 as C,a1 as D,ag as S,K as h,E as u,aa as I}from"./index-CfYDEQlm.js";const p=`
  id
  ownerWorkspaceId
  status
  pickupType
  title
  observations
  expiresAt
  metadata
  workspaceClientId
  clientGroupWorkspaceLinkId
  fileUploadId
  creatorUserId
  areaId
  passageId
  createdAt
  updatedAt
  workspaceClient {
    id
    email
    type
    firstName
    lastName
    legalName
    brandingName
    phone
    ownerWorkspaceId
  }
  fileUpload {
    id
    url
    key
  }
  creatorWorkspace {
    id
    type
    email
    phone
    firstName
    lastName
    legalName
    brandingName
  }
  groupName
  groupNumber
`,B=`
  query GetDeliveriesByWorkspace($input: GetDeliveriesByWorkspaceInput!) {
    deliveriesByWorkspace(input: $input) {
      success
      errorMessages
      payload {
        items {
          ${p}
        }
        nextCursor
        hasNextPage
      }
    }
  }
`,L=`
  query GetDeliveriesByRecipient($input: GetDeliveriesByRecipientInput!) {
    deliveriesByRecipient(input: $input) {
      success
      errorMessages
      payload {
        items {
          ${p}
        }
        nextCursor
        hasNextPage
      }
    }
  }
`,T=`
  mutation SetDelivery($input: SetDeliveryInput!) {
    setDelivery(input: $input) {
      success
      errorMessages
      payload {
        ${p}
      }
    }
  }
`,P=`
  mutation CreateDelivery($input: CreateDeliveryInput!) {
    createDelivery(input: $input) {
      success
      errorMessages
      payload {
        ${p}
      }
    }
  }
`,x=`
  query GetMyWorkspaceClientJson($p_workspace_id: uuid!) {
    get_my_workspace_client_json(args: { p_workspace_id: $p_workspace_id }) {
      json
    }
  }
`,R=`
  query GetWorkspaceClientById($clientId: uuid!) {
    getclientbyidjson(args: { selectedclientid: $clientId }) {
      json
    }
  }
`,se=140,oe=["upcoming","pending","pickedUp","expired","cancelled"],le=["manual","lockerBiccateca","lockerGolocker"],ce={upcoming:"deliveries.status.upcoming",pending:"deliveries.status.pending",pickedUp:"deliveries.status.pickedUp",expired:"deliveries.status.expired",cancelled:"deliveries.status.cancelled"},de={manual:"deliveries.pickup.manual",lockerBiccateca:"deliveries.pickup.lockerBiccateca",lockerGolocker:"deliveries.pickup.lockerGolocker"};function ue(e){return e==="lockerBiccateca"||e==="lockerGolocker"}const W={upcoming:"UPCOMING",pending:"PENDING",pickedUp:"PICKED_UP",expired:"EXPIRED",cancelled:"CANCELLED"},M={manual:"MANUAL",lockerBiccateca:"LOCKER_BICCATECA",lockerGolocker:"LOCKER_GOLOCKER"};function G(e){return W[e]}function k(e){return M[e]}function _(e){return e==null?"":String(e).trim().toUpperCase().replace(/[_\-\s]/g,"")}function N(e){if(e==null)return null;if(typeof e=="number"&&Number.isFinite(e))return Math.trunc(e);if(typeof e=="string"){const r=Number.parseInt(e,10);return Number.isNaN(r)?null:r}return null}function b(e){switch(_(e)){case"UPCOMING":return"upcoming";case"PICKEDUP":return"pickedUp";case"EXPIRED":return"expired";case"CANCELLED":case"CANCELED":return"cancelled";case"PENDING":return"pending";default:{const r=N(e);return r===1?"pickedUp":r===2?"expired":r===3?"cancelled":"pending"}}}function O(e){switch(_(e)){case"LOCKERBICCATECA":return"lockerBiccateca";case"LOCKERGOLOCKER":return"lockerGolocker";case"MANUAL":return"manual";default:{const r=N(e);return r===1?"lockerBiccateca":r===2?"lockerGolocker":"manual"}}}function a(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function n(e){if(e==null)return null;const r=String(e).trim();return r||null}function d(e){if(e==null)return null;const r=typeof e=="string"?e.trim():"";if(!r)return null;const t=new Date(r);return Number.isNaN(t.getTime())?null:t.toISOString()}function v(e){return Array.isArray(e)?e.map(r=>String(r)).filter(r=>r.length>0):[]}function o(e){const r=e?.trim();return r||null}function m(e){return{id:n(e.id)??"",email:n(e.email),type:n(e.type),firstName:n(e.firstName),lastName:n(e.lastName),legalName:n(e.legalName),brandingName:n(e.brandingName),phone:n(e.phone),ownerWorkspaceId:n(e.ownerWorkspaceId)}}function j(e){return{id:n(e.id)??"",url:n(e.url),key:n(e.key)}}function y(e){return{id:n(e.id)??"",ownerWorkspaceId:n(e.ownerWorkspaceId)??"",status:b(e.status),pickupType:O(e.pickupType),title:n(e.title)??"",observations:n(e.observations),expiresAt:d(e.expiresAt),metadata:n(e.metadata),workspaceClientId:n(e.workspaceClientId),clientGroupWorkspaceLinkId:n(e.clientGroupWorkspaceLinkId),fileUploadId:n(e.fileUploadId),creatorUserId:n(e.creatorUserId),areaId:n(e.areaId),passageId:n(e.passageId),workspaceClient:a(e.workspaceClient)?m(a(e.workspaceClient)):null,fileUpload:a(e.fileUpload)?j(a(e.fileUpload)):null,creatorWorkspace:a(e.creatorWorkspace)?m(a(e.creatorWorkspace)):null,groupName:n(e.groupName),groupNumber:n(e.groupNumber),createdAt:d(e.createdAt)??new Date().toISOString(),updatedAt:d(e.updatedAt)??new Date().toISOString()}}function E(e){if(!e)return"";const r=e.brandingName?.trim();if(r)return r;const t=e.legalName?.trim();if((e.type??"").trim().toUpperCase()==="LEGAL_PERSON"&&t)return t;const i=[e.firstName,e.lastName].map(s=>s?.trim()??"").filter(Boolean).join(" ");return i||t||(e.email?.trim()??"")}function pe(e){return E(e.workspaceClient)}function fe(e){return E(e.creatorWorkspace)}function me(e){const r=e.groupName?.trim()??"",t=e.groupNumber?.trim()??"";return r?!t||r.toLowerCase().endsWith(t.toLowerCase())?r:`${r} ${t}`:t}function F(e){return{fileUploadId:n(e.fileUploadId)??n(e.fileId)??"",url:n(e.url)??n(e.fileUrl)}}function K(e){const r={fileUploadId:e.fileUploadId};return e.url&&(r.url=e.url),r}function $(e){return{id:n(e.id)??"",description:n(e.description)??"",fileUploadId:n(e.fileUploadId),url:n(e.url),createdAt:d(e.createdAt),createdByUserId:n(e.createdByUserId),createdByName:n(e.createdByName)}}function Y(e){const r={id:e.id,description:e.description};return e.fileUploadId&&(r.fileUploadId=e.fileUploadId),e.url&&(r.url=e.url),e.createdAt&&(r.createdAt=e.createdAt),e.createdByUserId&&(r.createdByUserId=e.createdByUserId),e.createdByName&&(r.createdByName=e.createdByName),r}function V(e){const r=Array.isArray(e.files)?e.files:[];return{id:n(e.id)??"",content:n(e.content)??"",files:r.map(t=>a(t)).filter(t=>t!==null).map(F).filter(t=>t.fileUploadId!==""||(t.url??"")!==""),createdAt:d(e.createdAt),createdByUserId:n(e.createdByUserId),createdByName:n(e.createdByName)}}function J(e){const r={id:e.id,content:e.content,files:e.files.map(K)};return e.createdAt&&(r.createdAt=e.createdAt),e.createdByUserId&&(r.createdByUserId=e.createdByUserId),e.createdByName&&(r.createdByName=e.createdByName),r}function ye(e){if(!e||!e.trim())return{};try{const r=JSON.parse(e),t=a(r);if(t)return{...t}}catch{}return{}}function Ie(e){return n(e.carrier)}function ge(e){const r=e.statusFiles;return Array.isArray(r)?r.map(t=>a(t)).filter(t=>t!==null).map($):[]}function ke(e){const r=e.notes;return Array.isArray(r)?r.map(t=>a(t)).filter(t=>t!==null).map(V):[]}function q(e){return Object.keys(e).length?JSON.stringify(e):null}function _e(e,r){const t={...e};if(r.carrier!==void 0){const i=r.carrier?.trim();i?t.carrier=i:delete t.carrier}return r.statusFiles&&(r.statusFiles.length===0?delete t.statusFiles:t.statusFiles=r.statusFiles.map(Y)),r.notes&&(r.notes.length===0?delete t.notes:t.notes=r.notes.map(J)),q(t)}function w(e){const r=!!e.id,t={};return r&&(t.id=e.id),t.workspaceId=e.workspaceId,t.status=G(e.status),t.pickupType=k(e.pickupType),t.title=e.title,(e.observations!=null||r)&&(t.observations=e.observations??null),(e.expiresAt!=null||r)&&(t.expiresAt=e.expiresAt?e.expiresAt.toISOString():null),(e.metadata!=null||r)&&(t.metadata=e.metadata??null),o(e.workspaceClientId)&&(t.workspaceClientId=e.workspaceClientId),o(e.clientGroupWorkspaceLinkId)&&(t.clientGroupWorkspaceLinkId=e.clientGroupWorkspaceLinkId),o(e.fileUploadId)?t.fileUploadId=e.fileUploadId:r&&(t.fileUploadId=null),o(e.creatorUserId)&&(t.creatorUserId=e.creatorUserId),o(e.areaId)?t.areaId=e.areaId:r&&(t.areaId=null),o(e.passageId)?t.passageId=e.passageId:r&&(t.passageId=null),t}function z(e){const r={workspaceId:e.workspaceId,pickupType:k(e.pickupType),title:e.title};return o(e.observations)&&(r.observations=e.observations?.trim()),e.expiresAt!=null&&(r.expiresAt=e.expiresAt.toISOString()),o(e.metadata)&&(r.metadata=e.metadata),o(e.fileUploadId)&&(r.fileUploadId=e.fileUploadId),o(e.areaId)&&(r.areaId=e.areaId),o(e.passageId)&&(r.passageId=e.passageId),r}class c extends Error{slugs;constructor(r){const t=r.length?r:["operation_failed"];super(t.join(", ")),this.name="DeliveryEnvelopeError",this.slugs=t}}function f(e,r){const t=a(e?.[r]);if(!t)throw new c(["invalid_response"]);const i=t.success===!0,s=v(t.errorMessages);if(!i)throw new c(s.length?s:["operation_failed"]);return t}function A(e){return{items:(Array.isArray(e.items)?e.items:[]).map(t=>a(t)).filter(t=>t!==null).map(y),nextCursor:n(e.nextCursor),hasNextPage:e.hasNextPage===!0}}function X(e){const r=f(e,"deliveriesByWorkspace"),t=a(r.payload);return t?A(t):{items:[],nextCursor:null,hasNextPage:!1}}function H(e){const r=f(e,"deliveriesByRecipient"),t=a(r.payload);return t?A(t):{items:[],nextCursor:null,hasNextPage:!1}}function Q(e){const r=f(e,"setDelivery"),t=a(r.payload);if(!t)throw new c(["could_not_set_delivery"]);return y(t)}function Z(e){const r=f(e,"createDelivery"),t=a(r.payload);if(!t)throw new c(["could_not_create_delivery"]);return y(t)}const ee={user_not_authorized:"Você não tem permissão para esta ação.",delivery_title_required:"Informe o nome da encomenda.",delivery_destination_required:"Selecione ao menos um destinatário ou unidade.",workspace_client_not_found:"Destinatário não encontrado neste workspace.",client_group_not_found:"Unidade ou grupo não encontrado neste workspace.",invalid_client_group:"O vínculo selecionado não é uma unidade/grupo válido.",area_not_found:"Área de retirada não encontrada neste workspace.",passage_not_found:"Passagem de retirada inválida para a área selecionada.",file_upload_not_found:"Foto da encomenda não encontrada. Envie novamente.",delivery_not_found:"Encomenda não encontrada.",delivery_recipient_required:"Não foi possível identificar o destinatário.",delivery_recipient_not_found:"Destinatário ou grupo inválido para este workspace.",invalid_cursor:"Não foi possível carregar mais encomendas.",could_not_set_delivery:"Não foi possível salvar a encomenda. Tente novamente.",could_not_create_delivery:"Não foi possível salvar a encomenda. Tente novamente.",invalid_response:"Não foi possível concluir a operação.",operation_failed:"Não foi possível concluir a operação."};function U(e){const r=ee[e];return r||(e.startsWith("could_not_")?"Não foi possível salvar. Tente novamente.":e)}function re(e){return e.length===0?"Não foi possível concluir a operação.":e.map(U).join(`
`)}function Ne(e){if(e instanceof c)return re(e.slugs);const r=e instanceof Error?e.message.replace(/^Exception:\s*/,""):String(e??"");return U(r)}function te(e){if(e==null)return null;if(Array.isArray(e)){const t=a(e[0]);return t?t.json??null:null}const r=a(e);return r?r.json??null:null}function ne(e){if(e==null)return null;let r=null;const t=a(e);if(t){if(t.success===!1){const l=v(t.errorMessages);throw new c(l.length?l:["delivery_recipient_not_found"])}const s=t.payload??t.client??t;r=g(s)}else Array.isArray(e)&&e.length>0&&(r=g(e[0]));if(!r)return null;const i=m(r);return i.id?i:null}function g(e){const r=a(e);return r||(Array.isArray(e)&&e.length>0?a(e[0]):null)}function ae(e){return{id:n(e.id)??"",type:n(e.type)??"PERSON",email:n(e.email),phone:n(e.phone),firstName:n(e.firstName),lastName:n(e.lastName),legalName:n(e.legalName),brandingName:n(e.brandingName)}}const ve={async getDeliveriesByWorkspace(e){const r={workspaceId:e.workspaceId,first:Math.min(Math.max(e.first??20,1),50)};e.after&&(r.after=e.after);const t=await u(B,{input:r});return X(t)},async getDeliveriesByRecipient(e){const r={workspaceId:e.workspaceId,first:Math.min(Math.max(e.first??20,1),50)};e.after&&(r.after=e.after);const t=await u(L,{input:r});return H(t)},async setDelivery(e){const r=await I(T,{input:w(e)});return Q(r)},async createDelivery(e){const r=await I(P,{input:z(e)});return Z(r)},async getMyWorkspaceClient(e){const r=await u(x,{p_workspace_id:e});return ne(te(r.get_my_workspace_client_json))},async getWorkspaceClientById(e){const t=(await u(R,{clientId:e})).getclientbyidjson;if(!Array.isArray(t)||t.length===0)return null;const i=a(t[0]?.json);if(!i)return null;const s=ae(i);return s.id?s:null},async getFileUploadUrl(e){const r=e.trim();if(!r)return null;const i=await C()?D():null;if(!i)throw new S;const s=await fetch(h.fileUploadMetadataUrl(r),{headers:{Authorization:`Bearer ${i}`,Accept:"*/*"}});if(!s.ok)return null;const l=await s.json().catch(()=>null);return l?n(l.url)??n(l.fileUrl):null}};export{ce as D,se as K,Ne as a,re as b,Ie as c,ve as d,ke as e,ge as f,de as g,fe as h,pe as i,me as j,ue as k,oe as l,_e as m,le as n,ye as p};
