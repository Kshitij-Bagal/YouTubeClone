import{u as p,r as s,j as e}from"./index-BLwjDCQM.js";import{V as f}from"./VideoList-7VBI3Dw2.js";import"./VideoCard-C1McWVxo.js";function y(){const{type:t}=p(),[c,d]=s.useState([]),[a,l]=s.useState(!0),[o,i]=s.useState(null);return s.useEffect(()=>{(async()=>{try{const r=await fetch(`http://localhost:8000/api/videos/types/${encodeURIComponent(t)}`),n=await r.json();r.ok?d(n):i(n.message||"Failed to load videos")}catch{i("Error fetching videos")}finally{l(!1)}})()},[t]),e.jsxs("div",{className:"browse",children:[e.jsxs("h1",{children:["Browse: ",t]}),a&&e.jsx("p",{children:"Loading videos..."}),o&&e.jsx("p",{children:o}),!a&&!o&&e.jsx(f,{videos:c})]})}export{y as default};
