"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[94],{94:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var a,r,s,i,o,c=t(7022),u=t(9743),l=t(2677),d=t(885),m=t(2791),h=t(9434),f=t(6916),x=function(e){return e.contacts.items},b=function(e){return e.contacts.isLoading},p=(0,f.P1)([x,function(e){return e.filter.filter}],(function(e,n){if(e)return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),j=t(5562),Z=t.n(j),g=t(3634),v=t(3360),y=t(5313),C=t(184),w=function(){var e=(0,m.useState)(""),n=(0,d.Z)(e,2),t=n[0],a=n[1],r=(0,m.useState)(""),s=(0,d.Z)(r,2),i=s[0],o=s[1],c=(0,h.I0)(),u=(0,h.v9)(x),l=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":a(r);break;case"number":o(r);break;default:return}},f=function(){a(""),o("")};return(0,C.jsxs)(y.Z,{onSubmit:function(e){if(e.preventDefault(),u.some((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return f(),Z().Notify.failure("".concat(t," is already in contacts"));Z().Notify.success("You have added ".concat(t," to contacts")),c((0,g.uK)({name:t,number:i})),f()},children:[(0,C.jsxs)(y.Z.Group,{className:"mb-3",controlId:"contactFormName",children:[(0,C.jsx)(y.Z.Label,{children:"Name"}),(0,C.jsx)(y.Z.Control,{onChange:l,value:t,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter contact name"}),(0,C.jsx)(y.Z.Text,{className:"text-muted",children:"We will save your contacts. Only you can see them."})]}),(0,C.jsxs)(y.Z.Group,{className:"mb-3",controlId:"contactFormPhone",children:[(0,C.jsx)(y.Z.Label,{children:"Number"}),(0,C.jsx)(y.Z.Control,{onChange:l,value:i,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Phone number"})]}),(0,C.jsx)(v.Z,{variant:"outline-primary",type:"submit",children:"Add contact"})]})},N=t(168),k=t(6444),A=t(4314),F=t(5546),L=(0,k.default)(A.Z.Item)(a||(a=(0,N.Z)(["\n  display: flex;\n  text-align: center;\n  border-radius: 7px;\n  margin-bottom: 5px;\n"]))),_=k.default.p(r||(r=(0,N.Z)(["\n  margin: 0;\n  margin-left: 10px;\n  font-size: 22px;\n"]))),z=k.default.span(s||(s=(0,N.Z)(["\n  margin-left: 50px;\n  font-weight: 700;\n"]))),I=(0,k.default)(v.Z)(i||(i=(0,N.Z)(["\n  margin-left: auto;\n"]))),T=(0,k.default)(F.ZP)(o||(o=(0,N.Z)(["\n  margin-left: 10px;\n"])));function P(e){var n=e.name,t=e.number,a=e.id,r=(0,h.I0)();return(0,C.jsxs)(L,{variant:"light",children:[(0,C.jsx)(T,{name:n,round:!0,size:30}),(0,C.jsxs)(_,{children:[n,": ",(0,C.jsx)(z,{children:t})]}),(0,C.jsx)(I,{variant:"danger",type:"button",onClick:function(){Z().Notify.failure("You have removed ".concat(n," from contacts")),r((0,g.GK)(a))},size:"sm",children:"Delete"})]})}var S=t(5243),D=function(){return(0,C.jsx)(S.g4,{height:"80",width:"80",radius:"9",color:"#111611",ariaLabel:"three-dots-loading",wrapperStyle:{margin:"auto"},visible:!0})};function E(){var e=(0,h.I0)(),n=(0,h.v9)(p),t=(0,h.v9)(b);return(0,m.useEffect)((function(){e((0,g.yF)())}),[e]),(0,C.jsxs)(C.Fragment,{children:[t&&(0,C.jsx)(D,{}),!t&&(0,C.jsx)(A.Z,{as:"ol",numbered:!0,children:n.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,C.jsx)(P,{name:t,number:a,id:n},n)}))})]})}var G=t(1634),K=t(3161);function Y(){var e=(0,h.I0)();return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(K.Z,{className:"mb-3",children:[(0,C.jsx)(K.Z.Text,{id:"basic-addon3",children:"Find contacts by name"}),(0,C.jsx)(y.Z.Control,{id:"basic-url","aria-describedby":"basic-addon3",type:"text",name:"filter",onChange:function(n){var t=n.currentTarget.value;e((0,G.K)(t))}})]})})}var q=function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(c.Z,{children:(0,C.jsxs)(u.Z,{children:[(0,C.jsxs)(l.Z,{children:[(0,C.jsx)("h1",{children:"ADD NEW CONTACTS"}),(0,C.jsx)(w,{})]}),(0,C.jsxs)(l.Z,{children:[(0,C.jsx)("h2",{children:"Your contacts"}),(0,C.jsx)(Y,{}),(0,C.jsx)(E,{})]})]})})})}}}]);
//# sourceMappingURL=94.64294141.chunk.js.map