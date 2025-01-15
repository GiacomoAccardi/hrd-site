<script>
import AppBlobWall from '../components/AppBlobWall.vue';
import AppTypedText from '../components/AppTypedText.vue';
import AppHomePortrait from '../components/AppHomePortrait.vue';
import AppTextAladdin from '../components/AppTextAladdin.vue';
import AppTechBanner from '../components/AppTechBanner.vue';
export default {
  components:{
    AppBlobWall,
    AppTypedText,
    AppHomePortrait,
    AppTextAladdin,
    AppTechBanner
  }
}
</script>
<template>
  <div class="app-cont">
    <!--Sezione di homepage-->
    <div id="welcome-section" class="wrapper bg-black">
      <AppBlobWall/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-6">
                    <div class="my-cont d-flex flex-column align-items-center justify-content-center">
                        <!-- <span class="title" v-html="displayedText"></span> -->
                      <AppTypedText />
                    </div>
                </div>
                <div class="col-6">
                    <div class="my-cont d-flex align-items-center justify-content-center">
                        <AppHomePortrait/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <!--Sentiamoci..-->
  <div id="sentiamoci" class="wrapper bg-violette">
    <div class="container-fluid">
      <div class="vh-100 d-flex flex-column justify-content-center align-items-center">
        <div class="card-cont mb-3 vw-100 d-flex flex-row justify-content-around align-items-center p-3">
          <div class="cardy p-3">
            <img class="card-img mb-3" src="../assets/3.jpg" alt="3"></img>
            <span class="text-white">Hai bisogno di un sito web o una web-app per la tua azienda?</span>
          </div>
          <div class="cardy p-3">
            <img class="card-img mb-3" src="../assets/1.jpeg" alt="1"></img>
            <span class="text-white">Hai bisogno di una pagina per promuovere il tuo prodotto online?</span>
          </div>
          <div class="cardy p-3">
            <img class="card-img mb-3" src="../assets/2.jpg" alt="2"></img>
            <span class="text-white">Hai bisogno di dare un nuovo look alla tua web-app?</span>
          </div>
        </div>
        <div class="row">
          <div class="contacts bg-black vw-100 p-5 d-flex flex-row align-items-center">
            <span class="text-white text-uppercase c-title">Sentiamoci!</span>
            <div class="d-flex flex-column">
              <span class="text-white c-sub">e-mail: giacomo.accardi.lavoro@gmail.com</span>
              <span class="text-white c-sub">Telefono: 3286053096</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--sezione "Tecnologie"-->
  <div id="tecnologie" class="wrapper bg-tech">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="my-cont d-flex flex-column justify-content-center align-items-center">
              <AppTextAladdin class="mt-5"/>
                <p class="tech-txt">Queste sono le tecnologie che studio e utilizzo <br> 
                per creare siti internet proprio come questo!
                </p>
              <AppTechBanner/>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>
<style lang="scss">
.app-cont{
  .wrapper{
    position: relative;
    // background-image: url(../assets/code.jpeg);
  }
  .my-cont{
    height: 100vh; 
  }
  #tecnologie, #welcome-section, #sentiamoci{
    scroll-snap-align: center;
  }
  .tech-txt{
    font-size: 1.2rem;
    font-weight: light;
    width: 100%;
    text-align: center;
  }
}
.cardy{
  background-color: transparent;
  width: 300px;
  min-height: 365px; 
  border-radius: 20px;
  transition: 1s;
  span{
    font-weight: bold;
  }
  &:hover{
    //width: 320px;
    transition: 1s;
  }
}
.vh100{
  height: 100vh;
}
.vw100{
  width: 100vw;
}
.contacts{

  .c-title{
    font-size: 3rem;
    font-weight: bolder;
    border-right: 15px solid white;
    width:fit-content;
    padding-right: 15px;
    margin-right: 20px;
  }
}
.card-img{
  width: 300px;
  height: 255px;
}
.card-cont{
  margin-top: 75px;
}
</style>