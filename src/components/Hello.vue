<template>
  <el-amap 
    class="amap"
    :vid="vid"
    :mapStyle="mapStyle"
    :center="center"
    :zoom="zoom"
    :plugin="plugin">
    <el-amap-marker :position="marker.position" :events="events"></el-amap-marker>
    <el-amap-info-window :position="window.position" :content="window.content" 
      :visible="window.visible" :events="window.events">
    </el-amap-info-window>
  </el-amap>
</template>

<script>
  export default {
    data () {
      return {
        vid: 'vid',
        mapStyle: 'fresh',
        center: [124, 35],
        zoom: 5,
        events: {
          mouseover: () => {
            this.window.visible = true
          },
          mouseout: () => {
            this.window.visible = false
          }
        },
        marker: {
          position: [139.80732617187523, 35.679977850249344]
        },
        plugin: [
          {
            pName: 'MapType',
            defaultType: 0
          },
          {
            pName: 'Geolocation',
            events: {
              init (o) {
                o.getCurrentPosition()
              }
            }
          }
        ],
        window: {
          position: [139.80732617187523, 35.679977850249344],
          content: `
            <p>Location: Tokyo <span class="fonticon_cm_jp"></span></p>
            <p>Address: 45.76.49.153</p>
            <p>Netmask: 255.255.254.0</p>
            <p>Gateway: 45.76.48.1</p>
            <p>OS: CentOS 7 x64</p>
            <p>CPU: 1 vCore</p>
            <p>RAM: 1024 MB</p>
            <p>Storage: 25 GB SSD</p>
            <p>Bandwidth: 1000 GB</p>
          `,
          visible: false
        }
      }
    }
  }
</script>

<style lang="scss">
  .amap {
    height: 100%;
    .amap-info {
      .amap-info-content {
        position: relative;
        left: 100px;
        top: 240px;
        background: rgba(0, 0, 0, 0.5);
        box-shadow: none;
        border: none;
        color: #fff;
        padding: 14px;
        p {
          margin-top: 5px;
          margin-bottom: 0;
          &:first-child {
            margin-top: 0;
          }
          .fonticon_cm_jp {
              background-image: url(https://my.vultr.com/_images/flags/flagsm_jp.png);
              display: inline-block;
              height: 18px;
              width: 27px;
              border-radius: 3px;
              vertical-align: middle;
          }
        }
      }
    }
    .amap-maptype-list, .amap-logo, .amap-copyright, .amap-info-close, .amap-info-sharp {
      display: none !important;
    }
    .amap-geolocation-con {
      bottom: 10px !important;
    }
  }
</style>
