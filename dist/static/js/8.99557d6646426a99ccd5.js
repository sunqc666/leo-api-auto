webpackJsonp([8],{KX5P:function(t,e,s){"use strict";e.a=function(t,e){return Object(r.a)({url:"/api/startAPITestByCase",method:"POST",headers:e,data:t})},e.b=function(t,e){return Object(r.a)({url:"/api/startAPITestBySuite",method:"POST",headers:e,data:t})};var r=s("cKc3")},KrZw:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("Xxa5"),i=s.n(r),o=s("mvHQ"),a=s.n(o),n=s("exGp"),l=s.n(n),c=s("woOf"),u=s.n(c),m=s("pR/e"),d=s("H9AI"),p=s("KX5P"),g=s("T9gM"),f=s("PJh5"),h=s.n(f),v={name:"TestSuiteList",data:function(){return{downloadLink:"",downloadName:"",testSuites:[],filters:{name:""},pageInfoIndex:-1,size:10,skip:0,sortBy:"createAt",order:"descending",currentPage:1,totalNum:0,listLoading:!1,copyLoading:!1,importLoading:!1,exportLoading:!1,hasSelected:!1,selects:[],delLoading:!1,statusChangeLoading:!1,testEnvs:[],testEnv:"",titleMap:{add:"新增",edit:"编辑"},dialogStatus:"",formVisible:!1,editLoading:!1,formRules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:100,message:"长度在 1 到 100 个字符",trigger:"blur"}],description:[{required:!1,message:"请输入描述",trigger:"blur"},{max:1024,message:"不能超过1024个字符",trigger:"blur"}],priority:[{required:!0,message:"请输入优先级，P1 or P2",trigger:"blur"},{min:2,max:2,message:"请输入 P1 or P2",trigger:"blur"}],service:[{required:!1,message:"请输入服务",trigger:"blur"},{max:30,message:"所属服务",trigger:"blur"}],sprint:[{required:!1,message:"请输入Sprint",trigger:"blur"},{max:30,message:"用例所属Sprint，30字符以内",trigger:"blur"}],storyId:[{required:!1,message:"请输入Story ID",trigger:"blur"},{max:30,message:"用例story ID，30字符以内",trigger:"blur"}],testCaseId:[{required:!1,message:"请输入Test Case ID",trigger:"blur"},{max:30,message:"用例Test Case ID，30字符以内",trigger:"blur"}]},form:{name:"",description:""},initForm:{name:"",description:""},importExtraData:{projectId:this.$route.params.project_id,user:this.$store.getters.email||"未知anonymous"}}},methods:{getTestSuiteList:function(){var t={skip:this.skip,size:this.size,sortBy:this.sortBy,order:this.order,projectId:this.$route.params.project_id};this.queryTestSuites(t)},queryTestSuites:function(t){this.listLoading=!0;var e=this;""!==e.filters.name.trim()&&(t.name=e.filters.name.trim());Object(m.d)(e.$route.params.project_id,t,{}).then(function(t){e.listLoading=!1;var s=t.status,r=t.data;"ok"===s?(e.testSuites=r.rows,e.totalNum=r.totalNum):e.$message.error({message:r,center:!0})}).catch(function(t){e.$message.error({message:"用例列表获取失败，请稍后刷新重试哦~",center:!0}),e.listLoading=!1})},handleSizeChange:function(t){this.$store.dispatch("pageInfo/setTestSuitePageInfo",{size:t,projectId:this.$route.params.project_id}),this.size=t,this.listLoading=!0;var e={skip:this.skip,size:this.size,sortBy:this.sortBy,order:this.order,projectId:this.$route.params.project_id};this.queryTestSuites(e)},handleCurrentChange:function(t){this.listLoading=!0,this.$store.dispatch("pageInfo/setTestSuitePageInfo",{skip:(t-1)*this.size,currentPage:t,projectId:this.$route.params.project_id}),this.skip=(t-1)*this.size;var e={skip:this.skip,size:this.size,sortBy:this.sortBy,order:this.order,projectId:this.$route.params.project_id};this.queryTestSuites(e)},handleDel:function(t,e){var s=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(function(t){s.editLoading=!0;var r=s;Object(m.e)(r.$route.params.project_id,e._id,{isDeleted:!0},{}).then(function(t){r.editLoading=!1;var e=t.status,s=t.data;"ok"===e?(r.$message.success({message:"删除成功",center:!0}),r.getTestSuiteList()):(r.$message.error({message:s,center:!0}),r.getTestSuiteList())}).catch(function(){r.$message.error({message:"删除用例失败,请稍后重试哦",center:!0}),r.editLoading=!1})})},sortChange:function(t){this.sortBy=t.prop,this.order=t.order;var e={skip:this.skip,size:this.size,sortBy:this.sortBy,order:this.order,projectId:this.$route.params.project_id};this.queryTestSuites(e)},handleChangeStatus:function(t,e){var s=this,r=this;r.statusChangeLoading=!0;var i={status:!e.status};Object(m.e)(this.$route.params.project_id,e._id,i,{"Content-Type":"application/json"}).then(function(t){var s=t.status,i=t.data;r.statusChangeLoading=!1,"ok"===s?(r.$message({message:"状态变更成功",center:!0,type:"success"}),e.status=!e.status):r.$message.error({message:i,center:!0}),r.getTestSuiteList()}).catch(function(){r.$message.error({message:"用例组状态更新失败,请稍后重试哦",center:!0}),r.statusChangeLoading=!1,s.getTestSuiteList()})},selectsChange:function(t){t.length>0?(this.selects=t,this.hasSelected=!0):this.hasSelected=!1},handleEdit:function(t,e){this.formVisible=!0,this.form=u()({},this.form,e),this.dialogStatus="edit"},handleAdd:function(){this.formVisible=!0,this.form=u()({},this.form,this.initForm),this.dialogStatus="add"},submit:function(){var t=this,e=this;this.$refs.form.validate(function(s){s&&t.$confirm("确认提交吗？","提示",{}).then(function(){e.loading=!0;var s={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};if("add"==t.dialogStatus){var r={name:e.form.name.trim(),priority:e.form.priority.trim(),service:e.form.service,sprint:e.form.sprint,storyId:e.form.storyId,testCaseId:e.form.testCaseId,createUser:e.$store.getters.email||"未知anonymous"};e.form.description&&(r.description=e.form.description.trim()),Object(m.a)(t.$route.params.project_id,r,s).then(function(t){var s=t.status,r=t.data;e.loading=!1,"ok"===s?(e.$message({message:"添加成功",center:!0,type:"success"}),e.$refs.form.resetFields(),e.formVisible=!1,e.getTestSuiteList()):(e.$message.error({message:r,center:!0}),e.$refs.form.resetFields(),e.formVisible=!1,e.getTestSuiteList())})}else if("edit"==t.dialogStatus){var i={project_id:t.$route.params.project_id,name:e.form.name.trim(),priority:e.form.priority.trim(),service:e.form.service,sprint:e.form.sprint,storyId:e.form.storyId,testCaseId:e.form.testCaseId,description:e.form.description.trim(),lastUpdateUser:e.$store.getters.email||"未知anonymous"};Object(m.e)(t.$route.params.project_id,e.form._id,i,s).then(function(t){var s=t.status,r=t.data;e.loading=!1,"ok"===s?(e.$message({message:"修改成功",center:!0,type:"success"}),e.$refs.form.resetFields(),e.formVisible=!1,e.getTestSuiteList()):(e.$message.error({message:r,center:!0}),e.getTestSuiteList())})}else e.$message.error({message:"系统出错",center:!0}),e.getTestSuiteList()})})},copySuite:function(t,e){var s=this;this.$confirm("确认复制吗？","提示",{}).then(function(){s.copyLoading=!0;var t={createUser:s.$store.getters.email||"未知anonymous"};Object(m.b)(s.$route.params.project_id,e._id,t,{"Content-Type":"application/json"}).then(function(t){s.copyLoading=!1;var e=t.status,r=t.data;"ok"===e?s.$message.success({message:r,center:!0}):s.$message.error({message:r,center:!0}),s.getTestSuiteList()}).catch(function(t){s.$message.error({message:"用例组复制失败，请稍后重试哦~",center:!0}),s.copyLoading=!1})})},reportRowStyle:function(t){var e=t.row;t.rowIndex;return!0!==e.status?"background-color: #DDDDDD":""},ReportTableRow:function(t){t.row,t.rowIndex;return"reportTableRow"},getTestEnvList:function(){var t=this,e=this;Object(d.b)({status:!0},{}).then(function(s){var r=s.status,i=s.data;"ok"===r?t.testEnvs=i.rows:e.$message.error({message:i,center:!0})}).catch(function(t){e.$message.error({message:"暂时无法获取环境列表，请稍后刷新重试~",center:!0})})},checkActiveTestEnv:function(){this.testEnvs.length<1&&this.$message.warning({message:"未找到「启用的测试环境」哦, 请前往「环境配置」进行设置",center:!0})},onTest:function(){var t=this;if(t.testEnv){t.listLoading=!0;var e={testSuiteIdList:t.selects.map(function(t){return t._id}),testEnvId:t.testEnv,projectId:t.$route.params.project_id,executionUser:t.$store.getters.email,executionMode:"manual"};Object(p.b)(e,{"Content-Type":"application/json"}).then(function(e){t.listLoading=!1;var s=e.status,r=e.data;"ok"===s?t.$message.success({message:r,center:!0}):t.$message.warning({message:r,center:!0}),t.getTestSuiteList()}).catch(function(e){t.$message.error({message:"用例执行异常/超时，请稍后重试哦~",center:!0}),t.listLoading=!1,t.update=!1})}else this.$message({message:"请选择「测试环境」, 在「执行测试」按钮右边哦~",center:!0,type:"warning"})},onBeforeUpload:function(t){var e=t.name.substring(t.name.lastIndexOf(".")+1);return"xls"===e||"xlsx"===e?t:(this.$message.warning("只接收 .xls / .xlsx 文件哦 ~ "),!1)},onSuccessUpload:function(t){var e=t.status,s=t.data;"ok"===e?this.$message.success(s):this.$message.error(s),this.getTestSuiteList(),this.importLoading=!1},onProgressUpload:function(t){this.importLoading=!0},onErrorUpload:function(t){this.importLoading=!1,this.$message.error(t)},exportCases:function(){var t=this;return l()(i.a.mark(function e(){var s,r,o,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(s=t).exportLoading=!0,r=s.selects.map(function(t){return t._id}),o={"Content-Type":"application/json"},n=a()({testSuiteIds:r}),Object(g.c)(n,o).then(function(e){var r=new Blob([e]);s.downloadLink=window.URL.createObjectURL(r),s.downloadName="测试用例_"+h()().format("YYYY-MM-DD_HH-mm-ss")+".xlsx",s.$nextTick(function(){s.$el.querySelector(".js-download-doc").click(),window.URL.revokeObjectURL(t.downloadLink),s.exportLoading=!1,s.$message.success({message:"用例导出成功",center:!0})})}).catch(function(t){console.log("Export Cases error:",t),s.$message.error({message:"用例导出失败，请稍后重试哦~",center:!0}),s.exportLoading=!1});case 6:case"end":return e.stop()}},e,t)}))()}},computed:{getImportUrl:function(){return"/api/importTestCases"}},mounted:function(){this.getTestEnvList(),this.getTestSuiteList()},created:function(){var t=this;this.pageInfoIndex=this.$store.getters.testSuitePageInfo.findIndex(function(e){return e.projectId===t.$route.params.project_id}),this.size=-1===this.pageInfoIndex?10:this.$store.getters.testSuitePageInfo[this.pageInfoIndex]&&this.$store.getters.testSuitePageInfo[this.pageInfoIndex].size||10,this.skip=-1===this.pageInfoIndex?0:this.$store.getters.testSuitePageInfo[this.pageInfoIndex]&&this.$store.getters.testSuitePageInfo[this.pageInfoIndex].skip||0,this.sortBy=-1===this.pageInfoIndex?"createAt":this.$store.getters.testSuitePageInfo[this.pageInfoIndex]&&this.$store.getters.testSuitePageInfo[this.pageInfoIndex].sortBy||"createAt",this.order=-1===this.pageInfoIndex?"descending":this.$store.getters.testSuitePageInfo[this.pageInfoIndex]&&this.$store.getters.testSuitePageInfo[this.pageInfoIndex].order||"descending",this.currentPage=-1===this.pageInfoIndex?1:this.$store.getters.testSuitePageInfo[this.pageInfoIndex]&&this.$store.getters.testSuitePageInfo[this.pageInfoIndex].currentPage||1}},b={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("strong",{staticClass:"title"},[t._v(t._s(t.$route.meta.title))]),t._v(" "),r("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[r("el-form",{attrs:{inline:!0,model:t.filters},nativeOn:{submit:function(t){t.preventDefault()}}},[r("router-link",{staticStyle:{"text-decoration":"none",color:"aliceblue"},attrs:{to:""}},[r("el-button",{staticClass:"return-list",on:{click:function(e){return t.$router.back(-1)}}},[r("i",{staticClass:"el-icon-d-arrow-left",staticStyle:{"margin-right":"5px"}}),t._v("返回\n        ")])],1),t._v(" "),r("el-form-item",{staticStyle:{"margin-left":"50px"}},[r("el-button",{staticClass:"el-icon-plus",attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("新增用例组")])],1),t._v(" "),r("el-form-item",{staticStyle:{"margin-left":"10px"}},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"只接收 xls / xlsx 哦~",placement:"top-start"}},[r("el-upload",{attrs:{action:t.getImportUrl,"before-upload":t.onBeforeUpload,"on-success":t.onSuccessUpload,"on-error":t.onErrorUpload,"on-progress":t.onProgressUpload,"show-file-list":!1,"with-credentials":!0,data:t.importExtraData}},[r("el-button",{staticClass:"el-icon-upload2",staticStyle:{"margin-left":"5px"},attrs:{disabled:t.importLoading,type:"primary"}},[t._v("用例导入\n            ")])],1)],1)],1),t._v(" "),r("el-form-item",{staticStyle:{"margin-left":"5px"}},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"导出格式是 xlsx 哦~",placement:"top-start"}},[r("el-button",{staticClass:"el-icon-download",staticStyle:{"margin-right":"3px"},attrs:{loading:t.exportLoading,disabled:!t.hasSelected,type:"primary"},on:{click:t.exportCases}},[t._v(" 用例导出\n          ")])],1)],1),t._v(" "),r("div",{staticStyle:{float:"right","margin-right":"20px"}},[r("el-form-item",[r("el-input",{attrs:{placeholder:"名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getTestSuiteList(e)}},model:{value:t.filters.name,callback:function(e){t.$set(t.filters,"name","string"==typeof e?e.trim():e)},expression:"filters.name"}})],1),t._v(" "),r("el-form-item",[r("el-button",{staticClass:"el-icon-search",attrs:{type:"primary"},on:{click:t.getTestSuiteList}},[t._v(" 查询")])],1)],1),t._v(" "),r("div",{staticStyle:{float:"right","margin-right":"30px"}},[r("el-select",{staticStyle:{"margin-right":"20px"},attrs:{clearable:"",placeholder:"测试环境"},on:{"visible-change":t.checkActiveTestEnv},model:{value:t.testEnv,callback:function(e){t.testEnv=e},expression:"testEnv"}},t._l(t.testEnvs,function(t,e){return r("el-option",{key:e+"",attrs:{label:t.name,value:t._id}})}),1),t._v(" "),r("el-form-item",[r("el-button",{staticClass:"el-icon-caret-right",attrs:{type:"primary",disabled:!t.hasSelected},on:{click:t.onTest}},[t._v("执行测试\n          ")])],1)],1)],1)],1),t._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.testSuites,"row-style":t.reportRowStyle,"row-class-name":t.ReportTableRow,"highlight-current-row":""},on:{"sort-change":t.sortChange,"selection-change":t.selectsChange}},[r("el-table-column",{attrs:{type:"selection","min-width":"5%"}}),t._v(" "),r("el-table-column",{attrs:{sortable:"custom",prop:"name",label:"用例组名称","min-width":"40%","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-icon",{attrs:{name:"name"}}),t._v(" "),r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"TestCaseList",params:{test_suite_id:e.row._id,showWarmPrompt:!0}}}},[t._v("\n          "+t._s(e.row.name)+"\n        ")])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"priority",label:"优先级","min-width":"10%","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"description",label:"描述","min-width":"20%","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"service",label:"服务","min-width":"10%","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"sprint",label:"Sprint","min-width":"10%","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"storyId",label:"StoryID","min-width":"10%","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"testCaseId",label:"TestCaseID","min-width":"10%","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{sortable:"custom",prop:"createAt",label:"创建时间","min-width":"15%","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{sortable:"custom",prop:"createUser",label:"创建者","min-width":"15%","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"10%",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("img",{directives:[{name:"show",rawName:"v-show",value:e.row.status,expression:"scope.row.status"}],attrs:{src:s("7shL")}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:!e.row.status,expression:"!scope.row.status"}],attrs:{src:s("IT+J")}})]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"操作","min-width":"40%"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(s){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),r("el-button",{staticClass:"copyBtn",attrs:{size:"small",loading:t.copyLoading},on:{click:function(s){return t.copySuite(e.$index,e.row)}}},[t._v("复制\n        ")]),t._v(" "),r("el-button",{attrs:{type:"info",size:"small",loading:t.statusChangeLoading},on:{click:function(s){return t.handleChangeStatus(e.$index,e.row)}}},[t._v("\n          "+t._s(!1===e.row.status?"启用":"禁用")+"\n        ")]),t._v(" "),r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(s){return t.handleDel(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),r("el-col",{staticClass:"toolbar",attrs:{span:24}},[0!=t.totalNum?r("el-pagination",{staticStyle:{float:"right"},attrs:{"current-page":t.currentPage,"page-sizes":[10,20,40],"page-size":t.size,layout:"total, sizes, prev, pager, next, jumper",total:t.totalNum},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}}):t._e()],1),t._v(" "),r("el-dialog",{staticStyle:{width:"65%",left:"17.5%"},attrs:{title:t.titleMap[t.dialogStatus],visible:t.formVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.formVisible=e}}},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{type:"textarea",rows:4},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"优先级",prop:"priority"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.priority,callback:function(e){t.$set(t.form,"priority","string"==typeof e?e.trim():e)},expression:"form.priority"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"所属服务",prop:"service"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.service,callback:function(e){t.$set(t.form,"service","string"==typeof e?e.trim():e)},expression:"form.service"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"Sprint",prop:"sprint"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.sprint,callback:function(e){t.$set(t.form,"sprint","string"==typeof e?e.trim():e)},expression:"form.sprint"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"storyId",prop:"storyId"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.storyId,callback:function(e){t.$set(t.form,"storyId","string"==typeof e?e.trim():e)},expression:"form.storyId"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"testCaseId",prop:"testCaseId"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.testCaseId,callback:function(e){t.$set(t.form,"testCaseId","string"==typeof e?e.trim():e)},expression:"form.testCaseId"}})],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{nativeOn:{click:function(e){t.formVisible=!1}}},[t._v("取消")]),t._v(" "),r("el-button",{attrs:{type:"primary",loading:t.editLoading},nativeOn:{click:function(e){return t.submit(e)}}},[t._v("提交")])],1)],1),t._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"js-download-doc",attrs:{href:t.downloadLink,download:t.downloadName}})],1)},staticRenderFns:[]};var y=s("VU/8")(v,b,!1,function(t){s("RhFy")},"data-v-2b6c72ee",null);e.default=y.exports},RhFy:function(t,e){}});
//# sourceMappingURL=8.99557d6646426a99ccd5.js.map