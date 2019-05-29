<template>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="panel-default">
            <h3>密卷<span class = "bold-red">猛料多</span></h3>
            <hr>
            <h5 class = 'align-left'>亚诺精心备战2019中考，全方位捕捉考点，狙击中考，这里有你想要的所有猛料！内含五年以来<span class = "bold-red">苏州中考真题</span>，更有亚诺老师精心编著的预测卷，以及<span class = "bold-red">3重要考点讲解视频</span>，让你在中考舞台上一站到底!机会不容错过！</h5>
          </div>
        </div>
        <div class = "col-md-6">
          <div class = "headerImg widthLimit img-left">
            <img src="../assets/zhongkaoyuce.jpg">
          </div>
        </div>
        <div class = "col-md-6">
          <strong>五年来所有真题+精心编著预测卷+重点讲解视频</strong>
          <div class = "panel-default">
            <ul class = clearfix>
              <li><strong>关于真题：</strong>精心为你准备了近年来苏州所有中考真题以及深入的解析。</li>
              <li><strong>关于预测卷：</strong>严密分析近年来中考考题，研究出卷人出题规律，帮你把握出题方向，重点押题，避开琐粹知识点，节约时间，冲击高分。预测卷立足于苏州中考，完全从命题特点出发，进行命题预测研究，给你一份中质量的中考预测卷。</li>
              <li><strong>关于讲解视频：</strong>亚诺集合多名资深的中三教师，具备多年从教经验的同时一直跻身在中考第一线，对中考考点了若指掌。现精心准备了教学讲解视频，帮你解决疑惑，查漏补缺，加深对考点的印象，提高复习效率。</li>
            </ul>
          </div>
        </div>
        <div class = "col-md-12 panel-default">
          <h3>初三年级<span class = "bold-red">定向培养表</span></h3>
        </div>
      </div>
    </div>
</template>
<script>
import Vuetable from 'vuetable-2'
export default {
  components: {
    Vuetable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{font-family:'Microsoft YaHei', Verdana, Arial, Helvetica, sans-serif}
.container {
    max-width: 800px;
}
.bold-red{font-weight:bold;color:red;}
.widthLimit img{width: 260px;}
.panel{padding:20px;}
.panel-default{padding: 20px 0}
h1, h2 {
  font-weight: normal;
}
h4{
  text-align: left;
}
hr{
  border-top:2px solid rgba(0,0,0,0.96);
}
a {
  color: #42b983;
}
.img-left{text-align: left;}

</style>
