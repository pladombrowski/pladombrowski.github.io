import{a0 as w,T as E,ap as h,S as T}from"./index-KU9Zrkrq.js";import{b as s,c as p,d as u,e as o}from"./smart-auth.service-B3Px7nQI.js";const I={endpoint:E.hailaJavaGraphqlEndpoint,timeoutMs:4e4},g=`
  query SmartAccessOptions($workspaceId: String) {
    smart_accessOptions(workspaceId: $workspaceId)
  }
`,R=`
  query SmartInviteList($workspaceId: String) {
    smart_inviteList(workspaceId: $workspaceId)
  }
`,f=`
  mutation SmartInviteCreate($input: Any) {
    smart_inviteCreate(input: $input)
  }
`,y=`
  mutation SmartInviteUpdate($input: Any) {
    smart_inviteUpdate(input: $input)
  }
`,U=`
  mutation SmartInviteSetStatus($inviteLinkId: String, $status: String) {
    smart_inviteSetStatus(inviteLinkId: $inviteLinkId, status: $status)
  }
`,P=`
  query SmartInvitePending($workspaceId: String) {
    smart_invitePending(workspaceId: $workspaceId)
  }
`,F=`
  mutation SmartInviteApprove($workspaceLinkId: String) {
    smart_inviteApprove(workspaceLinkId: $workspaceLinkId)
  }
`,D=`
  mutation SmartInviteReject($workspaceLinkId: String) {
    smart_inviteReject(workspaceLinkId: $workspaceLinkId)
  }
`,N=`
  query SmartInviteGetPublic($inviteLinkId: String) {
    smart_inviteGetPublic(inviteLinkId: $inviteLinkId)
  }
`,M=`
  mutation SmartInviteRegister($input: Any) {
    smart_inviteRegister(input: $input)
  }
`,H=`
  query SmartPassActivity($workspaceLinkId: String) {
    smart_passActivity(workspaceLinkId: $workspaceLinkId)
  }
`;function m(e){return Array.isArray(e)?e.map(t=>String(t??"").trim()).filter(Boolean):[]}function v(e,t){return typeof e=="boolean"?e:t}function a(e){return String(e??"").trim()}function S(e){const t=u(e);if(!t)return null;const r=a(t.url);return r?{url:r,message:o(t.message),whatsappUrl:o(t.whatsappUrl),uploadPath:o(t.uploadPath),inviteLinkId:o(t.inviteLinkId)}:null}function V(e){const t=u(e)??{},r=a(t.approvalMode).toUpperCase();return{name:a(t.name),greeting:a(t.greeting),confirmationInstructions:a(t.confirmationInstructions),approvalMode:r==="MANAGER_APPROVED"?"MANAGER_APPROVED":"PRE_APPROVED",durationPreset:a(t.durationPreset)||"NOW_24H",createHailaAccount:t.createHailaAccount===!0,accessPack:o(t.accessPack),areaIds:m(t.areaIds),passageIds:m(t.passageIds),allowFilePhoto:t.allowFilePhoto===!0,privacyFlag:t.privacyFlag===!0,topBannerFileId:o(t.topBannerFileId),useQrCode:v(t.useQrCode,!0),hasRemoteOpen:v(t.hasRemoteOpen,!0),requireUserLocationRemoteOpen:t.requireUserLocationRemoteOpen===!0}}function _(e){return{name:e.name,greeting:e.greeting,confirmationInstructions:e.confirmationInstructions,approvalMode:e.approvalMode,durationPreset:e.durationPreset,createHailaAccount:e.createHailaAccount,allowFilePhoto:e.allowFilePhoto,privacyFlag:e.privacyFlag,topBannerFileId:e.topBannerFileId??"",...e.accessPack?{accessPack:e.accessPack}:{},areaIds:e.areaIds,passageIds:e.passageIds,useQrCode:e.useQrCode,hasRemoteOpen:e.hasRemoteOpen,requireUserLocationRemoteOpen:e.requireUserLocationRemoteOpen}}function L(e){const t=u(e);if(!t)return null;const r=a(t.id)||a(t.inviteLinkId);return r?{id:r,status:a(t.status).toUpperCase()||"ACTIVE",config:V(t.config??t),share:S(t.share),startDate:o(t.startDate),endDate:o(t.endDate)}:null}function C(e){const t=u(e);if(!t)return null;const r=a(t.id);return r?{id:r,status:a(t.status).toUpperCase(),firstName:a(t.firstName),lastName:a(t.lastName),email:o(t.email),phone:o(t.phone),inviteLinkId:o(t.inviteLinkId??t.invite_link_id)}:null}function O(e){const t=u(e)??{},r=Array.isArray(t.packs)?t.packs:[],n=Array.isArray(t.areas)?t.areas:[],l=r.map(i=>u(i)).filter(i=>i!==null).map(i=>({id:a(i.id),label:a(i.label)||a(i.id),areaIds:m(i.areaIds),passageIds:m(i.passageIds)})).filter(i=>i.id.length>0),d=n.map(i=>u(i)).filter(i=>i!==null).map(i=>({areaId:a(i.area_id??i.areaId),areaName:a(i.area_name??i.areaName),passageId:a(i.passage_id??i.passageId),passageName:a(i.passage_name??i.passageName)})).filter(i=>i.passageId.length>0);return{packs:l,areas:d}}function $(e){const t=p(e);if(!t.success||!t.payload)throw new s("SMART_AUTH_QUERY_FAILED",t.errors[0]??null);const r=t.payload;return{inviteLinkId:a(r.inviteLinkId),name:a(r.name),greeting:a(r.greeting),confirmationInstructions:a(r.confirmationInstructions),approvalMode:a(r.approvalMode)||"PRE_APPROVED",durationPreset:a(r.durationPreset)||"NOW_24H",createHailaAccount:r.createHailaAccount===!0,allowFilePhoto:r.allowFilePhoto===!0,privacyFlag:r.privacyFlag===!0,senderName:a(r.senderName),workspaceId:a(r.workspaceId),topBannerFileId:o(r.topBannerFileId),topBannerUrl:o(r.topBannerUrl)}}function b(e){const t=p(e);if(!t.success||!t.payload)throw new s("SMART_AUTH_SAVE_FAILED",t.errors[0]??null);const r=t.payload,n=u(r.duration);return{inviteLinkId:a(r.inviteLinkId),workspaceLinkId:a(r.workspaceLinkId),workspaceClientId:a(r.workspaceClientId),status:a(r.status),approvalMode:a(r.approvalMode),confirmationInstructions:a(r.confirmationInstructions),createHailaAccount:r.createHailaAccount===!0,recipientWorkspaceId:o(r.recipientWorkspaceId),duration:n?{startDate:a(n.startDate),endDate:o(n.endDate)}:null,share:S(r.share)}}function Q(e){const t=p(e);if(!t.success||!t.payload)return null;const r=t.payload,n=typeof r.progress=="number"?r.progress:Number(r.progress);return{workspaceLinkId:a(r.workspaceLinkId),bucket:a(r.bucket)||"active",phase:a(r.phase)||"active",message:a(r.message),progress:Number.isFinite(n)?Math.min(1,Math.max(0,n)):.2,deliveredDevices:Number.parseInt(String(r.deliveredDevices??0),10)||0,totalDevices:Number.parseInt(String(r.totalDevices??0),10)||0,complete:r.complete===!0}}function k(e){const t=p(e);if(!t.success||!t.payload)throw new s("SMART_AUTH_SAVE_FAILED",t.errors[0]??null);const r=L(t.payload);if(!r)throw new s("SMART_AUTH_SAVE_FAILED");return r}function A(e){const t=p(e);if(!t.success)throw new s("SMART_AUTH_SAVE_FAILED",t.errors[0]??null)}async function c(e,t,r,n=!1){try{return(n?await h(e,t,I):await T(e,t,I))[r]}catch(l){const d=l instanceof Error?l.message:null;throw new s("SMART_AUTH_QUERY_FAILED",d)}}const Y={async accessOptions(e){const t=e.trim();if(!t)throw new s("SMART_AUTH_QUERY_FAILED","workspaceId");const r=await c(g,{workspaceId:t},"smart_accessOptions"),n=p(r);if(!n.success)throw new s("SMART_AUTH_QUERY_FAILED",n.errors[0]??null);return O(n.payload)},async list(e){const t=e.trim();if(!t)throw new s("SMART_AUTH_QUERY_FAILED","workspaceId");const r=await c(R,{workspaceId:t},"smart_inviteList"),n=p(r);if(!n.success)throw new s("SMART_AUTH_QUERY_FAILED",n.errors[0]??null);return(Array.isArray(n.payload?.items)?n.payload.items:[]).map(L).filter(d=>d!==null)},async create(e){const t=e.workspaceId.trim();if(!t)throw new s("SMART_AUTH_SAVE_FAILED","workspaceId");const r=await c(f,{input:{workspaceId:t,..._(e.config)}},"smart_inviteCreate",!0);return k(r)},async update(e){const t=e.inviteLinkId.trim();if(!t)throw new s("SMART_AUTH_SAVE_FAILED","inviteLinkId");const r=await c(y,{input:{inviteLinkId:t,..._(e.config)}},"smart_inviteUpdate",!0);return k(r)},async setStatus(e,t){const r=e.trim();if(!r)throw new s("SMART_AUTH_SAVE_FAILED","inviteLinkId");const n=await c(U,{inviteLinkId:r,status:t},"smart_inviteSetStatus",!0);A(n)},async pending(e){const t=e.trim();if(!t)throw new s("SMART_AUTH_QUERY_FAILED","workspaceId");const r=await c(P,{workspaceId:t},"smart_invitePending"),n=p(r);if(!n.success)throw new s("SMART_AUTH_QUERY_FAILED",n.errors[0]??null);return(Array.isArray(n.payload?.items)?n.payload.items:[]).map(C).filter(d=>d!==null)},async approve(e){const t=e.trim();if(!t)throw new s("SMART_AUTH_SAVE_FAILED","workspaceLinkId");const r=await c(F,{workspaceLinkId:t},"smart_inviteApprove",!0);A(r)},async reject(e){const t=e.trim();if(!t)throw new s("SMART_AUTH_SAVE_FAILED","workspaceLinkId");const r=await c(D,{workspaceLinkId:t},"smart_inviteReject",!0);A(r)},async getPublic(e){const t=e.trim();if(!t)throw new s("SMART_AUTH_QUERY_FAILED","inviteLinkId");try{const r=await w(N,{inviteLinkId:t},I);return $(r.smart_inviteGetPublic)}catch(r){if(r instanceof s)throw r;const n=r instanceof Error?r.message:null;throw new s("SMART_AUTH_QUERY_FAILED",n)}},async register(e){const t=await c(M,{input:{inviteLinkId:e.inviteLinkId.trim(),firstName:e.firstName.trim(),lastName:e.lastName.trim(),fileUploadId:e.fileUploadId.trim(),email:e.email?.trim()||null,phone:e.phone?.trim()||null,visitorKind:e.visitorKind?.trim()||null,observations:e.observations?.trim()||null,privateUnitLinkId:e.privateUnitLinkId?.trim()||null,authorizerWorkspaceClientId:e.authorizerWorkspaceClientId?.trim()||null}},"smart_inviteRegister",!0);return b(t)},async passActivity(e){const t=e.trim();if(!t)return null;let r;try{r=(await w(H,{workspaceLinkId:t},I)).smart_passActivity}catch{return null}return Q(r)}};export{Y as s};
