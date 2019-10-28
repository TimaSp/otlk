<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :plugin="plugin" :zoom="zoom" :center="center">
      <el-amap-marker :position="marker.position"></el-amap-marker>
    </el-amap>
  </div>
</template>

  <style>
    .amap-page-container {
      height: 350px;
    }
  </style>

  <script>
    const exampleComponents = {
      props: ['text'],
      template: `<div>text from  parent: {{text}}</div>`
    }
    export default {
      props: ['cc'],
      data() {
        return {
          zoom: 12,
          center: [],
          marker: {
            position: []
          },
          plugin: [{
            pName: 'ToolBar',
            events: {
              init(instance) {
                // console.log(instance);
              }
            }
          }]
        }
      },
      mounted() {
        this.marker.position = this.cc
        this.center = this.cc
      },
      watch: {
        cc() {
          this.marker.position = this.cc
          console.log(this.marker.position)
        }
      },
      methods: {
        
      }
    }
</script>