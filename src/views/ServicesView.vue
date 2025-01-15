<script>
export default {
    data(){
        return{
            sitoVetrina: "Il mio obbiettivo è quello di ascoltarti e di trasferire la tua identità e la tua mission sul web! Costruisco il tuo sito senza utilizzare siti template o CMS, interamente su codice. Questo ti garantisce un sito web unico, che sia ideato e creato su misura per te.",
            webApp: "Hai bisogno di un menu digitale per il tuo ristorante? Hai bisogno di un software gestionale personalizzato per la tua azienda? Possiamo realizzarlo insieme! Interamente pensato e costruito per le tue necessità.",
            restyling: "Possiedi già un sito internet, ma non ti piace più e vorresti fare un restyling? Sentiamoci, ho le soluzioni giuste per te. "
        }
    }
}
</script>
<template>
    <div class="wrapper-servcs bg-colors">
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-12 mt-5">
                    <h1 class="text-white text-center p-5">I miei servizi &#128187;</h1>
                </div>
            </div>
            <div class="row px-5">
                <div class="col-4">
                    <div class="d-flex justify-content-center">
                        <div class="px-5">
                            <div class="text-white">
                                <h2 class="mb-3 bg-yellow">Sito vetrina &#127757;</h2>
                                <p>{{sitoVetrina}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="d-flex justify-content-center">
                        <div class="txt-block-services px-5">
                            <div class="text-white">
                                <h2 class="mb-3 bg-yellow">Web App &#128241;</h2>
                                <p v-html="webApp"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="d-flex justify-content-center">
                        <div class="px-5">
                            <div class="text-white">
                                <h2 class="mb-3 bg-yellow">Restyling &#128396;</h2>
                                <p v-html="restyling"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .wrapper-servcs{
        height: 100vh;
        overflow-y: scroll;
    }
    .txt-block-services{
        border-left: 5px solid white;
        border-right: 5px solid white;
    }
    p{
        font-size: 1.2rem;
    }
</style>