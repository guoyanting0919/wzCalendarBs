(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46d388fa"],{"5c8c":function(t,e,a){"use strict";var l=a("92cc"),i=a.n(l);i.a},"92cc":function(t,e,a){},eca2:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"calendarEvent"},[a("div",{staticClass:"searchBox"},[a("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"關鍵字"},model:{value:t.keyWordInput,callback:function(e){t.keyWordInput=e},expression:"keyWordInput"}}),a("el-button",{staticClass:"searchBtn",attrs:{type:"primary"}},[t._v("搜尋")]),a("el-button",{staticClass:"addBtn",attrs:{type:"primary"},on:{click:function(e){return t.handleAddOrEdit("add")}}},[t._v("新增")]),a("el-button",{staticClass:"changeBtn",attrs:{type:"primary"},on:{click:function(e){t.changeDialogVisible=!0}}},[t._v("批次替換")]),a("el-button",{staticClass:"importBtn",attrs:{type:"primary"},on:{click:function(e){t.importDialogVisible=!0}}},[t._v("匯入")]),a("el-button",{staticClass:"exportBtn",attrs:{type:"primary"}},[t._v("匯出")])],1),a("div",{staticClass:"mainTable"},[a("div",{staticClass:"tableContainer mt-5"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"default-sort":{prop:"date",order:"descending"}},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"eventName",label:"事件名稱",sortable:""}}),a("el-table-column",{attrs:{prop:"eventCategory",label:"行事曆類別",sortable:""}}),a("el-table-column",{attrs:{prop:"showDate",label:"顯示時間",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"showDateBox"},[a("span",[t._v(t._s(e.row.showStartDate))]),a("div",{staticClass:"dateLine"}),a("span",[t._v(t._s(e.row.showEndDate))])])]}}])}),a("el-table-column",{attrs:{prop:"eventDate",label:"活動時間",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"eventDateBox"},[a("span",[t._v(t._s(e.row.eventStartDate))]),a("div",{staticClass:"dateLine"}),a("span",[t._v(t._s(e.row.eventEndDate))])])]}}])}),a("el-table-column",{attrs:{prop:"eventSite",label:"地址",sortable:""}}),a("el-table-column",{attrs:{prop:"emit",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"outline",attrs:{size:"mini"},on:{click:function(a){return t.handleCopy(e.row)}}},[t._v("複製")]),a("el-button",{staticClass:"outline",attrs:{size:"mini"},on:{click:function(a){return t.handleAddOrEdit("edit",e.row)}}},[t._v("編輯")]),a("el-button",{staticClass:"outline",attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.handleDel(e.row)}}},[t._v("刪除")])]}}])})],1)],1)]),a("el-dialog",{attrs:{"close-on-click-modal":!1,title:"新增",visible:t.addOuterVisible},on:{"update:visible":function(e){t.addOuterVisible=e}}},[a("el-scrollbar",{staticClass:"scrollbar-handle"},[a("div",{staticClass:"inputBox"},[a("div",{staticClass:"inputTitle"},[t._v("事件名稱")]),a("el-input",{staticStyle:{width:"350px"},attrs:{type:"textarea",rows:2,placeholder:"請輸入事件名稱"},model:{value:t.eventNameInput,callback:function(e){t.eventNameInput=e},expression:"eventNameInput"}})],1),a("div",{staticClass:"inputBox"},[a("div",{staticClass:"inputTitle"},[t._v("事件描述")]),a("el-input",{staticStyle:{width:"350px"},attrs:{type:"textarea",rows:2,placeholder:"請輸入事件描述"},model:{value:t.inputDescription,callback:function(e){t.inputDescription=e},expression:"inputDescription"}})],1),a("div",{staticClass:"inputBox"},[a("div",{staticClass:"inputTitle"},[t._v("行事曆類別")]),a("el-select",{attrs:{placeholder:"請選擇行事曆類別"},model:{value:t.eventCategorySelete,callback:function(e){t.eventCategorySelete=e},expression:"eventCategorySelete"}},[a("el-option",{attrs:{value:"111"}},[t._v("111111")]),a("el-option",{attrs:{value:"2222"}},[t._v("222222")])],1)],1),a("div",{staticClass:"inputBox"},[a("div",{staticClass:"inputTitle"},[t._v("顯示時間")]),a("el-date-picker",{attrs:{type:"daterange","range-separator":"~","start-placeholder":"開始顯示時間","end-placeholder":"結束顯示時間"},model:{value:t.showDate,callback:function(e){t.showDate=e},expression:"showDate"}})],1),a("div",{staticClass:"inputBox"},[a("div",{staticClass:"inputTitle"},[t._v("會議/活動時間")]),a("el-date-picker",{attrs:{type:"daterange","range-separator":"~","start-placeholder":"會議/活動開始時間","end-placeholder":"會議/活動結束時間"},model:{value:t.eventDate,callback:function(e){t.eventDate=e},expression:"eventDate"}})],1),a("div",{staticClass:"inputBox"},[a("div",{staticClass:"inputTitle"},[t._v("會議/活動地址")]),a("el-input",{staticStyle:{width:"700px"},attrs:{placeholder:"請輸入會議/活動地點"},model:{value:t.eventSiteInput,callback:function(e){t.eventSiteInput=e},expression:"eventSiteInput"}})],1),a("div",{staticClass:"inputBox"},[a("div",{staticClass:"inputTitle"},[t._v("連結")]),a("el-input",{staticStyle:{width:"700px"},attrs:{placeholder:"請輸入會議/活動連結"},model:{value:t.eventUrlInput,callback:function(e){t.eventUrlInput=e},expression:"eventUrlInput"}})],1),a("div",{staticClass:"inputBox"},[a("div",{staticClass:"inputTitle"},[t._v("上傳文件")]),a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("選擇上傳文件")])],1)],1),a("div",{staticClass:"inputBox",staticStyle:{"align-items":"flex-start"}},[a("div",{staticClass:"inputTitle"},[t._v("參與人員")]),a("div",[a("el-checkbox",{staticClass:"relatedCheck",model:{value:t.isRelated,callback:function(e){t.isRelated=e},expression:"isRelated"}},[t._v("是否關聯")]),a("div",{staticClass:"selectBox"},[a("el-select",{attrs:{placeholder:"單位一"},model:{value:t.unit1,callback:function(e){t.unit1=e},expression:"unit1"}},[a("el-option",{attrs:{value:"111"}},[t._v("單位1")])],1),a("el-select",{attrs:{placeholder:"單位二"},model:{value:t.unit2,callback:function(e){t.unit2=e},expression:"unit2"}},[a("el-option",{attrs:{value:"111"}},[t._v("單位2")])],1),a("el-select",{attrs:{placeholder:"單位三"},model:{value:t.unit3,callback:function(e){t.unit3=e},expression:"unit3"}},[a("el-option",{attrs:{value:"111"}},[t._v("單位3")])],1)],1)],1)]),a("div",{staticClass:"inputBox",staticStyle:{"align-items":"flex-start"}},[a("div",{staticClass:"inputTitle"}),a("div",{staticClass:"selectBox"},[a("el-select",{attrs:{placeholder:"人員"},model:{value:t.member,callback:function(e){t.member=e},expression:"member"}},[a("el-option",{attrs:{value:"YT"}},[t._v("YT")])],1),a("el-select",{attrs:{placeholder:"職稱"},model:{value:t.memberTitle,callback:function(e){t.memberTitle=e},expression:"memberTitle"}},[a("el-option",{attrs:{value:"memberTitle"}},[t._v("校長")])],1),a("el-select",{attrs:{placeholder:"Role"},model:{value:t.rloe,callback:function(e){t.rloe=e},expression:"rloe"}},[a("el-option",{attrs:{value:"Role"}},[t._v("Role")])],1)],1),a("el-button",[t._v("加入")])],1),a("div",{staticClass:"inputBox",staticStyle:{"align-items":"flex-start"}},[a("div",{staticClass:"inputTitle"}),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData2}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"title",label:"職稱",width:"180"}}),a("el-table-column",{attrs:{prop:"unit",label:"單位"}}),a("el-table-column",{attrs:{prop:"",label:"刪除"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.delMember(e.row)}}},[t._v("刪除")])]}}])})],1)],1)]),a("el-dialog",{attrs:{width:"30%",title:"",visible:t.addInnerVisible,"append-to-body":""},on:{"update:visible":function(e){t.addInnerVisible=e}}},[a("p",[t._v("xxx已有活動，是否確認提交")]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addInnerVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addOrEditConfirm}},[t._v("提 交")])],1)]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addOuterVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addInnerVisible=!0}}},[t._v("提 交")])],1)],1),a("el-dialog",{attrs:{title:"替換人員",visible:t.changeDialogVisible,width:"30%"},on:{"update:visible":function(e){t.changeDialogVisible=e}}},[a("div",{staticClass:"changeInputBox"},[a("p",{staticClass:"changeInputTitle"},[t._v("原始人員")]),a("el-select",{attrs:{placeholder:"請選擇原始人員"},model:{value:t.changeMember,callback:function(e){t.changeMember=e},expression:"changeMember"}},[a("el-option",{attrs:{value:"YT"}})],1)],1),a("div",{staticClass:"changeInputBox"},[a("p",{staticClass:"changeInputTitle"},[t._v("替換人員")]),a("el-select",{attrs:{placeholder:"請選擇替換人員"},model:{value:t.newChangeMember,callback:function(e){t.newChangeMember=e},expression:"newChangeMember"}},[a("el-option",{attrs:{value:"AS"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.changeDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.changeDialogVisible=!1}}},[t._v("提 交")])],1)]),a("el-dialog",{attrs:{title:"匯入報表",visible:t.importDialogVisible,width:"30%"},on:{"update:visible":function(e){t.importDialogVisible=e}}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("選擇上傳文件")])],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.importDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.importDialogVisible=!1}}},[t._v("匯 入")])],1)],1)],1)},i=[],n={data:function(){return{eventNameInput:"",inputDescription:"",multipleSelection:[],changeMember:"",newChangeMember:"",member:"",memberTitle:"",rloe:"",isRelated:"",unit1:"",unit2:"",unit3:"",eventCategorySelete:"",eventUrlInput:"",eventSiteInput:"",showDate:[],eventDate:"",keyWordInput:"",tableData:[{eventName:"重大會議A",eventCategory:"重大事件",eventSite:"新北市板橋區板新路27號8樓如果字太多就會折行",showStartDate:"2020-05-01",showEndDate:"2020-06-01",eventStartDate:"2020-05-12",eventEndDate:"2020-05-22 ",emit:1},{eventName:"活動B",eventCategory:"活動",eventSite:"竹市板橋區板新路27號8樓如果字太多就會折行",showStartDate:"2020-05-02",showEndDate:"2019-07-01",eventStartDate:"2020-05-13",eventEndDate:"2020-05-22 ",emit:1},{eventName:"重大會議A",eventCategory:"重大事件",eventSite:"新北市板橋區板新路27號8樓如果字太多就會折行",showStartDate:"2019-05-03",showEndDate:"2020-06-01",eventStartDate:"2020-05-14",eventEndDate:"2020-05-22 ",emit:1}],tableData2:[{title:"主任",name:"王小虎",unit:"Unit1"},{title:"教師",name:"王小虎",unit:"Unit2"},{title:"教授",name:"王小虎",unit:"Unit3"},{title:"校長",name:"王小虎",unit:"Unit1"}],addOuterVisible:!1,addInnerVisible:!1,importDialogVisible:!1,changeDialogVisible:!1}},methods:{handleAddOrEdit:function(t,e){this.showDate=[],"add"===t||(this.eventNameInput=e.eventName,this.showDate[0]=e.showStartDate,this.showDate[1]=e.showEndDate),this.addOuterVisible=!this.addOuterVisible},handleCopy:function(){},handleEdit:function(){},handleDel:function(){this.$notify({title:"刪除成功",message:"已成功刪除該事件",type:"success"})},handleSelectionChange:function(t){this.multipleSelection=t},addOrEditConfirm:function(){this.addOuterVisible=!1,this.addInnerVisible=!1,this.$notify({title:"成功",message:"添加成功",type:"success"})}}},s=n,o=(a("5c8c"),a("2877")),r=Object(o["a"])(s,l,i,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-46d388fa.11322c7f.js.map