import{ae as c,S as l,T as m,af as I,aG as y}from"./index-cKfYqwVK.js";const g=`
  query GetMyPrivateUnitsJson($p_private_unit_owner: uuid!, $p_user_id: uuid!) {
    get_my_private_units_json(
      args: { p_private_unit_owner: $p_private_unit_owner, p_user_id: $p_user_id }
    ) {
      json
    }
  }
`,f=`
  query GetMyPrivateUnitsJson($p_private_unit_owner: String!, $p_user_id: String!) {
    prod_get_my_private_units_json(
      p_private_unit_owner: $p_private_unit_owner
      p_user_id: $p_user_id
    ) {
      json
    }
  }
`,S={endpoint:m.hailaJavaGraphqlEndpoint},v=`
  mutation RemoveClientGroups($ids: [UUID!]!) {
    __typename
    removeClientGroups(input: { clientGroupIds: $ids }) {
      __typename
      success
      errorMessages
    }
  }
`,E=`
  mutation AddClientWithClone($clientId: UUID!, $clientGroupId: UUID!) {
    __typename
    addClientWithClone(input: { clientId: $clientId, clientGroupId: $clientGroupId }) {
      __typename
      success
      errorMessages
      payload {
        __typename
        id
        firstName
        lastName
        ownerWorkspaceId
      }
    }
  }
`,N=`
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
`,w="group-admin",A="0c8b41d5-2cc1-4674-b9ae-ed62ccf6e5bd";function s(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function h(e){return(Array.isArray(e)?s(e[0]):s(e))?.json}function _(e){if(Array.isArray(e))return e;if(typeof e=="string"&&e.trim())try{const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}return[]}function p(e){return typeof e=="string"?e:typeof e=="number"?String(e):null}function u(e){if(typeof e=="number"&&Number.isFinite(e))return e;const t=typeof e=="string"?Number(e):NaN;return Number.isFinite(t)?t:null}function D(e){const t=s(e);if(!t)return null;const i=_(t.permissionWorkspaces).map(n=>s(n)).filter(n=>n!==null).some(n=>{const a=n.permissionFlag===!0||s(n.permission)?.flag===!0&&!0,d=String(n.permissionName??s(n.permission)?.name??"");return a&&d===w});return{id:String(t.id??""),status:String(t.status??""),isGroupAdmin:i}}function G(e){const t=String(e.id??e.groupId??"").trim();if(!t)return null;const r=s(e.type),i=r?{id:String(r.id??""),label:String(r.label??r.name??""),slug:String(r.slug??"")}:null;return{id:t,name:String(e.name??""),categoryId:p(e.categoryId),categoryName:p(e.categoryName),complement:p(e.complement),activeDependents:u(e.activeDependents),inactiveDependents:u(e.inactiveDependents),totalDependents:u(e.totalDependents),typeId:p(e.typeId),senderWorkspaceId:p(e.senderWorkspaceId),type:i,membershipLink:D(e.membershipLink)}}const M={async getMyPrivateUnits(e){const t=I(y)==="java",r=t?await l(f,{p_private_unit_owner:e.ownerWorkspaceId,p_user_id:e.userId},S):await l(g,{p_private_unit_owner:e.ownerWorkspaceId,p_user_id:e.userId}),i=h(t?r.prod_get_my_private_units_json:r.get_my_private_units_json);let n=i;if(typeof i=="string"&&i.trim())try{n=JSON.parse(i)}catch{n=null}const a=s(n);if(!a)return[];if(a.success===!1){const o=_(a.errorMessages);throw new Error(o.map(String).join("; ")||"Falha ao carregar unidades privativas")}const d=a.privateUnits??a.payload;return _(d).map(o=>s(o)).filter(o=>o!==null).map(G).filter(o=>o!==null)},async removeClientGroups(e){const t=[...new Set(e.map(n=>n.trim()).filter(Boolean))];if(t.length===0)throw new Error("Informe ao menos uma unidade");const i=(await c(v,{ids:t})).removeClientGroups;if(!i)throw new Error("Resposta invalida ao excluir a unidade privativa");if(!i.success)throw new Error(i.errorMessages?.join("; ")||"Nao foi possivel excluir a unidade privativa")},async addClientWithClone(e){const r=(await c(E,{clientId:e.clientId,clientGroupId:e.clientGroupId})).addClientWithClone;if(!r)throw new Error("Resposta invalida ao adicionar morador");if(!r.success)throw new Error(r.errorMessages?.join("; ")||"Falha ao adicionar morador");return r.payload},async setExpressGroupInviteLink(e){const t=e.startDate.toISOString(),r=e.endDate.toISOString(),n=(await c(N,{input:{linkInput:{id:null,status:"ACCEPTED",startDate:t,endDate:r,responsibleWorkspaceId:e.responsibleWorkspaceId,senderWorkspaceId:e.senderWorkspaceId,dependents:e.dependents,permissionWorkspace:[{permissionId:A}]},inviteLinkInput:{linkInviteItem:{startDate:t,endDate:r,name:e.name,initialStatus:e.requireManagerApproval?"MANAGER_PENDING_APPROVAL":"ACCEPTED",reservations:[],cloneDetails:[],newContracts:[],contractDependents:[],groups:[{clientGroupId:e.clientGroupId}],allowedDomains:[],showOptionalCustomFields:!1,allowedWorkspaceTypes:["PERSON"],requireGroupSelectByUser:!1,description:e.description}}}})).setInviteLink;if(!n)throw new Error("Resposta invalida do servidor");if(!n.success)throw new Error(n.errorMessages?.join("; ")||"Falha ao criar link de convite");return n.payload?.id??null}};export{M as p};
