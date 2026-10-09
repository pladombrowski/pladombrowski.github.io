import{y as r,p as o,z as n}from"./index-cuTyV6IG.js";const t=`
  query CanSendRecoveryCodeToPhone_CORE($email: String!) {
    __typename
    canSendRecoveryCodeToPhone_CORE(email: $email) {
      __typename
      errorMessages
      payload
      success
    }
  }
`,c=`
  mutation SendRecoveryPasswordCodeToWhatsApp_CORE($email: String!) {
    __typename
    sendRecoveryPasswordCodeToWhatsApp_CORE(email: $email) {
      __typename
      errorMessages
      payload
      success
    }
  }
`,d=`
  mutation RecoverPassword($input: RecoverPasswordInput!) {
    __typename
    recoverPassword_CORE(input: $input) {
      __typename
      success
      errorMessages
      payload
    }
  }
`,i=`
  mutation RecoverPasswordByPhone($input: RecoverPasswordByPhoneInput!) {
    recoverPasswordByPhone_CORE(input: $input) {
      success
      payload
      errorMessages
    }
  }
`,u=`
  mutation ValidateAccessCode(
    $accessCode: String!
    $email: String
    $phoneNumber: String
    $codeType: String!
  ) {
    __typename
    validateAccessCode_CORE(
      input: {
        accessCode: $accessCode
        email: $email
        codeType: $codeType
        phoneNumber: $phoneNumber
      }
    ) {
      __typename
      payload
      errorMessages
      success
    }
  }
`,p=`
  mutation ChangePassword(
    $email: String
    $phoneNumber: String
    $password: String!
    $accessCode: String!
  ) {
    __typename
    changePassword_CORE(
      changeUserPasswordInput: {
        email: $email
        password: $password
        accessCode: $accessCode
        phoneNumber: $phoneNumber
      }
    ) {
      __typename
      success
      errorMessages
      payload
    }
  }
`,m={async canSendRecoveryCodeToPhone(e){return(await n(t,{email:o(e)},{auth:!1})).canSendRecoveryCodeToPhone_CORE},async sendRecoveryPasswordCodeToWhatsApp(e){return(await r(c,{email:o(e)})).sendRecoveryPasswordCodeToWhatsApp_CORE},async recoveryPassword(e){const a=(await r(d,{input:{email:o(e)}})).recoverPassword_CORE;if(a.success&&a.payload===!0)return!0;if(!a.success&&a.errorMessages.length)throw new Error(a.errorMessages.join(", "));return!1},async recoverPasswordByPhone(e){const a=(await r(i,{input:{phoneNumber:e}})).recoverPasswordByPhone_CORE;if(a.success)return!0;if(a.errorMessages.length)throw new Error(a.errorMessages.join(", "));return!1},async validateAccessCode(e){const a=(await r(u,{accessCode:e.accessCode,email:e.email?o(e.email):null,phoneNumber:e.phoneNumber?.length?e.phoneNumber:null,codeType:"RECOVERY"})).validateAccessCode_CORE;if(a.success&&a.payload===!0)return!0;if(a.errorMessages.length)throw new Error(a.errorMessages.join(", "));return!1},async changePassword(e){const a=(await r(p,{email:e.email?o(e.email):null,phoneNumber:e.phoneNumber?.length?e.phoneNumber:null,password:e.password,accessCode:e.accessCode})).changePassword_CORE;if(!a.success)throw new Error(a.errorMessages.join(", ")||"Falha ao alterar senha");if(!a.payload)throw new Error("Token ausente apos alterar senha");return a.payload}};export{m as r};
