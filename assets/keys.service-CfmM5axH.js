import{aa as o,E as c,ab as l}from"./index-Bw5log2n.js";const m=`
  query getdashboardaccesses($selecteduserid: uuid!, $selectedworkspaceid: uuid!) {
    __typename
    getdashboardaccesses(
      args: { selecteduserid: $selecteduserid, selectedworkspaceid: $selectedworkspaceid }
    ) {
      __typename
      json
    }
  }
`,y=`
  query getfuturedashboardaccesses($selecteduserid: uuid!, $selectedworkspaceid: uuid!) {
    __typename
    getfuturedashboardaccesses(
      args: { selecteduserid: $selecteduserid, selectedworkspaceid: $selectedworkspaceid }
    ) {
      __typename
      json
    }
  }
`,g=`
  query GetWorkspaceKeysJson($workspaceId: uuid!) {
    getworkspacekeysjson(args: { selectedworkspaceid: $workspaceId }) {
      __typename
      json
    }
  }
`,A=`
  query GetWorkspaceMasterKeysJson($id: uuid) {
    getworkspacemasterkeysjson(args: { selectedworkspaceid: $id }) {
      json
    }
  }
`,S=`
  query GetMasterKeysJson($senderWorkspaceId: uuid!, $filters: jsonb) {
    get_master_keys_json(args: { p_sender_workspace_id: $senderWorkspaceId, p_filters: $filters }) {
      json
    }
  }
`,b=`
  mutation DeviceNotification(
    $externalApiKey: String!
    $DeviceConnectionType: String!
    $direction: String
  ) {
    __typename
    deviceNotification(
      deviceExternalApiKeyId: $externalApiKey
      direction: $direction
      deviceFeature: $DeviceConnectionType
    ) {
      __typename
      errorMessages
      success
      payload {
        __typename
        date
        hash
      }
    }
  }
`,f=`
  mutation AddAccessEvent($deviceId: String!, $keyId: UUID, $workspaceLinkId: UUID) {
    addAccessEvent(
      deviceId: $deviceId
      workspaceClientKeyId: $keyId
      workspaceLinkId: $workspaceLinkId
    ) {
      id
    }
  }
`,_=`
  mutation UpsertUserAccessBookmarks($selecteduserid: uuid!, $bookmarks: jsonb!) {
    upsertuseraccessbookmarksjson(
      args: { selecteduserid: $selecteduserid, bookmarks: $bookmarks }
    ) {
      json
    }
  }
`,I=`
  mutation DeleteUserAccessBookmark($selecteduserid: uuid!, $selectedbookmarkid: uuid!) {
    deleteuseraccessbookmarkjson(
      args: { selecteduserid: $selecteduserid, selectedbookmarkid: $selectedbookmarkid }
    ) {
      json
    }
  }
`,$=`
  mutation ReorderUserAccessBookmarks($selecteduserid: uuid!, $orderedbookmarkids: jsonb!) {
    reorderuseraccessbookmarksjson(
      args: { selecteduserid: $selecteduserid, orderedbookmarkids: $orderedbookmarkids }
    ) {
      json
    }
  }
`;function E(e){return{id:String(e.id??""),startDate:String(e.startDate??""),endDate:e.endDate??null,lastDirection:e.lastDirection??null}}function D(e){const s=e.area??{},r=Array.isArray(e.devices)?e.devices:[],n=Array.isArray(e.keys)?e.keys:[],a=e["extension-line"]??e.extensionLine??null;return{id:String(e.id??""),area:{id:String(s.id??""),name:String(s.name??"")},keys:n.filter(t=>!!t&&typeof t=="object").map(E),name:String(e.name??""),devices:r.filter(t=>!!t&&typeof t=="object").map(t=>({id:String(t.id??""),name:String(t.name??""),workspaceId:String(t.workspaceId??""),externalApiKey:t.externalApiKey??null,deviceFeatures:Array.isArray(t.deviceFeatures)?t.deviceFeatures.filter(i=>!!i&&typeof i=="object").map(i=>({id:String(i.id??""),name:String(i.name??""),deviceConnection:String(i.deviceConnection??"")})):[]})),extensionLineId:a&&a.trim()?a.trim():null}}function j(e){const s=Array.isArray(e.devices)?e.devices:[],r=Array.isArray(e.passages)?e.passages:[];return{name:String(e.name??""),linkId:String(e.linkId??""),createdAt:String(e.createdAt??""),recipient:String(e.recipient??""),mainPhotoPath:e.mainPhotoPath??null,senderWorkspaceId:String(e.senderWorkspaceId??""),devices:s.filter(n=>!!n&&typeof n=="object").map(n=>({id:String(n.id??""),name:String(n.name??""),workspaceId:String(n.workspaceId??""),externalApiKey:n.externalApiKey??null,deviceFeatures:Array.isArray(n.deviceFeatures)?n.deviceFeatures.filter(a=>!!a&&typeof a=="object").map(a=>({id:String(a.id??""),name:String(a.name??""),deviceConnection:String(a.deviceConnection??"")})):[]})),passages:r.filter(n=>!!n&&typeof n=="object").map(D)}}function d(e){if(!e)return{items:[],bookmarks:[]};const s=Array.isArray(e.active)?e.active:[],r=Array.isArray(e.bookmarks)?e.bookmarks:[],n=s.filter(t=>!!t&&typeof t=="object").map(j),a=r.filter(t=>!!t&&typeof t=="object").map(t=>({id:String(t.id??""),linkId:String(t.linkId??""),position:Number(t.position??0),passageId:String(t.passageId??"")})).sort((t,i)=>t.position-i.position);return{items:n,bookmarks:a}}function K(e){const s=e.workspace_client&&typeof e.workspace_client=="object"?e.workspace_client:null;return{id:String(e.id??""),status:e.status??null,startDate:e.startDate??null,endDate:e.endDate??null,createdAt:e.createdAt??null,senderWorkspaceId:e.senderWorkspaceId??null,recipient:s?{id:String(s.id??""),firstName:s.firstName??null,lastName:s.lastName??null,email:s.email??null,brandingName:s.brandingName??null,legalName:s.legalName??null,type:s.type??null,phone:s.phone??null}:null}}function k(e){const s=e.recipient;return s&&([s.firstName,s.lastName].map(n=>n?.trim()??"").filter(Boolean).join(" ")||s.brandingName?.trim()||s.legalName?.trim()||s.email)||""}function v(e,s=Date.now()){if(!Array.isArray(e))return[];const r=new Set,n=[];for(const a of e){const t=a?.json;if(!t||typeof t!="object")continue;const i=K(t);if(!i.id)continue;const u=i.endDate?Date.parse(i.endDate):Number.NaN;if(!Number.isNaN(u)&&u<=s)continue;const p=i.recipient?.id||i.id;r.has(p)||(r.add(p),n.push(i))}return n.sort((a,t)=>k(a).localeCompare(k(t),"pt-BR",{sensitivity:"base"}))}const h={async getDashboardAccesses(e,s){const r=await c(m,{selecteduserid:e,selectedworkspaceid:s},{timeoutMs:3e4});return d(l(r.getdashboardaccesses))},async getFutureDashboardAccesses(e,s){const r=await c(y,{selecteduserid:e,selectedworkspaceid:s},{timeoutMs:3e4});return d(l(r.getfuturedashboardaccesses))},async getWorkspaceKeys(e){const r=(await c(g,{workspaceId:e})).getworkspacekeysjson;if(!Array.isArray(r)||r.length===0)return{items:[],bookmarks:[]};const n=r[0]?.json;return!n||typeof n!="object"?{items:[],bookmarks:[]}:d(n)},async getWorkspaceMasterKeys(e){const s=await c(A,{id:e});return d(l(s.getworkspacemasterkeysjson))},async getMasterKeys(e,s={}){const r=await c(S,{senderWorkspaceId:e,filters:s});return v(r.get_master_keys_json)},async openDoor(e){return(await o(b,{externalApiKey:e.externalApiKey,DeviceConnectionType:e.deviceConnectionType,direction:e.direction??null})).deviceNotification},async saveBookmarks(e,s){await o(_,{selecteduserid:e,bookmarks:s})},async deleteBookmark(e,s){await o(I,{selecteduserid:e,selectedbookmarkid:s})},async reorderBookmarks(e,s){await o($,{selecteduserid:e,orderedbookmarkids:s})},async addAccessEvent(e){await o(f,{deviceId:e.deviceId,keyId:e.keyId??null,workspaceLinkId:e.workspaceLinkId??null})}};export{h as k,k as m};
