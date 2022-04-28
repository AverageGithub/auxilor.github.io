"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[995],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return u}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),m=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=m(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(n),u=o,v=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return n?t.createElement(v,i(i({ref:r},s),{},{components:n})):t.createElement(v,i({ref:r},s))}));function u(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=n[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6819:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return d}});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Commands and Permissions",sidebar_position:1},l=void 0,m={unversionedId:"ecoarmor/commands-and-permissions",id:"ecoarmor/commands-and-permissions",title:"Commands and Permissions",description:"/ecoarmor give (Give Items)",source:"@site/docs/ecoarmor/commands-and-permissions.md",sourceDirName:"ecoarmor",slug:"/ecoarmor/commands-and-permissions",permalink:"/ecoarmor/commands-and-permissions",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/ecoarmor/commands-and-permissions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Commands and Permissions",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Why EcoArmor?",permalink:"/ecoarmor/"}},s={},d=[{value:"<code>/ecoarmor give (Give Items)</code>",id:"ecoarmor-give-give-items",level:2},{value:"Giving an armor piece",id:"giving-an-armor-piece",level:3},{value:"Giving an Upgrade Crystal",id:"giving-an-upgrade-crystal",level:3},{value:"Giving an Advancement Shard",id:"giving-an-advancement-shard",level:3},{value:"<code>/ecoarmor reload (Reload Config)</code>",id:"ecoarmor-reload-reload-config",level:2}],p={toc:d};function u(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ecoarmor-give-give-items"},(0,a.kt)("inlineCode",{parentName:"h2"},"/ecoarmor give (Give Items)")),(0,a.kt)("p",null,"Permission: ",(0,a.kt)("inlineCode",{parentName:"p"},"ecoarmor.command.give")),(0,a.kt)("h3",{id:"giving-an-armor-piece"},"Giving an armor piece"),(0,a.kt)("p",null,"General command usage:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/ecoarmor give <player> set:<set> [piece] [advanced] [tier] [amount]")),(0,a.kt)("p",null,"For example, if you want to give a player 2 osmium-tier advanced reaper boots, you would do:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/ecoarmor give <player> set:reaper boots true osmium 2")),(0,a.kt)("p",null,"Or, if you want to give a player a full set of default young armor, you would do:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/ecoarmor give <player> set:young")),(0,a.kt)("h3",{id:"giving-an-upgrade-crystal"},"Giving an Upgrade Crystal"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/ecoarmor give <player> crystal:<tier> [amount]")),(0,a.kt)("h3",{id:"giving-an-advancement-shard"},"Giving an Advancement Shard"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/ecoarmor give <player> shard:<set> [amount]")),(0,a.kt)("h2",{id:"ecoarmor-reload-reload-config"},(0,a.kt)("inlineCode",{parentName:"h2"},"/ecoarmor reload (Reload Config)")),(0,a.kt)("p",null,"Permission: ",(0,a.kt)("inlineCode",{parentName:"p"},"ecoarmor.command.reload")))}u.isMDXComponent=!0}}]);