import{a1 as p,R as y,T as _,O as f,E as U}from"./index-BETMuM7v.js";import{f as R}from"./file-upload.service-BCvMLRB-.js";const I=`
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
`,w=`
  mutation SetRecognition($userRecognitionItem: UserRecognitionInput!) {
    __typename
    setUserRecognition(userRecognitionInput: $userRecognitionItem) {
      __typename
      success
      errorMessages
    }
  }
`,A=`
  mutation DeleteUserRecognitionByUser {
    __typename
    deleteUserRecognitionByUser {
      __typename
      success
      errorMessages
    }
  }
`;function r(o){return o!==null&&typeof o=="object"&&!Array.isArray(o)?o:null}function g(o){return Array.isArray(o)?o:[]}function d(o){if(o==null)return null;const e=String(o).trim();return e===""?null:e}function m(o){const e=r(o);if(!e)return null;const a=d(e.id);return a?{id:a,key:d(e.key),url:d(e.url)}:null}function u(o,e,a){const t=o[e]??o[a];return t===!0||t==="true"}function E(o){const e=r(o),a=r(e?.validation_details)??e??{},t=r(e?.s3_upload_response)??r(a.s3_upload_response)??r(e?.processed_image),l=t?{id:d(t.id),url:d(t.url)}:null,s={goodLighting:u(a,"goodLighting","good_lighting"),faceDetected:u(a,"faceDetected","face_detected"),noHat:u(a,"noHat","no_hat"),noGlasses:u(a,"noGlasses","no_glasses"),noMask:u(a,"noMask","no_mask"),neutralBackground:u(a,"neutralBackground","neutral_background"),facingCamera:u(a,"facingCamera","facing_camera"),imageSizeValid:u(a,"imageSizeValid","image_size_valid"),imageQuality:u(a,"imageQuality","image_quality")},i=[];return s.faceDetected||i.push("Não conseguimos detectar seu rosto, sua posição pode estar muito lateralizada."),s.goodLighting||i.push("A iluminação do ambiente está muito baixa, ou existe um foco de luz contra a câmera (atrás de você)."),s.neutralBackground||i.push("O fundo da foto possui texturas ou desenhos."),s.noHat||i.push("Você está de chapéu."),s.noGlasses||i.push("Você está de óculos."),s.noMask||i.push("Você está com o rosto coberto."),s.facingCamera||i.push("Posicione-se de frente para a câmera (rosto centralizado)."),s.imageSizeValid||i.push("A imagem não atende ao tamanho mínimo ou máximo esperado."),s.imageQuality||i.push("A qualidade da imagem está abaixo do esperado (nitidez, foco)."),l||i.push("Não foi possível obter a foto processada"),{isAllGood:s.goodLighting&&s.faceDetected&&s.noHat&&s.noGlasses&&s.noMask&&s.neutralBackground&&s.facingCamera&&s.imageSizeValid&&s.imageQuality&&l!==null,...s,s3Url:d(e?.s3_url)??d(a.s3_url)??l?.url??null,processedImage:l,messages:i}}class h extends Error{messages;validation;constructor(e){super(e.messages.join(" ")||"Face validation failed"),this.name="FaceValidationFailedError",this.messages=e.messages,this.validation=e}}const F={async getUserRecognition(){try{const o=await U(I),e=r(o.userRecognition);if(!e)return{success:!1,payload:null,errorMessages:["userRecognition"]};const a=r(e.payload);return{success:e.success===!0,payload:a?{status:d(a.status),fileUpload:m(a.fileUpload),originalFileUpload:m(a.originalFileUpload)}:null,errorMessages:g(e.errorMessages).map(t=>String(t))}}catch{return{success:!1,payload:null,errorMessages:["Failed to fetch user recognition"]}}},async validatePhotoWithAI(o,e){const t=await y()?_():null,l=t?f.faceValidateAndProcessImagesUrl(t):`${f.aiHailaAppBaseUrl}/face-validation/validate-and-process-images`,s={"Content-Type":"application/json",Accept:"*/*"};t&&(s.Authorization=`Bearer ${t}`);const i=await fetch(l,{method:"POST",headers:s,body:JSON.stringify([{img:o,name:e}])});if(i.status===404)throw new Error("Validation endpoint not found (404)");if(!i.ok)throw new Error(`Validation failed with status ${i.status}`);const n=await i.json(),c=Array.isArray(n)?n[0]:n;if(!c)throw new Error("Empty validation response");return E(c)},async setRecognition(o){const e={fileUploadId:o.fileUploadId,originalUserFileUploadId:o.originalUserFileUploadId,status:o.status??"ACTIVE"},a=await p(w,{userRecognitionItem:{userRecognitionItem:e}}),t=r(a.setUserRecognition)??r(a.setRecognition);if(!t||t.success!==!0)throw new Error(g(t?.errorMessages).map(l=>String(l)).join("; ")||"Failed to set recognition")},async deleteUserRecognitionByUser(){const o=await p(A),e=r(o.deleteUserRecognitionByUser);if(!e||e.success!==!0)throw new Error(g(e?.errorMessages).map(a=>String(a)).join("; ")||"Falha ao remover foto de reconhecimento")},async uploadAndValidateManualPhoto(o,e,a){const t=await R.uploadFile(o,e),l=t.id;let s=t.id,i=t.url,n=null;try{if(n=await F.validatePhotoWithAI(t.url,S(a?.contact===!0)),!n.isAllGood)throw new h(n);s=n.processedImage?.id??t.id,i=n.s3Url??n.processedImage?.url??t.url}catch(c){if(c instanceof h||!(c instanceof Error?c.message:String(c)).includes("404"))throw c}return{fileUploadId:s,originalFileUploadId:l,fileUploadUrl:i,validation:n}}};function S(o=!1){return`${Date.now()}haila_recognition${o?"_contact":""}`}export{h as F,S as a,F as f};
