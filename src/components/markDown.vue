<template>
  <div class="vue-markdown-container">
    <textarea class="css-markdown typein-container" v-model="sendData" @keyup="typeIn()"></textarea>
    <textarea class="ds-n" v-model="markData"></textarea>
    <div class="css-markdown view-container" v-html="markData">
      <!-- {{markData}} -->
    </div>
  </div>
</template>

<script>
import service from "../service/postMarkdownRaw";
export default {
  name: "markdown",
  data() {
    return {
      sendData: "",
      markData: ""
    };
  },
  mounted() {
    this.sendData = "### sss  > asdasdasdasdss!";
    // this.sendData = {
    //   text: "Hello world github/linguist#1 **cool**, and #1!",
    //   mode: "gfm",
    //   context: "github/gollum"
    // };
    // this.init(this.sendData);
  },
  methods: {
    init(data) {
      service.post(this.$http, data).then(
        data => {
          debugger
          this.markData = data;
        },
        status => {
          // console.log(status)
        }
      );
    },
    typeIn() {
      setTimeout(() => {
        this.init(this.sendData);
      }, 500);
    }
  }
};
</script>
<style lang="scss">
body,textarea {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
}
.ds-n{
  display: none;
}
.vue-markdown-container {
  background-color: #f7f7f7;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 5%;
  .css-markdown {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 100%;
    border-right: 1px #000 solid;
    height: 100%;
  }
}
</style>
