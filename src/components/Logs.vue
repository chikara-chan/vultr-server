<template>
  <div class="logs">
    <pre>{{logs}}</pre>
  </div> 
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        logs: ''
      }
    },
    watch: {
      logs () {
        if (this.$el.offsetHeight + this.$el.scrollTop === this.$el.scrollHeight) {
          this.$nextTick(() => {
            this.$el.scrollTop = this.$el.scrollHeight
          })
        }
      }
    },
    methods: {
      getLogs () {
        return axios.get('/api/logs')
          .then(res => {
            this.logs = res.data.logs
          })
      }
    },
    mounted () {
      const loop = () => {
        this.getLogs()
          .then(() => {
            this.timer = setTimeout(loop, 5000)
          })
      }

      loop()
    },
    destroyed () {
      clearTimeout(this.timer)
    }
  }
</script>

<style lang="scss">
  .logs {
    height: 100%;
    background: #333;
    color: #fff;
    padding: 10px;
    overflow: scroll;
    pre {
      margin: 0;
    }
  }
</style>
