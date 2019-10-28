<template>
  <div class="contInfo">
    <div class="topHead">
      <div class="amap-page-container">
        <el-amap vid="amapDemo" :plugin="plugin" :zoom="zoom" :center="position">
          <el-amap-marker :position="position"></el-amap-marker>
        </el-amap>
      </div>
      <div class="topHat"></div>
    </div>
    <b-container class="bv-example-row" style="margin-top: 5px;">
      <b-row>
        <b-col style="padding: 0px 15px 20px;">
          <div class="departureLocation">
            <ul>
              <li>Отправка: <br>{{$route.params.contProps[0].DepartureStationName}}</li>
            </ul>
            <ul>
              <li>Прибытие: <br>{{$route.params.contProps[0].ArrivalStationName}}</li>
            </ul>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="operationState">
            <ul>
              <li>Станция операции: <br> <span>{{$route.params.contProps[0].OperationStationName}}</span></li>
            </ul>
            <ul>
              <li>Дата операции: <br><span>{{operationDate}}</span></li>
            </ul>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="operationState">
            <ul>
              <li>Операция: <br><span>{{$route.params.contProps[0].OperationName}}</span></li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Amap from './../components/mapview'
import moment from 'moment'

export default {
  components: {
    Amap,
  },
  data () {
    return {
      operationDate: '',
      position: [],
      locationMarker: [],
      departure: [],
      current: [],
      zoom: 12,
        center: [],
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
    this.current.push(this.$route.params.contProps[0].OperationStationLongitude, this.$route.params.contProps[0].OperationStationLatitude)
    this.departure.push(this.$route.params.contProps[0].DepartureStationLongitude, this.$route.params.contProps[0].DepartureStationLatitude)
    let b = this.$route.params.contProps[0].OperationDate.match(/\((.*)\)/)
    this.operationDate = moment(this.$route.params.contProps[0].OperationDate).format('DD/MM/YYYY');
    
    console.log('FSSS', b)
  },
  watch: {
    position() {
      console.log('aa',this.position)
    },
    current() {
      this.position = this.current
    }
  },
  methods: {
    changeLoc(e) {
      e === 'current' ? this.position = this.current : this.position = this.departure
    }
  }

}
</script>

<style scoped>
.amap-page-container {
      height: 350px;
    }
.contInfo {
  height: 100%;
  background: #fff;
}
.contInfo button {
   background: #3d97f8;
   color: white;
   border-radius: 50rem;
   padding: 10px 12px;
}
.contInfo button:focus {
  box-shadow: none;
}
/*007bff */
.amap-touch-toolbar .amap-zoomcontrol {
  bottom: -50px;
}
.topHead {
  position: relative;
}
.topHat {
  z-index: 999;
  height: 18px;
  background: #fff;
  position: absolute;
  bottom: -1px;
  border-top-left-radius: 27px;
  border-top-right-radius: 27px;
  width: 100%;
  -webkit-box-shadow: 0px -4px 18px -4px rgba(0,0,0,0.75);
  box-shadow: -1px -8px 14px -6px rgba(0,0,0,0.75);
}
.departureLocation {
  color: #898989;
  padding: 15px 0;
  display: flex;
  border: 1px solid;
  justify-content: space-around;
}
.departureLocation ul {
  margin: 0;
}
.arrivalLocation {
  background: #3d97f8;
  color: white;
  padding: 15px 0;
}
.arrivalLocation ul {
  margin: 0;
}
.operationState ul li span {
  color:#bcbcbc;
}
</style>