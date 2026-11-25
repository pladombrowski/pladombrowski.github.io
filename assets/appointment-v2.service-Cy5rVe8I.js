import{ae as I,T as y,S as u,$ as g}from"./index-BG7RJgS9.js";const i={endpoint:y.hailaJavaGraphqlEndpoint,timeoutMs:3e4},S=`
  query AppointmentV2Areas(
    $selectedWorkspaceId: String!
    $sessionWorkspaceId: String!
    $areaCategoryId: String
  ) {
    prod_appointment_areas_json(
      p_selected_workspace_id: $selectedWorkspaceId
      p_session_workspace_id: $sessionWorkspaceId
      p_area_category_id: $areaCategoryId
    ) {
      json
    }
  }
`,N=`
  query AppointmentV2Durations($areaId: String!, $sessionWorkspaceId: String!) {
    prod_appointment_durations_json(
      p_area_id: $areaId
      p_session_workspace_id: $sessionWorkspaceId
    ) {
      json
    }
  }
`,$=`
  query AppointmentV2Slots(
    $areaId: String!
    $date: String!
    $durationId: String!
    $sessionWorkspaceId: String!
  ) {
    prod_appointment_slots_json(
      p_area_id: $areaId
      p_date: $date
      p_duration_id: $durationId
      p_session_workspace_id: $sessionWorkspaceId
    ) {
      json
    }
  }
`,O=`
  query AppointmentV2Days(
    $areaId: String!
    $startDate: String!
    $endDate: String!
    $durationId: String!
    $sessionWorkspaceId: String!
  ) {
    prod_appointment_days_json(
      p_area_id: $areaId
      p_start_date: $startDate
      p_end_date: $endDate
      p_duration_id: $durationId
      p_session_workspace_id: $sessionWorkspaceId
    ) {
      json
    }
  }
`,k=`
  mutation AppointmentV2Book(
    $areaId: String!
    $durationId: String!
    $startsAt: String!
    $sessionWorkspaceId: String!
  ) {
    prod_appointment_book_json(
      p_area_id: $areaId
      p_duration_id: $durationId
      p_starts_at: $startsAt
      p_session_workspace_id: $sessionWorkspaceId
    ) {
      json
    }
  }
`,E=`
  mutation AppointmentV2Cancel($appointmentId: String!) {
    prod_appointment_cancel_json(p_appointment_id: $appointmentId) {
      json
    }
  }
`,W="appointmentsV2.errors.unknown",T=["APPOINTMENT_NOT_ACTIVE","DURATION_NOT_OFFERED","CANCEL_WINDOW_CLOSED","SLOT_OUTSIDE_WINDOW","AREA_NOT_BOOKABLE","NOT_AUTHORIZED","CANCEL_FAILED","BOOKING_FAILED","INVALID_RANGE","INVALID_INPUT","SLOT_TAKEN","TOO_SOON","TOO_FAR","BLACKOUT"];function h(t){return t==="UNKNOWN"?W:`appointmentsV2.errors.${t.toLowerCase()}`}function A(t){const n=t??"";for(const r of T)if(n.includes(r))return r;return n.includes("42501")||/x-hasura-user-id/i.test(n)?"NOT_AUTHORIZED":"UNKNOWN"}class _ extends Error{code;i18nKey;constructor(n,r){super(r??n),this.name="AppointmentV2Error",this.code=n,this.i18nKey=h(n)}}function p(t){if(t instanceof _)return t;const n=g(t,"");return new _(A(n),n)}function o(t){return t&&typeof t=="object"&&!Array.isArray(t)?t:null}function c(t){return Array.isArray(t)?t:[]}function e(t){return typeof t=="string"?t.trim()===""?null:t:typeof t=="number"&&Number.isFinite(t)?String(t):null}function m(t){if(typeof t=="number"&&Number.isFinite(t))return t;if(typeof t=="string"&&t.trim()!==""){const n=Number(t);if(Number.isFinite(n))return n}return null}function l(t){if(typeof t!="string")return t;const n=t.trim();if(!n.startsWith("[")&&!n.startsWith("{"))return null;try{return JSON.parse(n)}catch{return null}}function D(t){if(Array.isArray(t)){if(t.length===0)return null;const r=o(t[0]);return r?o(l(r.json)):null}const n=o(t);return n?o(l(n.json))??n:null}function d(t,n){const r=D(t);if(!r||r.success!==!0){const s=c(r?.errorMessages).map(f=>String(f)).filter(Boolean)[0]??`${n} request failed`;throw new _(A(s),s)}return o(r.payload)??{}}function F(t){const n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return`${n}-${r}-${a}`}function V(t){const n=o(t);if(!n)return null;const r=e(n.areaId);return r?{areaId:r,name:e(n.name)??"",areaHierarchyText:e(n.areaHierarchyText),categoryId:e(n.categoryId),categoryName:e(n.categoryName)}:null}function w(t){const n=o(t);if(!n)return null;const r=e(n.id);return r?{id:r,name:e(n.name)??"",description:e(n.description)}:null}function C(t){const n=o(t)??{};return{areas:c(n.areas).map(V).filter(r=>r!==null),categories:c(n.categories).map(w).filter(r=>r!==null)}}function j(t){const n=o(t)??{};return c(n.durations).map(r=>{const a=o(r);if(!a)return null;const s=e(a.id);return s?{id:s,name:e(a.name)??"",durationMinutes:m(a.durationMinutes)??0,description:e(a.description)}:null}).filter(r=>r!==null)}function R(t){const n=o(t)??{};return c(n.days).map(r=>{const a=o(r);if(!a)return null;const s=e(a.day);return s?{day:s,total:m(a.total)??0,available:m(a.available)??0,status:e(a.status)??"NONE"}:null}).filter(r=>r!==null)}function L(t){const n=o(t)??{};return c(n.slots).map(r=>{const a=o(r);if(!a)return null;const s=e(a.startsAt);return s?{startsAt:s,endsAt:e(a.endsAt)??"",available:a.available===!0,reason:e(a.reason)}:null}).filter(r=>r!==null)}function b(t){const n=o(t)??{},r=e(n.appointmentId);if(!r)throw new _("UNKNOWN","booking without id");return{appointmentId:r,workspaceLinkId:e(n.workspaceLinkId)??"",startsAt:e(n.startsAt)??"",endsAt:e(n.endsAt)??""}}function U(t){const n=o(t)??{};return{appointmentId:e(n.appointmentId)??"",status:e(n.status)??""}}const M={async appointmentAreas(t){try{const n=await u(S,{selectedWorkspaceId:t.selectedWorkspaceId,sessionWorkspaceId:t.sessionWorkspaceId,areaCategoryId:t.areaCategoryId??null},i);return C(d(n.prod_appointment_areas_json,"appointment areas"))}catch(n){throw p(n)}},async appointmentDurations(t){try{const n=await u(N,{areaId:t.areaId,sessionWorkspaceId:t.sessionWorkspaceId},i);return j(d(n.prod_appointment_durations_json,"appointment durations"))}catch(n){throw p(n)}},async appointmentSlots(t){try{const n=await u($,{areaId:t.areaId,date:t.date,durationId:t.durationId,sessionWorkspaceId:t.sessionWorkspaceId},i);return L(d(n.prod_appointment_slots_json,"appointment slots"))}catch(n){throw p(n)}},async appointmentDaysStatus(t){try{const n=await u(O,{areaId:t.areaId,startDate:t.startDate,endDate:t.endDate,durationId:t.durationId,sessionWorkspaceId:t.sessionWorkspaceId},i);return R(d(n.prod_appointment_days_json,"appointment days"))}catch(n){throw p(n)}},async appointmentBook(t){try{const n=await I(k,{areaId:t.areaId,durationId:t.durationId,startsAt:t.startsAt,sessionWorkspaceId:t.sessionWorkspaceId},i);return b(d(n.prod_appointment_book_json,"appointment book"))}catch(n){throw p(n)}},async appointmentCancel(t){try{const n=await I(E,{appointmentId:t.appointmentId},i);return U(d(n.prod_appointment_cancel_json,"appointment cancel"))}catch(n){throw p(n)}}};export{F as a,M as b,p as t};
