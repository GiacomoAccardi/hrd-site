<script>
export default {

}
</script>
<template>
  <div class="img-cont">
    <div class="over-me">
      <span>PASSA QUI SU</span>
      <span class="mt-2"> &#x25B2; </span>
    </div>
    <div id="hiding-txt">
      <p>Da sempre appassionato di informatica e con una forte inclinazione per la creatività, ho deciso di
        intraprendere il percorso nel mondo della programmazione.</p>
      <span class="upper">&#8221;</span>
    </div>
  </div>
</template>
<style lang="scss">
.img-cont {
  background-image: url(../assets/me.jpeg);
  background-repeat: no-repeat;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background-position: 80%;
  background-size: 620px;
  margin-right: 100px;
  position: static;
  animation: appearing 4s forwards;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: 1s;
  display: flex;
  align-items: end;
  justify-content: center;

  .over-me {
    color: rgb(255, 255, 255);
    right: 294px;
    bottom: 148px;
    animation: glowin 8s infinite;
    text-align: center;
    margin-bottom: 20px;
    font-weight: light;
    display: flex;
    flex-direction: column;
  }

  @keyframes glowin {
    0% {
      opacity: 0;
    }

    25% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    75% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  #hiding-txt {
    display: none;
    color: transparent;
  }

  &:hover {
    height: 350px;
    border-radius: 8%;
    background-color: rgb(123, 24, 67);
    background-image: none;
    transition: 1s;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    padding: 25px;
    display: block;

    .over-me {
      display: none;
    }

    #hiding-txt {
      display: block;
      color: white;
      animation: txtappearing 6s;
      font-size: 0.9rem;
      position: relative;

      .upper {
        position: absolute;
        font-size: 8rem;
        font-family: Arial, Helvetica, sans-serif;
        left: 225px;
        top: 235px;
        color: rgb(58, 11, 32);
      }

      @keyframes txtappearing {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }
    }
  }
}

@keyframes appearing {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>