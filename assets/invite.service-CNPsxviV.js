import{a4 as o,N as c,G as u}from"./index-BGV3ocPL.js";const l={endpoint:c.hailaJavaGraphqlEndpoint,timeoutMs:3e4},d=`
  query fetchInvites(
    $recipientId: uuid!
    $likeParam: String
    $offset: Int
    $status: _varchar
    $type: String
  ) {
    __typename
    getinvitesjson(
      args: {
        inputlikeparam: $likeParam
        inputworkspaceid: $recipientId
        inputoffset: $offset
        inputstatus: $status
        inputtype: $type
        inputlimit: 50
      }
    ) {
      __typename
      json
    }
  }
`,m=`
  mutation UpdateRequestStatusWithResponse($id: UUID!, $status: String!) {
    updateRequestStatusWithResponse(workspaceLinkId: $id, status: $status) {
      success
      errorMessages
      payload {
        id
      }
    }
  }
`,y=`
  mutation InviteSettleWorkspaceLinks($input: Any) {
    invite_settleWorkspaceLinks(input: $input)
  }
`;function p(e){if(!e||typeof e!="object")return null;const t=e;return{id:String(t.id??""),email:t.email??null,phone:t.phone??null,type:t.type??null,firstName:t.firstName??null,lastName:t.lastName??null,brandingName:t.brandingName??null}}function k(e){const t=e.workspaceLinkType,n=Array.isArray(e.permissionWorkspaces)?e.permissionWorkspaces:[],s=[];for(const a of n){if(!a||typeof a!="object")continue;const r=a.permission?.name;typeof r=="string"&&r.trim()&&s.push(r)}return{id:String(e.id??""),status:String(e.status??"PENDING"),startDate:e.startDate??null,endDate:e.endDate??null,createdAt:e.createdAt??null,statusNote:e.statusNote??null,typeName:t?.name??null,workspaceClientId:e.workspaceClientId??null,workspaceLinkTypeId:e.workspaceLinkTypeId??null,senderWorkspace:p(e.senderWorkspace??e.creatorWorkspace),creatorWorkspace:p(e.creatorWorkspace),permissionNames:s}}const I={async fetchInvites(e,t=null){const s=(await u(d,{recipientId:e,likeParam:null,offset:0,status:t?`{${t}}`:null,type:null})).getinvitesjson;if(!Array.isArray(s)||s.length===0)return[];const a=s[0]?.json;return Array.isArray(a)?a.filter(i=>!!i&&typeof i=="object").map(k):[]},async settleWorkspaceLinks(e){const n=(await o(y,{input:{workspaceLinkIds:e.ids,status:e.status}},l)).invite_settleWorkspaceLinks??null;if(!n||n.success!==!0){const i=Array.isArray(n?.errorMessages)?n.errorMessages.map(r=>String(r)):[];throw new Error(i[0]??"Falha ao processar os convites")}const s=n.payload??{};return{processedIds:Array.isArray(s.processedIds)?s.processedIds.map(i=>String(i)):[]}},async updateRequestStatus(e,t){const s=(await o(m,{id:e,status:t})).updateRequestStatusWithResponse;if(!s.success)throw new Error(s.errorMessages.join(", ")||"Nao foi possivel atualizar o convite.")}};export{I as i};
