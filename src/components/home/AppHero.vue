<template>
    <div class="bg-black d-flex align-items-center">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                   <div class="box d-flex align-items-end justify-content-center py-5 p-md-3">
                        <h1 class="text-white title fw-bold">Giacomo Accardi, <br>Web Developer</h1>
                   </div>
                </div>
                <div class="col-12">
                    <div class="box d-flex flex-column align-items-center justify-content-start p-md-3">
                        <h1 class="fw-bold bg-yellow p-3">
                            Cerchi qualcuno che possa realizzare<br>
                            un sito web per la tua azienda?<br>
                            Hai bisogno di una finestra sul web <br>
                            e non sai a chi rivolgerti?
                        </h1>
                        <h2 class="fw-bold text-white py-5 p-md-5">
                            Vuoi che il tuo sito web rispecchi <br>
                            la tua indentità e lo stile <br>
                            del tuo progetto? 
                        </h2>
                    </div>
                </div>
                <div class="col-12">
                    <div class="box d-flex flex-column justify-content-start align-items-center">
                        <h1 class="text-yellow text-end title fw-bold">Trovo la <br> soluzione <br>giusta per te.</h1>
                        <h1 class="title2 text-white text-start">Possiamo costruire <br>
                            insieme:</h1>
                        <ul class="text-white p-4 p-md-3 fw-lighter">
                            <li>Un sito vetrina per il tuo <br>
                            prodotto o la tua attività</li>
                            <br>
                            <li class="text-end">Una Web App gestionale<br>
                            per la tua azienda, <br>
                            il tuo ristorante, <br>
                            il tuo blog.</li>
                            <br>
                            <li>Il tuo e-commerce.</li>
                        </ul>
                    </div>
                </div>
                <div class="col-12">
                    <div class="box d-flex flex-column align-items-center justify-content-start py-5 p-md-5">
                        <h1 class="fw-bold bg-yellow p-md-3">
                            Ci sono tantissimi validi Web Developer in giro!<br>
                            Perchè scegliere me?
                        </h1>
                        <h2 class="fw-light description text-white py-5 p-md-5">
                            Ti ascolto! <br>
                            <br>
                            Il mio obiettivo è capire quali sono le tue esigenze <br>
                            Realizzo il tuo sito web da zero, interamente a codice, <br>
                            proggettando e realizzando un sito web su misura per te <br>
                            rispettando la tua brand identity e la tua immagine. <br>
                            <br>
                            Il tuo sito sarà unico, personalizzato e responsive. <br>
                            Sarà visibile su desktop, tablet e smartphone. <br>
                            Ti seguirò anche dopo la realizzazione del sito web, <br>
                        </h2>
                        <h1 class="title py-5 p-md-5 text-yellow fw-bold">Sentiamoci.</h1>
                        <RouterLink to="/contatti" class="btn btn-outline-light fs-2">Contattami</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>
<style lang="scss">
    .box {
        min-height: 30vh;  
    }
    .title{
        font-size: 5rem; 
        @media (max-width: 768px) {
            font-size: 2.8rem;
          }
    }
    .title2{
        font-size: 3.5rem;
        @media (max-width: 768px) {
            font-size: 2rem;
          }
    }
    ul{
        font-size: 2rem;
        list-style: none;
        font-style: italic;
        @media (max-width: 768px) {
            font-size: 1.5rem;
          }
    }
    .text-yellow{
        color: rgb(255, 255, 84);
    }
</style>