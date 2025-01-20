<script>
import serviceCard from '../components/serviceCard.vue';
export default {
    data() {
        return {
            sitoVetrina: "Il mio obbiettivo è quello di ascoltarti e di trasferire la tua identità e la tua mission sul web! Costruisco il tuo sito senza utilizzare siti template o CMS, interamente su codice. Questo ti garantisce un sito web unico, che sia ideato e creato su misura per te.",
            webApp: "Hai bisogno di un menu digitale per il tuo ristorante? Hai bisogno di un software gestionale personalizzato per la tua azienda? Possiamo realizzarlo insieme! Interamente pensato e costruito per le tue necessità.",
            restyling: "Possiedi già un sito internet, ma non ti piace più e vorresti fare un restyling? Sentiamoci, ho le soluzioni giuste per te. "
        }
    },
    components: {
        serviceCard
    }
}
</script>
<template>
    <div class="wrapper-servcs bg-colors d-flex justify-content-center align-items-center flex-wrap">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-white text-center mb-5">I miei servizi &#128187;</h1>
                </div>
                <div class="col-4">
                    <serviceCard title="Sito vetrina &#127757;" :text="sitoVetrina" class="p-3" />
                </div>
                <div class="col-4">
                    <serviceCard title="Web App &#128241;" :text="webApp" class="p-3 txt-block-services" />
                </div>
                <div class="col-4">
                    <serviceCard title="Restyling &#128396;" :text="restyling" class="p-3" />
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.wrapper-servcs {
    height: 100vh;
}

.txt-block-services {
    border-left: 5px solid white;
    border-right: 5px solid white;
}

p {
    font-size: 1.2rem;
}
</style>