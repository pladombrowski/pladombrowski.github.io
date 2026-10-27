import{Z as d,G as f}from"./index-SV44U77X.js";const w=`
  query GetPreferences($workspaceId: UUID!) {
    __typename
    areaBookingPreferencesWithPricingByWorkspaceId(workspaceId: $workspaceId) {
      __typename
      success
      payload {
        __typename
        id
        name
        startDate
        endDate
        workspaceId
        defaultAreaBookingPricingId
        allowSeparateFinancialEntry
        dependentsLimit
        areas {
          __typename
          id
          name
        }
        areaBookingPricings {
          __typename
          id
          name
          priceDay
          unit {
            __typename
            id
            name
            symbol
          }
        }
        defaultAreaBookingPricing {
          __typename
          id
          name
        }
      }
      errorMessages
    }
  }
`,T=`
  query GetPreferenceDetails($id: UUID!) {
    __typename
    areaBookingPreferenceWithTiming(id: $id) {
      __typename
      success
      payload {
        __typename
        id
        name
        startDate
        endDate
        workspaceId
        defaultAreaBookingPricingId
        allowSeparateFinancialEntry
        dependentsLimit
        defaultAreaBookingPricing {
          __typename
          id
          name
          priceMinute
          priceHour
          priceDay
          priceWeek
          priceMonth
          priceYear
          workspaceId
          unit {
            __typename
            id
            name
            symbol
            workspaceId
            symbolBeforeValue
            type
          }
        }
        areaBookingTimingPreferences {
          __typename
          id
          name
          minAdvanceValue
          minOccupationValue
          maxOccupationValue
          increaseOccupationValue
          beforeBlockValue
          afterBlockValue
          anytime
          roundHour
          halfHour
          quarterHour
          quarterToHour
          workspaceId
          beforeTolerance
          afterTolerance
          hasCheckinConfirmation
          minReservationCancelValue
        }
        areaBookingPricings {
          __typename
          id
          name
          priceMinute
          priceHour
          priceDay
          priceWeek
          priceMonth
          priceYear
          workspaceId
          unit {
            __typename
            id
            name
            symbol
            workspaceId
            symbolBeforeValue
            type
          }
        }
      }
      errorMessages
    }
    areaBookingPreferenceSettings(id: $id) {
      __typename
      success
      payload {
        __typename
        visibilitySettings {
          __typename
          name
        }
      }
      errorMessages
    }
  }
`,E=`
  mutation SetAreaBookingPreference($graphqlInput: AreaBookingPreferenceInput!) {
    __typename
    setAreaBookingPreference(graphqlInput: $graphqlInput) {
      __typename
      success
      payload {
        __typename
        id
        name
        startDate
        endDate
        workspaceId
        defaultAreaBookingPricingId
        allowSeparateFinancialEntry
        dependentsLimit
      }
      errorMessages
    }
  }
`,b=`
  query AreaBookingTimingPreferenceById($workspaceId: UUID!) {
    __typename
    areaBookingPreferenceTimingsByWorkspaceId(workspaceId: $workspaceId) {
      __typename
      success
      payload {
        __typename
        id
        name
        minAdvanceValue
        minOccupationValue
        maxOccupationValue
        increaseOccupationValue
        beforeBlockValue
        afterBlockValue
        anytime
        roundHour
        halfHour
        quarterHour
        quarterToHour
        workspaceId
        beforeTolerance
        afterTolerance
        hasCheckinConfirmation
        minReservationCancelValue
      }
      errorMessages
    }
  }
`,h=`
  mutation DesconnectAreaBookingTimingPreference(
    $areaBookingPreferenceId: UUID!
    $areaBookingTimingId: UUID!
  ) {
    __typename
    disconnectAreaBookingTimingFromAreaBookingPreference(
      areaBookingPreferenceId: $areaBookingPreferenceId
      areaBookingTimingId: $areaBookingTimingId
    ) {
      __typename
      success
      errorMessages
    }
  }
`,D=`
  mutation CreateAreaBookingTimingPreference(
    $graphqlInput: AreaBookingTimingPreferenceInput!
  ) {
    __typename
    setAreaBookingTimingPreference(graphqlInput: $graphqlInput) {
      __typename
      success
      payload {
        __typename
        id
        name
        minAdvanceValue
        minOccupationValue
        maxOccupationValue
        increaseOccupationValue
        beforeBlockValue
        afterBlockValue
        anytime
        roundHour
        halfHour
        quarterHour
        quarterToHour
        workspaceId
        beforeTolerance
        afterTolerance
        hasCheckinConfirmation
        minReservationCancelValue
      }
      errorMessages
    }
  }
`,C=`
  query GetBookingPricingList($workspaceId: UUID!) {
    __typename
    areaBookingPricingsByWorkspaceId(workspaceId: $workspaceId) {
      __typename
      success
      payload {
        __typename
        id
        name
        priceMinute
        priceHour
        priceDay
        priceWeek
        priceMonth
        priceYear
        workspaceId
        unit {
          __typename
          id
          name
          symbol
          workspaceId
          symbolBeforeValue
          type
        }
      }
      errorMessages
    }
  }
`,v=`
  query GetCurrencies($workspaceId: UUID!) {
    __typename
    currency_unit: currencyUnitByWorkspaceId(workspaceId: $workspaceId) {
      __typename
      id
      type
      symbolBeforeValue
      name
      symbol
      workspaceId
    }
  }
`,V=`
  mutation DisconnectPricingPreference(
    $areaBookingPreferenceId: UUID!
    $areaBookingPricingId: UUID!
  ) {
    __typename
    disconnectAreaBookingPricingFromAreaBookingPreference(
      areaBookingPreferenceId: $areaBookingPreferenceId
      areaBookingPricingId: $areaBookingPricingId
    ) {
      __typename
      success
      errorMessages
    }
  }
`,N=`
  mutation ConnectPricingPreference(
    $areaBookingPreferenceId: UUID!
    $areaBookingPricingIds: [UUID!]!
  ) {
    __typename
    connectAreaBookingPricingsToAreaBookingPreference(
      areaBookingPreferenceId: $areaBookingPreferenceId
      areaBookingPricingIds: $areaBookingPricingIds
    ) {
      __typename
      success
      errorMessages
    }
  }
`,R=`
  mutation CreateAreaBookingPricing($graphqlInput: AreaBookingPricingInput!) {
    __typename
    setAreaBookingPricing(graphqlInput: $graphqlInput) {
      __typename
      success
      payload {
        __typename
        id
        name
        priceMinute
        priceHour
        priceDay
        priceWeek
        priceMonth
        priceYear
        workspaceId
        unit {
          __typename
          id
          name
          symbol
          workspaceId
          symbolBeforeValue
          type
        }
      }
      errorMessages
    }
  }
`,$=`
  mutation ConnectBookingPreferenceToArea(
    $areaBookingPreferenceId: UUID!
    $areaId: UUID!
  ) {
    __typename
    connectAreaBookingPreferenceToArea(
      areaBookingPreferenceId: $areaBookingPreferenceId
      areaId: $areaId
    ) {
      __typename
      success
      errorMessages
    }
  }
`,U=`
  mutation DisconnectBookingPreferenceToArea(
    $areaBookingPreferenceId: UUID!
    $areaId: UUID!
  ) {
    __typename
    disconnectAreaBookingPreferenceFromArea(
      areaBookingPreferenceId: $areaBookingPreferenceId
      areaId: $areaId
    ) {
      __typename
      success
      errorMessages
    }
  }
`;function s(a){return a&&typeof a=="object"&&!Array.isArray(a)?a:null}function u(a){return Array.isArray(a)?a:[]}function o(a,e=""){return typeof a=="string"?a:e}function l(a){return typeof a=="string"?a:null}function g(a,e=0){if(typeof a=="number"&&Number.isFinite(a))return a;if(typeof a=="string"&&a.trim()!==""){const r=Number(a);if(Number.isFinite(r))return r}return e}function B(a){return typeof a=="number"&&Number.isFinite(a)?Math.trunc(a):null}function p(a,e=!1){return typeof a=="boolean"?a:e}function M(a){return typeof a=="boolean"?a:null}function P(a){const e=s(a)??{};return{id:o(e.id),name:o(e.name),symbol:o(e.symbol),workspaceId:o(e.workspaceId),symbolBeforeValue:p(e.symbolBeforeValue),type:o(e.type)}}function k(a){const e=s(a);if(!e)return null;const r={id:o(e.id),name:o(e.name),priceMinute:g(e.priceMinute),priceHour:g(e.priceHour),priceDay:g(e.priceDay),priceWeek:g(e.priceWeek),priceMonth:g(e.priceMonth),priceYear:g(e.priceYear),workspaceId:o(e.workspaceId),unit:P(e.unit)};return r.id?r:null}function S(a){const e=s(a);if(!e)return null;const r={id:o(e.id),name:o(e.name)};return r.id?r:null}function O(a){const e=s(a);return!e||!o(e.id)?null:{id:o(e.id),name:o(e.name)}}function q(a){const e=s(a);if(!e)return null;const r={id:o(e.id),name:o(e.name),startDate:l(e.startDate),endDate:l(e.endDate),workspaceId:o(e.workspaceId),defaultAreaBookingPricingId:l(e.defaultAreaBookingPricingId),allowSeparateFinancialEntry:p(e.allowSeparateFinancialEntry),dependentsLimit:B(e.dependentsLimit),areas:u(e.areas).map(S).filter(n=>n!==null),pricings:u(e.areaBookingPricings).map(k).filter(n=>n!==null),defaultPricing:O(e.defaultAreaBookingPricing)};return r.id?r:null}function y(a){const e=s(a);if(!e)return null;const r={id:o(e.id),name:o(e.name),minAdvanceValue:o(e.minAdvanceValue),minOccupationValue:o(e.minOccupationValue),maxOccupationValue:o(e.maxOccupationValue),increaseOccupationValue:o(e.increaseOccupationValue),beforeBlockValue:o(e.beforeBlockValue),afterBlockValue:o(e.afterBlockValue),anytime:p(e.anytime),roundHour:p(e.roundHour),halfHour:p(e.halfHour),quarterHour:p(e.quarterHour),quarterToHour:p(e.quarterToHour),workspaceId:o(e.workspaceId),beforeTolerance:l(e.beforeTolerance),afterTolerance:l(e.afterTolerance),hasCheckinConfirmation:M(e.hasCheckinConfirmation),minReservationCancelValue:o(e.minReservationCancelValue)};return r.id?r:null}function t(a,e){if(a.success===!0)return;const r=u(a.errorMessages).map(n=>String(n)).filter(n=>n.trim()!=="");throw new Error(r.length>0?r.join(`
`):e)}function c(a,e){const r=s(a);if(!r)throw new Error(e);return r}function I(a){const e=a.payload;if(e==null)return[];if(!Array.isArray(e))throw new Error("Payload invalido na resposta.");return e}const W={async getByWorkspaceId(a){const e=await f(w,{workspaceId:a}),r=c(e.areaBookingPreferencesWithPricingByWorkspaceId,"Resposta invalida ao carregar modelos.");return t(r,"Nao foi possivel carregar os modelos de disponibilidade."),I(r).map(q).filter(n=>n!==null)},async getDetails(a){const e=await f(T,{id:a}),r=c(e.areaBookingPreferenceWithTiming,"Resposta invalida ao carregar os detalhes do modelo."),n=c(e.areaBookingPreferenceSettings,"Resposta invalida ao carregar a visibilidade do modelo.");t(r,"Nao foi possivel carregar os detalhes do modelo."),t(n,"Nao foi possivel carregar a visibilidade do modelo.");const i=s(r.payload);if(!i)throw new Error("Detalhes do modelo nao encontrados.");const _=s(n.payload)??{},A=u(_.visibilitySettings).map(m=>o(s(m)?.name)).filter(m=>m!=="");return{id:o(i.id),name:o(i.name),startDate:l(i.startDate),endDate:l(i.endDate),workspaceId:o(i.workspaceId),defaultAreaBookingPricingId:l(i.defaultAreaBookingPricingId),allowSeparateFinancialEntry:p(i.allowSeparateFinancialEntry),dependentsLimit:B(i.dependentsLimit),defaultPricing:k(i.defaultAreaBookingPricing),timingPreferences:u(i.areaBookingTimingPreferences).map(y).filter(m=>m!==null),pricings:u(i.areaBookingPricings).map(k).filter(m=>m!==null),visibilitySettings:A}},async saveDetails(a){const e=await d(E,{graphqlInput:a}),r=c(e.setAreaBookingPreference,"Resposta invalida ao salvar o modelo.");t(r,"Nao foi possivel salvar o modelo de disponibilidade.");const n=s(r.payload),i=n?o(n.id):"";if(!i)throw new Error("O servidor nao retornou o id do modelo salvo.");return i},async getTimingsByWorkspaceId(a){const e=await f(b,{workspaceId:a}),r=c(e.areaBookingPreferenceTimingsByWorkspaceId,"Resposta invalida ao carregar os modelos de tempo.");return t(r,"Nao foi possivel carregar os modelos de tempo."),I(r).map(y).filter(n=>n!==null)},async disconnectTiming(a){const e=await d(h,{areaBookingPreferenceId:a.areaBookingPreferenceId,areaBookingTimingId:a.areaBookingTimingId}),r=c(e.disconnectAreaBookingTimingFromAreaBookingPreference,"Resposta invalida ao desconectar o modelo de tempo.");t(r,"Nao foi possivel desconectar o modelo de tempo.")},async setTimingPreference(a){const e=await d(D,{graphqlInput:a}),r=c(e.setAreaBookingTimingPreference,"Resposta invalida ao salvar o modelo de tempo.");t(r,"Nao foi possivel salvar o modelo de tempo.");const n=y(r.payload);if(!n)throw new Error("O servidor nao retornou o modelo de tempo salvo.");return n},async getPricingsByWorkspaceId(a){const e=await f(C,{workspaceId:a}),r=c(e.areaBookingPricingsByWorkspaceId,"Resposta invalida ao carregar os modelos de precificacao.");return t(r,"Nao foi possivel carregar os modelos de precificacao."),I(r).map(k).filter(n=>n!==null)},async getCurrenciesByWorkspaceId(a){const e=await f(v,{workspaceId:a});return u(e.currency_unit).map(P).filter(r=>r.id!=="")},async disconnectPricing(a){const e=await d(V,{areaBookingPreferenceId:a.areaBookingPreferenceId,areaBookingPricingId:a.areaBookingPricingId}),r=c(e.disconnectAreaBookingPricingFromAreaBookingPreference,"Resposta invalida ao desconectar o modelo de precificacao.");t(r,"Nao foi possivel desconectar o modelo de precificacao.")},async connectPricings(a){const e=await d(N,{areaBookingPreferenceId:a.areaBookingPreferenceId,areaBookingPricingIds:a.areaBookingPricingIds}),r=c(e.connectAreaBookingPricingsToAreaBookingPreference,"Resposta invalida ao conectar o modelo de precificacao.");t(r,"Nao foi possivel conectar o modelo de precificacao.")},async setPricingPreference(a){const e=await d(R,{graphqlInput:a}),r=c(e.setAreaBookingPricing,"Resposta invalida ao salvar o modelo de precificacao.");t(r,"Nao foi possivel salvar o modelo de precificacao.");const n=k(r.payload);if(!n)throw new Error("O servidor nao retornou o modelo de precificacao salvo.");return n},async connectArea(a){const e=await d($,{areaBookingPreferenceId:a.areaBookingPreferenceId,areaId:a.areaId}),r=c(e.connectAreaBookingPreferenceToArea,"Resposta invalida ao associar o modelo de disponibilidade.");t(r,"Nao foi possivel associar o modelo de disponibilidade.")},async disconnectArea(a){const e=await d(U,{areaBookingPreferenceId:a.areaBookingPreferenceId,areaId:a.areaId}),r=c(e.disconnectAreaBookingPreferenceFromArea,"Resposta invalida ao desconectar o modelo de disponibilidade.");t(r,"Nao foi possivel desconectar o modelo de disponibilidade.")}};export{W as a};
