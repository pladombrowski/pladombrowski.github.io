import{ae as o,T as l,S as d,af as m,aD as y}from"./index-CnApswih.js";const u={endpoint:l.hailaJavaGraphqlEndpoint,timeoutMs:3e4},k=`
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
`,f=`
  mutation FetchInvites(
    $inputworkspaceid: String!
    $inputoffset: Int
    $inputstatus: Any
    $inputlikeparam: String
    $inputtype: String
  ) {
    __typename
    prod_getinvitesjson(
      inputworkspaceid: $inputworkspaceid
      inputoffset: $inputoffset
      inputstatus: $inputstatus
      inputlikeparam: $inputlikeparam
      inputtype: $inputtype
      inputlimit: 50
    ) {
      __typename
      json
    }
  }
`,I=`
  mutation UpdateRequestStatusWithResponse($id: UUID!, $status: String!) {
    updateRequestStatusWithResponse(workspaceLinkId: $id, status: $status) {
      success
      errorMessages
      payload {
        id
      }
    }
  }
`,g=`
  mutation InviteSettleWorkspaceLinks($input: Any) {
    invite_settleWorkspaceLinks(input: $input)
  }
`;function c(t){if(!t||typeof t!="object")return null;const e=t;return{id:String(e.id??""),email:e.email??null,phone:e.phone??null,type:e.type??null,firstName:e.firstName??null,lastName:e.lastName??null,brandingName:e.brandingName??null}}function S(t){const e=t.workspaceLinkType,s=Array.isArray(t.permissionWorkspaces)?t.permissionWorkspaces:[],n=[];for(const r of s){if(!r||typeof r!="object")continue;const i=r.permission?.name;typeof i=="string"&&i.trim()&&n.push(i)}return{id:String(t.id??""),status:String(t.status??"PENDING"),startDate:t.startDate??null,endDate:t.endDate??null,createdAt:t.createdAt??null,statusNote:t.statusNote??null,typeName:e?.name??null,workspaceClientId:t.workspaceClientId??null,workspaceLinkTypeId:t.workspaceLinkTypeId??null,senderWorkspace:c(t.senderWorkspace??t.creatorWorkspace),creatorWorkspace:c(t.creatorWorkspace),permissionNames:n}}const A={async fetchInvites(t,e=null){const s=e?`{${e}}`:null,n=m(y)==="java",r=n?await o(f,{inputworkspaceid:t,inputoffset:0,inputstatus:s,inputlikeparam:null,inputtype:null},u):await d(k,{recipientId:t,likeParam:null,offset:0,status:s,type:null}),a=n?r.prod_getinvitesjson:r.getinvitesjson;if(!Array.isArray(a)||a.length===0)return[];const i=a[0]?.json;return Array.isArray(i)?i.filter(p=>!!p&&typeof p=="object").map(S):[]},async settleWorkspaceLinks(t){const s=(await o(g,{input:{workspaceLinkIds:t.ids,status:t.status}},u)).invite_settleWorkspaceLinks??null;if(!s||s.success!==!0){const a=Array.isArray(s?.errorMessages)?s.errorMessages.map(i=>String(i)):[];throw new Error(a[0]??"Falha ao processar os convites")}const n=s.payload??{};return{processedIds:Array.isArray(n.processedIds)?n.processedIds.map(a=>String(a)):[]}},async updateRequestStatus(t,e){const n=(await o(I,{id:t,status:e})).updateRequestStatusWithResponse;if(!n.success)throw new Error(n.errorMessages.join(", ")||"Nao foi possivel atualizar o convite.")}};export{A as i};
