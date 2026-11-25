import{a5 as p,T as u}from"./index-Dczi3G9i.js";import{f as D}from"./phone-DxrQJJV9.js";const E=[{value:"visitante",label:"Visitante"},{value:"prestador_servico",label:"Prestador"},{value:"familiar",label:"Familiar"},{value:"diarista",label:"Diarista"}],ea=E.map(a=>a.value),$=140;function W(a){if(!a||typeof a!="object"||Array.isArray(a))return null;const e=a,o=typeof e.workspaceClientId=="string"&&e.workspaceClientId.trim()?e.workspaceClientId.trim():null,t=typeof e.label=="string"&&e.label.trim()?e.label.trim():null;return!o&&!t?null:{workspaceClientId:o,label:t}}function N(a){const e=typeof a.id=="string"&&a.id.trim()?a.id.trim():crypto.randomUUID();let o=typeof a.content=="string"?a.content.trim():"";o.length>$&&(o=o.slice(0,$));const t=Array.isArray(a.files)?a.files:[],i=[];for(const n of t){if(!n||typeof n!="object")continue;const s=n,c=typeof s.fileUploadId=="string"?s.fileUploadId.trim():typeof s.fileId=="string"?s.fileId.trim():"",d=typeof s.url=="string"?s.url:typeof s.fileUrl=="string"?s.fileUrl:null;!c&&!d||i.push({fileUploadId:c,url:d})}return!o&&i.length===0?null:{id:e,content:o,files:i,createdAt:typeof a.createdAt=="string"&&a.createdAt?a.createdAt:new Date().toISOString(),createdByUserId:typeof a.createdByUserId=="string"?a.createdByUserId:null,createdByName:typeof a.createdByName=="string"?a.createdByName:null}}function aa(a){const e={carrier:null,code:null,notes:[],pickedUpBy:null,raw:{}};if(!a?.trim())return e;try{const o=JSON.parse(a);if(!o||typeof o!="object"||Array.isArray(o))return e;const t=o,i=Array.isArray(t.notes)?t.notes:[],n=[];for(const s of i){if(!s||typeof s!="object")continue;const c=N(s);c&&n.push(c)}return{carrier:typeof t.carrier=="string"?t.carrier:null,code:typeof t.code=="string"?t.code:null,notes:n,pickedUpBy:W(t.pickedUpBy),raw:t}}catch{return e}}function ra(a){const e=a.previous?.raw??{},o=(a.carrier??a.previous?.carrier??"").trim(),t=(a.code??a.previous?.code??"").trim(),i=a.notes??a.previous?.notes??[],n={...e};if(o?n.carrier=o:delete n.carrier,t?n.code=t:delete n.code,i.length>0?n.notes=i:delete n.notes,a.clearPickedUpBy)delete n.pickedUpBy;else if(a.pickedUpBy!==void 0){const s=W(a.pickedUpBy);if(s){const c={};s.workspaceClientId&&(c.workspaceClientId=s.workspaceClientId),s.label&&(c.label=s.label),n.pickedUpBy=c}else delete n.pickedUpBy}else if(a.previous?.pickedUpBy){const s=a.previous.pickedUpBy,c={};s.workspaceClientId&&(c.workspaceClientId=s.workspaceClientId),s.label&&(c.label=s.label),Object.keys(c).length>0?n.pickedUpBy=c:delete n.pickedUpBy}return Object.keys(n).length===0?null:JSON.stringify(n)}function oa(a){const e=a.content.trim().slice(0,$),o=[],t=a.fileUploadId?.trim()||"",i=a.url?.trim()||null;return(t||i)&&o.push({fileUploadId:t,url:i}),{id:crypto.randomUUID(),content:e,files:o,createdAt:new Date().toISOString(),createdByUserId:a.createdByUserId??null,createdByName:a.createdByName??null}}function I(a){return!a||typeof a!="object"||Array.isArray(a)?null:a}function h(a){const e=I(a);if(!e)return null;const o=r(e.workspaceClientId);return o?{workspaceClientId:o,clientType:r(e.clientType),presenceMode:r(e.presenceMode),userId:r(e.userId),status:r(e.status),hasEverLoggedIn:e.hasEverLoggedIn===!0,lastSeenAt:r(e.lastSeenAt),currentRoute:r(e.currentRoute),online:e.online===!0||r(e.status)==="online"}:null}function r(a){if(typeof a!="string")return null;const e=a.trim();return e.length>0?e:null}function v(a){return typeof a=="boolean"?a:void 0}function T(a){if(!a||typeof a!="object"||Array.isArray(a))return{success:!1,error:"INVALID_PAYLOAD",assignments:[]};const e=a;if(e.success!==!0)return{success:!1,error:typeof e.error=="string"?e.error:"LIST_FAILED",assignments:[]};const o=Array.isArray(e.assignments)?e.assignments:[],t=[];for(const i of o){if(!i||typeof i!="object")continue;const n=i,s=String(n.linkId??"").trim(),c=String(n.condoWorkspaceId??"").trim(),d=String(n.recipientWorkspaceId??"").trim();!s||!c||!d||t.push({linkId:s,condoWorkspaceId:c,recipientWorkspaceId:d,condoName:String(n.condoName??c).trim()||c,status:String(n.status??"").trim()||"ACCEPTED"})}return{success:!0,assignments:t}}function k(a){const e=I(a);if(!e)return{success:!1,errorCode:"INVALID_PAYLOAD",payload:null};if(e.success!==!0){const t=Array.isArray(e.errorMessages)?e.errorMessages.filter(i=>typeof i=="string"):void 0;return{success:!1,errorCode:r(e.errorCode)??"LIST_FAILED",errorMessages:t,payload:null}}return{success:!0,payload:I(e.payload)}}function R(a){const e=I(a);return{id:r(e?.id),firstName:r(e?.firstName),lastName:r(e?.lastName),email:r(e?.email),phone:r(e?.phone),photoUrl:r(e?.photoUrl)}}function O(a){const e=I(a);return e?{workspaceId:r(e.workspaceId),name:r(e.name),workspaceClientId:r(e.workspaceClientId),photoUrl:r(e.photoUrl),isDoorman:e.isDoorman===!0}:null}function V(a){const e=I(a);if(!e)return null;const o=r(e.id),t=r(e.name);return!o&&!t?null:{id:o,name:t}}function B(a){if(!Array.isArray(a))return[];const e=[];for(const o of a){const t=I(o);if(!t)continue;const i=r(t.id);i&&e.push({id:i,name:r(t.name)})}return e}function G(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,items:[]};const o=Array.isArray(e.payload.items)?e.payload.items:[],t=[];for(const i of o){const n=I(i);if(!n)continue;const s=r(n.workspaceLinkId);s&&t.push({workspaceLinkId:s,workspaceClientId:r(n.workspaceClientId),status:r(n.status),startDate:r(n.startDate),endDate:r(n.endDate),durationLabel:r(n.durationLabel),client:R(n.client),visitorKind:r(n.visitorKind),privateUnit:V(n.privateUnit),authorizer:O(n.authorizer),passages:B(n.passages),accessed:!1,crossings:[],extraCount:0,canEdit:v(n.canEdit),canDelete:v(n.canDelete)})}return{success:!0,items:t}}function q(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,items:[]};const o=Array.isArray(e.payload.items)?e.payload.items:[],t=[];for(const i of o){const n=I(i);if(!n)continue;const s=r(n.workspaceLinkId);if(!s)continue;const c=Array.isArray(n.crossings)?n.crossings:[],d=[];for(const f of c){const y=I(f);y&&d.push({passageId:r(y.passageId),passageName:r(y.passageName),occurredAt:r(y.occurredAt)})}const m=n.extraCount,l=typeof m=="number"&&Number.isFinite(m)?Math.max(0,Math.floor(m)):0;t.push({workspaceLinkId:s,accessed:n.accessed===!0||d.length>0,crossings:d,extraCount:l})}return{success:!0,items:t}}function ta(a,e){const o=new Map;for(const t of e??[])o.set(t.workspaceLinkId,t);return a.map(t=>{const i=o.get(t.workspaceLinkId);return i?{...t,accessed:i.accessed,crossings:i.crossings,extraCount:i.extraCount}:{...t,accessed:!1,crossings:[],extraCount:0}})}function sa(a){const e=a.privateUnit?.name?.trim()||"";if(a.authorizer?.isDoorman)return e?`${e} • Portaria`:"Portaria";const o=a.authorizer?.name?.trim()||"";return o&&e?`${o} • ${e}`:o||e||""}function na(a){const e=a.client.firstName?.trim()||"",o=a.client.lastName?.trim()||"";return`${e} ${o}`.trim()||a.client.email||D(a.client.phone)||"Visitante"}const J=new Set(["REPETIDO","JÁ DENTRO","SEM EFEITO"]);function x(a,e,o){const t=r(a);return t==="authorized"||t==="blocked"||t==="ignored"?t:e===!0?"authorized":J.has(o.trim().toUpperCase())?"ignored":"blocked"}function F(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,items:[],nextCursor:null};const o=Array.isArray(e.payload.items)?e.payload.items:[],t=[];for(const i of o){const n=I(i);if(!n)continue;const s=r(n.id);if(!s)continue;const c=r(n.statusLabel)??"";t.push({id:s,source:r(n.source)??"access",occurredAt:r(n.occurredAt),kind:r(n.kind)??"person",authorized:n.authorized===!0,status:x(n.status,n.authorized,c),statusLabel:c,code:r(n.code),message:r(n.message),personName:r(n.personName),personKind:r(n.personKind),authorizedByName:r(n.authorizedByName),unitLabel:r(n.unitLabel),roleLabel:r(n.roleLabel),visitorKind:r(n.visitorKind),portalLabel:r(n.portalLabel),areaName:r(n.areaName),methodLabel:r(n.methodLabel),photoUrl:r(n.photoUrl),vehiclePlate:r(n.vehiclePlate),vehicleModel:r(n.vehicleModel),direction:r(n.direction),presence:h(n.presence)})}return{success:!0,items:t,nextCursor:r(e.payload.nextCursor)}}function K(a,e){return a==="picked_up_by"||a==="destined_to"?a:e==="picked"?"picked_up_by":"destined_to"}function b(a){const e=r(a.id);if(!e)return null;const o=r(a.direction),t=r(a.photoUrl),i=typeof a.hasPhoto=="boolean"?a.hasPhoto:!!(t&&t.length>0);return{id:e,occurredAt:r(a.occurredAt),code:r(a.code),title:r(a.title),carrier:r(a.carrier),unitLabel:r(a.unitLabel),workspaceClientId:r(a.workspaceClientId),recipientName:r(a.recipientName),actorName:r(a.actorName),direction:o,status:r(a.status),role:K(a.role,o),statusLabel:r(a.statusLabel)??"",statusChipLabel:r(a.statusChipLabel)??(r(a.statusLabel)??"").toUpperCase(),photoUrl:t,hasPhoto:i,personLabel:r(a.personLabel)??r(a.actorName)??r(a.recipientName),personSecondary:r(a.personSecondary),recipientPhotoUrl:r(a.recipientPhotoUrl),pickedUpByLabel:r(a.pickedUpByLabel),canEdit:v(a.canEdit),canDelete:v(a.canDelete)}}function z(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,items:[],nextCursor:null};const o=Array.isArray(e.payload.items)?e.payload.items:[],t=[];for(const i of o){const n=I(i);if(!n)continue;const s=b(n);s&&t.push(s)}return{success:!0,items:t,nextCursor:r(e.payload.nextCursor)}}function M(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,delivery:null};const o=I(e.payload);if(!o)return{success:!1,errorCode:"BAD_RESPONSE",delivery:null};const t=b(o);return t?{success:!0,delivery:{...t,ownerWorkspaceId:r(o.ownerWorkspaceId),pickupType:r(o.pickupType),observations:r(o.observations),expiresAt:r(o.expiresAt),createdAt:r(o.createdAt)??t.occurredAt,updatedAt:r(o.updatedAt),metadata:r(o.metadata),creatorName:r(o.creatorName),creatorUserId:r(o.creatorUserId),fileUploadId:r(o.fileUploadId),clientGroupWorkspaceLinkId:r(o.clientGroupWorkspaceLinkId)}}:{success:!1,errorCode:"BAD_RESPONSE",delivery:null}}function Y(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,items:[],total:0};const o=Array.isArray(e.payload.items)?e.payload.items:[],t=[];for(const n of o){const s=I(n);if(!s)continue;const c=r(s.id);if(!c)continue;const d=r(s.name),m=r(s.complement),l=r(s.label)??d??m??c;t.push({id:c,name:d,complement:m,label:l})}const i=typeof e.payload.total=="number"?e.payload.total:t.length;return{success:!0,items:t,total:i}}function j(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,items:[],total:0};const o=Array.isArray(e.payload.items)?e.payload.items:[],t=[];for(const n of o){const s=I(n);if(!s)continue;const c=r(s.dependentLinkId),d=r(s.workspaceClientId);!c||!d||t.push({dependentLinkId:c,workspaceClientId:d,firstName:r(s.firstName),lastName:r(s.lastName),email:r(s.email),phone:r(s.phone),localClient:s.localClient===!0,linkStatus:r(s.linkStatus),primaryLinkId:r(s.primaryLinkId),photoUrl:r(s.photoUrl),lastAccessLabel:r(s.lastAccessLabel),presence:h(s.presence)})}const i=typeof e.payload.total=="number"?e.payload.total:t.length;return{success:!0,items:t,total:i}}function H(a){const e=I(a);if(!e)return null;const o=r(e.id),t=r(e.fileUploadId);return!o||!t?null:{id:o,fileUploadId:t,kind:r(e.kind)??"FILE",sortOrder:typeof e.sortOrder=="number"?e.sortOrder:0,fileName:r(e.fileName),url:r(e.url),key:r(e.key),sizeBytes:typeof e.sizeBytes=="number"?e.sizeBytes:null}}function _(a){const e=I(a);if(!e)return null;const o=r(e.id);if(!o)return null;const t=Array.isArray(e.attachments)?e.attachments:[],i=[];for(const n of t){const s=H(n);s&&i.push(s)}return{id:o,kind:r(e.kind)??"INFO",title:r(e.title),subtitle:r(e.subtitle),body:r(e.body),sortOrder:typeof e.sortOrder=="number"?e.sortOrder:null,expiresAt:r(e.expiresAt),createdByUserId:r(e.createdByUserId),authorName:r(e.authorName),authorEmail:r(e.authorEmail),authorPhotoUrl:r(e.authorPhotoUrl),presence:h(e.presence),createdAt:r(e.createdAt),updatedAt:r(e.updatedAt),commentCount:typeof e.commentCount=="number"?e.commentCount:0,ackCount:typeof e.ackCount=="number"?e.ackCount:0,ackedByMe:e.ackedByMe===!0,attachments:i,canEdit:v(e.canEdit),canDelete:v(e.canDelete)}}function L(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,items:[],total:0};const o=Array.isArray(e.payload.items)?e.payload.items:[],t=[];for(const n of o){const s=_(n);s&&t.push(s)}const i=typeof e.payload.total=="number"?e.payload.total:t.length;return{success:!0,items:t,total:i}}function X(a){const e=k(a);return!e.success||!e.payload?{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,card:null}:{success:!0,card:_(e.payload.card)}}function A(a){const e=k(a);return!e.success||!e.payload?{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages}:{success:!0,id:r(e.payload.id)??void 0,deleted:e.payload.deleted===!0}}function Q(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,items:[],total:0};const o=Array.isArray(e.payload.items)?e.payload.items:[],t=[];for(const n of o){const s=I(n);if(!s)continue;const c=r(s.id),d=r(s.cardId),m=r(s.body);!c||!d||!m||t.push({id:c,cardId:d,body:m,createdByUserId:r(s.createdByUserId),authorName:r(s.authorName),authorEmail:r(s.authorEmail),authorPhotoUrl:r(s.authorPhotoUrl),presence:h(s.presence),createdAt:r(s.createdAt),canDelete:v(s.canDelete)})}const i=typeof e.payload.total=="number"?e.payload.total:t.length;return{success:!0,items:t,total:i}}function Z(a){const e=k(a);return!e.success||!e.payload?{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages}:{success:!0,cardId:r(e.payload.cardId)??void 0,ackedByMe:e.payload.ackedByMe===!0,ackCount:typeof e.payload.ackCount=="number"?e.payload.ackCount:void 0}}function ee(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,items:[],total:0};const o=Array.isArray(e.payload.items)?e.payload.items:[],t=[];for(const n of o){const s=I(n);if(!s)continue;const c=r(s.workspaceLinkId);if(!c)continue;const d=I(s.workspaceClient),m=I(s.privateUnit);let l=null;if(m){const y=r(m.id);if(y){const g=r(m.name),C=r(m.complement);l={id:y,name:g,complement:C,label:r(m.label)??g??C??y}}}const f=Array.isArray(s.permissionNames)?s.permissionNames.map(y=>typeof y=="string"?y.trim():"").filter(Boolean):[];t.push({workspaceLinkId:c,status:r(s.status),createdAt:r(s.createdAt),workspaceClient:d?{id:r(d.id)??"",type:r(d.type),firstName:r(d.firstName),lastName:r(d.lastName),brandingName:r(d.brandingName),legalName:r(d.legalName),email:r(d.email),phone:r(d.phone),photoUrl:r(d.photoUrl)}:null,inviteLinkName:r(s.inviteLinkName),privateUnit:l,permissionNames:f})}const i=typeof e.payload.total=="number"?e.payload.total:t.length;return{success:!0,items:t,total:i}}function ae(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages};const o=r(e.payload.workspaceLinkId),t=r(e.payload.status);return!o||!t?{success:!1,errorCode:"INVALID_PAYLOAD"}:{success:!0,workspaceLinkId:o,status:t}}function ia(a){if(!a)return"—";if(a.type==="LEGAL_PERSON"){const o=a.brandingName?.trim();if(o)return o;const t=a.legalName?.trim();if(t)return t}const e=[a.firstName,a.lastName].filter(Boolean);return e.length?e.join(" "):a.email?.trim()||a.phone?.trim()||"—"}function re(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages};const o=r(e.payload.workspaceClientId),t=r(e.payload.dependentLinkId);return!o||!t?{success:!1,errorCode:"INVALID_PAYLOAD"}:{success:!0,workspaceClientId:o,primaryLinkId:r(e.payload.primaryLinkId),dependentLinkId:t,localClient:e.payload.localClient===!0}}function oe(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages};const o=r(e.payload.workspaceLinkId),t=r(e.payload.workspaceClientId);if(!o||!t)return{success:!1,errorCode:"INVALID_PAYLOAD"};const i=I(e.payload.share);return{success:!0,workspaceLinkId:o,workspaceClientId:t,visitorKind:r(e.payload.visitorKind)??void 0,observations:r(e.payload.observations),privateUnitLinkId:r(e.payload.privateUnitLinkId),responsibleWorkspaceId:r(e.payload.responsibleWorkspaceId),share:i?{workspaceLinkId:r(i.workspaceLinkId)??o,uploadPath:r(i.uploadPath),url:r(i.url),message:r(i.message),whatsappUrl:r(i.whatsappUrl)}:null}}function U(a){if(!a)return null;const e=r(a.deviceId);return e?{deviceId:e,name:r(a.name)||e,areaName:r(a.areaName),passageName:r(a.passageName),sortOrder:typeof a.sortOrder=="number"?a.sortOrder:0,hidden:a.hidden===!0}:null}function P(a){const e=k(a),o={success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,condoWorkspaceId:"",cameraMode:"general",cameraRowDeviceIds:[],gallery:[],passages:[],configured:!1};if(!e.success||!e.payload)return o;const t=e.payload,i=Array.isArray(t.gallery)?t.gallery:[],n=[];for(const m of i){const l=U(I(m));l&&n.push(l)}const s=Array.isArray(t.passages)?t.passages:[],c=[];for(const m of s){const l=I(m);if(!l)continue;const f=r(l.passageId);if(!f)continue;const y=Array.isArray(l.cameras)?l.cameras:[],g=[];for(const C of y){const S=U(I(C));S&&g.push(S)}c.push({passageId:f,name:r(l.name)||f,areaName:r(l.areaName),sortOrder:typeof l.sortOrder=="number"?l.sortOrder:0,cameras:g,remoteDeviceId:r(l.remoteDeviceId),canOpen:l.canOpen===!0,hidden:l.hidden===!0})}const d=Array.isArray(t.cameraRowDeviceIds)?t.cameraRowDeviceIds.map(m=>String(m)).filter(Boolean):[];return{success:!0,condoWorkspaceId:r(t.condoWorkspaceId)||"",cameraMode:r(t.cameraMode)||"general",cameraRowDeviceIds:d,gallery:n,passages:c,configured:t.configured===!0}}function w(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,items:[],total:0};const o=Array.isArray(e.payload.items)?e.payload.items:[],t=[];for(const n of o){const s=I(n);if(!s)continue;const c=r(s.workspaceClientId);c&&t.push({workspaceClientId:c,firstName:r(s.firstName),lastName:r(s.lastName),email:r(s.email),phone:r(s.phone),photoUrl:r(s.photoUrl),lastAccessLabel:r(s.lastAccessLabel)})}const i=typeof e.payload.total=="number"?e.payload.total:t.length;return{success:!0,items:t,total:i}}function te(a){const e=w(a);return{success:e.success,errorCode:e.errorCode,errorMessages:e.errorMessages,items:e.items,total:e.total}}function se(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,items:[],total:0};const o=Array.isArray(e.payload.items)?e.payload.items:[],t=[];for(const n of o){const s=I(n);if(!s)continue;const c=r(s.passageId),d=r(s.passageName),m=r(s.deviceId),l=r(s.externalApiKey);!c||!d||!m||!l||t.push({passageId:c,passageName:d,areaName:r(s.areaName),deviceId:m,externalApiKey:l})}const i=typeof e.payload.total=="number"?e.payload.total:t.length;return{success:!0,items:t,total:i}}function ne(a){const e=k(a);return!e.success||!e.payload?{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages}:{success:!0,passageId:r(e.payload.passageId)??void 0,deviceId:r(e.payload.deviceId)??void 0}}function ie(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,items:[],total:0};const o=Array.isArray(e.payload.items)?e.payload.items:[],t=[];for(const n of o){const s=I(n);if(!s)continue;const c=r(s.id),d=r(s.name);if(!c||!d)continue;const m=Array.isArray(s.passages)?s.passages:[],l=[];for(const f of m){const y=I(f);if(!y)continue;const g=r(y.id),C=r(y.name);g&&l.push({id:g,name:C??g})}t.push({id:c,name:d,areaType:r(s.areaType)??"",passages:l})}const i=typeof e.payload.total=="number"?e.payload.total:t.length;return{success:!0,items:t,total:i}}function ce(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages};const o=r(e.payload.token),t=r(e.payload.url),i=r(e.payload.expiresAt),n=r(e.payload.id);return!o||!t||!i||!n?{success:!1,errorCode:"INVALID_PAYLOAD"}:{success:!0,session:{id:n,token:o,url:t,expiresAt:i,ttlMinutes:typeof e.payload.ttlMinutes=="number"?e.payload.ttlMinutes:void 0,workspaceClientId:r(e.payload.workspaceClientId)??void 0,condoWorkspaceId:r(e.payload.condoWorkspaceId)??void 0,remainingSeconds:Math.max(0,Math.floor((Date.parse(i)-Date.now())/1e3)),status:"ACTIVE"}}}function de(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages};const o=I(e.payload.session);if(!o)return{success:!0,session:null};const t=r(o.token),i=r(o.url),n=r(o.expiresAt),s=r(o.id);return!t||!i||!n||!s?{success:!0,session:null}:{success:!0,session:{id:s,token:t,url:i,expiresAt:n,status:r(o.status)??void 0,remainingSeconds:typeof o.remainingSeconds=="number"?o.remainingSeconds:Math.max(0,Math.floor((Date.parse(n)-Date.now())/1e3)),fileUploadId:r(o.fileUploadId),originalFileUploadId:r(o.originalFileUploadId),consumedAt:r(o.consumedAt),revokedAt:r(o.revokedAt)}}}function le(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages};const o=r(e.payload.workspaceClientId),t=r(e.payload.fileUploadId);return!o||!t?{success:!1,errorCode:"INVALID_PAYLOAD"}:{success:!0,workspaceClientId:o,fileUploadId:t,originalFileUploadId:r(e.payload.originalFileUploadId)??t}}function pe(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages};const o=r(e.payload.vehicleId),t=r(e.payload.plate),i=r(e.payload.privateUnitLinkId);return!o||!t||!i?{success:!1,errorCode:"INVALID_PAYLOAD"}:{success:!0,vehicleId:o,plate:t,workspaceClientId:r(e.payload.workspaceClientId),privateUnitLinkId:i}}function ue(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,found:!1,vehicle:null};if(e.payload.found!==!0)return{success:!0,found:!1,vehicle:null};const o=r(e.payload.vehicleId),t=r(e.payload.plate);return!o||!t?{success:!1,errorCode:"INVALID_PAYLOAD",found:!1,vehicle:null}:{success:!0,found:!0,vehicle:{vehicleId:o,plate:t,brand:r(e.payload.brand),model:r(e.payload.model),color:r(e.payload.color),workspaceClientId:r(e.payload.workspaceClientId),ownerName:r(e.payload.ownerName),privateUnitLinkId:r(e.payload.privateUnitLinkId),privateUnitLabel:r(e.payload.privateUnitLabel)}}}function Ie(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages};const o=r(e.payload.vehicleId),t=r(e.payload.plate),i=r(e.payload.privateUnitLinkId);return!o||!t||!i?{success:!1,errorCode:"INVALID_PAYLOAD"}:{success:!0,vehicleId:o,plate:t,workspaceClientId:r(e.payload.workspaceClientId),privateUnitLinkId:i}}const me=`
  query PortariaListAssignments {
    portaria_listAssignments
  }
`,ke=`
  query PortariaDoorManListPassages(
    $condoWorkspaceId: String!
    $day: String!
    $filter: String
    $limit: Int
    $cursor: String
  ) {
    portaria_doorManListPassages(
      condoWorkspaceId: $condoWorkspaceId
      day: $day
      filter: $filter
      limit: $limit
      cursor: $cursor
    )
  }
`,ye=`
  query PortariaDoorManListVisitors(
    $condoWorkspaceId: String!
    $day: String!
    $endDateFilter: String
    $query: String
    $limit: Int
  ) {
    portaria_doorManListVisitors(
      condoWorkspaceId: $condoWorkspaceId
      day: $day
      endDateFilter: $endDateFilter
      query: $query
      limit: $limit
    )
  }
`,fe=`
  query PortariaDoorManListVisitorAccess(
    $condoWorkspaceId: String!
    $workspaceLinkIds: Any
    $day: String!
  ) {
    portaria_doorManListVisitorAccess(
      condoWorkspaceId: $condoWorkspaceId
      workspaceLinkIds: $workspaceLinkIds
      day: $day
    )
  }
`,ge=`
  query PortariaDoorManListDeliveries(
    $condoWorkspaceId: String!
    $day: String!
    $filter: String
    $limit: Int
    $cursor: String
  ) {
    portaria_doorManListDeliveries(
      condoWorkspaceId: $condoWorkspaceId
      day: $day
      filter: $filter
      limit: $limit
      cursor: $cursor
    )
  }
`,ve=`
  query PortariaDoorManGetDelivery(
    $condoWorkspaceId: String!
    $deliveryId: String!
  ) {
    portaria_doorManGetDelivery(
      condoWorkspaceId: $condoWorkspaceId
      deliveryId: $deliveryId
    )
  }
`,Ce=`
  mutation PortariaDoorManSetDelivery(
    $condoWorkspaceId: String!
    $id: String
    $status: String
    $pickupType: String
    $title: String!
    $observations: String
    $expiresAt: String
    $metadata: String
    $workspaceClientId: String
    $clientGroupWorkspaceLinkId: String
    $fileUploadId: String
    $areaId: String
    $passageId: String
  ) {
    portaria_doorManSetDelivery(
      condoWorkspaceId: $condoWorkspaceId
      id: $id
      status: $status
      pickupType: $pickupType
      title: $title
      observations: $observations
      expiresAt: $expiresAt
      metadata: $metadata
      workspaceClientId: $workspaceClientId
      clientGroupWorkspaceLinkId: $clientGroupWorkspaceLinkId
      fileUploadId: $fileUploadId
      areaId: $areaId
      passageId: $passageId
    )
  }
`,he=`
  query PortariaDoorManListPrivateUnits(
    $condoWorkspaceId: String!
    $search: String
  ) {
    portaria_doorManListPrivateUnits(
      condoWorkspaceId: $condoWorkspaceId
      search: $search
    )
  }
`,Ae=`
  query PortariaDoorManListPrivateUnitMembers(
    $condoWorkspaceId: String!
    $privateUnitLinkId: String!
  ) {
    portaria_doorManListPrivateUnitMembers(
      condoWorkspaceId: $condoWorkspaceId
      privateUnitLinkId: $privateUnitLinkId
    )
  }
`,$e=`
  query PortariaDoorManListPrivateUnitCards(
    $condoWorkspaceId: String!
    $privateUnitLinkId: String!
    $kind: String!
  ) {
    portaria_doorManListPrivateUnitCards(
      condoWorkspaceId: $condoWorkspaceId
      privateUnitLinkId: $privateUnitLinkId
      kind: $kind
    )
  }
`,Se=`
  mutation PortariaDoorManUpsertPrivateUnitCard(
    $condoWorkspaceId: String!
    $privateUnitLinkId: String!
    $id: String
    $kind: String!
    $title: String
    $subtitle: String
    $body: String
    $expiresAt: String
    $attachmentsJson: String
  ) {
    portaria_doorManUpsertPrivateUnitCard(
      condoWorkspaceId: $condoWorkspaceId
      privateUnitLinkId: $privateUnitLinkId
      id: $id
      kind: $kind
      title: $title
      subtitle: $subtitle
      body: $body
      expiresAt: $expiresAt
      attachmentsJson: $attachmentsJson
    )
  }
`,Me=`
  mutation PortariaDoorManDeletePrivateUnitCard(
    $condoWorkspaceId: String!
    $cardId: String!
  ) {
    portaria_doorManDeletePrivateUnitCard(
      condoWorkspaceId: $condoWorkspaceId
      cardId: $cardId
    )
  }
`,Le=`
  mutation PortariaDoorManReorderPrivateUnitCards(
    $condoWorkspaceId: String!
    $privateUnitLinkId: String!
    $cardIds: Any
  ) {
    portaria_doorManReorderPrivateUnitCards(
      condoWorkspaceId: $condoWorkspaceId
      privateUnitLinkId: $privateUnitLinkId
      cardIds: $cardIds
    )
  }
`,Ue=`
  query PortariaDoorManListPrivateUnitCardComments(
    $condoWorkspaceId: String!
    $cardId: String!
  ) {
    portaria_doorManListPrivateUnitCardComments(
      condoWorkspaceId: $condoWorkspaceId
      cardId: $cardId
    )
  }
`,Pe=`
  mutation PortariaDoorManAddPrivateUnitCardComment(
    $condoWorkspaceId: String!
    $cardId: String!
    $body: String!
  ) {
    portaria_doorManAddPrivateUnitCardComment(
      condoWorkspaceId: $condoWorkspaceId
      cardId: $cardId
      body: $body
    )
  }
`,We=`
  mutation PortariaDoorManDeletePrivateUnitCardComment(
    $condoWorkspaceId: String!
    $commentId: String!
  ) {
    portaria_doorManDeletePrivateUnitCardComment(
      condoWorkspaceId: $condoWorkspaceId
      commentId: $commentId
    )
  }
`,be=`
  mutation PortariaDoorManTogglePrivateUnitCardAck(
    $condoWorkspaceId: String!
    $cardId: String!
  ) {
    portaria_doorManTogglePrivateUnitCardAck(
      condoWorkspaceId: $condoWorkspaceId
      cardId: $cardId
    )
  }
`,_e=`
  query PortariaDoorManListPendingApprovals($condoWorkspaceId: String!) {
    portaria_doorManListPendingApprovals(condoWorkspaceId: $condoWorkspaceId)
  }
`,we=`
  mutation PortariaDoorManSetPendingApprovalStatus(
    $condoWorkspaceId: String!
    $workspaceLinkId: String!
    $status: String!
  ) {
    portaria_doorManSetPendingApprovalStatus(
      condoWorkspaceId: $condoWorkspaceId
      workspaceLinkId: $workspaceLinkId
      status: $status
    )
  }
`,De=`
  query PortariaDoorManSearchWorkspaceClients(
    $condoWorkspaceId: String!
    $query: String!
    $limit: Int
  ) {
    portaria_doorManSearchWorkspaceClients(
      condoWorkspaceId: $condoWorkspaceId
      query: $query
      limit: $limit
    )
  }
`,Ee=`
  query PortariaDoorManLookupWorkspaceClientsByContact(
    $condoWorkspaceId: String!
    $email: String
    $phone: String
  ) {
    portaria_doorManLookupWorkspaceClientsByContact(
      condoWorkspaceId: $condoWorkspaceId
      email: $email
      phone: $phone
    )
  }
`,Ne=`
  query PortariaDoorManListAccessAreas($condoWorkspaceId: String!) {
    portaria_doorManListAccessAreas(condoWorkspaceId: $condoWorkspaceId)
  }
`,Te=`
  query PortariaDoorManListRemoteAccesses($condoWorkspaceId: String!) {
    portaria_doorManListRemoteAccesses(condoWorkspaceId: $condoWorkspaceId)
  }
`,Re=`
  mutation PortariaDoorManOpenRemoteAccess(
    $condoWorkspaceId: String!
    $passageId: String!
  ) {
    portaria_doorManOpenRemoteAccess(
      condoWorkspaceId: $condoWorkspaceId
      passageId: $passageId
    )
  }
`,Oe=`
  mutation PortariaDoorManCreateVisitor(
    $condoWorkspaceId: String!
    $privateUnitLinkId: String!
    $authorizerWorkspaceClientId: String
    $workspaceClientId: String
    $firstName: String
    $lastName: String
    $email: String
    $phone: String
    $visitorKind: String
    $observations: String
    $durationPreset: String
    $accessPack: String
    $passageIds: Any
    $areaIds: Any
    $fileUploadId: String
  ) {
    portaria_doorManCreateVisitor(
      condoWorkspaceId: $condoWorkspaceId
      privateUnitLinkId: $privateUnitLinkId
      authorizerWorkspaceClientId: $authorizerWorkspaceClientId
      workspaceClientId: $workspaceClientId
      firstName: $firstName
      lastName: $lastName
      email: $email
      phone: $phone
      visitorKind: $visitorKind
      observations: $observations
      durationPreset: $durationPreset
      accessPack: $accessPack
      passageIds: $passageIds
      areaIds: $areaIds
      fileUploadId: $fileUploadId
    )
  }
`,Ve=`
  mutation PortariaDoorManCreateResident(
    $condoWorkspaceId: String!
    $privateUnitLinkId: String!
    $firstName: String!
    $lastName: String
    $email: String
    $phoneNumber: String
    $localClient: Boolean!
    $fileUploadId: String
    $originalFileUploadId: String
  ) {
    portaria_doorManCreateResident(
      condoWorkspaceId: $condoWorkspaceId
      privateUnitLinkId: $privateUnitLinkId
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNumber: $phoneNumber
      localClient: $localClient
      fileUploadId: $fileUploadId
      originalFileUploadId: $originalFileUploadId
    )
  }
`,Be=`
  mutation PortariaDoorManCreateVehicle(
    $condoWorkspaceId: String!
    $privateUnitLinkId: String!
    $plate: String!
    $brand: String
    $model: String
    $color: String
    $vehicleType: String
    $year: String
    $workspaceClientId: String
  ) {
    portaria_doorManCreateVehicle(
      condoWorkspaceId: $condoWorkspaceId
      privateUnitLinkId: $privateUnitLinkId
      plate: $plate
      brand: $brand
      model: $model
      color: $color
      vehicleType: $vehicleType
      year: $year
      workspaceClientId: $workspaceClientId
    )
  }
`,Ge=`
  query PortariaDoorManLookupVehicleByPlate(
    $condoWorkspaceId: String!
    $plate: String!
  ) {
    portaria_doorManLookupVehicleByPlate(
      condoWorkspaceId: $condoWorkspaceId
      plate: $plate
    )
  }
`,qe=`
  mutation PortariaDoorManTransferVehicle(
    $condoWorkspaceId: String!
    $vehicleId: String!
    $privateUnitLinkId: String!
    $workspaceClientId: String
  ) {
    portaria_doorManTransferVehicle(
      condoWorkspaceId: $condoWorkspaceId
      vehicleId: $vehicleId
      privateUnitLinkId: $privateUnitLinkId
      workspaceClientId: $workspaceClientId
    )
  }
`,Je=`
  mutation PortariaDoorManSetClientRecognition(
    $condoWorkspaceId: String!
    $workspaceClientId: String!
    $fileUploadId: String!
    $originalFileUploadId: String
  ) {
    portaria_doorManSetClientRecognition(
      condoWorkspaceId: $condoWorkspaceId
      workspaceClientId: $workspaceClientId
      fileUploadId: $fileUploadId
      originalFileUploadId: $originalFileUploadId
    )
  }
`,xe=`
  mutation PortariaDoorManMintPhotoUploadSession(
    $condoWorkspaceId: String!
    $workspaceClientId: String!
    $ttlMinutes: Int
    $sessionWorkspaceId: String
  ) {
    portaria_doorManMintPhotoUploadSession(
      condoWorkspaceId: $condoWorkspaceId
      workspaceClientId: $workspaceClientId
      ttlMinutes: $ttlMinutes
      sessionWorkspaceId: $sessionWorkspaceId
    )
  }
`,Fe=`
  query PortariaDoorManGetPhotoUploadSession(
    $condoWorkspaceId: String!
    $workspaceClientId: String!
  ) {
    portaria_doorManGetPhotoUploadSession(
      condoWorkspaceId: $condoWorkspaceId
      workspaceClientId: $workspaceClientId
    )
  }
`,Ke=`
  query PortariaDoorManListCameras($condoWorkspaceId: String!) {
    portaria_doorManListCameras(condoWorkspaceId: $condoWorkspaceId)
  }
`,ze=`
  query PortariaDoorManGetDeskLayout($condoWorkspaceId: String!, $forEdit: Boolean) {
    portaria_doorManGetDeskLayout(condoWorkspaceId: $condoWorkspaceId, forEdit: $forEdit)
  }
`,Ye=`
  mutation PortariaDoorManSetDeskLayout($condoWorkspaceId: String!, $layout: Any) {
    portaria_doorManSetDeskLayout(condoWorkspaceId: $condoWorkspaceId, layout: $layout)
  }
`,je=`
  query PortariaDoorManMyCapabilities($condoWorkspaceId: String!) {
    portaria_doorManMyCapabilities(condoWorkspaceId: $condoWorkspaceId)
  }
`;function He(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,capabilities:null};const o=e.payload,t=Array.isArray(o.permissions)?o.permissions.map(l=>String(l)).filter(Boolean):[],i=Array.isArray(o.passageIds)?o.passageIds.map(l=>String(l)).filter(Boolean):[],n=Array.isArray(o.cameraGroupIds)?o.cameraGroupIds.map(l=>String(l)).filter(Boolean):[],s=Array.isArray(o.cameraDeviceIds)?o.cameraDeviceIds.map(l=>String(l)).filter(Boolean):[],c={},d=I(o.scopes);if(d)for(const[l,f]of Object.entries(d))l&&(c[l]=f==="own"?"own":"all");const m=I(o.faceUpload)??{};return{success:!0,capabilities:{doormanWorkspaceLinkId:r(o.doormanWorkspaceLinkId)??"",condoWorkspaceId:r(o.condoWorkspaceId)??"",permissions:t,passageIds:i,cameraGroupIds:n,cameraDeviceIds:s,camerasUnrestricted:!!o.camerasUnrestricted,canOpenDoors:!!o.canOpenDoors,canViewCameras:!!o.canViewCameras,templateSlug:r(o.templateSlug)??"classic",matrixConfigured:!!o.matrixConfigured,scopes:c,faceUpload:{tenants:!!m.tenants,visitors:!!m.visitors}}}}function Xe(a){const e=k(a);if(!e.success||!e.payload)return{success:!1,errorCode:e.errorCode,errorMessages:e.errorMessages,items:[]};const o=Array.isArray(e.payload.items)?e.payload.items:[],t=[];for(const i of o){const n=I(i);if(!n)continue;const s=r(n.deviceId);s&&t.push({deviceId:s,name:r(n.name),areaName:r(n.areaName),passageName:r(n.passageName)})}return{success:!0,items:t}}const ca={async listAssignments(){const a=await p(me,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:2e4});return T(a.portaria_listAssignments)},async myCapabilities(a){const e=await p(je,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:2e4,variables:{condoWorkspaceId:a}});return He(e.portaria_doorManMyCapabilities)},async listPassages(a){const e=await p(ke,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId,day:a.day,filter:a.filter??"all",limit:a.limit??50,cursor:a.cursor??null}});return F(e.portaria_doorManListPassages)},async listVisitors(a){const e=await p(ye,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId,day:a.day,endDateFilter:a.endDateFilter??"withEndDate",query:a.query?.trim()||null,limit:a.limit??50}});return G(e.portaria_doorManListVisitors)},async listVisitorAccess(a){const e=await p(fe,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId,workspaceLinkIds:a.workspaceLinkIds,day:a.day}});return q(e.portaria_doorManListVisitorAccess)},async listDeliveries(a){const e=await p(ge,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId,day:a.day,filter:a.filter??"all",limit:a.limit??50,cursor:a.cursor??null}});return z(e.portaria_doorManListDeliveries)},async getDelivery(a){const e=await p(ve,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId,deliveryId:a.deliveryId}});return M(e.portaria_doorManGetDelivery)},async setDelivery(a){const e=await p(Ce,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:3e4,variables:{condoWorkspaceId:a.condoWorkspaceId,id:a.id??null,status:a.status,pickupType:a.pickupType,title:a.title,observations:a.observations??null,expiresAt:a.expiresAt??null,metadata:a.metadata??null,workspaceClientId:a.workspaceClientId??null,clientGroupWorkspaceLinkId:a.clientGroupWorkspaceLinkId??null,fileUploadId:a.fileUploadId??null,areaId:a.areaId??null,passageId:a.passageId??null}});return M(e.portaria_doorManSetDelivery)},async listPrivateUnits(a){const e=await p(he,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId,search:a.search??null}});return Y(e.portaria_doorManListPrivateUnits)},async listPrivateUnitMembers(a){const e=await p(Ae,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId,privateUnitLinkId:a.privateUnitLinkId}});return j(e.portaria_doorManListPrivateUnitMembers)},async listPendingApprovals(a){const e=await p(_e,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:6e4,variables:{condoWorkspaceId:a.condoWorkspaceId}});return ee(e.portaria_doorManListPendingApprovals)},async setPendingApprovalStatus(a){const e=await p(we,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:3e4,variables:{condoWorkspaceId:a.condoWorkspaceId,workspaceLinkId:a.workspaceLinkId,status:a.status}});return ae(e.portaria_doorManSetPendingApprovalStatus)},async searchWorkspaceClients(a){const e=await p(De,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:2e4,variables:{condoWorkspaceId:a.condoWorkspaceId,query:a.query,limit:a.limit??20}});return w(e.portaria_doorManSearchWorkspaceClients)},async lookupWorkspaceClientsByContact(a){const e=await p(Ee,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:15e3,variables:{condoWorkspaceId:a.condoWorkspaceId,email:a.email?.trim()||null,phone:a.phone?.trim()||null}});return te(e.portaria_doorManLookupWorkspaceClientsByContact)},async listAccessAreas(a){const e=await p(Ne,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId}});return ie(e.portaria_doorManListAccessAreas)},async listRemoteAccesses(a){const e=await p(Te,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId}});return se(e.portaria_doorManListRemoteAccesses)},async openRemoteAccess(a){const e=await p(Re,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:3e4,variables:{condoWorkspaceId:a.condoWorkspaceId,passageId:a.passageId}});return ne(e.portaria_doorManOpenRemoteAccess)},async createVisitor(a){const e=a.passageIds?.filter(Boolean)??[],o=a.areaIds?.filter(Boolean)??[],t=await p(Oe,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:45e3,variables:{condoWorkspaceId:a.condoWorkspaceId,privateUnitLinkId:a.privateUnitLinkId,authorizerWorkspaceClientId:a.authorizerWorkspaceClientId??null,workspaceClientId:a.workspaceClientId??null,firstName:a.firstName??null,lastName:a.lastName??null,email:a.email??null,phone:a.phone??null,visitorKind:a.visitorKind??"visitante",observations:a.observations??null,durationPreset:a.durationPreset??"NOW_24H",accessPack:e.length>0?null:a.accessPack??"ALL",passageIds:e.length>0?e:null,areaIds:o.length>0?o:null,fileUploadId:a.fileUploadId??null}});return oe(t.portaria_doorManCreateVisitor)},async createResident(a){const e=await p(Ve,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:3e4,variables:{condoWorkspaceId:a.condoWorkspaceId,privateUnitLinkId:a.privateUnitLinkId,firstName:a.firstName,lastName:a.lastName??null,email:a.email??null,phoneNumber:a.phoneNumber??null,localClient:a.localClient,fileUploadId:a.fileUploadId??null,originalFileUploadId:a.originalFileUploadId??null}});return re(e.portaria_doorManCreateResident)},async createVehicle(a){const e=await p(Be,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:3e4,variables:{condoWorkspaceId:a.condoWorkspaceId,privateUnitLinkId:a.privateUnitLinkId,plate:a.plate,brand:a.brand??null,model:a.model??null,color:a.color??null,vehicleType:a.vehicleType??null,year:a.year??null,workspaceClientId:a.workspaceClientId??null}});return pe(e.portaria_doorManCreateVehicle)},async lookupVehicleByPlate(a){const e=await p(Ge,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:15e3,variables:{condoWorkspaceId:a.condoWorkspaceId,plate:a.plate}});return ue(e.portaria_doorManLookupVehicleByPlate)},async transferVehicle(a){const e=await p(qe,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:3e4,variables:{condoWorkspaceId:a.condoWorkspaceId,vehicleId:a.vehicleId,privateUnitLinkId:a.privateUnitLinkId,workspaceClientId:a.workspaceClientId??null}});return Ie(e.portaria_doorManTransferVehicle)},async setClientRecognition(a){const e=await p(Je,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:3e4,variables:{condoWorkspaceId:a.condoWorkspaceId,workspaceClientId:a.workspaceClientId,fileUploadId:a.fileUploadId,originalFileUploadId:a.originalFileUploadId??null}});return le(e.portaria_doorManSetClientRecognition)},async mintPhotoUploadSession(a){const e=await p(xe,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:2e4,variables:{condoWorkspaceId:a.condoWorkspaceId,workspaceClientId:a.workspaceClientId,ttlMinutes:a.ttlMinutes??15,sessionWorkspaceId:a.sessionWorkspaceId??null}});return ce(e.portaria_doorManMintPhotoUploadSession)},async getPhotoUploadSession(a){const e=await p(Fe,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:15e3,variables:{condoWorkspaceId:a.condoWorkspaceId,workspaceClientId:a.workspaceClientId}});return de(e.portaria_doorManGetPhotoUploadSession)},async listCameras(a){const e=await p(Ke,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId}});return Xe(e.portaria_doorManListCameras)},async getDeskLayout(a){const e=await p(ze,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId,forEdit:a.forEdit??!1}});return P(e.portaria_doorManGetDeskLayout)},async setDeskLayout(a){const e=await p(Ye,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:3e4,variables:{condoWorkspaceId:a.condoWorkspaceId,layout:a.layout}});return P(e.portaria_doorManSetDeskLayout)},async listPrivateUnitCards(a){const e=await p($e,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId,privateUnitLinkId:a.privateUnitLinkId,kind:a.kind}});return L(e.portaria_doorManListPrivateUnitCards)},async upsertPrivateUnitCard(a){const e=await p(Se,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:3e4,variables:{condoWorkspaceId:a.condoWorkspaceId,privateUnitLinkId:a.privateUnitLinkId,id:a.id??null,kind:a.kind,title:a.title??null,subtitle:a.subtitle??null,body:a.body??null,expiresAt:a.expiresAt??null,attachmentsJson:JSON.stringify(a.attachments??[])}});return X(e.portaria_doorManUpsertPrivateUnitCard)},async deletePrivateUnitCard(a){const e=await p(Me,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId,cardId:a.cardId}});return A(e.portaria_doorManDeletePrivateUnitCard)},async reorderPrivateUnitCards(a){const e=await p(Le,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId,privateUnitLinkId:a.privateUnitLinkId,cardIds:a.cardIds}});return L(e.portaria_doorManReorderPrivateUnitCards)},async listPrivateUnitCardComments(a){const e=await p(Ue,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId,cardId:a.cardId}});return Q(e.portaria_doorManListPrivateUnitCardComments)},async addPrivateUnitCardComment(a){const e=await p(Pe,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId,cardId:a.cardId,body:a.body}});return A(e.portaria_doorManAddPrivateUnitCardComment)},async deletePrivateUnitCardComment(a){const e=await p(We,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId,commentId:a.commentId}});return A(e.portaria_doorManDeletePrivateUnitCardComment)},async togglePrivateUnitCardAck(a){const e=await p(be,{endpoint:u.hailaJavaGraphqlEndpoint,timeoutMs:25e3,variables:{condoWorkspaceId:a.condoWorkspaceId,cardId:a.cardId}});return Z(e.portaria_doorManTogglePrivateUnitCardAck)}};export{$ as P,aa as a,ra as b,oa as c,E as d,ia as e,na as f,sa as g,ea as h,ta as m,ca as p};
