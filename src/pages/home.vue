<template>
  <div class="mainBg">
    <div class="preloader" v-if="isLoading">
      <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>
    <div class="bgCover"></div>
    <b-container class="bv-example-row" v-on:click="closeSearch">
      <b-row>
        <b-col>
          <div class="companyLogo">
            <img src="./../assets/utlcWhite.png">
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="headText">
            <h3>Eurasian Rail Alliance</h3>
          </div>
        </b-col>
      </b-row>
      {{info}}
    </b-container>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div class="startButton">
            <b-button :class="[searchToggled ? hideButton : '']" v-on:click="toggleSearch" variant="primary">开始</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="bv-example-row" style="padding: 0;">
      <div class="formBlock" :class="[searchToggled ? formBlockToggle : '']">
        <b-row style="margin: 0;">
          <b-col>
            <div class="searchForm">
              <b-form @submit="submit">
                <b-form-group
                    id="input-group-1"
                    label=""
                    label-for="input-1"
                    description=""
                  >
                  <b-form-input
                    id="input-1"
                    v-model="contNum"
                    required
                    placeholder="输入号码"
                  ></b-form-input>
                </b-form-group>
                <div class="searchButton">
                  <b-button type="submit" variant="primary">搜索</b-button>
                </div>
              </b-form>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
    


</template>

<script>
import axios from 'axios'
import router from 'vue-router'

export default {
  name: 'app',
  data () {
    return {
      info: null,
      contNum: '',
      checked: [],
      searchToggled: false,
      formBlockToggle: 'formBlockToggle',
      hideButton: 'hideButton',
      isLoading: false

    }
  },
  mounted() { 

  },

  methods: {
    submit() {
      //GVCU5341964
      //TCNU1131546
      this.isLoading = true
      axios.post('https://outbound.utlc.com:4431/Service.svc/GetTrackingPublic', {
        ContNumber: this.contNum,
        OrderNumber: "",
        LangGUID:"FFD20A8A-CD48-4ACA-A25C-49003059741B" 
      })
      .then(response => {
        this.info = response.data.Tracking
        console.log(response.data.Tracking)
        // router.push({ name: 'user', params: { userId: '123' } })
        response.data.Tracking === null ? this.$router.push({ name: 'nfound'}) : this.$router.push({ name: 'container', params: { contProps: this.info } })
        this.isLoading = true
      })
      .catch(error => {
        console.log(error);
      });
    },
    toggleSearch() {
      this.searchToggled = true
    },
    closeSearch() {
      this.searchToggled = false
    }
  }
}
</script>

<style> 

.mainBg {
  height: 100vh;
  background-image: url('./../assets/main_bg_n.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.bgCover {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background-color: rgba(0, 80, 163, 0.55);
  filter: contrast(200%);
  position: absolute;
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
}
h1, h2 {
  font-weight: normal;
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

.companyLogo img {
  width: 100%;
  padding: 40px 40px 0 40px;
}
.searchForm {
  width: 70%;
  margin: 0 auto;
  position: absolute;
  top: 10vh;
  left: 0;
  right: 0;
}
.searchForm input {
  border: 1px solid #b2b2b2;
  border-radius: 9px;
  padding: 20px;
}
.headText {
  padding: 10px 40px;
  color: #fff;
}
.searchButton {
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchButton button{
  padding: 10px 30px;
  border-radius: 50rem;
}
.formBlock {
  background: #fff;
  position: absolute;
  width: 100%;
  height: 34vh;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  bottom: 0;
  left: 0;
  top: 100%;
  -webkit-transition-duration: 0.5s;
       -o-transition-duration: 0.5s;
          transition-duration: 0.5s;
  -webkit-transition-timing-function: cubic-bezier(0.6, 0.1, 0.15, 0.8);
       -o-transition-timing-function: cubic-bezier(0.6, 0.1, 0.15, 0.8);
          transition-timing-function: cubic-bezier(0.6, 0.1, 0.15, 0.8);;
}
.formBlockToggle {
  background: #fff;
  position: absolute;
  width: 100%;
  height: 34vh;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  bottom: 0;
  left: 0;
  top: 66%;
  -webkit-transition-duration: 0.5s;
       -o-transition-duration: 0.5s;
          transition-duration: 0.5s;
  -webkit-transition-timing-function: cubic-bezier(0.6, 0.1, 0.15, 0.8);
       -o-transition-timing-function: cubic-bezier(0.6, 0.1, 0.15, 0.8);
          transition-timing-function: cubic-bezier(0.6, 0.1, 0.15, 0.8);;
}
.hideButton{
  color: transparent!important;
  background: transparent!important;
  border: none!important;
}
.startButton {
  text-align: center;
}
.startButton button {
  padding: 15px 40px;
  border-radius: 50rem;
}
.startButton button:focus {
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0)!important;
}
.preloader {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  background: #000000a6;
  justify-content: center;
  z-index: 9999;
  align-items: center;
}
</style>
