(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var i=n(3),o=n(7),a=(n(0),n(138)),r={id:"establishing-a-connection",title:"Secure Communication"},c={unversionedId:"extending/establishing-a-connection",id:"extending/establishing-a-connection",isDocsHomePage:!1,title:"Secure Communication",description:"Below is an outline of how a connection is established between an app with our SDK integrated, and the desktop app. This all goes on behind the scenes inside the mobile SDK, so users shouldn't need to worry about it.",source:"@site/../docs/extending/establishing-a-connection.mdx",slug:"/extending/establishing-a-connection",permalink:"/docs/extending/establishing-a-connection",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/establishing-a-connection.mdx",version:"current",sidebar:"extending",previous:{title:"Implementing a Flipper Client",permalink:"/docs/extending/new-clients"},next:{title:"Implementing Layout Inspection",permalink:"/docs/extending/supporting-layout"}},l=[{value:"Transport Protocol",id:"transport-protocol",children:[]},{value:"Client-Server relationship",id:"client-server-relationship",children:[]},{value:"Certificate Exchange",id:"certificate-exchange",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Below is an outline of how a connection is established between an app with our SDK integrated, and the desktop app. This all goes on behind the scenes inside the mobile SDK, so users shouldn't need to worry about it."),Object(a.b)("p",null,"The connection process is a little more involved than you might expect, to stop Flipper clients on mobile apps from connecting to any server that happens to be running on localhost and potentially leaking information from your app."),Object(a.b)("h2",{id:"transport-protocol"},"Transport Protocol"),Object(a.b)("p",null,"Flipper uses ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"http://rsocket.io/"}),"RSocket")," to communicate between the desktop and mobile apps. RSocket allows for bi-directional communication."),Object(a.b)("h2",{id:"client-server-relationship"},"Client-Server relationship"),Object(a.b)("p",null,"When the desktop app starts up, it opens a secure socket on port 8088.\nThe Flipper client will continually attempt to connect to this port on localhost to establish a connection with the desktop app."),Object(a.b)("h2",{id:"certificate-exchange"},"Certificate Exchange"),Object(a.b)("p",null,"To avoid mobile apps from connecting to untrusted ports on localhost, a Flipper client should only connect to servers that have a valid, trusted TLS certificate.\nIn order for the mobile app to know which certificates it can trust, it conducts a certificate exchange with the desktop app before it can make its first secure connection."),Object(a.b)("p",null,"This is achieved through the following steps:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Desktop app starts an insecure server on port 8089."),Object(a.b)("li",{parentName:"ul"},"Mobile app connects to localhost:8089 and sends a Certificate Signing Request to the desktop app."),Object(a.b)("li",{parentName:"ul"},"Desktop app uses it's private key (this is generated once and stored in ~/.flipper) to sign a client certificate for the mobile app."),Object(a.b)("li",{parentName:"ul"},"Along with the Certificate Signing Request, mobile app also lets the desktop app know which certificate exchange medium to use."),Object(a.b)("li",{parentName:"ul"},"If the chosen Certificate Exchange Medium is FS_ACCESS, the desktop uses ADB (for Android), or the mounted file system (for iOS simulators) to write the following files to the mobile app's private data partition",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Server certificate that the mobile app can now trust."),Object(a.b)("li",{parentName:"ul"},"Client certificate for the mobile app to use going forward."))),Object(a.b)("li",{parentName:"ul"},"If the chosen Certificate Exchange Medium is WWW, the desktop app will use your implementation of Certificate Uploader to upload the certificates.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Once uploaded the desktop app will reply back with the device id, which can be used by Certificate Provider on the client side to fetch those certificates."))),Object(a.b)("li",{parentName:"ul"},"Now the mobile app knows which server certificate it can trust, and can connect to the secure server.")),Object(a.b)("p",null,"This allows the mobile app to trust a certificate if and only if, it is stored inside its internal data partition. Typically it's only possible to write there with physical access to the device (i.e. through ADB or a mounted simulator)."),Object(a.b)("p",null,"To get the desktop app to generate a client certificate for your client, and then deploy it, go through the following steps:"),Object(a.b)("p",null,"Use an RSocket client to connect (insecurely) to the following URL:"),Object(a.b)("p",null,"(Parameters are defined in ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"new-clients"}),"Implementing a Flipper Client"),")"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"localhost:8089/sonar?os={OS}\n                     &device={DEVICE}\n                     &app={APP}\n                     &sdk_version={SDK_VERSION}\n                     &medium={CERTIFICATE_EXCHANGE_MEDIUM}\n")),Object(a.b)("p",null,"On that connection, send the following payload:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'Request = {\n  "method": "signCertificate",\n  "csr": string,\n  "destination": string,\n  "medium": int\n}\n')),Object(a.b)("p",null,"Where ",Object(a.b)("inlineCode",{parentName:"p"},"csr")," is a Certificate Signing Request the client has generated, and ",Object(a.b)("inlineCode",{parentName:"p"},"destination")," identifies a location accessible to both the client and Flipper desktop, where the certificate should be placed."),Object(a.b)("p",null,"The Subject Common Name (CN=...) must be included in the CSR, and your ",Object(a.b)("inlineCode",{parentName:"p"},"CertificateProvider")," implementation in Flipper may use this in combination with the ",Object(a.b)("inlineCode",{parentName:"p"},"destination")," to determine where to put the certificate. "),Object(a.b)("p",null,"This will ask Flipper desktop to generate a client certificate, using the CSR provided, and put it into the specified ",Object(a.b)("inlineCode",{parentName:"p"},"destination"),"."),Object(a.b)("p",null,"Depending on the client, ",Object(a.b)("inlineCode",{parentName:"p"},"destination")," can have a different meaning. A basic example would be a file path, that both the desktop and the client have access to. With this Flipper desktop could write the certificate to that path. A more involved example is that of the Android Client, where destination specifies a relative path inside an app container. And the Subject Common Name determines which app container. Together these two pieces of information form an absolute file path inside an android device."),Object(a.b)("p",null,"For Flipper desktop to work with a given Client type, it needs to be modified to know how to correctly interpret the ",Object(a.b)("inlineCode",{parentName:"p"},"destination")," argument, and deploy certificates to it. "),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"destination")," field may not be relevant if your ",Object(a.b)("inlineCode",{parentName:"p"},"medium")," value is more than 1. ",Object(a.b)("inlineCode",{parentName:"p"},"medium=1"),"(default) means Flipper should do certificate exchange by directly putting certificates at ",Object(a.b)("inlineCode",{parentName:"p"},"destination")," in the sandbox of the app. ",Object(a.b)("inlineCode",{parentName:"p"},"medium=2")," means Flipper will use Certificate Uploader and Provider to upload certificates and download it on the client side respectively."),Object(a.b)("p",null,"You can see the current implementations in ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebook/flipper/blob/master/desktop/app/src/utils/CertificateProvider.tsx"}),"CertificateProvider.tsx"),"."))}s.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,h=d["".concat(r,".").concat(u)]||d[u]||b[u]||a;return n?o.a.createElement(h,c(c({ref:t},p),{},{components:n})):o.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var p=2;p<a;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);