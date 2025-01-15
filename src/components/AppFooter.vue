<script>
export default {
    
}
</script>
<template>
    <footer class="bg-black">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="div vh-100 d-flex flex-column align-items-center justify-content-center">

                        <h2 class="text-white">Giacomo Accardi &#x24B8; 2025</h2>
                        <div class="foot-menu d-flex flex-column align-items-center gap-3 mt-5">
                            <!-- Router-link per "Chi sono?" -->
                            <router-link
                              class="td-none"
                              to="/chisono"
                            >
                              <span class="text-white menu-item">
                                Chi sono?
                              </span>
                            </router-link>
                            
                            <!-- Router-link per "Servizi" -->
                            <router-link
                              class="td-none"
                              to="/servizi"
                              >
                              <span class="text-white menu-item">
                                Servizi
                              </span>
                            </router-link>
                    
                            <!-- Router-link per "Contatti" -->
                            <router-link
                              class="td-none"
                              to="/contatti"
                              >
                              <span class="text-white menu-item">
                                Contatti
                              </span>
                            </router-link>
                          </div>
                          <p
                          class="text-white text-center mt-5">
                            e-mail: giacomo.accardi.lavoro@gmail.com <br>
                            telefono: +39 3286053096
                          </p>

                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss">
</style>