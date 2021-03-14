(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{12:function(e,i,s){},14:function(e,i,s){"use strict";s.r(i);var n=s(1),t=s.n(n),c=s(7),a=s.n(c),r=(s(12),s(2)),o=s(3),l=s(5),j=s(4),m=s(0),h=function(e){Object(l.a)(s,e);var i=Object(j.a)(s);function s(){return Object(r.a)(this,s),i.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)(t.a.Fragment,{children:Object(m.jsxs)("header",{id:"home",children:[Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsxs)("h1",{className:"responsive-headline",children:["I am ",e.name,"."]}),Object(m.jsxs)("h3",{children:["I am a ",e.role,".",e.roleDescription]}),Object(m.jsx)("hr",{}),Object(m.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,target:"_blank",children:Object(m.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),s}(n.Component),d=function(e){Object(l.a)(s,e);var i=Object(j.a)(s);function s(){return Object(r.a)(this,s),i.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)("section",{id:"about",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"About Me"}),Object(m.jsx)("p",{children:e.aboutme}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:"Contact Details"}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsxs)("span",{children:["E-Mail:"," ",Object(m.jsx)("a",{href:"mailto:omershafique0@gmail.com",children:e.email})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:["LinkedIn:"," ",Object(m.jsx)("a",{href:"https://www.linkedin.com/in/omershafique0/",target:"_blank",children:"Omer Shafique"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:e.name}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:e.address}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:e.website})]})]})})]})]})})}}]),s}(n.Component),b=function(e){Object(l.a)(s,e);var i=Object(j.a)(s);function s(){return Object(r.a)(this,s),i.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsxs)("section",{id:"resume",children:[Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Education"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(m.jsx)("div",{className:"row item",children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("h3",{children:e.UniversityName}),Object(m.jsxs)("p",{className:"info",children:[e.specialization,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]})]}),Object(m.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Work"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return Object(m.jsx)("div",{className:"row item",children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("h3",{children:e.CompanyName}),Object(m.jsxs)("p",{className:"info",children:[e.specialization,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsxs)("em",{className:"date",children:[e.MonthOfLeaving," ",e.YearOfLeaving]})]}),Object(m.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Skills"})})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("p",{children:e.skillsDescription}),Object(m.jsx)("div",{className:"bars",children:Object(m.jsx)("ul",{className:"skills",children:e.skills&&e.skills.map((function(e){return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),Object(m.jsx)("em",{children:e.skillname})]})}))})}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{className:"more-link",href:"https://www.linkedin.com/in/omershafique0/",target:"_blank",children:"More on linkedin"})})]})]})]})}}]),s}(n.Component),u=function(e){Object(l.a)(s,e);var i=Object(j.a)(s);function s(){return Object(r.a)(this,s),i.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",children:[Object(m.jsx)("h1",{children:"Check Out Some of My Works."}),Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e.portfolio&&e.portfolio.map((function(e){return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsx)("div",{className:"item-wrap",children:Object(m.jsxs)("a",{href:"#modal-01",children:[Object(m.jsx)("img",{src:"".concat(e.imgurl),className:"item-img"}),Object(m.jsx)("div",{className:"overlay",children:Object(m.jsxs)("div",{className:"portfolio-item-meta",children:[Object(m.jsx)("h5",{children:e.name}),Object(m.jsx)("p",{children:e.description})]})})]})})})}))})]})})})}}]),s}(n.Component),p=function(e){Object(l.a)(s,e);var i=Object(j.a)(s);function s(){return Object(r.a)(this,s),i.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsxs)("section",{id:"testimonials",children:[Object(m.jsxs)("div",{className:"text-container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"two columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Client Testimonials"})})}),Object(m.jsxs)("div",{className:"ten columns flex-container",children:[Object(m.jsx)("div",{className:"flexslider",children:Object(m.jsx)("ul",{className:"slides",children:e.testimonials&&e.testimonials.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsxs)("blockquote",{children:[Object(m.jsx)("p",{children:e.description}),Object(m.jsx)("cite",{children:e.name})]})})}))})})," "]})," "]})," "]})," "]})}}]),s}(n.Component),O=function(e){Object(l.a)(s,e);var i=Object(j.a)(s);function s(){return Object(r.a)(this,s),i.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsx)("div",{className:"row section-head",children:Object(m.jsx)("div",{className:"ten columns",children:Object(m.jsx)("p",{className:"lead",children:"Feel free to contact me for any work or suggestions below"})})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("aside",{className:"eigth columns footer-widgets",children:Object(m.jsxs)("div",{className:"widget",children:[Object(m.jsxs)("h4",{children:["E-Mail:"," ",Object(m.jsx)("a",{href:"mailto:omershafique0@gmail.com",children:e.email})]}),Object(m.jsxs)("h4",{children:["LinkedIn:"," ",Object(m.jsx)("a",{href:"https://www.linkedin.com/in/omershafique0/",target:"_blank",children:"Omer Shafique"})]})]})})})]})}}]),s}(n.Component),f=function(e){Object(l.a)(s,e);var i=Object(j.a)(s);function s(){return Object(r.a)(this,s),i.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("i",{className:e.className})})})}))}),Object(m.jsxs)("ul",{className:"copyright",children:[Object(m.jsx)("li",{children:"\xa9 Copyright 2021 OmerShafique"}),Object(m.jsxs)("li",{children:["Design by"," ",Object(m.jsx)("a",{title:"Omer",href:"https://www.linkedin.com/in/omershafique0/",children:"OmerShafique"})]})]})]}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(n.Component),x={imagebaseurl:"https://omershafique0.github.io/",name:"Omer Shafique",role:"iOS Developer",linkedinId:"https://www.linkedin.com/in/omershafique0/",skypeid:"omershafique0",roleDescription:"",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/omershafique0/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/omershafique0",className:"fa fa-github"},{name:"skype",url:"https://join.skype.com/invite/kXBdxNNYHezI",className:"fa fa-skype"}],aboutme:"Experienced Software Engineer with a demonstrated history of working in the computer software industry. Skilled in Mobile Application Development, Web Application Development, Management, and Teamwork. Strong engineering professional with a Software Engineer focused in Computer Science from University Of the Punjab. ",address:"Pakistan",email:"omershafique0@gmail.com",website:"",education:[{UniversityName:"University of the Punjab",specialization:"BS. Computer Scienece",YearOfPassing:"2016 - 2020",Achievements:""},{UniversityName:"Punjab College of Information Technology",specialization:"Intermediate. Computer Science",YearOfPassing:"2016",Achievements:""}],work:[{CompanyName:"Emblem Technologies",specialization:"iOS Software Engineer",MonthOfLeaving:"Dec",YearOfLeaving:"2020 - Currently working",Achievements:""},{CompanyName:"TecSpine",specialization:"Associate iOS Software Engineer",MonthOfLeaving:"Sep 2020 -",YearOfLeaving:"Dec 2020",Achievements:""},{CompanyName:"Float Technologies",specialization:"MERN Stack Developer (Intern)",MonthOfLeaving:"June 2020 -",YearOfLeaving:"August 2020",Achievements:""},{CompanyName:"Mission Group",specialization:"Jr. Android Developer",MonthOfLeaving:"Jan 2018 -",YearOfLeaving:"Sep 2018",Achievements:""}],skillsDescription:"Find my Major Skills bellow and you can always find my more skills under 'Skills' section on my LinkedIn profile.",skills:[{skillname:"Swift"},{skillname:"ReactJS"},{skillname:"NodeJS"},{skillname:"Android"},{skillname:"Python"},{skillname:"Source-Control"}],portfolio:[{name:"Dr.Snore",description:"Medical Application for Snore Analysis.",imgurl:"images/portfolio/phone.jpg"},{name:"Love-At-First-Swipe",description:"Only Dating App with no screnshots.",imgurl:"images/portfolio/phone.jpg"},{name:"The FOR Project",description:"Raise money for nonprofits through everyday purchases. Everyone can give. For free",imgurl:"images/portfolio/phone.jpg"},{name:"Auto Photo Compress",description:"Auto Photo Compress is the world\u2019s first photo compress app that runs automatically on your pre-set days or times even when you are offline!",imgurl:"images/portfolio/phone.jpg"},{name:"Wifilink",description:"WifiLink is a brand-new app brings internet-users together, letting you share your Wi-Fi or hotspot with others through one simple QR code or a link.",imgurl:"images/portfolio/phone.jpg"},{name:"Chalo-Chalen",description:"Android based mobile app for events organizations",imgurl:"images/portfolio/phone.jpg"},{name:"E-Commerce Store",description:"FYP: E-commerce platform developed using MERN Stack.",imgurl:"images/portfolio/phone.jpg"},{name:"User Management",description:"User Management System APIs developed using NodeJS.",imgurl:"images/portfolio/project.jpg"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},v=function(e){Object(l.a)(s,e);var i=Object(j.a)(s);function s(){return Object(r.a)(this,s),i.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(h,{resumeData:x}),Object(m.jsx)(d,{resumeData:x}),Object(m.jsx)(b,{resumeData:x}),Object(m.jsx)(u,{resumeData:x}),Object(m.jsx)(p,{resumeData:x}),Object(m.jsx)(O,{resumeData:x}),Object(m.jsx)(f,{resumeData:x})]})}}]),s}(n.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var i=e.installing;i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(m.jsx)(v,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Portfolio","/service-worker.js");g?(!function(e){fetch(e).then((function(i){404===i.status||-1===i.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):w(e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.0ae1d31f.chunk.js.map