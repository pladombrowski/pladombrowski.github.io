import{ae as y,S as l,af as $,aC as _,T as P}from"./index-Dczi3G9i.js";const E=Array.from({length:7},(e,t)=>({areaId:null,dayWeek:String(t+1),startHour:"00:00",endHour:"23:59"})),U=`
  query GetAreasByWorkspace(
    $workspaceId: uuid
    $likeParam: String
    $limit: Int
    $permission: _varchar
    $relatedAreaType: String
    $deviceFeatures: _varchar
  ) {
    __typename
    getareasbyworkspacejson(
      args: {
        selectedpermissions: $permission
        selectedworkspaceid: $workspaceId
        selectedlike: $likeParam
        selectedlimit: $limit
        selectedtargetlinktype: $relatedAreaType
        selectedfeatures: $deviceFeatures
      }
    ) {
      __typename
      json
    }
  }
`,b=`
  query GetAreasByWorkspace(
    $workspaceId: String!
    $likeParam: String
    $limit: Int
    $permission: Any
    $relatedAreaType: String
    $deviceFeatures: Any
  ) {
    __typename
    prod_getareasbyworkspacejson(
      selectedworkspaceid: $workspaceId
      selectedpermissions: $permission
      selectedlike: $likeParam
      selectedlimit: $limit
      selectedtargetlinktype: $relatedAreaType
      selectedfeatures: $deviceFeatures
    ) {
      __typename
      json
    }
  }
`,D=`
  query Getareasbyworkspaceidwithoutfiltersjson($workspaceId: uuid!) {
    __typename
    getareasbyworkspaceidwithoutfiltersjson(args: { selectedworkspaceid: $workspaceId }) {
      __typename
      json
    }
  }
`,f={endpoint:P.hailaJavaGraphqlEndpoint},N=`
  mutation Getareasbyworkspaceidwithoutfiltersjson($workspaceId: String!) {
    __typename
    prod_getareasbyworkspaceidwithoutfiltersjson(selectedworkspaceid: $workspaceId) {
      __typename
      json
    }
  }
`,R=`
  query Area($areaId: UUID!) {
    __typename
    areaFull(id: $areaId) {
      __typename
      json
    }
  }
`,M=`
  query GetTypesAndCategories($workspaceId: UUID!) {
    __typename
    area_type: areaTypeList {
      __typename
      id
      name
    }
    area_category: areaCategoryListByWorkspaceId(workspaceId: $workspaceId) {
      __typename
      id
      name
      description
      workspaceId
    }
    area_occupation_formats: areaOccupationFormats {
      __typename
      id
      name
    }
  }
`,w=`
  mutation CreateAreaCategory($input: SetAreaCategoryInput!) {
    __typename
    setAreaCategory(input: $input) {
      __typename
      success
      errorMessages
      payload {
        __typename
        id
      }
    }
  }
`,F=`
  mutation SetArea(
    $areaId: UUID
    $name: String!
    $abreviation: String
    $description: String!
    $maxOccupants: Int!
    $mainCoverPhoto: String
    $floorplanPhoto: String
    $photos: [FileUploadInput!]
    $cep: String!
    $address: String!
    $number: String!
    $complement: String!
    $district: String
    $city: String!
    $state: String!
    $areaTypeId: UUID!
    $areaCategoryId: UUID!
    $areaMasterId: UUID
    $workspaceId: UUID!
    $userId: UUID!
    $areaWeekDaysInput: [AreaWeekDayInputDtoInput!]
    $areaMasterAddressSync: Boolean!
    $areaMasterWeekDaySync: Boolean!
    $occupationFormatId: UUID!
  ) {
    __typename
    setArea(
      id: $areaId
      input: {
        address: $address
        nameAbbreviation: $abreviation
        description: $description
        addressComplement: $complement
        addressNumber: $number
        areaCategoryId: $areaCategoryId
        areaMasterAddressSync: $areaMasterAddressSync
        areaMasterWeekDaySync: $areaMasterWeekDaySync
        areaTypeId: $areaTypeId
        capacity: $maxOccupants
        city: $city
        district: $district
        creatorUserId: $userId
        name: $name
        quantity: 1
        state: $state
        workspaceId: $workspaceId
        zipcode: $cep
        areaWeekDaysInput: $areaWeekDaysInput
        areaParentId: $areaMasterId
        floorplanPath: $floorplanPhoto
        mainPhotoPath: $mainCoverPhoto
        fileUploads: $photos
        areaOccupationFormatId: $occupationFormatId
      }
    ) {
      __typename
      success
      errorMessages
      payload {
        __typename
        id
      }
    }
  }
`,W=`
  mutation SetAreaFloorplan(
    $areaId: UUID
    $name: String!
    $abreviation: String
    $description: String!
    $maxOccupants: Int!
    $mainCoverPhoto: String
    $floorplanPhoto: String
    $photos: [FileUploadInput!]
    $cep: String!
    $address: String!
    $number: String!
    $complement: String!
    $district: String
    $city: String!
    $state: String!
    $areaTypeId: UUID!
    $areaCategoryId: UUID!
    $workspaceId: UUID!
    $userId: UUID!
    $areaWeekDaysInput: [AreaWeekDayInputDtoInput!]
    $occupationFormatId: UUID!
  ) {
    __typename
    setArea(
      id: $areaId
      input: {
        address: $address
        nameAbbreviation: $abreviation
        description: $description
        addressComplement: $complement
        addressNumber: $number
        areaCategoryId: $areaCategoryId
        areaMasterAddressSync: false
        areaMasterWeekDaySync: false
        areaTypeId: $areaTypeId
        capacity: $maxOccupants
        city: $city
        district: $district
        creatorUserId: $userId
        name: $name
        quantity: 1
        state: $state
        workspaceId: $workspaceId
        zipcode: $cep
        areaWeekDaysInput: $areaWeekDaysInput
        floorplanPath: $floorplanPhoto
        mainPhotoPath: $mainCoverPhoto
        fileUploads: $photos
        areaOccupationFormatId: $occupationFormatId
      }
    ) {
      __typename
      success
      errorMessages
      payload {
        __typename
        id
      }
    }
  }
`,v=`
  mutation DeleteArea($areaId: UUID!) {
    deleteArea(id: $areaId) {
      success
      errorMessages
    }
  }
`,O=`
  query GetPassagesByArea($areaId: UUID!) {
    __typename
    areaPassages(areaId: $areaId) {
      __typename
      id
      name
      lat
      lng
      createdAt
      updatedAt
      category: passageCategory {
        __typename
        id
        name
        description
      }
      type: passageType {
        __typename
        id
        name
        description
      }
      passageCategoryId
      workspaceId
      areaId
      passageParentId
    }
  }
`,j=`
  query GetTypesCategories($workspaceId: UUID!) {
    workspacePassageAccess(workspaceId: $workspaceId) {
      passageCategories {
        id
        name
        workspaceId
        description
        createdAt
        updatedAt
      }
      passageTypes {
        id
        name
        description
        createdAt
        updatedAt
      }
    }
  }
`,G=`
  mutation SetPassage(
    $id: UUID
    $areaId: UUID!
    $workspaceId: UUID!
    $passageCategoryId: UUID!
    $passageTypeId: UUID!
    $name: String!
  ) {
    setPassage(
      input: {
        id: $id
        name: $name
        passageTypeId: $passageTypeId
        passageCategoryId: $passageCategoryId
        workspaceId: $workspaceId
        areaId: $areaId
      }
    ) {
      success
      errorMessages
      payload {
        id
        name
        lat
        lng
        createdAt
        updatedAt
        passageTypeId
        passageCategoryId
        workspaceId
        areaId
        passageParentId
      }
    }
  }
`,B=`
  mutation CreateCategory($id: UUID, $name: String!, $workspaceId: UUID!, $description: String!) {
    setPassageCategory(
      graphqlInput: { id: $id, name: $name, workspaceId: $workspaceId, description: $description }
    ) {
      success
      errorMessages
      payload {
        id
        name
        workspaceId
        description
        createdAt
        updatedAt
      }
    }
  }
`,L=`
  mutation DeletePassage($passageId: UUID!) {
    deletePassage(id: $passageId) {
      success
      errorMessages
    }
  }
`,q=`
  query GetAreaSettings($areaId: UUID!) {
    __typename
    areaSettings(id: $areaId) {
      __typename
      success
      payload {
        __typename
        areaStatus
        settings {
          __typename
          name
          status
        }
      }
    }
    errorMessages
  }
`,H=`
  mutation SetAreaSettings($input: AreaSettingsInput!) {
    __typename
    setAreaSettings(input: $input) {
      __typename
      success
      payload {
        __typename
        areaStatus
        settings {
          __typename
          name
          status
        }
      }
      errorMessages
    }
  }
`,V=`
  query RelatedAreasView($areaId: UUID!, $linkType: String!) {
    __typename
    relatedAreaViews(id: $areaId, linkType: $linkType) {
      __typename
      area {
        __typename
        id
        name
        passages {
          __typename
          id
          name
          areaId
        }
      }
      passageConfigs {
        __typename
        passageId
        name
        areaId
        generateKey
      }
    }
  }
`,z=`
  mutation RelatedAreas(
    $areaId: UUID!
    $inputList: [RelatedAreaPreferenceInput!]!
    $linkType: String!
  ) {
    __typename
    setRelatedAreas(areaId: $areaId, inputList: $inputList, linkType: $linkType) {
      __typename
      success
      payload {
        __typename
        area {
          __typename
          id
        }
        passageConfigs {
          __typename
          passageId
          generateKey
        }
      }
      errorMessages
    }
  }
`;function n(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:null}function p(e){return Array.isArray(e)?e:[]}function a(e,t=""){return typeof e=="string"?e:typeof e=="number"&&Number.isFinite(e)?String(e):t}function g(e){return typeof e=="string"?e:null}function S(e,t=0){if(typeof e=="number"&&Number.isFinite(e))return Math.trunc(e);if(typeof e=="string"&&e.trim()!==""){const r=Number(e);if(Number.isFinite(r))return Math.trunc(r)}return t}function J(e){if(typeof e=="number"&&Number.isFinite(e))return Math.trunc(e);if(typeof e=="string"&&e.trim()!==""){const t=Number(e);if(Number.isFinite(t))return Math.trunc(t)}return null}function k(e){return typeof e=="number"&&Number.isFinite(e)?e:null}function u(e,t=!1){return typeof e=="boolean"?e:t}function C(e){if(typeof e=="string")try{return n(JSON.parse(e))}catch{return null}return n(e)}function m(e,t){const r=n(e);if(!r)throw new Error(t);const o=p(r.errorMessages).map(s=>a(s)).filter(Boolean);if(r.success!==!0)throw new Error(o.length?o.join(`
`):t);return r}function K(e){return{id:String(e.id??""),name:String(e.name??"")}}function x(e){const t=Array.isArray(e.passages)?e.passages:[],o=(Array.isArray(e.areaHierarchy)?e.areaHierarchy:[]).find(d=>!!d&&typeof d=="object"),s=e.areaCategory,i=e.areaType;return{id:String(e.id??""),name:String(e.name??""),workspaceId:e.workspaceId??null,categoryName:s?.name??e.areaCategoryName??null,typeName:i?.name??null,hierarchyName:o?.name??null,areaCategoryId:s?.id??e.areaCategoryId??null,areaTypeId:i?.id??e.areaTypeId??null,capacity:typeof e.capacity=="number"?e.capacity:null,passages:t.filter(d=>!!d&&typeof d=="object").map(K)}}function Y(e){const t=n(e.area_category)??n(e.areaCategory),r=n(e.area_type)??n(e.areaType);return{id:a(e.id),name:a(e.name),nameAbbreviation:a(e.nameAbbreviation),city:a(e.city),state:a(e.state),address:a(e.address),addressNumber:a(e.addressNumber),addressComplement:a(e.addressComplement),district:a(e.district),zipcode:a(e.zipcode),areaCategoryName:a(t?.name)||a(e.areaCategoryName),areaCategoryId:a(e.areaCategoryId)||a(t?.id),areaTypeName:a(r?.name)||a(e.areaTypeName),areaTypeId:a(e.areaTypeId)||a(r?.id),mainPhotoPath:g(e.mainPhotoPath),floorplanPath:g(e.floorplanPath),capacity:J(e.capacity)}}function Q(e){const t=n(e.area_category)??n(e.areaCategory),r=n(e.area_type)??n(e.areaType),o=n(e.areaOccupationFormat)??n(e.area_occupation_format),s=n(e.area),i=p(e.area_week_days).map(c=>n(c)).filter(c=>!!c).map(c=>({dayWeek:a(c.dayWeek),startHour:a(c.startHour,"00:00"),endHour:a(c.endHour,"23:59")})),d=p(e.area_photos).map((c,h)=>{const I=n(c);if(!I)return null;const A=n(I.file_upload)??n(I.fileUpload);return{fileUploadId:a(I.fileUploadId)||a(A?.id),url:a(I.url)||a(A?.url),priorityOrder:S(I.priorityOrder,h)}}).filter(c=>c!==null);return{id:a(e.id),name:a(e.name),nameAbbreviation:a(e.nameAbbreviation),description:a(e.description),zipcode:a(e.zipcode),address:a(e.address),addressNumber:a(e.addressNumber),addressComplement:a(e.addressComplement),district:a(e.district),city:a(e.city),state:a(e.state),capacity:S(e.capacity),workspaceId:a(e.workspaceId),areaCategoryId:a(e.areaCategoryId)||a(t?.id),areaCategoryName:a(t?.name),areaTypeId:a(e.areaTypeId)||a(r?.id),areaTypeName:a(r?.name),occupationFormatId:a(e.areaOccupationFormatId)||a(o?.id),occupationFormatName:a(o?.name),areaParentId:g(e.areaParentId),areaParentName:g(s?.name),mainPhotoPath:g(e.mainPhotoPath),floorplanPath:g(e.floorplanPath),areaMasterAddressSync:u(e.areaMasterAddressSync),areaMasterWeekDaySync:u(e.areaMasterWeekDaySync),weekDays:i,galleryPhotos:d}}function X(e){const t=n(e.category)??n(e.passageCategory),r=n(e.type)??n(e.passageType);return{id:a(e.id),name:a(e.name),lat:k(e.lat),lng:k(e.lng),workspaceId:a(e.workspaceId),areaId:a(e.areaId),passageParentId:g(e.passageParentId),passageCategoryId:a(e.passageCategoryId)||a(t?.id),passageTypeId:a(e.passageTypeId)||a(r?.id),categoryName:a(t?.name),typeName:a(r?.name)}}function Z(e){const t=n(e.area)??{},r=p(t.passages).map(s=>n(s)).filter(s=>!!s).map(s=>({id:a(s.id),name:a(s.name),areaId:a(s.areaId)})),o=p(e.passageConfigs).map(s=>n(s)).filter(s=>!!s).map(s=>({passageId:a(s.passageId),name:a(s.name),areaId:a(s.areaId),generateKey:u(s.generateKey,!0)}));return{areaId:a(t.id),areaName:a(t.name),passages:r,passageConfigs:o}}function T(e){const t=p(e.settings).map(r=>n(r)).filter(r=>!!r).map(r=>({name:a(r.name),status:a(r.status)}));return{areaStatus:a(e.areaStatus,"ACTIVE"),settings:t}}function ee(e){if(!Array.isArray(e)||e.length===0)return[];const t=e[0]?.json,r=C(t);return r?[r]:Array.isArray(t)?t.filter(o=>!!o&&typeof o=="object"):[]}const te={async getAreasByWorkspace(e){const t=$(_,e.mode)==="java",r=await l(t?b:U,{workspaceId:e.workspaceId,likeParam:e.likeParam??"",limit:e.limit??200,permission:e.permission??"{create}",relatedAreaType:e.relatedAreaType===void 0?"authorization":e.relatedAreaType,deviceFeatures:e.deviceFeatures??null},t?{...f,timeoutMs:3e4}:{timeoutMs:3e4}),o=t?r.prod_getareasbyworkspacejson:r.getareasbyworkspacejson;if(!Array.isArray(o)||o.length===0)return[];const s=o[0]?.json;return Array.isArray(s)?s.filter(i=>!!i&&typeof i=="object").map(x).filter(i=>i.id||i.name):[]},async getWorkspaceAreas(e){const t=$(_)==="java",r=await l(t?N:D,{workspaceId:e},{...t?f:{},timeoutMs:3e4}),o=t?r.prod_getareasbyworkspaceidwithoutfiltersjson:r.getareasbyworkspaceidwithoutfiltersjson;return ee(o).map(Y).filter(s=>s.id||s.name)},async getAreaDetails(e){const t=await l(R,{areaId:e}),r=C(n(t.areaFull)?.json);if(!r)throw new Error("Area nao encontrada.");return Q(r)},async getAreaOptions(e){const t=await l(M,{workspaceId:e}),r=(o,s=!1)=>p(o).map(i=>n(i)).filter(i=>!!i).map(i=>({id:a(i.id),name:a(i.name),description:s?a(i.description):""})).sort((i,d)=>i.name.toLowerCase().localeCompare(d.name.toLowerCase()));return{types:r(t.area_type),categories:r(t.area_category,!0),occupationFormats:r(t.area_occupation_formats)}},async createAreaCategory(e){const t=await y(w,{input:{name:e.name.trim(),description:e.description.trim(),workspaceId:e.workspaceId}}),r=m(t.setAreaCategory,"Nao foi possivel criar a categoria."),o=n(r.payload);return a(o?.id)},async saveArea(e){const t=await y(F,{areaId:e.areaId,name:e.name,abreviation:e.abbreviation,description:e.description,maxOccupants:e.capacity,mainCoverPhoto:e.mainPhotoPath,floorplanPhoto:e.floorplanPath,photos:e.galleryPhotos.map((s,i)=>({id:s.fileUploadId,priorityOrder:i})),cep:e.zipcode,address:e.address,number:e.addressNumber,complement:e.addressComplement,district:e.district,city:e.city,state:e.state,areaTypeId:e.areaTypeId,areaCategoryId:e.areaCategoryId,areaMasterId:e.areaMasterId,workspaceId:e.workspaceId,userId:e.userId,areaWeekDaysInput:e.weekDays.map(s=>({areaId:null,dayWeek:s.dayWeek,startHour:s.startHour,endHour:s.endHour})),areaMasterAddressSync:e.areaMasterAddressSync,areaMasterWeekDaySync:e.areaMasterWeekDaySync,occupationFormatId:e.occupationFormatId}),r=m(t.setArea,"Nao foi possivel salvar a area."),o=n(r.payload);return a(o?.id)||e.areaId||""},async updateAreaFloorplan(e){const t=e.area.areaCategoryId.trim();if(!t)throw new Error("Area sem categoria; nao e possivel atualizar a planta.");const r=await y(W,{areaId:e.area.id,name:e.area.name,abreviation:e.area.nameAbbreviation,description:"",maxOccupants:e.area.capacity??0,mainCoverPhoto:e.area.mainPhotoPath,floorplanPhoto:e.floorplanUrl,photos:[],cep:e.area.zipcode.trim()||"00000000",address:e.area.address.trim()||"-",number:e.area.addressNumber.trim()||"0",complement:e.area.addressComplement??"",district:e.area.district,city:e.area.city.trim()||"-",state:e.area.state.trim()||"RS",areaTypeId:"7f8cd27d-5dd4-4d1c-b648-348b5c16c513",areaCategoryId:t,workspaceId:e.workspaceId,userId:e.userId,areaWeekDaysInput:E.map(o=>({...o})),occupationFormatId:"ef5169ae-da3c-41b3-bb1f-70965ce4f1e0"});m(r.setArea,"Nao foi possivel atualizar a planta.")},async deleteArea(e){const t=await y(v,{areaId:e});m(t.deleteArea,"Nao foi possivel remover a area.")},async getAreaPassages(e){const t=await l(O,{areaId:e});return p(t.areaPassages).map(r=>n(r)).filter(r=>!!r).map(X)},async getPassageAccess(e){const t=await l(j,{workspaceId:e}),r=n(t.workspacePassageAccess)??{},o=s=>p(s).map(i=>n(i)).filter(i=>!!i).map(i=>({id:a(i.id),name:a(i.name),description:a(i.description)})).sort((i,d)=>i.name.toLowerCase().localeCompare(d.name.toLowerCase()));return{passageCategories:o(r.passageCategories),passageTypes:o(r.passageTypes)}},async savePassage(e){const t=await y(G,{id:e.id,areaId:e.areaId,workspaceId:e.workspaceId,passageCategoryId:e.passageCategoryId,passageTypeId:e.passageTypeId,name:e.name}),r=m(t.setPassage,"Nao foi possivel salvar o acesso."),o=n(r.payload);return a(o?.id)||e.id||""},async createPassageCategory(e){const t=await y(B,{id:null,name:e.name.trim(),workspaceId:e.workspaceId,description:e.description.trim()}),r=m(t.setPassageCategory,"Nao foi possivel criar a categoria."),o=n(r.payload);return a(o?.id)},async deletePassage(e){const t=await y(L,{passageId:e});m(t.deletePassage,"Nao foi possivel remover o acesso.")},async getAreaSettings(e){const t=await l(q,{areaId:e}),r=n(t.areaSettings);if(!r)throw new Error("Nao foi possivel carregar as configuracoes da area.");const o=p(t.errorMessages).map(s=>a(s)).filter(Boolean);if(r.success!==!0)throw new Error(o.length?o.join(`
`):"Falha nas configuracoes da area.");return T(n(r.payload)??{})},async setAreaSettings(e,t){const r=await y(H,{input:{idReferenceOf:e,areaSettingsItem:{areaStatus:t.areaStatus,settings:t.settings.map(s=>({name:s.name,status:s.status}))}}}),o=m(r.setAreaSettings,"Nao foi possivel salvar as configuracoes.");return T(n(o.payload)??{})},async getRelatedAreaViews(e,t="RESERVATION"){const r=await l(V,{areaId:e,linkType:t});return p(r.relatedAreaViews).map(o=>n(o)).filter(o=>!!o).map(Z)},async setRelatedAreas(e,t,r="RESERVATION"){const o=t.map(i=>({areaId:i.areaId,passageInputs:i.passageConfigs.map(d=>({passageId:d.passageId,generateKey:d.generateKey}))})),s=await y(z,{areaId:e,inputList:o,linkType:r});m(s.setRelatedAreas,"Nao foi possivel salvar os vinculos de areas.")}};export{te as a};
