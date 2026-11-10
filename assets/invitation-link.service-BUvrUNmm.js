import{G as v,a3 as y,N as T,f as N}from"./index-DzwD-3qR.js";import{r as _}from"./express-invite-koFWeL9I.js";function l(t){return t&&typeof t=="object"&&!Array.isArray(t)?t:null}function k(t){return Array.isArray(t)?t:[]}function a(t,e=""){return typeof t=="string"?t:e}function o(t){return typeof t=="string"&&t.trim()!==""?t:null}function f(t){return typeof t=="number"&&Number.isFinite(t)?t:null}function I(t,e=!1){return typeof t=="boolean"?t:e}function w(t){return k(t).filter(e=>typeof e=="string")}function x(t){return t==="radio"||t==="dropdown"?t:null}function E(t){const e=l(t);if(!e)return null;const n=a(e.key).trim(),s=a(e.type);if(!n||!s)return null;const i=l(e.export);return{key:n,type:s,label:a(e.label,n),required:I(e.required),placeholder:o(e.placeholder),help:o(e.help),minLength:f(e.minLength),maxLength:f(e.maxLength),mask:o(e.mask),display:x(e.display),options:k(e.options).map(r=>{const p=l(r),d=a(p?.value).trim();return d?{value:d,label:a(p?.label,d)}:null}).filter(r=>r!==null),export:i?{enabled:I(i.enabled),clientCustomFieldId:o(i.clientCustomFieldId)??void 0,valueType:o(i.valueType)??void 0}:void 0}}function L(t){const e=l(t);return{version:f(e?.version)??1,fields:k(e?.fields).map(E).filter(n=>n!==null)}}function S(t){const e=l(t);if(!e)return null;const n=a(e.id).trim();if(!n)return null;const s=l(e.permission),i=l(e.template);return{id:n,source:a(e.source,"native")==="legacy"?"legacy":"native",readOnly:I(e.readOnly),senderWorkspaceId:a(e.senderWorkspaceId),name:a(e.name),description:o(e.description),status:a(e.status,"INACTIVE"),startsAt:o(e.startsAt),endsAt:o(e.endsAt),maxDependents:f(e.maxDependents),currentDependents:f(e.currentDependents)??0,initialStatus:a(e.initialStatus,"PENDING"),requireGroupSelect:I(e.requireGroupSelect),addOnGroupAsAdmin:I(e.addOnGroupAsAdmin),allowedDomains:w(e.allowedDomains),allowedWorkspaceTypes:w(e.allowedWorkspaceTypes),permission:s?{id:a(s.id),name:a(s.name)}:null,groups:k(e.groups).map(r=>{const p=l(r),d=a(p?.id).trim();if(!d)return null;const c=o(p?.categoryName);return{id:d,name:a(p?.name,d),...c?{categoryName:c}:{},isPrivateUnit:p?.isPrivateUnit===!0}}).filter(r=>r!==null),formSchema:L(e.formSchema),template:i?{id:a(i.id),name:o(i.name),version:f(i.version)??0,syncMode:a(i.syncMode,"NONE"),missing:I(i.missing),diff:l(i.diff)??void 0}:null,url:a(e.url),createdAt:a(e.createdAt),updatedAt:a(e.updatedAt)}}function g(t){const e=l(t)??{};return{description:o(e.description),maxDependents:f(e.maxDependents),initialStatus:a(e.initialStatus,"PENDING"),requireGroupSelect:I(e.requireGroupSelect),addOnGroupAsAdmin:I(e.addOnGroupAsAdmin),allowedWorkspaceTypes:w(e.allowedWorkspaceTypes),allowedDomains:w(e.allowedDomains),permissionId:o(e.permissionId),formSchema:L(e.formSchema)}}function $(t){const e=l(t);if(!e)return null;const n=a(e.id).trim();return n?{id:n,ownerWorkspaceId:o(e.ownerWorkspaceId)??void 0,name:a(e.name),description:o(e.description),status:a(e.status,"DRAFT"),latestVersion:f(e.latestVersion)??0,draftConfig:g(e.draftConfig),latestConfig:e.latestConfig?g(e.latestConfig):null,versions:k(e.versions).map(s=>{const i=l(s)??{};return{version:f(i.version)??0,config:g(i.config),publishedAt:a(i.publishedAt)}}),updatedAt:o(e.updatedAt)??void 0}:null}function G(t){const e=l(t);if(!e)return null;const n=a(e.id).trim();if(!n)return null;const s=l(e.client)??{};return{id:n,workspaceId:a(e.workspaceId),workspaceClientId:a(e.workspaceClientId),workspaceLinkId:a(e.workspaceLinkId),formSchemaVersion:f(e.formSchemaVersion)??1,answers:l(e.answers)??{},submittedAt:a(e.submittedAt),exportedAt:o(e.exportedAt),exportedFields:w(e.exportedFields),client:{id:a(s.id),type:a(s.type),firstName:o(s.firstName),lastName:o(s.lastName),email:o(s.email),brandingName:o(s.brandingName),legalName:o(s.legalName),phone:o(s.phone)},values:k(e.values).map(i=>{const r=l(i)??{};return{key:a(r.key),label:o(r.label),type:o(r.type),valueText:o(r.valueText),value:r.value}})}}const u=T.hailaJavaGraphqlEndpoint;function m(t){let e=t;if(typeof e=="string")try{e=JSON.parse(e)}catch{e=null}if(!e||typeof e!="object")return{success:!1,payload:null,errors:["invalid response"]};const n=e,s=n.payload;return{success:n.success===!0,payload:s??null,errors:Array.isArray(n.errorMessages)?n.errorMessages.map(i=>String(i)):[]}}function h(t){return t.url?{...t,url:_(t.url,N.officialInviteWebUrl)}:t}const C={async list(t,e){const n=await v(`
        query InvitationLinkList($workspaceId: String!, $sessionAmbienteId: String) {
          invitation_linkList(workspaceId: $workspaceId, sessionAmbienteId: $sessionAmbienteId)
        }
      `,{workspaceId:t,sessionAmbienteId:e??null},{endpoint:u}),s=m(n.invitation_linkList);if(!s.success)throw new Error(s.errors[0]??"invitation link list failed");return(s.payload??[]).map(S).filter(i=>i!==null).map(h)},async get(t,e,n){const s=await v(`
        query InvitationLinkGet($workspaceId: String!, $invitationLinkId: String!, $sessionAmbienteId: String) {
          invitation_linkGet(workspaceId: $workspaceId, invitationLinkId: $invitationLinkId, sessionAmbienteId: $sessionAmbienteId)
        }
      `,{workspaceId:t,invitationLinkId:e,sessionAmbienteId:n??null},{endpoint:u}),i=m(s.invitation_linkGet),r=S(i.payload);if(!i.success||!r)throw new Error(i.errors[0]??"invitation link get failed");return h(r)},async save(t){const e=await y(`
        mutation InvitationLinkSave($input: Any!) {
          invitation_linkSave(input: $input)
        }
      `,{input:t},{endpoint:u}),n=m(e.invitation_linkSave);if(!n.success||!n.payload?.id)throw new Error(n.errors[0]??"invitation link save failed");return n.payload.id},async setStatus(t,e,n,s){const i=await y(`
        mutation InvitationLinkSetStatus($invitationLinkId: String!, $status: String!, $workspaceId: String!, $sessionAmbienteId: String) {
          invitation_linkSetStatus(invitationLinkId: $invitationLinkId, status: $status, workspaceId: $workspaceId, sessionAmbienteId: $sessionAmbienteId)
        }
      `,{invitationLinkId:t,status:e,workspaceId:n,sessionAmbienteId:s??null},{endpoint:u}),r=m(i.invitation_linkSetStatus);if(!r.success)throw new Error(r.errors[0]??"invitation link status failed")},async responses(t,e,n){const s=await v(`
        query InvitationLinkResponses($invitationLinkId: String!, $workspaceId: String!, $sessionAmbienteId: String) {
          invitation_linkResponses(invitationLinkId: $invitationLinkId, workspaceId: $workspaceId, sessionAmbienteId: $sessionAmbienteId)
        }
      `,{invitationLinkId:t,workspaceId:e,sessionAmbienteId:n??null},{endpoint:u}),i=m(s.invitation_linkResponses);if(!i.success)throw new Error(i.errors[0]??"invitation responses failed");return(i.payload??[]).map(G).filter(r=>r!==null)},async exportResponse(t){const e=await y(`
        mutation InvitationLinkResponseExport($input: Any!) {
          invitation_linkResponseExport(input: $input)
        }
      `,{input:t},{endpoint:u}),n=m(e.invitation_linkResponseExport);if(!n.success)throw new Error(n.errors[0]??"invitation response export failed");return n.payload},async templates(t,e){const n=await v(`
        query InvitationLinkTemplateList($workspaceId: String!, $sessionAmbienteId: String) {
          invitation_linkTemplateList(workspaceId: $workspaceId, sessionAmbienteId: $sessionAmbienteId)
        }
      `,{workspaceId:t,sessionAmbienteId:e??null},{endpoint:u}),s=m(n.invitation_linkTemplateList);if(!s.success)throw new Error(s.errors[0]??"invitation template list failed");return(s.payload??[]).map($).filter(i=>i!==null)},async templateGet(t,e){const n=await v(`
        query InvitationLinkTemplateGet($templateId: String!, $sessionAmbienteId: String) {
          invitation_linkTemplateGet(templateId: $templateId, sessionAmbienteId: $sessionAmbienteId)
        }
      `,{templateId:t,sessionAmbienteId:e??null},{endpoint:u}),s=m(n.invitation_linkTemplateGet),i=$(s.payload);if(!s.success||!i)throw new Error(s.errors[0]??"invitation template get failed");return i},async templateSave(t){const e=await y(`
        mutation InvitationLinkTemplateSave($input: Any!) {
          invitation_linkTemplateSave(input: $input)
        }
      `,{input:t},{endpoint:u}),n=m(e.invitation_linkTemplateSave);if(!n.success||!n.payload?.id)throw new Error(n.errors[0]??"invitation template save failed");return n.payload.id},async templatePublish(t,e,n){const s=await y(`
        mutation InvitationLinkTemplatePublish($templateId: String!, $workspaceId: String!, $sessionAmbienteId: String) {
          invitation_linkTemplatePublish(templateId: $templateId, workspaceId: $workspaceId, sessionAmbienteId: $sessionAmbienteId)
        }
      `,{templateId:t,workspaceId:e,sessionAmbienteId:n??null},{endpoint:u}),i=m(s.invitation_linkTemplatePublish);if(!i.success)throw new Error(i.errors[0]??"invitation template publish failed");return i.payload},async templateArchive(t,e,n){const s=await y(`
        mutation InvitationLinkTemplateArchive($templateId: String!, $workspaceId: String!, $sessionAmbienteId: String) {
          invitation_linkTemplateArchive(templateId: $templateId, workspaceId: $workspaceId, sessionAmbienteId: $sessionAmbienteId)
        }
      `,{templateId:t,workspaceId:e,sessionAmbienteId:n??null},{endpoint:u}),i=m(s.invitation_linkTemplateArchive);if(!i.success)throw new Error(i.errors[0]??"invitation template archive failed")},async customFields(t){const n=(await v(`
        query InvitationLinkCustomFields($args: getlinktemplatecustomfieldsjson_args!) {
          getlinktemplatecustomfieldsjson(args: $args) {
            json
          }
        }
      `,{args:{selectedworkspaceid:t,selectedfilters:{}}})).getlinktemplatecustomfieldsjson,i=(Array.isArray(n)?n:n?[n]:[])[0],r=i&&typeof i=="object"?i.json:null;let p=r;if(typeof r=="string")try{p=JSON.parse(r)}catch{p=[]}return Array.isArray(p)?p.map(d=>{if(!d||typeof d!="object")return null;const c=d,b=c.payload&&typeof c.payload=="object"?c.payload:{},A=typeof b.templateId=="string"?b.templateId.trim():"";return A?{id:A,name:typeof c.name=="string"&&c.name.trim()?c.name:A,valueType:typeof c.valueType=="string"?c.valueType:"text"}:null}).filter(d=>d!==null):[]}};export{C as i};
