<template>
<div>
  <h1>{{msg}}</h1>
  <!-- <ul class="entries entry-list" v-for='item in items'>
    <li class="entry-item">
      <div class="screenshot" style="background-image: url(&quot;https://dn-mhke0kuv.qbox.me/1d23086493429c4cf41b.png?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1&quot;);"></div>
      <div class="entry-info">
        <div class="info-row">
          <div class="entry-title-box"><a target="_blank" class="entry-title" href="https://www.zhihu.com/question/55638561/answer/145625860" title="用爬虫揭露优信二手车车源量造假事实">用爬虫揭露优信二手车车源量造假事实</a></div>
          <div class="entry-date-box">
            <div class="entry-date">{{item.data}}</div>
          </div>
        </div>
        <div class="info-row">
          <div class="meta-badge likes clickable">
            <div class="icon icon-likes iconfont icon-xlcollection"></div>
            <div class="count">{{item.likes}}</div>
          </div>
          <div class="meta-badge comments clickable">
            <div class="icon icon-comments iconfont icon-xlchatbox"></div>
            <div class="count">{{item.comments}}</div>
          </div>
          <div class="meta-badge collection clickable"><span class="text">收藏</span></div>
          <div class="meta-tag-box">
            <div class="meta-tag">推荐</div>
            <div class="meta-tag clickable">数据库</div>
            <div class="meta-tag clickable">爬虫</div>
          </div>
          <div class="user-avatar" style="background-image: url(&quot;https://dn-mhke0kuv.qbox.me/a81953892977e557b98a.jpeg?imageView2/1/w/50/h/50/q/85/format/jpg/interlace/1&quot;);"></div>
        </div>
      </div>
    </li>
  </ul> -->
</div>
</template>

<script>
export default {
  name: 'front',
  data() {
    return {
        items:[],
        msg:'front'
    }
  },

  mounted() {

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
.entry-list {
    padding: 1em 0;
}
*, :after, :before {
    box-sizing: border-box;
    outline: none;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.entry-info {
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
    color: rgba(24,37,50,.3);
}
.info-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-width: 0;
}
.entry-title-box {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0;
    flex: 1 1 0;
    font-size: 1.5em;
    line-height: 1.5em;
    font-weight: 600;
    letter-spacing: .02em;
    color: #333;
    min-width: 0;
}
.ellipsis, .entry-title-box {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.entry-date-box{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-left: 8em;
    color: rgba(24,37,50,.3);
}
.meta-tag {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0 .25em;
    padding: 0 .8em;
    height: 25px;
    letter-spacing: .01em;
    border-radius: 1px;
    background-color: hsla(0,0%,95%,.3);
    -webkit-transition: all .3s;
    transition: all .3s;
}
.meta-tag-box, .meta-tag {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.meta-badge.clickable:not(.true):hover {
    color: #9f9f9f;
    background-color: hsla(0,0%,95%,.5);
}
.meta-badge {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    padding: 0 .8em;
    height: 25px;
    line-height: 1;
    border: 1px solid #f1f1f1;
    border-radius: 1px;
    background-color: #fff;
    -webkit-transition: color,border-color,background-color .3s;
    transition: color,border-color,background-color .3s;
}
.meta-badge.comments[_v-99baada6], .meta-badge.entry-action[_v-99baada6] {
    margin-left: -1px;
}
.meta-badge{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    padding: 0 .8em;
    height: 25px;
    line-height: 1;
    border: 1px solid #f1f1f1;
    border-radius: 1px;
    background-color: #fff;
    -webkit-transition: color,border-color,background-color .3s;
    transition: color,border-color,background-color .3s;
}
.screenshot {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-right: 1.5em;
    width: 82px;
    height: 82px;
    background: 50%/cover;
    background-color: #f8f9fa;
    border-radius: 2px;
}
</style>
