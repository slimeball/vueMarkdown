<template>
  <div class="vue-markdown-container">
    <textarea class="css-markdown typein-container" v-model="sendData" @keyup="typeIn()"></textarea>
    <textarea class="ds-n" v-model="markData"></textarea>
    <div class="css-markdown view-container" v-html="markData"></div>
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
  methods: {
    ajaxRaw(data) {
      service.post(this.$http, data).then(
        res => {
          this.markData = res;
        },
        status => {
          console.log(status)
        }
      );
    },
    typeIn() {
      setTimeout(() => {
        this.ajaxRaw(this.sendData);
      }, 1000);
    }
  }
};
</script>
<style lang="scss">
body,
textarea {
  margin: 0;
  padding: 0;
  font-family: "PingFang SC", "Microsoft YaHei", SimHei, Arial, SimSun;
  font-size: 1rem;
}
html,
body {
  height: 100%;
  width: 100%;
}
body {
  background-color: #ccc;
}
.ds-n {
  display: none;
}
.vue-markdown-container {
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 10px;
  .css-markdown {
    overflow-x: hidden;
    overflow-y: scroll;
    word-break: break-all;
    word-wrap: break-word;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border: 0;
    height: 96%;
    padding: 2%;
    &.typein-container {
      background-color: #272822;
      color: #fff;
      resize: none;
      outline: none;
    }
    &.view-container {
      background-color: #f7f7f7;
    }
  }
}
</style>
