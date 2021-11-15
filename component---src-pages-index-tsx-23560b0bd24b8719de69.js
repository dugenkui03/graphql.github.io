(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{QeBL:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),r=n.n(t),l=n("VXBa"),c=n("Wbzz"),s=n("eOEr"),m=n("LUsA"),i=n("q8ys"),o=function(){return r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"abs"},r.a.createElement("header",{"aria-hidden":!0},r.a.createElement("section",null,r.a.createElement(s.a,null),r.a.createElement(m.a,{searchID:"hero-search-input"}))),r.a.createElement("section",{className:"intro"},r.a.createElement("div",{className:"named-logo"},r.a.createElement("img",{src:"/img/logo.svg",alt:"GraphQL Logo"}),r.a.createElement("h1",null,"GraphQL")),r.a.createElement("div",{className:"marketing-col"},r.a.createElement("h3",null,"描述你的数据"),r.a.createElement(i.a,{code:"type Project {\n  name: String\n  tagline: String\n  contributors: [User] \n}",language:"graphql"})),r.a.createElement("div",{className:"marketing-col"},r.a.createElement("h3",null,"请求你所要的数据"),r.a.createElement(i.a,{code:'{\n  project(name: "GraphQL") {\n    tagline\n  }\n}',language:"graphql"})),r.a.createElement("div",{className:"marketing-col"},r.a.createElement("h3",null,"得到可预测的结果"),r.a.createElement(i.a,{code:'{\n  "project": {\n    "tagline": "A query language for APIs"\n  }\n}',language:"json"}))),r.a.createElement("div",{className:"buttons-unit"},r.a.createElement(c.Link,{className:"button",to:"/code/"},"马上开始"),r.a.createElement(c.Link,{className:"button",to:"/learn/"},"了解更多"))))},d=function(){return r.a.createElement("div",{className:"grayWash"},r.a.createElement("section",{className:"point2",id:"single-request"},r.a.createElement("div",{className:"prose"},r.a.createElement("h2",null,"获取多个资源",r.a.createElement("br",null),"只用一个请求"),r.a.createElement("p",null,"GraphQL 查询不仅能够获得资源的属性，还能沿着资源间引用进一步查询。典型的 REST API 请求多个资源时得载入多个 URL，而 GraphQL 可以通过一次请求就获取你应用所需的所有数据。这样一来，即使是比较慢的移动网络连接下，使用 GraphQL 的应用也能表现得足够迅速。")),r.a.createElement("div",{className:"app-to-server","aria-hidden":!0},r.a.createElement("img",{src:"/img/phone.svg",width:"496",height:"440",className:"phone"}),r.a.createElement("div",{className:"query"},r.a.createElement(i.a,{code:"{\n    hero {\n    name\n    friends {\n        name\n        }\n    }\n}",language:"graphql"})),r.a.createElement("div",{className:"response"},r.a.createElement(i.a,{code:'{\n    "hero": {\n      "name": "Luke Skywalker",\n      "friends": [\n        { "name": "Obi-Wan Kenobi" },\n        { "name": "R2-D2" },\n        { "name": "Han Solo" },\n        { "name": "Leia Organa" }\n      ]\n    }\n}',language:"json"})),r.a.createElement("img",{src:"/img/server.svg",width:"496",height:"440",className:"server"}))))},u=function(){return Object(t.useEffect)((function(){var e,a=document.getElementById("type-highlight"),n=document.getElementById("query-highlight"),t=0,r=[2,6,7,6,8,13,14,9,18,19,20,13],l=[2,3,4,5,6,7,8,10,11,12,13,14];return function c(){a.style.top=17*r[t]-9+"px",n.style.top=17*l[t]-9+"px",t=(t+1)%r.length,e=setTimeout(c,800+200*Math.random())}(),function(){return clearTimeout(e)}}),[]),r.a.createElement("section",{className:"point3",id:"type-system"},r.a.createElement("div",{className:"prose"},r.a.createElement("h2",null,"描述所有的可能",r.a.createElement("br",null),"类型系统"),r.a.createElement("p",null,"GraphQL API 基于类型和字段的方式进行组织，而非入口端点。你可以通过一个单一入口端点得到你所有的数据能力。GraphQL 使用类型来保证应用只请求可能的数据，还提供了清晰的辅助性错误信息。应用可以使用类型，而避免编写手动解析代码。")),r.a.createElement("div",{className:"window strong-typed-query","aria-hidden":!0},r.a.createElement("div",{className:"query"},r.a.createElement("div",{id:"query-highlight",className:"highlight"}),r.a.createElement(i.a,{language:"graphql",code:"{\n  hero {\n    name\n    friends {\n      name\n      homeWorld {\n        name\n        climate\n      }\n      species {\n        name\n        lifespan\n        origin {\n          name\n        }\n      }\n    }\n  }\n}"})),r.a.createElement("div",{className:"type-system"},r.a.createElement("div",{id:"type-highlight",className:"highlight"}),r.a.createElement(i.a,{language:"graphql",code:"type Query {\n  hero: Character\n}\n\ntype Character {\n  name: String\n  friends: [Character]\n  homeWorld: Planet\n  species: Species\n}\n\ntype Planet {\n  name: String\n  climate: String\n}\n\ntype Species {\n  name: String\n  lifespan: Int\n  origin: Planet\n}"}))))},g=function(){return Object(t.useEffect)((function(){var e,a=function(e){document.getElementById("r1").style.display=1===e?"block":"none",document.getElementById("r2").style.display=2===e?"block":"none",document.getElementById("r3").style.display=3===e?"block":"none"},n=0,t=!0;return e=setTimeout((function r(){t?document.getElementById("ch"+n)&&(document.getElementById("ch"+n).style.display="inline",20===++n?(t=!1,a(3),e=setTimeout(r,1500)):11===n?(a(2),e=setTimeout(r,1500)):e=setTimeout(r,180*Math.random()+70)):(n--,document.getElementById("ch"+n)&&(document.getElementById("ch"+n).style.display="none",0===n?(t=!0,a(1),e=setTimeout(r,2e3)):e=setTimeout(r,80)))}),2e3),a(1),function(){return clearTimeout(e)}}),[]),r.a.createElement("section",{className:"point1",id:"predictable-results"},r.a.createElement("div",{className:"prose"},r.a.createElement("h2",null,"请求你所要的数据",r.a.createElement("br",null),"不多不少"),r.a.createElement("p",null,"向你的 API 发出一个 GraphQL 请求就能准确获得你想要的数据，不多不少。 GraphQL 查询总是返回可预测的结果。使用 GraphQL 的应用可以工作得又快又稳，因为控制数据的是应用，而不是服务器。")),r.a.createElement("div",{className:"window faux-graphiql","aria-hidden":!0},r.a.createElement("div",{className:"query"},r.a.createElement("pre",{className:"prism"},"{","\n  hero {","\n    name","\n    height\n    mass".split("").map((function(e,a){return r.a.createElement("span",{key:a,id:"ch"+a,className:"ch"},"\n"===e?r.a.createElement("br",null):e)})),r.a.createElement("span",{className:"cursor"}),"\n  }","\n}")),r.a.createElement("div",{className:"response"},r.a.createElement("div",{id:"r1"},r.a.createElement(i.a,{language:"json",code:'{\n  "hero": {\n      "name": "Luke Skywalker"\n  }\n}'})),r.a.createElement("div",{id:"r2"},r.a.createElement(i.a,{language:"json",code:'{\n  "hero": {\n      "name": "Luke Skywalker",\n      "height": 1.72\n  }\n}'})),r.a.createElement("div",{id:"r3"},r.a.createElement(i.a,{language:"json",code:'{\n  "hero": {\n      "name": "Luke Skywalker",\n      "height": 1.72,\n      "mass": 77\n  }\n}'})))))},p=function(){return Object(t.useEffect)((function(){var e,a=0,n=document.getElementById("leverageCodeView"),t=[800,1800,1200,3e3,3e3,3e3];return function r(){n.className="step"+a,a=(a+1)%6,e=setTimeout(r,t[a])}(),function(){return clearTimeout(e)}}),[]),r.a.createElement("section",{className:"point6",id:"bring-your-own-code"},r.a.createElement("div",{className:"prose"},r.a.createElement("h2",null,"使用你现有的",r.a.createElement("br",null),"数据和代码"),r.a.createElement("p",null,"GraphQL 让你的整个应用共享一套 API，而不用被限制于特定存储引擎。GraphQL 引擎已经有多种语言实现，通过 GraphQL API 能够更好利用你的现有数据和代码。你只需要为类型系统的字段编写函数，GraphQL 就能通过优化并发的方式来调用它们。")),r.a.createElement("div",{className:"window leverage-code","aria-hidden":!0},r.a.createElement("div",{id:"leverageCodeView"},r.a.createElement(i.a,{language:"graphql",code:"type Character {\n    name: String\n    homeWorld: Planet\n    friends: [Character]\n}"}),r.a.createElement(i.a,{language:"javascript",code:"// type Character {\nclass Character {\n    // name: String\n    getName() {\n        return this._name\n    }\n    \n    // homeWorld: Planet\n    getHomeWorld() {\n        return fetchHomeworld(this._homeworldID)\n    }\n    \n    // friends: [Character]\n    getFriends() {\n        return this._friendIDs.map(fetchCharacter)\n    }\n}"}),r.a.createElement(i.a,{language:"javascript",code:"# type Character {\nclass Character:\n  # name: String\n  def name(self):\n  return self._name\n\n  # homeWorld: Planet\n  def homeWorld(self):\n  return fetchHomeworld(self._homeworldID)\n\n  # friends: [Character]\n  def friends(self):\n  return map(fetchCharacter, self._friendIDs)\n"}),r.a.createElement(i.a,{language:"javascript",code:"\n// type Character {\npublic class Character {\n  // name: String\n  public String Name { get; }\n\n  // homeWorld: Planet\n  public async Task<Planet> GetHomeWorldAsync() {\n    return await FetchHomeworldAsync(_HomeworldID);\n  }\n\n  // friends: [Character]\n  public async IEnumerable<Task<Character>> GetFriendsAsync() {\n    return _FriendIDs.Select(FetchCharacterAsync);\n  }\n}"}))))},h=function(){return Object(t.useEffect)((function(){var e=0,a=document.getElementById("typeEvolveView");a.className="step"+e;var n=setInterval((function(){e=(e+1)%7,a.className="step"+e}),2200);return function(){return clearInterval(n)}})),r.a.createElement("div",{className:"grayWash"},r.a.createElement("section",{className:"point5",id:"without-versions"},r.a.createElement("div",{className:"prose"},r.a.createElement("h2",null,"API 演进",r.a.createElement("br",null),"无需划分版本"),r.a.createElement("p",null,"给你的 GraphQL API 添加字段和类型而无需影响现有查询。老旧的字段可以废弃，从工具中隐藏。通过使用单一演进版本，GraphQL API 使得应用始终能够使用新的特性，并鼓励使用更加简洁、更好维护的服务端代码。")),r.a.createElement("div",{className:"window type-evolution","aria-hidden":!0},r.a.createElement("div",{id:"typeEvolveView"},r.a.createElement("div",{className:"v1"},r.a.createElement(i.a,{language:"graphql",code:"type Film {\n  title: String\n  episode: Int\n  releaseDate: String\n\n\n\n}"})),r.a.createElement("div",{className:"v2"},r.a.createElement("div",{className:"add"}),r.a.createElement(i.a,{language:"graphql",code:"type Film {\n  title: String\n  episode: Int\n  releaseDate: String\n  openingCrawl: String\n\n\n}"})),r.a.createElement("div",{className:"v3"},r.a.createElement("div",{className:"add"}),r.a.createElement(i.a,{language:"graphql",code:"type Film {\n  title: String\n  episode: Int\n  releaseDate: String\n  openingCrawl: String\n  director: String\n  \n}"})),r.a.createElement("div",{className:"v4"},r.a.createElement("div",{className:"add"}),r.a.createElement("div",{className:"add"}),r.a.createElement("div",{className:"add"}),r.a.createElement("div",{className:"add"}),r.a.createElement("div",{className:"add"}),r.a.createElement("div",{className:"add"}),r.a.createElement("div",{className:"remove"}),r.a.createElement(i.a,{language:"graphql",code:"type Film {\n  title: String\n  episode: Int\n  releaseDate: String\n  openingCrawl: String\n  director: String\n  directedBy: Person\n}\n\ntype Person {\n  name: String\n  directed: [Film]\n  actedIn: [Film]\n}"})),r.a.createElement("div",{className:"v5"},r.a.createElement("div",{className:"add"}),r.a.createElement(i.a,{language:"graphql",code:"type Film {\n  title: String\n  episode: Int\n  releaseDate: String\n  openingCrawl: String\n  director: String @deprecated\n  directedBy: Person\n}\n\ntype Person {\n  name: String\n  directed: [Film]\n  actedIn: [Film]\n  \n}"}))))))},E=function(){return r.a.createElement("div",{className:"darkWash"},r.a.createElement("section",{className:"point4",id:"powerful-tools"},r.a.createElement("div",{className:"prose"},r.a.createElement("h2",null,"快步前进",r.a.createElement("br",null),"强大的开发者工具"),r.a.createElement("p",null,"不用离开编辑器就能准确知道你可以从 API 中请求的数据，发送查询之前就能高亮潜在问题，高级代码智能提示。利用 API 的类型系统，GraphQL 让你可以更简单地构建如同",r.a.createElement("a",{href:"https://github.com/graphql/graphiql",target:"_blank",rel:"noopener"},"Graph",r.a.createElement("em",null,"i"),"QL"),"的强大工具。")),r.a.createElement("div",{className:"graphiqlVid"}," ",r.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0},r.a.createElement("source",{src:"/img/graphiql.mp4?x",type:"video/mp4"})))))},v=function(){return r.a.createElement("section",{className:"powered-by",id:"whos-using"},r.a.createElement("div",{className:"prose"},r.a.createElement("h2",null,"谁在使用 GraphQL？"),r.a.createElement("p",null,"Facebook 的移动应用从 2012 年就开始使用 GraphQL。GraphQL 规范于 2015 年开源，现已经在多种环境下可用，并被各种体量的团队所使用。")),r.a.createElement("div",{className:"logos"},r.a.createElement("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/users/logos/facebook.png",title:"Facebook"})),r.a.createElement("a",{href:"https://docs.github.com/en/graphql",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/users/logos/github.png",title:"GitHub",className:"round"})),r.a.createElement("a",{href:"https://www.pinterest.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/users/logos/pinterest.png",title:"Pinterest",className:"round"})),r.a.createElement("a",{href:"https://www.intuit.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/users/logos/intuit.png",title:"Intuit"})),r.a.createElement("a",{href:"https://www.coursera.org/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/users/logos/coursera.png",title:"Coursera"})),r.a.createElement("a",{href:"https://www.shopify.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/users/logos/shopify.png",title:"Shopify",className:"round"}))),r.a.createElement(c.Link,{to:"/users",className:"button"},"更多 GraphQL 使用者"))};a.default=function(e){var a=e.pageContext;return r.a.createElement(l.a,{className:"index",title:"GraphQL | A query language for your API",pageContext:a},r.a.createElement(o,null),r.a.createElement("section",{className:"lead"},r.a.createElement("h1",null,"一种用于 API 的查询语言"),r.a.createElement("p",null,"GraphQL 既是一种用于 API 的查询语言也是一个满足你数据查询的运行时。 GraphQL 对你的 API 中的数据提供了一套易于理解的完整描述，使得客户端能够准确地获得它需要的数据，而且没有任何冗余，也让 API 更容易地随着时间推移而演进，还能用于构建强大的开发者工具。")),r.a.createElement(g,null),r.a.createElement(d,null),r.a.createElement(u,null),r.a.createElement(E,null),r.a.createElement(h,null),r.a.createElement(p,null),r.a.createElement(v,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-23560b0bd24b8719de69.js.map