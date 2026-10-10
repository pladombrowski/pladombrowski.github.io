import{V as l,z as d}from"./index-B3kC9Ijv.js";function s(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function o(e){if(Array.isArray(e)){if(e.length===0)return null;const i=s(e[0]);return i?i.json??null:null}const t=s(e);return t?t.json??t:null}const m=`
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
`,p=`
  query GetWorkspaceLinkByIdJson($workspacelinkid: uuid!) {
    getworkspacelinkbyidjson(args: { workspacelinkid: $workspacelinkid }) {
      json
    }
  }
`,u=`
  query GetClientByIdJson($clientId: uuid!) {
    getclientbyidjson(args: { selectedclientid: $clientId }) {
      json
    }
  }
`,y=`
  query DeviceTemplateAdminForm($templateId: uuid!) {
    getdevicetemplateadminformjson(args: { selected_device_template_id: $templateId }) {
      json
    }
  }
`,f=`
  mutation SaveDeviceTemplateAdmin($templateId: uuid!, $payload: jsonb!) {
    savedevicetemplateadminjson(
      args: { selected_device_template_id: $templateId, selected_payload: $payload }
    ) {
      json
    }
  }
`,g=`
  mutation MakeAllParticipantsOfPrivateUnitsAdmin($workspaceId: uuid!, $userId: uuid!) {
    makeallparticipantsofprivateunitsadminjson(
      args: { selectedworkspaceid: $workspaceId, selecteduserid: $userId }
    ) {
      json
    }
  }
`;function a(e){return typeof e=="string"?e:""}function A(e){return{id:a(e.id),type:a(e.type),email:a(e.email),firstName:a(e.firstName),lastName:a(e.lastName),legalName:a(e.legalName),brandingName:a(e.brandingName),logoPath:a(e.logoPath),address:a(e.address),number:a(e.number),city:a(e.city),zipCode:a(e.zipCode),complement:a(e.complement),phone:typeof e.phone=="string"?e.phone:null,description:a(e.description)}}function _(e){if(e.type.trim().toUpperCase()==="PERSON"){const t=`${e.firstName} ${e.lastName}`.trim();if(t)return t}return e.brandingName.trim()||e.legalName.trim()||e.email.trim()||e.id}const h={async searchWorkspaces(e){const t=e.trim();if(!t)return[];const i=await d(m,{name:t});return(Array.isArray(i.findWorkspaceBySearch)?i.findWorkspaceBySearch:[]).filter(n=>!!s(n)).map(n=>A(n)).filter(n=>n.id)},async getWorkspaceLinkDebugDump(e){const t=await d(p,{workspacelinkid:e.trim()});return o(t.getworkspacelinkbyidjson)},async getClientDebugDump(e){const t=await d(u,{clientId:e.trim()});return o(t.getclientbyidjson)},async getDeviceTemplateForm(e){const t=await d(y,{templateId:e}),i=o(t.getdevicetemplateadminformjson),r=s(i);if(!r)throw new Error("Resposta inválida: formulário não encontrado.");if(r.success===!1){const n=Array.isArray(r.errors)?r.errors.map(c=>String(c)).filter(Boolean):[];throw new Error(n[0]??"Falha ao carregar modelo de dispositivo")}return r},async saveDeviceTemplate(e,t){const i=await l(f,{templateId:e,payload:t}),r=o(i.savedevicetemplateadminjson),n=s(r);if(!n)throw new Error("Resposta inválida ao salvar modelo de dispositivo");return n},async makeAllParticipantsOfPrivateUnitsAdmin(e,t){const i=await l(g,{workspaceId:e,userId:t}),r=s(o(i.makeallparticipantsofprivateunitsadminjson));if(r&&r.success===!1){const n=Array.isArray(r.errorMessages)?r.errorMessages.map(c=>String(c)).filter(Boolean):[];throw new Error(n[0]??"Falha ao tornar moradores admin")}}};export{_ as a,h as b};
