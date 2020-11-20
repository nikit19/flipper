(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{138:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=i.a.createContext({}),l=function(e){var n=i.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return i.a.createElement(a.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,a=s(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,g=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return t?i.a.createElement(g,p(p({ref:n},a),{},{components:t})):i.a.createElement(g,p({ref:n},a))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var a=2;a<o;a++)c[a]=t[a];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),i=t(7),o=(t(0),t(138)),c={id:"testing",title:"Testing"},p={unversionedId:"extending/testing",id:"extending/testing",isDocsHomePage:!1,title:"Testing",description:"Developer tools are only used if they work. We have built APIs to test plugins.",source:"@site/../docs/extending/testing.mdx",slug:"/extending/testing",permalink:"/docs/extending/testing",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/testing.mdx",version:"current",sidebar:"extending",previous:{title:"Error Handling",permalink:"/docs/extending/error-handling"},next:{title:"Debugging",permalink:"/docs/extending/debugging"}},s=[{value:"Android",id:"android",children:[]},{value:"C++",id:"c",children:[]},{value:"Testing the Flipper Desktop Plugin",id:"testing-the-flipper-desktop-plugin",children:[]}],a={rightToc:s};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},a,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Developer tools are only used if they work. We have built APIs to test plugins."),Object(o.b)("h2",{id:"android"},"Android"),Object(o.b)("p",null,"Start by creating your first test file in this directory ",Object(o.b)("inlineCode",{parentName:"p"},"MyFlipperPluginTest.java"),". In the test method body we create our plugin which we want to test as well as a ",Object(o.b)("inlineCode",{parentName:"p"},"FlipperConnectionMock"),". In this contrived example we simply assert that our plugin's connected status is what we expect."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@RunWith(RobolectricTestRunner.class)\npublic class MyFlipperPluginTest {\n\n  @Test\n  public void myTest() {\n    final MyFlipperPlugin plugin = new MyFlipperPlugin();\n    final FlipperConnectionMock connection = new FlipperConnectionMock();\n\n    plugin.onConnect(connection);\n    assertThat(plugin.connected(), equalTo(true));\n  }\n}\n")),Object(o.b)("p",null,"There are two mock classes that are used to construct tests ",Object(o.b)("inlineCode",{parentName:"p"},"FlipperConnectionMock")," and ",Object(o.b)("inlineCode",{parentName:"p"},"FlipperResponderMock"),". Together these can be used to write very powerful tests to verify the end to end behavior of your plugin. For example we can test if for a given incoming message our plugin responds as we expect."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void myTest() {\n  final MyFlipperPlugin plugin = new MyFlipperPlugin();\n  final FlipperConnectionMock connection = new FlipperConnectionMock();\n  final FlipperResponderMock responder = new FlipperResponderMock();\n\n  plugin.onConnect(connection);\n\n  final FlipperObject params = new FlipperObject.Builder()\n      .put("phrase", "flipper")\n      .build();\n  connection.receivers.get("myMethod").onReceive(params, responder);\n\n  assertThat(responder.successes, hasItem(\n      new FlipperObject.Builder()\n          .put("phrase", "ranos")\n          .build()));\n}\n')),Object(o.b)("h2",{id:"c"},"C++"),Object(o.b)("p",null,"Start by creating your first test file in this directory ",Object(o.b)("inlineCode",{parentName:"p"},"MyFlipperPluginTests.cpp")," and import the testing utilities from ",Object(o.b)("inlineCode",{parentName:"p"},"fbsource//xplat/sonar/xplat:FlipperTestLib"),". These utilities mock out core pieces of the communication channel so that you can test your plugin in isolation."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"#include <MyFlipperPlugin/MyFlipperPlugin.h>\n#include <FlipperTestLib/FlipperConnectionMock.h>\n#include <FlipperTestLib/FlipperResponderMock.h>\n\n#include <folly/json.h>\n#include <gtest/gtest.h>\n\nnamespace facebook {\nnamespace flipper {\nnamespace test {\n\nTEST(MyFlipperPluginTests, testDummy) {\n  EXPECT_EQ(1 + 1, 2);\n}\n\n} // namespace test\n} // namespace flipper\n} // namespace facebook\n")),Object(o.b)("p",null,"Here is a simple test using these mock utilities to create a plugin, send some data, and assert that the result is as expected."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'TEST(MyFlipperPluginTests, testDummy) {\n  std::vector<folly::dynamic> successfulResponses;\n  auto responder = std::make_unique<FlipperResponderMock>(&successfulResponses);\n  auto conn = std::make_shared<FlipperConnectionMock>();\n\n  MyFlipperPlugin plugin;\n  plugin.didConnect(conn);\n\n  folly::dynamic message = folly::dynamic::object("param1", "hello");\n  folly::dynamic expectedResponse = folly::dynamic::object("response", "Hi there");\n\n  auto receiver = conn->receivers_["someMethod"];\n  receiver(message, std::move(responder));\n\n  EXPECT_EQ(successfulResponses.size(), 1);\n  EXPECT_EQ(successfulResponses.back(), expectedResponse);\n}\n')),Object(o.b)("h2",{id:"testing-the-flipper-desktop-plugin"},"Testing the Flipper Desktop Plugin"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../tutorial/js-custom#testing-plugin-logic"}),"tutorial")))}l.isMDXComponent=!0}}]);