(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"C+4P":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz");t.a=function(e){var t=e.posts,a=e.currentPermalink,n=Object(l.useStaticQuery)("4162432391").allMarkdownRemark.group;return r.a.createElement("div",{className:"nav-docs blog-sidebar"},r.a.createElement("div",{className:"nav-docs-section subscribe"},r.a.createElement("h3",null,"Subscribe"),r.a.createElement("a",{rel:"home",type:"application/rss+xml",href:"/blog/rss.xml"},"RSS")),r.a.createElement("div",{className:"nav-docs-section categories"},r.a.createElement("h3",null,"Categories"),r.a.createElement("ul",null,n.map((function(e,t){var n=e.fieldValue,o=n[0].toUpperCase()+n.substring(1);return r.a.createElement("li",{key:t},n===a?o:r.a.createElement(l.Link,{to:"/tags/"+n},o))})))),r.a.createElement("div",{className:"nav-docs-section recent-posts"},r.a.createElement("h3",null,"Recent Posts"),r.a.createElement("ul",null,t.map((function(e,t){var n=e.frontmatter;return r.a.createElement("li",{key:t},n.permalink===a?n.title:r.a.createElement(l.Link,{to:n.permalink},n.title))})))))}},DgCq:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("DdhK");t.a=function(e){var t=e.title,a=e.rawMarkdownBody,n=e.pageContext;return r.a.createElement("section",{className:"inner-faq-content"},r.a.createElement("h2",null,t),r.a.createElement(l.a,{pageContext:n},a))}},F0uZ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=c;var n,r=(n=a("q1tI"))&&n.__esModule?n:{default:n},l=a("Wbzz"),o=a("dj5g"),i=a("PDH8");function c(e){var t=e.to,a=e.title,n=e.children,i=e.className,c=e.stripHash,s=void 0!==c&&c,m={to:s?(0,o.stripHashedLocation)(t):t,onClick:function(e){return s?(0,o.handleStrippedLinkClick)(t,e):(0,o.handleLinkClick)(t,e)}};return a&&(m.title=a),i&&(m.className=i),r.default.createElement(l.Link,m,Boolean(n)?n:a)}c.propTypes=i.anchorLinkTypes},PDH8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.anchorLinkTypes=void 0;var n,r=(n=a("17x9"))&&n.__esModule?n:{default:n};var l={to:r.default.string.isRequired,title:r.default.string,className:r.default.string,stripHash:r.default.bool,children:r.default.node};t.anchorLinkTypes=l},QHVq:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return h}));var n=a("q1tI"),r=a.n(n),l=a("VXBa"),o=a("Wbzz"),i=a("T0lV"),c=a("oEq0"),s=function(e){var t=e.category,a=t.links.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(o.Link,{style:{marginLeft:e.indent?20:0},className:"active",to:e.frontmatter.permalink},e.frontmatter.sidebarTitle||e.frontmatter.title),e.frontmatter.sublinks&&r.a.createElement("ul",null,e.frontmatter.sublinks.split(",").map((function(t,a){return r.a.createElement("li",{key:a},r.a.createElement(c.AnchorLink,{title:t,to:e.frontmatter.permalink+"#"+Object(i.a)(t)},t))}))))}));return r.a.createElement("div",null,r.a.createElement("h3",null,t.name),r.a.createElement("ul",null,a))},m=function(e){var t=e.sideBarData;return r.a.createElement("div",{className:"nav-docs"},t.map((function(e){return r.a.createElement(s,{category:e,key:e.name})})))},u=a("DdhK"),d=function(e){var t,a=e.title,n=e.nextDoc,l=e.sideBarData,i=e.rawMarkdownBody,c=e.pageContext;return r.a.createElement("section",null,r.a.createElement("div",{className:"documentationContent"},r.a.createElement("div",{className:"inner-content"},r.a.createElement("h1",null,a),r.a.createElement(u.a,{pageContext:c},i),(null==n||null===(t=n.frontmatter)||void 0===t?void 0:t.permalink)&&r.a.createElement(o.Link,{className:"read-next",to:n.frontmatter.permalink},r.a.createElement("span",{className:"read-next-continue"},"Continue Reading →"),r.a.createElement("span",{className:"read-next-title"},n.frontmatter.title))),r.a.createElement(m,{sideBarData:l})))},p=function(e){var t,a=e.title,n=e.heroText,l=e.nextDoc,i=e.sideBarData,c=e.rawMarkdownBody,s=e.pageContext;return r.a.createElement("section",null,r.a.createElement("div",{class:"foundation"},r.a.createElement("div",{className:"foundation-hero"},r.a.createElement("div",{className:"foundation-hero-inner-content"},r.a.createElement("img",{src:"/img/graphql_foundation-logo-white.svg",alt:"GraphQL Foundation logo"}),r.a.createElement("h2",null,n))),r.a.createElement("div",{className:"documentationContent"},r.a.createElement("div",{className:"inner-content"},r.a.createElement("h1",null,a),r.a.createElement(u.a,{pageContext:s},c),(null==l||null===(t=l.frontmatter)||void 0===t?void 0:t.permalink)&&r.a.createElement(o.Link,{className:"read-next",to:l.frontmatter.permalink},r.a.createElement("span",{className:"read-next-continue"},"Continue Reading →"),r.a.createElement("span",{className:"read-next-title"},l.frontmatter.title))),r.a.createElement(m,{sideBarData:i}))))},E=a("C+4P"),f=a("jFf7"),k=function(e){var t=e.title,a=e.date,n=e.permalink,l=e.byline,o=e.guestBio,i=e.rawMarkdownBody,c=e.sideBarData,s=e.pageContext,m=e.tags;return r.a.createElement("section",null,r.a.createElement("div",{className:"documentationContent"},r.a.createElement(f.a,{title:t,date:a,permalink:n,byline:l,guestBio:o,rawMarkdownBody:i,isPermalink:!0,pageContext:s,tags:m}),r.a.createElement(E.a,{posts:c[0].links.sort((function(e,t){var a=new Date(e.frontmatter.date),n=new Date(t.frontmatter.date);return a>n?-1:a<n?1:0})),currentPermalink:n})))},g=a("DgCq"),v={docs:d,foundation:p,blog:k,code:function(e){var t=e.title,a=e.rawMarkdownBody,n=e.pageContext;return r.a.createElement("section",null,r.a.createElement("div",{className:"documentationContent"},r.a.createElement("div",{className:"inner-content"},r.a.createElement("h1",null,t),r.a.createElement(u.a,{pageContext:n},a))))},faq:function(e){var t=e.title,a=e.rawMarkdownBody,n=e.pageContext;return r.a.createElement("section",null,r.a.createElement("div",{className:"documentationContent"},r.a.createElement(g.a,{title:t,rawMarkdownBody:a,pageContext:n})))}},h="2352471353";t.default=function(e){var t=e.data,a=e.pageContext,n=t.doc,o=n.frontmatter,i=o.title,c=o.date,s=o.heroText,m=o.permalink,u=o.byline,d=o.guestBio,p=o.layout,E=o.tags,f=n.rawMarkdownBody,k=t.nextDoc,g=v[p];return r.a.createElement(l.a,{title:i+" | GraphQL",pageContext:a},r.a.createElement(g,{title:i,date:c,heroText:s,permalink:m,byline:u,guestBio:d,rawMarkdownBody:f,nextDoc:k,sideBarData:a.sideBarData,pageContext:a,tags:E}))}},jFf7:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("DdhK"),o=a("Wbzz");t.a=function(e){var t=e.title,a=e.date,n=e.permalink,i=e.byline,c=e.guestBio,s=e.rawMarkdownBody,m=e.isPermalink,u=e.pageContext,d=e.excerpt,p=e.showExcerpt,E=e.tags;return r.a.createElement("div",{className:"inner-content"},r.a.createElement("h1",null,m?t:r.a.createElement("a",{href:n},t)),r.a.createElement("p",null,new Date(a).toLocaleDateString()," by ",i),r.a.createElement("div",{className:"tag-wrapper"},E.map((function(e){return r.a.createElement("span",{className:"tag"},r.a.createElement(o.Link,{to:"/tags/"+e},e))}))),c?null:r.a.createElement("hr",null),c&&r.a.createElement("p",{className:"guestBio"},"This guest article contributed by "+i+", "+c+"."),p?r.a.createElement("p",null,d):r.a.createElement(l.a,{pageContext:u},s))}},oEq0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AnchorLink",{enumerable:!0,get:function(){return n.AnchorLink}});var n=a("F0uZ")}}]);
//# sourceMappingURL=component---src-templates-doc-tsx-fbfb460c91d73bf075ce.js.map