import{V as p,G as y,I as _,J as f,z as h}from"./index-cuTyV6IG.js";const U=`
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
`,R=`
  mutation SetRecognition($userRecognitionItem: UserRecognitionInput!) {
    __typename
    setUserRecognition(userRecognitionInput: $userRecognitionItem) {
      __typename
      success
      errorMessages
    }
  }
`,I=`
  mutation DeleteUserRecognitionByUser {
    __typename
    deleteUserRecognitionByUser {
      __typename
      success
      errorMessages
    }
  }
`;function i(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)?e:null}function d(e){return Array.isArray(e)?e:[]}function l(e){if(e==null)return null;const o=String(e).trim();return o===""?null:o}function m(e){const o=i(e);if(!o)return null;const a=l(o.id);return a?{id:a,key:l(o.key),url:l(o.url)}:null}function r(e,o,a){const t=e[o]??e[a];return t===!0||t==="true"}function w(e){const o=i(e),a=i(o?.validation_details)??o??{},t=i(o?.s3_upload_response)??i(a.s3_upload_response)??i(o?.processed_image),c=t?{id:l(t.id),url:l(t.url)}:null,s={goodLighting:r(a,"goodLighting","good_lighting"),faceDetected:r(a,"faceDetected","face_detected"),noHat:r(a,"noHat","no_hat"),noGlasses:r(a,"noGlasses","no_glasses"),noMask:r(a,"noMask","no_mask"),neutralBackground:r(a,"neutralBackground","neutral_background"),facingCamera:r(a,"facingCamera","facing_camera"),imageSizeValid:r(a,"imageSizeValid","image_size_valid"),imageQuality:r(a,"imageQuality","image_quality")},n=[];return s.faceDetected||n.push("Não conseguimos detectar seu rosto, sua posição pode estar muito lateralizada."),s.goodLighting||n.push("A iluminação do ambiente está muito baixa, ou existe um foco de luz contra a câmera (atrás de você)."),s.neutralBackground||n.push("O fundo da foto possui texturas ou desenhos."),s.noHat||n.push("Você está de chapéu."),s.noGlasses||n.push("Você está de óculos."),s.noMask||n.push("Você está com o rosto coberto."),s.facingCamera||n.push("Posicione-se de frente para a câmera (rosto centralizado)."),s.imageSizeValid||n.push("A imagem não atende ao tamanho mínimo ou máximo esperado."),s.imageQuality||n.push("A qualidade da imagem está abaixo do esperado (nitidez, foco)."),c||n.push("Não foi possível obter a foto processada"),{isAllGood:s.goodLighting&&s.faceDetected&&s.noHat&&s.noGlasses&&s.noMask&&s.neutralBackground&&s.facingCamera&&s.imageSizeValid&&s.imageQuality&&c!==null,...s,s3Url:l(o?.s3_url)??l(a.s3_url)??c?.url??null,processedImage:c,messages:n}}const k={async getUserRecognition(){try{const e=await h(U),o=i(e.userRecognition);if(!o)return{success:!1,payload:null,errorMessages:["userRecognition"]};const a=i(o.payload);return{success:o.success===!0,payload:a?{status:l(a.status),fileUpload:m(a.fileUpload),originalFileUpload:m(a.originalFileUpload)}:null,errorMessages:d(o.errorMessages).map(t=>String(t))}}catch{return{success:!1,payload:null,errorMessages:["Failed to fetch user recognition"]}}},async validatePhotoWithAI(e,o){const t=await y()?_():null,c=t?f.faceValidateAndProcessImagesUrl(t):`${f.aiHailaAppBaseUrl}/face-validation/validate-and-process-images`,s={"Content-Type":"application/json",Accept:"*/*"};t&&(s.Authorization=`Bearer ${t}`);const n=await fetch(c,{method:"POST",headers:s,body:JSON.stringify([{img:e,name:o}])});if(n.status===404)throw new Error("Validation endpoint not found (404)");if(!n.ok)throw new Error(`Validation failed with status ${n.status}`);const u=await n.json(),g=Array.isArray(u)?u[0]:u;if(!g)throw new Error("Empty validation response");return w(g)},async setRecognition(e){const o={fileUploadId:e.fileUploadId,originalUserFileUploadId:e.originalUserFileUploadId,status:e.status??"ACTIVE"},a=await p(R,{userRecognitionItem:{userRecognitionItem:o}}),t=i(a.setUserRecognition)??i(a.setRecognition);if(!t||t.success!==!0)throw new Error(d(t?.errorMessages).map(c=>String(c)).join("; ")||"Failed to set recognition")},async deleteUserRecognitionByUser(){const e=await p(I),o=i(e.deleteUserRecognitionByUser);if(!o||o.success!==!0)throw new Error(d(o?.errorMessages).map(a=>String(a)).join("; ")||"Falha ao remover foto de reconhecimento")}};function S(e=!1){return`${Date.now()}haila_recognition${e?"_contact":""}`}export{S as a,k as f};
