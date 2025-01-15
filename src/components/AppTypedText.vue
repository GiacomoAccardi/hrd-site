<script>
export default {
  data() {
    return {
      text: "Benvenuto sul mio sito web,\n io sono Giacomo Accardi\n e sono un web developer!",
      displayedText: "", 
      typingIndex: 0,
    };
  },
  mounted() {
    this.startTypingEffect();
  },
  methods: {
    startTypingEffect() {
      const typingInterval = setInterval(() => {
        if (this.typingIndex < this.text.length) {
          if (this.text[this.typingIndex] === '\n') {
            this.displayedText += '<br>';
          } else {
            this.displayedText += this.text[this.typingIndex]; 
          }
          this.typingIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50); 
    },
  },
};
</script>
<template>
    <span class="wc-text" v-html="displayedText"></span>
</template>
<style lang="scss">
    .wc-text{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2rem;
        color: rgb(255, 255, 255);
        margin-left: 250px;
        white-space: nowrap;
        border-left: 15px solid rgb(255, 255, 84);
        padding-left: 15px;
    }
</style>