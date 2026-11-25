import{ae as i,S as c,aw as k,T as g,af as d,ax as l}from"./index-BnjPmAJg.js";const A=`
  query getdashboardaccesses($selecteduserid: uuid!, $selectedworkspaceid: uuid!) {
    __typename
    getdashboardaccesses(
      args: { selecteduserid: $selecteduserid, selectedworkspaceid: $selectedworkspaceid }
    ) {
      __typename
      json
    }
  }
`,S=`
  query getfuturedashboardaccesses($selecteduserid: uuid!, $selectedworkspaceid: uuid!) {
    __typename
    getfuturedashboardaccesses(
      args: { selecteduserid: $selecteduserid, selectedworkspaceid: $selectedworkspaceid }
    ) {
      __typename
      json
    }
  }
`,b=`
  query GetWorkspaceKeysJson($workspaceId: uuid!) {
    getworkspacekeysjson(args: { selectedworkspaceid: $workspaceId }) {
      __typename
      json
    }
  }
`,$=`
  query GetWorkspaceMasterKeysJson($id: uuid) {
    getworkspacemasterkeysjson(args: { selectedworkspaceid: $id }) {
      json
    }
  }
`,f=`
  query GetMasterKeysJson($senderWorkspaceId: uuid!, $filters: jsonb) {
    get_master_keys_json(args: { p_sender_workspace_id: $senderWorkspaceId, p_filters: $filters }) {
      json
    }
  }
`,E=`
  mutation getdashboardaccesses($selecteduserid: String!, $selectedworkspaceid: String!) {
    __typename
    prod_getdashboardaccesses(
      selecteduserid: $selecteduserid
      selectedworkspaceid: $selectedworkspaceid
    ) {
      __typename
      json
    }
  }
`,j=`
  mutation getfuturedashboardaccesses($selecteduserid: String!, $selectedworkspaceid: String!) {
    __typename
    prod_getfuturedashboardaccesses(
      selecteduserid: $selecteduserid
      selectedworkspaceid: $selectedworkspaceid
    ) {
      __typename
      json
    }
  }
`,I=`
  mutation GetWorkspaceKeysJson($workspaceId: String!) {
    prod_getworkspacekeysjson(selectedworkspaceid: $workspaceId) {
      __typename
      json
    }
  }
`,v=`
  mutation GetWorkspaceMasterKeysJson($id: String!) {
    prod_getworkspacemasterkeysjson(selectedworkspaceid: $id) {
      json
    }
  }
`,K=`
  query GetMasterKeysJson(
    $senderWorkspaceId: String!
    $filters: ProdGetMasterKeysJsonPFiltersInput
  ) {
    prod_get_master_keys_json(p_sender_workspace_id: $senderWorkspaceId, p_filters: $filters) {
      json
    }
  }
`,p={endpoint:g.hailaJavaGraphqlEndpoint},w=`
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
`,D=`
  mutation AddAccessEvent($deviceId: String!, $keyId: UUID, $workspaceLinkId: UUID) {
    addAccessEvent(
      deviceId: $deviceId
      workspaceClientKeyId: $keyId
      workspaceLinkId: $workspaceLinkId
    ) {
      id
    }
  }
`,h=`
  mutation UpsertUserAccessBookmarks($selecteduserid: uuid!, $bookmarks: jsonb!) {
    upsertuseraccessbookmarksjson(
      args: { selecteduserid: $selecteduserid, bookmarks: $bookmarks }
    ) {
      json
    }
  }
`,R=`
  mutation DeleteUserAccessBookmark($selecteduserid: uuid!, $selectedbookmarkid: uuid!) {
    deleteuseraccessbookmarkjson(
      args: { selecteduserid: $selecteduserid, selectedbookmarkid: $selectedbookmarkid }
    ) {
      json
    }
  }
`,T=`
  mutation ReorderUserAccessBookmarks($selecteduserid: uuid!, $orderedbookmarkids: jsonb!) {
    reorderuseraccessbookmarksjson(
      args: { selecteduserid: $selecteduserid, orderedbookmarkids: $orderedbookmarkids }
    ) {
      json
    }
  }
`;function C(e){return{id:String(e.id??""),startDate:String(e.startDate??""),endDate:e.endDate??null,lastDirection:e.lastDirection??null}}function N(e){const s=e.area??{},n=Array.isArray(e.devices)?e.devices:[],t=Array.isArray(e.keys)?e.keys:[],r=e["extension-line"]??e.extensionLine??null;return{id:String(e.id??""),area:{id:String(s.id??""),name:String(s.name??"")},keys:t.filter(a=>!!a&&typeof a=="object").map(C),name:String(e.name??""),devices:n.filter(a=>!!a&&typeof a=="object").map(a=>({id:String(a.id??""),name:String(a.name??""),workspaceId:String(a.workspaceId??""),externalApiKey:a.externalApiKey??null,deviceFeatures:Array.isArray(a.deviceFeatures)?a.deviceFeatures.filter(o=>!!o&&typeof o=="object").map(o=>({id:String(o.id??""),name:String(o.name??""),deviceConnection:String(o.deviceConnection??"")})):[]})),extensionLineId:r&&r.trim()?r.trim():null}}function B(e){const s=Array.isArray(e.devices)?e.devices:[],n=Array.isArray(e.passages)?e.passages:[];return{name:String(e.name??""),linkId:String(e.linkId??""),createdAt:String(e.createdAt??""),recipient:String(e.recipient??""),mainPhotoPath:e.mainPhotoPath??null,senderWorkspaceId:String(e.senderWorkspaceId??""),devices:s.filter(t=>!!t&&typeof t=="object").map(t=>({id:String(t.id??""),name:String(t.name??""),workspaceId:String(t.workspaceId??""),externalApiKey:t.externalApiKey??null,deviceFeatures:Array.isArray(t.deviceFeatures)?t.deviceFeatures.filter(r=>!!r&&typeof r=="object").map(r=>({id:String(r.id??""),name:String(r.name??""),deviceConnection:String(r.deviceConnection??"")})):[]})),passages:n.filter(t=>!!t&&typeof t=="object").map(N)}}function u(e){if(!e)return{items:[],bookmarks:[]};const s=Array.isArray(e.active)?e.active:[],n=Array.isArray(e.bookmarks)?e.bookmarks:[],t=s.filter(a=>!!a&&typeof a=="object").map(B),r=n.filter(a=>!!a&&typeof a=="object").map(a=>({id:String(a.id??""),linkId:String(a.linkId??""),position:Number(a.position??0),passageId:String(a.passageId??"")})).sort((a,o)=>a.position-o.position);return{items:t,bookmarks:r}}function M(e){const s=e.workspace_client&&typeof e.workspace_client=="object"?e.workspace_client:null;return{id:String(e.id??""),status:e.status??null,startDate:e.startDate??null,endDate:e.endDate??null,createdAt:e.createdAt??null,senderWorkspaceId:e.senderWorkspaceId??null,recipient:s?{id:String(s.id??""),firstName:s.firstName??null,lastName:s.lastName??null,email:s.email??null,brandingName:s.brandingName??null,legalName:s.legalName??null,type:s.type??null,phone:s.phone??null}:null}}function _(e){const s=e.recipient;return s&&([s.firstName,s.lastName].map(t=>t?.trim()??"").filter(Boolean).join(" ")||s.brandingName?.trim()||s.legalName?.trim()||s.email)||""}function J(e,s=Date.now()){if(!Array.isArray(e))return[];const n=new Set,t=[];for(const r of e){const a=r?.json;if(!a||typeof a!="object")continue;const o=M(a);if(!o.id)continue;const m=o.endDate?Date.parse(o.endDate):Number.NaN;if(!Number.isNaN(m)&&m<=s)continue;const y=o.recipient?.id||o.id;n.has(y)||(n.add(y),t.push(o))}return t.sort((r,a)=>_(r).localeCompare(_(a),"pt-BR",{sensitivity:"base"}))}const G={async getDashboardAccesses(e,s){const n={selecteduserid:e,selectedworkspaceid:s},t=d(l)==="java",r=t?await i(E,n,{...p,timeoutMs:3e4}):await c(A,n,{timeoutMs:3e4});return u(k(t?r.prod_getdashboardaccesses:r.getdashboardaccesses))},async getFutureDashboardAccesses(e,s){const n={selecteduserid:e,selectedworkspaceid:s},t=d(l)==="java",r=t?await i(j,n,{...p,timeoutMs:3e4}):await c(S,n,{timeoutMs:3e4});return u(k(t?r.prod_getfuturedashboardaccesses:r.getfuturedashboardaccesses))},async getWorkspaceKeys(e){const s=d(l)==="java",n=s?await i(I,{workspaceId:e},p):await c(b,{workspaceId:e}),t=s?n.prod_getworkspacekeysjson:n.getworkspacekeysjson;if(!Array.isArray(t)||t.length===0)return{items:[],bookmarks:[]};const r=t[0]?.json;return!r||typeof r!="object"?{items:[],bookmarks:[]}:u(r)},async getWorkspaceMasterKeys(e){const s=d(l)==="java",n=s?await i(v,{id:e},p):await c($,{id:e});return u(k(s?n.prod_getworkspacemasterkeysjson:n.getworkspacemasterkeysjson))},async getMasterKeys(e,s={}){const n={senderWorkspaceId:e,filters:s},t=d(l)==="java",r=t?await c(K,n,p):await c(f,n);return J(t?r.prod_get_master_keys_json:r.get_master_keys_json)},async openDoor(e){return(await i(w,{externalApiKey:e.externalApiKey,DeviceConnectionType:e.deviceConnectionType,direction:e.direction??null})).deviceNotification},async saveBookmarks(e,s){await i(h,{selecteduserid:e,bookmarks:s})},async deleteBookmark(e,s){await i(R,{selecteduserid:e,selectedbookmarkid:s})},async reorderBookmarks(e,s){await i(T,{selecteduserid:e,orderedbookmarkids:s})},async addAccessEvent(e){await i(D,{deviceId:e.deviceId,keyId:e.keyId??null,workspaceLinkId:e.workspaceLinkId??null})}};export{G as k,_ as m};
