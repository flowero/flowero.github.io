<template>
  <div id="app" class = "">
    <!--<div class="navbar navbar-default navbar-static-top">-->
    <div class="navbar">
      <img class = "logo" src="./assets/logo.png"><img src="./assets/logo01.png" class="logo02"><div class="logo03"><strong>0512-88869199</strong></div>
    </div>
    <div class = "headerImg">
      <img src="./assets/banner_20.png">
    </div>
    <router-view/><!--  表格以下 -->
    <div class="ui container">
     <div style="padding:20px 0;" id="app">
          <div class="panel panel-primary">
              <!--No.1 表格开始 @Ruby-->
              <table class="table table-bordered table-striped text-center" style= "table-layout: fixed;">
                  <thead>
                      <tr class = "mulu">
                          <th>时间</th>
                          <th>2018年9-10月</th>
                          <th>2018年11-12月</th>
                          <th>2019年1月</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class = "table-left">
                        <td style = "vertical-align: middle" class = 'img-holder'>
                          <img src="./assets/tubiao02.png" class="tubiao">学生
                        </td>
                        <td>1.加深难度拓展中三知识<br>2.参加月考总结月考错题<br>3.查漏补缺解决课程难点</td>
                        <td>1.参加期中考试<br>2.通过期中考试分析知识漏洞<br>3.根据期中考成绩找准定位</td>
                        <td>1.参加期末考试<br>2.各区一模试卷易错题整理<br>3.期末考后开始备战一模考</td>
                      </tr>
                      <tr class = "table-left">
                        <td style = "vertical-align: middle" class = 'img-holder'>
                          <img src = "./assets/tubiao01.png" class="tubiao">家长
                        </td>
                        <td>1.发现孩子错题难点及时解决<br>2.帮组孩子养成搜集错题习惯<br></td>
                        <td>1.及时记录孩子孩子考试成绩和排名<br>2.对各小升初政策要了解<br>3.初中学校情况要详细了解</td>
                        <td>1.了解个校自主招生情况<br>2.了解一模签约政策和变化</td>
                      </tr>
                      <tr class = "table-left">
                        <td style = "vertical-align: middle" class = 'img-holder'>
                          <img src = "./assets/tubiao03.png" class="tubiao">亚诺教育
                        </td>
                        <td>1.数理化秋季班上课<br>2.各区月考试卷整理分析<br>3.十一数理化难点突破短期班<br>4.各大初中信息详细介绍</td>
                        <td>1.期中考试各区试卷解析<br>2.期末考试复习公开课<br>3.期末备战计划+期末真题</td>
                        <td>1.一模备战与签约自招讲座<br>2.期末考试各区试卷解析<br>3.签约与自招相关资讯分享</td>
                      </tr>
                  </tbody>
              </table>
							<!--No.1 表格结束-->
							<!--No.2 表格开始-->
              <table align = "left" class="table table-bordered table-striped" style="table-layout:fixed;">
                  <thead>
                      <tr class = "mulu">
                          <th>时间</th>
                          <th>2019年2月</th>
                          <th>2019年3月</th>
                          <th>2019年4月</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class = "table-left">
                        <td style = "vertical-align: middle" class = 'img-holder'>
                          <img src = "./assets/tubiao02.png" class="tubiao">学生
                        </td>
                        <td>1.完成寒假作业<br>2.化学务必寒假前结束新课<br>3.综合复习备战一模考</td>
                        <td>1.中考报名<br>2.报名自主招生考试<br>3.自主招生备战（苏中国班，苏外英才班）</td>
                        <td>1.参加自主招生考试（苏中国班，苏外英才班）<br>2.参加英语口语考试<br>3.参加一模考试</td>
                      </tr>
                      <tr class = "table-left">
                        <td style = "vertical-align: middle" class = 'img-holder'>
                          <img src = "./assets/tubiao01.png" class="tubiao">家长
                        </td>
                        <td>1.协助孩子做好一模备战学习<br>2.开始参加各校一模招生活动<br>3.对比各初中学校重点班</td>
                        <td>1.关注自主招生报名信息<br>2.了解各初中重点班情况为一模签约做准备</td>
                        <td>1.其它自主招生考试报名（国科大班，费考通班等）<br>2.综合一模成绩关注签约动态</td>
                      </tr>
                      <tr class = "table-left">
                        <td style = "vertical-align: middle" class = 'img-holder'>
                          <img src = "./assets/tubiao03.png" class="tubiao">亚诺教育
                        </td>
                        <td>1.数理化寒假班上课（数学物理一轮复习，化学学习酸碱盐结束新课）<br>2提供各校自主招生活动咨询</td>
                        <td>1.自主招生考试指导（苏中国班，苏外英才班）<br>2.各校一模签约情况介绍</td>
                        <td>1.一模考试备战+指导<br>2.自主招生考试信息汇总<br>3.自主招生考试指导</td>
                      </tr>
                  </tbody>
              </table>
							<!--No.2 表格结束-->
							<!--No.3 表格开始-->
              <table align = "left" class="table table-bordered table-striped" style="table-layout:fixed;">
                  <thead>
                      <tr class = "mulu">
                          <th>时间</th>
                          <th>2019年5月</th>
                          <th>2019年6月</th>
                          <th>2019年7月</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class = "table-left">
                        <td style = "vertical-align: middle" class = 'img-holder'>
                          <img src = "./assets/tubiao02.png" class="tubiao">学生
                        </td>
                        <td>1.进行中考志愿填报<br>2.参加二模考试<br>3.参加体育考试参加中考化学实验考查</td>
                        <td>1.参加中考<br>2.参加中考后自主招生</td>
                        <td>1.中考录取分数线公布<br>2.中考录取<br>3.学习小升初数理化知识</td>
                      </tr>
                      <tr class = "table-left">
                        <td style = "vertical-align: middle" class = 'img-holder'>
                          <img src = "./assets/tubiao01.png" class="tubiao">家长
                        </td>
                        <td>1.与各大初中进行签约<br>2.中考后自主招生报名<br>3.学习志愿填报规则（结合成绩理性填报志愿）</td>
                        <td>1.查询中考成绩<br>2.确定是否参加中考后自主招生</td>
                        <td>1.中考后自主招生报到<br>2.关注中考录取，分班情况</td>
                      </tr>
                      <tr class = "table-left">
                        <td style = "vertical-align: middle" class = 'img-holder'>
                          <img src = "./assets/tubiao03.png" class="tubiao">亚诺教育
                        </td>
                        <td>1.苏州中考志愿填报讲座（一对一模拟填志愿）<br>2中考考试试卷整理分析<br>3.备战中考，中考冲刺</td>
                        <td>1.中考真题搜集与分享<br>2.初中录取分数线及时同步<br>3.中考冲刺服务计划<br>4.中考服务一站通</td>
                        <td>1.初中录取分数线及分班公布<br>2.中一暑假班开始</td>
                      </tr>
                  </tbody>
              </table>
							<!-- 表格3结束 @Ruby -->
          </div>
      </div>
    </div><!-- 表格结束@如冰 -->
  </div>
</template>


<!--
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
button.ui.button {
  padding: 8px 3px 8px 10px;
  margin-top: 1px;
  margin-bottom: 1px;
}
</style>
-->
<!--
<template>
  <div id="app">
    <div class="navbar navbar-default navbar-static-top">
      <h1>亚诺教育</h1>
    </div>
    <div class = "headerImg">
      <img src="./assets/banner_20.png">
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
-->
<script>
import Vuetable from "vuetable-2";
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
import FieldsDef from "./FieldsDef.js";
import axios from "axios";
import _ from "lodash";
export default {
  name: "dataList",
  data() {
    return {
      user: {'student': '', 'parents': '','yanuo': ''},
      users: [
        //2018年9-10月
        {'student': '1.加深难度拓展中三知识2.参加月考总结月考错题3.查漏补缺解决课程难点', 'parents': '1.发现孩子错题难点及时解决2.帮组孩子养成搜集错题习惯', 'yanuo': '1.数理化秋季班上课2.各区月考试卷整理分析3.十一数理化难点突破短期班4.各大初中信息详细介绍'},
        //2018年11-12月
        {'student': '1.参加期中考试2.通过期中考试分析知识漏洞3.根据期中考成绩找准定位', 'parents': '1.及时记录孩子孩子考试成绩和排名2.对各小升初政策要了解3.初中学校情况要详细了解', 'yanuo': '1.期中考试各区试卷解析2.期末考试复习公开课3.期末备战计划+期末真题'},
        //2019年1月
        {'student':'1.参加期末考试2.各区一模试卷易错题整理3.期末考后开始备战一模考', 'parents':'1.了解个校自主招生情况2.了解一模签约政策和变化', 'yanuo': '1.一模备战与签约自招讲座2.期末考试各区试卷解析3.签约与自招相关资讯分享'}
      ],
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
      tableData3: [
        {
          id: '1',
          number: '112',
          a: '这是个数据',
          b: '这是个数据'
        }, {
          id: '2',
          number: '113',
          a: '这是个数据',
          b: '这是个数据'
        }
      ],
      tableLabel: [
          {label: '序号', prop: 'id'},
          {label: '场所编号', prop: 'number'},
          {label: '表头3', prop: 'a'},
          {label: '表头4', prop: 'b'},
      ]
    }
  },
};


</script>
<!--
<script>
import Vuetable from "vuetable-2";
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
import FieldsDef from "./FieldsDef.js";
import axios from "axios";
import _ from "lodash";

export default {
  name: 'hello',
  data () {
    return {
      user: {'student': '', 'parents': '','yanuo': ''},
      users: [
        //2018年9-10月
        {'student': '1.加深难度拓展中三知识2.参加月考总结月考错题3.查漏补缺解决课程难点', 'parents': '1.发现孩子错题难点及时解决2.帮组孩子养成搜集错题习惯', 'yanuo': '1.数理化秋季班上课2.各区月考试卷整理分析3.十一数理化难点突破短期班4.各大初中信息详细介绍'},
        //2018年11-12月
        {'student': '1.参加期中考试2.通过期中考试分析知识漏洞3.根据期中考成绩找准定位', 'parents': '1.及时记录孩子孩子考试成绩和排名2.对各小升初政策要了解3.初中学校情况要详细了解', 'yanuo': '1.期中考试各区试卷解析2.期末考试复习公开课3.期末备战计划+期末真题'},
        //2019年1月
        {'student':'1.参加期末考试2.各区一模试卷易错题整理3.期末考后开始备战一模考', 'parents':'1.了解个校自主招生情况2.了解一模签约政策和变化', 'yanuo': '1.一模备战与签约自招讲座2.期末考试各区试卷解析3.签约与自招相关资讯分享'}
      ]
    }
  }/*,
  methods: {
    insert: function () {
      this.users.push(this.user)
    },
    remove: function (index) {
      this.users.splice(index, 1)
    }
  }*/
}

/* 表格1以下@如冰 */
/*
export default {
  name: "app",
  components: {
    Vuetable,
    VuetablePagination
  },
  data() {
    return {
      fields: FieldsDef,
      perPage: 3,
      data: []
    };
  },

  watch: {
    data(newVal, oldVal) {
      this.$refs.vuetable.refresh();
    }
  },

  mounted() {
    axios.get("https://vuetable.ratiw.net/api/users").then(response => {
      this.data = response.data.data;
    });
  },

  methods: {
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    dataManager(sortOrder, pagination) {
      if (this.data.length < 1) return;

      let local = this.data;

      // sortOrder can be empty, so we have to check for that as well
      if (sortOrder.length > 0) {
        console.log("orderBy:", sortOrder[0].sortField, sortOrder[0].direction);
        local = _.orderBy(
          local,
          sortOrder[0].sortField,
          sortOrder[0].direction
        );
      }

      pagination = this.$refs.vuetable.makePagination(
        local.length,
        this.perPage
      );
      console.log('pagination:', pagination)
      let from = pagination.from - 1;
      let to = from + this.perPage;

      return {
        pagination: pagination,
        data: _.slice(local, from, to)
      };
    },
    onActionClicked(action, data) {
      console.log("slot actions: on-click", data.name);
    }
  }
};*/
</script>-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.headerImg{ width:100%; height:256px; align-items:center; justify-content:center;}
.container{max-width: 800px;}
.headerImg img{
  width:100%;
  height:256px;
  /*float: left;*/
}
.table-striped tbody tr:nth-of-type(2n+1) {
    background-color: transparent;
}
/* 表格格式 */
#app .table-left {text-align: left;}
.tubiao{width:40px; margin : 0 auto;}
.img-holder{text-align: center;display:table-cell;vertical-align:middle;}

.img-holder img{display: block;}
.mulu {background: #477fdc;color:white;}
.logo {
    margin-left: 16%;
    float: left;
}
.logo02 {
    width: 32px;
    height: 32px;
    float: left;
    margin-left: 48%;
}
.logo03 {
    float: left;
    margin: 5px 0 5px 5px;
    font-size: 20px;
}
/*.navbar{display: block;}*/
</style>