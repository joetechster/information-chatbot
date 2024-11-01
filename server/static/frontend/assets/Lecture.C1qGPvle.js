import{Y as kt,b as D,A as Ft,Z as jt,j as A,L as vt,T as U,$ as zt,C as Y,a0 as mt,a1 as Ht,F as Vt}from"./main.R4OWzCMX.js";import{G as it}from"./Grid.D9WAuUnX.js";var K={},Kt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Ct={},N={};let lt;const Jt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];N.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};N.getSymbolTotalCodewords=function(t){return Jt[t]};N.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};N.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');lt=t};N.isKanjiModeEnabled=function(){return typeof lt<"u"};N.toSJIS=function(t){return lt(t)};var Q={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,n){if(e.isValid(r))return r;try{return t(r)}catch{return n}}})(Q);function Et(){this.buffer=[],this.length=0}Et.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var xt=Et;function J(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}J.prototype.set=function(e,t,i,r){const n=e*this.size+t;this.data[n]=i,r&&(this.reservedBit[n]=!0)};J.prototype.get=function(e,t){return this.data[e*this.size+t]};J.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};J.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Ot=J,Bt={};(function(e){const t=N.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const n=Math.floor(r/7)+2,o=t(r),s=o===145?26:Math.ceil((o-13)/(2*n-2))*2,a=[o-7];for(let u=1;u<n-1;u++)a[u]=a[u-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const n=[],o=e.getRowColCoords(r),s=o.length;for(let a=0;a<s;a++)for(let u=0;u<s;u++)a===0&&u===0||a===0&&u===s-1||a===s-1&&u===0||n.push([o[a],o[u]]);return n}})(Bt);var At={};const Yt=N.getSymbolSize,wt=7;At.getPositions=function(t){const i=Yt(t);return[[0,0],[i-wt,0],[0,i-wt]]};var Tt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7},e.from=function(n){return e.isValid(n)?parseInt(n,10):void 0},e.getPenaltyN1=function(n){const o=n.size;let s=0,a=0,u=0,c=null,l=null;for(let E=0;E<o;E++){a=u=0,c=l=null;for(let g=0;g<o;g++){let f=n.get(E,g);f===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=f,a=1),f=n.get(g,E),f===l?u++:(u>=5&&(s+=t.N1+(u-5)),l=f,u=1)}a>=5&&(s+=t.N1+(a-5)),u>=5&&(s+=t.N1+(u-5))}return s},e.getPenaltyN2=function(n){const o=n.size;let s=0;for(let a=0;a<o-1;a++)for(let u=0;u<o-1;u++){const c=n.get(a,u)+n.get(a,u+1)+n.get(a+1,u)+n.get(a+1,u+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(n){const o=n.size;let s=0,a=0,u=0;for(let c=0;c<o;c++){a=u=0;for(let l=0;l<o;l++)a=a<<1&2047|n.get(c,l),l>=10&&(a===1488||a===93)&&s++,u=u<<1&2047|n.get(l,c),l>=10&&(u===1488||u===93)&&s++}return s*t.N3},e.getPenaltyN4=function(n){let o=0;const s=n.data.length;for(let u=0;u<s;u++)o+=n.data[u];return Math.abs(Math.ceil(o*100/s/5)-10)*t.N4};function i(r,n,o){switch(r){case e.Patterns.PATTERN000:return(n+o)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return o%3===0;case e.Patterns.PATTERN011:return(n+o)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(o/3))%2===0;case e.Patterns.PATTERN101:return n*o%2+n*o%3===0;case e.Patterns.PATTERN110:return(n*o%2+n*o%3)%2===0;case e.Patterns.PATTERN111:return(n*o%3+(n+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(n,o){const s=o.size;for(let a=0;a<s;a++)for(let u=0;u<s;u++)o.isReserved(u,a)||o.xor(u,a,i(n,u,a))},e.getBestMask=function(n,o){const s=Object.keys(e.Patterns).length;let a=0,u=1/0;for(let c=0;c<s;c++){o(c),e.applyMask(c,n);const l=e.getPenaltyN1(n)+e.getPenaltyN2(n)+e.getPenaltyN3(n)+e.getPenaltyN4(n);e.applyMask(c,n),l<u&&(u=l,a=c)}return a}})(Tt);var q={};const L=Q,x=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],O=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];q.getBlocksCount=function(t,i){switch(i){case L.L:return x[(t-1)*4+0];case L.M:return x[(t-1)*4+1];case L.Q:return x[(t-1)*4+2];case L.H:return x[(t-1)*4+3];default:return}};q.getTotalCodewordsCount=function(t,i){switch(i){case L.L:return O[(t-1)*4+0];case L.M:return O[(t-1)*4+1];case L.Q:return O[(t-1)*4+2];case L.H:return O[(t-1)*4+3];default:return}};var It={},W={};const H=new Uint8Array(512),$=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)H[i]=t,$[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)H[i]=H[i-255]})();W.log=function(t){if(t<1)throw new Error("log("+t+")");return $[t]};W.exp=function(t){return H[t]};W.mul=function(t,i){return t===0||i===0?0:H[$[t]+$[i]]};(function(e){const t=W;e.mul=function(r,n){const o=new Uint8Array(r.length+n.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<n.length;a++)o[s+a]^=t.mul(r[s],n[a]);return o},e.mod=function(r,n){let o=new Uint8Array(r);for(;o.length-n.length>=0;){const s=o[0];for(let u=0;u<n.length;u++)o[u]^=t.mul(n[u],s);let a=0;for(;a<o.length&&o[a]===0;)a++;o=o.slice(a)}return o},e.generateECPolynomial=function(r){let n=new Uint8Array([1]);for(let o=0;o<r;o++)n=e.mul(n,new Uint8Array([1,t.exp(o)]));return n}})(It);const Nt=It;function ft(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}ft.prototype.initialize=function(t){this.degree=t,this.genPoly=Nt.generateECPolynomial(this.degree)};ft.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const r=Nt.mod(i,this.genPoly),n=this.degree-r.length;if(n>0){const o=new Uint8Array(this.degree);return o.set(r,n),o}return r};var $t=ft,bt={},_={},dt={};dt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var S={};const Pt="[0-9]+",Gt="[A-Z $%*+\\-./:]+";let V="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";V=V.replace(/u/g,"\\u");const Qt="(?:(?![A-Z0-9 $%*+\\-./:]|"+V+`)(?:.|[\r
]))+`;S.KANJI=new RegExp(V,"g");S.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");S.BYTE=new RegExp(Qt,"g");S.NUMERIC=new RegExp(Pt,"g");S.ALPHANUMERIC=new RegExp(Gt,"g");const qt=new RegExp("^"+V+"$"),Wt=new RegExp("^"+Pt+"$"),Zt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");S.testKanji=function(t){return qt.test(t)};S.testNumeric=function(t){return Wt.test(t)};S.testAlphanumeric=function(t){return Zt.test(t)};(function(e){const t=dt,i=S;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},e.getBestModeForData=function(o){return i.testNumeric(o)?e.NUMERIC:i.testAlphanumeric(o)?e.ALPHANUMERIC:i.testKanji(o)?e.KANJI:e.BYTE},e.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},e.isValid=function(o){return o&&o.bit&&o.ccBits};function r(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+n)}}e.from=function(o,s){if(e.isValid(o))return o;try{return r(o)}catch{return s}}})(_);(function(e){const t=N,i=q,r=Q,n=_,o=dt,s=7973,a=t.getBCHDigit(s);function u(g,f,d){for(let w=1;w<=40;w++)if(f<=e.getCapacity(w,d,g))return w}function c(g,f){return n.getCharCountIndicator(g,f)+4}function l(g,f){let d=0;return g.forEach(function(w){const I=c(w.mode,f);d+=I+w.getBitsLength()}),d}function E(g,f){for(let d=1;d<=40;d++)if(l(g,d)<=e.getCapacity(d,f,n.MIXED))return d}e.from=function(f,d){return o.isValid(f)?parseInt(f,10):d},e.getCapacity=function(f,d,w){if(!o.isValid(f))throw new Error("Invalid QR Code version");typeof w>"u"&&(w=n.BYTE);const I=t.getSymbolTotalCodewords(f),y=i.getTotalCodewordsCount(f,d),p=(I-y)*8;if(w===n.MIXED)return p;const m=p-c(w,f);switch(w){case n.NUMERIC:return Math.floor(m/10*3);case n.ALPHANUMERIC:return Math.floor(m/11*2);case n.KANJI:return Math.floor(m/13);case n.BYTE:default:return Math.floor(m/8)}},e.getBestVersionForData=function(f,d){let w;const I=r.from(d,r.M);if(Array.isArray(f)){if(f.length>1)return E(f,I);if(f.length===0)return 1;w=f[0]}else w=f;return u(w.mode,w.getLength(),I)},e.getEncodedBits=function(f){if(!o.isValid(f)||f<7)throw new Error("Invalid QR Code version");let d=f<<12;for(;t.getBCHDigit(d)-a>=0;)d^=s<<t.getBCHDigit(d)-a;return f<<12|d}})(bt);var St={};const st=N,Mt=1335,Xt=21522,yt=st.getBCHDigit(Mt);St.getEncodedBits=function(t,i){const r=t.bit<<3|i;let n=r<<10;for(;st.getBCHDigit(n)-yt>=0;)n^=Mt<<st.getBCHDigit(n)-yt;return(r<<10|n)^Xt};var Rt={};const te=_;function k(e){this.mode=te.NUMERIC,this.data=e.toString()}k.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};k.prototype.getLength=function(){return this.data.length};k.prototype.getBitsLength=function(){return k.getBitsLength(this.data.length)};k.prototype.write=function(t){let i,r,n;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),n=parseInt(r,10),t.put(n,10);const o=this.data.length-i;o>0&&(r=this.data.substr(i),n=parseInt(r,10),t.put(n,o*3+1))};var ee=k;const ne=_,tt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function F(e){this.mode=ne.ALPHANUMERIC,this.data=e}F.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let r=tt.indexOf(this.data[i])*45;r+=tt.indexOf(this.data[i+1]),t.put(r,11)}this.data.length%2&&t.put(tt.indexOf(this.data[i]),6)};var re=F;const oe=_;function j(e){this.mode=oe.BYTE,typeof e=="string"?this.data=new TextEncoder().encode(e):this.data=new Uint8Array(e)}j.getBitsLength=function(t){return t*8};j.prototype.getLength=function(){return this.data.length};j.prototype.getBitsLength=function(){return j.getBitsLength(this.data.length)};j.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var ie=j;const se=_,ue=N;function v(e){this.mode=se.KANJI,this.data=e}v.getBitsLength=function(t){return t*13};v.prototype.getLength=function(){return this.data.length};v.prototype.getBitsLength=function(){return v.getBitsLength(this.data.length)};v.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=ue.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var ae=v,Lt={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,r,n){var o={},s={};s[r]=0;var a=t.PriorityQueue.make();a.push(r,0);for(var u,c,l,E,g,f,d,w,I;!a.empty();){u=a.pop(),c=u.value,E=u.cost,g=i[c]||{};for(l in g)g.hasOwnProperty(l)&&(f=g[l],d=E+f,w=s[l],I=typeof s[l]>"u",(I||w>d)&&(s[l]=d,a.push(l,d),o[l]=c))}if(typeof n<"u"&&typeof s[n]>"u"){var y=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(y)}return o},extract_shortest_path_from_predecessor_list:function(i,r){for(var n=[],o=r;o;)n.push(o),i[o],o=i[o];return n.reverse(),n},find_path:function(i,r,n){var o=t.single_source_shortest_paths(i,r,n);return t.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(i){var r=t.PriorityQueue,n={},o;i=i||{};for(o in r)r.hasOwnProperty(o)&&(n[o]=r[o]);return n.queue=[],n.sorter=i.sorter||r.default_sorter,n},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var n={value:i,cost:r};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Lt);var ce=Lt.exports;(function(e){const t=_,i=ee,r=re,n=ie,o=ae,s=S,a=N,u=ce;function c(y){return unescape(encodeURIComponent(y)).length}function l(y,p,m){const h=[];let C;for(;(C=y.exec(m))!==null;)h.push({data:C[0],index:C.index,mode:p,length:C[0].length});return h}function E(y){const p=l(s.NUMERIC,t.NUMERIC,y),m=l(s.ALPHANUMERIC,t.ALPHANUMERIC,y);let h,C;return a.isKanjiModeEnabled()?(h=l(s.BYTE,t.BYTE,y),C=l(s.KANJI,t.KANJI,y)):(h=l(s.BYTE_KANJI,t.BYTE,y),C=[]),p.concat(m,h,C).sort(function(T,b){return T.index-b.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function g(y,p){switch(p){case t.NUMERIC:return i.getBitsLength(y);case t.ALPHANUMERIC:return r.getBitsLength(y);case t.KANJI:return o.getBitsLength(y);case t.BYTE:return n.getBitsLength(y)}}function f(y){return y.reduce(function(p,m){const h=p.length-1>=0?p[p.length-1]:null;return h&&h.mode===m.mode?(p[p.length-1].data+=m.data,p):(p.push(m),p)},[])}function d(y){const p=[];for(let m=0;m<y.length;m++){const h=y[m];switch(h.mode){case t.NUMERIC:p.push([h,{data:h.data,mode:t.ALPHANUMERIC,length:h.length},{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.ALPHANUMERIC:p.push([h,{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.KANJI:p.push([h,{data:h.data,mode:t.BYTE,length:c(h.data)}]);break;case t.BYTE:p.push([{data:h.data,mode:t.BYTE,length:c(h.data)}])}}return p}function w(y,p){const m={},h={start:{}};let C=["start"];for(let B=0;B<y.length;B++){const T=y[B],b=[];for(let R=0;R<T.length;R++){const P=T[R],z=""+B+R;b.push(z),m[z]={node:P,lastCount:0},h[z]={};for(let X=0;X<C.length;X++){const M=C[X];m[M]&&m[M].node.mode===P.mode?(h[M][z]=g(m[M].lastCount+P.length,P.mode)-g(m[M].lastCount,P.mode),m[M].lastCount+=P.length):(m[M]&&(m[M].lastCount=P.length),h[M][z]=g(P.length,P.mode)+4+t.getCharCountIndicator(P.mode,p))}}C=b}for(let B=0;B<C.length;B++)h[C[B]].end=0;return{map:h,table:m}}function I(y,p){let m;const h=t.getBestModeForData(y);if(m=t.from(p,h),m!==t.BYTE&&m.bit<h.bit)throw new Error('"'+y+'" cannot be encoded with mode '+t.toString(m)+`.
 Suggested mode is: `+t.toString(h));switch(m===t.KANJI&&!a.isKanjiModeEnabled()&&(m=t.BYTE),m){case t.NUMERIC:return new i(y);case t.ALPHANUMERIC:return new r(y);case t.KANJI:return new o(y);case t.BYTE:return new n(y)}}e.fromArray=function(p){return p.reduce(function(m,h){return typeof h=="string"?m.push(I(h,null)):h.data&&m.push(I(h.data,h.mode)),m},[])},e.fromString=function(p,m){const h=E(p,a.isKanjiModeEnabled()),C=d(h),B=w(C,m),T=u.find_path(B.map,"start","end"),b=[];for(let R=1;R<T.length-1;R++)b.push(B.table[T[R]].node);return e.fromArray(f(b))},e.rawSplit=function(p){return e.fromArray(E(p,a.isKanjiModeEnabled()))}})(Rt);const Z=N,et=Q,le=xt,fe=Ot,de=Bt,ge=At,ut=Tt,at=q,he=$t,G=bt,me=St,we=_,nt=Rt;function ye(e,t){const i=e.size,r=ge.getPositions(t);for(let n=0;n<r.length;n++){const o=r[n][0],s=r[n][1];for(let a=-1;a<=7;a++)if(!(o+a<=-1||i<=o+a))for(let u=-1;u<=7;u++)s+u<=-1||i<=s+u||(a>=0&&a<=6&&(u===0||u===6)||u>=0&&u<=6&&(a===0||a===6)||a>=2&&a<=4&&u>=2&&u<=4?e.set(o+a,s+u,!0,!0):e.set(o+a,s+u,!1,!0))}}function pe(e){const t=e.size;for(let i=8;i<t-8;i++){const r=i%2===0;e.set(i,6,r,!0),e.set(6,i,r,!0)}}function Ce(e,t){const i=de.getPositions(t);for(let r=0;r<i.length;r++){const n=i[r][0],o=i[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(n+s,o+a,!0,!0):e.set(n+s,o+a,!1,!0)}}function Ee(e,t){const i=e.size,r=G.getEncodedBits(t);let n,o,s;for(let a=0;a<18;a++)n=Math.floor(a/3),o=a%3+i-8-3,s=(r>>a&1)===1,e.set(n,o,s,!0),e.set(o,n,s,!0)}function rt(e,t,i){const r=e.size,n=me.getEncodedBits(t,i);let o,s;for(o=0;o<15;o++)s=(n>>o&1)===1,o<6?e.set(o,8,s,!0):o<8?e.set(o+1,8,s,!0):e.set(r-15+o,8,s,!0),o<8?e.set(8,r-o-1,s,!0):o<9?e.set(8,15-o-1+1,s,!0):e.set(8,15-o-1,s,!0);e.set(r-8,8,1,!0)}function Be(e,t){const i=e.size;let r=-1,n=i-1,o=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let u=0;u<2;u++)if(!e.isReserved(n,a-u)){let c=!1;s<t.length&&(c=(t[s]>>>o&1)===1),e.set(n,a-u,c),o--,o===-1&&(s++,o=7)}if(n+=r,n<0||i<=n){n-=r,r=-r;break}}}function Ae(e,t,i){const r=new le;i.forEach(function(u){r.put(u.mode.bit,4),r.put(u.getLength(),we.getCharCountIndicator(u.mode,e)),u.write(r)});const n=Z.getSymbolTotalCodewords(e),o=at.getTotalCodewordsCount(e,t),s=(n-o)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let u=0;u<a;u++)r.put(u%2?17:236,8);return Te(r,e,t)}function Te(e,t,i){const r=Z.getSymbolTotalCodewords(t),n=at.getTotalCodewordsCount(t,i),o=r-n,s=at.getBlocksCount(t,i),a=r%s,u=s-a,c=Math.floor(r/s),l=Math.floor(o/s),E=l+1,g=c-l,f=new he(g);let d=0;const w=new Array(s),I=new Array(s);let y=0;const p=new Uint8Array(e.buffer);for(let T=0;T<s;T++){const b=T<u?l:E;w[T]=p.slice(d,d+b),I[T]=f.encode(w[T]),d+=b,y=Math.max(y,b)}const m=new Uint8Array(r);let h=0,C,B;for(C=0;C<y;C++)for(B=0;B<s;B++)C<w[B].length&&(m[h++]=w[B][C]);for(C=0;C<g;C++)for(B=0;B<s;B++)m[h++]=I[B][C];return m}function Ie(e,t,i,r){let n;if(Array.isArray(e))n=nt.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const l=nt.rawSplit(e);c=G.getBestVersionForData(l,i)}n=nt.fromString(e,c||40)}else throw new Error("Invalid data");const o=G.getBestVersionForData(n,i);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=o;else if(t<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=Ae(t,i,n),a=Z.getSymbolSize(t),u=new fe(a);return ye(u,t),pe(u),Ce(u,t),rt(u,i,0),t>=7&&Ee(u,t),Be(u,s),isNaN(r)&&(r=ut.getBestMask(u,rt.bind(null,u,i))),ut.applyMask(r,u),rt(u,i,r),{modules:u,version:t,errorCorrectionLevel:i,maskPattern:r,segments:n}}Ct.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let r=et.M,n,o;return typeof i<"u"&&(r=et.from(i.errorCorrectionLevel,et.M),n=G.from(i.version),o=ut.from(i.maskPattern),i.toSJISFunc&&Z.setToSJISFunction(i.toSJISFunc)),Ie(t,n,r,o)};var _t={},gt={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const n=parseInt(r.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const n=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:o,scale:o?4:s,margin:n,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,n){return n.width&&n.width>=r+n.margin*2?n.width/(r+n.margin*2):n.scale},e.getImageWidth=function(r,n){const o=e.getScale(r,n);return Math.floor((r+n.margin*2)*o)},e.qrToImageData=function(r,n,o){const s=n.modules.size,a=n.modules.data,u=e.getScale(s,o),c=Math.floor((s+o.margin*2)*u),l=o.margin*u,E=[o.color.light,o.color.dark];for(let g=0;g<c;g++)for(let f=0;f<c;f++){let d=(g*c+f)*4,w=o.color.light;if(g>=l&&f>=l&&g<c-l&&f<c-l){const I=Math.floor((g-l)/u),y=Math.floor((f-l)/u);w=E[a[I*s+y]?1:0]}r[d++]=w.r,r[d++]=w.g,r[d++]=w.b,r[d]=w.a}}})(gt);(function(e){const t=gt;function i(n,o,s){n.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(o,s,a){let u=a,c=s;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(c=r()),u=t.getOptions(u);const l=t.getImageWidth(o.modules.size,u),E=c.getContext("2d"),g=E.createImageData(l,l);return t.qrToImageData(g.data,o,u),i(E,c,l),E.putImageData(g,0,0),c},e.renderToDataURL=function(o,s,a){let u=a;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const c=e.render(o,s,u),l=u.type||"image/png",E=u.rendererOpts||{};return c.toDataURL(l,E.quality)}})(_t);var Dt={};const Ne=gt;function pt(e,t){const i=e.a/255,r=t+'="'+e.hex+'"';return i<1?r+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function ot(e,t,i){let r=e+t;return typeof i<"u"&&(r+=" "+i),r}function be(e,t,i){let r="",n=0,o=!1,s=0;for(let a=0;a<e.length;a++){const u=Math.floor(a%t),c=Math.floor(a/t);!u&&!o&&(o=!0),e[a]?(s++,a>0&&u>0&&e[a-1]||(r+=o?ot("M",u+i,.5+c+i):ot("m",n,0),n=0,o=!1),u+1<t&&e[a+1]||(r+=ot("h",s),s=0)):n++}return r}Dt.render=function(t,i,r){const n=Ne.getOptions(i),o=t.modules.size,s=t.modules.data,a=o+n.margin*2,u=n.color.light.a?"<path "+pt(n.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+pt(n.color.dark,"stroke")+' d="'+be(s,o,n.margin)+'"/>',l='viewBox="0 0 '+a+" "+a+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+l+' shape-rendering="crispEdges">'+u+c+`</svg>
`;return typeof r=="function"&&r(null,g),g};const Pe=Kt,ct=Ct,Ut=_t,Se=Dt;function ht(e,t,i,r,n){const o=[].slice.call(arguments,1),s=o.length,a=typeof o[s-1]=="function";if(!a&&!Pe())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(n=i,i=t,t=r=void 0):s===3&&(t.getContext&&typeof n>"u"?(n=r,r=void 0):(n=r,r=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=r=void 0):s===2&&!t.getContext&&(r=i,i=t,t=void 0),new Promise(function(u,c){try{const l=ct.create(i,r);u(e(l,t,r))}catch(l){c(l)}})}try{const u=ct.create(i,r);n(null,e(u,t,r))}catch(u){n(u)}}K.create=ct.create;K.toCanvas=ht.bind(null,Ut.render);K.toDataURL=ht.bind(null,Ut.renderToDataURL);K.toString=ht.bind(null,function(e,t,i){return Se.render(e,i)});function De(){let{lecture:e,...t}=kt();const[i,r]=D.useState(t.present),[n,o]=D.useState(t.allPresent);console.log(n);const s=D.useRef(null),a=D.useRef(null),u=Ft(),{user:c}=jt(),l=()=>{var d;const g=(d=a.current)==null?void 0:d.getBoundingClientRect().width,f=Math.min(320,g?g/1.3:600);K.toCanvas(s.current,window.location.href,{width:f},function(w){w&&console.error(w)})},E=async()=>{if(i)return;const g=JSON.stringify({lecture:e.id,student:c.id}),f=await zt("mark-present/",{method:"POST",body:g});if(f.status===201){const d=await f.json();u.success("You have been marked present"),r(!0),o(w=>[...w,d])}else try{const d=await f.json();typeof d=="object"?Object.keys(d).forEach(w=>{u.error(`${w}: ${d[w]}`)}):u.error(d)}catch{u.error("Something went wrong")}};return D.useEffect(()=>{s.current&&l()},[s.current]),D.useEffect(()=>{setTimeout(E,1e3)},[]),A.jsxs(vt,{children:[A.jsxs(it,{container:!0,height:"100dvh",children:[A.jsx(Me,{lecture:e,user:c,present:n}),A.jsxs(it,{item:!0,xs:12,sm:6,md:8,order:{xs:1,sm:2},display:"flex",flexDirection:"column",alignItems:"center",alignSelf:"center",ref:a,children:[A.jsx("canvas",{ref:s,style:{width:"600px"}}),A.jsx(U,{children:"Scan me to mark present"})]})]}),A.jsx(Re,{present:i,text:"We are marking you present"})]})}const Me=({lecture:e,user:t,present:i})=>A.jsxs(it,{item:!0,xs:12,sm:6,md:4,order:{xs:2,sm:1},sx:{backgroundColor:"#f2f2f2"},children:[A.jsxs(Y,{p:2,children:[A.jsx(U,{variant:"h5",lineHeight:1.7,children:e.code}),A.jsx(U,{pb:1,lineHeight:1.2,children:e.name}),A.jsx(mt,{user:e.lecturer})]}),A.jsxs(Y,{px:2,children:[A.jsx(U,{variant:"h5",fontSize:20,lineHeight:1.8,children:"Present"}),i.length>0?A.jsx(Y,{display:"grid",gap:1,children:i.map(r=>A.jsx(mt,{user:r.student},r.student.id))}):A.jsx(U,{variant:"body2",lineHeight:1,children:"No one in class yet, please ask students to scan the QR Code"})]})]}),Re=({present:e,text:t})=>A.jsx(Ht,{sx:{color:"#fff",zIndex:i=>i.zIndex.drawer+1,backdropFilter:"blur(10px)",backgroundColor:"rgba(0, 0, 0, 0.5)"},open:!e,children:A.jsxs(Y,{sx:{display:"flex",flexDirection:"column",gap:2,alignItems:"center",justifyContent:"center",height:"100vh"},children:[A.jsx(Vt,{color:"inherit"})," ",A.jsxs(U,{variant:"body2",fontWeight:500,textAlign:"center",children:["Please Hold ",A.jsx("br",{}),t]})]})});export{De as default};