import{a1 as s,a6 as l,N as p,K as i,a8 as I}from"./index-BRqAL7f2.js";const u={endpoint:p.hailaJavaGraphqlEndpoint,timeoutMs:3e4},m=`
  mutation GetIntegratorBulkUnitsContext(
    $workspaceId: String!
    $sessionWorkspaceId: String
    $masterAreaId: String
  ) {
    prod_get_integrator_bulk_units_context_json(
      p_workspace_id: $workspaceId
      p_session_workspace_id: $sessionWorkspaceId
      p_master_area_id: $masterAreaId
    ) {
      json
    }
  }
`,y=`
  mutation UpdateIntegratorBulkUnitsStructure(
    $input: ProdUpdateIntegratorBulkUnitsStructureJsonPInput
  ) {
    prod_update_integrator_bulk_units_structure_json(p_input: $input) {
      json
    }
  }
`;function n(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function c(e){if(Array.isArray(e)){if(e.length===0)return null;const a=n(e[0]);return a?a.json??null:null}const r=n(e);return r?r.json??r:null}function t(e){return typeof e=="string"&&e.trim()||null}function d(e){if(typeof e=="number"&&Number.isFinite(e))return Math.trunc(e);if(typeof e=="string"&&e.trim()){const r=Number.parseInt(e,10);if(Number.isFinite(r))return r}return 0}function k(e){const r=n(e);if(!r)return null;const a=t(r.id);return a?{id:a,name:t(r.name)??a,areaTypeId:t(r.areaTypeId),areaTypeName:t(r.areaTypeName)??"",areaTypeSlug:t(r.areaTypeSlug)??"",areaCategoryName:t(r.areaCategoryName)??"",isLikelyMaster:r.isLikelyMaster===!0,childCount:d(r.childCount)}:null}function A(e){const r=n(e);if(!r)return null;const a=t(r.id);return a?{id:a,name:t(r.name)??a,areaTypeId:t(r.areaTypeId),areaTypeName:t(r.areaTypeName)??"",areaTypeSlug:t(r.areaTypeSlug)??"",isBlock:r.isBlock===!0,unitCount:d(r.unitCount),isPrivateUnitExcluded:r.isPrivateUnitExcluded===!0,clientGroupId:t(r.clientGroupId)}:null}function _(e){const r=n(e);if(!r)return null;const a=t(r.id);return a?{id:a,name:t(r.name)??a,areaTypeName:t(r.areaTypeName)??"",areaTypeSlug:t(r.areaTypeSlug)??"",areaParentId:t(r.areaParentId)}:null}function g(e){const r=n(e)??{},a=n(r.catalog)??{};return{ok:r.ok!==!1,workspaceId:t(r.workspaceId)??"",selectedMasterId:t(r.selectedMasterId),residentsGroupId:t(r.residentsGroupId),masterCandidates:(Array.isArray(r.masterCandidates)?r.masterCandidates:[]).map(k).filter(o=>!!o),children:(Array.isArray(r.children)?r.children:[]).map(A).filter(o=>!!o),blockAttachCandidates:(Array.isArray(r.blockAttachCandidates)?r.blockAttachCandidates:[]).map(_).filter(o=>!!o),catalog:{masterAreaTypeId:t(a.masterAreaTypeId),blockAreaTypeId:t(a.blockAreaTypeId),apartmentAreaTypeId:t(a.apartmentAreaTypeId)}}}const T={async getContext(e){try{const r=await s(m,{workspaceId:e.workspaceId,...I(e.sessionWorkspaceId),masterAreaId:e.masterAreaId??null},u);return g(c(r.prod_get_integrator_bulk_units_context_json))}catch(r){throw new Error(i(r,"Falha ao carregar estrutura de unidades em lote"))}},async updateStructure(e){try{const r=await s(y,{input:l({workspaceId:e.workspaceId,action:e.action,masterAreaId:e.masterAreaId??null,blockAreaId:e.blockAreaId??null,name:e.name??null},e.sessionWorkspaceId)},u),a=n(c(r.prod_update_integrator_bulk_units_structure_json));if(!a||a.ok===!1)throw new Error("Falha ao atualizar estrutura");return{ok:!0,action:t(a.action)??e.action,masterAreaId:t(a.masterAreaId),blockAreaId:t(a.blockAreaId),blockGroupId:t(a.blockGroupId)}}catch(r){throw new Error(i(r,"Falha ao atualizar estrutura"))}}};export{T as i};
