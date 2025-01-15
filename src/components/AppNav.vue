<template>
    <header>
      <div class="d-flex p-3 justify-content-between align-items-center">
        <div class="content logo-box">
          <router-link class="td-none" to="/"><h1>Giacomo Accardi</h1></router-link>
        </div>
        <div class="menu d-flex align-items-center gap-3">
          <!-- Router-link per "Chi sono?" -->
          <router-link
            class="td-none"
            to="/chisono"
            :class="{ selected: $route.path === '/chisono' }"
          >
            <span class="text-white menu-item">
              Chi sono?
            </span>
          </router-link>
          
          <!-- Router-link per "Servizi" -->
          <router-link
            class="td-none"
            to="/servizi"
            :class="{ selected: $route.path === '/servizi' }"
          >
            <span class="text-white menu-item">
              Servizi
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
    </header>
  </template> 
  <style lang="scss">
    .td-none {
      text-decoration: none;
    }
    header {
      background: rgba(0, 0, 0, 0.169);
      position: fixed;
      z-index: 2;
      width: 100vw;
  
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
    }
  
    .selected {
      border-bottom: 5px solid rgb(255, 255, 84);
      transition: 0.4s;
    }
  </style>
  