(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05b17cdc"],{"7cdc":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("PageHeader",{attrs:{title:t.title,items:t.items}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title mb-4"},[t._v("Create New Task")]),a("form",{staticClass:"outer-repeater"},[a("div",{staticClass:"outer",attrs:{"data-repeater-list":"outer-group"}},[a("div",{staticClass:"outer",attrs:{"data-repeater-item":""}},[a("div",{staticClass:"form-group row mb-4"},[a("label",{staticClass:"col-form-label col-lg-2",attrs:{for:"taskname"}},[t._v("Task Name")]),a("div",{staticClass:"col-lg-10"},[a("input",{staticClass:"form-control",attrs:{id:"taskname",name:"taskname",type:"text",placeholder:"Enter Task Name..."}})])]),a("div",{staticClass:"form-group row mb-4"},[a("label",{staticClass:"col-form-label col-lg-2"},[t._v("Task Description")]),a("div",{staticClass:"col-lg-10"},[a("ckeditor",{attrs:{editor:t.editor}})],1)]),a("div",{staticClass:"form-group row mb-4"},[a("label",{staticClass:"col-form-label col-lg-2"},[t._v("Task Date")]),a("div",{staticClass:"col-lg-10"},[a("date-picker",{attrs:{range:"","append-to-body":"",lang:"en",confirm:""},model:{value:t.daterange,callback:function(e){t.daterange=e},expression:"daterange"}})],1)]),a("div",{staticClass:"inner-repeater mb-4"},[a("div",{staticClass:"inner form-group mb-0 row"},[a("label",{staticClass:"col-form-label col-lg-2"},[t._v("Add Team Member")]),t._l(t.teamMember,(function(e,s){return a("div",{key:e.id,staticClass:"inner col-lg-10 ml-md-auto"},[a("div",{staticClass:"mb-3 row align-items-center"},[a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"member.name"}],staticClass:"inner form-control",attrs:{type:"text",placeholder:"Enter Name..."},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}})]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"mt-4 mt-md-0"},[a("input",{staticClass:"form-control-file",attrs:{type:"file"}})])]),a("div",{staticClass:"col-md-2"},[a("input",{staticClass:"btn btn-primary btn-block inner",attrs:{type:"button",value:"Delete"},on:{click:function(e){return t.deleteMember(s)}}})])])])}))],2),a("div",{staticClass:"row justify-content-end"},[a("div",{staticClass:"col-lg-10"},[a("input",{staticClass:"btn btn-success inner",attrs:{type:"button",value:"Add Number"},on:{click:t.addMember}})])])]),a("div",{staticClass:"form-group row mb-4"},[a("label",{staticClass:"col-form-label col-lg-2",attrs:{for:"taskbudget"}},[t._v("Budget")]),a("div",{staticClass:"col-lg-10"},[a("input",{staticClass:"form-control",attrs:{id:"taskbudget",name:"taskbudget",type:"text",placeholder:"Enter Task Budget..."}})])])])])]),a("div",{staticClass:"row justify-content-end"},[a("div",{staticClass:"col-lg-10"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Create Task")])])])])])])])],1)},r=[],l=(a("a4d3"),a("e01a"),a("a434"),a("ec45")),i=a("3730"),o=a.n(i),c=a("fb3d"),n=a.n(c),d=a("444f"),m=a("2579"),u=a("c2a4"),b={page:{title:"Create Task",meta:[{name:"description",content:u.description}]},components:{DatePicker:l["a"],ckeditor:o.a.component,Layout:d["a"],PageHeader:m["a"]},data:function(){return{title:"Create Task",items:[{text:"Tasks",href:"/"},{text:"Create Task",active:!0}],daterange:"",editor:n.a,teamMember:[{id:1}]}},methods:{addMember:function(){this.teamMember.push({name:""})},deleteMember:function(t){this.teamMember.splice(t,1)}}},p=b,f=a("2877"),v=Object(f["a"])(p,s,r,!1,null,null,null);e["default"]=v.exports},a434:function(t,e,a){"use strict";var s=a("23e7"),r=a("23cb"),l=a("a691"),i=a("50c4"),o=a("7b0b"),c=a("65f0"),n=a("8418"),d=a("1dde"),m=Math.max,u=Math.min,b=9007199254740991,p="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!d("splice")},{splice:function(t,e){var a,s,d,f,v,C,g=o(this),k=i(g.length),h=r(t,k),w=arguments.length;if(0===w?a=s=0:1===w?(a=0,s=k-h):(a=w-2,s=u(m(l(e),0),k-h)),k+a-s>b)throw TypeError(p);for(d=c(g,s),f=0;f<s;f++)v=h+f,v in g&&n(d,f,g[v]);if(d.length=s,a<s){for(f=h;f<k-s;f++)v=f+s,C=f+a,v in g?g[C]=g[v]:delete g[C];for(f=k;f>k-s+a;f--)delete g[f-1]}else if(a>s)for(f=k-s;f>h;f--)v=f+s-1,C=f+a-1,v in g?g[C]=g[v]:delete g[C];for(f=0;f<a;f++)g[f+h]=arguments[f+2];return g.length=k-s+a,d}})}}]);
//# sourceMappingURL=chunk-05b17cdc.1f3b0010.js.map