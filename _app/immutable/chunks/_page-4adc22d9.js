async function r({params:o,fetch:a}){const e=o.id.split("___")[0],n=o.id.split("___")[1],t=await a(`https://api.arclight.org/v2/media-components/${e}/languages/${n}?apiKey=52b06248a3c6e8.12980089`);return t.ok?{film:await t.json()}:{status:t.status,error:new Error(`Could not load JSON for ${e}`)}}const i=Object.freeze(Object.defineProperty({__proto__:null,load:r},Symbol.toStringTag,{value:"Module"}));export{i as _,r as l};
