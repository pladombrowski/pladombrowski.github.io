import{$ as o,G as p}from"./index-BjQk272g.js";const u=`
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
`,l=`
  mutation UpdateRequestStatusWithResponse($id: UUID!, $status: String!) {
    updateRequestStatusWithResponse(workspaceLinkId: $id, status: $status) {
      success
      errorMessages
      payload {
        id
      }
    }
  }
`;function c(t){if(!t||typeof t!="object")return null;const e=t;return{id:String(e.id??""),email:e.email??null,phone:e.phone??null,type:e.type??null,firstName:e.firstName??null,lastName:e.lastName??null,brandingName:e.brandingName??null}}function m(t){const e=t.workspaceLinkType,a=Array.isArray(t.permissionWorkspaces)?t.permissionWorkspaces:[],s=[];for(const n of a){if(!n||typeof n!="object")continue;const r=n.permission?.name;typeof r=="string"&&r.trim()&&s.push(r)}return{id:String(t.id??""),status:String(t.status??"PENDING"),startDate:t.startDate??null,endDate:t.endDate??null,createdAt:t.createdAt??null,statusNote:t.statusNote??null,typeName:e?.name??null,senderWorkspace:c(t.senderWorkspace??t.creatorWorkspace),permissionNames:s}}const f={async fetchInvites(t,e=null){const s=(await p(u,{recipientId:t,likeParam:null,offset:0,status:e?`{${e}}`:null,type:null})).getinvitesjson;if(!Array.isArray(s)||s.length===0)return[];const n=s[0]?.json;return Array.isArray(n)?n.filter(i=>!!i&&typeof i=="object").map(m):[]},async updateRequestStatus(t,e){const s=(await o(l,{id:t,status:e})).updateRequestStatusWithResponse;if(!s.success)throw new Error(s.errorMessages.join(", ")||"Nao foi possivel atualizar o convite.")}};export{f as i};
