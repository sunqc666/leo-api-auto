webpackJsonp([17],{"5CZV":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("mvHQ"),r=o.n(a),l=o("pFYg"),s=o.n(l),n=o("T9gM"),i=o("yNht"),c={name:"EditTestCase",data:function(){var e=this;return{activeNames:["1","2","3","4","5","6"],MethodOptions:[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"DELETE",value:"DELETE"},{label:"OPTIONS",value:"OPTIONS"},{label:"PATCH",value:"PATCH"},{label:"HEAD",value:"HEAD"}],ProtocolOptions:[{value:"HTTP",label:"HTTP"},{value:"HTTPS",label:"HTTPS"}],DBTypeOptions:[{value:"MongoDB",label:"MongoDB"},{value:"MySQL",label:"MySQL"}],MongoCRUDOptions:[{value:"insert_one",label:"Insert One"},{value:"update_one",label:"Update One"},{value:"update_many",label:"Update Many"}],dbConfigs:[{_id:"",name:""}],HeaderOptions:[{value:"Accept",label:"Accept"},{value:"Accept-Charset",label:"Accept-Charset"},{value:"Accept-Encoding",label:"Accept-Encoding"},{value:"Accept-Language",label:"Accept-Language"},{value:"Accept-Ranges",label:"Accept-Ranges"},{value:"Authorization",label:"Authorization"},{value:"Cache-Control",label:"Cache-Control"},{value:"Connection",label:"Connection"},{value:"Cookie",label:"Cookie"},{value:"Content-Length",label:"Content-Length"},{value:"Content-Type",label:"Content-Type"},{value:"Content-MD5",label:"Content-MD5"},{value:"Date",label:"Date"},{value:"Expect",label:"Expect"},{value:"From",label:"From"},{value:"Host",label:"Host"},{value:"If-Match",label:"If-Match"},{value:"If-Modified-Since",label:"If-Modified-Since"},{value:"If-None-Match",label:"If-None-Match"},{value:"If-Range",label:"If-Range"},{value:"If-Unmodified-Since",label:"If-Unmodified-Since"},{value:"Max-Forwards",label:"Max-Forwards"},{value:"Origin",label:"Origin"},{value:"Pragma",label:"Pragma"},{value:"Proxy-Authorization",label:"Proxy-Authorization"},{value:"Range",label:"Range"},{value:"Referer",label:"Referer"},{value:"TE",label:"TE"},{value:"Upgrade",label:"Upgrade"},{value:"User-Agent",label:"User-Agent"},{value:"Via",label:"Via"},{value:"Warning",label:"Warning"}],ResponseCodeOptions:[{value:"200",label:"200"},{value:"302",label:"302"},{value:"400",label:"400"},{value:"401",label:"401"},{value:"403",label:"403"},{value:"404",label:"404"},{value:"500",label:"500"},{value:"502",label:"502"},{value:"504",label:"504"}],operatorOptions:[{value:"+",label:"加上"},{value:"-",label:"减去"},{value:"*",label:"乘以"},{value:"/",label:"除以"}],judgeCharacterOptions:[{value:"<",label:"小于"},{value:"<=",label:"小于等于"},{value:">",label:"大于"},{value:">=",label:"大于等于"},{value:"==",label:"等于"}],showRequestBody:!0,radio:"raw",radioType:"",parameterType:"raw",form:{name:"",service:"",requestMethod:"GET",requestProtocol:"HTTP",route:"",domain:"",description:"",isClearCookie:!1,dataInitializes:[{dbConfigId:"",dbType:"",mongoCrud:"",collection:"",query:"",set:"",sql:""}],headers:[{name:"",value:""}],parameterType:"",parameterRaw:"",isJsonArray:!1,parameterForm:[{name:"",value:""},{name:"",value:""}],setGlobalVars:[{name:"",query:[]}],checkResponse:"noCheck",checkResponseCode:"",checkResponseBody:[{regex:"",query:[]}],checkResponseNumber:[{expressions:{firstArg:"",operator:"",secondArg:"",judgeCharacter:"",expectResult:""}}]},formRules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:100,message:"长度在 1 到 100 个字符",trigger:"blur"}],requestProtocol:[{required:!0,message:"请选择类型",trigger:"blur"}],requestMethod:[{required:!0,message:"请选择请求方法",trigger:"blur"}],route:[{required:!0,message:"请输入接口路由",trigger:"blur"},{validator:function(t,o,a){""!==o&&null!==o?0==o.indexOf("/")?a():(a(new Error("请输入路由(如: /chat)")),e.$message.warning({message:"路由格式不正确!",center:!0})):a()},trigger:"blur"}],service:[{required:!1,message:"请输入服务名",trigger:"blur"}],parameterRaw:[{required:!1,message:"请输入名称",trigger:"blur"},{validator:function(t,o,a){if(""!==o&&null!==o){o=o.replace(/'/g,'"');try{var r=JSON.parse(o);"object"==(void 0===r?"undefined":s()(r))&&r?a():(a(new Error("参数格式不正确!")),e.$message.warning({message:"参数格式不正确!",center:!0}))}catch(t){console.log(o,t),a(new Error("参数格式不正确!")),e.$message.warning({message:"参数格式不正确!",center:!0})}}else a()},trigger:"blur"}],checkResponseBody:[{required:!1,message:"请输入名称",trigger:"blur"}]},showResponseCodeCheck:!1,showResponseBodyCheck:!1,showResponseNumCheck:!1}},methods:{checkJsonFormat:function(e,t){if(""!==e&&null!==e)try{var o=JSON.parse(e);return!("object"!=(void 0===o?"undefined":s()(o))||!o)||(this.$message.warning({message:t,center:!0}),!1)}catch(o){return console.log(e,o),this.$message.warning({message:t,center:!0}),!1}return!0},getDBConfigList:function(){var e=this,t={projectId:this.$route.params.project_id};Object(i.c)(this.$route.params.project_id,t,{}).then(function(t){var o=t.status,a=t.data;"ok"===o?e.dbConfigs=a.rows:e.$message.error({message:a,center:!0})}).catch(function(t){e.$message.error({message:"DB配置列表获取失败，请稍后刷新重试哦~",center:!0})})},checkRequestMethod:function(){var e=this.form.requestMethod;this.showRequestBody="GET"!==e&&"DELETE"!==e},handleChange:function(e){},addDataInit:function(){this.form.dataInitializes.push({dbConfigId:"",dbType:"",mongoCrud:"",collection:"",query:"",set:"",sql:""})},delDataInit:function(e){this.form.dataInitializes.splice(e,1),0===this.form.dataInitializes.length&&this.form.dataInitializes.push({dbConfigId:"",dbType:"",mongoCrud:"",collection:"",query:"",set:"",sql:""})},addHeader:function(){this.form.headers.push({name:"",value:""})},delHeader:function(e){this.form.headers.splice(e,1),0===this.form.headers.length&&this.form.headers.push({name:"",value:""})},addSuffix:function(e){return e.constructor===Array&&e.length>0&&e.forEach(function(t,o){var a=t.search(/\([0-9]+\)/),r="("+(o+1).toString()+")";e[o]=-1===a?t+r:t.substring(0,a)+r}),e},addGlobalVars:function(){this.form.setGlobalVars.push({name:"",query:[]})},delGlobalVars:function(e){this.form.setGlobalVars.splice(e,1),0===this.form.setGlobalVars.length&&this.form.setGlobalVars.push({name:"",query:[]})},addCheckResBody:function(){this.form.checkResponseBody.push({regex:"",query:[]})},delCheckResBody:function(e){this.form.checkResponseBody.splice(e,1),0===this.form.checkResponseBody.length&&this.form.checkResponseBody.push({regex:"",query:[]})},addCheckResNum:function(){this.form.checkResponseNumber.push({expressions:{firstArg:"",operator:"",secondArg:"",judgeCharacter:"",expectResult:""}})},delCheckResNum:function(e){this.form.checkResponseNumber.splice(e,1),0===this.form.checkResponseNumber.length&&this.form.checkResponseNumber.push({expressions:{firstArg:"",operator:"",secondArg:"",judgeCharacter:"",expectResult:""}})},getCaseDetailInfo:function(){var e=this,t=this;Object(n.d)(t.$route.params.project_id,t.$route.params.test_suite_id,t.$route.params.test_case_id,{}).then(function(o){var a=o.status,l=o.data;if("ok"===a){t.form.name=l.name,t.form.service=l.service,t.form.requestMethod=l.requestMethod,t.form.requestProtocol=l.requestProtocol,t.form.route=l.route,l.dataInitializes&&l.dataInitializes.length>0&&(l.dataInitializes.forEach(function(e){e.set=r()(e.set,void 0,4),e.query=r()(e.query,void 0,4)}),t.form.dataInitializes=l.dataInitializes),t.form.headers=l.headers,t.form.domain=l.domain,t.form.isClearCookie=l.isClearCookie,t.form.description=l.description,t.form.isJsonArray=l.isJsonArray,l.setGlobalVars.forEach(function(t){t.query=e.addSuffix(t.query)}),t.form.setGlobalVars=l.setGlobalVars;try{t.form.parameterRaw=r()(l.requestBody,void 0,4),t.form.parameterRaw=t.form.parameterRaw.replace(/'/g,'"').replace(/None/g,"null").replace(/True/g,"true").replace(/False/g,"false"),"{}"===t.form.parameterRaw&&(t.form.parameterRaw="")}catch(e){t.$message.error({message:"获取请求参数出现异常！"+e,center:!0})}t.form.checkResponseCode=l.checkResponseCode,null!=l.checkResponseCode&&(t.form.checkResponse="checkResponseCode"),null===l.checkResponseBody||void 0===l.checkResponseBody?t.form.checkResponseBody=[{regex:"",query:[]}]:(t.form.checkResponse="checkResponseBody",l.checkResponseBody.forEach(function(t){t.query=e.addSuffix(t.query)}),t.form.checkResponseBody=l.checkResponseBody),null===l.checkResponseNumber||void 0===l.checkResponseNumber?t.form.checkResponseNumber=[{expressions:{firstArg:"",operator:"",secondArg:"",judgeCharacter:"",expectResult:""}}]:t.form.checkResponseNumber=l.checkResponseNumber}else t.$message.error({message:l,center:!0})}).catch(function(e){t.$message.error({message:"接口用例详情获取失败，请稍后刷新重试哦~",center:!0}),t.listLoading=!1})},updateCaseInfo:function(){var e=this;this.$refs.form.validate(function(t){if(t){var o=e,a=!0;e.$confirm("确认提交吗？","提示",{}).then(function(){if(o.form.domain||e.form.service){o.form.setGlobalVars.forEach(function(e){e.query.forEach(function(t,o){e.query[o]=t.replace(/\([0-9]+\)/,"")})}),o.form.checkResponseBody.forEach(function(e){e.query.forEach(function(t,o){e.query[o]=t.replace(/\([0-9]+\)/,"")})});var t={name:o.form.name.trim(),service:o.form.service,requestMethod:o.form.requestMethod,requestProtocol:o.form.requestProtocol,route:o.form.route,domain:o.form.domain,description:o.form.description.trim(),headers:o.form.headers,isClearCookie:o.form.isClearCookie,isJsonArray:o.form.isJsonArray,setGlobalVars:o.form.setGlobalVars,checkResponseBody:o.form.checkResponseBody,checkResponseNumber:o.form.checkResponseNumber,requestBody:o.form.parameterRaw,lastUpdateUser:o.$store.getters.email||"anonymous"};if(o.form.dataInitializes&&o.form.dataInitializes.length>0&&(o.form.dataInitializes.forEach(function(t,o){t.dbType&&("MongoDB"==t.dbType?t.mongoCrud&&t.collection&&t.set&&(e.checkJsonFormat(t.set,"MongoDB 参数:set 格式不正确")||(a=!1),t.query&&!e.checkJsonFormat(t.query,"MongoDB 参数:query 格式不正确")&&(a=!1),t.set=JSON.parse(t.set),t.query=JSON.parse(t.query)):t.query||(e.$message.warning({message:"SQL不正确!",center:!0}),a=!1))}),t.dataInitializes=o.form.dataInitializes),o.form.checkResponseCode?t.checkResponseCode=o.form.checkResponseCode:t.checkResponseCode=null,a){Object(n.f)(o.$route.params.project_id,o.$route.params.test_suite_id,o.$route.params.test_case_id,t,{}).then(function(e){var t=e.status,a=e.data;"ok"===t?(o.$router.push({name:"TestCaseList",params:{project_id:o.$route.params.project_id,test_suite_id:o.$route.params.test_suite_id}}),o.$message({message:"修改成功",center:!0,type:"success"})):o.$message.error({message:a,center:!0})})}}else o.$message.error({message:"由于没有输入domain，请输入service",center:!0})})}})}},watch:{form:{handler:function(e,t){"noCheck"===e.checkResponse?(this.showResponseCodeCheck=!1,this.showResponseBodyCheck=!1,this.showResponseNumCheck=!1):"checkResponseCode"===e.checkResponse?(this.showResponseCodeCheck=!0,this.showResponseBodyCheck=!1,this.showResponseNumCheck=!1):"checkResponseBody"===e.checkResponse?(this.showResponseCodeCheck=!1,this.showResponseBodyCheck=!0,this.showResponseNumCheck=!1):"checkResponseNumber"===e.checkResponse&&(this.showResponseCodeCheck=!1,this.showResponseBodyCheck=!1,this.showResponseNumCheck=!0)},deep:!0}},created:function(){this.getDBConfigList(),this.getCaseDetailInfo()}},u={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("el-col",{attrs:{span:24}},[o("strong",{staticClass:"title"},[e._v(e._s(e.$route.meta.title))])]),e._v(" "),o("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[o("router-link",{staticStyle:{"text-decoration":"none",color:"aliceblue"},attrs:{to:{name:"TestCaseList",params:{project_id:this.$route.params.project_id,test_case_id:this.$route.params.test_case_id}}}},[o("el-button",{staticClass:"return-list"},[o("i",{staticClass:"el-icon-d-arrow-left",staticStyle:{"margin-right":"5px"},attrs:{"return-list":""}}),e._v("返回\n      ")])],1),e._v(" "),o("div",{staticStyle:{float:"right","margin-right":"80px"}},[o("router-link",{staticStyle:{"text-decoration":"none",color:"aliceblue"},attrs:{to:{name:"TestCaseList",params:{project_id:this.$route.params.project_id,test_case_id:this.$route.params.test_case_id}}}},[o("el-button",{staticClass:"return-list"},[o("i",{staticClass:"el-icon-close",staticStyle:{"margin-right":"5px"},attrs:{"return-list":""}}),e._v("取消\n        ")])],1),e._v(" "),o("el-button",{staticClass:"return-list",attrs:{type:"primary"},nativeOn:{click:function(t){return e.updateCaseInfo(t)}}},[o("i",{staticClass:"el-icon-check",staticStyle:{"margin-right":"5px"},attrs:{"return-list":""}}),e._v("保存\n      ")])],1)],1),e._v(" "),o("el-col",{attrs:{span:24}},[o("el-form",{ref:"form",attrs:{model:e.form,rules:e.formRules}},[o("div",{staticStyle:{border:"1px solid #e6e6e6","margin-bottom":"10px",padding:"15px"}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:18}},[o("el-form-item",{attrs:{label:"接口名称:","label-width":"83px",prop:"name"}},[o("el-input",{attrs:{placeholder:"名称","auto-complete":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"Service:","label-width":"83px",prop:"service"}},[o("el-input",{attrs:{placeholder:"所属Service","auto-complete":""},model:{value:e.form.service,callback:function(t){e.$set(e.form,"service","string"==typeof t?t.trim():t)},expression:"form.service"}})],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:4}},[o("el-form-item",{attrs:{label:"URL:","label-width":"83px"}},[o("el-select",{attrs:{placeholder:"请求方式"},on:{change:e.checkRequestMethod},model:{value:e.form.requestMethod,callback:function(t){e.$set(e.form,"requestMethod",t)},expression:"form.requestMethod"}},e._l(e.MethodOptions,function(e,t){return o("el-option",{key:t+"",attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),o("el-col",{attrs:{span:3}},[o("el-form-item",[o("el-select",{attrs:{placeholder:"HTTP协议"},model:{value:e.form.requestProtocol,callback:function(t){e.$set(e.form,"requestProtocol",t)},expression:"form.requestProtocol"}},e._l(e.ProtocolOptions,function(e,t){return o("el-option",{key:t+"",attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{prop:"domain"}},[o("el-input",{attrs:{placeholder:"请输入访问域名(优先级最高)","auto-complete":""},model:{value:e.form.domain,callback:function(t){e.$set(e.form,"domain","string"==typeof t?t.trim():t)},expression:"form.domain"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{prop:"route"}},[o("el-input",{attrs:{placeholder:"请输入接口路由","auto-complete":""},model:{value:e.form.route,callback:function(t){e.$set(e.form,"route","string"==typeof t?t.trim():t)},expression:"form.route"}})],1)],1),e._v(" "),o("el-col",{staticStyle:{float:"right"},attrs:{span:3}},[o("el-checkbox",{attrs:{label:"请求前是否清除Cookie"},model:{value:e.form.isClearCookie,callback:function(t){e.$set(e.form,"isClearCookie","string"==typeof t?t.trim():t)},expression:"form.isClearCookie"}})],1)],1),e._v(" "),o("el-row",{attrs:{gutter:10}},[o("el-form-item",{attrs:{prop:"description"}},[o("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入用例描述","auto-complete":""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1)],1),e._v(" "),o("el-row",{attrs:{span:24}},[o("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[o("el-collapse-item",{attrs:{title:"数据初始化",name:"1"}},[o("el-table",{attrs:{data:e.form.dataInitializes,"highlight-current-row":""}},[o("el-table-column",{attrs:{prop:"dbType",label:"DB Type","min-width":"10%",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"请选择DB类型",clearable:"",filterable:"","allow-create":"","default-first-option":""},model:{value:t.row.dbType,callback:function(o){e.$set(t.row,"dbType",o)},expression:"scope.row.dbType"}},e._l(e.DBTypeOptions,function(e,t){return o("el-option",{key:t+"",attrs:{label:e.label,value:e.value}})}),1)]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"dbConfig",label:"选择DB","min-width":"10%",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"请选择DB",clearable:"",filterable:"","allow-create":"","default-first-option":""},model:{value:t.row.dbConfigId,callback:function(o){e.$set(t.row,"dbConfigId",o)},expression:"scope.row.dbConfigId"}},e._l(e.dbConfigs,function(e,t){return o("el-option",{key:t+"",attrs:{label:e.name,value:e._id}})}),1)]}}])}),e._v(" "),o("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return["MongoDB"==t.row.dbType?o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"Mongo CRUD:","label-width":"120px"}},[o("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"请选择方法",clearable:"",filterable:"","allow-create":"","default-first-option":""},model:{value:t.row.mongoCrud,callback:function(o){e.$set(t.row,"mongoCrud",o)},expression:"props.row.mongoCrud"}},e._l(e.MongoCRUDOptions,function(e,t){return o("el-option",{key:t+"",attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"Collection:","label-width":"83px"}},[o("el-input",{attrs:{value:t.row.collection,placeholder:"请输入要变更的collection"},model:{value:t.row.collection,callback:function(o){e.$set(t.row,"collection",o)},expression:"props.row.collection"}})],1)],1)],1):e._e(),e._v(" "),"MongoDB"==t.row.dbType?o("el-row",{attrs:{gutter:10}},["insert_one"!=t.row.mongoCrud?o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"查询条件:","label-width":"120px"}},[o("el-input",{attrs:{type:"textarea",rows:5,value:t.row.query,placeholder:"请输入查询条件,Update适用,例:{'key': 'value'}, 注意：true->True,false->False,null->None"},model:{value:t.row.query,callback:function(o){e.$set(t.row,"query",o)},expression:"props.row.query"}})],1)],1):e._e(),e._v(" "),o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"变更内容:","label-width":"120px"}},[o("el-input",{attrs:{type:"textarea",rows:5,value:t.row.set,placeholder:"请输入要变更(插入)的内容,例:{'key': 'value'}, 注意：true->True,false->False,null->None"},model:{value:t.row.set,callback:function(o){e.$set(t.row,"set",o)},expression:"props.row.set"}})],1)],1)],1):e._e(),e._v(" "),"MongoDB"!=t.row.dbType?o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:20}},[o("el-form-item",{attrs:{label:"SQL:","label-width":"80px"}},[o("el-input",{attrs:{type:"textarea",rows:5,value:t.row.sql,placeholder:"请输入SQL语句"},model:{value:t.row.sql,callback:function(o){e.$set(t.row,"sql",o)},expression:"props.row.sql"}})],1)],1)],1):e._e()]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"操作","min-width":"5%"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("i",{staticClass:"el-icon-delete",staticStyle:{"font-size":"30px",cursor:"pointer"},on:{click:function(o){return e.delDataInit(t.$index)}}})]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"","min-width":"10%"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.$index===e.form.dataInitializes.length-1?o("el-button",{staticClass:"el-icon-plus",attrs:{size:"mini"},on:{click:e.addDataInit}}):e._e()]}}])})],1)],1),e._v(" "),o("el-collapse-item",{attrs:{title:"请求头部",name:"2"}},[o("el-table",{attrs:{data:e.form.headers,"highlight-current-row":""}},[o("el-table-column",{attrs:{prop:"name",label:"标签","min-width":"15%",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"请输入/选择标签",clearable:"",filterable:"","allow-create":"","default-first-option":""},model:{value:t.row.name,callback:function(o){e.$set(t.row,"name","string"==typeof o?o.trim():o)},expression:"scope.row.name"}},e._l(e.HeaderOptions,function(e,t){return o("el-option",{key:t+"",attrs:{label:e.label,value:e.value}})}),1)]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"value",label:"内容","min-width":"20%",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-input",{attrs:{value:t.row.value,placeholder:"请输入内容"},model:{value:t.row.value,callback:function(o){e.$set(t.row,"value","string"==typeof o?o.trim():o)},expression:"scope.row.value"}})]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"操作","min-width":"5%"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("i",{staticClass:"el-icon-delete",staticStyle:{"font-size":"30px",cursor:"pointer"},on:{click:function(o){return e.delHeader(t.$index)}}})]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"","min-width":"10%"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.$index===e.form.headers.length-1?o("el-button",{staticClass:"el-icon-plus",attrs:{size:"mini"},on:{click:e.addHeader}}):e._e()]}}])})],1)],1),e._v(" "),o("el-collapse-item",{attrs:{title:"请求参数",name:"3"}},[o("div",{staticStyle:{margin:"5px"}},[o("el-row",{attrs:{span:24}},[e.showRequestBody?o("el-col",{attrs:{span:4}},[o("el-radio",{attrs:{label:"raw"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("源数据(raw) —— 支持json数组")])],1):e._e(),e._v(" "),o("el-col",{staticStyle:{float:"right"},attrs:{span:3}},[o("el-checkbox",{attrs:{label:"是否 json数组"},model:{value:e.form.isJsonArray,callback:function(t){e.$set(e.form,"isJsonArray","string"==typeof t?t.trim():t)},expression:"form.isJsonArray"}})],1)],1),e._v(" "),[o("el-form-item",{attrs:{label:"",prop:"parameterRaw"}},[o("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入参数内容({'username': 'test'})"},model:{value:e.form.parameterRaw,callback:function(t){e.$set(e.form,"parameterRaw","string"==typeof t?t.trim():t)},expression:"form.parameterRaw"}})],1)]],2)]),e._v(" "),o("el-collapse-item",{attrs:{title:"返回结果设置全局变量(Suite级别)",name:"4"}},[o("el-table",{attrs:{data:e.form.setGlobalVars,"highlight-current-row":""}},[o("el-table-column",{attrs:{prop:"name",label:"变量名","min-width":"20%"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-input",{attrs:{value:t.row.name,placeholder:"请输入变量名"},model:{value:t.row.name,callback:function(o){e.$set(t.row,"name","string"==typeof o?o.trim():o)},expression:"scope.row.name"}})]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"query",label:"变量查询语句","min-width":"30%",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-select",{staticStyle:{width:"70%"},attrs:{multiple:"",clearable:"",filterable:"","default-first-option":"","allow-create":"",placeholder:"请输入变量查询语句(不输入则返回整个JSON字符串)"},on:{change:function(o){return e.addSuffix(t.row.query)}},model:{value:t.row.query,callback:function(o){e.$set(t.row,"query","string"==typeof o?o.trim():o)},expression:"scope.row.query"}})]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"操作","min-width":"5%"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("i",{staticClass:"el-icon-delete",staticStyle:{"font-size":"30px",cursor:"pointer"},on:{click:function(o){return e.delGlobalVars(t.$index)}}})]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"","min-width":"10%"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.$index===e.form.setGlobalVars.length-1?o("el-button",{staticClass:"el-icon-plus",attrs:{size:"mini"},on:{click:e.addGlobalVars}}):e._e()]}}])})],1)],1),e._v(" "),o("el-collapse-item",{attrs:{title:"测试结果校验",name:"5"}},[o("el-card",{staticClass:"box-card"},[o("div",{attrs:{slot:"header"},slot:"header"},[o("el-radio-group",{model:{value:e.form.checkResponse,callback:function(t){e.$set(e.form,"checkResponse",t)},expression:"form.checkResponse"}},[o("el-radio-button",{attrs:{label:"noCheck"}},[o("div",[e._v("不校验")])]),e._v(" "),o("el-radio-button",{attrs:{label:"checkResponseCode"}},[o("div",[e._v("HTTP状态校验")])]),e._v(" "),o("el-radio-button",{attrs:{label:"checkResponseBody"}},[o("div",[e._v("JSON正则校验")])]),e._v(" "),o("el-radio-button",{attrs:{label:"checkResponseNumber"}},[o("div",[e._v("数值校验")])])],1)],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showResponseCodeCheck,expression:"showResponseCodeCheck"}]},[o("el-select",{attrs:{clearable:"",placeholder:"HTTP返回状态"},model:{value:e.form.checkResponseCode,callback:function(t){e.$set(e.form,"checkResponseCode",t)},expression:"form.checkResponseCode"}},e._l(e.ResponseCodeOptions,function(e,t){return o("el-option",{key:t+"",attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showResponseBodyCheck,expression:"showResponseBodyCheck"}]},[o("el-collapse-item",{attrs:{title:"JSON正则校验",name:"4"}},[o("el-table",{attrs:{data:e.form.checkResponseBody,"highlight-current-row":""}},[o("el-table-column",{attrs:{prop:"regex",label:"正则语句","min-width":"20%"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-input",{attrs:{placeholder:"请输入正则语句"},model:{value:t.row.regex,callback:function(o){e.$set(t.row,"regex","string"==typeof o?o.trim():o)},expression:"scope.row.regex"}})]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"query",label:"变量查询语句","min-width":"30%"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-select",{staticStyle:{width:"70%"},attrs:{multiple:"",filterable:"",clearable:"","default-first-option":"","allow-create":"",placeholder:"请输入变量查询语句(不输入则返回整个JSON字符串)"},on:{change:function(o){return e.addSuffix(t.row.query)}},model:{value:t.row.query,callback:function(o){e.$set(t.row,"query","string"==typeof o?o.trim():o)},expression:"scope.row.query"}})]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"操作","min-width":"5%"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("i",{staticClass:"el-icon-delete",staticStyle:{"font-size":"30px",cursor:"pointer"},on:{click:function(o){return e.delCheckResBody(t.$index)}}})]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"","min-width":"10%"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.$index===e.form.checkResponseBody.length-1?o("el-button",{staticClass:"el-icon-plus",attrs:{size:"mini"},on:{click:e.addCheckResBody}}):e._e()]}}])})],1)],1)],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showResponseNumCheck,expression:"showResponseNumCheck"}]},[o("el-collapse-item",{attrs:{title:"数值校验",name:"5"}},[o("el-table",{attrs:{data:e.form.checkResponseNumber,"highlight-current-row":""}},[o("el-table-column",{attrs:{label:"数值一","min-width":"5%"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-input",{attrs:{placeholder:"请输入数值一"},model:{value:t.row.expressions.firstArg,callback:function(o){e.$set(t.row.expressions,"firstArg","string"==typeof o?o.trim():o)},expression:"scope.row.expressions.firstArg"}})]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"运算","min-width":"3%"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-select",{attrs:{clearable:"",placeholder:"请选择运算"},model:{value:t.row.expressions.operator,callback:function(o){e.$set(t.row.expressions,"operator","string"==typeof o?o.trim():o)},expression:"scope.row.expressions.operator"}},e._l(e.operatorOptions,function(e,t){return o("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"数值二","min-width":"5%"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-input",{attrs:{placeholder:"请输入数值二"},model:{value:t.row.expressions.secondArg,callback:function(o){e.$set(t.row.expressions,"secondArg","string"==typeof o?o.trim():o)},expression:"scope.row.expressions.secondArg"}})]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"判断","min-width":"3%"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-select",{attrs:{clearable:"",placeholder:"请选择判断"},model:{value:t.row.expressions.judgeCharacter,callback:function(o){e.$set(t.row.expressions,"judgeCharacter","string"==typeof o?o.trim():o)},expression:"scope.row.expressions.judgeCharacter"}},e._l(e.judgeCharacterOptions,function(e,t){return o("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"期待结果","min-width":"5%"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-input",{attrs:{placeholder:"请输入期待结果"},model:{value:t.row.expressions.expectResult,callback:function(o){e.$set(t.row.expressions,"expectResult","string"==typeof o?o.trim():o)},expression:"scope.row.expressions.expectResult"}})]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"操作","min-width":"1%"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("i",{staticClass:"el-icon-delete",staticStyle:{"font-size":"30px",cursor:"pointer"},on:{click:function(o){return e.delCheckResNum(t.$index)}}})]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"","min-width":"5%"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.$index===e.form.checkResponseNumber.length-1?o("el-button",{staticClass:"el-icon-plus",attrs:{size:"mini"},on:{click:e.addCheckResNum}}):e._e()]}}])})],1)],1)],1)])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var p=o("VU/8")(c,u,!1,function(e){o("NOD4")},"data-v-4569bf44",null);t.default=p.exports},NOD4:function(e,t){}});
//# sourceMappingURL=17.c5e3ee418a777127d995.js.map