<template>
  <div id="app">
    <router-view></router-view>
    <footer>
      <span><router-link class="link" :to="$router.pathTo">Members</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;</span>  
      <img v-for="(img, index) in imgs" :key="index" :src="img"></img>
    </footer>  
  </div>
</template>

<script>
import avatar1 from '@/assets/WechatIMG30-min.jpeg'
import avatar2 from '@/assets/WechatIMG31-min.jpeg'
import avatar3 from '@/assets/WechatIMG32-min.jpeg'
import avatar4 from '@/assets/WechatIMG33-min.jpeg'
import avatar5 from '@/assets/WechatIMG34-min.jpeg'
import avatar6 from '@/assets/WechatIMG35-min.jpeg'

export default {
  name: 'app',
  data () {
    return {
      imgs: [avatar6, avatar2, avatar1, avatar4, avatar3, avatar5]
    }
  },
  methods: {
    click () {
      console.log(this)
    }
  }
}
</script>

<style lang="scss">
html, body, #app {
  padding: 0;
  margin: 0;
  height: 100%;
  font-family: 'PingFangSC','helvetica neue','hiragino sans gb','arial','microsoft yahei ui','microsoft yahei','simsun','sans-serif';
  font-size: 14px;
}
footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 10px 20px;
  line-height: 40px;
  color: #fff;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  @media (max-width: 1020px) {
    display: none;
  }
  &::after {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: block;
    content: '';
    filter: blur(10px);
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
  span {
    font-size: 20px;
    vertical-align: middle;
  }
  img {
    width: 40px;
    vertical-align: middle;
    border-radius: 50%;
    border: #e9e9e9 1px solid;
    transition: all 0.2s linear;
    & + img {
      margin-left: 20px;
    }
    &:hover {
      transform: scale(1.5);
    }
  }
  .link {
    color: #fff;
    text-decoration: none;
  }
}
</style>
