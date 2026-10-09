function i(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}function c(e,t){return e==null||e===""?"<Cell/>":t==="Number"&&typeof e=="number"&&Number.isFinite(e)?`<Cell><Data ss:Type="Number">${e}</Data></Cell>`:`<Cell><Data ss:Type="String">${i(String(e))}</Data></Cell>`}function u(e){return`<Cell ss:StyleID="header"><Data ss:Type="String">${i(e)}</Data></Cell>`}function m(e){return e.some(o=>typeof o=="string"&&o!=="")?"String":"Number"}function p(e,t,o){const s=`<Row>${t.map(u).join("")}</Row>`,r=o.map(a=>{const l=m(a);return`<Row>${a.map(n=>c(n,l)).join("")}</Row>`}).join("");return`<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="header">
   <Font ss:Bold="1"/>
   <Interior ss:Color="#E8EEF7" ss:Pattern="Solid"/>
  </Style>
 </Styles>
 <Worksheet ss:Name="${i(e.slice(0,31))}">
  <Table>
   ${s}
   ${r}
  </Table>
 </Worksheet>
</Workbook>`}function d(e,t,o,s){const r=p(t,o,s),a=new Blob(["\uFEFF",r],{type:"application/vnd.ms-excel;charset=utf-8"}),l=URL.createObjectURL(a),n=window.document.createElement("a");n.href=l,n.download=e.endsWith(".xls")?e:`${e}.xls`,window.document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(l),5e3)}function g(e,t=new Date){const o=r=>String(r).padStart(2,"0"),s=`${t.getFullYear()}${o(t.getMonth()+1)}${o(t.getDate())}_${o(t.getHours())}${o(t.getMinutes())}`;return`${e}_${s}`}export{d,g as t};
