import{M as de,W as ue,w as B,j as m,H as pe,k as a,t as d,N as u,f as $,s as S,a1 as j,a2 as q,F as Y,A as H,C as z,b as ve,D as L,d as g,a as J}from"./vue-CjkOshIV.js";import{m as D,p as _e,i as fe}from"./plate-BZGYFcMS.js";import{_ as me}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{ae as k,aJ as W,T as ge,$ as h,aK as b,S as he}from"./index-DcFr3vAp.js";const _="—",Ie={carro:"products.integrator.veiculos-tipo-carro",motocicleta:"products.integrator.veiculos-tipo-motocicleta",caminhao:"products.integrator.veiculos-tipo-caminhao",outro:"products.integrator.veiculos-tipo-outro"};function we(e,t){const i=typeof e=="string"?e.trim().toLowerCase():"";if(!i)return _;const r=Ie[i];return r?t(r):String(e).trim()}function Ft(e,t=" • "){const i=[e.brand,e.model,e.color].map(r=>typeof r=="string"?r.trim():"").filter(r=>r.length>0);return i.length>0?i.join(t):_}function ke(e){if(!e)return _;const t=typeof e.name=="string"?e.name.trim():"",i=typeof e.complement=="string"?e.complement.trim():"";return t&&i?`${t} · ${i}`:t||i||_}function Rt(e,t=_){return(typeof e?.displayName=="string"?e.displayName.trim():"")||t}function Pt(e){const t=typeof e=="string"?e.trim():"";if(!t)return _;const i=t.replace(/[^A-Za-z0-9]/g,"");return i.length===7?D(i):t}const ye={uhf_tag:"products.integrator.veiculos-tag-tipo-uhf",rfid_tag_10:"products.integrator.veiculos-tag-tipo-rfid10",brava_tag:"products.integrator.veiculos-tag-tipo-brava"};function xt(e,t){const i=typeof e=="string"?e.trim().toLowerCase():"";if(!i)return _;const r=ye[i];return r?t(r):String(e).trim()}function Ot(e,t){const i=typeof e=="string"?e.trim().toUpperCase():"";return i==="ENABLED"?t("products.integrator.veiculos-tag-status-ativa"):i==="DISABLED"?t("products.integrator.veiculos-tag-status-inativa"):i||_}const be={allow:"products.integrator.veiculos-decisao-permitido",deny:"products.integrator.veiculos-decisao-negado",exit:"products.integrator.veiculos-decisao-saida",ignored:"products.integrator.veiculos-decisao-ignorado"};function Gt(e,t){const i=typeof e=="string"?e.trim().toLowerCase():"",r=be[i];return r?t(r):i?String(e).trim():_}const Ee={in:"products.integrator.veiculos-direcao-entrada",out:"products.integrator.veiculos-direcao-saida",unknown:"products.integrator.veiculos-direcao-desconhecida"};function Mt(e,t){const i=typeof e=="string"?e.trim().toLowerCase():"",r=Ee[i];return r?t(r):i?String(e).trim():_}function Bt(e,t){return[e.name,e.direction==="in"?t("products.integrator.veiculos-direcao-entrada"):e.direction==="out"?t("products.integrator.veiculos-direcao-saida"):"",t("products.integrator.veiculos-lpr")].filter(r=>typeof r=="string"&&r.trim().length>0).join(" • ")}function qt(e,t="pt-BR"){if(typeof e!="string"||!e.trim())return _;const i=new Date(e);if(Number.isNaN(i.getTime()))return _;try{return new Intl.DateTimeFormat(t,{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(i)}catch{return i.toISOString()}}const X=["carro","motocicleta","caminhao","outro"];function V(){return{plate:"",brand:"",model:"",color:"",vehicleType:"",year:"",status:"active",unitLinkId:""}}function $e(e){if(!e)return V();const t=e.status==="inactive"?"inactive":"active";return{plate:D(e.plate??""),brand:e.brand??"",model:e.model??"",color:e.color??"",vehicleType:(e.vehicleType??"").trim().toLowerCase(),year:(e.year??"").replace(/[^0-9]/g,"").slice(0,4),status:t,unitLinkId:""}}function T(e){return e.trim()||null}function Se(e){const t=e.vehicleType.trim().toLowerCase();return{plate:_e(e.plate),brand:T(e.brand),model:T(e.model),color:T(e.color),vehicleType:X.includes(t)?t:null,year:e.year.replace(/[^0-9]/g,"").slice(0,4)||null,status:e.status==="inactive"?"inactive":"active",unitLinkId:T(e.unitLinkId)}}function K(e,t={}){return!(!fe(e.plate)||!e.model.trim()||t.requireUnit&&!e.unitLinkId.trim())}function Le(e){return e.replace(/[^0-9]/g,"").slice(0,4)}function Te(e,t){return e.plate!==t.plate||e.brand!==t.brand||e.model!==t.model||e.color!==t.color||e.vehicleType!==t.vehicleType||e.year!==t.year||e.status!==t.status||e.unitLinkId!==t.unitLinkId}function Yt(e,t){const i=new Set(t.filter(r=>(r.status??"active").toLowerCase()==="active").map(r=>r.workspaceLinkId));return e.filter(r=>!i.has(r.workspaceLinkId))}const Ve={class:"vperfil__field"},Ae={class:"vperfil__label",for:"veiculo-placa"},Ue=["value","disabled","aria-invalid","aria-describedby"],Ce={key:0,id:"veiculo-placa-erro",class:"vperfil__error"},je={class:"vperfil__field"},We={class:"vperfil__label",for:"veiculo-modelo"},Ne=["disabled","aria-invalid"],De={key:0,class:"vperfil__error"},Fe={class:"vperfil__row"},Re={class:"vperfil__field"},Pe={class:"vperfil__label",for:"veiculo-marca"},xe=["disabled"],Oe={class:"vperfil__field"},Ge={class:"vperfil__label",for:"veiculo-cor"},Me=["disabled"],Be={class:"vperfil__row"},qe={class:"vperfil__field"},Ye={class:"vperfil__label",for:"veiculo-tipo"},He=["disabled"],ze={value:""},Je=["value"],Ke={class:"vperfil__field"},Qe={class:"vperfil__label",for:"veiculo-ano"},Ze=["value","disabled"],Xe={key:0,class:"vperfil__field"},et={class:"vperfil__label",for:"veiculo-unidade"},tt=["disabled"],it={value:""},rt=["value"],nt={class:"vperfil__hint"},at=["disabled"],ot={class:"vperfil__label"},st={class:"vperfil__status-options"},lt=["aria-pressed"],ct=["aria-pressed"],dt={key:1,class:"vperfil__alert",role:"alert"},ut={key:2,class:"vperfil__hint"},pt=de({__name:"IntegratorVeiculoPerfilTab",props:{detail:{default:null},mode:{default:"edit"},allUnits:{default:()=>[]},canEdit:{type:Boolean,default:!0},saving:{type:Boolean,default:!1},requiresUnit:{type:Boolean,default:!1},error:{default:null}},emits:["save","dirtyChange"],setup(e,{expose:t,emit:i}){const r=e,R=i,{t:p}=ue(),ne=v=>p(v),s=ve(V()),P=J(V()),U=J(!1);function ae(){const v=r.mode==="create"?V():$e(r.detail?.vehicle??null);Object.assign(s,v),P.value={...v},U.value=!1}B(()=>[r.detail?.vehicle,r.mode],ae,{immediate:!0});const oe=L(()=>Te(s,P.value));B(oe,v=>R("dirtyChange",v),{immediate:!0});const se=L(()=>r.mode==="create"?r.allUnits:r.detail?.allUnits??[]),x=L(()=>K(s,{requireUnit:r.mode==="create"&&r.requiresUnit})),C=L(()=>s.plate.trim().length>0&&!K({...s,model:"ok"})),O=L(()=>U.value&&!s.model.trim());function le(v){const l=v.target,o=D(l?.value??"");s.plate=o,l&&l.value!==o&&(l.value=o)}function ce(v){const l=v.target,o=Le(l?.value??"");s.year=o,l&&l.value!==o&&(l.value=o)}function G(v){r.canEdit&&(s.status=v)}function M(){U.value=!0,!(!r.canEdit||!x.value)&&R("save",Se(s))}return t({submit:M,valid:x}),(v,l)=>(g(),m("form",{class:"vperfil",novalidate:"",onSubmit:pe(M,["prevent"])},[a("div",Ve,[a("label",Ae,d(u(p)("products.integrator.veiculos-placa-do-veiculo")),1),a("input",{id:"veiculo-placa",class:"vperfil__control vperfil__control--plate",type:"text",inputmode:"text",autocomplete:"off",maxlength:"8",value:s.plate,disabled:!e.canEdit||e.saving,"aria-invalid":C.value,"aria-describedby":C.value?"veiculo-placa-erro":void 0,onInput:le},null,40,Ue),C.value?(g(),m("p",Ce,d(u(p)("products.integrator.veiculos-placa-invalida")),1)):$("",!0)]),a("div",je,[a("label",We,d(u(p)("products.integrator.veiculos-modelo")),1),S(a("input",{id:"veiculo-modelo","onUpdate:modelValue":l[0]||(l[0]=o=>s.model=o),class:"vperfil__control",type:"text",autocomplete:"off",disabled:!e.canEdit||e.saving,"aria-invalid":O.value},null,8,Ne),[[j,s.model]]),O.value?(g(),m("p",De,d(u(p)("products.integrator.veiculos-modelo-obrigatorio")),1)):$("",!0)]),a("div",Fe,[a("div",Re,[a("label",Pe,d(u(p)("products.integrator.veiculos-marca")),1),S(a("input",{id:"veiculo-marca","onUpdate:modelValue":l[1]||(l[1]=o=>s.brand=o),class:"vperfil__control",type:"text",autocomplete:"off",disabled:!e.canEdit||e.saving},null,8,xe),[[j,s.brand]])]),a("div",Oe,[a("label",Ge,d(u(p)("products.integrator.veiculos-cor")),1),S(a("input",{id:"veiculo-cor","onUpdate:modelValue":l[2]||(l[2]=o=>s.color=o),class:"vperfil__control",type:"text",autocomplete:"off",disabled:!e.canEdit||e.saving},null,8,Me),[[j,s.color]])])]),a("div",Be,[a("div",qe,[a("label",Ye,d(u(p)("products.integrator.veiculos-tipo")),1),S(a("select",{id:"veiculo-tipo","onUpdate:modelValue":l[3]||(l[3]=o=>s.vehicleType=o),class:"vperfil__control",disabled:!e.canEdit||e.saving},[a("option",ze,d(u(p)("products.integrator.veiculos-tipo-placeholder")),1),(g(!0),m(Y,null,H(u(X),o=>(g(),m("option",{key:o,value:o},d(u(we)(o,ne)),9,Je))),128))],8,He),[[q,s.vehicleType]])]),a("div",Ke,[a("label",Qe,d(u(p)("products.integrator.veiculos-ano")),1),a("input",{id:"veiculo-ano",class:"vperfil__control",type:"text",inputmode:"numeric",autocomplete:"off",maxlength:"4",value:s.year,disabled:!e.canEdit||e.saving,onInput:ce},null,40,Ze)])]),e.mode==="create"?(g(),m("div",Xe,[a("label",et,d(u(p)("products.integrator.veiculos-unidade-do-veiculo")),1),S(a("select",{id:"veiculo-unidade","onUpdate:modelValue":l[4]||(l[4]=o=>s.unitLinkId=o),class:"vperfil__control",disabled:!e.canEdit||e.saving},[a("option",it,d(u(p)("products.integrator.veiculos-selecione-a-unidade")),1),(g(!0),m(Y,null,H(se.value,o=>(g(),m("option",{key:o.workspaceLinkId,value:o.workspaceLinkId},d(u(ke)(o)),9,rt))),128))],8,tt),[[q,s.unitLinkId]]),a("p",nt,d(u(p)("products.integrator.veiculos-aviso-responsavel-apos-cadastro")),1)])):$("",!0),a("fieldset",{class:"vperfil__field vperfil__status",disabled:!e.canEdit||e.saving},[a("legend",ot,d(u(p)("products.integrator.veiculos-status")),1),a("div",st,[a("button",{type:"button",class:z(["vperfil__status-btn",{"vperfil__status-btn--active":s.status==="active"}]),"aria-pressed":s.status==="active",onClick:l[5]||(l[5]=o=>G("active"))},d(u(p)("products.integrator.veiculos-status-ativo")),11,lt),a("button",{type:"button",class:z(["vperfil__status-btn",{"vperfil__status-btn--inactive":s.status==="inactive"}]),"aria-pressed":s.status==="inactive",onClick:l[6]||(l[6]=o=>G("inactive"))},d(u(p)("products.integrator.veiculos-status-inativo")),11,ct)])],8,at),e.error?(g(),m("p",dt,d(e.error),1)):$("",!0),e.mode==="edit"&&!e.canEdit?(g(),m("p",ut,d(u(p)("products.integrator.veiculos-sem-permissao-editar")),1)):$("",!0)],32))}}),Ht=me(pt,[["__scopeId","data-v-54ccca4c"]]),I={endpoint:ge.hailaJavaGraphqlEndpoint,timeoutMs:3e4},vt=`
  query GetIntegratorVehicles(
    $workspaceId: String!
    $sessionWorkspaceId: String
    $search: String
    $limit: Int
    $offset: Int
  ) {
    prod_get_integrator_vehicle_list_json(
      p_workspace_id: $workspaceId
      p_session_workspace_id: $sessionWorkspaceId
      p_search: $search
      p_limit: $limit
      p_offset: $offset
    ) {
      json
    }
  }
`,Q=`
  mutation GetIntegratorVehicleDetail(
    $workspaceId: String!
    $vehicleId: String
    $sessionWorkspaceId: String
  ) {
    prod_get_integrator_vehicle_detail_json(
      p_workspace_id: $workspaceId
      p_vehicle_id: $vehicleId
      p_session_workspace_id: $sessionWorkspaceId
    ) {
      json
    }
  }
`,_t=`
  mutation GetIntegratorVehicleReleases(
    $workspaceId: String!
    $vehicleId: String!
    $sessionWorkspaceId: String
  ) {
    prod_get_integrator_vehicle_releases_json(
      p_workspace_id: $workspaceId
      p_vehicle_id: $vehicleId
      p_session_workspace_id: $sessionWorkspaceId
    ) {
      json
    }
  }
`,ft=`
  mutation GetIntegratorVehicleTags(
    $workspaceId: String!
    $vehicleId: String!
    $sessionWorkspaceId: String
  ) {
    prod_get_integrator_vehicle_tags_json(
      p_workspace_id: $workspaceId
      p_vehicle_id: $vehicleId
      p_session_workspace_id: $sessionWorkspaceId
    ) {
      json
    }
  }
`,mt=`
  mutation GetIntegratorVehicleEvents(
    $workspaceId: String!
    $vehicleId: String!
    $sessionWorkspaceId: String
    $decision: String
    $direction: String
    $from: String
    $until: String
    $limit: Int
    $offset: Int
  ) {
    prod_get_integrator_vehicle_events_json(
      p_workspace_id: $workspaceId
      p_vehicle_id: $vehicleId
      p_session_workspace_id: $sessionWorkspaceId
      p_decision: $decision
      p_direction: $direction
      p_from: $from
      p_until: $until
      p_limit: $limit
      p_offset: $offset
    ) {
      json
    }
  }
`,gt=`
  mutation UpdateIntegratorVehicle(
    $input: ProdUpdateIntegratorVehicleJsonPInput
    $sessionWorkspaceId: String
  ) {
    prod_update_integrator_vehicle_json(
      p_input: $input
      p_session_workspace_id: $sessionWorkspaceId
    ) {
      json
    }
  }
`,ht=`
  mutation UpdateIntegratorVehicleUnit(
    $input: ProdUpdateIntegratorVehicleUnitJsonPInput
    $sessionWorkspaceId: String
  ) {
    prod_update_integrator_vehicle_unit_json(
      p_input: $input
      p_session_workspace_id: $sessionWorkspaceId
    ) {
      json
    }
  }
`,It=`
  mutation UpdateIntegratorVehicleTag(
    $input: ProdUpdateIntegratorVehicleTagJsonPInput
    $sessionWorkspaceId: String
  ) {
    prod_update_integrator_vehicle_tag_json(
      p_input: $input
      p_session_workspace_id: $sessionWorkspaceId
    ) {
      json
    }
  }
`;function c(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:null}function f(e){return Array.isArray(e)?e:[]}function n(e){return typeof e=="string"?e.trim()||null:typeof e=="number"&&Number.isFinite(e)?String(e):null}function y(e){return e===!0}function E(e,t=0){const i=typeof e=="number"?e:typeof e=="string"?Number(e):NaN;return Number.isFinite(i)?Math.max(0,Math.trunc(i)):t}function w(e){if(Array.isArray(e)){if(e.length===0)return null;const i=c(e[0]);return i?i.json??null:null}const t=c(e);return t?t.json??t:null}function wt(e){const t=c(e);if(!t)return null;const i=n(t.id);return i?{id:i,plate:n(t.plate),brand:n(t.brand),model:n(t.model),color:n(t.color),vehicleType:n(t.vehicleType),year:n(t.year),status:n(t.status)??"active"}:null}function F(e){const t=c(e);if(!t)return null;const i=n(t.workspaceClientId);return i?{workspaceClientId:i,displayName:n(t.displayName)??i,email:n(t.email),phone:n(t.phone),avatarUrl:n(t.avatarUrl),isGroupAdmin:y(t.isGroupAdmin)}:null}function ee(e){const t=c(e);if(!t)return null;const i=n(t.workspaceLinkId);return i?{grantId:n(t.grantId)??i,workspaceLinkId:i,name:n(t.name),complement:n(t.complement),status:n(t.status)??"active"}:null}function te(e){const t=c(e);if(!t)return null;const i=n(t.workspaceLinkId);return i?{workspaceLinkId:i,name:n(t.name),complement:n(t.complement)}:null}function A(e){const t=c(e)??{};return{vehicleRead:y(t.vehicleRead),vehicleCreate:y(t.vehicleCreate),vehicleUpdate:y(t.vehicleUpdate),vehicleDelete:y(t.vehicleDelete)}}function ie(e){const t=c(e);if(!t)return null;const i=wt(t.vehicle);return i?{vehicle:i,owner:F(t.owner),units:f(t.units).map(ee).filter(r=>r!==null)}:null}function Z(e){const t=c(e)??{},i=f(t.items).map(ie).filter(r=>r!==null);return{total:E(t.total,i.length),offset:E(t.offset),limit:E(t.limit,50),abilities:A(t.abilities),items:i}}function kt(e){const t=ie(e);if(!t)return null;const i=c(e)??{};return{...t,allUnits:f(i.allUnits).map(te).filter(r=>r!==null),unitMembers:f(i.unitMembers).map(F).filter(r=>r!==null),abilities:A(i.abilities)}}function yt(e){const t=c(e)??{};return{allUnits:f(t.allUnits).map(te).filter(i=>i!==null),abilities:A(t.abilities)}}function bt(e){const t=c(e);if(!t)return null;const i=n(t.id);return i?{id:i,name:n(t.name)??i,direction:n(t.direction)}:null}function Et(e){const t=c(e);if(!t)return null;const i=n(t.id);return i?{id:i,name:n(t.name)??i,granted:y(t.granted),cameras:f(t.cameras).map(bt).filter(r=>r!==null)}:null}function $t(e){const t=c(e);if(!t)return null;const i=n(t.id);return i?{id:i,name:n(t.name)??i,workspaceName:n(t.workspaceName),parkingConfigId:n(t.parkingConfigId),passages:f(t.passages).map(Et).filter(r=>r!==null)}:null}function St(e){const t=c(e)??{};return{areas:f(t.areas).map($t).filter(i=>i!==null)}}function re(e){const t=c(e);if(!t)return null;const i=n(t.id);return i?{id:i,code:n(t.code)??i,type:n(t.type)??"uhf_tag",status:n(t.status)??"DISABLED"}:null}function Lt(e){const t=c(e)??{};return{vehicleId:n(t.vehicleId),items:f(t.items).map(re).filter(i=>i!==null)}}function Tt(e){const t=n(e);if(!t)return null;const i=new Date(t);return Number.isNaN(i.getTime())?null:i.toISOString()}function Vt(e){const t=c(e);if(!t)return null;const i=n(t.id);return i?{id:i,occurredAt:Tt(t.occurredAt),decision:n(t.decision),direction:n(t.direction),plate:n(t.plate),deviceName:n(t.deviceName)}:null}function At(e){const t=c(e)??{},i=f(t.items).map(Vt).filter(r=>r!==null);return{total:E(t.total,i.length),offset:E(t.offset),limit:E(t.limit,20),items:i}}function N(e){const t=c(e)??{},i=f(t.errorMessages).map(r=>typeof r=="string"?r.trim():"").filter(r=>r.length>0);return{ok:y(t.ok)||y(t.success),vehicleId:n(t.vehicleId),units:Array.isArray(t.units)?t.units.map(ee).filter(r=>r!==null):void 0,owner:t.owner===void 0?void 0:F(t.owner),tag:re(t.tag),errorCode:n(t.errorCode),errorMessages:i}}const zt={async list(e){const t=e.workspaceId.trim();if(!t)return Z(null);try{const i=await he(vt,{workspaceId:t,...b(e.sessionWorkspaceId),search:e.search?.trim()||null,limit:e.limit??50,offset:e.offset??0},I);return Z(w(i.prod_get_integrator_vehicle_list_json))}catch(i){throw new Error(h(i,"Falha ao carregar veículos"))}},async detail(e){const t=e.workspaceId.trim(),i=e.vehicleId.trim();if(!t||!i)return null;try{const r=await k(Q,{workspaceId:t,vehicleId:i,...b(e.sessionWorkspaceId)},I);return kt(w(r.prod_get_integrator_vehicle_detail_json))}catch(r){throw new Error(h(r,"Falha ao carregar o veículo"))}},async unitOptions(e){const t=e.workspaceId.trim();if(!t)return{allUnits:[],abilities:A(null)};try{const i=await k(Q,{workspaceId:t,vehicleId:null,...b(e.sessionWorkspaceId)},I);return yt(w(i.prod_get_integrator_vehicle_detail_json))}catch(i){throw new Error(h(i,"Falha ao carregar as unidades"))}},async releases(e){try{const t=await k(_t,{workspaceId:e.workspaceId,vehicleId:e.vehicleId,...b(e.sessionWorkspaceId)},I);return St(w(t.prod_get_integrator_vehicle_releases_json))}catch(t){throw new Error(h(t,"Falha ao carregar a liberação"))}},async tags(e){try{const t=await k(ft,{workspaceId:e.workspaceId,vehicleId:e.vehicleId,...b(e.sessionWorkspaceId)},I);return Lt(w(t.prod_get_integrator_vehicle_tags_json))}catch(t){throw new Error(h(t,"Falha ao carregar as TAGs"))}},async events(e){try{const t=await k(mt,{workspaceId:e.workspaceId,vehicleId:e.vehicleId,...b(e.sessionWorkspaceId),decision:e.decision??null,direction:e.direction??null,from:e.from??null,until:e.until??null,limit:e.limit??20,offset:e.offset??0},I);return At(w(t.prod_get_integrator_vehicle_events_json))}catch(t){throw new Error(h(t,"Falha ao carregar o histórico"))}},async save(e){try{const t=e.sessionWorkspaceId,i=await k(gt,{input:W({...e},t),sessionWorkspaceId:t?.trim()||null},I);return N(w(i.prod_update_integrator_vehicle_json))}catch(t){throw new Error(h(t,"Falha ao salvar o veículo"))}},async saveUnit(e){try{const t=e.sessionWorkspaceId,i=await k(ht,{input:W({...e},t),sessionWorkspaceId:t?.trim()||null},I);return N(w(i.prod_update_integrator_vehicle_unit_json))}catch(t){throw new Error(h(t,"Falha ao atualizar responsável/unidade"))}},async saveTag(e){try{const t=e.sessionWorkspaceId,i=await k(It,{input:W({...e},t),sessionWorkspaceId:t?.trim()||null},I);return N(w(i.prod_update_integrator_vehicle_tag_json))}catch(t){throw new Error(h(t,"Falha ao salvar a TAG"))}}},Ut="integrator-cliente-veiculo",Ct="integrator-cliente-veiculo-novo";function Jt(e,t){return{name:Ut,params:{workspaceId:e,vehicleId:t}}}function Kt(e){return{name:Ct,params:{workspaceId:e}}}function Qt(e){return{name:"integrator-client-section",params:{workspaceId:e,section:"veiculos"}}}export{Ht as I,we as a,Ft as b,ke as c,Kt as d,Jt as e,Rt as f,Yt as g,Bt as h,zt as i,xt as j,Ot as k,qt as l,Gt as m,Mt as n,Qt as o,Pt as v};
