import{G as s}from"./index-BToaRPBw.js";const l=`
  query GetData($selectedworkspace: uuid!, $senderworkspace: uuid!, $senderId: UUID!) {
    __typename
    getavailableareasbyworkspaceandsenderjson(
      args: { selectedworkspace: $selectedworkspace, senderworkspace: $senderworkspace }
    ) {
      __typename
      json
    }
    getavailablecategoriesbyworkspacesenderjson(
      args: { selectedworkspace: $selectedworkspace, senderworkspace: $senderworkspace }
    ) {
      __typename
      json
    }
    workspaceById(id: $senderId) {
      __typename
      id
      legalName
      lastName
      type
      firstName
      brandingName
      logoPath
      coverPhoto {
        __typename
        id
        url
      }
    }
  }
`,u=`
  query GetDurations($workspaceId: uuid!, $categoryId: uuid, $areaId: uuid) {
    __typename
    getspecificdurationsbyworkspacesenderjson(
      args: {
        selectedworkspace: $workspaceId
        selectedcategoryid: $categoryId
        selectedareaid: $areaId
      }
    ) {
      __typename
      json
    }
  }
`,p=`
  query GetDayStatus($input: getspecificdurationstatusbyperiod_args!) {
    __typename
    getspecificdurationstatusbyperiod(args: $input) {
      __typename
      json
    }
  }
`,g=`
  query GetTimeSlots($input: getavailabletimeslotsbydayjson_args!) {
    __typename
    getavailabletimeslotsbydayjson(args: $input) {
      __typename
      json
    }
  }
`,y=`
  query AreaReservationByPeriod($areaId: UUID!, $startDate: DateTime!, $endDate: DateTime!) {
    __typename
    areaReservationByPeriod(areaId: $areaId, startDate: $startDate, endDate: $endDate) {
      __typename
      id
    }
  }
`;function d(e){if(typeof e!="string")return e;const t=e.trim();if(!t.startsWith("[")&&!t.startsWith("{"))return null;try{return JSON.parse(t)}catch{return null}}function i(e){if(!Array.isArray(e)||e.length===0)return null;const t=e[0];return!t||typeof t!="object"?null:d(t.json)}function n(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:null}function o(e){return Array.isArray(e)?e.map(t=>n(t)??n(d(t))).filter(t=>!!t):[]}function m(e){return o(i(e)).map(t=>({id:String(t.id??""),name:String(t.name??""),areaHierarchyText:String(t.areaHierarchyText??"")}))}function f(e){return o(i(e)).map(t=>({id:String(t.id??""),name:String(t.name??""),description:String(t.description??"")}))}function I(e){return o(i(e)).map(t=>({id:String(t.id??""),duration:String(t.duration??"")}))}function S(e){return o(i(e)).map(t=>({day:String(t.day??""),status:String(t.status??"")}))}function A(e){if(!Array.isArray(e))return[];const t=[];for(const a of e){const c=n(a);if(!c)continue;const r=n(c.json)??n(d(c.json));r&&t.push({start:String(r.start??""),end:String(r.end??""),available:r.available===!0,id:r.id==null?null:String(r.id),name:r.name==null?null:String(r.name),areaHierarchyText:r.areaHierarchyText==null?null:String(r.areaHierarchyText)})}return t}function _(e){if(!Array.isArray(e)||e.length===0)return null;const t=n(e[0]);if(!t)return null;const a=n(t.coverPhoto);return{id:String(t.id??""),legalName:String(t.legalName??""),brandingName:String(t.brandingName??""),logoPath:t.logoPath==null?null:String(t.logoPath),coverPhoto:a?{id:String(a.id??""),url:String(a.url??"")}:null}}function D(e){return{areas:m(e.getavailableareasbyworkspaceandsenderjson),categories:f(e.getavailablecategoriesbyworkspacesenderjson),workspace:_(e.workspaceById)}}const b={async getAvailableAreasAndCategories(e){const t=await s(l,{senderworkspace:e.selectedWorkspaceId,selectedworkspace:e.sessionWorkspaceId,senderId:e.selectedWorkspaceId});return D(t)},async getSpecificDurations(e){const t=await s(u,{workspaceId:e.workspaceId,categoryId:e.categoryId??null,areaId:e.areaId??null});return I(t.getspecificdurationsbyworkspacesenderjson)},async getDayStatusByPeriod(e){const t=await s(p,{input:{selectedareaid:e.selectedAreaId??null,selectedcategoryid:e.selectedCategoryId??null,selectedstartdate:e.selectedStartDate,selectedenddate:e.selectedEndDate,selectedspecificdurationid:e.selectedSpecificDurationId}});return S(t.getspecificdurationstatusbyperiod)},async getAvailableTimeSlotsByDay(e){const t={selectedworkspace:e.sessionWorkspaceId,selecteddate:e.selectedDate,selectedspecificdurationid:e.selectedSpecificDurationId};e.selectedAreaId&&(t.selectedareaid=e.selectedAreaId),e.selectedCategoryId&&(t.selectedcategoryid=e.selectedCategoryId);const a=await s(g,{input:t});return A(a.getavailabletimeslotsbydayjson)},async checkAreaReservationByPeriod(e){const a=(await s(y,{areaId:e.areaId,startDate:e.startDate,endDate:e.endDate})).areaReservationByPeriod;return Array.isArray(a)?a.length===0:!0}};function h(e){return!!(e&&e.areas.length>0)}function $(e){return!!(e&&e.categories.length>0)}function w(e){return!!(e&&e.categories.length===1)}function T(e){return!!(e&&e.categories.length>1)}function j(e,t=0,a=0){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),t,a,0,0).toISOString()}export{b as a,h as b,$ as c,j as d,w as e,T as f};
