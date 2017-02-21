<template>
<div class="hello">
  <h1 v-cloak>{{msg}}</h1>
  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="60"
        aria-valuemin="0" aria-valuemax="100" style="width: 40%;">
        <span class="sr-only">40% 完成</span>
    </div>
</div>
  <h2>创建模态框（Modal）</h2>
  <!-- 按钮触发模态框 -->
  <button class="btn btn-primary" data-toggle="modal" data-target="#myModal">模态框</button>
  <!-- 模态框（Modal） -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="myModalLabel">模态框标题</h4>
        </div>
        <div class="modal-body">在这里添加一些文本</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal -->
  </div>

  <button class="btn btn-warning" @click="load">按钮</button>
  <table class="table table-hover table-bordered">
    <caption>caption</caption>
    <thead>
      <tr>
        <th>x</th>
        <th>y</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="value in items">
        <td>{{value.x}}</td>
        <td>{{value.y}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import 'bootstrap'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: {}
    }
  },
  methods: {
    load: function() {
      this.$http.get('../../static/data.json').then((response) => {
        console.log(response.body);
        // this.$set('items', response.body);
        this.items = response.body;
      }, (response) => {
        console.log(response);
      });
    }
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
<style scoped>
h1 {
  font-weight: normal;
}
</style>
