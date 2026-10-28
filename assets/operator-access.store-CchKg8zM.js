import{Q as $,a as w,D as E}from"./vue-CWHebRCC.js";import{al as R,am as M,G as A,L as J,ad as v,$ as g,a as B,aa as x,J as D,b as q}from"./index-BjQk272g.js";import{a as G}from"./authorization.service-BWSZQtkk.js";import{u as z}from"./integrator.store-MAPjL60w.js";const I={answer:"call_center.answer",openDoors:"call_center.open_doors",cameras:"call_center.cameras.view",areas:"call_center.areas.access",infoEdit:"call_center.info.edit",inbox:"whatsapp.inbox"},F=[{value:I.answer,label:"Atender ligações (Remota)",hint:"Obrigatório para a Portaria remota"},{value:I.openDoors,label:"Abrir portas",hint:"Escopo de passagens abaixo"},{value:I.cameras,label:"Ver câmeras",hint:"Escopo de grupos de câmeras abaixo"},{value:I.areas,label:"Acessar áreas",hint:"Escopo de áreas abaixo"},{value:I.infoEdit,label:"Editar informações da unidade",hint:"Cards Informações no atendimento Remota"}],ke=[{value:I.inbox,label:"Inbox WhatsApp",hint:"Obrigatório para atendimento WhatsApp"}],ue=F.map(e=>e.value),ye=[I.inbox],S=R,H=M;function Ie(e){const o=(e.mode||"").trim().toLowerCase(),a=new Set(e.resolvedIds.map(t=>t.trim()).filter(Boolean)),r=e.universeIds.map(t=>t.trim()).filter(Boolean);if(o==="general"){if(r.length===0)return[];const t=r.filter(n=>!a.has(n));return a.size>0&&r.length>a.size*2&&t.length>a.size?[]:t}return[...a]}function we(e){return e==="general"?"Geral + vazio = todos. Geral + seleção = exceções (negar).":"Específico + vazio = nenhum. Específico + seleção = permitir."}function U(e){const o=(e.name??"").trim();if(o)return o;const a=[e.firstName,e.lastName].map(i=>(i??"").trim()).filter(Boolean).join(" ");if(a)return a;const r=(e.brandingName??"").trim();if(r)return r;const t=(e.legalName??"").trim();if(t)return t;const n=(e.email??"").trim();return n||(e.id??"").trim()||"Operador"}function V(e){const o=new Map;for(const a of e){const r=o.get(a.workspaceClientId);if(!r){o.set(a.workspaceClientId,{workspaceClientId:a.workspaceClientId,label:a.clientLabel,email:a.clientEmail,callCenterLinkId:a.linkType==="call_center_operator"?a.id:null,whatsappLinkId:a.linkType==="whatsapp_operator"?a.id:null});continue}a.linkType==="call_center_operator"&&(r.callCenterLinkId=a.id),a.linkType==="whatsapp_operator"&&(r.whatsappLinkId=a.id),!r.label&&a.clientLabel&&(r.label=a.clientLabel),!r.email&&a.clientEmail&&(r.email=a.clientEmail)}return[...o.values()].sort((a,r)=>a.label.localeCompare(r.label,"pt-BR",{sensitivity:"base"}))}const L={endpoint:J.hailaJavaGraphqlEndpoint,timeoutMs:3e4},Y=`
  mutation CreateCallCenterOperatorLink(
    $payload: ProdCreateCallCenterOperatorLinkJsonPayloadInput!
  ) {
    prod_create_call_center_operator_link_json(payload: $payload) {
      json
    }
  }
`,K=`
  mutation CreateWhatsappOperatorLink(
    $payload: ProdCreateWhatsappOperatorLinkJsonPayloadInput!
  ) {
    prod_create_whatsapp_operator_link_json(payload: $payload) {
      json
    }
  }
`,Q=`
  mutation SetOperatorScopeMode($payload: ProdSetOperatorScopeModeJsonPayloadInput!) {
    prod_set_operator_scope_mode_json(payload: $payload) {
      json
    }
  }
`,X=`
  mutation SetOperatorWorkspaceScope(
    $payload: ProdSetOperatorWorkspaceScopeJsonPayloadInput!
  ) {
    prod_set_operator_workspace_scope_json(payload: $payload) {
      json
    }
  }
`,Z=`
  mutation SetOperatorPhoneScope($payload: ProdSetOperatorPhoneScopeJsonPayloadInput!) {
    prod_set_operator_phone_scope_json(payload: $payload) {
      json
    }
  }
`,ee=`
  mutation EnsureWhatsappPhones($payload: ProdEnsureWhatsappPhonesJsonPayloadInput!) {
    prod_ensure_whatsapp_phones_json(payload: $payload) {
      json
    }
  }
`,ae=`
  mutation SetOperatorCapabilities(
    $payload: ProdSetOperatorCapabilitiesJsonPayloadInput!
  ) {
    prod_set_operator_capabilities_json(payload: $payload) {
      json
    }
  }
`,oe=`
  mutation SetOperatorPassageScope(
    $payload: ProdSetOperatorPassageScopeJsonPayloadInput!
  ) {
    prod_set_operator_passage_scope_json(payload: $payload) {
      json
    }
  }
`,re=`
  mutation SetOperatorCameraScope($payload: ProdSetOperatorCameraScopeJsonPayloadInput!) {
    prod_set_operator_camera_scope_json(payload: $payload) {
      json
    }
  }
`,te=`
  mutation SetOperatorAreaScope($payload: ProdSetOperatorAreaScopeJsonPayloadInput!) {
    prod_set_operator_area_scope_json(payload: $payload) {
      json
    }
  }
`,se=`
  query EffectiveOperatorAccess(
    $payload: ProdGetEffectiveOperatorAccessJsonPayloadInput!
  ) {
    prod_get_effective_operator_access_json(payload: $payload) {
      json
    }
  }
`,ne=`
  query OperatorLinkTypeByName($name: Any!) {
    prod_workspace_link_type(where: { name: { _eq: $name } }, limit: 1) {
      id
      name
    }
  }
`,ie=`
  query ListOperatorLinks(
    $senderWorkspaceId: Any!
    $typeIds: [Any!]!
  ) {
    prod_workspace_link(
      where: {
        senderWorkspaceId: { _eq: $senderWorkspaceId }
        workspaceLinkTypeId: { _in: $typeIds }
        status: { _eq: "ACCEPTED" }
        deletedAt: { _is_null: true }
      }
      order_by: { createdAt: desc }
    ) {
      id
      status
      createdAt
      workspaceClientId
      recipientWorkspaceId
      workspaceLinkTypeId
      workspaceLinkType {
        id
        name
      }
      workspaceClient {
        id
        email
        phone
        firstName
        lastName
        brandingName
        legalName
        type
      }
    }
  }
`,P=new Map;function u(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:null}function c(e){return typeof e!="string"?null:e.trim()||null}function y(e){return Array.isArray(e)?e.map(o=>String(o).trim()).filter(Boolean):[]}function O(e){const o=u(e)??{},a=u(o.payload)??{},r=o.errorMessages??a.errorMessages,t=Array.isArray(r)?r.map(n=>String(n)):[];return{success:o.success!==!1&&t.length===0,errorMessages:t,payload:a}}function ce(e){const o=O(e);return{success:o.success,workspaceLinkId:c(o.payload.workspaceLinkId),created:o.payload.created===!0,linkType:c(o.payload.linkType),errorMessages:o.errorMessages}}async function k(e,o,a){const t=(await g(e,{payload:o},L))[a],n=v(t)??u(t);return O(n)}async function b(e,o,a){const t=(await g(e,{payload:o},L))[a],n=v(t)??u(t);return ce(n)}function l(e,o){if(e.success)return;const a=e.errorMessages[0]?.trim()||o;throw new Error(a)}function pe(e,o){const a=u(e);if(!a)return null;const r=c(a.id),t=c(a.workspaceClientId);if(!r||!t)return null;const n=u(a.workspaceLinkType),i=c(n?.name),p=c(a.workspaceLinkTypeId),m=i==="call_center_operator"||i==="whatsapp_operator"?i:p?o.get(p)??null:null;if(!m)return null;const _=u(a.workspaceClient);return{id:r,linkType:m,status:c(a.status)??"ACCEPTED",workspaceClientId:t,clientLabel:U({firstName:c(_?.firstName),lastName:c(_?.lastName),brandingName:c(_?.brandingName),legalName:c(_?.legalName),email:c(_?.email),id:t}),clientEmail:c(_?.email),recipientWorkspaceId:c(a.recipientWorkspaceId),createdAt:c(a.createdAt)}}const f={async getLinkTypeId(e){const o=e.trim(),a=P.get(o);if(a)return a;const r=await A(ne,{name:o},L),t=c(r.prod_workspace_link_type?.[0]?.id);if(!t)throw new Error(`Tipo de vínculo "${o}" não encontrado`);return P.set(o,t),t},async listOperatorLinks(e){const o=e.trim();if(!o)return[];const[a,r]=await Promise.all([this.getLinkTypeId("call_center_operator"),this.getLinkTypeId("whatsapp_operator")]),t=new Map([[a,"call_center_operator"],[r,"whatsapp_operator"]]),n=await A(ie,{senderWorkspaceId:o,typeIds:[a,r]},L);return(Array.isArray(n.prod_workspace_link)?n.prod_workspace_link:[]).map(p=>pe(p,t)).filter(p=>p!=null)},async createCallCenterLink(e){const o={ambienteWorkspaceId:e.ambienteWorkspaceId.trim(),workspaceClientId:e.workspaceClientId.trim()},a=(e.primaryWorkspaceLinkId??"").trim();a&&(o.primaryWorkspaceLinkId=a);const r=await b(Y,o,"prod_create_call_center_operator_link_json");return l(r,"Não foi possível criar o vínculo Remota"),r},async createWhatsappLink(e){const o={ambienteWorkspaceId:e.ambienteWorkspaceId.trim(),workspaceClientId:e.workspaceClientId.trim()},a=(e.primaryWorkspaceLinkId??"").trim();a&&(o.primaryWorkspaceLinkId=a);const r=await b(K,o,"prod_create_whatsapp_operator_link_json");return l(r,"Não foi possível criar o vínculo WhatsApp"),r},async revokeLink(e){const o=e.trim();if(!o)throw new Error("Vínculo inválido");await G.cancelAuthorization(o)},async getEffective(e){const o=e.ambienteWorkspaceId.trim();if(!o)return S();const a={ambienteWorkspaceId:o},r=(e.workspaceClientId??"").trim(),t=(e.operatorUserId??"").trim(),n=(e.workspaceLinkId??"").trim();r&&(a.workspaceClientId=r),t&&(a.operatorUserId=t),n&&(a.workspaceLinkId=n);try{const p=(await A(se,{payload:a},L)).prod_get_effective_operator_access_json,m=v(p)??u(p);return m?H(m):S()}catch(i){throw i instanceof Error?i:new Error(String(i))}},async setScopeMode(e){const o=await k(Q,{workspaceLinkId:e.workspaceLinkId.trim(),family:e.family,mode:e.mode},"prod_set_operator_scope_mode_json");l(o,"Não foi possível salvar o modo de escopo")},async setWorkspaceScope(e){const o=await k(X,{workspaceLinkId:e.workspaceLinkId.trim(),workspaceIds:y(e.workspaceIds)},"prod_set_operator_workspace_scope_json");l(o,"Não foi possível salvar o escopo de condomínios")},async setPhoneScope(e){const o={workspaceLinkId:e.workspaceLinkId.trim()};e.hailaCommPhoneIds&&(o.hailaCommPhoneIds=y(e.hailaCommPhoneIds)),e.whatsappPhoneIds&&(o.whatsappPhoneIds=y(e.whatsappPhoneIds));const a=await k(Z,o,"prod_set_operator_phone_scope_json");l(a,"Não foi possível salvar o escopo de telefones")},async ensureWhatsappPhones(e){const o=e.phones.map(r=>({hailaCommId:r.hailaCommId.trim(),phoneNumber:r.phoneNumber.trim()})).filter(r=>r.hailaCommId&&r.phoneNumber);if(o.length===0)return;const a=await k(ee,{ambienteWorkspaceId:e.ambienteWorkspaceId.trim(),phones:o},"prod_ensure_whatsapp_phones_json");l(a,"Não foi possível sincronizar os números WhatsApp")},async setCapabilities(e){const o=await k(ae,{workspaceLinkId:e.workspaceLinkId.trim(),capabilities:y(e.capabilities)},"prod_set_operator_capabilities_json");l(o,"Não foi possível salvar as capacidades")},async setPassageScope(e){const o=await k(oe,{workspaceLinkId:e.workspaceLinkId.trim(),mode:e.mode,passageIds:y(e.passageIds)},"prod_set_operator_passage_scope_json");l(o,"Não foi possível salvar o escopo de portas")},async setCameraScope(e){const o=await k(re,{workspaceLinkId:e.workspaceLinkId.trim(),mode:e.mode,cameraGroupIds:y(e.cameraGroupIds)},"prod_set_operator_camera_scope_json");l(o,"Não foi possível salvar o escopo de câmeras")},async setAreaScope(e){const o=await k(te,{workspaceLinkId:e.workspaceLinkId.trim(),mode:e.mode,areaIds:y(e.areaIds)},"prod_set_operator_area_scope_json");l(o,"Não foi possível salvar o escopo de áreas")}},fe=$("operator-access",()=>{const e=B(),o=z(),a=w(""),r=w([]),t=w(!1),n=w(!1),i=w(null),p=w([]),m=E(()=>V(r.value)),_=E(()=>o.clients.map(s=>({id:s.id,label:q(s),meta:s.email||null}))),T=E(()=>p.value.map(s=>({id:s.id,label:[s.displayName,s.displayPhoneNumber].filter(Boolean).join(" · ")||s.id,meta:s.status||null})));async function C(s){const d=(s??"").trim()||a.value.trim()||e.sessionWorkspaceId?.trim()||"";if(!d){i.value="Ambiente do integrador não encontrado",r.value=[];return}a.value=d,t.value=!0,i.value=null;try{await Promise.all([o.loadClients().catch(()=>{}),x.fetchWhatsAppInventory(d).then(h=>{p.value=h.numbers}).catch(()=>{p.value=[]})]),r.value=await f.listOperatorLinks(d)}catch(h){i.value=D(h,"Não foi possível carregar os operadores"),r.value=[]}finally{t.value=!1}}async function W(s){const d=a.value.trim();if(!d)throw new Error("Ambiente do integrador não encontrado");if(!s.callCenter&&!s.whatsapp)throw new Error("Selecione Remota e/ou WhatsApp");n.value=!0;try{return s.callCenter&&await f.createCallCenterLink({ambienteWorkspaceId:d,workspaceClientId:s.workspaceClientId,primaryWorkspaceLinkId:s.primaryWorkspaceLinkId}),s.whatsapp&&await f.createWhatsappLink({ambienteWorkspaceId:d,workspaceClientId:s.workspaceClientId,primaryWorkspaceLinkId:s.primaryWorkspaceLinkId}),await C(d),m.value.find(h=>h.workspaceClientId===s.workspaceClientId)??null}finally{n.value=!1}}async function N(s){n.value=!0;try{await f.revokeLink(s),await C(a.value)}finally{n.value=!1}}async function j(s){n.value=!0;try{s.callCenterLinkId&&await f.revokeLink(s.callCenterLinkId),s.whatsappLinkId&&await f.revokeLink(s.whatsappLinkId),await C(a.value)}finally{n.value=!1}}return{ambienteWorkspaceId:a,links:r,people:m,loading:t,busy:n,error:i,whatsappNumbers:p,condoOptions:_,phoneOptions:T,load:C,createLinks:W,revokeLink:N,revokePerson:j}});export{F as C,ue as D,I as O,ke as W,ye as a,we as b,U as c,f as o,Ie as s,fe as u};
