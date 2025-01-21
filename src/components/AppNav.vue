
<template>
    
  <nav class="navbar fixed-top fixedy navbar-expand-lg bg-black">
    <div class="container-fluid">
      <div class="content logo-box p-3">
        <router-link class="td-none" to="/"><h1>Giacomo Accardi</h1></router-link>
      </div>
      <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse p-3 gap-5" id="navbarNav">
        <div class="navbar-nav">
          <!-- Router-link per "Chi sono?" -->
          <router-link
          class="td-none me-2"
          to="/chisono"
          :class="{ selected: $route.path === '/chisono' }"
        >
          <span class="text-white menu-item">
            Chi sono?
          </span>
        </router-link>

        <!-- Router-link per "Contatti" -->
        <router-link
          class="td-none"
          to="/contatti"
          :class="{ selected: $route.path === '/contatti' }"
        >
          <span class="text-white menu-item">
            Contatti
          </span>
        </router-link>
        </div>
      </div>
    </div>
  </nav>
   
</template> 
  <style lang="scss">
    .td-none {
      text-decoration: none;
    }
    .logo-box {
      h1 {
        color: rgb(237, 237, 237);
        font-size: 1.8rem;
        font-weight: bolder;
        border-left: 10px solid rgb(255, 255, 84);
        padding-left: 5px;
      }
    }

    .menu-item {
      padding: 5px;
    }

    .bg-yellow-bt{
      background-color: rgb(255, 255, 84);
    }

    .selected {
      border-bottom: 5px solid rgb(255, 255, 84);
      transition: 0.4s;

      @media (max-width: 992px) {
        border-bottom: none;
        font-weight: bold ;
      }
    }

  </style>
  