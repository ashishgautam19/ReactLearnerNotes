(this.webpackJsonpsaktimaan=this.webpackJsonpsaktimaan||[]).push([[0],{22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),o=a(15),n=a.n(o),l=a(7),i=(a(22),a(0));function r(){var e=Object(c.useState)({color:"white",background:"black",fontFamily:"Abril Fatface"}),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)("Enable Light Mode"),n=Object(l.a)(o,2),r=n[0],d=n[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container my-1",style:a,children:[Object(i.jsx)("h3",{children:"About Us"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",style:a,children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",style:a,children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",style:a,children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]})]}),Object(i.jsxs)("button",{type:"button",onClick:function(){"black"===a.color?(s({color:"white",backgroundColor:"black",border:"1px solid white"}),d("Enable Light Mode")):(s({color:"black",backgroundColor:"white",border:"1px solid red"}),d("Enable Dark Mode"))},className:"btn btn-success my-1",children:[" ",r]})]})}var d=a(10);function h(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsxs)("a",{className:"navbar-brand",href:"/",children:[Object(i.jsx)("strong",{children:e.title}),Object(i.jsx)("span",{class:"badge bg-secondary",children:e.secondary})]}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home "})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link",to:"/about",children:"About us"})})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enabled the Mode"})]})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],o=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:e.heading}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("textarea",{className:"form-control",value:s,style:{backgroungColor:"light"===e.mode?"dark":"light"},onChange:function(e){o(e.target.value)},id:"myBox",rows:"8"}),Object(i.jsx)("button",{className:"btn btn-primary my-2",onClick:function(){var t=s.toUpperCase();o(t),e.showAlert("Converted into UpperCase","success")},children:"Convert to Uppercase"}),Object(i.jsx)("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){var t=s.toLowerCase();o(t),e.showAlert("Converted into LowerCase","success")},children:"Convert to Lowercase"}),Object(i.jsx)("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){var t=s.split(/[ ]+/);o(t.join(" ")),e.showAlert("It's removed the ExtraSpace text","success")},children:"Remove Extra Space"}),Object(i.jsx)("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){o(" "),e.showAlert("Converted into Clear text","success")},children:"Clear the text"}),Object(i.jsx)("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy Text"})]})]}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h3",{children:"Your Text Summary"}),Object(i.jsxs)("p",{children:["Words are ",s.split(" ").length," and Character are ",s.length]}),Object(i.jsx)("h3",{children:"Preview"}),Object(i.jsx)("p",{children:s})]})]})}h.defaultProps={title:"set the title is required"};var j=function(e){return e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})},m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(null),n=Object(l.a)(o,2),u=n[0],p=n[1],x=function(e,t){p({msg:e,type:t}),setTimeout((function(){p(null)}),1500)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(d.a,{children:[Object(i.jsx)(h,{title:"Shaklaaka",mode:a,toggleMode:function(){"dark"===a?(s("light"),document.body.style.backgroundColor="#e6ffff",x("Light mode is on","success"),document.title="Shaklaka-Light mode",setInterval((function(){document.title="Desi-boys"}),2e3),setInterval((function(){document.title="Desi-Girls"}),1500)):(s("dark"),document.body.style.backgroundColor="#00264d",x("Dark mode is on","success"),document.title="Shaklaka-Dark mode")},secondary:"Boom Boom"}),Object(i.jsx)(j,{alert:u}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsxs)(m.c,{children:[Object(i.jsx)(m.a,{exact:!0,path:"/about",children:Object(i.jsx)(r,{})}),Object(i.jsx)(m.a,{exact:!0,path:"/",children:Object(i.jsx)(b,{showAlert:x,heading:"Enter the Txt ",mode:a})})]})})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),o(e),n(e)}))};n.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),p()}},[[29,1,2]]]);
//# sourceMappingURL=main.f86e0ccf.chunk.js.map