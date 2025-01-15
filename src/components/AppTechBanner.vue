<script>
export default {
    
}
</script>
<template>
    <div class="banner d-flex p-3">
        <div class="banner-wrapper">
            <div class="logo-box">
                <img src="../assets/HTML5.png" alt="html">
                <span>HTML</span>
            </div>
            <div class="logo-box">
                <img src="../assets/CSS3.png" alt="css">
                <span>CSS</span>
            </div>
            <div class="logo-box">
                <img src="../assets/JavaScript.png" alt="js">
                <span>JavaScript</span>
            </div>
            <div class="logo-box">
                <img src="../assets/PHP.png" alt="PHP">
                <span>PHP</span>
            </div>
            <div class="logo-box">
                <img src="../assets/vuejs.png" alt="vue">
                <span>Vue.js</span>
            </div>
            <div class="logo-box">
                <img src="../assets/Laravel.png" alt="lar">
                <span>Laravel</span>
            </div>
            <div class="logo-box">
                <img src="../assets/Sass.png" alt="sass">
                <span>SASS</span>
            </div>
        </div>
    </div>
    <div class="banner2 d-flex p-3">
        <div class="banner-wrapper">
            <div class="logo-box2">
                <img src="../assets/HTML5.png" alt="html">
                <span>HTML</span>
            </div>
            <div class="logo-box2">
                <img src="../assets/CSS3.png" alt="css">
                <span>CSS</span>
            </div>
            <div class="logo-box2">
                <img src="../assets/JavaScript.png" alt="js">
                <span>JavaScript</span>
            </div>
            <div class="logo-box2">
                <img src="../assets/PHP.png" alt="PHP">
                <span>PHP</span>
            </div>
            <div class="logo-box2">
                <img src="../assets/vuejs.png" alt="vue">
                <span>Vue.js</span>
            </div>
            <div class="logo-box2">
                <img src="../assets/Laravel.png" alt="lar">
                <span>Laravel</span>
            </div>
            <div class="logo-box2">
                <img src="../assets/Sass.png" alt="sass">
                <span>SASS</span>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .banner{
        width: 100vw;
        height: 85px;
        overflow: hidden;  
        position: relative;
        background-color: rgb(255, 160, 116);
        .logo-box{
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 25px;
            flex-shrink: 0;

            img{
                height: 45px;
                margin-right: 5px;
            }
            span{
                font-size: 1.2rem;
                font-weight: bold;
                color: white;
            }

        }
        .banner-wrapper {
            display: flex;
            justify-content: space-between;
            width: 100%;
            animation: scroll-left 20s linear infinite; 
        }
    
        @keyframes scroll-left {
            0% {
                transform: translateX(100%); 
            }
            100% {
                transform: translateX(-100%); 
            }
        }
    }

    .banner2{
        width: 100vw;
        height: 55px;
        overflow: hidden;  
        position: relative;
        .logo-box2{
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 25px;
            flex-shrink: 0;

            img{
                height: 35px;
                margin-right: 5px;
                filter: saturate(0);
            }
            span{
                font-size: 1rem;
                font-weight: bold;
            }

        }
        .banner-wrapper {
            display: flex;
            justify-content: space-between;
            width: 100%;
            animation: scroll-left2 20s linear infinite; 
        }
    
        @keyframes scroll-left2 {
            0% {
                transform: translateX(-100%); 
            }
            100% {
                transform: translateX(100%); 
            }
        }
    }
</style>