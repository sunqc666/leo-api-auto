webpackJsonp([28],{EqV0:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("woOf"),o=s.n(i),r=s("H9AI"),a={name:"EnvConfig",data:function(){return{filters:{name:""},envConfigs:[],size:10,skip:0,sortBy:"createAt",order:"descending",pageNum:1,totalNum:0,listLoading:!1,statusChangeLoading:!1,selects:[],titleMap:{add:"新增",edit:"编辑"},dialogStatus:"",formVisible:!1,loading:!1,formRules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 个字符",trigger:"blur"}],domain:[{required:!0,message:"请输入域名",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 个字符",trigger:"blur"}],description:[{required:!1,message:"请输入描述",trigger:"blur"},{max:1024,message:"不能超过1024个字符",trigger:"blur"}]},form:{name:"",domain:"",description:""},initForm:{name:"",domain:"",description:""}}},methods:{queryEnvConfigs:function(t){this.listLoading=!0;var e=this;""!==e.filters.name.trim()&&(t.name=e.filters.name.trim());Object(r.b)(t,{}).then(function(t){var s=t.status,i=t.data;e.listLoading=!1,"ok"===s?(e.totalNum=i.totalNum,e.envConfigs=i.rows):e.$message.error({message:i,center:!0})}).catch(function(t){e.$message.error({message:"环境列表获取失败，请稍后刷新重试哦~",center:!0}),e.listLoading=!1})},getEnvConfigList:function(){var t={size:this.size,skip:this.skip,sortBy:this.sortBy,order:this.order};this.queryEnvConfigs(t)},handleSizeChange:function(t){this.size=t;var e={size:this.size,skip:this.skip,sortBy:this.sortBy,order:this.order};this.queryEnvConfigs(e)},handleCurrentChange:function(t){this.skip=(t-1)*this.size;var e={size:this.size,skip:this.skip,sortBy:this.sortBy,order:this.order};this.queryEnvConfigs(e)},sortChange:function(t){this.sortBy=t.prop,this.order=t.order;var e={size:this.size,skip:this.skip,sortBy:this.sortBy,order:this.order};this.queryEnvConfigs(e)},handleDel:function(t,e){var s=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(function(){s.listLoading=!0;var t=s;Object(r.c)(e._id,{isDeleted:!0},{"Content-Type":"application/json"}).then(function(e){var s=e.status,i=e.data;"ok"===s?t.$message({message:"删除成功",center:!0,type:"success"}):t.$message.error({message:i,center:!0}),t.getEnvConfigList()})})},handleChangeStatus:function(t,e){var s=this;s.statusChangeLoading=!0;var i={status:!e.status};Object(r.c)(e._id,i,{"Content-Type":"application/json"}).then(function(t){var i=t.status,o=t.data;s.statusChangeLoading=!1,"ok"===i?(s.$message({message:"状态变更成功",center:!0,type:"success"}),e.status=!e.status):s.$message.error({message:o,center:!0}),s.getEnvConfigList()}).catch(function(){s.$message.error({message:"环境状态更新失败,请稍后重试哦",center:!0}),s.statusChangeLoading=!1,s.getEnvConfigList()})},handleEdit:function(t,e){this.formVisible=!0,this.form=o()({},this.form,e),this.dialogStatus="edit"},handleAdd:function(){this.formVisible=!0,this.form=o()({},this.form,this.initForm),this.dialogStatus="add"},submit:function(){var t=this,e=this;this.$refs.form.validate(function(s){s&&t.$confirm("确认提交吗？","提示",{}).then(function(){e.loading=!0;var s={"Content-Type":"application/json"};if("add"==t.dialogStatus){var i={name:e.form.name.trim(),domain:e.form.domain,description:e.form.description.trim(),createUser:t.$store.getters.email||"anonymous"};Object(r.a)(i,s).then(function(t){var s=t.status,i=t.data;e.loading=!1,"ok"===s?(e.$message({message:"添加成功",center:!0,type:"success"}),e.$refs.form.resetFields(),e.formVisible=!1,e.getEnvConfigList()):(e.$message.error({message:i,center:!0}),e.$refs.form.resetFields(),e.formVisible=!1,e.getEnvConfigList())})}else if("edit"==t.dialogStatus){var o={name:e.form.name.trim(),domain:e.form.domain,description:e.form.description.trim(),lastUpdateUser:t.$store.getters.email||"anonymous"};Object(r.c)(e.form._id,o,s).then(function(t){var s=t.status,i=t.data;e.loading=!1,"ok"===s?(e.$message({message:"修改成功",center:!0,type:"success"}),e.$refs.form.resetFields(),e.formVisible=!1,e.getEnvConfigList()):(e.$message.error({message:i,center:!0}),e.getEnvConfigList())})}else e.$message.error({message:"系统出错",center:!0}),e.getEnvConfigList()})})},selectsChange:function(t){this.selects=t},reportRowStyle:function(t){var e=t.row;t.rowIndex;return!0!==e.status?"background-color: #DDDDDD":""},ReportTableRow:function(t){t.row,t.rowIndex;return"reportTableRow"}},mounted:function(){this.getEnvConfigList()}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("strong",{staticClass:"title"},[t._v(t._s(t.$route.meta.title))]),t._v(" "),i("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[i("el-form",{attrs:{inline:!0,model:t.filters},nativeOn:{submit:function(t){t.preventDefault()}}},[i("router-link",{staticStyle:{"text-decoration":"none",color:"aliceblue"},attrs:{to:""}},[i("el-button",{staticClass:"return-list",on:{click:function(e){return t.$router.back(-1)}}},[i("i",{staticClass:"el-icon-d-arrow-left",staticStyle:{"margin-right":"5px"}}),t._v("返回\n        ")])],1),t._v(" "),t.$store.getters.roles.includes("admin")?i("el-form-item",{staticStyle:{"margin-left":"35px"}},[i("el-button",{staticClass:"el-icon-plus",attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v(" 新增测试环境")])],1):t._e(),t._v(" "),i("el-form-item",{staticStyle:{"margin-left":"30px"}},[i("router-link",{staticStyle:{"text-decoration":"none",color:"aliceblue"},attrs:{to:{name:"DBConfig"}}},[i("el-button",{attrs:{type:"primary"}},[i("i",{staticClass:"fa fa-database"}),t._v(" DB配置")])],1)],1),t._v(" "),i("div",{staticStyle:{float:"right","margin-right":"95px"}},[i("el-form-item",[i("el-input",{attrs:{placeholder:"名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getEnvConfigList(e)}},model:{value:t.filters.name,callback:function(e){t.$set(t.filters,"name","string"==typeof e?e.trim():e)},expression:"filters.name"}})],1),t._v(" "),i("el-form-item",[i("el-button",{staticClass:"el-icon-search",attrs:{type:"primary"},on:{click:t.getEnvConfigList}},[t._v(" 查询")])],1)],1)],1)],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.envConfigs,"row-style":t.reportRowStyle,"row-class-name":t.ReportTableRow,"highlight-current-row":""},on:{"sort-change":t.sortChange,"selection-change":t.selectsChange}},[i("el-table-column",{attrs:{type:"selection","min-width":"5%"}}),t._v(" "),i("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"15%",sortable:"custom","show-overflow-tooltip":""}}),t._v(" "),i("el-table-column",{attrs:{prop:"domain",label:"域名","min-width":"35%",sortable:"custom","show-overflow-tooltip":""}}),t._v(" "),i("el-table-column",{attrs:{prop:"description",label:"描述","min-width":"20%","show-overflow-tooltip":""}}),t._v(" "),i("el-table-column",{attrs:{prop:"createAt",label:"创建时间","min-width":"20%",sortable:"custom","show-overflow-tooltip":""}}),t._v(" "),i("el-table-column",{attrs:{prop:"createUser",label:"创建者","min-width":"20%",sortable:"custom","show-overflow-tooltip":""}}),t._v(" "),i("el-table-column",{attrs:{prop:"lastUpdateTime",label:"更新时间","min-width":"20%",sortable:"custom","show-overflow-tooltip":""}}),t._v(" "),i("el-table-column",{attrs:{prop:"lastUpdateUser",label:"更新者","min-width":"20%",sortable:"custom","show-overflow-tooltip":""}}),t._v(" "),i("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"10%",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("img",{directives:[{name:"show",rawName:"v-show",value:e.row.status,expression:"scope.row.status"}],attrs:{src:s("7shL")}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:!e.row.status,expression:"!scope.row.status"}],attrs:{src:s("IT+J")}})]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作","min-width":"30%"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(s){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{type:"info",size:"small",loading:t.statusChangeLoading},on:{click:function(s){return t.handleChangeStatus(e.$index,e.row)}}},[t._v("\n          "+t._s(!1===e.row.status?"启用":"禁用")+"\n        ")])]}}])})],1),t._v(" "),i("el-col",{staticClass:"toolbar",attrs:{span:24}},[i("el-pagination",{staticStyle:{float:"right"},attrs:{"page-sizes":[10,20,40],"page-size":t.size,layout:"total, sizes, prev, pager, next, jumper",total:t.totalNum},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),i("el-dialog",{staticStyle:{width:"60%",left:"20%"},attrs:{title:t.titleMap[t.dialogStatus],visible:t.formVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.formVisible=e}}},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"名称",prop:"name"}},[i("el-input",{attrs:{placeholder:"请输入环境名称","auto-complete":"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"域名",prop:"domain"}},[i("el-input",{attrs:{placeholder:"www.test.com/www.service-${service}.com","auto-complete":"off"},model:{value:t.form.domain,callback:function(e){t.$set(t.form,"domain","string"==typeof e?e.trim():e)},expression:"form.domain"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"描述",prop:"description"}},[i("el-input",{attrs:{placeholder:"请输入环境描述...",type:"textarea",rows:5},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{nativeOn:{click:function(e){t.formVisible=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary",loading:t.loading},nativeOn:{click:function(e){return t.submit(e)}}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]};var l=s("VU/8")(a,n,!1,function(t){s("Kk6r")},"data-v-0098ffd3",null);e.default=l.exports},Kk6r:function(t,e){}});
//# sourceMappingURL=28.e9b66c1766c26b8bbce5.js.map