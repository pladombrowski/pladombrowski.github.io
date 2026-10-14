import{a0 as A,a1 as F,V as g,aa as E,E as v}from"./index-Bw5log2n.js";import{f as V}from"./file-upload.service-CFA8sxwP.js";const M=`
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
`,P=`
  mutation SetRecognition($userRecognitionItem: UserRecognitionInput!) {
    __typename
    setUserRecognition(userRecognitionInput: $userRecognitionItem) {
      __typename
      success
      errorMessages
    }
  }
`,T=`
  mutation DeleteUserRecognitionByUser {
    __typename
    deleteUserRecognitionByUser {
      __typename
      success
      errorMessages
    }
  }
`;function l(a){return a!==null&&typeof a=="object"&&!Array.isArray(a)?a:null}function f(a){return Array.isArray(a)?a:[]}function d(a){if(a==null)return null;const e=String(a).trim();return e===""?null:e}function k(a){const e=l(a);if(!e)return null;const o=d(e.id);return o?{id:o,key:d(e.key),url:d(e.url)}:null}function u(a,e,o){const t=a[e]??a[o];return t===!0||t==="true"}function m(a){const e=l(a),o=l(e?.validation_details)??e??{},t=l(e?.s3_upload_response)??l(o.s3_upload_response)??l(e?.processed_image),c=t?{id:d(t.id),url:d(t.url)}:null,s={goodLighting:u(o,"goodLighting","good_lighting"),faceDetected:u(o,"faceDetected","face_detected"),noHat:u(o,"noHat","no_hat"),noGlasses:u(o,"noGlasses","no_glasses"),noMask:u(o,"noMask","no_mask"),neutralBackground:u(o,"neutralBackground","neutral_background"),facingCamera:u(o,"facingCamera","facing_camera"),imageSizeValid:u(o,"imageSizeValid","image_size_valid"),imageQuality:u(o,"imageQuality","image_quality")},r=[];return s.faceDetected||r.push("Não conseguimos detectar seu rosto, sua posição pode estar muito lateralizada."),s.goodLighting||r.push("A iluminação do ambiente está muito baixa, ou existe um foco de luz contra a câmera (atrás de você)."),s.neutralBackground||r.push("O fundo da foto possui texturas ou desenhos."),s.noHat||r.push("Você está de chapéu."),s.noGlasses||r.push("Você está de óculos."),s.noMask||r.push("Você está com o rosto coberto."),s.facingCamera||r.push("Posicione-se de frente para a câmera (rosto centralizado)."),s.imageSizeValid||r.push("A imagem não atende ao tamanho mínimo ou máximo esperado."),s.imageQuality||r.push("A qualidade da imagem está abaixo do esperado (nitidez, foco)."),c||r.push("Não foi possível obter a foto processada"),{isAllGood:s.goodLighting&&s.faceDetected&&s.noHat&&s.noGlasses&&s.noMask&&s.neutralBackground&&s.facingCamera&&s.imageSizeValid&&s.imageQuality&&c!==null,...s,s3Url:d(e?.s3_url)??d(o.s3_url)??c?.url??null,processedImage:c,messages:r}}class h extends Error{messages;validation;constructor(e){super(e.messages.join(" ")||"Face validation failed"),this.name="FaceValidationFailedError",this.messages=e.messages,this.validation=e}}const B={async getUserRecognition(){try{const a=await v(M),e=l(a.userRecognition);if(!e)return{success:!1,payload:null,errorMessages:["userRecognition"]};const o=l(e.payload);return{success:e.success===!0,payload:o?{status:d(o.status),fileUpload:k(o.fileUpload),originalFileUpload:k(o.originalFileUpload)}:null,errorMessages:f(e.errorMessages).map(t=>String(t))}}catch{return{success:!1,payload:null,errorMessages:["Failed to fetch user recognition"]}}},async validatePhotoWithAI(a,e){const t=await A()?F():null,c=t?g.faceValidateAndProcessImagesUrl(t):`${g.aiHailaAppBaseUrl}/face-validation/validate-and-process-images`,s={"Content-Type":"application/json",Accept:"*/*"};t&&(s.Authorization=`Bearer ${t}`);const r=await fetch(c,{method:"POST",headers:s,body:JSON.stringify([{img:a,name:e}])});if(r.status===404)throw new Error("Validation endpoint not found (404)");if(!r.ok)throw new Error(`Validation failed with status ${r.status}`);const n=await r.json(),i=Array.isArray(n)?n[0]:n;if(!i)throw new Error("Empty validation response");return m(i)},async setRecognition(a){const e={fileUploadId:a.fileUploadId,originalUserFileUploadId:a.originalUserFileUploadId,status:a.status??"ACTIVE"},o=await E(P,{userRecognitionItem:{userRecognitionItem:e}}),t=l(o.setUserRecognition)??l(o.setRecognition);if(!t||t.success!==!0)throw new Error(f(t?.errorMessages).map(c=>String(c)).join("; ")||"Failed to set recognition")},async deleteUserRecognitionByUser(){const a=await E(T),e=l(a.deleteUserRecognitionByUser);if(!e||e.success!==!0)throw new Error(f(e?.errorMessages).map(o=>String(o)).join("; ")||"Falha ao remover foto de reconhecimento")},async uploadAndValidateManualPhoto(a,e,o){const t=await V.uploadFile(a,e),c=t.id;let s=t.id,r=t.url,n=null;try{if(n=await B.validatePhotoWithAI(t.url,x(o?.contact===!0)),!n.isAllGood)throw new h(n);s=n.processedImage?.id??t.id,r=n.s3Url??n.processedImage?.url??t.url}catch(i){if(i instanceof h||!(i instanceof Error?i.message:String(i)).includes("404"))throw i}return{fileUploadId:s,originalFileUploadId:c,fileUploadUrl:r,validation:n}},async uploadAndValidatePortariaPhoto(a,e,o){const c=await A()?F():null;if(!c)throw new Error("Sessão expirada. Faça login novamente.");const s=new FormData;s.append("file",a,e),s.append("condoWorkspaceId",o.condoWorkspaceId.trim()),s.append("sessionWorkspaceId",o.sessionWorkspaceId.trim()),s.append("validateFace","true");const r=await fetch(g.portariaRecognitionUploadUrl,{method:"POST",headers:{Accept:"*/*",Authorization:`Bearer ${c}`},body:s}),n=await r.text();let i={};if(n)try{i=l(JSON.parse(n))??{}}catch{throw new Error(`Resposta inválida do upload Portaria (HTTP ${r.status}).`)}if(r.status===400&&Array.isArray(i.errorMessages)){const I=i.errorMessages.map(S=>String(S)),R=m(i.validation??{validation_details:{}});throw new h({...R,messages:I.length?I:R.messages,isAllGood:!1})}if(!r.ok||i.success!==!0)throw new Error(d(i.error)??`Falha no upload Portaria (HTTP ${r.status}).`);const p=l(i.originalFileUpload),y=l(i.fileUpload)??p,U=d(p?.id),_=d(y?.id),w=d(y?.url)??d(p?.url);if(!U||!_||!w)throw new Error("Resposta de upload Portaria incompleta.");return{fileUploadId:_,originalFileUploadId:U,fileUploadUrl:w,validation:i.validation?m(i.validation):null}}};function x(a=!1){return`${Date.now()}haila_recognition${a?"_contact":""}`}export{h as F,x as a,B as f,m as p};
