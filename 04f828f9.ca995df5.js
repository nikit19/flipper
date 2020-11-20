(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),b=i,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||r;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},139:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n(141),a=n(140);function r(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,l=void 0!==o&&o,c=r.absolute,p=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+u:u}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},140:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))},141:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(20);t.default=function(){var e=Object(i.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var i=n(3),a=n(7),r=(n(0),n(138)),o=n(139),l={id:"android",title:"Building an Android Plugin"},c={unversionedId:"tutorial/android",id:"tutorial/android",isDocsHomePage:!1,title:"Building an Android Plugin",description:"For the purpose of the tutorial, we will assume you already have an existing",source:"@site/../docs/tutorial/android.mdx",slug:"/tutorial/android",permalink:"/docs/tutorial/android",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/tutorial/android.mdx",version:"current",sidebar:"extending",previous:{title:"Building an iOS Plugin",permalink:"/docs/tutorial/ios"},next:{title:"Building a React Native Plugin",permalink:"/docs/tutorial/react-native"}},p=[{value:"Creating a Plugin",id:"creating-a-plugin",children:[]},{value:"Registering your Plugin",id:"registering-your-plugin",children:[]},{value:"What next",id:"what-next",children:[]}],u={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("img",{alt:"Android Tutorial App",src:Object(o.a)("img/android-tutorial-app.png")}),Object(r.b)("p",null,"For the purpose of the tutorial, we will assume you already have an existing\nAndroid application in which you have a feed or list of items. As the Flipper\nteam, we obviously concern ourselves mostly with sea mammals, so this is what\nour app displays. The actual display logic is not what's interesting here,\nbut how we can make this data available in our Flipper desktop app."),Object(r.b)("p",null,"Part of what makes Flipper so useful is allowing users to inspect the\ninternals of their app. In this case, we'd like to see the specific\nsea mammal data the app is handling, so let's write a plugin to make that\neasy."),Object(r.b)("p",null,"You can find the source code of the project ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebook/flipper/tree/7dae5771d96ea76b75796d3b3a2c78746e581e3f/android/tutorial"}),"on GitHub"),"."),Object(r.b)("h2",{id:"creating-a-plugin"},"Creating a Plugin"),Object(r.b)("p",null,"On Android, a Flipper plugin is a class that implements the\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebook/flipper/blob/master/android/src/main/java/com/facebook/flipper/core/FlipperPlugin.java"}),Object(r.b)("inlineCode",{parentName:"a"},"FlipperPlugin")),"\ninterface."),Object(r.b)("p",null,"The interface is rather small and only comprises four methods:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getId() -> String"),": Specify a unique string so the JavaScript side knows where to talk to. This must match the name attribute in the ",Object(r.b)("inlineCode",{parentName:"li"},"package.json")," we will look into later in this tutorial."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onConnect(FlipperConnection)"),": This method is called when the desktop app connects to the mobile client and is ready to receive or send data."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onDisconnect()"),": We're sure you can figure this one out."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"runInBackground() -> Boolean"),": Unless this is true, only the currently selected plugin in the Flipper UI can communicate with the device.")),Object(r.b)("p",null,"Let's implement these methods for our sealife app:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-kotlin"}),'import com.facebook.flipper.core.FlipperConnection\nimport com.facebook.flipper.core.FlipperObject\nimport com.facebook.flipper.core.FlipperPlugin\nimport com.facebook.flipper.sample.tutorial.MarineMammals\n\nclass SeaMammalFlipperPlugin : FlipperPlugin {\n    private var connection: FlipperConnection? = null\n\n    override fun getId(): String = "sea-mammals"\n\n    override fun onConnect(connection: FlipperConnection?) {\n        this.connection = connection\n\n        MarineMammals.list.mapIndexed { index, (title, picture_url) ->\n            FlipperObject.Builder()\n                    .put("id", index)\n                    .put("title", title)\n                    .put("url", picture_url).build()\n        }.forEach(this::newRow)\n    }\n\n    override fun onDisconnect() {\n        connection = null\n    }\n\n    override fun runInBackground(): Boolean = false\n\n    private fun newRow(row: FlipperObject) {\n        connection?.send("newRow", row)\n    }\n}\n')),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"See ",Object(r.b)("a",Object(i.a)({parentName:"em"},{href:"https://github.com/facebook/flipper/blob/5afb148ffa9e267e5b24e0dfae198d1cf46cc396/android/tutorial/src/main/java/com/facebook/flipper/sample/tutorial/plugin/SeaMammalFlipperPlugin.kt"}),"SeaMammalFlipperPlugin.kt"))),Object(r.b)("p",null,"The two interesting bits here are ",Object(r.b)("inlineCode",{parentName:"p"},"onConnect")," and ",Object(r.b)("inlineCode",{parentName:"p"},"newRow"),". ",Object(r.b)("inlineCode",{parentName:"p"},"newRow"),' sends a message\nto the desktop app and is identified with the same name "newRow".'),Object(r.b)("p",null,"For our sample app, we're dealing with a static data source. However, in real\nlife, you will likely dynamically receive new data as the user interacts with\nthe app. So while we just send all the data we have at once in ",Object(r.b)("inlineCode",{parentName:"p"},"onConnect"),",\nyou would normally set up a listener here to instead call ",Object(r.b)("inlineCode",{parentName:"p"},"newRow")," as new data\narrives."),Object(r.b)("p",null,"You may have noticed that we don't just send random ",Object(r.b)("inlineCode",{parentName:"p"},"Object"),"s over the wire but\nuse ",Object(r.b)("inlineCode",{parentName:"p"},"FlipperObject"),"s instead. What are they? A ",Object(r.b)("inlineCode",{parentName:"p"},"FlipperObject")," works similar\nto a JSON dictionary and has a limited set of supported types like strings,\nintegers and arrays. Before sending an object from your native app to the\ndesktop, you first need to break it down into ",Object(r.b)("inlineCode",{parentName:"p"},"FlipperObject"),"-serializable parts."),Object(r.b)("h2",{id:"registering-your-plugin"},"Registering your Plugin"),Object(r.b)("p",null,"Now all you need to do is let Flipper know about your new plugin. You do this\nby calling ",Object(r.b)("inlineCode",{parentName:"p"},"addPlugin")," on your ",Object(r.b)("inlineCode",{parentName:"p"},"FlipperClient"),", which is normally created\nat application startup."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-kotlin"}),"val flipperClient = AndroidFlipperClient.getInstance(this)\n// Add all sorts of other amazing plugins here ...\nflipperClient.addPlugin(SeaMammalFlipperPlugin())\nflipperClient.start()\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"See ",Object(r.b)("a",Object(i.a)({parentName:"em"},{href:"https://github.com/facebook/flipper/blob/5afb148ffa9e267e5b24e0dfae198d1cf46cc396/android/tutorial/src/main/java/com/facebook/flipper/sample/tutorial/TutorialApplication.kt"}),Object(r.b)("inlineCode",{parentName:"a"},"TutorialApplication.kt")))),Object(r.b)("h2",{id:"what-next"},"What next"),Object(r.b)("p",null,'When starting your application now, Flipper will tell the desktop application\nabout the plugin it supports, including "sea-mammals" and will look for a\ncorresponding JavaScript plugin by that name. Let\'s build that next.'))}s.isMDXComponent=!0}}]);