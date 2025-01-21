<script>
export default {

}
</script>
<template>
    <div class="wrapper-about bg-black d-flex justify-content-center align-items-center flex-column p-5">
        <h1 class="txt-block text-white mt-5 p-5 mb-5">Vuoi contattarmi? Ecco come &#128222;</h1>
        <h4 class="bg-yellow mb-3">Vuoi contattarmi tramite mail? &#128231;</h4>
        <p class="text-white mb-5">giacomo.accardi.lavoro@gmail.com</p>
        <h4 class="bg-yellow mb-3">Vuoi fare una chiamata conoscitiva? &#128241;</h4>
        <p class="text-white mb-5">+39 3296053096</p>
        <h4 class="bg-yellow mb-3">Vogliamo parlarne di persona? &#129309;</h4>
        <p class="text-white ">Mi trovi a Palermo!</p>
    </div>
</template>
<style lang="scss">
.wrapper-about {
    height: 100vh;
    @media(max-width: 768px) {
        margin-top: 85px;
    }
}

.txt-block {
    border: 5px solid rgb(255, 255, 255);
}
</style>