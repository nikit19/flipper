(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{138:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),b=i,g=d["".concat(o,".").concat(b)]||d[b]||u[b]||a;return t?r.a.createElement(g,c(c({ref:n},p),{},{components:t})):r.a.createElement(g,c({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var i=t(3),r=t(7),a=(t(0),t(138)),o={id:"create-plugin",title:"Client Plugin API"},c={unversionedId:"extending/create-plugin",id:"extending/create-plugin",isDocsHomePage:!1,title:"Client Plugin API",description:"FlipperPlugin",source:"@site/../docs/extending/create-plugin.mdx",slug:"/extending/create-plugin",permalink:"/docs/extending/create-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/create-plugin.mdx",version:"current",sidebar:"extending",previous:{title:"Searching and Filtering",permalink:"/docs/extending/search-and-filter"},next:{title:"Client Plugin Lifecycle",permalink:"/docs/extending/client-plugin-lifecycle"}},l=[{value:"FlipperPlugin",id:"flipperplugin",children:[]},{value:"Using FlipperConnection",id:"using-flipperconnection",children:[]},{value:"Push data to the desktop",id:"push-data-to-the-desktop",children:[]},{value:"Background Plugins",id:"background-plugins",children:[]}],p={rightToc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"flipperplugin"},"FlipperPlugin"),Object(a.b)("p",null,"To build a client plugin, implement the ",Object(a.b)("inlineCode",{parentName:"p"},"FlipperPlugin")," interface."),Object(a.b)("p",null,"The ID that is returned from your implementation needs to match the ",Object(a.b)("inlineCode",{parentName:"p"},"name")," defined in your JavaScript counterpart's ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'public class MyFlipperPlugin implements FlipperPlugin {\n  private FlipperConnection mConnection;\n\n  @Override\n  public String getId() {\n    return "MyFlipperPlugin";\n  }\n\n  @Override\n  public void onConnect(FlipperConnection connection) throws Exception {\n    mConnection = connection;\n  }\n\n  @Override\n  public void onDisconnect() throws Exception {\n    mConnection = null;\n  }\n\n  @Override\n  public boolean runInBackground() {\n    return false;\n  }\n}\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objective-c"}),'@interface MyFlipperPlugin : NSObject<FlipperPlugin>\n@end\n\n@implementation MyFlipperPlugin\n\n- (NSString*)identifier { return @"MyFlipperPlugin"; }\n- (void)didConnect:(FlipperConnection*)connection {}\n- (void)didDisconnect {}\n- (BOOL)runInBackground {}\n\n@end\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),'class MyFlipperPlugin : public FlipperPlugin {\npublic:\n  std::string identifier() const override { return "MyFlipperPlugin"; }\n  void didConnect(std::shared_ptr<FlipperConnection> conn) override;\n  void didDisconnect() override;\n  bool runInBackground() override;\n};\n')),Object(a.b)("div",{class:"warning"},Object(a.b)("p",null,"Please note that using Flipper from JavaScript in React Native requires the package ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-native-flipper"}),Object(a.b)("inlineCode",{parentName:"a"},"react-native-flipper"))," to be installed in the hosting application.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"import {addPlugin} from 'react-native-flipper';\n\naddPlugin({\n  getId() {\n    return 'MyFlipperPlugin';\n  },\n  onConnect(connection) {\n    console.log(\"connected\");\n  },\n  onDisconnect() {\n    console.log(\"disconnected\");\n  },\n  runInBackground() {\n    return false;\n  }\n})\n")),Object(a.b)("h2",{id:"using-flipperconnection"},"Using FlipperConnection"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"onConnect")," will be called when your plugin becomes active. This will provide a ",Object(a.b)("inlineCode",{parentName:"p"},"FlipperConnection")," allowing you to register receivers for desktop method calls and respond with data."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'connection.receive("getData", new FlipperReceiver() {\n  @Override\n  public void onReceive(FlipperObject params, FlipperResponder responder) throws Exception {\n    responder.success(\n        new FlipperObject.Builder()\n            .put("data", MyData.get())\n            .build());\n  }\n});\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objective-c"}),'@interface MyFlipperPlugin : NSObject<FlipperPlugin>\n@end\n\n@implementation MyFlipperPlugin\n\n- (NSString*)identifier { return @"MyFlipperPlugin"; }\n\n- (void)didConnect:(FlipperConnection*)connection\n{\n  [connection receive:@"getData" withBlock:^(NSDictionary *params, FlipperResponder *responder) {\n    [responder success:@{\n      @"data":[MyData get],\n    }];\n  }];\n}\n\n- (void)didDisonnect {}\n\n@end\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),'void MyFlipperPlugin::didConnect(std::shared_ptr<FlipperConnection> conn) {\n  conn->receive("getData", [](const folly::dynamic &params,\n                             std::unique_ptr<FlipperResponder> responder) {\n    dynamic response = folly::dynamic::object("data", getMyData());\n    responder->success(response);\n  });\n}\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'addPlugin({\n  getId() {\n    return \'MyFlipperPlugin\';\n  },\n  onConnect(connection) {\n    console.log("connected");\n    connection.receive("getData", (data, responder) => {\n      console.log("incoming data", data);\n      // respond with some data\n      responder.success({\n        ack: true\n      });\n    });\n  },\n  // ...as-is\n})\n')),Object(a.b)("h2",{id:"push-data-to-the-desktop"},"Push data to the desktop"),Object(a.b)("p",null,"You don't have to wait for the desktop to request data though, you can also push data directly to the desktop. If the JS plugin subscribes to the same method, it will receive the data."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'connection.send("MyMessage",\n    new FlipperObject.Builder()\n        .put("message", "Hello")\n        .build()\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objective-c"}),'[connection send:@"getData" withParams:@{@"message":@"hello"}];\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),'void MyFlipperPlugin::didConnect(std::shared_ptr<FlipperConnection> conn) {\n  dynamic message = folly::dynamic::object("message", "hello");\n  conn->send("getData", message);\n}\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'addPlugin({\n  getId() {\n    return \'MyFlipperPlugin\';\n  },\n  onConnect(connection) {\n    console.log("connected");\n    connection.send("newRow", { message: "Hello" });\n  },\n  // ...as-is\n})\n')),Object(a.b)("h2",{id:"background-plugins"},"Background Plugins"),Object(a.b)("p",null,"In some cases you may want to provide data to Flipper even when your plugin is not currently active. Returning true in ",Object(a.b)("inlineCode",{parentName:"p"},"runInBackground()")," will result in ",Object(a.b)("inlineCode",{parentName:"p"},"onConnect")," being called as soon as Flipper connects, and allow you to use the connection at any time. See the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"client-plugin-lifecycle"}),"Client Plugin Lifecycle")," for more details."),Object(a.b)("p",null,"This should be used in combination with a ",Object(a.b)("inlineCode",{parentName:"p"},"persistedStateReducer")," on the desktop side. See the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"js-plugin-api#background-plugins"}),"JS Plugin API")," for details."),Object(a.b)("p",null,"The benefit is that the desktop plugin can process this data in the background and fire notifications. It also reduces the number of renders and time taken to display the data when the plugin becomes active."),Object(a.b)("div",{class:"warning"},Object(a.b)("p",null,"Please note that a background plugin could keep some data in memory until a Flipper connection is available, for example to keep statistics about the app startup process.\nHowever, a plugin shouldn't assume it will eventually get a connection, since this depends on whether the user has enabled the plugin on the Desktop side.\nSo make sure to not store unbounded amounts of data!")))}s.isMDXComponent=!0}}]);