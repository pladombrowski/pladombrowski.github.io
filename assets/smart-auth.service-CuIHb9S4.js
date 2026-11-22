import{N as l,A as c}from"./index-CQOZ9JoD.js";const y=[{value:"visitante",label:"Visitante"},{value:"prestador_servico",label:"Prestador de serviço"},{value:"familiar",label:"Familiar"},{value:"diarista",label:"Diarista"}],m=`
  mutation SmartCreate($input: Any) {
    smart_create(input: $input)
  }
`,p=`
  mutation SmartCancelLink($workspaceLinkId: String!) {
    smart_cancelLink(workspaceLinkId: $workspaceLinkId)
  }
`,f=`
  mutation SmartRemoveClient($input: Any) {
    smart_removeClient(input: $input)
  }
`,v=`
  query PrivateUnitPasses(
    $privateUnitLinkId: String
    $status: String
    $query: String
    $countOnly: Boolean
    $limit: Int
    $offset: Int
    $sessionWorkspaceId: String
  ) {
    smart_privateUnitPasses(
      privateUnitLinkId: $privateUnitLinkId
      status: $status
      query: $query
      countOnly: $countOnly
      limit: $limit
      offset: $offset
      sessionWorkspaceId: $sessionWorkspaceId
    )
  }
`;function n(t){return t&&typeof t=="object"&&!Array.isArray(t)?t:null}function r(t){if(t==null)return null;const e=String(t).trim();return e.length?e:null}function d(t,e){const a=n(t);return a?a.success===!0?null:(Array.isArray(a.errorMessages)?a.errorMessages.filter(i=>i!=null&&String(i).trim().length>0).map(i=>String(i).trim()):[])[0]??r(a.error)??e:e}function I(t){const e=n(t);if(!e)return{success:!1,error:"Resposta inválida"};if(e.success===!1)return{success:!1,error:(Array.isArray(e.errorMessages)?e.errorMessages.map(String):[])[0]??r(e.error)??"SMART_CREATE_FAILED"};const a=n(e.payload)??e,s=n(a.share);return{success:!0,workspaceLinkId:r(a.workspaceLinkId)??void 0,workspaceClientId:r(a.workspaceClientId)??void 0,visitorKind:r(a.visitorKind)??void 0,observations:r(a.observations),privateUnitLinkId:r(a.privateUnitLinkId),responsibleWorkspaceId:r(a.responsibleWorkspaceId),share:s?{workspaceLinkId:r(s.workspaceLinkId)??"",uploadPath:r(s.uploadPath),url:r(s.url),message:r(s.message),whatsappUrl:r(s.whatsappUrl)}:null}}function u(t){if(!Array.isArray(t))return[];const e=new Set,a=[];for(const s of t){const i=n(s);if(!i)continue;const o=r(i.id);!o||e.has(o)||(e.add(o),a.push({id:o,name:r(i.name)}))}return a}function k(t){const e=n(t);if(!e)return null;const a=r(e.id);if(!a)return null;const s=n(e.client),i=n(e.authorizer),o=n(e.privateUnit);return{id:a,status:r(e.status),startDate:r(e.startDate),endDate:r(e.endDate),createdAt:r(e.createdAt),visitorKind:r(e.visitorKind),observations:r(e.observations),client:s?{id:r(s.id),firstName:r(s.firstName),lastName:r(s.lastName),email:r(s.email),phone:r(s.phone)}:null,creatorName:r(e.creatorName),authorizerName:r(i?.name),privateUnitLinkId:r(e.privateUnitLinkId)??r(o?.id),privateUnitLabel:r(o?.label)??r(o?.name)??r(o?.complement),areas:u(e.areas),passages:u(e.passages)}}function h(t){const e=n(t),a=n(e?.payload)??e,s=n(a?.counts),i=Array.isArray(a?.items)?a.items.map(k).filter(o=>o!==null):[];return{items:i,active:Number(s?.active??0)||0,cancelled:Number(s?.cancelled??0)||0,total:Number(a?.total??i.length)||0,limit:Number(a?.limit??50)||50,offset:Number(a?.offset??0)||0,canCancel:a?.canCancel===!0}}const w={async create(t){const e={workspaceId:t.workspaceId,privateUnitLinkId:t.privateUnitLinkId,firstName:t.firstName,lastName:t.lastName??null,email:t.email??null,phone:t.phone??null,visitorKind:t.visitorKind??"visitante",observations:t.observations??null,durationPreset:t.durationPreset??"NOW_24H",accessPack:t.accessPack??"ALL",useQrCode:!0,hasRemoteOpen:!0,requireUserLocationRemoteOpen:!1};t.authorizerWorkspaceClientId&&(e.authorizerWorkspaceClientId=t.authorizerWorkspaceClientId),t.fileUploadId&&(e.fileUploadId=t.fileUploadId);const a=await l(m,{endpoint:c.hailaJavaGraphqlEndpoint,timeoutMs:45e3,variables:{input:e}});return I(a.smart_create)},async cancelLink(t){const e=t.trim();if(!e)throw new Error("workspaceLinkId obrigatório");const a=await l(p,{endpoint:c.hailaJavaGraphqlEndpoint,timeoutMs:3e4,variables:{workspaceLinkId:e}}),s=d(a.smart_cancelLink,"Falha ao remover a liberação");if(s)throw new Error(s)},async removeClient(t){const e=t.map(i=>i.trim()).filter(Boolean);if(!e.length)return;const a=await l(f,{endpoint:c.hailaJavaGraphqlEndpoint,timeoutMs:45e3,variables:{input:{workspaceClientIds:e}}}),s=d(a.smart_removeClient,"Falha ao remover o cadastro");if(s)throw new Error(s)},async listPrivateUnitPasses(t){const e=t.privateUnitLinkId.trim();if(!e)throw new Error("privateUnitLinkId obrigatório");const a=await l(v,{endpoint:c.hailaJavaGraphqlEndpoint,timeoutMs:3e4,variables:{privateUnitLinkId:e,status:t.status??"ACTIVE",query:t.query?.trim()||null,countOnly:!1,limit:t.limit??50,offset:t.offset??0,sessionWorkspaceId:t.sessionWorkspaceId?.trim()||null}}),s=d(a.smart_privateUnitPasses,"Falha ao carregar convidados da unidade");if(s)throw new Error(s);return h(a.smart_privateUnitPasses)}};export{y as S,w as s};
