(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[597],{4579:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rsvp-google",function(){return t(9645)}])},425:function(e,a,t){"use strict";t.d(a,{Z:function(){return p},y:function(){return j}});var r=t(5893),n=t(9008),s=t.n(n),i=t(2717),o=t.n(i),l=t(1664),c=t.n(l),d=t(1163),h=t(7294),m=t(4171),u=t.n(m),_=()=>{let e=(0,d.useRouter)(),a=e.pathname,[t,n]=(0,h.useState)(!1),s=()=>{n(!t)},i=e=>a===e?u().active:"";return(0,r.jsx)("div",{className:u().sticky,children:(0,r.jsx)("div",{className:u().navbar,children:(0,r.jsxs)("ul",{className:u().menu,children:[(0,r.jsx)("li",{className:u().link,children:(0,r.jsx)(c(),{className:i("/"),href:"/",children:"Home"})}),(0,r.jsxs)("li",{onMouseEnter:s,onMouseLeave:s,children:[(0,r.jsx)("span",{className:"".concat(u().link," ").concat(t?u().active:""),children:"Dropdown"}),t&&(0,r.jsxs)("ul",{className:"".concat(u().menu," ").concat(u().dropdown),children:[(0,r.jsx)("li",{className:u().link,children:(0,r.jsx)(c(),{className:i("/rsvp"),href:"/rsvp",children:"RSVP"})}),(0,r.jsx)("li",{className:u().link,children:(0,r.jsx)(c(),{className:i("/rsvp"),href:"/rsvp",children:"RSVP"})}),(0,r.jsx)("li",{className:u().link,children:(0,r.jsx)(c(),{className:i("/rsvp"),href:"/rsvp",children:"RSVP"})}),(0,r.jsx)("li",{className:u().link,children:(0,r.jsx)(c(),{className:i("/rsvp"),href:"/rsvp",children:"RSVP"})})]})]})]})})})};t(5675);var x=t(5779),f=t.n(x),v=()=>(0,r.jsxs)("div",{className:f().footer,children:[(0,r.jsxs)("div",{className:f().footerContainer,children:[(0,r.jsx)("img",{src:"/images/leavesleft.png",alt:"Image Left",className:f().footerImageLeft}),(0,r.jsx)("img",{src:"/images/leavesright.png",alt:"Image Right",className:f().footerImageRight})]}),(0,r.jsxs)("p",{className:f().footerText,class:"py-5",children:["Crafted by Scott with lots of \xa0",(0,r.jsx)("span",{className:"fa fa-heart fa-beat ".concat(f().redHeart)}),"\xa0 for Maddy"]})]});let j="Wedding";function p(e){let{children:a}=e;return(0,r.jsxs)("div",{className:o().container,children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"og:title",content:j}),(0,r.jsx)("meta",{name:"twitter:card",x:"summary_large_image"})]}),(0,r.jsx)(g,{}),(0,r.jsx)(_,{className:o().stick}),(0,r.jsx)("main",{children:a}),(0,r.jsx)(v,{})]})}function g(){return(0,r.jsx)("header",{className:o().header,children:(0,r.jsx)("div",{className:o().headerBox,children:(0,r.jsx)("div",{className:o().titleBox,children:(0,r.jsx)("h1",{className:o().headerText,children:"Madelyn & Scott"})})})})}},9645:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return l}});var r=t(5893),n=t(7294),s=t(9008),i=t.n(s);t(8291);var o=t(425);function l(){let[e,a]=(0,n.useState)({email:"",name:"",extras:0,invite_code:""}),[t,s]=(0,n.useState)(""),l=t=>{a({...e,[t.target.name]:t.target.value})},c=async a=>{a.preventDefault(),s("Just a sec! We are saving your details."),fetch("/api/submitForm",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw Error("HTTP error ".concat(e.status));return e.json()}).then(e=>{console.log(e),"error"===e.result?s(e.message):s("Successfully submitted!")}).catch(e=>{console.error("Error:",e),s("Sorry! There is some issue with the server.")})};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.Z,{home:!0,children:[(0,r.jsx)(i(),{children:(0,r.jsxs)("title",{children:[o.y," - RSVP"]})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"RSVP"}),(0,r.jsxs)("form",{id:"rsvp-form",onSubmit:c,children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"email",name:"email",placeholder:"Your email",value:e.email,onChange:l,required:!0})}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"text",name:"name",placeholder:"Your name",value:e.name,onChange:l,required:!0})}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"number",name:"extras",placeholder:"Husband/Wife or kids",min:"0",max:"4",value:e.extras,onChange:l,required:!0})}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"number",name:"invite_code",placeholder:"Invite code",min:"0",value:e.invite_code,onChange:l,required:!0})}),(0,r.jsx)("div",{children:t&&(0,r.jsx)("p",{children:t})}),(0,r.jsx)("button",{type:"submit",children:"Yes, that's me!"})]})]})]})})}},5779:function(e){e.exports={footer:"footer_footer__mqdak",footerText:"footer_footerText__A2Shi",redHeart:"footer_redHeart__tDT33",footerContainer:"footer_footerContainer__R7ZO8",footerImageLeft:"footer_footerImageLeft__pM1c2",footerImageRight:"footer_footerImageRight__5mosH"}},2717:function(e){e.exports={header:"layout_header__SFlEE",headerBox:"layout_headerBox__e2QEL",titleBox:"layout_titleBox__OypFT",headerText:"layout_headerText__oMTLN",andText:"layout_andText__yAUvn",navWrapper:"layout_navWrapper__gPtv5",footerContainer:"layout_footerContainer__GD5Tn",footerImage:"layout_footerImage__wSaUB",stick:"layout_stick__fPWtH"}},4171:function(e){e.exports={navbar:"navigation_navbar__B_ICo",menu:"navigation_menu__OytgT",link:"navigation_link__IVJqm",sticky:"navigation_sticky__iEHy1",active:"navigation_active__R6mNT",dropdown:"navigation_dropdown__MfINC"}}},function(e){e.O(0,[196,675,774,888,179],function(){return e(e.s=4579)}),_N_E=e.O()}]);