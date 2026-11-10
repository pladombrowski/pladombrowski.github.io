import{N as p,a3 as m,av as v,ag as k,ae as F,G as M}from"./index-DzwD-3qR.js";import{f as V}from"./file-upload.service-DKpnYEzb.js";const P=`
  query UserRecognition {
    __typename
    userRecognition {
      __typename
      success
      payload {
        __typename
        status
        fileUpload {
          __typename
          id
          key
          url
          userId
        }
        originalFileUpload {
          __typename
          id
          key
          url
          userId
        }
      }
      errorMessages
    }
  }
`,T=`
  mutation SetRecognition($userRecognitionItem: UserRecognitionInput!) {
    __typename
    setUserRecognition(userRecognitionInput: $userRecognitionItem) {
      __typename
      success
      errorMessages
    }
  }
`,j=`
  mutation UpdateUserRecognitionSecure($input: ProdUpdateUserRecognitionSecureJsonPInput) {
    prod_update_user_recognition_secure_json(p_input: $input) {
      json
    }
  }
`,$=`
  mutation DeleteUserRecognitionByUser {
    __typename
    deleteUserRecognitionByUser {
      __typename
      success
      errorMessages
    }
  }
`;function l(o){return o!==null&&typeof o=="object"&&!Array.isArray(o)?o:null}function g(o){return Array.isArray(o)?o:[]}function d(o){if(o==null)return null;const e=String(o).trim();return e===""?null:e}function A(o){const e=l(o);if(!e)return null;const a=d(e.id);return a?{id:a,key:d(e.key),url:d(e.url)}:null}function G(o){if(Array.isArray(o)){if(o.length===0)return null;const a=l(o[0]);return a?a.json??null:null}const e=l(o);return e?e.json??e:null}function u(o,e,a){const t=o[e]??o[a];return t===!0||t==="true"}function h(o){const e=l(o),a=l(e?.validation_details)??e??{},t=l(e?.s3_upload_response)??l(a.s3_upload_response)??l(e?.processed_image),i=t?{id:d(t.id),url:d(t.url)}:null,s={goodLighting:u(a,"goodLighting","good_lighting"),faceDetected:u(a,"faceDetected","face_detected"),noHat:u(a,"noHat","no_hat"),noGlasses:u(a,"noGlasses","no_glasses"),noMask:u(a,"noMask","no_mask"),neutralBackground:u(a,"neutralBackground","neutral_background"),facingCamera:u(a,"facingCamera","facing_camera"),imageSizeValid:u(a,"imageSizeValid","image_size_valid"),imageQuality:u(a,"imageQuality","image_quality")},r=[];return s.faceDetected||r.push("Não conseguimos detectar seu rosto, sua posição pode estar muito lateralizada."),s.goodLighting||r.push("A iluminação do ambiente está muito baixa, ou existe um foco de luz contra a câmera (atrás de você)."),s.neutralBackground||r.push("O fundo da foto possui texturas ou desenhos."),s.noHat||r.push("Você está de chapéu."),s.noGlasses||r.push("Você está de óculos."),s.noMask||r.push("Você está com o rosto coberto."),s.facingCamera||r.push("Posicione-se de frente para a câmera (rosto centralizado)."),s.imageSizeValid||r.push("A imagem não atende ao tamanho mínimo ou máximo esperado."),s.imageQuality||r.push("A qualidade da imagem está abaixo do esperado (nitidez, foco)."),i||r.push("Não foi possível obter a foto processada"),{isAllGood:s.goodLighting&&s.faceDetected&&s.noHat&&s.noGlasses&&s.noMask&&s.neutralBackground&&s.facingCamera&&s.imageSizeValid&&s.imageQuality&&i!==null,...s,s3Url:d(e?.s3_url)??d(a.s3_url)??i?.url??null,processedImage:i,messages:r}}class y extends Error{messages;validation;constructor(e){super(e.messages.join(" ")||"Face validation failed"),this.name="FaceValidationFailedError",this.messages=e.messages,this.validation=e}}const N={async getUserRecognition(){try{const o=await M(P),e=l(o.userRecognition);if(!e)return{success:!1,payload:null,errorMessages:["userRecognition"]};const a=l(e.payload);return{success:e.success===!0,payload:a?{status:d(a.status),fileUpload:A(a.fileUpload),originalFileUpload:A(a.originalFileUpload)}:null,errorMessages:g(e.errorMessages).map(t=>String(t))}}catch{return{success:!1,payload:null,errorMessages:["Failed to fetch user recognition"]}}},async validatePhotoWithAI(o,e){const t=await k()?F():null,i=t?p.faceValidateAndProcessImagesUrl(t):`${p.aiHailaAppBaseUrl}/face-validation/validate-and-process-images`,s={"Content-Type":"application/json",Accept:"*/*"};t&&(s.Authorization=`Bearer ${t}`);const r=await fetch(i,{method:"POST",headers:s,body:JSON.stringify([{img:o,name:e}])});if(r.status===404)throw new Error("Validation endpoint not found (404)");if(!r.ok)throw new Error(`Validation failed with status ${r.status}`);const n=await r.json(),c=Array.isArray(n)?n[0]:n;if(!c)throw new Error("Empty validation response");return h(c)},async setRecognition(o){const e={fileUploadId:o.fileUploadId,originalUserFileUploadId:o.originalUserFileUploadId,status:o.status??"ACTIVE"};if(v==="java"){const i=await m(j,{input:e},{endpoint:p.hailaJavaGraphqlEndpoint,timeoutMs:3e4}),s=l(G(i.prod_update_user_recognition_secure_json));if(!s||s.success!==!0){const r=g(s?.errorMessages).map(n=>String(n)).filter(Boolean);throw new Error(r.join("; ")||"Failed to set recognition")}return}const a=await m(T,{userRecognitionItem:{userRecognitionItem:e}}),t=l(a.setUserRecognition)??l(a.setRecognition);if(!t||t.success!==!0)throw new Error(g(t?.errorMessages).map(i=>String(i)).join("; ")||"Failed to set recognition")},async deleteUserRecognitionByUser(){const o=await m($),e=l(o.deleteUserRecognitionByUser);if(!e||e.success!==!0)throw new Error(g(e?.errorMessages).map(a=>String(a)).join("; ")||"Falha ao remover foto de reconhecimento")},async uploadAndValidateManualPhoto(o,e,a){const t=await V.uploadFile(o,e),i=t.id;let s=t.id,r=t.url,n=null;try{if(n=await N.validatePhotoWithAI(t.url,B(a?.contact===!0)),!n.isAllGood)throw new y(n);s=n.processedImage?.id??t.id,r=n.s3Url??n.processedImage?.url??t.url}catch(c){if(c instanceof y||!(c instanceof Error?c.message:String(c)).includes("404"))throw c}return{fileUploadId:s,originalFileUploadId:i,fileUploadUrl:r,validation:n}},async uploadAndValidatePortariaPhoto(o,e,a){const t=new FormData;return t.append("file",o,e),t.append("condoWorkspaceId",a.condoWorkspaceId.trim()),t.append("sessionWorkspaceId",a.sessionWorkspaceId.trim()),t.append("validateFace","true"),E(p.portariaRecognitionUploadUrl,t,"Portaria")},async uploadAndValidateManagerPhoto(o,e,a){const t=new FormData;t.append("file",o,e),t.append("condoWorkspaceId",a.condoWorkspaceId.trim());const i=a.workspaceClientId?.trim();return i&&t.append("workspaceClientId",i),t.append("sessionWorkspaceId",a.sessionWorkspaceId.trim()),t.append("validateFace","true"),E(p.managerRecognitionUploadUrl,t,"manager")}};async function E(o,e,a){const i=await k()?F():null;if(!i)throw new Error("Sessão expirada. Faça login novamente.");const s=await fetch(o,{method:"POST",headers:{Accept:"*/*",Authorization:`Bearer ${i}`},body:e}),r=await s.text();let n={};if(r)try{n=l(JSON.parse(r))??{}}catch{throw new Error(`Resposta inválida do upload ${a} (HTTP ${s.status}).`)}if(s.status===400&&Array.isArray(n.errorMessages)){const w=n.errorMessages.map(S=>String(S)),R=h(n.validation??{validation_details:{}});throw new y({...R,messages:w.length?w:R.messages,isAllGood:!1})}if(!s.ok||n.success!==!0)throw new Error(d(n.error)??`Falha no upload ${a} (HTTP ${s.status}).`);const c=l(n.originalFileUpload),f=l(n.fileUpload)??c,_=d(c?.id),U=d(f?.id),I=d(f?.url)??d(c?.url);if(!_||!U||!I)throw new Error(`Resposta de upload ${a} incompleta.`);return{fileUploadId:U,originalFileUploadId:_,fileUploadUrl:I,validation:n.validation?h(n.validation):null}}function B(o=!1){return`${Date.now()}haila_recognition${o?"_contact":""}`}export{y as F,B as a,N as f,h as p};
