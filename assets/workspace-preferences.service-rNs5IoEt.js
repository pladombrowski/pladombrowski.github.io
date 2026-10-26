import{ad as u,G as p}from"./index-l1Wp4LV5.js";function E(e){return e.valueKind.trim().toLowerCase()==="enum"}function I(e){const n=e.value.value;return typeof n!="string"?null:n.trim().toLowerCase()||null}function f(e){const n={},r=e.preferenceName.trim();r&&(n.preferenceName=r);const t=e.preferenceId?.trim();t&&(n.preferenceId=t);const a=e.value?.trim().toLowerCase();return a&&(n.value=a),n}const g=`
  query GetWorkspacePreferenceCategories($workspaceId: uuid!) {
    get_workspace_preference_categories_json(args: { p_workspace_id: $workspaceId }) {
      json
    }
  }
`,d=`
  query GetWorkspacePreferenceCatalog($workspaceId: uuid!, $categoryName: String!) {
    get_workspace_preference_catalog_json(
      args: { p_workspace_id: $workspaceId, p_category_name: $categoryName }
    ) {
      json
    }
  }
`,l=`
  query GetWorkspacePreferences($workspaceId: uuid!) {
    get_workspace_preferences_json(args: { p_workspace_id: $workspaceId }) {
      json
    }
  }
`,_=`
  mutation SetWorkspacePreferences($input: jsonb!) {
    set_workspace_preference_json(args: { p_input: $input }) {
      json
    }
  }
`,y=new Set(["workspace_type","home-settings"]);function k(e){return!y.has(e.trim().toLowerCase())}function s(e){return e&&typeof e=="object"?e:null}function m(e){if(Array.isArray(e)&&e.length>0)return s(s(e[0])?.json);const n=s(e);return n?s(n.json)??n:null}function o(e,n){const r=m(e);if(!r)return{success:!1,payload:null,errorMessages:["Resposta invalida do servidor"]};const t=s(r.payload);return{success:r.success===!0,payload:t?n(t):null,errorMessages:Array.isArray(r.errorMessages)?r.errorMessages.map(a=>String(a)):[]}}function w(e,n){const r=s(e.value),t=Array.isArray(e.allowedValues)?e.allowedValues:[];return{value:r??{},attached:typeof e.attached=="boolean"?e.attached:n,valueKind:String(e.valueKind??""),preferenceId:String(e.preferenceId??""),allowedValues:t.map(a=>String(a).trim().toLowerCase()).filter(Boolean),preferenceName:String(e.preferenceName??""),preferenceCategoryId:String(e.preferenceCategoryId??""),workspacePreferenceId:e.workspacePreferenceId==null?null:String(e.workspacePreferenceId),preferenceCategoryName:String(e.preferenceCategoryName??"")}}function i(e,n){return Array.isArray(e)?e.filter(r=>!!r&&typeof r=="object").map(r=>w(r,n)):[]}const S={async getCategories(e){const n=await p(g,{workspaceId:e});return o(n.get_workspace_preference_categories_json,r=>({workspaceId:String(r.workspaceId??""),categories:Array.isArray(r.categories)?r.categories.filter(t=>!!t&&typeof t=="object").map(t=>({attachedCount:Number(t.attachedCount??0),preferenceCount:Number(t.preferenceCount??0),preferenceCategoryId:String(t.preferenceCategoryId??""),preferenceCategoryName:String(t.preferenceCategoryName??"")})):[]}))},async getCatalog(e,n){const r=await p(d,{workspaceId:e,categoryName:n});return o(r.get_workspace_preference_catalog_json,t=>({workspaceId:String(t.workspaceId??""),preferences:i(t.preferences,!1)}))},async getPreferences(e){const n=await p(l,{workspaceId:e});return o(n.get_workspace_preferences_json,r=>({workspaceId:String(r.workspaceId??""),preferences:i(r.preferences,!0)}))},async setPreferences(e,n,r){const t=n.trim();if(!k(t))throw new Error("Esta categoria nao pode ser alterada por esta tela.");const a=await u(_,{input:{workspaceId:e,categoryName:t,preferences:r.map(f)}});return o(a.set_workspace_preference_json,c=>({workspaceId:String(c.workspaceId??""),categoryName:String(c.categoryName??""),preferences:i(c.preferences,!0)}))}};export{E as a,k as i,I as s,S as w};
