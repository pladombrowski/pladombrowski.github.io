import{ae as u,T as y,S as d,af as c,eE as p,cu as A}from"./index-CZ6Aw2iN.js";function o(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function l(e){if(Array.isArray(e)){if(e.length===0)return null;const a=o(e[0]);return a?a.json??null:null}const t=o(e);return t?t.json??t:null}const I=`
  query WorkspaceBySearch($name: String!) {
    findWorkspaceBySearch(search: $name) {
      ownerUserId
      isPrimary
      id
      email
      type
      firstName
      lastName
      logoPath
      emailOpt
      legalName
      brandingName
      address
      number
      city
      zipCode
      complement
      createdAt
      updatedAt
      deletedAt
      phone
      description
    }
  }
`,g=`
  query GetWorkspaceLinkByIdJson($workspacelinkid: uuid!) {
    getworkspacelinkbyidjson(args: { workspacelinkid: $workspacelinkid }) {
      json
    }
  }
`,f=`
  query GetClientByIdJson($clientId: uuid!) {
    getclientbyidjson(args: { selectedclientid: $clientId }) {
      json
    }
  }
`,v=`
  query DeviceTemplateAdminForm($templateId: uuid!) {
    getdevicetemplateadminformjson(args: { selected_device_template_id: $templateId }) {
      json
    }
  }
`,k=`
  mutation SaveDeviceTemplateAdmin($templateId: uuid!, $payload: jsonb!) {
    savedevicetemplateadminjson(
      args: { selected_device_template_id: $templateId, selected_payload: $payload }
    ) {
      json
    }
  }
`,j=`
  mutation MakeAllParticipantsOfPrivateUnitsAdmin($workspaceId: uuid!, $userId: uuid!) {
    makeallparticipantsofprivateunitsadminjson(
      args: { selectedworkspaceid: $workspaceId, selecteduserid: $userId }
    ) {
      json
    }
  }
`,m={endpoint:y.hailaJavaGraphqlEndpoint},E=`
  query FnClientById($clientId: String!) {
    __typename
    fn_getclientbyidjson(clientId: $clientId) {
      __typename
      json
    }
  }
`,N=`
  query GetWorkspaceLinkByIdJson($workspacelinkid: String!) {
    prod_getworkspacelinkbyidjson(workspacelinkid: $workspacelinkid) {
      __typename
      json
    }
  }
`,$=`
  query DeviceTemplateAdminForm($templateId: String!) {
    prod_getdevicetemplateadminformjson(selected_device_template_id: $templateId) {
      __typename
      json
    }
  }
`,h=`
  mutation SaveDeviceTemplateAdmin($templateId: String!, $payload: Any) {
    prod_savedevicetemplateadminjson(
      selected_device_template_id: $templateId
      selected_payload: $payload
    ) {
      __typename
      json
    }
  }
`,D=`
  mutation MakeAllParticipantsOfPrivateUnitsAdmin($workspaceId: String!, $userId: String!) {
    prod_makeallparticipantsofprivateunitsadminjson(
      selectedworkspaceid: $workspaceId
      selecteduserid: $userId
    ) {
      __typename
      json
    }
  }
`;function i(e){return typeof e=="string"?e:""}function S(e){return{id:i(e.id),type:i(e.type),email:i(e.email),firstName:i(e.firstName),lastName:i(e.lastName),legalName:i(e.legalName),brandingName:i(e.brandingName),logoPath:i(e.logoPath),address:i(e.address),number:i(e.number),city:i(e.city),zipCode:i(e.zipCode),complement:i(e.complement),phone:typeof e.phone=="string"?e.phone:null,description:i(e.description)}}function P(e){if(e.type.trim().toUpperCase()==="PERSON"){const t=`${e.firstName} ${e.lastName}`.trim();if(t)return t}return e.brandingName.trim()||e.legalName.trim()||e.email.trim()||e.id}const b={async searchWorkspaces(e){const t=e.trim();if(!t)return[];const a=await d(I,{name:t});return(Array.isArray(a.findWorkspaceBySearch)?a.findWorkspaceBySearch:[]).filter(n=>!!o(n)).map(n=>S(n)).filter(n=>n.id)},async getWorkspaceLinkDebugDump(e){const t=c(p)==="java",a=await d(t?N:g,{workspacelinkid:e.trim()},t?m:void 0);return l(t?a.prod_getworkspacelinkbyidjson:a.getworkspacelinkbyidjson)},async getClientDebugDump(e){const t=c(A)==="java",a=e.trim(),s=t?await d(E,{clientId:a},m):await d(f,{clientId:a});return l(t?s.fn_getclientbyidjson:s.getclientbyidjson)},async getDeviceTemplateForm(e){const t=c(p)==="java",a=await d(t?$:v,{templateId:e},t?m:void 0),s=l(t?a.prod_getdevicetemplateadminformjson:a.getdevicetemplateadminformjson),n=o(s);if(!n)throw new Error("Resposta inválida: formulário não encontrado.");if(n.success===!1){const r=Array.isArray(n.errors)?n.errors.map(_=>String(_)).filter(Boolean):[];throw new Error(r[0]??"Falha ao carregar modelo de dispositivo")}return n},async saveDeviceTemplate(e,t){const a=c(p)==="java",s=await u(a?h:k,{templateId:e,payload:t},a?m:void 0),n=l(a?s.prod_savedevicetemplateadminjson:s.savedevicetemplateadminjson),r=o(n);if(!r)throw new Error("Resposta inválida ao salvar modelo de dispositivo");return r},async makeAllParticipantsOfPrivateUnitsAdmin(e,t){const a=c(p)==="java",s=await u(a?D:j,{workspaceId:e,userId:t},a?m:void 0),n=o(l(a?s.prod_makeallparticipantsofprivateunitsadminjson:s.makeallparticipantsofprivateunitsadminjson));if(n&&n.success===!1){const r=Array.isArray(n.errorMessages)?n.errorMessages.map(_=>String(_)).filter(Boolean):[];throw new Error(r[0]??"Falha ao tornar moradores admin")}}};export{P as a,b};
