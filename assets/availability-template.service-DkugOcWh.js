import{S as f,T as b,ae as l}from"./index-NW6jrXMp.js";const E=`
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
`,h=`
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
`,D=`
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
`,C=`
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
`,N=`
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
`,v=`
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
`,R=`
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
`,V=`
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
`,$=`
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
`,M=`
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
`,S=`
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
`,O=`
  query CalculateProportionalAreaBookingPrices(
    $input: ProdCalculateProportionalAreaBookingPricesPInput
  ) {
    prod_calculate_proportional_area_booking_prices(p_input: $input)
  }
`,U=`  mutation ConnectBookingPreferenceToArea(
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
`,q=`
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
`;function p(a){return a&&typeof a=="object"&&!Array.isArray(a)?a:null}function g(a){return Array.isArray(a)?a:[]}function n(a,e=""){return typeof a=="string"?a:e}function m(a){return typeof a=="string"?a:null}function k(a,e=0){if(typeof a=="number"&&Number.isFinite(a))return a;if(typeof a=="string"&&a.trim()!==""){const r=Number(a);if(Number.isFinite(r))return r}return e}function w(a){return typeof a=="number"&&Number.isFinite(a)?Math.trunc(a):null}function u(a,e=!1){return typeof a=="boolean"?a:e}function H(a){return typeof a=="boolean"?a:null}function T(a){const e=p(a)??{};return{id:n(e.id),name:n(e.name),symbol:n(e.symbol),workspaceId:n(e.workspaceId),symbolBeforeValue:u(e.symbolBeforeValue),type:n(e.type)}}function y(a){const e=p(a);if(!e)return null;const r={id:n(e.id),name:n(e.name),priceMinute:k(e.priceMinute),priceHour:k(e.priceHour),priceDay:k(e.priceDay),priceWeek:k(e.priceWeek),priceMonth:k(e.priceMonth),priceYear:k(e.priceYear),workspaceId:n(e.workspaceId),unit:T(e.unit)};return r.id?r:null}function W(a){const e=p(a);if(!e)return null;const r={id:n(e.id),name:n(e.name)};return r.id?r:null}function F(a){const e=p(a);return!e||!n(e.id)?null:{id:n(e.id),name:n(e.name)}}function G(a){const e=p(a);if(!e)return null;const r={id:n(e.id),name:n(e.name),startDate:m(e.startDate),endDate:m(e.endDate),workspaceId:n(e.workspaceId),defaultAreaBookingPricingId:m(e.defaultAreaBookingPricingId),allowSeparateFinancialEntry:u(e.allowSeparateFinancialEntry),dependentsLimit:w(e.dependentsLimit),areas:g(e.areas).map(W).filter(o=>o!==null),pricings:g(e.areaBookingPricings).map(y).filter(o=>o!==null),defaultPricing:F(e.defaultAreaBookingPricing)};return r.id?r:null}function P(a){const e=p(a);if(!e)return null;const r={id:n(e.id),name:n(e.name),minAdvanceValue:n(e.minAdvanceValue),minOccupationValue:n(e.minOccupationValue),maxOccupationValue:n(e.maxOccupationValue),increaseOccupationValue:n(e.increaseOccupationValue),beforeBlockValue:n(e.beforeBlockValue),afterBlockValue:n(e.afterBlockValue),anytime:u(e.anytime),roundHour:u(e.roundHour),halfHour:u(e.halfHour),quarterHour:u(e.quarterHour),quarterToHour:u(e.quarterToHour),workspaceId:n(e.workspaceId),beforeTolerance:m(e.beforeTolerance),afterTolerance:m(e.afterTolerance),hasCheckinConfirmation:H(e.hasCheckinConfirmation),minReservationCancelValue:n(e.minReservationCancelValue)};return r.id?r:null}function s(a,e){if(a.success===!0)return;const r=g(a.errorMessages).map(o=>String(o)).filter(o=>o.trim()!=="");throw new Error(r.length>0?r.join(`
`):e)}function d(a,e){const r=p(a);if(!r)throw new Error(e);return r}function B(a){const e=a.payload;if(e==null)return[];if(!Array.isArray(e))throw new Error("Payload invalido na resposta.");return e}function L(a){const e=c=>{if(typeof c=="string"){const I=c.trim();if(!I)return null;try{return e(JSON.parse(I))}catch{return null}}if(Array.isArray(c)){for(const I of c){const A=e(I);if(A)return A}return null}const t=p(c);return t?t.json!==void 0&&!("priceMinute"in t)?e(t.json):t:null},r=e(a);if(!r)return null;const o=c=>{const t=typeof c=="number"?c:Number.parseFloat(n(c,"0"));return Number.isFinite(t)?t:0},i={priceMinute:o(r.priceMinute),priceHour:o(r.priceHour),priceDay:o(r.priceDay),priceWeek:o(r.priceWeek),priceMonth:o(r.priceMonth),priceYear:o(r.priceYear)};return Object.values(i).every(c=>c===0)?null:i}const x={async getByWorkspaceId(a){const e=await f(E,{workspaceId:a}),r=d(e.areaBookingPreferencesWithPricingByWorkspaceId,"Resposta invalida ao carregar modelos.");return s(r,"Nao foi possivel carregar os modelos de disponibilidade."),B(r).map(G).filter(o=>o!==null)},async getDetails(a){const e=await f(h,{id:a}),r=d(e.areaBookingPreferenceWithTiming,"Resposta invalida ao carregar os detalhes do modelo."),o=d(e.areaBookingPreferenceSettings,"Resposta invalida ao carregar a visibilidade do modelo.");s(r,"Nao foi possivel carregar os detalhes do modelo."),s(o,"Nao foi possivel carregar a visibilidade do modelo.");const i=p(r.payload);if(!i)throw new Error("Detalhes do modelo nao encontrados.");const _=p(o.payload)??{},c=g(_.visibilitySettings).map(t=>n(p(t)?.name)).filter(t=>t!=="");return{id:n(i.id),name:n(i.name),startDate:m(i.startDate),endDate:m(i.endDate),workspaceId:n(i.workspaceId),defaultAreaBookingPricingId:m(i.defaultAreaBookingPricingId),allowSeparateFinancialEntry:u(i.allowSeparateFinancialEntry),dependentsLimit:w(i.dependentsLimit),defaultPricing:y(i.defaultAreaBookingPricing),timingPreferences:g(i.areaBookingTimingPreferences).map(P).filter(t=>t!==null),pricings:g(i.areaBookingPricings).map(y).filter(t=>t!==null),visibilitySettings:c}},async saveDetails(a){const e=await l(D,{graphqlInput:a}),r=d(e.setAreaBookingPreference,"Resposta invalida ao salvar o modelo.");s(r,"Nao foi possivel salvar o modelo de disponibilidade.");const o=p(r.payload),i=o?n(o.id):"";if(!i)throw new Error("O servidor nao retornou o id do modelo salvo.");return i},async getTimingsByWorkspaceId(a){const e=await f(C,{workspaceId:a}),r=d(e.areaBookingPreferenceTimingsByWorkspaceId,"Resposta invalida ao carregar os modelos de tempo.");return s(r,"Nao foi possivel carregar os modelos de tempo."),B(r).map(P).filter(o=>o!==null)},async disconnectTiming(a){const e=await l(N,{areaBookingPreferenceId:a.areaBookingPreferenceId,areaBookingTimingId:a.areaBookingTimingId}),r=d(e.disconnectAreaBookingTimingFromAreaBookingPreference,"Resposta invalida ao desconectar o modelo de tempo.");s(r,"Nao foi possivel desconectar o modelo de tempo.")},async setTimingPreference(a){const e=await l(v,{graphqlInput:a}),r=d(e.setAreaBookingTimingPreference,"Resposta invalida ao salvar o modelo de tempo.");s(r,"Nao foi possivel salvar o modelo de tempo.");const o=P(r.payload);if(!o)throw new Error("O servidor nao retornou o modelo de tempo salvo.");return o},async getPricingsByWorkspaceId(a){const e=await f(R,{workspaceId:a}),r=d(e.areaBookingPricingsByWorkspaceId,"Resposta invalida ao carregar os modelos de precificacao.");return s(r,"Nao foi possivel carregar os modelos de precificacao."),B(r).map(y).filter(o=>o!==null)},async getCurrenciesByWorkspaceId(a){const e=await f(V,{workspaceId:a});return g(e.currency_unit).map(T).filter(r=>r.id!=="")},async disconnectPricing(a){const e=await l($,{areaBookingPreferenceId:a.areaBookingPreferenceId,areaBookingPricingId:a.areaBookingPricingId}),r=d(e.disconnectAreaBookingPricingFromAreaBookingPreference,"Resposta invalida ao desconectar o modelo de precificacao.");s(r,"Nao foi possivel desconectar o modelo de precificacao.")},async connectPricings(a){const e=await l(M,{areaBookingPreferenceId:a.areaBookingPreferenceId,areaBookingPricingIds:a.areaBookingPricingIds}),r=d(e.connectAreaBookingPricingsToAreaBookingPreference,"Resposta invalida ao conectar o modelo de precificacao.");s(r,"Nao foi possivel conectar o modelo de precificacao.")},async setPricingPreference(a){const e=await l(S,{graphqlInput:a}),r=d(e.setAreaBookingPricing,"Resposta invalida ao salvar o modelo de precificacao.");s(r,"Nao foi possivel salvar o modelo de precificacao.");const o=y(r.payload);if(!o)throw new Error("O servidor nao retornou o modelo de precificacao salvo.");return o},async connectArea(a){const e=await l(U,{areaBookingPreferenceId:a.areaBookingPreferenceId,areaId:a.areaId}),r=d(e.connectAreaBookingPreferenceToArea,"Resposta invalida ao associar o modelo de disponibilidade.");s(r,"Nao foi possivel associar o modelo de disponibilidade.")},async disconnectArea(a){const e=await l(q,{areaBookingPreferenceId:a.areaBookingPreferenceId,areaId:a.areaId}),r=d(e.disconnectAreaBookingPreferenceFromArea,"Resposta invalida ao desconectar o modelo de disponibilidade.");s(r,"Nao foi possivel desconectar o modelo de disponibilidade.")},async calculateProportionalPrices(a){const e=await f(O,{input:{baseInterval:a.baseInterval,basePrice:a.basePrice}},{endpoint:b.hailaJavaGraphqlEndpoint,timeoutMs:3e4}),r=L(e.prod_calculate_proportional_area_booking_prices);if(!r)throw new Error("Nao foi possivel calcular a precificacao proporcional.");return r}};export{x as a};
