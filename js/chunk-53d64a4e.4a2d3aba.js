(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53d64a4e"],{"29b0":function(t,r,e){"use strict";var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticClass:"home-btn d-none d-sm-block"},[e("router-link",{staticClass:"text-dark",attrs:{tag:"a",to:"/"}},[e("i",{staticClass:"fas fa-home h2"})])],1),e("div",{staticClass:"account-pages my-5 pt-5"},[e("div",{staticClass:"container"},[t._t("default")],2)])])},s=[],o={components:{}},i=o,n=e("2877"),c=Object(n["a"])(i,a,s,!1,null,null,null);r["a"]=c.exports},"4d77":function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));e("a4d3"),e("4de4"),e("e439"),e("dbb4"),e("b64b"),e("159b");var a=e("ade3"),s=e("2f62");function o(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?o(Object(e),!0).forEach((function(r){Object(a["a"])(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}i({},Object(s["d"])("auth",{currentUser:function(t){return t.currentUser}}),{},Object(s["c"])("auth",["loggedIn"]));var n=Object(s["b"])("auth",["logIn","logOut","register","resetPassword"])},7006:function(t,r,e){t.exports=e.p+"img/profile-img.ba4e037e.png"},"7ce4":function(t,r,e){"use strict";e.r(r);var a=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("Layout",[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8 col-lg-6 col-xl-5"},[a("div",{staticClass:"card overflow-hidden"},[a("div",{staticClass:"bg-soft-primary"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-7"},[a("div",{staticClass:"text-primary p-4"},[a("h5",{staticClass:"text-primary"},[t._v("Welcome Back !")]),a("p",[t._v("Sign in to continue to Skote.")])])]),a("div",{staticClass:"col-5 align-self-end"},[a("img",{staticClass:"img-fluid",attrs:{src:e("7006"),alt:""}})])])]),a("div",{staticClass:"card-body pt-0"},[a("div",[a("router-link",{attrs:{tag:"a",to:"/"}},[a("div",{staticClass:"avatar-md profile-user-wid mb-4"},[a("span",{staticClass:"avatar-title rounded-circle bg-light"},[a("img",{attrs:{src:e("e347"),alt:"",height:"34"}})])])])],1),a("b-alert",{staticClass:"mt-3",attrs:{variant:"danger",dismissible:""},model:{value:t.isAuthError,callback:function(r){t.isAuthError=r},expression:"isAuthError"}},[t._v(t._s(t.authError))]),a("b-form",{staticClass:"p-2",on:{submit:function(r){return r.preventDefault(),t.tryToLogIn(r)}}},[a("b-form-group",{attrs:{id:"input-group-1",label:"Email","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Enter email"},model:{value:t.email,callback:function(r){t.email=r},expression:"email"}})],1),a("b-form-group",{attrs:{id:"input-group-2",label:"Password","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",type:"password",placeholder:"Enter password"},model:{value:t.password,callback:function(r){t.password=r},expression:"password"}})],1),a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{id:"customControlInline",type:"checkbox"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"customControlInline"}},[t._v("Remember me")])]),a("div",{staticClass:"mt-3"},[a("b-button",{staticClass:"btn-block",attrs:{type:"submit",variant:"primary"}},[t._v("Log In")])],1),a("div",{staticClass:"mt-4 text-center"},[a("router-link",{staticClass:"text-muted",attrs:{tag:"a",to:"/forgot-password"}},[a("i",{staticClass:"mdi mdi-lock mr-1"}),t._v(" Forgot your password? ")])],1)],1)],1)]),a("div",{staticClass:"mt-5 text-center"},[a("p",[t._v(" Don't have an account ? "),a("router-link",{staticClass:"font-weight-medium text-primary",attrs:{tag:"a",to:"/register"}},[t._v("Signup now")])],1),a("p",[t._v(" © "+t._s((new Date).getFullYear())+" Skote. Crafted with "),a("i",{staticClass:"mdi mdi-heart text-danger"}),t._v(" by Themesbrand ")])])])])])},s=[],o=(e("a4d3"),e("e01a"),e("4de4"),e("e439"),e("dbb4"),e("b64b"),e("159b"),e("ade3")),i=e("29b0"),n=e("4d77"),c=e("c2a4");function l(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,a)}return e}function u(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?l(Object(e),!0).forEach((function(r){Object(o["a"])(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var p={page:{title:"Login",meta:[{name:"description",content:c.description}]},components:{Layout:i["a"]},data:function(){return{email:"",password:"",authError:null,tryingToLogIn:!1,isAuthError:!1}},methods:u({},n["a"],{tryToLogIn:function(){var t=this;return this.tryingToLogIn=!0,this.authError=null,this.logIn({email:this.email,password:this.password}).then((function(r){t.tryingToLogIn=!1,t.isAuthError=!1,t.$router.push(t.$route.query.redirectFrom||{name:"home"})})).catch((function(r){t.tryingToLogIn=!1,t.authError=r||"",t.isAuthError=!0}))}})},d=p,b=e("2877"),m=Object(b["a"])(d,a,s,!1,null,null,null);r["default"]=m.exports},e347:function(t,r,e){t.exports=e.p+"img/logo.4dbbacd2.svg"}}]);
//# sourceMappingURL=chunk-53d64a4e.4a2d3aba.js.map