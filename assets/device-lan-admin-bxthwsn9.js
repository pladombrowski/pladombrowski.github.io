import{T as h,S as m,af as _,cG as A,cr as I}from"./index-Dczi3G9i.js";const v={endpoint:h.hailaJavaGraphqlEndpoint,timeoutMs:45e3},w=`
  query GetWorkspaceAreasWithDevices($args: get_workspace_areas_with_devices_json_args!) {
    get_workspace_areas_with_devices_json(args: $args) {
      json
    }
  }
`,b=`
  query GetWorkspaceAreasWithDevices(
    $p_workspace_id: String!
    $p_offset: Int!
    $p_limit: Int!
  ) {
    prod_get_workspace_areas_with_devices_json(
      p_workspace_id: $p_workspace_id
      p_offset: $p_offset
      p_limit: $p_limit
    ) {
      json
    }
  }
`;function D(e){if(!e)return null;if(typeof e=="string")try{const s=JSON.parse(e);return s&&typeof s=="object"?s:null}catch{return null}return typeof e!="object"?null:e}function g(e){const s=e.status??e.deviceStatus??{},n=e.deviceType??e.type??{},i=e.passage??{};return{id:String(e.id??e.deviceId??""),name:String(e.name??e.deviceName??""),statusName:s.name??e.statusName??null,typeName:n.name??e.deviceTypeName??null,passageName:i.name??e.passageName??null}}function j(e){const s=[],n=Array.isArray(e.areaDevices)?e.areaDevices:[];for(const t of n)t&&typeof t=="object"&&s.push(g(t));const i=Array.isArray(e.passages)?e.passages:[];for(const t of i){if(!t||typeof t!="object")continue;const o=t,a=Array.isArray(o.devices)?o.devices:[];for(const r of a)r&&typeof r=="object"&&s.push(g(r))}return s}function E(e){const s=e.areaType??{};return{id:String(e.id??""),name:String(e.name??""),hierarchyName:e.hierarchyName??null,typeName:s.name??e.areaTypeName??null,devices:j(e)}}const C=`
  query GetDeviceById($deviceId: uuid!, $userId: uuid!) {
    getdevicebyidjson(args: { device_id: $deviceId, user_id: $userId }) {
      json
    }
  }
`,N=`
  query FnDeviceById($deviceId: String!) {
    __typename
    fn_device_by_id(deviceId: $deviceId) {
      __typename
      json
    }
  }
`;function d(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function u(e){return e==null?"":String(e)}function T(e){if(e.found===!1)return null;const s=u(e.id).trim();if(!s)return null;const n=d(e.deviceTemplate),i=d(e.bridge),t=[];if(Array.isArray(n?.deviceTemplateConfigs))for(const a of n.deviceTemplateConfigs){const r=d(a);r&&t.push({id:u(r.id),fieldSlug:u(r.fieldSlug)})}const o=[];if(Array.isArray(e.deviceConfigs))for(const a of e.deviceConfigs){const r=d(a);if(!r)continue;const p=d(r.deviceTemplateConfig);o.push({templateConfigId:u(r.deviceTemplateConfigId),fieldSlug:r.fieldSlug??p?.fieldSlug??null,value:u(r.value)})}return{id:s,name:u(e.name),workspaceId:u(e.workspaceId),bridgeLocalIp:i?.localIp??i?.local_ip??null,configs:o,templateFields:t}}const G={async getDeviceById(e,s){const n=_(I)==="java",i=n?await m(N,{deviceId:e},v):await m(C,{deviceId:e,userId:s}),t=n?i.fn_device_by_id:i.getdevicebyidjson,o=Array.isArray(t)&&t.length>0?d(t[0]):null,a=d(o?.json),r=a?T(a):null;if(!r)throw new Error("Dispositivo não encontrado");return r},async getAreasWithDevices(e){const s=_(A)==="java",n=await m(s?b:w,s?{p_workspace_id:e,p_offset:0,p_limit:200}:{args:{p_workspace_id:e,p_offset:0,p_limit:200}},s?v:{timeoutMs:45e3}),i=s?n.prod_get_workspace_areas_with_devices_json:n.get_workspace_areas_with_devices_json,t=Array.isArray(i)&&i.length>0?i[0]:null,o=D(t&&typeof t=="object"?t.json:i);return o?(Array.isArray(o.areas)?o.areas:[]).filter(r=>!!r&&typeof r=="object").map(E).filter(r=>r.id||r.name):[]}},$=new Set(["host","ip","ipv4","device_ip","deviceIp","device_host","deviceHost","local_ip","localIp","server","server-name","server_name","serverName","server_host","serverHost","ip_address","ipAddress","endereco_ip","enderecoIp"]),k=new Set(["username","user","user_name","userName","login","admin","admin_user","adminUser","admin_username","adminUsername","usuario","usuário"]),P=new Set(["password","pass","pwd","senha","admin_password","adminPassword","admin_pass","adminPass","user_password","userPassword","user_pass","userPass"]),R=new Set(["http_port","httpPort","port","porta","admin_port","adminPort"]);function U(e){const s={};for(const i of e.configs){const t=i.templateConfigId.trim();t&&(s[t]=i.value)}const n={};for(const i of e.templateFields){const t=i.fieldSlug.trim();if(!t)continue;const o=(s[i.id]??"").trim();o&&(n[t]=o)}for(const i of e.configs){const t=(i.fieldSlug??"").trim(),o=i.value.trim();!t||!o||t in n||(n[t]=o)}return n}function f(e,s){for(const i of s){const t=(e[i]??"").trim();if(t)return t}const n={};for(const[i,t]of Object.entries(e))n[i.toLowerCase()]=t;for(const i of s){const t=(n[i.toLowerCase()]??"").trim();if(t)return t}return null}function y(e){const s=e.trim();if(!s)return null;const i=/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(s)?s:s.includes("@")?`isapi://${s}`:null;if(i)try{const t=new URL(i);if(t.hostname)return t}catch{}if(/^(?:\d{1,3}(?:\.\d{1,3}){3}|[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])?)$/.test(s))try{return new URL(`http://${s}`)}catch{return null}return null}function L(e){const s=U(e);let n=null;const i=f(s,$);if(i&&(n=y(i)),!n){for(const c of Object.values(s))if(!(!c.includes("@")&&!c.includes("://")&&!/^\d{1,3}(?:\.\d{1,3}){3}$/.test(c.trim()))&&(n=y(c),n))break}let t=n?.hostname?.trim()??"";if(t||(t=(i??"").trim()),t||(t=(e.bridgeLocalIp??"").trim()),!t)return null;let o="",a="";n&&n.username&&(o=decodeURIComponent(n.username),n.password&&(a=decodeURIComponent(n.password))),o=f(s,k)??o,a=f(s,P)??a,o||(o="admin");let r=80,p=!1;if(n){const c=Number.parseInt(n.port,10);Number.isFinite(c)&&c>0&&(r=n.protocol==="rtsp:"||n.protocol==="tapo:"?80:c),n.protocol==="https:"&&(p=!0)}const S=f(s,R),l=Number.parseInt(S??"",10);return Number.isFinite(l)&&l>0&&l<=65535&&(r=l),{host:t,httpPort:r,useHttps:p,adminUsername:o,adminPassword:a}}export{G as d,L as e};
