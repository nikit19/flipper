(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,b=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return r?a.a.createElement(b,c(c({ref:t},s),{},{components:r})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},139:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(141),a=r(140);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,u=o.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(c)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},140:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},141:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(20);t.default=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},142:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(11),i=r(140),c=r(9),u=Object(n.createContext)({collectLink:function(){}}),s=r(139),l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t,r,f,p=e.isNavLink,d=e.to,b=e.href,y=e.activeClassName,v=e.isActive,O=e["data-noBrokenLinkCheck"],m=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),h=Object(s.b)().withBaseUrl,g=Object(n.useContext)(u),j=d||b,w=Object(i.a)(j),k=null==j?void 0:j.replace("pathname://",""),C=void 0!==k?function(e){return e.startsWith("/")}(r=k)?h(r):r:void 0,x=Object(n.useRef)(!1),P=p?o.e:o.c,E=c.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!E&&w&&window.docusaurus.prefetch(C),function(){E&&f&&f.disconnect()}}),[C,E,w]);var L=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,T=!C||!w||L;return C&&w&&!L&&!O&&g.collectLink(C),T?a.a.createElement("a",Object.assign({href:C},j&&!w&&{target:"_blank",rel:"noopener noreferrer"},m)):a.a.createElement(P,Object.assign({},m,{onMouseEnter:function(){x.current||(window.docusaurus.preload(C),x.current=!0)},innerRef:function(e){var t,r;E&&e&&w&&(t=e,r=function(){window.docusaurus.prefetch(C)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),r())}))}))).observe(t))},to:C||""},p&&{isActive:v,activeClassName:y}))}},65:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(138)),i=r(139),c=r(142),u={id:"leak-canary-plugin",title:"LeakCanary"},s={unversionedId:"features/leak-canary-plugin",id:"features/leak-canary-plugin",isDocsHomePage:!1,title:"LeakCanary",description:"\u2192 See setup instructions for the LeakCanary",source:"@site/../docs/features/leak-canary-plugin.mdx",slug:"/features/leak-canary-plugin",permalink:"/docs/features/leak-canary-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/features/leak-canary-plugin.mdx",version:"current",sidebar:"features",previous:{title:"Shared Preferences",permalink:"/docs/features/shared-preferences-plugin"},next:{title:"Crash Reporter",permalink:"/docs/features/crash-reporter-plugin"}},l=[],f={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u2192 ",Object(o.b)(c.a,{to:Object(i.a)("/docs/setup/leak-canary-plugin"),mdxType:"Link"},"See setup instructions for the LeakCanary")),Object(o.b)("p",null,"The LeakCanary plugin provides developers with Flipper support for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/square/leakcanary"}),"LeakCanary"),", an open source memory leak detection library."),Object(o.b)("p",null,"Leaks detected by LeakCanary will appear automatically in Flipper. Each leak will display a hierarchy of objects, beginning from the garbage collector root and ending at the leaked class.\nSelecting any object in this list will display contents of the object's various fields."),Object(o.b)("p",null,"Note: this plugin is only available for Android."))}p.isMDXComponent=!0}}]);