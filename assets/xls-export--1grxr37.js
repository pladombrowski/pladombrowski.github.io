const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-BXHYwVlb.js","assets/vue-D7GC67Kp.js","assets/vendor-754znjw9.css"])))=>i.map(i=>d[i]);
import{ai as h}from"./index-KU9Zrkrq.js";function p(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}function w(e,t){return e==null||e===""?"<Cell/>":t==="Number"&&typeof e=="number"&&Number.isFinite(e)?`<Cell><Data ss:Type="Number">${e}</Data></Cell>`:`<Cell><Data ss:Type="String">${p(String(e))}</Data></Cell>`}function b(e){return`<Cell ss:StyleID="header"><Data ss:Type="String">${p(e)}</Data></Cell>`}function f(e){return e.some(o=>typeof o=="string"&&o!=="")?"String":"Number"}function y(e,t,o){const r=`<Row>${t.map(b).join("")}</Row>`,n=o.map(l=>{const a=f(l);return`<Row>${l.map(s=>w(s,a)).join("")}</Row>`}).join("");return`<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="header">
   <Font ss:Bold="1"/>
   <Interior ss:Color="#E8EEF7" ss:Pattern="Solid"/>
  </Style>
 </Styles>
 <Worksheet ss:Name="${p(e.slice(0,31))}">
  <Table>
   ${r}
   ${n}
  </Table>
 </Worksheet>
</Workbook>`}function x(e,t,o,r){const n=y(t,o,r),l=new Blob(["\uFEFF",n],{type:"application/vnd.ms-excel;charset=utf-8"}),a=URL.createObjectURL(l),s=window.document.createElement("a");s.href=a,s.download=e.endsWith(".xls")?e:`${e}.xls`,window.document.body.appendChild(s),s.click(),s.remove(),window.setTimeout(()=>URL.revokeObjectURL(a),5e3)}function $(e,t=new Date){const o=n=>String(n).padStart(2,"0"),r=`${t.getFullYear()}${o(t.getMonth()+1)}${o(t.getDate())}_${o(t.getHours())}${o(t.getMinutes())}`;return`${e}_${r}`}async function R(e,t,o,r){const n=await h(()=>import("./vendor-BXHYwVlb.js").then(i=>i.cY),__vite__mapDeps([0,1,2])),l=n.utils.aoa_to_sheet([o,...r.map(i=>i.map(d=>d??""))]),a=n.utils.book_new();n.utils.book_append_sheet(a,l,(t||"Sheet1").slice(0,31));const s=n.write(a,{bookType:"xlsx",type:"array"}),m=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),u=URL.createObjectURL(m),c=window.document.createElement("a");c.href=u,c.download=e.endsWith(".xlsx")?e:`${e}.xlsx`,window.document.body.appendChild(c),c.click(),c.remove(),window.setTimeout(()=>URL.revokeObjectURL(u),5e3)}export{R as a,x as d,$ as t};
