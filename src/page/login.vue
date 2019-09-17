<template>
  <div
    class="login-wrapper"
    style="width:100%;height:100vh;overflow:hidden;"
  >
    <cube-scroll
      ref="scroll"
      :data="[]"
      :scroll-events="['scroll']"
      :options="options"
      @scroll="onScrollHandle"
      @pulling-down="onPullingDown"
    >
      <img src="https://dpubstatic.udache.com/static/dpubimg/RWEjWgWJ4x/jd_content.JPG">
      <template
        slot="pulldown"
        slot-scope="props"
      >
        <div
          v-if="props.pullDownRefresh"
          class="cube-pulldown-wrapper"
          :style="pullDownStyle"
        >
          <div class="pulldown-content">
            <img
              src="https://dpubstatic.udache.com/static/dpubimg/7d895941-251f-471f-abc4-3eca25762465.jpg"
              @load="onImgLoad"
            >
            <span v-if="props.beforePullDown">{{ pullDownTip }}</span>
            <template v-else>
              <span v-if="props.isPullingDown">正在更新...</span>
              <span v-else>更新成功</span>
            </template>
          </div>
        </div>
      </template>
    </cube-scroll>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      pullDownY: 0,
      triggerSurpriseFlag: false,
      pullDownStyle: '',
      options: {
        pullDownRefresh: {
          threshold: 60,
          stop: 40,
          txt: '更新成功'
        }
      }
    }
  },
  computed: {
    pullDownTip () {
      if (this.pullDownY <= 60) {
        return '下拉刷新...'
      } else if (this.pullDownY <= 90) {
        return '继续下拉有惊喜...'
      } else {
        return '松手得惊喜！'
      }
    },
    headerStyle () {
      return Math.min(1, Math.max(0, 1 - this.pullDownY / 40))
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    ...mapActions('user', ['getUserInfo']),
    onScrollHandle (pos) {
      // console.log(pos)
      this.pullDownY = pos.y
      if (pos.y > 0) {
        this.pullDownStyle = `top:${pos.y}px`
        this.triggerSurpriseFlag = false
        if (this.pullDownY > 90) {
          this.triggerSurpriseFlag = true
        }
      }
      // this.$refs.topHeader.style.opacity = this.headerStyle
    },
    onPullingDown () {
      if (this.triggerSurpriseFlag) {
        this.triggerSurprise = true
        this.$refs.scroll.forceUpdate()
        return
      }
      setTimeout(() => {
        this.$refs.scroll.forceUpdate()
      }, 1000)
    },
    surpriseHandle () {
      this.triggerSurpriseFlag = false
      this.triggerSurprise = false
      // this.$refs.topHeader.style.opacity = 1
      // go to other page
    },
    onImgLoad () {
      this.$refs.scroll.refresh()
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-wrapper{
  height:100vh;
  width: 100%;
  overflow: hidden;
  img{
    width: 100%;
  }
      // height: 50px
  .cube-pulldown-wrapper{
    transform: translateY(-100%);
    line-height: 0;
    .pulldown-content{
      width: 100%;
      span{
        position: absolute;
        bottom: 15px;
        left: 0;
        right: 0;
        margin: auto;
        width: 200px;
        text-align: center;
        color:red;
        font-size: 14px;
      }
    }
  }
}
.hello{

  font-size: 19px;
}
h3{
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
