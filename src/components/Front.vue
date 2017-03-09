<template>
<div>
  <h1>{{msg}}</h1>
  <ul v-for='item in filterItems'>
    <li class="entry-item">
      <div class='image'>
        <img :src="item.img" alt="item.img">
      </div>
      <div class="info">
        <div class="title">
          {{item.title}}
        </div>
        <div class="other">
          <div class="likes">
            <strong>{{item.likes}}</strong>喜欢
          </div>
          <div class="comments">
            <strong>{{item.comments}}</strong>评论
          </div>
          <div class="collection">

          </div>
          <div class="user">user
            <img src="" alt="">
          </div>
        </div>
      </div>
    </li>
  </ul>
  <button type="button" class="btn btn-info" @click="loadMore" v-show="items.length>limit">加载更多</button>
</div>
</template>

<script>
export default {
  name: 'front',
  props: {
    msg:{
      type: String,
      default: '我是来自front的'
    }
  },
  data() {
    return {
      items: [{
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '12',
          comments: 12
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        },
        {
          title: 'promises 很酷，但很多人并没有理解就在用了',
          img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2401881700,2342273471&fm=58',
          likes: '11',
          comments: 11
        }
      ],
      msg: 'front',
      limit: 5
    }
  },

  updated() {
    alert(this.limit);
  },
  computed:{
    filterItems:function(){
      return this.items.slice(0,this.limit);
    }
  },
  methods:{
    loadMore: function(){
      this.limit =this.limit+5;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
</style>
<style scoped>
.entry-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  padding: 0 1.5em;
  min-height: 92px;
  -webkit-transition: background-color .3s;
  transition: background-color .3s;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.info {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0;
  flex: 1 1 0;
  padding: 0;
  font-size: .7em;
  color: rgba(24, 37, 50, .3);
}

.title {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 2.8em;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0;
  flex: 1 1 0;
  font-size: 1.5em;
  line-height: 1.5em;
  font-weight: 600;
  letter-spacing: .02em;
  color: #333;
  min-width: 0;
  text-align: left;
}
.likes,.comments{
  float:left;
  margin-left: 10px
}
</style>
