(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{35:function(t,e,n){t.exports=n(64)},62:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var c,a,o=n(0),r=n.n(o),u=n(9),i=n.n(u),s=n(6),l=n(13),b=n(14),f=n(16),m=n(15),d=n(17),h=n.n(d),C=n(1),p={addContactRequest:Object(C.b)("contact/addRequest"),addContactSuccess:Object(C.b)("contact/addSuccess"),addContactError:Object(C.b)("contact/addError"),fetchContactRequest:Object(C.b)("contact/fetchRequest"),fetchContactSuccess:Object(C.b)("contact/fetchSuccess"),fetchContactError:Object(C.b)("contact/fetchError"),removeContactRequest:Object(C.b)("contact/removeRequest"),removeContactSuccess:Object(C.b)("contact/removeSuccess"),removeContactError:Object(C.b)("contact/removeError"),inputChangeContact:Object(C.b)("contact/search")},O={addContact:function(t){var e=t.name,n=t.number;return function(t){t(p.addContactRequest()),h.a.post("http://localhost:2000/contacts",{name:e,number:n}).then((function(e){return t(p.addContactSuccess(e.data))})).catch((function(e){return t(p.addContactError(e))}))}},fetchContacts:function(){return function(t){t(p.fetchContactRequest()),h.a.get("http://localhost:2000/contacts").then((function(e){return t(p.fetchContactSuccess(e.data))})).catch((function(e){return t(p.fetchContactError(e))}))}},removeContacts:function(t){return function(e){e(p.removeContactRequest()),h.a.delete("http://localhost:2000/contacts/".concat(t)).then((function(){return e(p.removeContactSuccess(t))})).catch((function(t){return e(p.removeContactError(t))}))}}},j=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){t.setState({name:e.target.value})},t.handleChangeNumber=function(e){t.setState({number:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddTask(t.state),t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Name",r.a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChange}),"Number",r.a.createElement("input",{type:"text",value:this.state.number,onChange:this.handleChangeNumber})),r.a.createElement("button",{type:"submit"},"Add contact"))}}]),n}(o.Component),v={onAddTask:O.addContact},E=Object(s.b)(null,v)(j),g=n(66),S=n(65),y=(n(62),n(31)),k=n(8),R=function(t){return t.contacts.items},q=function(t){return t.contacts.filter},A={getLoading:function(t){return t.contacts.loading},getFilter:q,getVisibleContacts:Object(k.a)([R,q],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),getContactById:function(t,e){return R(t).find((function(t){return t.id===e}))}},w=Object(s.b)((function(t,e){var n=A.getContactById(t,e.id);return Object(y.a)({},n)}),(function(t,e){return{onRemoveTask:function(){return t(O.removeContacts(e.id))}}}))((function(t){var e=t.name,n=t.number,c=t.onRemoveTask;return r.a.createElement("li",null,r.a.createElement("p",null,e," ",n),r.a.createElement("button",{type:"button",onClick:c},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))})),N=Object(s.b)((function(t){return{contactsAll:A.getVisibleContacts(t)}}))((function(t){var e=t.contactsAll;return r.a.createElement(g.a,{component:"ul",className:"fade"},e.map((function(t){var e=t.id;return r.a.createElement(S.a,{key:e,timeout:250,classNames:"fade"},r.a.createElement(w,{id:e,key:e}))})))})),x={inputChangeContact:p.inputChangeContact},L=Object(s.b)((function(t){return{searchAll:A.getFilter(t)}}),x)((function(t){var e=t.searchAll,n=t.inputChangeContact;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:e,onChange:function(t){return n(t.target.value)}}))})),F=(n(63),function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.loadingContacts&&r.a.createElement("h1",null,"Loading contacts..."),r.a.createElement(S.a,{in:!0,appear:!0,classNames:"my",timeout:500,unmountOnExit:!0},r.a.createElement("h1",null,"Phonebook")),r.a.createElement(E,null),r.a.createElement("p",null,"Search"),r.a.createElement(L,null),r.a.createElement("p",null,"Contacts"),r.a.createElement(N,null))}}]),n}(o.Component)),T={onFetchContacts:O.fetchContacts},B=Object(s.b)((function(t){return{loadingContacts:A.getLoading(t)}}),T)(F),I=n(2),D=n(32),J=n(7),V=Object(C.c)([],(c={},Object(I.a)(c,p.fetchContactSuccess,(function(t,e){return e.payload})),Object(I.a)(c,p.addContactSuccess,(function(t,e){return[].concat(Object(D.a)(t),[e.payload])})),Object(I.a)(c,p.removeContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),c)),M=Object(C.c)("",Object(I.a)({},p.inputChangeContact,(function(t,e){return e.payload}))),P=Object(C.c)(!1,(a={},Object(I.a)(a,p.fetchContactRequest,(function(){return!0})),Object(I.a)(a,p.addContactRequest,(function(){return!0})),Object(I.a)(a,p.removehContactRequest,(function(){return!0})),Object(I.a)(a,p.addContactSuccess,(function(){return!1})),Object(I.a)(a,p.fetchContactSuccess,(function(){return!1})),Object(I.a)(a,p.removeContactSuccess,(function(){return!1})),Object(I.a)(a,p.addContactError,(function(){return!1})),Object(I.a)(a,p.fetchContactError,(function(){return!1})),Object(I.a)(a,p.removeContactError,(function(){return!1})),a)),z=Object(J.c)({items:V,filter:M,loading:P}),G=Object(C.a)({reducer:{contacts:z}});i.a.render(r.a.createElement(s.a,{store:G},r.a.createElement(B,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.f11118ba.chunk.js.map