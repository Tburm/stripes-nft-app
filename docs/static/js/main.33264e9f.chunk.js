(this["webpackJsonpmetis-nft-app"]=this["webpackJsonpmetis-nft-app"]||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){},121:function(e,t){},136:function(e,t,n){"use strict";n.r(t);var c=n(4),s=n.n(c),a=n(89),r=n.n(a),i=n(37),d=n(17),l=n(13),o=n(2),u=n.n(o),b=n(100),j=n(20),x=n(90),m=(n(117),n(118),n(5));var f=function(e){var t=Object(x.a)().activateBrowserWallet;return Object(m.jsxs)("nav",{className:"px-5 flex items-center justify-between",children:[Object(m.jsx)("div",{className:"logo flex flex-row items-center",children:Object(m.jsx)("a",{className:"link text-3xl",href:"/",children:Object(m.jsx)("h4",{className:"text-gray-200",children:"Stripes"})})}),Object(m.jsx)("ul",{className:"flex justify-around items-center",children:Object(m.jsx)("li",{children:Object(m.jsx)("button",{className:"btn",id:"connect-btn",onClick:function(){return t()},children:e.error?"Unsupported Network":e.account?588===e.chainId||1088===e.chainId||31337===e.chainId?Object(m.jsx)("p",{children:e.account.slice(0,4)+"..."+e.account.slice(e.account.length-4,e.account.length)}):"Wrong network":"Connect"})})})]})};var p=function(e){return Object(m.jsxs)("div",{className:"flex flex-col items-center w-full px-8 text-left",children:[Object(m.jsx)("p",{className:"mb-4",children:"Stripes is a 100% on-chain generative art project. The metadata for each STRIPE token is generated when the NFT is minted and stored on-chain. The smart contract decodes the on-chain data to draw the image on an SVG canvas. These NFTs do not rely on IPFS or APIs to retrieve the image off-chain."}),Object(m.jsx)("p",{className:"my-4",children:"Each STRIPE token contains a 32x32 pixel SVG canvas with 10 stripes. Each stripe is randomly generated with the following characteristics:"}),Object(m.jsxs)("ul",{className:"w-full list-disc text-left",children:[Object(m.jsx)("li",{children:"Width of 1-32 pixels"}),Object(m.jsx)("li",{children:"Y-location"}),Object(m.jsx)("li",{children:"Color (R-G-B)"}),Object(m.jsx)("li",{children:"Speed (1-10 second loop)"})]}),Object(m.jsx)("p",{className:"mt-4 w-full",children:"Minting is free except the cost of gas. Click the button below to get a STRIPE!"})]})},h=n(33),g=n(149);var O=function(e){var t=Object(c.useState)(),n=Object(l.a)(t,2),s=(n[0],n[1],new h.a(e.addresses.nft,e.abis.nft,e.library)),a=Object(g.a)(s,"mint",{transactionName:"Mint"}),r=(a.state,a.send),i=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(),e.abrupt("return");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("button",{id:"mint-btn",className:"btn",onClick:i,disabled:!1,children:"Mint"})},y=n(42),v=n(131);var w=function(e){var t=Object(c.useState)(),n=Object(l.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(),i=Object(l.a)(r,2),o=i[0],b=i[1];return Object(c.useEffect)((function(){var t=new h.a(e.addresses.nft,e.abis.nft,e.library);function n(){return(n=Object(d.a)(u.a.mark((function n(){var c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.walletOfOwner(e.account);case 2:c=(c=n.sent).map((function(e){return e.toNumber()})),c=v.sortBy(c),a(c);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),Object(c.useEffect)((function(){var t=new h.a(e.addresses.nft,e.abis.nft,e.library);function n(){return(n=Object(d.a)(u.a.mark((function e(){var n,c,a,r,i,d,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],c=Object(y.a)(s),e.prev=2,c.s();case 4:if((a=c.n()).done){e.next=20;break}return r=a.value,e.prev=6,e.next=9,t.tokenURI(r);case 9:i=e.sent,d=atob(i.split(",")[1]),l=JSON.parse(d).image,n.push({token_id:r,img_svg:l}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),n.push({token_id:r,img_svg:""});case 18:e.next=4;break;case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(2),c.e(e.t1);case 25:return e.prev=25,c.f(),e.finish(25);case 28:b(n);case 29:case"end":return e.stop()}}),e,null,[[2,22,25,28],[6,15]])})))).apply(this,arguments)}s&&function(){n.apply(this,arguments)}()}),[e,s]),s&&o?Object(m.jsxs)("div",{className:"flex flex-col items-center w-full px-3",children:[Object(m.jsx)("h1",{className:"text-xl mb-1",children:"Your Stripes"}),Object(m.jsxs)("p",{children:["You own ",s.length," Stripes"]}),Object(m.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 place-items-center my-2",children:o.map((function(t){t.token_id,e.selectedToken;return Object(m.jsx)("img",{tokenid:t.token_id,className:"gallery-img",src:t.img_svg,alt:"NFT"},t.token_id)}))})]}):Object(m.jsx)("p",{className:"text-center",children:"Loading..."})},J=n(26);var I=function(e){var t=Object(c.useState)(),n=Object(l.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(),i=Object(l.a)(r,2),o=i[0],b=i[1];return Object(c.useEffect)((function(){var t=new h.a(e.addresses.nft,e.abis.nft,e.library);function n(){return(n=Object(d.a)(u.a.mark((function e(){var n,c,s,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.totalSupply();case 2:n=(n=e.sent).toNumber(),c=Math.min(n,5),s=Math.max(0,n-c),r=Object(J.a)(Array(c).keys()).map((function(e){return e+s})),a(r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),Object(c.useEffect)((function(){var t=new h.a(e.addresses.nft,e.abis.nft,e.library);function n(){return(n=Object(d.a)(u.a.mark((function e(){var n,c,a,r,i,d,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],c=Object(y.a)(s),e.prev=2,c.s();case 4:if((a=c.n()).done){e.next=20;break}return r=a.value,e.prev=6,e.next=9,t.tokenURI(r);case 9:i=e.sent,d=atob(i.split(",")[1]),l=JSON.parse(d).image,n.push({token_id:r,img_svg:l}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),n.push({token_id:r,img_svg:""});case 18:e.next=4;break;case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(2),c.e(e.t1);case 25:return e.prev=25,c.f(),e.finish(25);case 28:b(n);case 29:case"end":return e.stop()}}),e,null,[[2,22,25,28],[6,15]])})))).apply(this,arguments)}s&&function(){n.apply(this,arguments)}()}),[e,s]),s&&o?Object(m.jsxs)("div",{className:"flex flex-col items-center w-full px-3",children:[Object(m.jsx)("h1",{className:"text-xl",children:"Recently Minted Stripes"}),Object(m.jsx)("div",{className:"grid grid-cols-5 gap-2 place-items-center mt-2 mb-2",children:o.map((function(t){t.token_id,e.selectedToken;return Object(m.jsx)("img",{tokenid:t.token_id,className:"gallery-img",src:t.img_svg,alt:"NFT"},t.token_id)}))})]}):Object(m.jsx)("p",{className:"text-center",children:"Loading..."})},N=n(60);n.p;var Z=function(e){return Object(m.jsxs)("div",{className:"flex flex-row justify-evenly w-full text-gray-200 mb-8",children:[Object(m.jsxs)("a",{className:"flex flex-col items-center",href:"https://github.com/Tburm/stripes-nft",children:[Object(m.jsx)(N.b,{className:"text-3xl"}),Object(m.jsx)("p",{children:"Contracts"})]}),Object(m.jsxs)("a",{className:"flex flex-col items-center",href:"https://github.com/Tburm/stripes-nft-app",children:[Object(m.jsx)(N.b,{className:"text-3xl"}),Object(m.jsx)("p",{children:"App"})]}),Object(m.jsxs)("a",{className:"flex flex-col items-center",href:"https://stardust-explorer.metis.io/address/0x36c27551BED3E1dB018FC93807378e312d3Bb397/transactions",children:[Object(m.jsx)(N.a,{className:"text-3xl"}),Object(m.jsx)("p",{children:"Block Explorer"})]}),Object(m.jsxs)("a",{className:"flex flex-col items-center",href:"https://twitter.com/troybeee",children:[Object(m.jsx)(N.c,{className:"text-3xl"}),Object(m.jsx)("p",{children:"@troybeee"})]})]})},z="PHN2ZyBpZD0ic3ZnLWZyYW1lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHJlY3QgY2xhc3M9J3N0cmlwZV8wJyB4PScxJyB5PScyMCcgd2lkdGg9JzIwcHgnIGhlaWdodD0nMXB4JyBzdHlsZT0nZmlsbDogcmdiKDE3NSwxNzUsMTc1KSc+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0neCcgZnJvbT0nLTMyJyB0bz0nMzInIGR1cj0nMHMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJyAvPjwvcmVjdD48cmVjdCBjbGFzcz0nc3RyaXBlXzEnIHg9JzEnIHk9JzE1JyB3aWR0aD0nMTlweCcgaGVpZ2h0PScxcHgnIHN0eWxlPSdmaWxsOiByZ2IoMTE0LDE5NiwxMzgpJz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSd4JyBmcm9tPSctMzInIHRvPSczMicgZHVyPSc4cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnIC8+PC9yZWN0PjxyZWN0IGNsYXNzPSdzdHJpcGVfMicgeD0nMScgeT0nMzEnIHdpZHRoPScxNXB4JyBoZWlnaHQ9JzFweCcgc3R5bGU9J2ZpbGw6IHJnYigyNTMsMTczLDIzMSknPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J3gnIGZyb209Jy0zMicgdG89JzMyJyBkdXI9JzVzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScgLz48L3JlY3Q+PHJlY3QgY2xhc3M9J3N0cmlwZV8zJyB4PScxJyB5PScxNicgd2lkdGg9JzI5cHgnIGhlaWdodD0nMXB4JyBzdHlsZT0nZmlsbDogcmdiKDg4LDIyMCwxMjEpJz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSd4JyBmcm9tPSctMzInIHRvPSczMicgZHVyPSczcycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnIC8+PC9yZWN0PjxyZWN0IGNsYXNzPSdzdHJpcGVfNCcgeD0nMScgeT0nMjYnIHdpZHRoPSczMXB4JyBoZWlnaHQ9JzFweCcgc3R5bGU9J2ZpbGw6IHJnYigyMjAsNzIsMTA3KSc+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0neCcgZnJvbT0nLTMyJyB0bz0nMzInIGR1cj0nOXMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJyAvPjwvcmVjdD48cmVjdCBjbGFzcz0nc3RyaXBlXzUnIHg9JzEnIHk9JzgnIHdpZHRoPSc5cHgnIGhlaWdodD0nMXB4JyBzdHlsZT0nZmlsbDogcmdiKDEyMSwxMDcsMjA3KSc+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0neCcgZnJvbT0nLTMyJyB0bz0nMzInIGR1cj0nNXMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJyAvPjwvcmVjdD48cmVjdCBjbGFzcz0nc3RyaXBlXzYnIHg9JzEnIHk9JzI1JyB3aWR0aD0nMTZweCcgaGVpZ2h0PScxcHgnIHN0eWxlPSdmaWxsOiByZ2IoOTgsMzksMjUpJz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSd4JyBmcm9tPSctMzInIHRvPSczMicgZHVyPSc4cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnIC8+PC9yZWN0PjxyZWN0IGNsYXNzPSdzdHJpcGVfNycgeD0nMScgeT0nMjEnIHdpZHRoPScxOHB4JyBoZWlnaHQ9JzFweCcgc3R5bGU9J2ZpbGw6IHJnYigyMzIsMTcyLDgwKSc+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0neCcgZnJvbT0nLTMyJyB0bz0nMzInIGR1cj0nMXMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJyAvPjwvcmVjdD48cmVjdCBjbGFzcz0nc3RyaXBlXzgnIHg9JzEnIHk9JzIzJyB3aWR0aD0nMjZweCcgaGVpZ2h0PScxcHgnIHN0eWxlPSdmaWxsOiByZ2IoMzksMTgyLDE0OSknPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J3gnIGZyb209Jy0zMicgdG89JzMyJyBkdXI9JzRzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScgLz48L3JlY3Q+PHJlY3QgY2xhc3M9J3N0cmlwZV85JyB4PScxJyB5PScxMycgd2lkdGg9JzEzcHgnIGhlaWdodD0nMXB4JyBzdHlsZT0nZmlsbDogcmdiKDEyLDY4LDE0OCknPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J3gnIGZyb209Jy0zMicgdG89JzMyJyBkdXI9JzJzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScgLz48L3JlY3Q+PHN0eWxlPiNzdmctZnJhbWV7c2hhcGUtcmVuZGVyaW5nOiBjcmlzcGVkZ2VzO308L3N0eWxlPjwvc3ZnPg==";var S=function(e){return e.addresses?Object(m.jsxs)("div",{className:"flex flex-col items-center w-full",children:[Object(m.jsx)("div",{className:"card w-2/6 lg:w-1/6",children:Object(m.jsx)("img",{className:"gallery-img",src:"data:image/svg+xml;base64,"+z,alt:"NFT"})}),Object(m.jsx)("div",{className:"card w-3/5",children:Object(m.jsx)(p,Object(i.a)({},e))}),Object(m.jsx)(O,Object(i.a)({},e)),Object(m.jsx)("div",{className:"card w-3/5",children:Object(m.jsx)(w,Object(i.a)({},e))}),Object(m.jsx)("div",{className:"card w-3/5",children:Object(m.jsx)(I,Object(i.a)({},e))}),Object(m.jsx)("div",{className:"w-3/5",children:Object(m.jsx)(Z,Object(i.a)({},e))})]}):Object(m.jsxs)("div",{className:"flex flex-col items-center w-full",children:[Object(m.jsx)("div",{className:"card w-2/6 lg:w-1/6",children:Object(m.jsx)("img",{tokenid:"12",className:"gallery-img",src:"data:image/svg+xml;base64,"+z,alt:"NFT"})}),Object(m.jsx)("div",{className:"card w-3/5",children:Object(m.jsx)(p,Object(i.a)({},e))}),Object(m.jsx)("div",{className:"card w-3/5",children:Object(m.jsx)("p",{className:"text-center",children:"Connect to Metis Stardust"})}),Object(m.jsx)("div",{className:"w-3/5",children:Object(m.jsx)(Z,Object(i.a)({},e))})]})},k=n(78),M={nft:n(99)};var B=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(x.a)(),r=a.active,o=a.account,p=a.library,h=a.chainId,g=a.error;Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(p.blockNumber);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}p&&p.on("block",(function(){return e.apply(this,arguments)}))}),[p]);var O={active:r,account:o,library:p,chainId:h,block:n,error:g,abis:M,addresses:h&&k[h.toString()]?k[h.toString()]:void 0};return Object(m.jsx)("div",{id:"app",children:Object(m.jsx)("div",{id:"content",children:Object(m.jsxs)(b.a,{children:[Object(m.jsx)(f,Object(i.a)({},O)),Object(m.jsx)(j.c,{children:Object(m.jsx)(j.a,{exact:!0,path:"/",children:Object(m.jsx)(S,Object(i.a)({},O))})})]})})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,151)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))},G=n(147);r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(G.a,{config:{multicallAddresses:{588:"0xaF9D4DC0698d8FD9f41387ecb08D9976079B8086",31337:"0x2909280299c58268d5faed54074823eafbb436e8"}},children:Object(m.jsx)(B,{})})}),document.getElementById("root")),W()},78:function(e){e.exports=JSON.parse('{"588":{"nft":"0x11d2223A617480EA2FD5aE7EB7b0d20C00151F21"},"1088":{"nft":""},"31337":{"nft":"0xe8D2A1E88c91DCd5433208d4152Cc4F399a7e91d"}}')},99:function(e){e.exports=JSON.parse('["event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)","event ApprovalForAll(address indexed owner, address indexed operator, bool approved)","event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)","event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)","function _tokenIdToConfig(uint256 _tokenId) view returns (bytes)","function approve(address to, uint256 tokenId)","function balanceOf(address owner) view returns (uint256)","function configToSVG(bytes _config) pure returns (string)","function getApproved(uint256 tokenId) view returns (address)","function isApprovedForAll(address owner, address operator) view returns (bool)","function mint()","function name() view returns (string)","function owner() view returns (address)","function ownerOf(uint256 tokenId) view returns (address)","function renounceOwnership()","function safeTransferFrom(address from, address to, uint256 tokenId)","function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data)","function setApprovalForAll(address operator, bool approved)","function setLibraryAddress(address _libraryAddress)","function supportsInterface(bytes4 interfaceId) view returns (bool)","function symbol() view returns (string)","function toByte(uint8 _num) pure returns (bytes1 _ret)","function tokenByIndex(uint256 index) view returns (uint256)","function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)","function tokenURI(uint256 _tokenId) view returns (string)","function totalSupply() view returns (uint256)","function transferFrom(address from, address to, uint256 tokenId)","function transferOwnership(address newOwner)","function walletOfOwner(address _wallet) view returns (uint256[])"]')}},[[136,1,2]]]);
//# sourceMappingURL=main.33264e9f.chunk.js.map