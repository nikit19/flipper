"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7359],{3905:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>d});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a.apply(this,arguments)}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),d=function(e){return function(n){var r=m(n.components);return t.createElement(e,a({},n,{components:r}))}},m=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},c=function(e){var n=m(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(r),c=i,h=d["".concat(o,".").concat(c)]||d[c]||u[c]||a;return r?t.createElement(h,p(p({ref:n},s),{},{components:r})):t.createElement(h,p({ref:n},s))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},84292:(e,n,r)=>{r.r(n),r.d(n,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,assets:()=>d,toc:()=>m,default:()=>u});var t=r(83117),i=r(80102),a=(r(67294),r(3905)),o=["components"],p={title:"Headless Flipper - what it means for plugin developers",author:"Andrey Goncharov",author_title:"Software Engineer",author_url:"https://github.com/aigoncharov",author_image_url:"https://github.com/aigoncharov.png",tags:["flipper","headless","plugins"],description:"Flipper is moving from an Electron monolith to a headless Node.js app with a web UI. It reshapes how we think about plugins and what plugins can do. We talk about what changes and how to prepare our plugins for the migration.",image:"/img/preparing-for-headless-flipper.jpg",hide_table_of_contents:!1},l=void 0,s={permalink:"/blog/2022/05/20/preparing-for-headless-flipper",source:"@site/blog/2022-05-20-preparing-for-headless-flipper.md",title:"Headless Flipper - what it means for plugin developers",description:"Flipper is moving from an Electron monolith to a headless Node.js app with a web UI. It reshapes how we think about plugins and what plugins can do. We talk about what changes and how to prepare our plugins for the migration.",date:"2022-05-20T00:00:00.000Z",formattedDate:"May 20, 2022",tags:[{label:"flipper",permalink:"/blog/tags/flipper"},{label:"headless",permalink:"/blog/tags/headless"},{label:"plugins",permalink:"/blog/tags/plugins"}],readingTime:8.15,truncated:!0,authors:[{name:"Andrey Goncharov",title:"Software Engineer",url:"https://github.com/aigoncharov",imageURL:"https://github.com/aigoncharov.png"}],nextItem:{title:"Flipper is coming to your web and Node.js apps",permalink:"/blog/2022/02/21/js-flipper-announcement"}},d={authorsImageUrls:[void 0]},m=[{value:"How Flipper changes",id:"how-flipper-changes",children:[],level:2},{value:"How it affects plugins",id:"how-it-affects-plugins",children:[],level:2},{value:"Migration guide",id:"migration-guide",children:[],level:2},{value:"P.S. Flipper needs you!",id:"ps-flipper-needs-you",children:[],level:2}],c={toc:m};function u(e){var n=e.components,p=(0,i.Z)(e,o);return(0,a.mdx)("wrapper",(0,t.Z)({},c,p,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Cover image",src:r(5117).Z})),(0,a.mdx)("p",null,"We know Flipper as an Electron desktop app that serves mobile developers as\ntheir debugging companion. Thousands of people use Flipper every day to tinker\nwith their app and get to the bottom of tricky problems."),(0,a.mdx)("p",null,"As announced in the previous\n",(0,a.mdx)("a",{parentName:"p",href:"https://fbflipper.com/blog/2021/10/14/roadmap/"},"roadmap post"),', we are committed\nto amplifying how Flipper could improve the quality of our software. We want\ntake Flipper beyond its current role as a complementary debugging tool, provide\na powerful API, and allow using Flipper in more than just the GUI context (we\ncall it "headless mode"). Imagine talking to your mobile device (or anything\nelse that runs Flipper Client) from your terminal. Imagine deploying Flipper\nremotely in the cloud and interacting with it from your laptop. Imagine using\nyour favorite plugins for automated testing.'),(0,a.mdx)("p",null,"In this post we cover:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"How Flipper changes to facilitate the headless mode"),(0,a.mdx)("li",{parentName:"ul"},"How it affects plugins"),(0,a.mdx)("li",{parentName:"ul"},"A migration guide")),(0,a.mdx)("h2",{id:"how-flipper-changes"},"How Flipper changes"),(0,a.mdx)("p",null,"Let us take a look at how it works today as an Electron app."),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Flipper Electron architecture",src:r(29120).Z})),(0,a.mdx)("p",null,"Here is what happens:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Flipper starts as an Electron application.",(0,a.mdx)("ol",{parentName:"li"},(0,a.mdx)("li",{parentName:"ol"},"WebSocket server starts."),(0,a.mdx)("li",{parentName:"ol"},"Device discovery starts via adb/idb/metro."),(0,a.mdx)("li",{parentName:"ol"},"Electron shows a web view with Flipper UI (React)."),(0,a.mdx)("li",{parentName:"ol"},"Flipper UI queries the device discovery service for a list of devices."))),(0,a.mdx)("li",{parentName:"ol"},"At this point, Flipper can already run\n",(0,a.mdx)("a",{parentName:"li",href:"https://fbflipper.com/docs/extending/desktop-plugin-structure/#creating-a-device-plugin"},'"device" plugins'),".\nThese plugins do not receive a connection to a running app. They talk to the\ndevice via adb/idb/metro."),(0,a.mdx)("li",{parentName:"ol"},"An app starts on the device."),(0,a.mdx)("li",{parentName:"ol"},"Flipper Client embedded in the app connects to the WebSocket server."),(0,a.mdx)("li",{parentName:"ol"},"Flipper updates the list of known clients and reflects it in the UI."),(0,a.mdx)("li",{parentName:"ol"},"Now Flipper can run\n",(0,a.mdx)("a",{parentName:"li",href:"https://fbflipper.com/docs/extending/desktop-plugin-structure/#creating-a-client-plugin"},'"client" plugins'),"."),(0,a.mdx)("li",{parentName:"ol"},"Client plugins talk to the device application over the WebSocket connection.")),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"You can start Flipper Electron with ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn start")," from the ",(0,a.mdx)("inlineCode",{parentName:"p"},"/desktop")," folder.")),(0,a.mdx)("p",null,"Here is how Flipper Headless works."),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Flipper Headless architecture",src:r(28379).Z})),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Flipper starts as a Node.js application.",(0,a.mdx)("ol",{parentName:"li"},(0,a.mdx)("li",{parentName:"ol"},"WebSocket server starts."),(0,a.mdx)("li",{parentName:"ol"},"Device discovery starts via adb/idb/metro."),(0,a.mdx)("li",{parentName:"ol"},"Web server starts."),(0,a.mdx)("li",{parentName:"ol"},"It serves Flipper UI to a browser."),(0,a.mdx)("li",{parentName:"ol"},"Flipper UI connects to the WebSocket server."),(0,a.mdx)("li",{parentName:"ol"},"Flipper UI sends a message over the WebSocket connection to query the\ndevice discovery service for a list of devices."))),(0,a.mdx)("li",{parentName:"ol"},"At this point, Flipper can already run\n",(0,a.mdx)("a",{parentName:"li",href:"https://fbflipper.com/docs/extending/desktop-plugin-structure/#creating-a-device-plugin"},'"device" plugins'),".\nThese plugins do not receive a connection to a running app. They talk to the\ndevice via adb/idb/metro."),(0,a.mdx)("li",{parentName:"ol"},"An app starts on the device."),(0,a.mdx)("li",{parentName:"ol"},"Flipper Client embedded in the app connects to the WebSocket server."),(0,a.mdx)("li",{parentName:"ol"},"Flipper updates the list of known clients. It sends a message over the\nWebSocket connection to Flipper UI with the information about the new device."),(0,a.mdx)("li",{parentName:"ol"},"Now Flipper can run\n",(0,a.mdx)("a",{parentName:"li",href:"https://fbflipper.com/docs/extending/desktop-plugin-structure/#creating-a-client-plugin"},'"client" plugins'),"."),(0,a.mdx)("li",{parentName:"ol"},"Client plugins talk to the device application over the WebSocket bridge - the\nconnection from Flipper UI to Flipper WebSocket server piped to the\nconnection from the device application to the Flipper WebSocket server.")),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"You can start Flipper Electron with ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn flipper-server")," from the ",(0,a.mdx)("inlineCode",{parentName:"p"},"/desktop"),"\nfolder.")),(0,a.mdx)("h2",{id:"how-it-affects-plugins"},"How it affects plugins"),(0,a.mdx)("p",null,"Plugins are hosted by Flipper UI. When it was a part of the Electron app, there\nwas no problem. Plugins could access any Node.js APIs thanks to Electron magic.\nThere were no constraints on what plugins could do. After making Flipper UI a\nproper web app running in a browser, we limited what plugins can do. They no\nlonger can access the network stack or the file system because there are no\ncorresponding browser APIs. Yet, we want to keep Flipper flexible and provide as\nmuch freedom to plugin developers as possible. Moreover, we could not leave the\nexisting plugins without a clear migration path."),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Flipper remote Node.js API",src:r(27044).Z})),(0,a.mdx)("p",null,"Since we already have a WebSocket connection between Flipper UI and Flipper\nServer, we can model almost any request-response and even stream-based Node.js\nAPIs over it. So far, we exposed a curated subset of them:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"child_process",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"exec"))),(0,a.mdx)("li",{parentName:"ul"},"fs (and ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/fs-extra"},"fs-extra"),")",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"constants"),(0,a.mdx)("li",{parentName:"ul"},"access"),(0,a.mdx)("li",{parentName:"ul"},"pathExists"),(0,a.mdx)("li",{parentName:"ul"},"unlink"),(0,a.mdx)("li",{parentName:"ul"},"mkdir"),(0,a.mdx)("li",{parentName:"ul"},"rm"),(0,a.mdx)("li",{parentName:"ul"},"copyFile"),(0,a.mdx)("li",{parentName:"ul"},"stat"),(0,a.mdx)("li",{parentName:"ul"},"readlink"),(0,a.mdx)("li",{parentName:"ul"},"readFile"),(0,a.mdx)("li",{parentName:"ul"},"writeFile")))),(0,a.mdx)("p",null,"We also provided a way to\n",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/0f038218f893d86e91714cd91eed8e37d756386c/desktop/flipper-plugin/src/plugin/FlipperLib.tsx#L83"},"download a file"),"\nor send requests to the\n",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/0f038218f893d86e91714cd91eed8e37d756386c/desktop/flipper-plugin/src/plugin/FlipperLib.tsx#L186"},"internal infrastructure"),"."),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"Please, find the complete list of available APIs on\n",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/0f038218f893d86e91714cd91eed8e37d756386c/desktop/flipper-plugin/src/plugin/FlipperLib.tsx#L95"},"GitHub"),".\n",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/0f038218f893d86e91714cd91eed8e37d756386c/desktop/flipper-plugin/src/plugin/FlipperLib.tsx#L47"},"Here are Node.js API abstractions"),"\nspecifically.")),(0,a.mdx)("p",null,"As you might have noticed, all exposed APIs are of the request-response nature.\nThey assume a short finite controlled lifespan. Yet, some plugins start\nadditional web servers or spawn long-living child processes. To control their\nlifetime we need to track them on Flipper Server side and stop them whenever\nFlipper UI disconnects. Say hello to a new experimental feature - Flipper Server\nAdd-ons!"),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Flipper Server Add-on",src:r(26515).Z})),(0,a.mdx)("p",null,'Now, every flipper plugin could have "server add-on" meta-information. Whenever\na Flipper plugin that has a corresponding Server Add-on starts, it sends a\ncommand to Flipper Server to start its Server Add-on counterpart. Flipper plugin\nthat lives in a browser inside of Flipper UI talks to its server add-on over the\nWebSocket connection. Whenever a user disables a plugin, Flipper sends a command\nto Flipper Server to stop the add-on. At the same time, if Flipper UI crashes or\nthe user just closes the tab, Flipper Server can kill the server add-on on its\nown.'),(0,a.mdx)("p",null,"Flipper plugin can talk to its server add-on companion (see\n",(0,a.mdx)("inlineCode",{parentName:"p"},"onServerAddOnMessage"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"onServerAddOnUnhandledMessage"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"sendToServerAddOn")," in\n",(0,a.mdx)("a",{parentName:"p",href:"https://fbflipper.com/docs/extending/flipper-plugin/#pluginclient"},"the docs"),")\nand act whenever it starts or stops (see ",(0,a.mdx)("inlineCode",{parentName:"p"},"onServerAddOnStart"),",\n",(0,a.mdx)("inlineCode",{parentName:"p"},"onServerAddOnStop")," in\n",(0,a.mdx)("a",{parentName:"p",href:"https://fbflipper.com/docs/extending/flipper-plugin/#pluginclient"},"the docs"),")."),(0,a.mdx)("p",null,"Say, you wrote an ultimate library to find primes. You were cautious of the\nresource consumption, so you did it in Rust. You created a CLI interface for\nyour new shiny library. Now, you want your Flipper plugin to use it. It takes a\nlong time to find a prime and you want to keep track of the progress. You could\nuse ",(0,a.mdx)("inlineCode",{parentName:"p"},"getFlipperLib().remoteServerContext.childProcess.exec"),", but it is not\nflexible enough to monitor progress updates that your CLI sends to stdout. Here\nis how you could approach it:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx"},"// contract.tsx\nexport interface ServerAddOnEvents {\n  // Server add-on sends \"progress\" events with the progress updates\n  progress: number;\n}\nexport interface ServerAddOnMethods {\n  // Client plugin send \"findPrime\" messages to the server add-on to start finding primes\n  findPrime: () => Promise<number>;\n}\n\n// index.tsx (your plugin)\nimport {usePlugin, useValue, createState, PluginClient} from 'flipper-plugin';\nimport {ServerAddOnEvents, ServerAddOnMethods} from './contract';\n\nexport const plugin = (\n  client: PluginClient<{}, {}, ServerAddOnEvents, ServerAddOnMethods>,\n) => {\n  const prime = createState<number | null>(null);\n  const progress = createState<number>(0);\n\n  client.onServerAddOnStart(async () => {\n    const newPrime = await client.sendToServerAddOn('findPrime');\n    prime.set(newPrime);\n  });\n\n  client.onServerAddOnStart(() => {\n    client.onServerAddOnMessage('progress', progressUpdate => {\n      progress.set(progressUpdate);\n    });\n  });\n\n  return {\n    prime,\n    progress,\n  };\n};\n\nexport const Component = () => {\n  const pluginInstance = usePlugin(plugin);\n  const prime = useValue(pluginInstance.prime);\n  const progress = useValue(pluginInstance.progress);\n\n  return <div>{prime ?? `Calculating (${progress}%) done...`}</div>;\n};\n\n// serverAddOn.tsx\nimport {ServerAddOn} from 'flipper-plugin';\nimport {exec, ChildProcess} from 'child_process';\nimport {ServerAddOnEvents, ServerAddOnMethods} from './contract';\n\nconst serverAddOn: ServerAddOn<ServerAddOnEvents, ServerAddOnMethods> =\n  async connection => {\n    let findPrimeChildProcess: ChildProcess | undefined;\n\n    connection.receive('findPrime', () => {\n      if (findPrimeChildProcess) {\n        // Allow only one findPrime request at a time. Finding primes is expensive!\n        throw new Error('Too many requests!');\n      }\n\n      // Start our awesome Rust lib\n      findPrimeChildProcess = exec('/find-prime-cli', {shell: true});\n\n      // Return a Promise that resolves when a prime is found.\n      // Flipper will serialize the value the promise is resolved with and send it oer the wire.\n      return new Promise(resolve => {\n        // Listen to stdout of the lib for the progress updates and, eventually, the prime\n        findPrimeChildProcess.stdout.on('data', data => {\n          // Say, data is a stringified JSON\n          const parsed = JSON.parse(data);\n\n          if (parsed.type === 'progress') {\n            connection.send('progress', parsed.value);\n            return;\n          }\n\n          // Allow new requests to find new primes\n          findPrimeChildProcess = undefined;\n          // If it is not a progress update, then a prime is found.\n          resolve(parsed.value);\n        });\n      });\n    });\n  };\n\nexport default serverAddOn;\n")),(0,a.mdx)("h2",{id:"migration-guide"},"Migration guide"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Examine your plugins for Node.js APIs. Replace them with\n",(0,a.mdx)("inlineCode",{parentName:"p"},"getFlipperLib().remoteServerContext.*")," calls."),(0,a.mdx)("pre",{parentName:"li"},(0,a.mdx)("code",{parentName:"pre",className:"language-tsx"},"// before\nimport {mkdir} from 'fs/promises';\n\nexport const plugin = () => {\n  const myAwesomeFn = async () => {\n    await mkdir('/universe/dagobah');\n  };\n\n  return {\n    myAwesomeFn,\n  };\n};\n\n// after\nimport {getFlipperLib} from 'flipper-plugin';\n\nexport const plugin = () => {\n  const myAwesomeFn = async () => {\n    await getFlipperLib().remoteServerContext.mkdir('/universe/dagobah');\n  };\n\n  return {\n    myAwesomeFn,\n  };\n};\n"))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"If your plugin uses network stack of spawns a subprocess, consider creating a\nServer Add-on."),(0,a.mdx)("ol",{parentName:"li"},(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"In your plugin's folder create a new file - ",(0,a.mdx)("inlineCode",{parentName:"p"},"serverAddOn.tsx"))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"In your plugin's package.json add fields ",(0,a.mdx)("inlineCode",{parentName:"p"},"serverAddOn")," and\n",(0,a.mdx)("inlineCode",{parentName:"p"},"flipperBundlerEntryServerAddOn")),(0,a.mdx)("pre",{parentName:"li"},(0,a.mdx)("code",{parentName:"pre",className:"language-js"},'{\n   // ...\n   "serverAddOn": "dist/serverAddOn.js",\n   "flipperBundlerEntryServerAddOn": "serverAddOn.tsx",\n   // ...\n}\n'))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Move your Node.js API calls to ",(0,a.mdx)("inlineCode",{parentName:"p"},"serverAddOn.tsx"))))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Verify your plugin works in a browser environment."),(0,a.mdx)("ol",{parentName:"li"},(0,a.mdx)("li",{parentName:"ol"},"Clone ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/facebook/flipper"},"Flipper repo"),"."),(0,a.mdx)("li",{parentName:"ol"},"Navigate to the ",(0,a.mdx)("inlineCode",{parentName:"li"},"desktop")," folder."),(0,a.mdx)("li",{parentName:"ol"},"In your terminal run ",(0,a.mdx)("inlineCode",{parentName:"li"},"yarn"),"."),(0,a.mdx)("li",{parentName:"ol"},"Run ",(0,a.mdx)("inlineCode",{parentName:"li"},"yarn flipper-server"),"."),(0,a.mdx)("li",{parentName:"ol"},"Load your plugin and make sure it works.")))),(0,a.mdx)("h2",{id:"ps-flipper-needs-you"},"P.S. Flipper needs you!"),(0,a.mdx)("p",null,"Flipper is maintained by a small team at Meta, yet is serving over a hundred\nplugins and dozens of different targets. Our team's goal is to support Flipper\nas a plugin-based platform for which we maintain the infrastructure. We don't\ntypically invest in individual plugins, but we do love plugin improvements."),(0,a.mdx)("p",null,"For that reason, we've marked many requests in the issue tracker as\n",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/issues?q=is%3Aissue+is%3Aopen+label%3A%22PR+welcome%22"},"PR Welcome"),".\nContributing changes should be as simple as cloning the\n",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper"},"repository")," and running\n",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn && yarn start")," in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"desktop/")," folder."),(0,a.mdx)("p",null,"Investing in debugging tools, both generic ones or just for specific apps, will\nbenefit iteration speed. And we hope Flipper will make it as hassle free as\npossible to create your debugging tools. For an overview of Flipper for React\nNative, and why and how to build your own plugins, we recommend checking out the\n",(0,a.mdx)("a",{parentName:"p",href:"https://youtu.be/WltZTn3ODW4"},"Flipper: The Extensible DevTool Platform for React Native"),"\ntalk."),(0,a.mdx)("p",null,"Happy debugging!"))}u.isMDXComponent=!0},26515:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/flipper-add-on-e9cbd5876aec62d6cf0b3c8bbbb21f07.jpg"},29120:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/flipper-arch-electron-0bb7ac4254f429cec6d72efb2723fc48.jpg"},28379:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/flipper-arch-headless-4fcf4de9017ce09bb960cc538b0f22dd.jpg"},27044:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/flipper-node-apis-4aba0d159e443443f757c4d64cd4fece.jpg"},5117:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/preparing-for-headless-flipper-294ecb22648bf0f3d337dac91bdb4553.jpg"}}]);