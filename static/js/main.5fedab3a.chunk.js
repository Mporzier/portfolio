(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,t,s){},18:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(9),i=s.n(c),n=(s(15),s(2)),r=s(3),o=s(5),l=s(4),j=s(8),d=s(10),h=s.n(d),b=(s(18),s(0)),m=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.occupation,s=this.props.data.description,a=(this.props.data.address.city,this.props.data.nationality),c=this.props.data.social.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.url,target:"_blank",children:Object(b.jsx)("i",{className:e.className})})},e.name)}));return Object(b.jsxs)("header",{id:"home",children:[Object(b.jsxs)("nav",{id:"nav-wrap",children:[Object(b.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(b.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(b.jsxs)("ul",{id:"nav",className:"nav",children:[Object(b.jsx)("li",{className:"current",children:Object(b.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(b.jsx)("div",{className:"row banner",children:Object(b.jsxs)("div",{className:"banner-text",children:[Object(b.jsxs)("h1",{className:"responsive-headline",children:["Hello. I'm ",e,"."]}),Object(b.jsxs)("h2",{children:["I'm a ",a," ",Object(b.jsx)("span",{children:t}),".",Object(b.jsx)("br",{}),s,"."]}),Object(b.jsx)("hr",{}),Object(b.jsx)("ul",{className:"social",children:c})]})}),Object(b.jsx)("p",{className:"scrolldown",children:Object(b.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(b.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),p=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.url,target:"_blank",children:Object(b.jsx)("i",{className:e.className})})},e.name)}));return Object(b.jsx)("footer",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"twelve columns",children:[Object(b.jsx)("ul",{className:"social-links",children:e}),Object(b.jsx)("ul",{className:"copyright",children:Object(b.jsx)("li",{children:"\xa92021 Mathias Porzier"})})]}),Object(b.jsx)("div",{id:"go-top",children:Object(b.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(b.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),O=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data){this.props.data.name;var e="images/"+this.props.data.image,t=this.props.data.bio,s=(this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email,this.props.data.resumedownload)}return Object(b.jsx)("section",{id:"about",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"three columns",children:Object(b.jsx)("img",{className:"profile-pic",src:e,alt:"Mathias Porzier Profile Pic"})}),Object(b.jsxs)("div",{className:"nine columns main-col",children:[Object(b.jsx)("h2",{children:"About Me"}),Object(b.jsx)("p",{children:t}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"columns download",children:Object(b.jsx)("p",{children:Object(b.jsxs)("a",{href:s,className:"button",target:"_blank",children:[Object(b.jsx)("i",{className:"fa fa-eye"}),"View Resume"]})})})})]})]})})}}]),s}(a.Component),u=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.school}),Object(b.jsxs)("p",{className:"info",children:[e.degree," ",Object(b.jsx)("span",{children:"\u2022"}),Object(b.jsx)("em",{className:"date",children:e.graduated})]}),Object(b.jsx)("p",{children:e.description})]},e.school)})),s=this.props.data.work.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.company}),Object(b.jsxs)("p",{className:"info",children:[e.title,Object(b.jsx)("span",{children:"\u2022"})," ",Object(b.jsx)("em",{className:"date",children:e.years})]}),Object(b.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.skills.map((function(e){var t="bar-expand "+e.name.toLowerCase();return Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{style:{width:e.level},className:t}),Object(b.jsx)("em",{children:e.name})]},e.name)}));return Object(b.jsxs)("section",{id:"resume",children:[Object(b.jsxs)("div",{className:"row education",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Education"})})}),Object(b.jsx)("div",{className:"nine columns main-col",children:Object(b.jsx)("div",{className:"row item",children:Object(b.jsx)("div",{className:"twelve columns",children:t})})})]}),Object(b.jsxs)("div",{className:"row work",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Work"})})}),Object(b.jsx)("div",{className:"nine columns main-col",children:s})]}),Object(b.jsxs)("div",{className:"row skill",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Skills"})})}),Object(b.jsxs)("div",{className:"nine columns main-col",children:[Object(b.jsx)("p",{children:e}),Object(b.jsx)("div",{className:"bars",children:Object(b.jsx)("ul",{className:"skills",children:a})})]})]})]})}}]),s}(a.Component),x=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.address.city,s=this.props.data.address.state,a=this.props.data.phone,c=this.props.data.email;return Object(b.jsx)("section",{id:"contact",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h2",{children:"Contact Details"}),Object(b.jsxs)("p",{className:"address",children:[Object(b.jsx)("span",{children:e}),Object(b.jsx)("br",{}),t,", ",s,Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"tel:"+{phone:a},children:a}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"mailto:"+{email:c},children:c})]})]})})}}]),s}(a.Component),f=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsxs)("blockquote",{children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("cite",{children:e.user})]})},e.user)}));return Object(b.jsx)("section",{id:"testimonials",children:Object(b.jsx)("div",{className:"text-container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"two columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Client Testimonials"})})}),Object(b.jsx)("div",{className:"ten columns flex-container",children:Object(b.jsx)("ul",{className:"slides",children:e})})]})})})}}]),s}(a.Component),v=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(b.jsx)("div",{className:"columns portfolio-item",children:Object(b.jsx)("div",{className:"item-wrap",children:Object(b.jsxs)("a",{href:e.url,title:e.title,target:"_blank",children:[Object(b.jsx)("img",{alt:e.title,src:t}),Object(b.jsx)("div",{className:"overlay",children:Object(b.jsxs)("div",{className:"portfolio-item-meta",children:[Object(b.jsx)("h5",{children:e.title}),Object(b.jsx)("p",{children:e.category})]})}),Object(b.jsx)("div",{className:"link-icon",children:Object(b.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(b.jsx)("section",{id:"portfolio",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"twelve columns collapsed",children:[Object(b.jsx)("h1",{children:"Check Out Some of My Works."}),Object(b.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(a.Component),N=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),a}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"resume_data.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{data:this.state.resumeData.main}),Object(b.jsx)(O,{data:this.state.resumeData.main}),Object(b.jsx)(u,{data:this.state.resumeData.resume}),Object(b.jsx)(v,{data:this.state.resumeData.portfolio}),Object(b.jsx)(f,{data:this.state.resumeData.testimonials}),Object(b.jsx)(x,{data:this.state.resumeData.main}),Object(b.jsx)(p,{data:this.state.resumeData.main})]})}}]),s}(a.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(b.jsx)(N,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/portfolio","/service-worker.js");w?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):g(e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.5fedab3a.chunk.js.map