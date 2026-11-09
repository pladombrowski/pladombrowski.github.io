import{G as y,a4 as k,N as L}from"./index-DFNoRg0d.js";function l(t){return t&&typeof t=="object"&&!Array.isArray(t)?t:null}function v(t){return Array.isArray(t)?t:[]}function a(t,e=""){return typeof t=="string"?t:e}function r(t){return typeof t=="string"&&t.trim()!==""?t:null}function I(t){return typeof t=="number"&&Number.isFinite(t)?t:null}function f(t,e=!1){return typeof t=="boolean"?t:e}function w(t){return v(t).filter(e=>typeof e=="string")}function T(t){return t==="radio"||t==="dropdown"?t:null}function N(t){const e=l(t);if(!e)return null;const n=a(e.key).trim(),s=a(e.type);if(!n||!s)return null;const i=l(e.export);return{key:n,type:s,label:a(e.label,n),required:f(e.required),placeholder:r(e.placeholder),help:r(e.help),minLength:I(e.minLength),maxLength:I(e.maxLength),mask:r(e.mask),display:T(e.display),options:v(e.options).map(o=>{const p=l(o),d=a(p?.value).trim();return d?{value:d,label:a(p?.label,d)}:null}).filter(o=>o!==null),export:i?{enabled:f(i.enabled),clientCustomFieldId:r(i.clientCustomFieldId)??void 0,valueType:r(i.valueType)??void 0}:void 0}}function h(t){const e=l(t);return{version:I(e?.version)??1,fields:v(e?.fields).map(N).filter(n=>n!==null)}}function S(t){const e=l(t);if(!e)return null;const n=a(e.id).trim();if(!n)return null;const s=l(e.permission),i=l(e.template);return{id:n,source:a(e.source,"native")==="legacy"?"legacy":"native",readOnly:f(e.readOnly),senderWorkspaceId:a(e.senderWorkspaceId),name:a(e.name),description:r(e.description),status:a(e.status,"INACTIVE"),startsAt:r(e.startsAt),endsAt:r(e.endsAt),maxDependents:I(e.maxDependents),currentDependents:I(e.currentDependents)??0,initialStatus:a(e.initialStatus,"PENDING"),requireGroupSelect:f(e.requireGroupSelect),addOnGroupAsAdmin:f(e.addOnGroupAsAdmin),allowedDomains:w(e.allowedDomains),allowedWorkspaceTypes:w(e.allowedWorkspaceTypes),permission:s?{id:a(s.id),name:a(s.name)}:null,groups:v(e.groups).map(o=>{const p=l(o),d=a(p?.id).trim();if(!d)return null;const c=r(p?.categoryName);return{id:d,name:a(p?.name,d),...c?{categoryName:c}:{},isPrivateUnit:p?.isPrivateUnit===!0}}).filter(o=>o!==null),formSchema:h(e.formSchema),template:i?{id:a(i.id),name:r(i.name),version:I(i.version)??0,syncMode:a(i.syncMode,"NONE"),missing:f(i.missing),diff:l(i.diff)??void 0}:null,url:a(e.url),createdAt:a(e.createdAt),updatedAt:a(e.updatedAt)}}function g(t){const e=l(t)??{};return{description:r(e.description),maxDependents:I(e.maxDependents),initialStatus:a(e.initialStatus,"PENDING"),requireGroupSelect:f(e.requireGroupSelect),addOnGroupAsAdmin:f(e.addOnGroupAsAdmin),allowedWorkspaceTypes:w(e.allowedWorkspaceTypes),allowedDomains:w(e.allowedDomains),permissionId:r(e.permissionId),formSchema:h(e.formSchema)}}function $(t){const e=l(t);if(!e)return null;const n=a(e.id).trim();return n?{id:n,ownerWorkspaceId:r(e.ownerWorkspaceId)??void 0,name:a(e.name),description:r(e.description),status:a(e.status,"DRAFT"),latestVersion:I(e.latestVersion)??0,draftConfig:g(e.draftConfig),latestConfig:e.latestConfig?g(e.latestConfig):null,versions:v(e.versions).map(s=>{const i=l(s)??{};return{version:I(i.version)??0,config:g(i.config),publishedAt:a(i.publishedAt)}}),updatedAt:r(e.updatedAt)??void 0}:null}function _(t){const e=l(t);if(!e)return null;const n=a(e.id).trim();if(!n)return null;const s=l(e.client)??{};return{id:n,workspaceId:a(e.workspaceId),workspaceClientId:a(e.workspaceClientId),workspaceLinkId:a(e.workspaceLinkId),formSchemaVersion:I(e.formSchemaVersion)??1,answers:l(e.answers)??{},submittedAt:a(e.submittedAt),exportedAt:r(e.exportedAt),exportedFields:w(e.exportedFields),client:{id:a(s.id),type:a(s.type),firstName:r(s.firstName),lastName:r(s.lastName),email:r(s.email),brandingName:r(s.brandingName),legalName:r(s.legalName),phone:r(s.phone)},values:v(e.values).map(i=>{const o=l(i)??{};return{key:a(o.key),label:r(o.label),type:r(o.type),valueText:r(o.valueText),value:o.value}})}}const u=L.hailaJavaGraphqlEndpoint;function m(t){let e=t;if(typeof e=="string")try{e=JSON.parse(e)}catch{e=null}if(!e||typeof e!="object")return{success:!1,payload:null,errors:["invalid response"]};const n=e,s=n.payload;return{success:n.success===!0,payload:s??null,errors:Array.isArray(n.errorMessages)?n.errorMessages.map(i=>String(i)):[]}}const E={async list(t,e){const n=await y(`
        query InvitationLinkList($workspaceId: String!, $sessionAmbienteId: String) {
          invitation_linkList(workspaceId: $workspaceId, sessionAmbienteId: $sessionAmbienteId)
        }
      `,{workspaceId:t,sessionAmbienteId:e??null},{endpoint:u}),s=m(n.invitation_linkList);if(!s.success)throw new Error(s.errors[0]??"invitation link list failed");return(s.payload??[]).map(S).filter(i=>i!==null)},async get(t,e,n){const s=await y(`
        query InvitationLinkGet($workspaceId: String!, $invitationLinkId: String!, $sessionAmbienteId: String) {
          invitation_linkGet(workspaceId: $workspaceId, invitationLinkId: $invitationLinkId, sessionAmbienteId: $sessionAmbienteId)
        }
      `,{workspaceId:t,invitationLinkId:e,sessionAmbienteId:n??null},{endpoint:u}),i=m(s.invitation_linkGet),o=S(i.payload);if(!i.success||!o)throw new Error(i.errors[0]??"invitation link get failed");return o},async save(t){const e=await k(`
        mutation InvitationLinkSave($input: Any!) {
          invitation_linkSave(input: $input)
        }
      `,{input:t},{endpoint:u}),n=m(e.invitation_linkSave);if(!n.success||!n.payload?.id)throw new Error(n.errors[0]??"invitation link save failed");return n.payload.id},async setStatus(t,e,n,s){const i=await k(`
        mutation InvitationLinkSetStatus($invitationLinkId: String!, $status: String!, $workspaceId: String!, $sessionAmbienteId: String) {
          invitation_linkSetStatus(invitationLinkId: $invitationLinkId, status: $status, workspaceId: $workspaceId, sessionAmbienteId: $sessionAmbienteId)
        }
      `,{invitationLinkId:t,status:e,workspaceId:n,sessionAmbienteId:s??null},{endpoint:u}),o=m(i.invitation_linkSetStatus);if(!o.success)throw new Error(o.errors[0]??"invitation link status failed")},async responses(t,e,n){const s=await y(`
        query InvitationLinkResponses($invitationLinkId: String!, $workspaceId: String!, $sessionAmbienteId: String) {
          invitation_linkResponses(invitationLinkId: $invitationLinkId, workspaceId: $workspaceId, sessionAmbienteId: $sessionAmbienteId)
        }
      `,{invitationLinkId:t,workspaceId:e,sessionAmbienteId:n??null},{endpoint:u}),i=m(s.invitation_linkResponses);if(!i.success)throw new Error(i.errors[0]??"invitation responses failed");return(i.payload??[]).map(_).filter(o=>o!==null)},async exportResponse(t){const e=await k(`
        mutation InvitationLinkResponseExport($input: Any!) {
          invitation_linkResponseExport(input: $input)
        }
      `,{input:t},{endpoint:u}),n=m(e.invitation_linkResponseExport);if(!n.success)throw new Error(n.errors[0]??"invitation response export failed");return n.payload},async templates(t,e){const n=await y(`
        query InvitationLinkTemplateList($workspaceId: String!, $sessionAmbienteId: String) {
          invitation_linkTemplateList(workspaceId: $workspaceId, sessionAmbienteId: $sessionAmbienteId)
        }
      `,{workspaceId:t,sessionAmbienteId:e??null},{endpoint:u}),s=m(n.invitation_linkTemplateList);if(!s.success)throw new Error(s.errors[0]??"invitation template list failed");return(s.payload??[]).map($).filter(i=>i!==null)},async templateGet(t,e){const n=await y(`
        query InvitationLinkTemplateGet($templateId: String!, $sessionAmbienteId: String) {
          invitation_linkTemplateGet(templateId: $templateId, sessionAmbienteId: $sessionAmbienteId)
        }
      `,{templateId:t,sessionAmbienteId:e??null},{endpoint:u}),s=m(n.invitation_linkTemplateGet),i=$(s.payload);if(!s.success||!i)throw new Error(s.errors[0]??"invitation template get failed");return i},async templateSave(t){const e=await k(`
        mutation InvitationLinkTemplateSave($input: Any!) {
          invitation_linkTemplateSave(input: $input)
        }
      `,{input:t},{endpoint:u}),n=m(e.invitation_linkTemplateSave);if(!n.success||!n.payload?.id)throw new Error(n.errors[0]??"invitation template save failed");return n.payload.id},async templatePublish(t,e,n){const s=await k(`
        mutation InvitationLinkTemplatePublish($templateId: String!, $workspaceId: String!, $sessionAmbienteId: String) {
          invitation_linkTemplatePublish(templateId: $templateId, workspaceId: $workspaceId, sessionAmbienteId: $sessionAmbienteId)
        }
      `,{templateId:t,workspaceId:e,sessionAmbienteId:n??null},{endpoint:u}),i=m(s.invitation_linkTemplatePublish);if(!i.success)throw new Error(i.errors[0]??"invitation template publish failed");return i.payload},async templateArchive(t,e,n){const s=await k(`
        mutation InvitationLinkTemplateArchive($templateId: String!, $workspaceId: String!, $sessionAmbienteId: String) {
          invitation_linkTemplateArchive(templateId: $templateId, workspaceId: $workspaceId, sessionAmbienteId: $sessionAmbienteId)
        }
      `,{templateId:t,workspaceId:e,sessionAmbienteId:n??null},{endpoint:u}),i=m(s.invitation_linkTemplateArchive);if(!i.success)throw new Error(i.errors[0]??"invitation template archive failed")},async customFields(t){const n=(await y(`
        query InvitationLinkCustomFields($args: getlinktemplatecustomfieldsjson_args!) {
          getlinktemplatecustomfieldsjson(args: $args) {
            json
          }
        }
      `,{args:{selectedworkspaceid:t,selectedfilters:{}}})).getlinktemplatecustomfieldsjson,i=(Array.isArray(n)?n:n?[n]:[])[0],o=i&&typeof i=="object"?i.json:null;let p=o;if(typeof o=="string")try{p=JSON.parse(o)}catch{p=[]}return Array.isArray(p)?p.map(d=>{if(!d||typeof d!="object")return null;const c=d,b=c.payload&&typeof c.payload=="object"?c.payload:{},A=typeof b.templateId=="string"?b.templateId.trim():"";return A?{id:A,name:typeof c.name=="string"&&c.name.trim()?c.name:A,valueType:typeof c.valueType=="string"?c.valueType:"text"}:null}).filter(d=>d!==null):[]}};export{E as i};
