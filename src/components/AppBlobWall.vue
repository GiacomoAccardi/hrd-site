<script>
export default {
    
}
</script>
<template>
    <div class="absolute">
        <div class="absolute inset-0 justify-content-center">
            <div class="bg-shape1 bg-teal opacity-50"></div>
            <div class="bg-shape2 bg-three opacity-50"></div>
            <div class="bg-shape1 bg-purple opacity-50"></div>
        </div>
    </div>
</template>
<style lang="scss">
    .absolute{
        position: absolute;
        top: 50px !important;
        inset: 0;
        justify-content: center;
        display: inline-flex;
        flex-direction: row;
    }
    .bg-shape1{
        height: 400px;
        width: 400px;
        border-radius: 9999px;
        position: relative;
        animation: one 10s infinite;
        filter: blur(100px);
    }
    .bg-shape2 {
        height: 300px;
        width: 300px;
        border-radius: 9999px;
        position: relative;
        animation: two 10s infinite;
        filter: blur(100px);
    }
    @keyframes one {
        0% { transform: translate(0, 0); }
        25% { transform: translate(-100px, 70px); }
        50% { transform: translate(20px, 150px); }
        75% { transform: translate(50px, 100px); }
        100% { transform: translate(0, 0); }
    }
    @keyframes two {
        0% { transform: translate(0, 0); }
        25% { transform: translate(50px, 10px); }
        50% { transform: translate(100px, 50px); }
        75% { transform: translate(50px, 100px); }
        100% { transform: translate(0, 0); }
    }
    .opacity-50{
        opacity: .5;
    }
    .bg-teal{
         background-color: rgb(215, 0, 79);
    }
    .bg-purple{
        background-color: rgb(140, 0, 215); 
   }
   .bg-three{
    background-color: rgb(86, 86, 255);
   }
</style>