<script>
export default {
  data() {
    return {
      width: window.innerWidth, // Impostiamo la larghezza iniziale
      spansSlow: [],
      spansFast: []
    };
  },
  mounted() {
    // Aggiungiamo gli event listener al montare del componente
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('resize', this.handleWindowResize);
    
    // Selezioniamo gli elementi una volta che il componente è montato
    this.spansSlow = document.querySelectorAll('.spanSlow');
    this.spansFast = document.querySelectorAll('.spanFast');
  },
  beforeDestroy() {
    // Rimuoviamo gli event listener prima di distruggere il componente
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('resize', this.handleWindowResize);
  },
  methods: {
    handleMouseMove(e) {
      let normalizedPosition = e.pageX / (this.width / 2) - 1;
      let speedSlow = 100 * normalizedPosition;
      let speedFast = 200 * normalizedPosition;
      
      this.spansSlow.forEach((span) => {
        span.style.transform = `translate(${speedSlow}px)`;
      });
      
      this.spansFast.forEach((span) => {
        span.style.transform = `translate(${speedFast}px)`;
      });
    },
    handleWindowResize() {
      // Ricalcoliamo la larghezza quando la finestra viene ridimensionata
      this.width = window.innerWidth;
    }
  }
};
</script>
<template>
    <div>
        <div class="line">
          <div class="left">
            <div class="content">
              <span class="spanSlow spanny">tecnologie che</span>
            </div>
          </div><!--
          --><div class="right">
            <div class="content">
              <span class="spanSlow spanny">tecnologie che</span>
            </div>
          </div>
          </div>
          <div class="line">
              <div class="left">
                <div class="content">
                  <span class="spanFast spanny">utilizzo di più!</span>
                </div>
              </div><!--
              --><div class="right">
                <div class="content">
                  <span class="spanFast spanny">utilizzo di più!</span>
                </div>
              </div>
            </div>
    </div>
</template>
<style lang="scss">
.line {
    width: 100vw;
  }
  .left, .right {
    width: 50vw;
    overflow: hidden;
    display: inline-block;
  }
  .left {
    color:rgb(255, 115, 50);
    transform: skew(0deg, -15deg);
  }
  .right {
    color: black;
    transform: skew(0deg, 15deg);
  }
  .left .content {
    width: 100vw;
    text-align: center;
  }
  .right .content {
    width: 100vw;
    text-align: center;
    transform: translate(-50vw);
  }
  .spanny {
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    font-size: 4rem;
    text-transform: uppercase;
    line-height: .8;
    transition: ease-out .6s;
  }
</style>