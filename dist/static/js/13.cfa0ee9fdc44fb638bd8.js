webpackJsonp([13],{"+FSK":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("H9AI"),o={name:"TestEnv",data:function(){return{filters:{name:""},testEnvs:[],size:10,skip:0,sortBy:"createAt",order:"descending",pageNum:1,totalNum:0,listLoading:!1,statusChangeLoading:!1,selects:[],titleMap:{add:"新增",edit:"编辑"},dialogStatus:"",formVisible:!1,loading:!1,formRules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 个字符",trigger:"blur"}],domain:[{required:!0,message:"请输入域名",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 个字符",trigger:"blur"}],description:[{required:!1,message:"请输入描述",trigger:"blur"},{max:1024,message:"不能超过1024个字符",trigger:"blur"}]},form:{name:"",domain:"",description:""},initForm:{name:"",domain:"",description:""}}},methods:{queryTestEnvs:function(t){this.listLoading=!0;var e=this;""!==e.filters.name.trim()&&(t.name=e.filters.name.trim());Object(r.b)(t,{}).then(function(t){var s=t.status,r=t.data;e.listLoading=!1,"ok"===s?(e.totalNum=r.totalNum,e.testEnvs=r.rows):e.$message.error({message:r,center:!0})}).catch(function(t){e.$message.error({message:"环境列表获取失败，请稍后刷新重试哦~",center:!0}),e.listLoading=!1})},getTestEnvList:function(){var t={size:this.size,skip:this.skip,sortBy:this.sortBy,order:this.order};this.queryTestEnvs(t)},handleSizeChange:function(t){this.size=t;var e={size:this.size,skip:this.skip,sortBy:this.sortBy,order:this.order};this.queryTestEnvs(e)},handleCurrentChange:function(t){this.skip=(t-1)*this.size;var e={size:this.size,skip:this.skip,sortBy:this.sortBy,order:this.order};this.queryTestEnvs(e)},sortChange:function(t){this.sortBy=t.prop,this.order=t.order;var e={size:this.size,skip:this.skip,sortBy:this.sortBy,order:this.order};this.queryTestEnvs(e)},selectsChange:function(t){this.selects=t},reportRowStyle:function(t){var e=t.row;t.rowIndex;return!0!==e.status?"background-color: #DDDDDD":""},ReportTableRow:function(t){t.row,t.rowIndex;return"reportTableRow"}},mounted:function(){this.getTestEnvList()}},i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("strong",{staticClass:"title"},[t._v(t._s(t.$route.meta.title))]),t._v(" "),r("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[r("el-form",{attrs:{inline:!0,model:t.filters},nativeOn:{submit:function(t){t.preventDefault()}}},[r("router-link",{staticStyle:{"text-decoration":"none",color:"aliceblue"},attrs:{to:""}},[r("el-button",{staticClass:"return-list",on:{click:function(e){return t.$router.back(-1)}}},[r("i",{staticClass:"el-icon-d-arrow-left",staticStyle:{"margin-right":"5px"}}),t._v("返回\n        ")])],1),t._v(" "),r("el-form-item",{staticStyle:{"margin-left":"35px"}},[r("router-link",{staticStyle:{"text-decoration":"none",color:"aliceblue"},attrs:{to:{name:"ShowDBConfig"}}},[r("el-button",{attrs:{type:"primary"}},[r("i",{staticClass:"fa fa-database"}),t._v(" DB配置")])],1)],1),t._v(" "),r("div",{staticStyle:{float:"right","margin-right":"95px"}},[r("el-form-item",[r("el-input",{attrs:{placeholder:"名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getTestEnvList(e)}},model:{value:t.filters.name,callback:function(e){t.$set(t.filters,"name","string"==typeof e?e.trim():e)},expression:"filters.name"}})],1),t._v(" "),r("el-form-item",[r("el-button",{staticClass:"el-icon-search",attrs:{type:"primary"},on:{click:t.getTestEnvList}},[t._v(" 查询")])],1)],1)],1)],1),t._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.testEnvs,"row-style":t.reportRowStyle,"row-class-name":t.ReportTableRow,"highlight-current-row":""},on:{"sort-change":t.sortChange,"selection-change":t.selectsChange}},[r("el-table-column",{attrs:{type:"selection","min-width":"5%"}}),t._v(" "),r("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"15%",sortable:"custom","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[r("router-link",{staticStyle:{"text-decoration":"none",color:"#000000"},attrs:{to:{name:"TestEnvParam",params:{test_env_id:e.row._id}}}},[t._v("\n          "+t._s(e.row.name)+"\n        ")])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"domain",label:"域名","min-width":"35%",sortable:"custom","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"description",label:"描述","min-width":"20%","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"createAt",label:"创建时间","min-width":"20%",sortable:"custom","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"createUser",label:"创建者","min-width":"20%",sortable:"custom","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"lastUpdateTime",label:"更新时间","min-width":"20%",sortable:"custom","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"lastUpdateUser",label:"更新者","min-width":"20%",sortable:"custom","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"10%",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("img",{directives:[{name:"show",rawName:"v-show",value:e.row.status,expression:"scope.row.status"}],attrs:{src:s("7shL")}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:!e.row.status,expression:"!scope.row.status"}],attrs:{src:s("IT+J")}})]}}])})],1),t._v(" "),r("el-col",{staticClass:"toolbar",attrs:{span:24}},[r("el-pagination",{staticStyle:{float:"right"},attrs:{"page-sizes":[10,20,40],"page-size":t.size,layout:"total, sizes, prev, pager, next, jumper",total:t.totalNum},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var a=s("VU/8")(o,i,!1,function(t){s("fgIj")},"data-v-c10abb08",null);e.default=a.exports},fgIj:function(t,e){}});
//# sourceMappingURL=13.cfa0ee9fdc44fb638bd8.js.map